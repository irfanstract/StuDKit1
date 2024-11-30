import { relative, basename, extname, dirname, join } from 'path';
import { builtinModules, Module } from 'node:module';
import * as util from 'util';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';

import type * as _sourceMapSupport from '@cspotcode/source-map-support';
import { BaseError } from 'make-error';
import * as _ts from 'typescript';

import type { Transpiler, TranspilerFactory } from './transpilers/types';
import assert = require('assert');
import {
  cachedLookup,
  createProjectLocalResolveHelper,
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  normalizeSlashes,
  once,
  parse,
  ProjectLocalResolveHelper,
  utilReiterated,
  split,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
} from './util';
import { findAndReadConfig, loadCompiler } from './configuration';
import type { TSCommon, TSInternal } from './ts-compiler-types';
import { createModuleTypeClassifier, ModuleTypeClassification, ModuleTypeClassifier } from './module-type-classifier';
import { createResolverFunctions } from './resolver-functions';
import type { createEsmHooks as createEsmHooksFn } from './esm';
import { installCommonjsResolveHooksIfNecessary, ModuleConstructorWithInternals } from './cjs-resolve-hooks';
import { classifyModule } from './node-module-type-classifier';
import type * as _nodeInternalModulesEsmResolve from '../dist-raw/node-internal-modules-esm-resolve';
import type * as _nodeInternalModulesEsmGetFormat from '../dist-raw/node-internal-modules-esm-get_format';
import type * as _nodeInternalModulesCjsLoader from '../dist-raw/node-internal-modules-cjs-loader';
import { Extensions, getExtensions } from './file-extensions';
import { createTsTranspileModule } from './ts-transpile-module';
import {
  stripShebangIfPresent
} from './module-transpiled-syntaxerrors';
import { assertScriptCanLoadAsCJS } from '../dist-raw/node-internal-modules-cjs-loader';

import {
  isValidCjs,
  isParseableAsCjs ,
  checkParseableAsCjs,
  isSyntaxErrorUnexpectedToken,
} from './module-transpiled-syntaxerrors';

