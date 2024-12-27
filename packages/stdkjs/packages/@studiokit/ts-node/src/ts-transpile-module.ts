// Derived from
// https://github.com/microsoft/TypeScript/blob/ae1b3db8ceaae7e93bddffa1eed26309068249d7/src/services/transpile.ts

import Immutable = require('immutable');

import {
  ModuleKind,
  ModuleResolutionKind,
  type CompilerHost,
  type CompilerOptions,
  type Diagnostic,
  type SourceFile,
  type TranspileOptions,
  type TranspileOutput,
} from 'typescript';
import type { TSCommon } from './ts-compiler-types';

const optionsRedundantWithVerbatimModuleSyntax = new Set([
  'isolatedModules',
  'preserveValueImports',
  'importsNotUsedAsValues',
]);

/** @internal */
export function createTsTranspileModule(
  ts: TSCommon,
  transpileOptions: Pick<TranspileOptions, 'compilerOptions' | 'reportDiagnostics' | 'transformers'>
) {
  const {
    createProgram,
    createSourceFile,
    getDefaultCompilerOptions,
    getImpliedNodeFormatForFile,
    fixupCompilerOptions,
    transpileOptionValueCompilerOptions,
    getNewLineCharacter,
    fileExtensionIs,
    normalizePath,
    Debug,
    toPath,
    getSetExternalModuleIndicator,
    addRange,
    hasProperty,
    getEmitScriptTarget,
    getDirectoryPath,
  } = ts as any;

  const compilerOptionsDiagnostics: Diagnostic[] = [];

  const options: CompilerOptions = transpileOptions.compilerOptions
    ? fixupCompilerOptions(transpileOptions.compilerOptions, compilerOptionsDiagnostics)
    : {};

  // mix in default options
  const defaultOptions = getDefaultCompilerOptions();
  for (const key in defaultOptions) {
    if (hasProperty(defaultOptions, key) && options[key] === undefined) {
      options[key] = defaultOptions[key];
    }
  }

  for (const option of transpileOptionValueCompilerOptions) {
    // Do not set redundant config options if `verbatimModuleSyntax` was supplied.
    if (options.verbatimModuleSyntax && optionsRedundantWithVerbatimModuleSyntax.has(option.name)) {
      continue;
    }

    options[option.name] = option.transpileOptionValue;
  }

  // transpileModule does not write anything to disk so there is no need to verify that there are no conflicts between input and output paths.
  options.suppressOutputPathCheck = true;

  // Filename can be non-ts file.
  options.allowNonTsExtensions = true;

  const newLine = getNewLineCharacter(options);
  // Create a compilerHost object to allow the compiler to read and write files
  const compilerHost: CompilerHost = {
    getSourceFile: (fileName) => (fileName === normalizePath(inputFileName) ? sourceFile : undefined),
    writeFile: (name, text) => {
      if (fileExtensionIs(name, '.map')) {
        Debug.assertEqual(sourceMapText, undefined, 'Unexpected multiple source map outputs, file:', name);
        sourceMapText = text;
      } else {
        Debug.assertEqual(outputText, undefined, 'Unexpected multiple outputs, file:', name);
        outputText = text;
      }
    },
    getDefaultLibFileName: () => 'lib.d.ts',
    useCaseSensitiveFileNames: () => true,
    getCanonicalFileName: (fileName) => fileName,
    getCurrentDirectory: () => '',
    getNewLine: () => newLine,
    fileExists: (fileName): boolean => fileName === inputFileName || fileName === packageJsonFileName,
    readFile: (fileName) => (fileName === packageJsonFileName ? `{"type": "${_packageJsonType}"}` : ''),
    directoryExists: () => true,
    getDirectories: () => [],
  };

  let inputFileName: string;
  let packageJsonFileName: string;
  let _packageJsonType: 'module' | 'commonjs';
  let sourceFile: SourceFile;
  let outputText: string | undefined;
  let sourceMapText: string | undefined;

  return transpileModule;

  /*
   * This function will compile source text from 'input' argument using specified compiler options.
   * If not options are provided - it will use a set of default compiler options.
   * Extra compiler options that will unconditionally be used by this function are:
   * - isolatedModules = true
   * - allowNonTsExtensions = true
   * - noLib = true
   * - noResolve = true
   */
  function transpileModule(
    input: string,
    transpileOptions2: TranspileOptions,
    packageJsonType: 'module' | 'commonjs' = 'commonjs'
  ): TranspileOutput {
    // if jsx is specified then treat file as .tsx
    inputFileName =
      transpileOptions2.fileName ||
      (transpileOptions.compilerOptions && transpileOptions.compilerOptions.jsx ? 'module.tsx' : 'module.ts');
    packageJsonFileName = getDirectoryPath(inputFileName) + '/package.json';
    _packageJsonType = packageJsonType;

    sourceFile = createSourceFile(inputFileName, input, {
      languageVersion: getEmitScriptTarget(options),
      impliedNodeFormat: getImpliedNodeFormatForFile(
        toPath(inputFileName, '', compilerHost.getCanonicalFileName),
        /*cache*/ undefined,
        compilerHost,
        options
      ),
      setExternalModuleIndicator: getSetExternalModuleIndicator(options),
    });
    if (transpileOptions2.moduleName) {
      sourceFile.moduleName = transpileOptions2.moduleName;
    }

    if (transpileOptions2.renamedDependencies) {
      (sourceFile as any).renamedDependencies = new Map(Object.entries(transpileOptions2.renamedDependencies));
    }

    // Output
    outputText = undefined;
    sourceMapText = undefined;

    /**
     * motivation:
     * - https://github.com/microsoft/TypeScript/issues/41513 and https://github.com/microsoft/TypeScript/issues/44040 ;
     * 
     */
    const optionsAdjusted = (
      (() => {
        const o0 = options ;
        const o1 = (
          withEmitModuleTypeReadjusted1(o0, packageJsonType)
        ) ;
        return o1 ;
      })()
    ) ;

    const program = createProgram([inputFileName], optionsAdjusted, compilerHost);

    const diagnostics = compilerOptionsDiagnostics.slice();

    if (transpileOptions.reportDiagnostics) {
      addRange(/*to*/ diagnostics, /*from*/ program.getSyntacticDiagnostics(sourceFile));
      addRange(/*to*/ diagnostics, /*from*/ program.getOptionsDiagnostics());
    }
    /**
     * remove/omit/strip `TS5110`(s) ({@link isEmitModuleTypeMismatchFromModuleResolutionKindDiagnosticItem}) ;
     * we're forced to
     * hard-set `module` to different values, depending on end-level parameter {@link packageJsonType}, and irrespective of `moduleResolution` in {@link options}
     * 
     * see docs for above {@link optionsAdjusted }
     * 
     */
    diagnostics.splice(0, diagnostics.length, ...(
      Immutable.Seq(diagnostics)
      .filter(e => {
        if (isEmitModuleTypeMismatchFromModuleResolutionKindDiagnosticItem(e) ) { return false ; }
        return true ;
      } )
    ) ) ;
    // Emit
    program.emit(
      /*targetSourceFile*/ undefined,
      /*writeFile*/ undefined,
      /*cancellationToken*/ undefined,
      /*emitOnlyDtsFiles*/ undefined,
      transpileOptions.transformers
    );

    if (outputText === undefined) return Debug.fail('Output generation failed');

    return { outputText, diagnostics, sourceMapText };
  }

  //
  /**
   * {@link withEmitModuleTypeReadjusted1}
   * 
   * https://github.com/microsoft/TypeScript/issues/41513 and https://github.com/microsoft/TypeScript/issues/44040
   * 
   * if you use this,
   * be sure to
   * remove/omit/strip `TS5110`(s) ({@link isEmitModuleTypeMismatchFromModuleResolutionKindDiagnosticItem})
   * from `diagnostics`
   * 
   */
  function withEmitModuleTypeReadjusted1( ...[{ module: mv0, ...etc }, mt]: [CompilerOptions, mt: "module" | "commonjs"] ): CompilerOptions {
    return {
      ...etc ,
      module: (
        (mt === "commonjs") ? ModuleKind.CommonJS :
        (mt === "module"  ) ? ModuleKind.ESNext   :
        mv0
      ) ,
    } ;
  }
}

const isEmitModuleTypeMismatchFromModuleResolutionKindDiagnosticItem = (

  function (...[e]: [Diagnostic])
  {
    return (
      e.code === 5110
    ) ;
  }
) ;
