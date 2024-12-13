
/// <reference lib="ES2022" />
/// <reference lib="DOM" />



import { builtinModules as builtinModulesListed0, Module } from 'node:module';
import * as util from 'node:util';

import assert = require('node:assert');
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
  Immutable,
  type ArgsWithOptions, 
  AtLeastEitherProp,
} from './util';

class MockBlob {
  constructor(readonly data: Buffer, readonly type: string)
  {}
}

;
/**
 * verbatim what's reported by {@link builtinModulesListed0 `require("node:module").builtinModules`}
 * 
 */
const builtinModulesListed = builtinModulesListed0 ;

/**
 * {@link builtinModules}
 * 
 * - return verbatim
 *   what's reported by {@link builtinModulesListed0 `require("node:module").builtinModules`}
 * 
 * - the harder case of
 *   `electron`, Electron's official "module"
 *   whose `require(...)`ing gives different results depending on whether the running platform ({@link process.execPath}) is Electron (inwhichcase it ends with `namespace` or, possibly, Function) or Node (including `electron --as-regular-nodejs`) (inwhichcase it returns `string` Path ).
 *   assuming that `require` refers to {@link Module.createRequire the native `require`},
 *   `require("node:electron")`, unlike values listed in {@link builtinModulesListed0 `builtinModules`}, will fail (with `ERR_MODULE_NOT_FOUND: cannot find module 'node:electron'`),
 *   raising debate astowhether `electron` deserves to be in this list.
 * 
 */
const builtinModules = (

  utilReiterated(function* () {

    /**
     * return verbatim
     * what's reported by {@link builtinModulesListed0 `require("node:module").builtinModules`}
     * 
     */
    yield* builtinModulesListed ;

    /**
     * the harder case of
     * `electron`, Electron's official "module"
     * whose `nativeRequire(...)`ing gives different results depending on whether the running platform ({@link process.execPath}) is Electron (inwhichcase it ends with `namespace` or, possibly, Function) or Node (including `electron --as-regular-nodejs`) (inwhichcase it returns `string` Path ).
     * `nativeRequire("node:electron")`, unlike values listed in {@link builtinModulesListed0 `builtinModules`}, will fail (with `ERR_MODULE_NOT_FOUND: cannot find module 'node:electron'`),
     * raising debate astowhether `electron` deserves to be in this list.
     * 
     */
    {
    ;
    try {
      ;
      if (isWithinElectronJsInTermsOfRequireElectronPackage() ) {
        yield "electron" ;
      }
    } catch (z) {
      console["warn"](`[EbJs Enumerate BuiltinModules] cannot find module 'electron' `, String(z) ) ;
    }
    }

  })
) ;

/* avoid using `const isSomeDoSome = function () { ... ... }` since we use forward reference! */

/**
 * whether
 * the running platform is Electron rather than Regular NodeJS,
 * intermsa {@link hasAlivatedElectronJsPackageLoadTreatment}
 * 
 */
function isWithinElectronJsInTermsOfRequireElectronPackage()
{

    return (
      hasAlivatedElectronJsPackageLoadTreatment()
    ) ;
}
/**
 * whether
 * `require("electron")` (or {@link ImportMeta the default-import of it })
 * will end with "alivated" `namespace` `ElectronApp`, instead of ending with String Path,
 * which will vary depending on whether being run on Electron or Regular NodeJS
 * 
 */
function hasAlivatedElectronJsPackageLoadTreatment()
{

  /**
   * {@link happensProperElectronJsNamespace};
   * it'd be
   * `object` or `function` if the underlying platform is run as Electron (see also "run Electron as regular Node process"!), or
   * `string` (`path/to/electron.exe`) otherwise
   * 
   * to anticipate future possibility of it yielding object with different `typeof` result
   * we may deserve to handle additional value/result eg `"function"`
   * 
   */
  const happensProperElectronJsNamespace = (
    (typeof require("electron") === "object" )
    || (typeof require("electron") === "function" )
  ) ;

  return happensProperElectronJsNamespace ;
}

import { createRequire, } from 'node:module';

import * as VM from "node:vm" ;

import type * as _sourceMapSupport from '@cspotcode/source-map-support';
import { BaseError } from 'make-error';
import type * as _ts from 'typescript';

import type { Transpiler, TranspilerFactory } from './transpilers/types';

interface WhenImportantAssumedActualFileNameExtProps
{
  readonly fileExt: string ;
}

interface WhenImportantAssumedActualSrcFilePathInfoProps
{
  readonly assumedSrcPath : string,
}