const isWithEsImportStmt = (

  function (...[code]: [code: string])
  {

    return (
      (code.match(/\bimport\s*\(/g) )
    ) ;
  }
) ;

export { TSCommon };
export { createRepl, CreateReplOptions, ReplService, EvalAwarePartialHost } from './repl';
export type {
  TranspilerModule,
  TranspilerFactory,
  CreateTranspilerOptions,
  TranspileOutput,
  TranspileOptions,
  Transpiler,
} from './transpilers/types';
export type { NodeLoaderHooksAPI1, NodeLoaderHooksAPI2, NodeLoaderHooksFormat } from './esm';

const engineSupportsPackageTypeField = true;

/**
 * Registered `ts-node` instance information.
 */
export const REGISTER_INSTANCE = Symbol.for('ts-node.register.instance');

/**
 * Expose `REGISTER_INSTANCE` information on node.js `process`.
 */
declare global {
  namespace NodeJS {
    interface Process {
      [REGISTER_INSTANCE]?: Service;
    }
  }
}

/** @internal */
export const env = process.env as ProcessEnv;
/**
 * Declare all env vars, to aid discoverability.
 * If an env var affects ts-node's behavior, it should not be buried somewhere in our codebase.
 * @internal
 */
export interface ProcessEnv {
  TS_NODE_DEBUG?: string;
  TS_NODE_CWD?: string;
  /** @deprecated */
  TS_NODE_DIR?: string;
  TS_NODE_EMIT?: string;
  TS_NODE_SCOPE?: string;
  TS_NODE_SCOPE_DIR?: string;
  TS_NODE_FILES?: string;
  TS_NODE_PRETTY?: string;
  TS_NODE_COMPILER?: string;
  TS_NODE_COMPILER_OPTIONS?: string;
  TS_NODE_IGNORE?: string;
  TS_NODE_PROJECT?: string;
  TS_NODE_SKIP_PROJECT?: string;
  TS_NODE_SKIP_IGNORE?: string;
  TS_NODE_PREFER_TS_EXTS?: string;
  TS_NODE_IGNORE_DIAGNOSTICS?: string;
  TS_NODE_TRANSPILE_ONLY?: string;
  TS_NODE_TYPE_CHECK?: string;
  TS_NODE_COMPILER_HOST?: string;
  TS_NODE_LOG_ERROR?: string;
  TS_NODE_HISTORY?: string;
  TS_NODE_EXPERIMENTAL_REPL_AWAIT?: string;

  NODE_NO_READLINE?: string;
}

/**
 * @internal
 */
export const INSPECT_CUSTOM = util.inspect.custom || 'inspect';

/**
 * Debugging `ts-node`.
 */
const shouldDebug = yn(env.TS_NODE_DEBUG);
/** @internal */
export const debug = shouldDebug
  ? (...args: any) => console.log(`[ts-node ${new Date().toISOString()}]`, ...args)
  : () => undefined;
const debugFn = shouldDebug
  ? <T, U>(key: string, fn: (arg: T) => U) => {
      let i = 0;
      return (x: T) => {
        debug(key, x, ++i);
        return fn(x);
      };
    }
  : <T, U>(_: string, fn: (arg: T) => U) => fn;

/**
 * Export the current version.
 */
export const VERSION = require('../package.json').version;

/**
 * Options for creating a new TypeScript compiler instance.

 * @category Basic
 */
export interface CreateOptions {
  /**
   * Behave as if invoked within this working directory.  Roughly equivalent to `cd $dir && ts-node ...`
   *
   * @default process.cwd()
   */
  readonly cwd?: string;
  /**
   * Legacy alias for `cwd`
   *
   * @deprecated use `projectSearchDir` or `cwd`
   */
  readonly dir?: string;
  /**
   * Emit output files into `.ts-node` directory.
   *
   * @default false
   */
  readonly emit?: boolean;
  /**
   * Scope compiler to files within `scopeDir`.
   *
   * @default false
   */
  readonly scope?: boolean;
  /**
   * @default First of: `tsconfig.json` "rootDir" if specified, directory containing `tsconfig.json`, or cwd if no `tsconfig.json` is loaded.
   */
  readonly scopeDir?: string;
  /**
   * Use pretty diagnostic formatter.
   *
   * @default false
   */
  readonly pretty?: boolean;
  /**
   * Use TypeScript's faster `transpileModule`.
   *
   * @default false
   */
  readonly transpileOnly?: boolean;
  /**
   * **DEPRECATED** Specify type-check is enabled (e.g. `transpileOnly == false`).
   *
   * @default true
   */
  readonly typeCheck?: boolean;
  /**
   * Use TypeScript's compiler host API instead of the language service API.
   *
   * @default false
   */
  readonly compilerHost?: boolean;
  /**
   * Logs TypeScript errors to stderr instead of throwing exceptions.
   *
   * @default false
   */
  readonly logError?: boolean;
  /**
   * Load "files" and "include" from `tsconfig.json` on startup.
   *
   * Default is to override `tsconfig.json` "files" and "include" to only include the entrypoint script.
   *
   * @default false
   */
  readonly files?: boolean;
  /**
   * Specify a custom TypeScript compiler.
   *
   * @default "typescript"
   */
  readonly compiler?: string;
  /**
   * Specify a custom transpiler for use with transpileOnly
   */
  readonly transpiler?: string | [string, object];
  /**
   * Transpile with swc instead of the TypeScript compiler, and skip typechecking.
   *
   * Equivalent to setting both `transpileOnly: true` and `transpiler: 'ts-node/transpilers/swc'`
   *
   * For complete instructions: https://typestrong.org/ts-node/docs/transpilers
   */
  readonly swc?: boolean;
  /**
   * Paths which should not be compiled.
   *
   * Each string in the array is converted to a regular expression via `new RegExp()` and tested against source paths prior to compilation.
   *
   * Source paths are normalized to posix-style separators, relative to the directory containing `tsconfig.json` or to cwd if no `tsconfig.json` is loaded.
   *
   * Default is to ignore all node_modules subdirectories.
   *
   * @default ["(?:^|/)node_modules/"]
   */
  readonly ignore?: string[];
  /**
   * Path to TypeScript config file or directory containing a `tsconfig.json`.
   * Similar to the `tsc --project` flag: https://www.typescriptlang.org/docs/handbook/compiler-options.html
   */
  readonly project?: string;
  /**
   * Search for TypeScript config file (`tsconfig.json`) in this or parent directories.
   */
  readonly projectSearchDir?: string;
  /**
   * Skip project config resolution and loading.
   *
   * @default false
   */
  readonly skipProject?: boolean;
  /**
   * Skip ignore check, so that compilation will be attempted for all files with matching extensions.
   *
   * @default false
   */
  readonly skipIgnore?: boolean;
  /**
   * JSON object to merge with TypeScript `compilerOptions`.
   *
   * @allOf [{"$ref": "https://schemastore.azurewebsites.net/schemas/json/tsconfig.json#definitions/compilerOptionsDefinition/properties/compilerOptions"}]
   */
  readonly compilerOptions?: _ts.CompilerOptions;
  /**
   * Ignore TypeScript warnings by diagnostic code.
   */
  readonly ignoreDiagnostics?: Array<number | string>;
  /**
   * Modules to require, like node's `--require` flag.
   *
   * If specified in `tsconfig.json`, the modules will be resolved relative to the `tsconfig.json` file.
   *
   * If specified programmatically, each input string should be pre-resolved to an absolute path for
   * best results.
   */
  readonly require?: Array<string>;
  readonly readFile?: (path: string) => string | undefined;
  readonly fileExists?: (path: string) => boolean;
  readonly transformers?: _ts.CustomTransformers | ((p: _ts.Program) => _ts.CustomTransformers);
  /**
   * Allows the usage of top level await in REPL.
   *
   * Uses node's implementation which accomplishes this with an AST syntax transformation.
   *
   * Enabled by default when tsconfig target is es2018 or above. Set to false to disable.
   *
   * **Note**: setting to `true` when tsconfig target is too low will throw an Error.  Leave as `undefined`
   * to get default, automatic behavior.
   */
  readonly experimentalReplAwait?: boolean;
  /**
   * Override certain paths to be compiled and executed as CommonJS or ECMAScript modules.
   * When overridden, the tsconfig "module" and package.json "type" fields are overridden, and
   * the file extension is ignored.
   * This is useful if you cannot use .mts, .cts, .mjs, or .cjs file extensions;
   * it achieves the same effect.
   *
   * Each key is a glob pattern following the same rules as tsconfig's "include" array.
   * When multiple patterns match the same file, the last pattern takes precedence.
   *
   * `cjs` overrides matches files to compile and execute as CommonJS.
   * `esm` overrides matches files to compile and execute as native ECMAScript modules.
   * `package` overrides either of the above to default behavior, which obeys package.json "type" and
   * tsconfig.json "module" options.
   */
  readonly moduleTypes?: ModuleTypes;
  /**
   * @internal
   * Set by our configuration loader whenever a config file contains options that
   * are relative to the config file they came from, *and* when other logic needs
   * to know this.  Some options can be eagerly resolved to absolute paths by
   * the configuration loader, so it is *not* necessary for their source to be set here.
   */
  readonly optionBasePaths?: OptionBasePaths;
  /**
   * A function to collect trace messages from the TypeScript compiler, for example when `traceResolution` is enabled.
   *
   * @default console.log
   */
  readonly tsTrace?: (str: string) => void;
  /**
   * Enable native ESM support.
   *
   * For details, see https://typestrong.org/ts-node/docs/imports#native-ecmascript-modules
   */
  readonly esm?: boolean;
  /**
   * Re-order file extensions so that TypeScript imports are preferred.
   *
   * For example, when both `index.js` and `index.ts` exist, enabling this option causes `require('./index')` to resolve to `index.ts` instead of `index.js`
   *
   * @default false
   */
  readonly preferTsExts?: boolean;
  /**
   * Like node's `--experimental-specifier-resolution`, , but can also be set in your `tsconfig.json` for convenience.
   *
   * For details, see https://nodejs.org/dist/latest-v18.x/docs/api/esm.html#customizing-esm-specifier-resolution-algorithm
   */
  readonly experimentalSpecifierResolution?: 'node' | 'explicit';
  /**
   * Allow using voluntary `.ts` file extension in import specifiers.
   *
   * Typically, in ESM projects, import specifiers must have an emit extension, `.js`, `.cjs`, or `.mjs`,
   * and we automatically map to the corresponding `.ts`, `.cts`, or `.mts` source file.  This is the
   * recommended approach.
   *
   * However, if you really want to use `.ts` in import specifiers, and are aware that this may
   * break tooling, you can enable this flag.
   */
  readonly experimentalTsImportSpecifiers?: boolean;
}

export interface CreateOptions extends AlwaysPreTranspileOptions {}

interface AlwaysPreTranspileOptions
{
  //
  /**
   * {@link alwaysPreTranspile}; `false` by default
   * 
   */
  readonly alwaysPreTranspile ?: boolean ;
}

export type ModuleTypes = Record<string, ModuleTypeOverride>;
export type ModuleTypeOverride = 'cjs' | 'esm' | 'package';

/** @internal */
export interface OptionBasePaths {
  moduleTypes?: string;
  transpiler?: string;
  compiler?: string;
  swc?: string;
}

/**
 * Options for registering a TypeScript compiler instance globally.

 * @category Basic
 */
export interface RegisterOptions extends CreateOptions {
  /**
   * Enable experimental features that re-map imports and require calls to support:
   * `baseUrl`, `paths`, `rootDirs`, `.js` to `.ts` file extension mappings,
   * `outDir` to `rootDir` mappings for composite projects and monorepos.
   *
   * For details, see https://github.com/TypeStrong/ts-node/issues/1514
   */
  readonly experimentalResolver?: boolean;
}

export type ExperimentalSpecifierResolution = 'node' | 'explicit';

/**
 * Must be an interface to support `typescript-json-schema`.
 */
export interface TsConfigOptions
  extends Omit<
    RegisterOptions,
    | 'transformers'
    | 'readFile'
    | 'fileExists'
    | 'skipProject'
    | 'project'
    | 'dir'
    | 'cwd'
    | 'projectSearchDir'
    | 'optionBasePaths'
    | 'tsTrace'
  > {}

/**
 * Information retrieved from type info check.
 */
export interface TypeInfo {
  name: string;
  comment: string;
}

/**
 * Default register options, including values specified via environment
 * variables.
 * @internal
 */
export const DEFAULTS: RegisterOptions = {
  cwd: env.TS_NODE_CWD ?? env.TS_NODE_DIR,
  emit: yn(env.TS_NODE_EMIT),
  scope: yn(env.TS_NODE_SCOPE),
  scopeDir: env.TS_NODE_SCOPE_DIR,
  files: yn(env.TS_NODE_FILES),
  pretty: yn(env.TS_NODE_PRETTY),
  compiler: env.TS_NODE_COMPILER,
  compilerOptions: parse(env.TS_NODE_COMPILER_OPTIONS) as _ts.CompilerOptions,
  ignore: split(env.TS_NODE_IGNORE),
  project: env.TS_NODE_PROJECT,
  skipProject: yn(env.TS_NODE_SKIP_PROJECT),
  skipIgnore: yn(env.TS_NODE_SKIP_IGNORE),
  preferTsExts: yn(env.TS_NODE_PREFER_TS_EXTS),
  ignoreDiagnostics: split(env.TS_NODE_IGNORE_DIAGNOSTICS),
  transpileOnly: yn(env.TS_NODE_TRANSPILE_ONLY),
  typeCheck: yn(env.TS_NODE_TYPE_CHECK),
  compilerHost: yn(env.TS_NODE_COMPILER_HOST),
  logError: yn(env.TS_NODE_LOG_ERROR),
  experimentalReplAwait: yn(env.TS_NODE_EXPERIMENTAL_REPL_AWAIT) ?? undefined,
  tsTrace: console.log.bind(console),
};

/**
 * TypeScript diagnostics error.
 */
export class TSError extends BaseError {
  name = 'TSError';
  diagnosticText!: string;
  diagnostics!: ReadonlyArray<_ts.Diagnostic>;

  constructor(
    diagnosticText: string,
    public diagnosticCodes: number[],
    diagnostics: ReadonlyArray<_ts.Diagnostic> = []
  ) {
    super(`⨯ Unable to compile TypeScript:\n${diagnosticText}`);
    Object.defineProperty(this, 'diagnosticText', {
      configurable: true,
      writable: true,
      value: diagnosticText,
    });
    Object.defineProperty(this, 'diagnostics', {
      configurable: true,
      writable: true,
      value: diagnostics,
    });
  }

  /**
   * @internal
   */
  [INSPECT_CUSTOM]() {
    return this.diagnosticText;
  }
}

const TS_NODE_SERVICE_BRAND = Symbol('TS_NODE_SERVICE_BRAND');

/**
 * Primary ts-node service, which wraps the TypeScript API and can compile TypeScript to JavaScript
 */
export interface Service extends ServiceCore
{}
interface ServiceCore {}

/**
 * Core ts-node service, which wraps the TypeScript API and can compile TypeScript to JavaScript
 */
interface ServiceCore {
  /** @internal */
  [TS_NODE_SERVICE_BRAND]: true;
  ts: TSCommon;
  /** @internal */
  compilerPath: string;
  config: _ts.ParsedCommandLine;
  options: RegisterOptions;
  enabled(enabled?: boolean): boolean;
  ignored(fileName: string): boolean;
  compile(code: string, fileName: string, lineOffset?: number): string;
  getTypeInfo(code: string, fileName: string, position: number): TypeInfo;
  /** @internal */
  configFilePath: string | undefined;
  /** @internal */
  moduleTypeClassifier: ModuleTypeClassifier;
  /** @internal */
  readonly shouldReplAwait: boolean;
  /** @internal */
  addDiagnosticFilter(filter: DiagnosticFilter): void;
  /** @internal */
  installSourceMapSupport(): void;
  /** @internal */
  transpileOnly: boolean;
  /** @internal */
  projectLocalResolveHelper: ProjectLocalResolveHelper;
  /** @internal */
  getNodeEsmResolver: () => ReturnType<typeof import('../dist-raw/node-internal-modules-esm-resolve').createResolve>;
  /** @internal */
  getNodeEsmGetFormat: () => ReturnType<
    typeof import('../dist-raw/node-internal-modules-esm-get_format').createGetFormat
  >;
  /** @internal */
  getNodeCjsLoader: () => ReturnType<typeof import('../dist-raw/node-internal-modules-cjs-loader').createCjsLoader>;
  /** @internal */
  extensions: Extensions;
}

/**
 * Re-export of `Service` interface for backwards-compatibility
 * @deprecated use `Service` instead
 * @see {Service}
 */
export type Register = Service;

/** @internal */
export interface DiagnosticFilter {
  /** if true, filter applies to all files */
  appliesToAllFiles: boolean;
  /** Filter applies onto to these filenames.  Only used if appliesToAllFiles is false */
  filenamesAbsolute: string[];
  /** these diagnostic codes are ignored */
  diagnosticsIgnored: number[];
}

export const registerByArgvFlags: (
  (...x: [flags: readonly string[] ]) =>
    void
) = function (...[flags]) {

  return (
    (require("./bin") as typeof import("./bin") ).main(["--only-register", ...flags, ] )
  ) ;
} ;

/**
 * Create a new TypeScript compiler instance and register it onto node.js
 *
 */
;

export {
  register ,
} ;

/** Is it a {@link Service} or a {@link RegisterOptions}? */
function toService(serviceOrOpts: Service | RegisterOptions | undefined): Service
{
  const service = (
    (/** Is it a {@link Service} or a {@link RegisterOptions}? */ (serviceOrOpts: (Service | (RegisterOptions & { readonly [TS_NODE_SERVICE_BRAND] ?: false | null | undefined }) ) | undefined ): Service => {
      if (!serviceOrOpts?.[TS_NODE_SERVICE_BRAND]) {
        ;
        // Not a service; is options
        return (
          create(serviceOrOpts satisfies (RegisterOptions | undefined) )
        );
      } else {
        return serviceOrOpts ;
      }
    })(serviceOrOpts )
  ) ;

  return service ;
}

/**
 * create a new TypeScript compiler instance and
 * register it for `require` (note that this currently doesn't handle `import`; it'd be done somewhere out)
 * 
 * currently it's not safe to run this more-than-once; hopefully
 * this could be adressed in future.
 * 
 * @category Basic
 * 
 */
function register(opts?: RegisterOptions): Service;
/**
 * register it for `require` (note that this currently doesn't handle `import`; it'd be done somewhere out)
 * 
 * currently it's not safe to run this more-than-once; hopefully
 * this could be adressed in future.
 * 
 * @category Basic
 * 
 */
function register(service: Service): Service;
function register(serviceOrOpts: Service | RegisterOptions | undefined): Service
{
  const service = (
    /** Is it a {@link Service} or a {@link RegisterOptions}? */
    toService(serviceOrOpts )
  ) ;
  {
  }

  if (fRegisterHasBeenCalled++) {
    onSecondTimeRegisterMethodCall(service, serviceOrOpts) ;
  }

  return (
    registerImpl(service)
    ,
    service
  ) ;
}

/**
 * finally actually hook the Service at places.
 * currently it's not safe to run this more-than-once; hopefully
 * this could be adressed in future.
 * 
 */
function registerImpl(service: Service) {
  const originalJsHandler = require.extensions['.js'];

  // Expose registered instance globally.
  process[REGISTER_INSTANCE] = service;

  // Register the extensions.
  registerExtensions(service.options.preferTsExts, service.extensions.compiled, service, originalJsHandler);

  installCommonjsResolveHooksIfNecessary(service);

  service.installSourceMapSupport();

  // Require specified modules before start-up.
  (Module as ModuleConstructorWithInternals)._preloadModules(service.options.require);

  return service;
}

let fRegisterHasBeenCalled: number = 0 ;

const onSecondTimeRegisterMethodCall = (

  (...[s]: [s: Service, sO: Service | RegisterOptions | undefined]) => {
    console["error"](`[studiokit-ts-node] 'register()' has only been designed to run at-most once. running it more-than-once may lead to untested, unexpected effects`) ;
  }
);

/**
 * Create TypeScript compiler instance.
 *
 * @category Basic
 */
export function create(rawOptions: CreateOptions = {}): Service {
  const foundConfigResult = findAndReadConfig(rawOptions);
  return createFromPreloadedConfig(foundConfigResult);
}

export interface Service extends Omit<ServiceFromPreloadedConfigImpl , (
  | "ndResolvers"
)> {}

/** @internal */
export function createFromPreloadedConfig(foundConfigResult: ReturnType<typeof findAndReadConfig>): Service {
  return      createFromPreloadedConfigImpl(foundConfigResult) ;
}

function createFromPreloadedConfigImpl(foundConfigResult: ReturnType<typeof findAndReadConfig>) {
  const { configFilePath, cwd, options, config, compiler, projectLocalResolveDir, optionBasePaths } = foundConfigResult;

  const projectLocalResolveHelper = createProjectLocalResolveHelper(projectLocalResolveDir);

  const ts = loadCompiler(compiler);

  // Experimental REPL await is not compatible targets lower than ES2018
  const targetSupportsTla = config.options.target! >= ts.ScriptTarget.ES2018;
  if (options.experimentalReplAwait === true && !targetSupportsTla) {
    throw new Error('Experimental REPL await is not compatible with targets lower than ES2018');
  }

  const shouldReplAwait = options.experimentalReplAwait !== false && targetSupportsTla;

  // swc implies two other options
  // typeCheck option was implemented specifically to allow overriding tsconfig transpileOnly from the command-line
  // So we should allow using typeCheck to override swc
  if (options.swc && !options.typeCheck) {
    if (options.transpileOnly === false) {
      throw new Error("Cannot enable 'swc' option with 'transpileOnly: false'.  'swc' implies 'transpileOnly'.");
    }
    if (options.transpiler) {
      throw new Error("Cannot specify both 'swc' and 'transpiler' options.  'swc' uses the built-in swc transpiler.");
    }
  }

  const readFile = options.readFile || ts.sys.readFile;
  const fileExists = options.fileExists || ts.sys.fileExists;
  // typeCheck can override transpileOnly, useful for CLI flag to override config file
  const transpileOnly = (options.transpileOnly === true || options.swc === true) && options.typeCheck !== true;
  let transpiler: RegisterOptions['transpiler'] | undefined = undefined;
  let transpilerBasePath: string | undefined = undefined;
  if (options.transpiler) {
    transpiler = options.transpiler;
    transpilerBasePath = optionBasePaths.transpiler;
  } else if (options.swc) {
    transpiler = require.resolve('./transpilers/swc.js');
    transpilerBasePath = optionBasePaths.swc;
  }
  const transformers = options.transformers || undefined;
  const diagnosticFilters: Array<DiagnosticFilter> = [
    {
      appliesToAllFiles: true,
      filenamesAbsolute: [],
      diagnosticsIgnored: [
        6059, // "'rootDir' is expected to contain all source files."
        18002, // "The 'files' list in config file is empty."
        18003, // "No inputs were found in config file."
        ...(options.experimentalTsImportSpecifiers
          ? [
              2691, // "An import path cannot end with a '.ts' extension. Consider importing '<specifier without ext>' instead."
            ]
          : []),
        ...(options.ignoreDiagnostics || []),
      ].map(Number),
    },
  ];

  const configDiagnosticList = filterDiagnostics(config.errors, diagnosticFilters);
  const outputCache = new Map<
    string,
    {
      content: string;
    }
  >();

  const configFileDirname = configFilePath ? dirname(configFilePath) : null;
  const scopeDir = options.scopeDir ?? config.options.rootDir ?? configFileDirname ?? cwd;
  const ignoreBaseDir = configFileDirname ?? cwd;
  const isScoped = options.scope ? (fileName: string) => relative(scopeDir, fileName).charAt(0) !== '.' : () => true;
  const shouldIgnore = createIgnore(
    ignoreBaseDir,
    options.skipIgnore ? [] : (options.ignore || ['(?:^|/)node_modules/']).map((str) => new RegExp(str))
  );

  const diagnosticHost: _ts.FormatDiagnosticsHost = {
    getNewLine: () => ts.sys.newLine,
    getCurrentDirectory: () => cwd,
    // TODO switch to getCanonicalFileName we already create later in scope
    getCanonicalFileName: ts.sys.useCaseSensitiveFileNames ? (x) => x : (x) => x.toLowerCase(),
  };

  if (options.transpileOnly && typeof transformers === 'function') {
    throw new TypeError('Transformers function is unavailable in "--transpile-only"');
  }
  let createTranspiler = initializeTranspilerFactory();
  function initializeTranspilerFactory() {
    if (transpiler) {
      if (!transpileOnly) throw new Error('Custom transpiler can only be used when transpileOnly is enabled.');
      const transpilerName = typeof transpiler === 'string' ? transpiler : transpiler[0];
      const transpilerOptions = typeof transpiler === 'string' ? {} : transpiler[1] ?? {};
      const transpilerConfigLocalResolveHelper = transpilerBasePath
        ? createProjectLocalResolveHelper(transpilerBasePath)
        : projectLocalResolveHelper;
      const transpilerPath = transpilerConfigLocalResolveHelper(transpilerName, true);
      const transpilerFactory = require(transpilerPath).create as TranspilerFactory;
      return createTranspiler;

      function createTranspiler(compilerOptions: TSCommon.CompilerOptions, nodeModuleEmitKind?: NodeModuleEmitKind) {
        return transpilerFactory?.({
          service: {
            options,
            config: {
              ...config,
              options: compilerOptions,
            },
            projectLocalResolveHelper,
          },
          transpilerConfigLocalResolveHelper,
          nodeModuleEmitKind,
          ...transpilerOptions,
        });
      }
    }
  }

  // Install source map support and read from memory cache.
  function installSourceMapSupport() {
    const sourceMapSupport = require('@cspotcode/source-map-support') as typeof _sourceMapSupport;
    sourceMapSupport.install({
      environment: 'node',
      retrieveFile(pathOrUrl: string) {
        let path = pathOrUrl;
        // If it's a file URL, convert to local path
        // I could not find a way to handle non-URLs except to swallow an error
        if (path.startsWith('file://')) {
          try {
            path = fileURLToPath(path);
          } catch (e) {
            /* swallow error */
          }
        }
        path = normalizeSlashes(path);
        return outputCache.get(path)?.content || '';
      },
      redirectConflictingLibrary: true,
      onConflictingLibraryRedirect(request, parent, isMain, options, redirectedRequest) {
        debug(
          `Redirected an attempt to require source-map-support to instead receive @cspotcode/source-map-support.  "${
            (parent as NodeJS.Module).filename
          }" attempted to require or resolve "${request}" and was redirected to "${redirectedRequest}".`
        );
      },
    });
  }

  const shouldHavePrettyErrors = options.pretty === undefined ? process.stdout.isTTY : options.pretty;

  const formatDiagnostics = shouldHavePrettyErrors
    ? ts.formatDiagnosticsWithColorAndContext || ts.formatDiagnostics
    : ts.formatDiagnostics;

  function createTSError(diagnostics: ReadonlyArray<_ts.Diagnostic>, ctxDict ?: Record<string, {} | null>) {
    const diagnosticText = formatDiagnostics(diagnostics, diagnosticHost);
    const diagnosticCodes = diagnostics.map((x) => x.code);
    return new TSError(diagnosticText + (ctxDict ? ` ${ util.inspect(ctxDict, false, undefined, false ) }` : ``), diagnosticCodes, diagnostics);
  }

  function reportTSError(configDiagnosticList: _ts.Diagnostic[], ctxDict?: Record<string, {} | null>) {
    const error = createTSError(configDiagnosticList, ctxDict);
    if (options.logError) {
      // Print error in red color and continue execution.
      console.error('\x1b[31m%s\x1b[0m', error);
    } else {
      // Throw error and exit the script.
      throw error;
    }
  }

  // Render the configuration errors.
  if (configDiagnosticList.length) reportTSError(configDiagnosticList);

  const jsxEmitPreserve = config.options.jsx === ts.JsxEmit.Preserve;
  /**
   * Get the extension for a transpiled file.
   * [MUST_UPDATE_FOR_NEW_FILE_EXTENSIONS]
   */
  function getEmitExtension(path: string) {
    const lastDotIndex = path.lastIndexOf('.');
    if (lastDotIndex >= 0) {
      const ext = path.slice(lastDotIndex);
      switch (ext) {
        case '.js':
        case '.jsx':
        case '.ts':
        case '.tsx':
        case '.mjs':
        case '.mjsx':
        case '.mts':
        case '.mtsx':
        case '.cjs':
        case '.cjsx':
        case '.cts':
        case '.ctsx':
          let c: string = ext ;
          c = c.replace(/t/g, "j" ) ;
          if (!jsxEmitPreserve) {
            c = c.replace(/x/g, "" ) ;
          }
          return c;
      }
    }
    return '.js';
  }

  type GetOutputFunction = (code: string, fileName: string) => SourceOutput;
  /**
   * Get output from TS compiler w/typechecking.  `undefined` in `transpileOnly`
   * mode.
   */
  let getOutput: GetOutputFunction | undefined;
  let getTypeInfo: (_code: string, _fileName: string, _position: number) => TypeInfo;

  const getCanonicalFileName = (ts as unknown as TSInternal).createGetCanonicalFileName(
    ts.sys.useCaseSensitiveFileNames
  );

  const moduleTypeClassifier = createModuleTypeClassifier({
    basePath: options.optionBasePaths?.moduleTypes,
    patterns: options.moduleTypes,
  });

  const extensions = getExtensions(config, options, ts.version);

  // Use full language services when the fast option is disabled.
  if (!transpileOnly) {
    const fileContents = new Map<string, string>();
    const rootFileNames = new Set(config.fileNames);
    const cachedReadFile = cachedLookup(debugFn('readFile', readFile));

    // Use language services by default
    if (!options.compilerHost) {
      let projectVersion = 1;
      const fileVersions = new Map(Array.from(rootFileNames).map((fileName) => [fileName, 0]));

      const getCustomTransformers = () => {
        if (typeof transformers === 'function') {
          const program = service.getProgram();
          return program ? transformers(program) : undefined;
        }

        return transformers;
      };

      // Create the compiler host for type checking.
      const serviceHost: _ts.LanguageServiceHost & Required<Pick<_ts.LanguageServiceHost, 'fileExists' | 'readFile'>> =
        {
          getProjectVersion: () => String(projectVersion),
          getScriptFileNames: () => Array.from(rootFileNames),
          getScriptVersion: (fileName: string) => {
            const version = fileVersions.get(fileName);
            return version ? version.toString() : '';
          },
          getScriptSnapshot(fileName: string) {
            // TODO ordering of this with getScriptVersion?  Should they sync up?
            let contents = fileContents.get(fileName);

            // Read contents into TypeScript memory cache.
            if (contents === undefined) {
              contents = cachedReadFile(fileName);
              if (contents === undefined) return;

              fileVersions.set(fileName, 1);
              fileContents.set(fileName, contents);
              projectVersion++;
            }

            return ts.ScriptSnapshot.fromString(contents);
          },
          readFile: cachedReadFile,
          readDirectory: ts.sys.readDirectory,
          getDirectories: cachedLookup(debugFn('getDirectories', ts.sys.getDirectories)),
          fileExists: cachedLookup(debugFn('fileExists', fileExists)),
          directoryExists: cachedLookup(debugFn('directoryExists', ts.sys.directoryExists)),
          realpath: ts.sys.realpath ? cachedLookup(debugFn('realpath', ts.sys.realpath)) : undefined,
          getNewLine: () => ts.sys.newLine,
          useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
          getCurrentDirectory: () => cwd,
          getCompilationSettings: () => config.options,
          getDefaultLibFileName: () => ts.getDefaultLibFilePath(config.options),
          getCustomTransformers: getCustomTransformers,
          trace: options.tsTrace,
        };
      const {
        resolveModuleNames,
        getResolvedModuleWithFailedLookupLocationsFromCache,
        resolveTypeReferenceDirectives,
        isFileKnownToBeInternal,
        markBucketOfFilenameInternal,
      } = createResolverFunctions({
        host: serviceHost,
        getCanonicalFileName,
        ts,
        cwd,
        config,
        projectLocalResolveHelper,
        options,
        extensions,
      });
      serviceHost.resolveModuleNames = resolveModuleNames;
      serviceHost.getResolvedModuleWithFailedLookupLocationsFromCache =
        getResolvedModuleWithFailedLookupLocationsFromCache;
      serviceHost.resolveTypeReferenceDirectives = resolveTypeReferenceDirectives;

      const registry = ts.createDocumentRegistry(ts.sys.useCaseSensitiveFileNames, cwd);
      const service = ts.createLanguageService(serviceHost, registry);

      const updateMemoryCache = (contents: string, fileName: string) => {
        // Add to `rootFiles` as necessary, either to make TS include a file it has not seen,
        // or to trigger a re-classification of files from external to internal.
        if (!rootFileNames.has(fileName) && !isFileKnownToBeInternal(fileName)) {
          markBucketOfFilenameInternal(fileName);
          rootFileNames.add(fileName);
          // Increment project version for every change to rootFileNames.
          projectVersion++;
        }

        const previousVersion = fileVersions.get(fileName) || 0;
        const previousContents = fileContents.get(fileName);
        // Avoid incrementing cache when nothing has changed.
        if (contents !== previousContents) {
          fileVersions.set(fileName, previousVersion + 1);
          fileContents.set(fileName, contents);
          // Increment project version for every file change.
          projectVersion++;
        }
      };

      let previousProgram: _ts.Program | undefined = undefined;

      getOutput = (code: string, fileName: string) => {
        updateMemoryCache(code, fileName);

        const programBefore = service.getProgram();
        if (programBefore !== previousProgram) {
          debug(`compiler rebuilt Program instance when getting output for ${fileName}`);
        }

        const output = service.getEmitOutput(fileName);

        // Get the relevant diagnostics - this is 3x faster than `getPreEmitDiagnostics`.
        const diagnostics = service.getSemanticDiagnostics(fileName).concat(service.getSyntacticDiagnostics(fileName));

        const programAfter = service.getProgram();

        debug(
          'invariant: Is service.getProject() identical before and after getting emit output and diagnostics? (should always be true) ',
          programBefore === programAfter
        );

        previousProgram = programAfter;

        const diagnosticList = filterDiagnostics(diagnostics, diagnosticFilters);
        if (diagnosticList.length) reportTSError(diagnosticList);

        if (output.emitSkipped) {
          return [undefined, undefined, true];
        }

        // Throw an error when requiring `.d.ts` files.
        if (output.outputFiles.length === 0) {
          throw new TypeError(
            `Unable to require file: ${relative(cwd, fileName)}\n` +
              'This is usually the result of a faulty configuration or import. ' +
              'Make sure there is a `.js`, `.json` or other executable extension with ' +
              'loader attached before `ts-node` available.'
          );
        }

        return [output.outputFiles[1]!.text, output.outputFiles[0]!.text, false];
      };

      getTypeInfo = (code: string, fileName: string, position: number) => {
        const normalizedFileName = normalizeSlashes(fileName);
        updateMemoryCache(code, normalizedFileName);

        const info = service.getQuickInfoAtPosition(normalizedFileName, position);
        const name = ts.displayPartsToString(info ? info.displayParts : []);
        const comment = ts.displayPartsToString(info ? info.documentation : []);

        return { name, comment };
      };
    } else {
      const sys: _ts.System & _ts.FormatDiagnosticsHost = {
        ...ts.sys,
        ...diagnosticHost,
        readFile: (fileName: string) => {
          const cacheContents = fileContents.get(fileName);
          if (cacheContents !== undefined) return cacheContents;
          const contents = cachedReadFile(fileName);
          if (contents) fileContents.set(fileName, contents);
          return contents;
        },
        readDirectory: ts.sys.readDirectory,
        getDirectories: cachedLookup(debugFn('getDirectories', ts.sys.getDirectories)),
        fileExists: cachedLookup(debugFn('fileExists', fileExists)),
        directoryExists: cachedLookup(debugFn('directoryExists', ts.sys.directoryExists)),
        resolvePath: cachedLookup(debugFn('resolvePath', ts.sys.resolvePath)),
        realpath: ts.sys.realpath ? cachedLookup(debugFn('realpath', ts.sys.realpath)) : undefined,
      };

      const host: _ts.CompilerHost = ts.createIncrementalCompilerHost(config.options, sys);
      host.trace = options.tsTrace;
      const {
        resolveModuleNames,
        resolveTypeReferenceDirectives,
        isFileKnownToBeInternal,
        markBucketOfFilenameInternal,
      } = createResolverFunctions({
        host,
        cwd,
        config,
        ts,
        getCanonicalFileName,
        projectLocalResolveHelper,
        options,
        extensions,
      });
      host.resolveModuleNames = resolveModuleNames;
      host.resolveTypeReferenceDirectives = resolveTypeReferenceDirectives;

      let builderProgram: import("typescript").EmitAndSemanticDiagnosticsBuilderProgram = ts.createIncrementalProgram({
        rootNames: Array.from(rootFileNames),
        options: config.options,
        host,
        configFileParsingDiagnostics: config.errors,
        projectReferences: config.projectReferences,
      });

      // Read and cache custom transformers.
      const customTransformers =
        typeof transformers === 'function' ? transformers(builderProgram.getProgram()) : transformers;

      // Set the file contents into cache manually.
      const updateMemoryCache = (contents: string, fileName: string) => {
        const previousContents = fileContents.get(fileName);
        const contentsChanged = previousContents !== contents;
        if (contentsChanged) {
          fileContents.set(fileName, contents);
        }

        // Add to `rootFiles` when discovered by compiler for the first time.
        let addedToRootFileNames = false;
        if (!rootFileNames.has(fileName) && !isFileKnownToBeInternal(fileName)) {
          markBucketOfFilenameInternal(fileName);
          rootFileNames.add(fileName);
          addedToRootFileNames = true;
        }

        // Update program when file changes.
        if (addedToRootFileNames || contentsChanged) {
          builderProgram = ts.createEmitAndSemanticDiagnosticsBuilderProgram(
            Array.from(rootFileNames),
            config.options,
            host,
            builderProgram,
            config.errors,
            config.projectReferences
          );
        }
      };

      getOutput = (code: string, fileName: string) => {
        let outText = '';
        let outMap = '';

        updateMemoryCache(code, fileName);

        const sourceFile = builderProgram.getSourceFile(fileName);
        if (!sourceFile) throw new TypeError(`Unable to read file: ${fileName}`);

        const program = builderProgram.getProgram();
        const diagnostics = ts.getPreEmitDiagnostics(program, sourceFile);
        const diagnosticList = filterDiagnostics(diagnostics, diagnosticFilters);
        if (diagnosticList.length) reportTSError(diagnosticList);

        const result = builderProgram.emit(
          sourceFile,
          (path, file, writeByteOrderMark) => {
            if (path.endsWith('.map')) {
              outMap = file;
            } else {
              outText = file;
            }

            if (options.emit) sys.writeFile(path, file, writeByteOrderMark);
          },
          undefined,
          undefined,
          customTransformers
        );

        if (result.emitSkipped) {
          return [undefined, undefined, true];
        }

        // Throw an error when requiring files that cannot be compiled.
        if (outText === '') {
          if (program.isSourceFileFromExternalLibrary(sourceFile)) {
            throw new TypeError(`Unable to compile file from external library: ${relative(cwd, fileName)}`);
          }

          throw new TypeError(
            `Unable to require file: ${relative(cwd, fileName)}\n` +
              'This is usually the result of a faulty configuration or import. ' +
              'Make sure there is a `.js`, `.json` or other executable extension with ' +
              'loader attached before `ts-node` available.'
          );
        }

        return [outText, outMap, false];
      };

      getTypeInfo = (code: string, fileName: string, position: number) => {
        const normalizedFileName = normalizeSlashes(fileName);
        updateMemoryCache(code, normalizedFileName);

        const sourceFile = builderProgram.getSourceFile(normalizedFileName);
        if (!sourceFile) throw new TypeError(`Unable to read file: ${fileName}`);

        const node = getTokenAtPosition(ts, sourceFile, position);
        const checker = builderProgram.getProgram().getTypeChecker();
        const symbol = checker.getSymbolAtLocation(node);

        if (!symbol) return { name: '', comment: '' };

        const type = checker.getTypeOfSymbolAtLocation(symbol, node);
        const signatures = [...type.getConstructSignatures(), ...type.getCallSignatures()];

        return {
          name: signatures.length
            ? signatures.map((x) => checker.signatureToString(x)).join('\n')
            : checker.typeToString(type),
          comment: ts.displayPartsToString(symbol ? symbol.getDocumentationComment(checker) : []),
        };
      };

      // Write `.tsbuildinfo` when `--build` is enabled.
      if (options.emit && config.options.incremental) {
        process.on('exit', () => {
          // Emits `.tsbuildinfo` to filesystem.
          (builderProgram.getProgram() as any).emitBuildInfo();
        });
      }
    }
  } else {
    getTypeInfo = () => {
      throw new TypeError('Type information is unavailable in "--transpile-only"');
    };
  }

  function createTranspileOnlyGetOutputFunction(
    overrideModuleType?: _ts.ModuleKind,
    nodeModuleEmitKind?: NodeModuleEmitKind
  ): GetOutputFunction {
    const compilerOptions = { ...config.options };
    if (overrideModuleType !== undefined) compilerOptions.module = overrideModuleType;
    let customTranspiler = createTranspiler?.(compilerOptions, nodeModuleEmitKind);
    let tsTranspileModule = versionGteLt(ts.version, '4.7.0')
      ? createTsTranspileModule(ts, {
          compilerOptions,
          reportDiagnostics: true,
          transformers: transformers as _ts.CustomTransformers | undefined,
        })
      : undefined;
    return (code: string, fileName: string): SourceOutput => {
      let result: _ts.TranspileOutput;
      if (customTranspiler) {
        result = customTranspiler.transpile(code, {
          fileName,
        });
      } else if (tsTranspileModule) {
        result = tsTranspileModule(
          code,
          {
            fileName,
          },
          nodeModuleEmitKind === 'nodeesm' ? 'module' : 'commonjs'
        );
      } else {
        result = ts.transpileModule(code, {
          fileName,
          compilerOptions,
          reportDiagnostics: true,
          transformers: transformers as _ts.CustomTransformers | undefined,
        });
      }

      const diagnosticList = filterDiagnostics(result.diagnostics || [], diagnosticFilters);
      if (diagnosticList.length) {
        reportTSError(diagnosticList, { fileName, ...(fileName.match(/\.jsonc?$/) ? { code: code.slice(0, 200 ) } : {} ), });
      }

      return [result.outputText, result.sourceMapText ?? '{}', false];
    };
  }

  // When true, these mean that a `moduleType` override will cause a different emit
  // than the TypeScript compiler, so we *must* overwrite the emit.
  const shouldOverwriteEmitWhenForcingCommonJS = config.options.module !== ts.ModuleKind.CommonJS;
  // [MUST_UPDATE_FOR_NEW_MODULEKIND]
  const shouldOverwriteEmitWhenForcingEsm = !(
    config.options.module === ts.ModuleKind.ES2015 ||
    (ts.ModuleKind.ES2020 && config.options.module === ts.ModuleKind.ES2020) ||
    (ts.ModuleKind.ES2022 && config.options.module === ts.ModuleKind.ES2022) ||
    config.options.module === ts.ModuleKind.ESNext
  );
  /**
   * node16 or nodenext
   * [MUST_UPDATE_FOR_NEW_MODULEKIND]
   */
  const isNodeModuleType =
    (ts.ModuleKind.Node16 && config.options.module === ts.ModuleKind.Node16) ||
    (ts.ModuleKind.NodeNext && config.options.module === ts.ModuleKind.NodeNext);
  const getOutputForceCommonJS = createTranspileOnlyGetOutputFunction(ts.ModuleKind.CommonJS);
  const getOutputForceNodeCommonJS = createTranspileOnlyGetOutputFunction(ts.ModuleKind.NodeNext, 'nodecjs');
  const getOutputForceNodeESM = createTranspileOnlyGetOutputFunction(ts.ModuleKind.NodeNext, 'nodeesm');
  // [MUST_UPDATE_FOR_NEW_MODULEKIND]
  const getOutputForceESM = createTranspileOnlyGetOutputFunction(
    ts.ModuleKind.ES2022 || ts.ModuleKind.ES2020 || ts.ModuleKind.ES2015
  );
  const getOutputTranspileOnly = createTranspileOnlyGetOutputFunction();

  // Create a simple TypeScript compiler proxy.
  function compile(...[code, fileName, lineOffset = 0, { forcedModuleType = null, transpileOnly: traArg = false, } = {} ] : (

    ArgsWithOptions<[code: string, fileName: string, lineOffset?: number], (
      & {
        transpileOnly?: boolean,
        forcedModuleType ?: ModuleTypeClassification["moduleType"] | null,
      }
    )>
  )) {
    const normalizedFileName = normalizeSlashes(fileName);
    const classification = (
      ((): ModuleTypeClassification => {
        if (forcedModuleType) {
          return {
            moduleType: forcedModuleType ,
          } ;
        }
        return (
          moduleTypeClassifier.classifyModuleByModuleTypeOverrides(normalizedFileName)
        ) ;
      })()
    );
    let value: string | undefined = '';
    let sourceMap: string | undefined = '';
    let emitSkipped = true;

    if (emitSkipped) {
      /**
       * generally,
       * unless {@link traArg} (`transpileOnly`), we shall head it to {@link getOutput}.
       * note however, that
       * setting {@link forcedModuleType} is incompatible with {@link getOutput `program.getOutput`} and therefore
       * in that case we can only safely skip this ATM (hopefully fixed in future).
       * 
       */
      if (!forcedModuleType && !traArg) {
        ;
        if (getOutput) {
          // Must always call normal getOutput to throw typechecking errors
          [value, sourceMap, emitSkipped] = getOutput(code, normalizedFileName);
        }
      }
    }

    // If module classification contradicts the above, call the relevant transpiler
    if (classification.moduleType === 'cjs' && (shouldOverwriteEmitWhenForcingCommonJS || emitSkipped)) {
      [value, sourceMap] = getOutputForceCommonJS(code, normalizedFileName);
    } else if (classification.moduleType === 'esm' && (shouldOverwriteEmitWhenForcingEsm || emitSkipped)) {
      [value, sourceMap] = getOutputForceESM(code, normalizedFileName);
    } else if (emitSkipped) {
      // Happens when ts compiler skips emit or in transpileOnly mode
      const classification = classifyModule(fileName, isNodeModuleType);
      [value, sourceMap] =
        classification === 'nodecjs'
          ? getOutputForceNodeCommonJS(code, normalizedFileName)
          : classification === 'nodeesm'
          ? getOutputForceNodeESM(code, normalizedFileName)
          : classification === 'cjs'
          ? getOutputForceCommonJS(code, normalizedFileName)
          : classification === 'esm'
          ? getOutputForceESM(code, normalizedFileName)
          : getOutputTranspileOnly(code, normalizedFileName);
    }
    const output = updateOutput(value!, normalizedFileName, sourceMap!, getEmitExtension);
    outputCache.set(normalizedFileName, { content: output });
    return output;
  }

  let active = true;
  const enabled = (enabled?: boolean) => (enabled === undefined ? active : (active = !!enabled));
  const ignored = (fileName: string) => {
    if (!active) return true;
    const ext = extname(fileName);
    if (extensions.compiled.includes(ext)) {
      return !isScoped(fileName) || shouldIgnore(fileName);
    }
    return true;
  };

  function addDiagnosticFilter(filter: DiagnosticFilter) {
    diagnosticFilters.push({
      ...filter,
      filenamesAbsolute: filter.filenamesAbsolute.map((f) => normalizeSlashes(f)),
    });
  }

  const getNodeEsmResolver = once(() =>
    (require('../dist-raw/node-internal-modules-esm-resolve') as typeof _nodeInternalModulesEsmResolve).createResolve({
      extensions,
      preferTsExts: options.preferTsExts,
      tsNodeExperimentalSpecifierResolution: options.experimentalSpecifierResolution,
    })
  );
  const getNodeEsmGetFormat = once(() =>
    (
      require('../dist-raw/node-internal-modules-esm-get_format') as typeof _nodeInternalModulesEsmGetFormat
    ).createGetFormat(options.experimentalSpecifierResolution, getNodeEsmResolver())
  );
  const getNodeCjsLoader = once(() =>
    (require('../dist-raw/node-internal-modules-cjs-loader') as typeof _nodeInternalModulesCjsLoader).createCjsLoader({
      extensions,
      preferTsExts: options.preferTsExts,
      nodeEsmResolver: getNodeEsmResolver(),
    })
  );

  const resolvers1 = (
    (() => {
      const gclImpl = {
        getNodeEsmResolver ,
        getNodeEsmGetFormat ,
        getNodeCjsLoader ,
      } as const ;

      interface Gce extends Extract<Omit<typeof gclImpl, never > , any > {}

      return gclImpl as Gce ;
    })()
  ) ;

  const compilerHelperExtra = (

    (() => {
      ;

      ;
      const createRequireCall = (
        (args: readonly _ts.Expression[]): _ts.Expression => (
          compilerHelper11.createRequireCall!(args)
        )
      ) ;

      /**
       * {@link getImportExprAndBinding}.
       * note that
       * `alias: false` means that the construct doesn't bind any name
       * .
       * 
       */
      const getImportExprAndBinding = (

        function (...[node, oode]: [CjsifiableImportNode, oode: _ts.SourceFile] ): (
          | (
            { srcExpr: _ts.Expression, } & (
              | {
                  alias: (_ts.ObjectBindingPattern | _ts.BindingName) ;
              }
              | {
                  alias: false;
              }
            )
          )
          | null
        ) {
          if (_ts.isImportDeclaration(node) ) {
            ;
            const srcImportingE = (
              ((
                createRequireCall((
                  utilReiterated(function* () {
                    yield node.moduleSpecifier  ;
                    if (node.attributes) {
                      yield translateEsmImportAttribsIntoObjectDictLiteral(node.attributes) ;
                    }
                  })
                ))
              ))
            ) ;
            const clause = node.importClause ?? null ;
            const p = (
              clause ?
              translateEsmImportClauseIntoObjectDictPattern(clause)
              :
              false
            ) ;
            return {
              srcExpr: srcImportingE,
              alias: p ,
            } ;
          }
          if (_ts.isImportEqualsDeclaration(node) ) {
            ;
            const {
              moduleReference: mR ,
            } = (
              node
            ) ;

            if (_ts.isExternalModuleReference(mR) ) {
              ;
              return {
                alias: node.name ,
                srcExpr: (
                  createRequireCall([mR.expression]) 
                ) ,
              } ;
            } else {
              return null ;
            }
          }
          if (_ts.isCallExpression(node) ) {
            const expr2 = (
              (() => {
                ;
                if (node.expression.kind === _ts.SyntaxKind.ImportKeyword) {
                  const importcImpl = (
                    createRequireCall(node.arguments)
                  ) ;
                  return (
                    _ts.factory.createCallExpression((
                      _ts.factory.createPropertyAccessExpression(getStaticGlobalBuiltinQuery("Promise") , "resolve" )
                    ) , undefined, [importcImpl])
                  ) ;
                }
                return node ;
              })()
            ) ;
            return {
              alias: false ,
              srcExpr: expr2 ,
            } ;
          }
          throw ((node: _ts.Node) => assert.fail(`unsupported construct: (kind=${node.kind}) ${aptSPrintNodeVerbatim(node, oode) }`) )(node) ;
        }
      ) ;

      type CjsifiableImportNode = (
        | _ts.ImportDeclaration
        | _ts.ImportEqualsDeclaration
        | _ts.CallExpression
      ) ;

      ;
      const cjsifyImport = (

        function (...[node, oode]: [CjsifiableImportNode, oode: _ts.SourceFile] )
        : (_ts.Statement | _ts.Expression)
        {

          ;
          if (0) {
            const code = aptSPrintNodeVerbatim(node, oode) ;
          }

          const impExprAndBinding = (
            getImportExprAndBinding(node, oode)
          ) ;

          if (impExprAndBinding) {
            ;
            const { alias: aliasingExpr, srcExpr: srcExpr, } = impExprAndBinding;
  
            if (aliasingExpr !== false) {
              ;
              {
                ;
                return _ts.factory.createVariableStatement([
                  // _ts.factory.createModifier(_ts.SyntaxKind.ConstKeyword),
                ], (
                  _ts.factory.createVariableDeclarationList((
                    [(
                      _ts.factory.createVariableDeclaration((
                        aliasingExpr
                      ) , undefined, undefined, (
                        srcExpr
                      ) )
                    )]
                  ) , _ts.NodeFlags.Const )
                )) ;
              }
            } else {
              return (
                srcExpr
              ) ;
            }
          } else {
            return node ;
          }
        }
      ) ;

      return {
        createRequireCall ,
        cjsifyImport ,
      } as const ;
    })()
  ) ;

  /**
   * ran by {@link translateInlineScriptIntoCjs}.
   * 
   */
  const spclPreMainCompileDoRefmt = (

    function (...[eh, nd, { } = {}] : ArgsWithOptions<[eh: _ts.EmitHint, _ts.Node, ] , {  } >)
    : string
    {
      const oode = nd.getSourceFile() ;

      const {
        createRequireCall ,
        cjsifyImport ,
      } = compilerHelperExtra;
      const createAdaptiveAwaitExpr = (
        (x: _ts.Expression) => (
          _ts.factory.createCallExpression((
            _ts.factory.createIdentifier("doSsPrecompiledAwait")
          ), undefined, [x])
        )
      ) ;

      const printer = (
        _ts.createPrinter({ newLine: _ts.NewLineKind.CarriageReturnLineFeed, }, {
          substituteNode: (eh, node) => {
            if (_ts.isImportDeclaration(node)  || _ts.isImportEqualsDeclaration(node) || ( _ts.isCallExpression(node) && aptSPrintNodeVerbatim(node, oode).match(/^import\b/ ) ) ) {
              return (
                cjsifyImport(node, oode)
              ) ;
            }
            return node ;
          } ,
        })
      ) ;

      if (_ts.isSourceFile(nd) ) {
        return printer.printFile(nd) ;
      }
      return printer.printNode(eh, nd, nd.getSourceFile() ) ;
    }
  ) ;

  /**
   * the right `getText()` method.
   * 
   */
  const aptSPrintNodeVerbatim = (
    (...[nod, sfile]: [node: _ts.Node, oode: _ts.SourceFile]) => (
      aptSPrintNodeVerbatim1(_ts.EmitHint.Unspecified, nod, sfile)
    )
  ) ;
  const aptSPrintNodeVerbatim1 = (
    (() => {
      const impl = _ts.createPrinter({ newLine: _ts.NewLineKind.CarriageReturnLineFeed, }) ;

      return (

        function (...[mode, node, srcfile] : [mode: _ts.EmitHint, node: _ts.Node, oode: _ts.SourceFile] )
        {
          return impl.printNode(mode, node, srcfile ) ;
        }
      ) ;
    })()
  ) ;

  const translateInlineTsScriptIntoCjs = (

    function (...[code, { fileExt: srcFileExt0, asSecondLevel = false, assumedSrcPath: assumedSrcPathArg, }] : (
      Parameters<EB.EbTranslateInlineScriptIntoCjs>
    ))
    {

      if (1) {
        ;
        /**
         * OPTIMISATION; if it's CJS, and hence can be `Function`-ised immediately,
         * return immediately
         * 
         */
        if ((
          srcFileExt0.match(/c?js$/)
          &&
          isValidCjs(code)
          &&
          (
            isWithEsImportStmt(code) ?
            (
              console["info"](`[studk-ts-node] [TranslateInlineTsScriptIntoCjs] code contains Dynamic ESM Import which needs to be transformed `)
              , false
            )
            : true
          )
        ) ) {
          return code ;
        }
      }

      {
      //

      /**
       * the {@link compile `compile`}-emitted mdue-fmat (ie whether ESM, CJS, TS, etc)
       * would change according to `fileName` we specify here
       * 
       */
      const assumedSrcPath = (
        assumedSrcPathArg ?? (
          ("<repl>" + (
            srcFileExt0
          ) )
        )
      );

      let outCode: string = (
        compile((
          1 ?
          (
            /* formatted this way, to allow (when debug) quickly stepping into the call `compile(...)` without opening the 200k-LOC `tsc.js` (which shouldn't happen, but did happen for no reason ) */
            (() => {
              return (
                ((...args: Parameters<typeof spclPreMainCompileDoRefmt> ) => {
                  return (
                    spclPreMainCompileDoRefmt(...args)
                  ) ;
                } )(_ts.EmitHint.SourceFile , (
                  (
                    _ts.createSourceFile("<repl>", code , {
                      languageVersion: _ts.ScriptTarget.ESNext
                      ,
                    } , true , (
                      (() => {
                        const isJsxTagsEnab = srcFileExt0.endsWith("x") ;
                        const isTsFeatsEnab = srcFileExt0.includes("t") ;
                        const isEsFeatsEnab = srcFileExt0.includes("j") ;
                        return (
                          isTsFeatsEnab ?
                          (
                            isJsxTagsEnab ? _ts.ScriptKind.TSX :
                            _ts.ScriptKind.TS
                          )
                          :
                          isEsFeatsEnab ?
                          (
                            _ts.ScriptKind.JSX
                          )
                          :
                          undefined
                        ) ;
                      })()
                    ) )
                  )
                ) )
              )
            })()
          )
          :
          code
        ), assumedSrcPath, undefined, {
          forcedModuleType: "cjs" ,
        } )
      ) ;

      ;
      if (1) {
        ;
        /** strip shebang/hashbang(s); it causes syntax error when the obj-file began with shebang/hashbang */
        outCode = (
          stripShebangIfPresent(outCode)
        ) ;
      }

      /** disabled; this causes syntax error when the obj-file began with shebang/hashbang */
      if (0) {
        outCode = (
          `// fileExt: ${srcFileExt0 } ` + "\r\n\r\n" + outCode
        ) ;
      }

      checkParseableAsCjs(outCode, {
        assumedSrcPath ,
        sfe: srcFileExt0 ,
      }) ;

      return outCode ;
      }
    }
  ) ;

  const translateInlineScriptIntoCjs = (

    function (...[code, opts] : (
      Parameters<EB.EbTranslateInlineScriptIntoCjs>
    ))
    : string
    {

      if (opts.fileExt.match(/\.([cm]?[cjt]sx?)$/) ) {
        ;
        return (
          translateInlineTsScriptIntoCjs(code, opts)
        ) ;
  
      }

      if (opts.fileExt.match(/\.(jsonc?)$/) ) {
        ;
        // TODO
        return (
          `
          // @ts-check
          "use strict" ;
          module.exports = ${(
            code
          ) } ;`
        ) ;
  
      }

      if (opts.fileExt.match(/\.((sa|s?c)ss)$/) ) {

        /**
         * CSS Modules deserves to compile to *stable* code;
         * we have no idea how that should be exactly done
         * 
         * note that Global CSS wouldn't have such problem
         * 
         */
        if (opts.assumedSrcPath?.match(/\.module\.(\w+)$/)) {
          ;
          throw new (class XTsError extends TypeError {} )(`unsupported CSS Modules`) ;
        } else {
          ;
          //
          return (
            `
            // @ts-check
            /// <reference lib="DOM" />
            "use strict" ;
            /* compiled Global CSS */
            // ${opts.assumedSrcPath ?? `(no path)` }
            if (typeof window !== "undefined ) {
              // TODO
              const s = document.createElement("style") ;
              ${ opts.fileExt.match(/\.css /) ? `s.textContent = ${ JSON.stringify(code) } ;` : `// CSS Preproc Src File ` }
              document.head.appendChild(s) ;
            } `
          ) ;
        }
      }

      throw (
        new TypeError(`unsupported file ${opts.fileExt} ${opts.assumedSrcPath ?? `(no path)` }`)
      ) ;
    }
  ) ;

  const oAlwaysPreTranspile = (
    !!(options.alwaysPreTranspile)
  ) ;

  const eb = (
    EB.createSpclNodeEngine({
      oAlwaysPreTranspile: oAlwaysPreTranspile ,
      compiler: { translateInlineScriptIntoCjs: translateInlineScriptIntoCjs, } ,
      aux: { fs: require("fs"), } ,
    })
  ) ;

  eb.setNdImportResolvers({
    getNodeCjsLoader ,
    getNodeEsmGetFormat ,
    getNodeEsmResolver ,
  }) ;

  const {
    dispatchInlineScript: dispatchInlineScript,
    dispatchSrcFile     : dispatchSrcFile ,
    dispatchSrcFileNatively: dispatchSrcFileNatively,
    compilerHelper: compilerHelper11,
  } = eb ;

  ;
  const { dryDepScanningEb, } = (
    (() => {
      ;

      let paths1: Immutable.Map<string, { hasBeenReported: number, }> = (
        Immutable.Map()
      ) ;

      return {
        dryDepScanningEb: (
          EB.createSpclNodeImportsScanningEngine({
            oAlwaysPreTranspile: oAlwaysPreTranspile ,
            aux: { fs: require("fs"), } ,
            onNewDynamicPathExpr: (x) => {
              const proceed = (...[msg, e]: [msg: string, _ts.Expression]) => {
                // console["log"](`[ESM Analysis] ${msg }`) ;
                paths1 = (
                  paths1
                  .set(msg, { hasBeenReported: 0, })
                  .map(({ hasBeenReported: v, ...opts }) => {
                    if (v) {
                      ;
                    } else {
                      console["log"](`[ESM Imports-Scanning] ${aptSPrintNodeVerbatim(x, x.getSourceFile() ) }`) ;
                    }
                    return {
                      ...opts ,
                      hasBeenReported: v || 1 ,
                    } ;
                  })
                ) ;
              } ;
              if (_ts.isStringLiteral(x) ) {
                proceed(`static import from '${x.text }'`, x ) ;
              } else {
                //
                const sf = x.getSourceFile() ;
                proceed(`dynamix import '${aptSPrintNodeVerbatim(x, sf) }'`, x ) ;
              }
            } ,
          })
        ) ,
      } ;
    })()
  ) ;

  const s0 : ServiceCore = {
    [TS_NODE_SERVICE_BRAND]: true,
    ts,
    compilerPath: compiler,
    config,
    compile,
    getTypeInfo,
    ignored,
    enabled,
    options,
    configFilePath,
    moduleTypeClassifier,
    shouldReplAwait,
    addDiagnosticFilter,
    installSourceMapSupport,
    transpileOnly,
    projectLocalResolveHelper,
    getNodeEsmResolver,
    getNodeEsmGetFormat,
    getNodeCjsLoader,
    extensions,
  };
  {
  const s1 = {
    ...(
      {
        ...s0 ,
        /** @deprecated */
        compileInlineScript: translateInlineScriptIntoCjs ,
        dispatchInlineScript: dispatchInlineScript!,
        dispatchSrcFileNatively,
        dispatchSrcFile,
        eb ,
        dryDepScanningEb ,
        getEmitExtension ,
        //
        ndResolvers: resolvers1 ,
        /** @deprecated */
        compilerHelper11,
      } as const
    ) ,
  } as const ;
  return (
    (() => {
      interface S1Publ extends Extract<typeof s1, any > {}
      return ((): S1Publ => s1 )() ;
    })()
  ) ;
  } ;
}

type ServiceFromPreloadedConfigImpl = (
  ReturnType<typeof createFromPreloadedConfigImpl>
) ;

/**
 * `ndResolvers`
 * 
 */
export type NdResolversGcePublic = (
  ReturnType<typeof createFromPreloadedConfigImpl>["ndResolvers"]
) ;

import {
  getStaticGlobalBuiltinQuery,
  translateEsmImportAttribsIntoObjectDictLiteral,
  translateEsmImportClauseIntoBindingName ,
  translateEsmImportClauseIntoObjectDictPattern,
} from "./esmToCjs" ;

import * as VM from "node:vm" ;
import { createRequire, } from 'node:module';

// interface ExportedValueHandler<out ReturnVal = any> {
//   (vexport: any, originalExports: object, module: NodeJS.Module): ReturnVal ;
// }

import EB = require("./eb");

abstract class EntryPtPathAndDispatchSchedule {
  // @ts-ignore
  #iEntryPointModeBrand = true ;
  protected constructor(
    protected readonly lsMode: EntryPtPathAndDispatchSchedule.Ls,
  )
  {
    this.live   = lsMode === EntryPtPathAndDispatchSchedule.LIVE ;
    this.toSave = lsMode === EntryPtPathAndDispatchSchedule.SAVE ;
  }
  readonly   live !: boolean ;
  readonly toSave !: boolean ;
}

namespace EntryPtPathAndDispatchSchedule {
  /** REPL        -      */ export           class      PROMPT extends EntryPtPathAndDispatchSchedule { protected constructor(lsMode: Ls) { super(lsMode) ; } }
  /** REPL        - live */ export           class LIVE_PROMPT extends PROMPT { constructor() { super(LIVE) ; } }
  /** REPL        - save */ export           class SAVE_PROMPT extends PROMPT { constructor() { super(SAVE) ; } }
  /** READFILE    -      */ export           class      FILE   extends EntryPtPathAndDispatchSchedule { protected constructor(readonly srcFileUrl: string, lsMode: Ls) { super(lsMode) ; } }
  /** READFILE    - live */ export           class LIVE_FILE   extends FILE { constructor(srcFilePath: string) { super(srcFilePath, LIVE) ; } }
  /** READFILE    - save */ export           class SAVE_FILE   extends FILE { constructor(srcFilePath: string) { super(srcFilePath, SAVE) ; } }

  export type Ls = typeof LIVE | typeof SAVE ;
  export const LIVE = Symbol("LIVE") ;
  export const SAVE = Symbol("SAVE") ;
}

export { EntryPtPathAndDispatchSchedule, } ;

/**
 * Check if the filename should be ignored.
 */
function createIgnore(ignoreBaseDir: string, ignore: RegExp[]) {
  return (fileName: string) => {
    const relname = relative(ignoreBaseDir, fileName);
    const path = normalizeSlashes(relname);

    return ignore.some((x) => x.test(path));
  };
}

/**
 * Register the extensions to support when importing files.
 * 
 * looks like this could safely run multiple times, but haven't checked it.
 * 
 */
function registerExtensions(
  preferTsExts: boolean | null | undefined,
  extensions: string[],
  service: Service,
  originalJsHandler: (m: NodeModule, filename: string) => any
) {
  const exts = new Set(extensions);
  // Can't add these extensions cuz would allow omitting file extension; node requires ext for .cjs and .mjs
  // Unless they're already registered by something else (nyc does this):
  // then we *must* hook them or else our transformer will not be called.
  for (const cannotAdd of ['.mts', '.cts', '.mjs', '.cjs']) {
    if (exts.has(cannotAdd) && !hasOwnProperty(require.extensions, cannotAdd)) {
      // Unrecognized file exts can be transformed via the `.js` handler.
      exts.add('.js');
      exts.delete(cannotAdd);
    }
  }

  // Register new extensions.
  for (const ext of exts) {
    registerExtension(ext, service, originalJsHandler);
  }

  if (preferTsExts) {
    /** Re-sort iteration order of Object.keys() */
    sortForPreferredExtension(exts) ;
  }
}

function sortForPreferredExtension(...[exts]: [exts: Iterable<string>] )
{

  {
    const preferredExtensions = Immutable.OrderedSet<string>([...exts, ...Object.keys(require.extensions)]);

    // Re-sort iteration order of Object.keys()
    for (const ext of preferredExtensions) {
      const old = Object.getOwnPropertyDescriptor(require.extensions, ext);
      delete require.extensions[ext];
      Object.defineProperty(require.extensions, ext, old!);
    }
  }
}

/**
 * Register the extension for node.
 */
function registerExtension(ext: string, service: Service, originalHandler: (m: NodeModule, filename: string) => any) {
  const old = require.extensions[ext] || originalHandler;

  require.extensions[ext] = function (m: any, filename) {
    if (service.ignored(filename)) return old(m, filename);

    /* TODO this is doing the thing backwards, isn't it? */

    assertScriptCanLoadAsCJS(service, m, filename);

    const _compile = m._compile;

    m._compile = function (code: string, fileName: string) {
      debug('module._compile', fileName);

      const result = service.compile(code, fileName);
      return _compile.call(this, result, fileName);
    };

    return old(m, filename);
  };
}

/**
 * Internal source output.
 */
type SourceOutput = [string, string, false] | [undefined, undefined, true];

/**
 * Update the output remapping the source map.
 */
function updateOutput(
  outputText: string,
  fileName: string,
  sourceMap: string,
  getEmitExtension: (fileName: string) => string
) {
  const base64Map = Buffer.from(updateSourceMap(sourceMap, fileName), 'utf8').toString('base64');
  const sourceMapContent = `//# sourceMappingURL=data:application/json;charset=utf-8;base64,${base64Map}`;
  // Expected form: `//# sourceMappingURL=foo bar.js.map` or `//# sourceMappingURL=foo%20bar.js.map` for input file "foo bar.tsx"
  // Percent-encoding behavior added in TS 4.1.1: https://github.com/microsoft/TypeScript/issues/40951
  const prefix = '//# sourceMappingURL=';
  const prefixLength = prefix.length;
  const baseName = /*foo.tsx*/ basename(fileName);
  const extName = /*.tsx*/ extname(fileName);
  const extension = /*.js*/ getEmitExtension(fileName);
  const sourcemapFilename = baseName.slice(0, -extName.length) + extension + '.map';
  const sourceMapLengthWithoutPercentEncoding = prefixLength + sourcemapFilename.length;
  /*
   * Only rewrite if existing directive exists at the location we expect, to support:
   *   a) compilers that do not append a sourcemap directive
   *   b) situations where we did the math wrong
   *     Not ideal, but appending our sourcemap *after* a pre-existing sourcemap still overrides, so the end-user is happy.
   */
  if (outputText.substr(-sourceMapLengthWithoutPercentEncoding, prefixLength) === prefix) {
    return outputText.slice(0, -sourceMapLengthWithoutPercentEncoding) + sourceMapContent;
  }
  // If anyone asks why we're not using URL, the URL equivalent is: `u = new URL('http://d'); u.pathname = "/" + sourcemapFilename; return u.pathname.slice(1);
  const sourceMapLengthWithPercentEncoding = prefixLength + encodeURI(sourcemapFilename).length;
  if (outputText.substr(-sourceMapLengthWithPercentEncoding, prefixLength) === prefix) {
    return outputText.slice(0, -sourceMapLengthWithPercentEncoding) + sourceMapContent;
  }

  return `${outputText}\n${sourceMapContent}`;
}

/**
 * Update the source map contents for improved output.
 */
function updateSourceMap(sourceMapText: string, fileName: string) {
  const sourceMap = JSON.parse(sourceMapText);
  sourceMap.file = fileName;
  sourceMap.sources = [fileName];
  delete sourceMap.sourceRoot;
  return JSON.stringify(sourceMap);
}

/**
 * Filter diagnostics.
 */
function filterDiagnostics(diagnostics: readonly _ts.Diagnostic[], filters: DiagnosticFilter[]) {
  return diagnostics.filter((d) =>
    filters.every(
      (f) =>
        (!f.appliesToAllFiles && f.filenamesAbsolute.indexOf(d.file?.fileName!) === -1) ||
        f.diagnosticsIgnored.indexOf(d.code) === -1
    )
  );
}

/**
 * Get token at file position.
 *
 * Reference: https://github.com/microsoft/TypeScript/blob/fcd9334f57d85b73dd66ad2d21c02e84822f4841/src/services/utilities.ts#L705-L731
 */
function getTokenAtPosition(ts: TSCommon, sourceFile: _ts.SourceFile, position: number): _ts.Node {
  let current: _ts.Node = sourceFile;

  outer: while (true) {
    for (const child of current.getChildren(sourceFile)) {
      const start = child.getFullStart();
      if (start > position) break;

      const end = child.getEnd();
      if (position <= end) {
        current = child;
        continue outer;
      }
    }

    return current;
  }
}

/**
 * Create an implementation of node's ESM loader hooks.
 *
 * This may be useful if you
 * want to wrap or compose the loader hooks to add additional functionality or
 * combine with another loader.
 *
 * Node changed the hooks API, so there are two possible APIs.  This function
 * detects your node version and returns the appropriate API.
 *
 * @category ESM Loader
 */
export const createEsmHooks: typeof createEsmHooksFn = (tsNodeService: Service) =>
  (require('./esm') as typeof import('./esm')).createEsmHooks(tsNodeService);

/**
 * When using `module: nodenext` or `module: node12`, there are two possible styles of emit depending in file extension or package.json "type":
 *
 * - CommonJS with dynamic imports preserved (not transformed into `require()` calls)
 * - ECMAScript modules with `import foo = require()` transformed into `require = createRequire(); const foo = require()`
 */
export type NodeModuleEmitKind = 'nodeesm' | 'nodecjs';