import { relative, basename, extname, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';

export interface WhenImportantEsmImportAttribsProps
{
  readonly esmImportAttribs: ImportAttributes ;
}

/**
 * supported subset of known attribs
 * 
 */
interface SupportedEsmImportAttribProps extends Extract<(
  & ImportAttributes
), any > {}

namespace SupportedEsmImportAttribProps {

  /**
   * "dummy" value implied by use of `require(...)` or ESM `import * as L` or `await import(...)`
   * 
   */
  export const cjsTypeString: "cjs" | "commonjs" | "js-module" | "jsm" = (
    "cjs"
  ) ;

  /**
   * the CharSet assumed by `translateInlineScriptIntoCjs` for given value of `esmImportAttribs.type`
   * 
   */
  export function getCharsetNameForTypev(x: string ): NodeJS.BufferEncoding
  {

    if ((
      ["raw", "blob", "bytes", ].includes(x)
    )) {
      return "latin1" ;
    }

    return "utf8" ;
  }

}

const compactStringifyImportAttribs = (

  function (...[attribs]: [attribs: ImportAttributes ])
  {
    return (
      JSON.stringify(Immutable.Map(attribs).toObject(), null )
    ) ;
  }
) ;

type SupportedImportConfig<SpclExtraProps extends object = {}> = (

  /**
   * we made misassumption thinking that the 2nd arg of ES `import(...)` expr (which returns Promise) is exactly {@link ImportAttributes}, but
   * this is wrong, in-fact {@link ImportAttributes the "import attributes"} is {@link ImportAttributes the value of the property `with` of it}
   * 
   */
  & {
    /**
     * we made misassumption thinking that the 2nd arg of ES `import(...)` expr (which returns Promise) is exactly {@link ImportAttributes}, but
     * this is wrong, in-fact {@link ImportAttributes the "import attributes"} is {@link ImportAttributes the value of the property `with` of it}.
     * so we're moving it into `with`, but
     * we'll need to add this constraint sothat callers shall immediately fix up
     * 
     * leave this unset.
     * 
     * @deprecated
     * 
     */
    readonly type ?: never
  }
  
  & {
    /**
     * obligatory;
     * set its `type` to
     * {@link SupportedEsmImportAttribProps.cjsTypeString} for both CJS and ESM,
     * `"json"` for JSON File,
     * `"string"` if u want it raw as {@link string},
     * `"blob"` if u want it raw as {@link Blob},
     * `"url"` if u want it raw as {@link URL.href URL-String} (may be Remote URL, or Blob-URL, or Data-URL, depending on config or platform),
     * 
     * ```
     * const RecordType =
     * evaluateModule("./util-recordtypes", {
     *   with: {
     *     type: SupportedEsmImportAttribProps.cjsTypeString,
     *   }
     * })
     * ```
     * 
     * ```
     * const img =
     * evaluateModule("./MainBackground.svg", {
     *   with: {
     *     type: "blob",
     *   }
     * })
     * ```
     * 
     */
    readonly with: SupportedEsmImportAttribProps,
  }
  & SpclExtraProps
) ;

interface XhrSyncTranslatorInvar<out R = any, SpclExtraProps extends object = {}> {

  (...args: ArgsWithOptions<[entryPointPath: string], Required<Omit<SupportedImportConfig<SpclExtraProps>, "type" > > > ): R ;
}

const getFileNameExt = (

  // assumedSrcPath.match(/(\.(\w+))$/)?.[1]
  (...[assumedSrcPath]: [path: string]) => (
    assumedSrcPath.match(/(\.(\w+))$/)?.[1]
  )
) ;

import { findAndReadConfig, loadCompiler } from './configuration';
import type { TSCommon, TSInternal } from './ts-compiler-types';
import { createModuleTypeClassifier, ModuleTypeClassifier } from './module-type-classifier';
import { createResolverFunctions } from './resolver-functions';
import type { createEsmHooks as createEsmHooksFn } from './esm';
import { installCommonjsResolveHooksIfNecessary, ModuleConstructorWithInternals } from './cjs-resolve-hooks';
import { classifyModule } from './node-module-type-classifier';
import type * as _nodeInternalModulesEsmResolve from '../dist-raw/node-internal-modules-esm-resolve';
import type * as _nodeInternalModulesEsmGetFormat from '../dist-raw/node-internal-modules-esm-get_format';
import type * as _nodeInternalModulesCjsLoader from '../dist-raw/node-internal-modules-cjs-loader';
import { Extensions, getExtensions } from './file-extensions';
import { createTsTranspileModule } from './ts-transpile-module';
import { assertScriptCanLoadAsCJS } from '../dist-raw/node-internal-modules-cjs-loader';


const checkIsValidCjs = (

  function (...[fo, { assumedSrcPath, module: imd, fileExt: sfe, }] : (
    Parameters<(
      GnCsneOptions["dispatcher"]["dispatchCompiledCjsImpl"]
    )>
  ))
  : void
  {
    ;

    ;
    if ((
      fo
      .split(/\r?\n/)
      .filter(e => (
        e.match(/^\s*\bexport\s*\{\s*\}\s*;?\s*$/ )
        ||
        e.match(/^\s*\bexport\s*\{\s*$/ )
      ))
      .length
    ) ) {
      return (
        assert.fail((
          new Error(`assertion error, expected to be CJS but contains untransformed 'export {}', check your config! ${JSON.stringify({ assumedSrcPath, srcFileExt0: sfe, ndId: imd.id, }, null, 2 ) }`)
        ))
      ) ;
    }

  }
) ;

export interface ExportedValueHandler<out ReturnVal = any> {

  /**
   * select
   * which - of those -
   * to be the final return-value
   * 
   */
  (vexport: any, originalExports: object, module: NodeJS.Module): ReturnVal ;

}

interface EbPickFromExportedProps extends Extract<{

  /**
   * specify
   * which - of those -
   * to return
   * 
   */
  pickFromExporteds ?: ExportedValueHandler | null,

} , any > {}

/**
 * these two methods
 * handle found {@link _ts.Expression Expr(s) }
 * 
 */
interface OndpeRProps<out R>
{

  //
  onNewKnownPath : (value: string) => R ,
  onNewDynamicPathExpr : (expr: _ts.Expression) => R ,

}

interface OndpeProps extends OndpeRProps<void> {}

interface EbAaniAptProps extends Extract<{

  /**
   * if `true`, then
   * we'll unconditionally avoid the native `require`-or-`import`, irrespective of these confnding props,
   * which may be essential to avoid "bugs" (quirks) with the native support and to implement our config-dictated behvs
   * 
   */
  alwaysAvoidNativeImport?: boolean | null,

  //
  /**
   * try to
   * pre-list and pre-bundle as much 'import'-ed module(s) as trivial,
   * possibly extended by additional config(s)
   * 
   */
  alwaysPreTranspile?: boolean | null,

} , any > {}

/**
 * 
 * 
 * 
 */
interface OAlwaysPreTranspileOptProps
{

  //
  readonly oAlwaysPreTranspile: boolean,

}


/* EMULATION FOR SOME NODEJS FEATS, LIVE-RUN OR SAVED-BUNDLE */

/* EXTRACTED HERE, TO ALLOW BEING STATICALLY-BUNDLED WITH USER-SPACE APP CODE */




let tsc: typeof import("typescript") | null = (
  (() => {
    try {
      const tscImpl = ((require) )("typescript") ;
      console["log"](`[eb.js] good, we have TSC in hand`) ;
      return tscImpl ;
    } catch (z) {
      console["info"](String(z) ) ;
      console["debug"](z ) ;
      return null ;
    }
  })()
) ;





export function createSpclNodeEngine<const ActualOpts extends LiveRunningCsneOptions>(...crArgs : (

  /* no positional args; only options. */
  [opts: LiveRunningCsneOptions & ActualOpts ]
))
{
  ;
  const [opts ] = crArgs ;

  console["log"](`[createSpclNodeEngine]`, { } ) ;

  const {
    compileCjsToByCtxRunFnc1,
  } = (
  //

  (() => {

  interface CtxBt {
    readonly module: NodeJS.Module,
    readonly exports: Record<string, unknown>,
    readonly require: NodeRequire,
    readonly __filename: string,
    readonly __dirname: string,
  }

  return ((): (
    | {

      compileCjsToByCtxRunFnc1(codeAsCjs: string, opts: {
        purportedSrcPath: string;
      }): (((...args: [ctx: CtxBt]) => any)) ;

    }
  ) => {
  ;

  // if ((
  //   // TODO
  //   (
  //     (typeof window !== "undefined")
  //     ||
  //     (typeof HTMLDivElement !== "undefined")
  //   )
  // )) {

  //   // return assert.fail(`TODO`) ;
  //   return {

  //     compileCjsToByCtxRunFnc1: (...[fo, { purportedSrcPath }] ) => {
  //       ;
  //       return assert.fail(`TODO`) ;
  //     } ,

  //   } ;
  // }

  {
  ;

  // const dedicedCrossCallsCtx = (
  //   (
  //     // TODO
  //     !(
  //       (typeof window !== "undefined")
  //       ||
  //       (typeof HTMLDivElement !== "undefined")
  //     )
  //   ) ?
  //   VM.createContext(undefined , {  })
  //   :
  //   globalThis
  // ) ;
  const dedicedCrossCallsCtx = (
    (() => {
      if (
        // TODO
        !(
          (typeof window !== "undefined")
          ||
          (typeof HTMLDivElement !== "undefined")
        )
      ) {
        const newc1 = (
          VM.createContext(undefined , {  })
        ) ;

        Object.assign(newc1, {
          setInterval, clearInterval ,
          setTimeout , clearTimeout ,
          queueMicrotask   : globalThis.queueMicrotask ?? globalThis.setImmediate ,
          setImmediate     : globalThis.setImmediate ?? globalThis.queueMicrotask ,
          process ,
      
          ...(typeof fetch !== "undefined" ? { fetch, } : {} ) ,
          ...(typeof Request !== "undefined" ? { Request, } : {} ) ,
          ...(typeof Response !== "undefined" ? { Response, } : {} ) ,
      
      
        } ) ;
      
        {
          const kGlobalThis = Object.getOwnPropertyNames(globalThis) ;
          0 && console["log"]({ kGlobalThis, }) ;

          if (0) {
            ;
            VM.runInContext((
              `
              for (const k in (
                ${JSON.stringify(kGlobalThis, null, 2 ) }
                // .filter(e => e.match(${"" + RegExp("^\\w+$", ) }) /* */ )
              ) ) {
                void [eval(k) ] ;
              }
              `
            ), newc1) ;
          }

          if (1) {
            for (const k of kGlobalThis ) {
              newc1[k] ||= (globalThis as Record<string, unknown> )[k] ;
            }
          }

        }

        return newc1 ;
      } else {

        return globalThis ;
      }
    })()
  ) ;

  ;
  const expandCtx = (...[ctx]: [...[ctx: CtxBt] ]) => (
    (() => {
                    const { module, exports, require, __filename, __dirname, } = ctx ;
                    const ctx1 = {
                      module: module,
                      __module: module,
                      exports: exports,
                      __exports: exports,
                      require: require,
                      __require: require,

                      __filename, __dirname,
                    } ;
                    return ctx1 ;
    })()
  ) ;

  ;
  return {

    compileCjsToByCtxRunFnc1: (

      function compileCjsToByCtxRunFnc1Impl (...[fo, { purportedSrcPath }] )
      : (
        ((...args: [ctx: CtxBt ] ) => any )
      )
      {
          ;
          ;

          {
          ;

          if (1) {

          const evl1 = (
            (...[ctx] : [...Parameters<ReturnType<typeof compileCjsToByCtxRunFnc1Impl> > ] ) => (
                (() => {
                  const ctx1 = expandCtx(ctx) ;
                  try {
                    return (
                      VM.compileFunction(fo, [], {
                        ...((dedicedCrossCallsCtx === globalThis) ? {} : { parsingContext: dedicedCrossCallsCtx , } ) ,
                        filename: (
                          purportedSrcPath
                        ) ,
                        contextExtensions: [ctx1] ,
                      } )
                    ) ;
                  } catch (z) {
                    const sm = String(z) ;
                    throw z ;
                  }
                })()
                ()
              )
            ) ;

            return (
              (...[ctx]: Parameters<typeof evl1>) => (
                evl1(ctx)
              )
            ) ;
          }

          ;}

          {
          ;
          const canBeStraightEval = (
            (
              (new VM.Script((
                `(function () { "use strict" ; return /** @type {(  ) => any } */ ( ) => {
                  ;
    
                  const __require = 1 ;
    
                  try {
                    eval("__require") ;
                    console["warning"]('[st-ts-node] eval seems to work', ) ;
                    return true ;
                  } catch (z) {
                    if (z instanceof Error) {
                      if (z instanceof ReferenceError || z instanceof TypeError || z instanceof RangeError) {
                        console["error"]('[st-ts-node] buggy eval implementation evidenced by caught exception:', z ) ;
                        console["error"]('[st-ts-node] if youre using Electron, please file issue to https://npmjs.com/package/electron :' ) ;
                        return false ;
                      }
                    }
                    throw z ;
                  }
                } ; }).call(undefined) `
              ) , {
                filename: purportedSrcPath,
              } ) )
              .runInContext(dedicedCrossCallsCtx)
              (  )
            ) as boolean
          );
          return (
            (new (class extends VM.Script {
              runInContext(...[c, ...o]: Parameters<VM.Script["runInContext"]> ) {
                if (c === globalThis) {
                  return this.runInThisContext(...o ) ;
                }
                return super.runInContext(c, ...o ) ;
              }
            })((
              `(function () { "use strict" ; return /** @type {(ctx: { module: NodeJS.Module, exports: Record<string, unknown>, require: NodeRequire, __filename: string, __dirname: string, } ) => any } */ ({ module, exports, require, __filename, __dirname, }) => {
                ;
  
                /* simulate 'import.meta' normally not available outside ESM */
                const __import_meta = Object.freeze({ dirname: __dirname, filename: __filename, url: require("node:url").pathToFileURL(__filename), resolve: require.resolve, }) ;
                /* to anticipate the user-code using these reserved names, we may need an unerrable aliases to these  */
                const __module = module ;
                const __exports = exports ;
                const __require = require ;
                const __process = process ;
                const __console = console ;
                module.__require = __require ;
                /* extra builtins */
                const __PromiseFromConst = (x) => Promise.resolve(x) ;
                const __requireCjs = __require ;
                const __requireEsm = __require ;
                const __requireEsmDefaultExport = (x) => __requireEsm(x)["default"] ;
  
                if (globalThis.process?.env?.STUDKTSNODE_DISPATCHENGINEDEBUG ) { debugger ; }
  
                ${canBeStraightEval ? (
                  `
                  eval((
                    ${JSON.stringify(fo) }
                    .replaceAll(${String(/\bimport\.meta\b/g) }, "__import_meta" )
                    .replaceAll(${String(/\bimport\s*\(/g) }, "((spcfier) => Promise.resolve(module.__require(spcfier ) ) )(" )
                  ) ) ;
                  `
                ) : (
                  console["error"](`falling back to flat interpolation, which may expand and complicate possible SyntaxError(s) `)
                  ,
                  (
                    `{
                    ${fo }
                    }`
                  )
                ) }
              } ; }).call(undefined) `
            ) , {
              filename: purportedSrcPath,
            } ) )
            .runInContext(dedicedCrossCallsCtx)
          ) ;
          ;}

      }
    ) ,
  } ;

  }

  ;})() ;
  })()
  ) ;

  const dispatchCompiledCjsImpl: (
    GnCsneOptions["dispatcher"]["dispatchCompiledCjsImpl"]
  ) = (

    function (...dpArgs )
    {
      const [fo, { fileExt: srcFileExt0, assumedSrcPath, module: imd, }] = dpArgs;

      /**
       * a helper to (depending on value of {@link dccConsole.verboseDccImpl} ) log spurious `Maximum Call Stack Size Exceeded` problems
       * because execution refuses to suspend in that scenario (even with static s `debugger ;`)
       * 
       */
      if (1) {
        ;
        if (dccConsole.verboseDccImpl ) {
          console["log"]({
            assumedSrcPath ,
            srcFileExt0 ,
            id: imd.id ,
            __filename: imd.filename ,
          }) ;
        }
      }

      const REQUIRE = imd.require;

      const originalExports = imd.exports ;

      behingMdueReentranceCheck(imd, function () {
      //

      if (1) {
        checkIsValidCjs(fo, {
          assumedSrcPath ,
          fileExt: srcFileExt0 ,
          module: imd,
        }) ;
      }

      // TODO

      const f1 = (
        (function fImpl(): (
          ((...args: [ctx: { module: NodeJS.Module, exports: Record<string, unknown>, require: NodeRequire, __filename: string, __dirname: string, } ] ) => any )
        ) {

          const purportedSrcPath = (
            assumedSrcPath
            // .replace(/\.m?()([jt]sx?)$/, ".c$2")
          );

          return (
            compileCjsToByCtxRunFnc1(fo, {
              purportedSrcPath,
            })
          ) ;
        })()
      ) ;

      if (0) {
        console["log"](f1.toString() ) ;
      }

      void (
        (() => {
          try {
            f1({
              module: imd ,
              exports: originalExports ,
              require: REQUIRE ,
              __filename: assumedSrcPath ,
              __dirname: join(assumedSrcPath, "..") ,
            }) ;
          } catch (z) {
            if (Number(globalThis.process?.env?.["STUDKTSNODE_DEBUG"] ) ) {
              if (getStackOrMessage(z).match(/\bSyntaxError\b/) ) {
                debugger ;
              }
            }
            if (z instanceof Error) {
              ;
              try {
                imd.loadingIncomplete = z ;
              } catch (z1) {
              }
            }
            throw z ;
          }
        })()
      ) ;

      }) ;

      ;
      for (const z of [imd.loadingIncomplete].filter(z => (z instanceof Error) )) {
        throw z ;
      }
      imd.loadingIncomplete = false ;

      return (
        ({
          finalMainExports: imd.exports,
          originalExports,
          module: imd,
        } as const )
      ) ;
    }
  ) ;

  const dccConsole = (
    new (class DccConsoleImpl {
      verboseDccImpl : boolean = false ;
    })
  ) ;

  const dccLinkerHelper = (
    (() => {
      if (tsc) {
        ;

        const dccEscapeBuiltinRef = (

          (id: string): string => (
      
            "__" + id.replace(/\./g , () => "_" )
          )
        ) ;

        const createEscapedBuiltinRef = (

          (id: string): _ts.Expression => (
      
            tsc.factory.createIdentifier((
              dccEscapeBuiltinRef(id)
            ))
          )
        ) ;

        ;
        const createRequireCall = (
          (...[args]: [argExprs: readonly _ts.Expression[]] ) => (
            tsc.factory.createCallExpression(
              createEscapedBuiltinRef("require") ,
              undefined, args )
          )
        ) ;
      
        return {
          dccEscapeBuiltinRef ,
          createEscapedBuiltinRef,
          createRequireCall,
        } as const ;
      } else {
        return {} as const ;
      }
    })()
  ) ;

  const efnl = (
    createSpclGnNodeEngine({
      ...opts ,
      dispatcher: {
        dispatchCompiledCjsImpl ,
      },
      impliedHelper: (
        {
          ...dccLinkerHelper ,
          dccConsole ,
        } as const
      ) ,
    })
  ) ;

  const {
    checkIsValidCjs,
    behingMdueReentranceCheck,
  } = efnl ;

  return efnl ;
}

export function createSpclNodeImportsScanningEngine<const ActualOpts extends DepScnCsneOptions>(...crArgs : (

  /* no positional args; only options. */
  [opts: DepScnCsneOptions & ActualOpts ]
))
{
  ;
  const [{ onNewDynamicPathExpr, onNewKnownPath, ...opts } ] = crArgs ;

  console["log"](`[createSpclNodeImportsScanningEngine]`, { } ) ;

  return (
    createSpclNodePackingEngine({
      ...opts ,
      onNewDynamicPathExpr,
      onNewKnownPath,
    })
  ) ;
}

export function createSpclNodePackingEngine<const ActualOpts extends PackingCsneOptions>(...crArgs : (

  /* no positional args; only options. */
  [opts: PackingCsneOptions & ActualOpts ]
))
{
  ;
  const [opts ] = crArgs ;

  if (!tsc) {
    throw new TypeError(`[createSpclNodePackingEngine] cannot proceed because there's no TSC.`) ;
  }

  console["log"](`[createSpclNodePackingEngine]`, { } ) ;

  const dispatchCompiledCjsImpl: (
    GnCsneOptions["dispatcher"]["dispatchCompiledCjsImpl"]
  ) = (

    function (...dpArgs )
    {
      const [fo, { fileExt: srcFileExt0, assumedSrcPath, module, }] = dpArgs;

      const REQUIRE = module.require;

      const originalExports = module.exports ;

      // TODO

      // /**
      //  * as an early step,
      //  * do that thru plain S&R
      //  * 
      //  */
      // {
      //   const roughResults = (
      //     fo.match(/\bimport\s*\(") /g)
      //   ) ;
      // }

      // TODO

      const foParsed = (
        tsc.createSourceFile(assumedSrcPath, fo, { languageVersion: tsc.ScriptTarget.ESNext }, true )
      ) ;

      let ps : Immutable.Set<_ts.Expression> = Immutable.Set() ;

      {
        const collectE = (x: _ts.Expression ) => {
          ps = ps.add(x) ;
        } ;

        const collectIfDoesAndTx = (

          (node: _ts.Node ) => {

            /** `import ... from ...` */
            if (tsc.isImportDeclaration(node) ) {
              collectE(node.moduleSpecifier) ;
            }
            /** `import ... = ... ;` */
            if (tsc.isImportEqualsDeclaration(node) ) {
              if (tsc.isExternalModuleReference(node.moduleReference) ) {
                collectE(node.moduleReference.expression ) ;
              }
            }

            if (tsc.isExportDeclaration(node) ) {
              /** `export ... from ...` */
              if (node.moduleSpecifier) {
                collectE(node.moduleSpecifier) ;
              }

              return tsc.factory.createEmptyStatement() ;
            }

            return node ;
          }
        ) ;

        const scanningTr: _ts.TransformerFactory<_ts.Node> = (
          (ctx) => {
  
            return (
              collectIfDoesAndTx
            ) ;
          }
        ) ;

        void (
          tsc.createPrinter({} , { substituteNode: (_, node) => collectIfDoesAndTx(node) , })
          .printFile(foParsed,)
        ) ;
      }

      behingMdueReentranceCheck(module , () => {
      ;

      for (const x of ps) {
        ;
        void (
          subtraverseDynRq({ require: REQUIRE, }, x, )
        ) ;
      }

      })

      // TODO

      return (
        ({
          finalMainExports: module.exports,
          originalExports,
          module,
        } as const )
      ) ;
    }
  ) ;

  /* the `require`-based descentional methods */

  /** using `require`, descend with static specifier */
  const subtraverseStaticRq = (

    ((...[{ require: REQUIRE, }, x, ] ) => {
      return (
        REQUIRE(x)
      ) ;
    }) satisfies SubTraverseRqFncSig<string>
  ) ;
  /** using `require`, descend with arbitrary specifier */
  const subtraverseDynRq = (

    ((...[{ require: REQUIRE, }, x, ] ) => {
      ;
      if (tsc.isStringLiteral(x) ) {
        return (
          subtraverseStaticRq({ require: REQUIRE, }, (x satisfies _ts.StringLiteral).text, )
        ) ;
      }

      {
        console["error"](`unable to evaluate expr: `, x ) ;
        return ;
      }
    }) satisfies SubTraverseRqFncSig<_ts.Expression>
  ) ;
  /** the base sig of the `require`-based descentional methods */
  interface SubTraverseRqFncSig<in XQ extends {}> {
    (...args: (
      ArgsWithOptions<[{
        require: NodeRequire,
      }, q: XQ, ], {
      } >
    ) ) : any ;

  }

  const impliedHelper = (
    (() => {
      return {} as const ;
    })()
  ) ;

  const efnl = (
    createSpclGnNodeEngine({
      ...opts ,
      dispatcher: {
        dispatchCompiledCjsImpl ,
      },
      impliedHelper: impliedHelper ,
    })
  ) ;

  const {
    checkIsValidCjs,
    behingMdueReentranceCheck,
  } = efnl ;

  return efnl ;
}

export function createSpclGnNodeEngine<const ActualOpts extends GnCsneOptions<XHelper>, const XHelper extends object>(...crArgs : (

  /* no positional args; only options. */
  [opts: GnCsneOptions<XHelper> & ActualOpts ]
))
{

  const [opts ] = crArgs ;
  const {
    compiler,
    oAlwaysPreTranspile,

    dispatcher: { dispatchCompiledCjsImpl, } ,
    impliedHelper: dccLinkerHelper ,

    onNewKnownPath: propagateNewKnownPathImpl = () => {},
    /** making optional in case {@link _ts.factory} is unusable */
    onNewDynamicPathExpr: propagateNewDynamicPathExprImpl,

    aux: { fs: spclFs, },
  } = opts ;
  const propagateNewKnownPath = (

    (value: string) => {
      propagateNewKnownPathImpl(value) ;
      tsc && propagateNewDynamicPathExprImpl?.(tsc.factory.createStringLiteral(value) ) ;
    }
  ) ;

  console["log"](`[createSpclGnNodeEngine]`, { oAlwaysPreTranspile, } ) ;

  ;
  interface CachedXT<out R = any > extends XhrSyncTranslatorInvar<R, { } > {}

  interface XT<out R = any > extends XhrSyncTranslatorInvar<R, { readonly scmc: SCMC, } > {}

  /**
   * 
   * 
   */
  const getScriptFileHash: CachedXT<string> = (

    (path, { with: attribs , }) => (
      path + "!" + compactStringifyImportAttribs(attribs)
    )
  ) ;
  //

  const { translateInlineScriptIntoCjs , } = { ...compiler, } ;

  const behingMdueReentranceCheck = (

    function (...[imd, runMain]: [GnCsneXoduleObj, main: () => void])
    {
      ;
      const { filename: assumedSrcPath, } = imd ;

      const REQUIRE = imd.require;

      const originalExports = imd.exports ;

      if ((imd.loaded ??= false ) ) {
        if (imd.loadingIncomplete) {
          console["warn"](`require(ed) module already started init before but not successfully done; possibly there's error or there's module-cycle; consider fixing the bugs, or rewriting your app to avoid cyclic imports`, { assumedSrcPath, }) ;
        }
      } else {
      //

      imd.loadingIncomplete = true ;
      imd.loaded ||= true ;

      try {
        runMain() ;
      } catch (z) {
        if (z instanceof Error ) {
          imd.loadingIncomplete ||= z ;
        }
        throw z ;
      }

      }

      ;
      for (const z of [imd.loadingIncomplete].filter(z => (z instanceof Error) )) {
        throw z ;
      }
      imd.loadingIncomplete = false ;

    }
  ) ;

  interface ToDispatchCompiledCjsOptions extends Extract<(
    & WhenImportantAssumedActualSrcFilePathInfoProps
    & WhenImportantAssumedActualFileNameExtProps
    & {
      scmc: SCMC ,
    }
    & WhenImportantEsmImportAttribsProps
  ), any> {}

  interface ToDispatchCompiledCjsOptionsAndPickFromOuter<out R> extends Extract<ToDispatchCompiledCjsOptions & {
    pickFromExporteds: ExportedValueHandler<R>,
  }, any> {}

  const runCompiledCjsAndGetModuleExportsDesc = (

    function (...dpArgs : ArgsWithOptions<[code: string] , ToDispatchCompiledCjsOptions >)
    {
      const [fo, { fileExt: srcFileExt0, assumedSrcPath, scmc, esmImportAttribs, }] = dpArgs;

      const {
        module ,
        require: REQUIRE ,
      } = scmc.spclGetModuleAndRequire1(assumedSrcPath, {
        with: esmImportAttribs ,
      }) ;

      return (
        dispatchCompiledCjsImpl(fo, {
          fileExt: srcFileExt0 ,
          assumedSrcPath ,
          module ,
        })
      ) ;
    }
  ) ;

  const runCompiledCjsAndGetSelectedExport = (

    function <const R>(...dpArgs : ArgsWithOptions<[code: string] , ToDispatchCompiledCjsOptionsAndPickFromOuter<R> >)
    {
      const [fo, { pickFromExporteds, ...opts1 }] = dpArgs;

      // TODO

      const {
        finalMainExports ,
        originalExports ,
        module ,
      } = (
        runCompiledCjsAndGetModuleExportsDesc(fo, {
          ...opts1
        } )
      ) ;

      return (
        pickFromExporteds(finalMainExports, originalExports, module )
      ) ;
    }
  ) ;

  let resolversVar: import("./index").NdResolversGcePublic | null = (

    null
  ) ;

  const setNdImportResolvers = (
    (() => {
      type I = import("./index").NdResolversGcePropagator ;
      const impl: I = (...[x] ) => {
        resolversVar = x ;
      } ;
      return impl satisfies I as I ;
    })()
  ) ;

  const getNdResolversOverallExpectNonnull = () => (
    resolversVar
    ?? assert.fail(new TypeError(`[studk-ts-node] [EB] this engine hasn't received the resolvers yet. please first register one via 'setNdImportResolvers'.`) )
  );

  /**
   * 
   * @deprecated
   * 
   */
  const nativeRequire = require ;

  /** {@link newScmc} */
  interface SCMC extends ReturnType<typeof newScmc> {}
  /** {@link newScmc} */
  function newScmc()
  {
  ;

  //
  const spclGetModuleAndRequire1 = (

    memoize (function spclGetModuleAndRequire1Impl(...args: Parameters<typeof spclCreateModuleAndRequire1>)
    {
      return (
        spclCreateModuleAndRequire1(...args)
      ) ;
    }, getScriptFileHash )
  ) ;

  /**
   * 
   */
  const spclCreateModuleAndRequire1 = (

    function (...sArgs : (
      Parameters<typeof getScriptFileHash>
    ) )
    {
      const [assumedSrcPath, { with: impoAttribs, }] = sArgs ;
      ;
      const assumedSrcUrl = pathToFileURL(assumedSrcPath) ;

      const {
        // getNodeCjsLoader ,
        // getNodeEsmGetFormat ,
        // getNodeEsmResolver ,
      } = (
        getNdResolversOverallExpectNonnull()
      ) ;

      const irqr: NodeJS.RequireResolve = (spcfier: string) => {
        const spcfierResolvedPath = createRequire(assumedSrcUrl).resolve(spcfier) ;
        return (
          spcfierResolvedPath
        ) ;
      } ;
      irqr.paths = nativeRequire.resolve.paths ;

      ;

      // TODO
      const requireCjsPath = (...[spcfier]: [string ]) => {
        /**
         * this seemingly extraneous `try .. catch` enclosure
         * is to give place for breakpoints in case things goes wrong
         * 
         */
        try {
        ;

        const spcfierResolvedPath = irqr(spcfier) ;

        if (builtinModules.includes(spcfier.replace(/^(?:node:)?/, "") ) && !existsSync(spcfierResolvedPath) ) {
          if (spcfier === "electron") {
            return nativeRequire("electron") ;
          }
          return nativeRequire(spcfier.replace(/^(?:node:)?/, "node:") ) ;
        }

        return (
          evaluateModuleOrSrcFileAtPath(spcfierResolvedPath, {
            alwaysAvoidNativeImport: true,
            cached: mainJustO as SCMC ,
            pickFromExporteds: ((...[e, originalExports]) => e )
            ,
          } )
        ) ;

        } catch (z) {

          // if (globalThis.process?.env?.["STUDKTSNODE_DEBUG"] ) {
          //   const stack = getStackOrMessage(z) ;
          //   if ((
          //     (stack.match(/\bSyntaxError\b/) && stack.toLowerCase().match(/\bunexpected token\b/) && stack.match(/'export'/ ) )
          //   ) ) {
          //     debugger ;
          //   }
          // }

          throw z ;
        }
      } ;

      // TODO
      const requireS = function requireFromFUrlImpl(...[spcfr]: [urlOrSpecifier: string ]) {
        ;

        (typeof spcfr === "string") || assert.fail(`${util.inspect(spcfr) }` ) ;

        if (spcfr.match(/^https?\:/) ) {
          throw new TypeError(`Illegal Internet Imports (${spcfr })`) ;
        }

        if (spcfr.match(/^file\:/) ) {
          const fpath = fileURLToPath(spcfr) ;
          return (
            requireCjsPath(fpath)
          ) ;
        }

        /**
         * single-letter protocols are generally held as sugar for corresponding (longer) `file:` URL
         * eg `J:/Dev/Py3Pt10` becomes `file:///J:/Dev/Py3Pt10`, and `J:\Dev\Node21p1` become `file:///J:/Dev/Node21p1`
         * 
         */
        if (spcfr.match(/^(\w)\:/) ) {
          const fpath = (spcfr) ;
          return (
            requireCjsPath(fpath)
          ) ;
        }

        // throw new TypeError(`TODO`) ;
        return (

          requireCjsPath(spcfr)
        ) ;
      } ;

      // TODO
      const REQUIRE: NodeRequire = (...[spcfier0]: [string | URL ]) => {
        if ((
          (spcfier0 instanceof URL)
          /* the above is subject to fail for Cross-Realm */
          || (typeof spcfier0 === "object")
        )) {
          console["warn"](new TypeError(`[studk-ts-node] [EB] deprecated use of 'URL(...)' ('[object URL]') as Specifier; please convert your Specifier into String first `) , { spcfier0, } );
          const spcfUrl = String(spcfier0) ;
          return (
            requireS(spcfUrl)
          ) ;
        } else {
          (typeof spcfier0 === "string") || assert.fail(`${util.inspect(spcfier0) }` ) ;
          return (
            requireS(spcfier0)
          ) ;
        }
      } ;

      const initialExportsObj = new Object;

      // @ts-ignore
      const newModule: (
        NodeJS.Module & {
          /** the initial/original value of {@link module.exports `theModule.exports` } */ readonly initialExportsObj: object,
        }
      ) = {
        exports: initialExportsObj,
        id: (
          `[studk-dispatchInlineScript]`
          + encodeURIComponent(assumedSrcPath )
          + (0.25125125125125 )
        ),
        require: REQUIRE,
        // TODO
        filename: assumedSrcPath,
        initialExportsObj: initialExportsObj,
      } ;

      ;
      REQUIRE.resolve = irqr ;
      REQUIRE.main = newModule ;
      REQUIRE.cache = nativeRequire.cache ;
      REQUIRE.extensions = nativeRequire.extensions ;

      return {
        module: newModule ,
        require: REQUIRE ,

        assumedSrcPath,
        assumedSrcUrl ,
      } as const ;
    }
  ) ;

  const main = {
    spclGetModuleAndRequire1 ,
    spclCreateModuleAndRequire1 ,
  } as const ;

  const mainJustO: object = main ;

  return main ;
  }

  /**
   * the default {@link SCMC}
   * to use for eg {@link evaluateModuleOrSrcFileAtPath} when `cached: true` (rather than explicit {@link SCMC} ref)
   * 
   * cannot use `const bar = ...` syntax because
   * such def syntax implies immediate c/d/i to {@link getNdResolversOverallExpectNonnull} even with {@link resolversVar} not having been (re)assigned yet;
   * 
   */
  const getDefaultScmc = (
    once(() => (
      newScmc()
    ))
  ) ;

  let dispatchInlineScript : (
    | (
      (...args : ArgsWithOptions<[code: string] , (
        // {
        //   fileExt: string,
        //   assumedSrcPath: string ,
        //   // pickFromExporteds?: (vexport: any, originalExports: object, module: NodeJS.Module) => ({} | null ),
        // }
        Omit<ToDispatchCompiledCjsOptions, keyof Pick<ToDispatchCompiledCjsOptions, "esmImportAttribs">>
      ) >) => any
    )
    | null
  ) ;

  let resolvePreCompiled: (
    (...args: Parameters<XT> ) => (
      & {
        readonly assumedSrcPath: string;
        readonly srcCode: string | Blob;
        readonly sfe: string;
        readonly compiledCjsCode: string;
      }
      & {
        //
      }
    )
  ) ;

  let ccc: import("lodash").MemoizedFunction | null = (
    null
  ) ;

  const spclReadFileSync = (

    (...spArgs : ArgsWithOptions<[path: string], {
      // encoding?: NodeJS.BufferEncoding,
    }> ) => {
      const [path, {
        // encoding: encodingSpec = null,
      } = {}] = spArgs ;

      // const attemptibleEncods = (
      //   encodingSpec ?
      //   [encodingSpec]
      //   : (Immutable.Seq.Indexed(["utf8", "latin1" ]) satisfies Immutable.Seq.Indexed<NodeJS.BufferEncoding>).toArray()
      // ) ;

      const c0 = (
        spclFs.readFileSync(path, )
      ) ;

      // for (const encoding of attemptibleEncods) {
      //   const s = new TextDecoder(encoding, ).decode(c0) ;
      //   if ((
      //     ((): boolean => {
      //       try {
      //         btoa(s) ;
      //         return true ;
      //       } catch (z) {
      //         console.warn({ path, encoding0: encodingSpec, attemptibleEncods, encoding } , String(z)) ;
      //         return false ;
      //       }
      //     })()
      //   ) ) {
      //     return s ;
      //   }
      // }

      // throw new TypeError() ;

      return (
        // new Blob([c0], {
        //   // type: "application/octet"
        // })
        // { data: c0, type: "application/octet", }
        new MockBlob(c0, "application/octet-stream")
      ) ;
    }
  ) ;

  const spclReadTxtFileSync = (

    (...[path] : [path: string]) => (
      spclFs.readFileSync(path, { encoding: "utf8", })
    )
  ) ;

  if (translateInlineScriptIntoCjs) {
  ;

  console["log"](`[createSpclNodeEngine] has compiler`, ) ;

  const internalDispatchScript = (

    //
    function <const R>(...dpArgs : ArgsWithOptions<[code: string] , (
      // {
      //   fileExt: string,
      //   assumedSrcPath: string ,
      //   pickFromExporteds: ExportedValueHandler<R>,
      // }
      ToDispatchCompiledCjsOptionsAndPickFromOuter<R>
    ) >)
    {
      ;
      const [srcCode, { fileExt: sfe, assumedSrcPath, scmc, esmImportAttribs, pickFromExporteds, }] = dpArgs;

      // TODO

      const assumedSrcUrl = pathToFileURL(assumedSrcPath) ;

      const fo = (
        translateInlineScriptIntoCjs(srcCode, {
          fileExt: sfe,
          assumedSrcPath,
          esmImportAttribs ,
        } )
      ) ;

      return (
        runCompiledCjsAndGetSelectedExport(fo, {
          fileExt: sfe,
          assumedSrcPath,
          scmc ,
          esmImportAttribs ,
          pickFromExporteds,
        } )
      ) ;
    }
  ) ;

  ;
  const resolveAndCompile = (

    /**
     * i don't think we can safely pack into {@link memoize }, since
     * this method is subject to being invoked by some the "rerunYyyYyy" methods below .
     * 
     */
    ebWfnAsIfmemoized((function resolvePreCompiledImpl(...[assumedSrcPath, { scmc, with: imptAttribs, }] ) {
      ;

      propagateNewKnownPath(assumedSrcPath) ;

      0 && console["log"](`[studk-ts-node's dispatchSrcFileApt-impl] ${assumedSrcPath }`, ) ;

      const sfe = (
        getFileNameExt(assumedSrcPath) ?? ".tsx"
      ) ;

      const appropriateSrcFileDecodeCharset = (

        SupportedEsmImportAttribProps.getCharsetNameForTypev(imptAttribs.type )
      ) ;

      if (!appropriateSrcFileDecodeCharset.match(/^utf-?8$/ ) ) {
        console.warn({ appropriateSrcFileDecodeCharset, imptAttribs, assumedSrcPath, }) ;
      }

      const srcCode = (

        spclReadFileSync(assumedSrcPath, {
          // encoding: appropriateSrcFileDecodeCharset
          // ,
        } )
      ) ;

      const compiledCjsCode = (
        translateInlineScriptIntoCjs(srcCode, {
          fileExt: sfe,
          assumedSrcPath ,
          esmImportAttribs: imptAttribs ,
        } )
      ) ;

      if (1) {

        const { module: simEdImd, } = (
          scmc.spclCreateModuleAndRequire1(assumedSrcPath, { with: imptAttribs, } )
        ) ;

        checkIsValidCjs(compiledCjsCode, {
          assumedSrcPath ,
          fileExt: sfe ,
          module: simEdImd,
        }) ;

      }

      return {
        assumedSrcPath ,
        //

        srcCode,
        sfe,
        compiledCjsCode,
      } as const ;
    }) satisfies (typeof resolvePreCompiled), getScriptFileHash )
  ) ;

  ccc = resolveAndCompile ;

  resolvePreCompiled = (
    resolveAndCompile
  ) ;

  dispatchInlineScript = (

    function (...[code, { fileExt, assumedSrcPath, scmc, }] )
    {
      ;
      return (
        internalDispatchScript(code, {
          fileExt ,
          assumedSrcPath: "<repl++" + assumedSrcPath,
          scmc ,
          esmImportAttribs: {
            type: SupportedEsmImportAttribProps.cjsTypeString ,
          } ,
          pickFromExporteds: ((...[e, originalExports]) => e) ,
        })
      ) ;
    }
  ) ;

  } else {
    ;

    console["log"](`[createSpclNodeEngine] no compiler`, ) ;

    dispatchInlineScript = null ;

    resolvePreCompiled = (
      (...[assumedSrcPath] ) => {

        propagateNewKnownPath(assumedSrcPath) ;

        const compiledCjsCode = (
          /** TODO although it seems clear static assets need to first be converted into CJS, maybe someone else 'd say otherwise */
          spclReadTxtFileSync(assumedSrcPath)
        ) ;

        return {
          assumedSrcPath ,
          compiledCjsCode ,
          srcCode: compiledCjsCode ,
          sfe: ".cjs" ,
        } ;
      }
    ) ;

    // TODO

  }

  /**
   * returns the return-value
   * if the Module-File already ran ({@link SCMC on given SCMC} with {@link ImportAttributes given attribs }), or
   * run it if not yet;
   * 
   */
  const evaluateModuleFilePretranspilativelyAtPath = (

    ebWfnAsIfmemoized((function dispatchSrcFileAptImpl(...[assumedSrcPath, impoConfig] ) {
      ;

      {
        const cmr = (
          impoConfig.scmc.spclGetModuleAndRequire1(assumedSrcPath, impoConfig )
        );
        if (cmr.module.loaded ) {
          return {
            vecport: cmr.module.exports,
            originalExports: cmr.module.initialExportsObj ,
            module: cmr.module ,
          } satisfies VemsModuleAndExportsDescProto ;
        }
      }

      {
      ;
      propagateNewKnownPath(assumedSrcPath) ;
      const {
        //
        sfe,
        compiledCjsCode,
      } = (
        resolvePreCompiled(assumedSrcPath, impoConfig )
      ) ;
      const result0 = (

        runCompiledCjsAndGetSelectedExport(compiledCjsCode, {
          fileExt: sfe,
          assumedSrcPath ,
          scmc: impoConfig.scmc,
          esmImportAttribs: impoConfig.with ,
          pickFromExporteds: (
            (...[vecport, originalExports, module]) =>
              ({ vecport, originalExports, module, } satisfies VemsModuleAndExportsDescProto)
          ) ,
        } )
      ) ;

      return result0 ;
      }
    }) satisfies ((...args: Parameters<XT> ) => VemsModuleAndExportsDescProto ), getScriptFileHash)
  ) ;

  interface VemsModuleAndExportsDescProto { vecport, originalExports, module, }

  // const reDispatchSrcFileAtPathAlt = (

  //   function (...[assumedSrcPath, { sfe, } ]: ArgsWithOptions<[path: string,], { sfe: string }>)
  //   {
  //     // TODO
  //     return (
  //       dispatchCompiledCjs(readFileSync(assumedSrcPath) , {
  //         assumedSrcPath ,
  //         fileExt: sfe ,
  //       } )
  //     ) ;
  //   }
  // ) ;

  const dispatchEntryPtSrcFileNativelyAtPath = (

    /**
     * dispatch via native `require` or `import` or {@link Module.runMain (the undocumented, yet remaining depended-on) `Module.runMain()`} with-little-to-no interception.
     * EXPERIMENTAL.
     * 
     * @deprecated
     * this method can only be run once whatever _args_, not safe to run again.
     * considered WIP.
     * 
     */
    function (...[entryPointPath]: [path: string])
    {
      // TODO
      if (0) {
        process.argv = [...(
          Immutable.Seq.Indexed(process.argv)
          .splice(1, 1, entryPointPath )
        )] ;
      }
      // // HACK workaround node regression
      // require('../dist-raw/runmain-hack.js').run(entryPointPath);
      Module.runMain() ;
    }
  ) ;

  /**
   * evaluate src-file {@link readFileSync at given _path_},
   * which may either simply returned cached return-value or-instead rerun it over depending on _options_
   * 
   */
  const evaluateModuleOrSrcFileAtPath = (

    /**
     * load and dispatch given script-file
     * 
     */
    function (...dpArgs: (

      ArgsWithOptions<[path: string], (
        & {

        }
        & (
          EbAaniAptProps
          & (
            import('./util').EitherOneProp<{ rerun: true, cached: true | SCMC, }>
          )
        )
        & EbPickFromExportedProps
        & { readonly XRError ?: ErrorConstructor, }
        & Partial<WhenImportantEsmImportAttribsProps>
      )>
    ))
    {
      const [
        entryPointPath, {
          alwaysAvoidNativeImport: elAvnArg = null,
          pickFromExporteds = null,
          alwaysPreTranspile: elAlwaysPreTranspileArg = null,
          cached: aCached = false , rerun: aRerun = false ,
          XRError: TypeError = globalThis.ReferenceError ,
          esmImportAttribs ,
        } = null || {},
      ] = null ?? dpArgs ;

      if (aCached && aRerun) {
        return assert.fail(`unsupported combination ${util.inspect({ cached: aCached, rerun: aRerun, })}`) ;
      }

      propagateNewKnownPath(entryPointPath) ;

      C : {
        ;
        if ((
          (elAvnArg || oAlwaysPreTranspile )
          || pickFromExporteds
        ) ) {
          break C ;
        }
        if (aCached) {
          return assert.fail(new TypeError(`would've head to 'dispatchEntryPtSrcFileNativelyAtPath' but ${util.inspect({ cached: aCached, }) }`)) ;
        }
        return (
          dispatchEntryPtSrcFileNativelyAtPath(entryPointPath)
        ) ;
      }

      {
        ;
        if (!(aCached || aRerun) ) {
          return assert.fail(new TypeError(`requires either be set. ${util.inspect({ cached: aCached, rerun: aRerun, })}` ) ) ;
        }
        const finalScmc: SCMC = (
          aCached ? (aCached === true ? getDefaultScmc() : aCached ) :
          aRerun ? (
            console["warn"](`initialising new/fresh EUV/SCMC (due to 'rerun')`)
            ,
            newScmc()
          ) :
          assert.fail(new TypeError(`please turn-on either. ${util.inspect({ cached: aCached, rerun: aRerun, })}`) )
        ) ;
        const result0 = (
          evaluateModuleFilePretranspilativelyAtPath(entryPointPath , { scmc: finalScmc, with: { type: SupportedEsmImportAttribProps.cjsTypeString, ...(esmImportAttribs ?? {} ) , } , } )
        );
        const result = (
          (pickFromExporteds ?? ((e) => e ) )(result0.vecport, result0.originalExports, result0.module)
        ) ;
        return result ;
      }
    }
  ) ;

  /**
   * internal function to restore dependent-typing (internally using `as T`) -
   * {@link NonNullable guarantee non-null} if-and-only-if `compiler` is actually set/present
   * 
   */
  const compiledThusNonNull = (

    <const V>(x: V) =>
      (x as ((typeof x) & ([ActualOpts] extends [{ compiler: {} }] ? {} : unknown)) )
  ) ;

  return {

    evaluateModuleOrSrcFileAtPath: evaluateModuleOrSrcFileAtPath,
    /** alias of {@link evaluateModuleOrSrcFileAtPath}. @deprecated */
    dispatchSrcFile: evaluateModuleOrSrcFileAtPath,
    dispatchInlineScript: compiledThusNonNull(dispatchInlineScript) ,
    dispatchEntryPtSrcFileNativelyAtPath ,
    /** alias of {@link dispatchEntryPtSrcFileNativelyAtPath}. @deprecated */
    dispatchSrcFileNativelyAtPath: dispatchEntryPtSrcFileNativelyAtPath,
    /** alias of {@link dispatchEntryPtSrcFileNativelyAtPath}. @deprecated */
    dispatchSrcFileNatively: dispatchEntryPtSrcFileNativelyAtPath,

    resolvePreCompiledCode: resolvePreCompiled,

    behingMdueReentranceCheck,

    /* Late-Bound Handlers */

    setNdImportResolvers,

    /* Compiler Helper */

    compilerHelper: dccLinkerHelper,
    checkIsValidCjs,

    /* EXTRAS */

    /** @deprecated */
    ccc: compiledThusNonNull(ccc) ,
  } as const ;
}

/**
 * this appears like {@link memoize} yet in-fact simply return the same fnc obj
 * 
 */
const ebWfnAsIfmemoized = (

  (((e: any) => e ) as typeof import("lodash-es").memoize )
) ;




;

interface CsneOptions extends Extract<(
  & {

  }
  & OAlwaysPreTranspileOptProps
  & CsneAuxProps

), any > {}

interface LiveRunningCsneOptions extends Extract<(
  & CsneOptions
  & Partial<OndpeProps>
  & Partial<(
    CsneCompilerChoiceProps<(
      | {

        /**
         * translate it into CJS.
         * 
         * even if it's a JSON or CSS file.
         * 
         */
        translateInlineScriptIntoCjs: (
          EbTranslateInlineScriptIntoCjsAlt<(
            & WhenImportantEsmImportAttribsProps
          )>
        )
        ,
      }
    )>
  )>
  & {

  }
  & CsneAuxProps

), any > {}

type DepScnCsneOptions = Extract<(
  & CsneOptions
  & (AtLeastEitherProp<Pick<OndpeProps, keyof OndpeProps>> )
  & {

  }

), any > ;

interface PackingCsneOptions extends Extract<(
  & CsneOptions
  & Partial<OndpeProps>
  & {

  }

), any > {}

interface GnCsneOptions<out XHelper extends object | null = object | null> extends Extract<(
  & CsneOptions
  & OAlwaysPreTranspileOptProps
  & Partial<(
    CsneCompilerChoiceProps<(
      Required<LiveRunningCsneOptions >["compiler"]
    )>
  )>
  & Partial<OndpeProps>
  & {

    readonly dispatcher: {
      //
      readonly dispatchCompiledCjsImpl: {
        //
        (...dpArgs : ArgsWithOptions<[code: string] , (
          & WhenImportantAssumedActualSrcFilePathInfoProps
          & WhenImportantAssumedActualFileNameExtProps
          & {
            // fileExt: string,
            // assumedSrcPath: string ,
            module: GnCsneXoduleObj ,
          }
        ) >) : {
          readonly finalMainExports: any;
          readonly originalExports: object;
          readonly module: NodeJS.Module;
        }
      } ;
    } ,

    readonly impliedHelper: XHelper ,

  }
  & CsneAuxProps

), any > {}

interface GnCsneXoduleObj extends Extract<NodeJS.Module & { loadingIncomplete ?: (true | Error) | false, }, any > {}

export type {
  CsneOptions ,
  GnCsneOptions,
};


interface CsneAuxProps extends Extract<(
  & {
    readonly aux: CsneAux ,
  }
), {}> {}

interface CsneAux extends Extract<(
  & {
    readonly fs: Pick<typeof import("fs"), "readFileSync">
    ,
  }
), {}> {}

interface CsneCompilerChoiceProps<out C extends object> extends Extract<(
  & {

    readonly compiler: C ,

  }
), {}> {}

export type {
  OndpeProps ,
  CsneAux ,
} ;

export type EbTranslateInlineScriptIntoCjsAlt<P2 extends {}> = (
  EbTranslateInlineScriptIntoCjs<never, never, never, P2, string | MockBlob >
) ;

export interface EbTranslateInlineScriptIntoCjs<dmmy1 = never, dmmy2 = never, dmmy3 = never, P2 extends object = {}, SpclCodeT extends string | Blob | MockBlob = string, P1 extends {} = (
  //
  & WhenImportantAssumedActualFileNameExtProps
  & {

    /**
     * don't use
     * 
     * @deprecated
     * 
     */
    asSecondLevel?: boolean,

  }
)>
{
  (...args: (
    ArgsWithOptions<[code: SpclCodeT] , (
      & P1
      & P2
      & Partial<WhenImportantAssumedActualSrcFilePathInfoProps>
      & {
      }
    ) >
  )): string ;
}






export {
  SupportedEsmImportAttribProps ,
} ;

export type {
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ EbAaniAptProps ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ EbPickFromExportedProps ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ GnCsneXoduleObj ,
} ;












