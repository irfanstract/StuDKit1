
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

import {
  ConformOrAssignFalse,
  ConformOrNever,
  EitherOneProp, 
  ExcludeSupertype,
} from "./util-recordtypes";

import {
  MockBlob ,
} from "./rt/EbMockBlob" ;

import {
  builtinModules ,
  builtinModulesListed ,
  // builtinModulesListed0 ,
} from "./rt/BuiltinModules" ;

import { createRequire, } from 'node:module';

import * as VM from "node:vm" ;

import {
  newEbTsModuleDispatcherInt ,
} from "./rt/EbModuleEval" ;

import {
  newRealm ,
} from "./rt/Realms" ;

import type * as _sourceMapSupport from '@cspotcode/source-map-support';
import { BaseError } from 'make-error';
import type * as _ts from 'typescript';

import type { Transpiler, TranspilerFactory } from './transpilers/types';

import {

  //
  WhenImportantAssumedActualFileNameExtProps ,
  WhenImportantAssumedActualSrcFilePathInfoProps ,

  WhenImportantEsmImportAttribsProps ,

} from "./EbCore" ;

import {
  SupportedEsmImportAttribProps ,
  compactStringifyImportAttribs ,
  SupportedImportConfig ,
} from "./rt/EbSupportedEsmImportAttribProps" ;

export {

  //
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type WhenImportantAssumedActualFileNameExtProps ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type WhenImportantAssumedActualSrcFilePathInfoProps ,

};

export {
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type WhenImportantEsmImportAttribsProps ,
  SupportedEsmImportAttribProps ,
} ;

import {

  type ExportedValueHandler ,
  type EbPickFromExportedProps ,

  type OndpeRProps ,
  /** @deprecated please Dealias. */
  type OndpeProps ,

  type EbAaniAptProps ,
  type OAlwaysPreTranspileOptProps ,

} from "./EbCore" ;

import {

  getFileNameExt,

} from "./EbCore" ;

import { relative, basename, extname, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';

interface XhrSyncTranslatorInvar<out R = any, SpclExtraProps extends object = {}> {

  (...args: ArgsWithOptions<[entryPointPath: string], Required<Omit<SupportedImportConfig<SpclExtraProps>, "type" > > > ): R ;
}

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

export {

  type XhrSyncTranslatorInvar ,

} ;







;

interface GnCsneXModuleObj extends Extract<(
  (Omit<NodeJS.Module, "exports"> & { exports: unknown, })
  & {
    /** the initial/original value of {@link module.exports `theModule.exports` } */
    readonly initialExportsObj: object & Record<keyof any, unknown>,
  }
  & { loadingIncomplete ?: (true | Error) | false, }
  /* WIP */
  & {
    finalCjsSoleExport          ?: {} | null ,
    finalEsmDefaultExport       ?: {} | null ,
    finalEsmTotalExport         ?: object ,
  }
  & {
    assumeTotallyFinalised  ?: false | ReturnType<typeof GnCsneXModuleObj.finaliseNodeJsCrossFmtExports> ,
  }
  & {
    //
    // /**
    //  * value of `imd.exports` bythetimea last run of {@link GnCsneXModuleObj.finaliseNodeJsCrossFmtExports } with {@link GnCsneXModuleObj.XFinAndQueryFlags.F_CJS_SOLOEXPORT `F_CJS_SOLOEXPORT`}.
    //  * thecase when `require(...)`ed Prematurely (eg Cyclic Module Graph, "Module A Uses B, and Module B Uses A").
    //  * 
    //  */
    // intertemCjsSoleExport       ?: {} | null ,
    // /**
    //  * value of `v` from `import v from "my-mdle";` bythetimea last run of {@link GnCsneXModuleObj.finaliseNodeJsCrossFmtExports } with {@link GnCsneXModuleObj.XFinAndQueryFlags.F_CJS_SOLOEXPORT `F_CJS_SOLOEXPORT`}.
    //  * thecase when `require(...)`ed Prematurely (eg Cyclic Module Graph, "Module A Uses B, and Module B Uses A").
    //  * 
    //  */
    // intertemEsmDefaultExport    ?: {} | null ,
    /**
     * both
     * 
     * -  value of `imd.exports` bythetimea last run of {@link GnCsneXModuleObj.finaliseNodeJsCrossFmtExports } with {@link GnCsneXModuleObj.XFinAndQueryFlags.F_CJS_SOLOEXPORT `F_CJS_SOLOEXPORT`}.
     *    thecase when `require(...)`ed Prematurely (eg Cyclic Module Graph, "Module A Uses B, and Module B Uses A").
     *    
     * -  value of `v` from `import v from "my-mdle";` bythetimea last run of {@link GnCsneXModuleObj.finaliseNodeJsCrossFmtExports } with {@link GnCsneXModuleObj.XFinAndQueryFlags.F_CJS_SOLOEXPORT `F_CJS_SOLOEXPORT`}.
     *    thecase when `require(...)`ed Prematurely (eg Cyclic Module Graph, "Module A Uses B, and Module B Uses A").
     * 
     */
    intertemExports       ?: {
      readonly cjsExport      : ({} | null) | unknown,
      readonly esmMainExports : ({} | null) | unknown,
    } ,
  }

), any > {}

namespace GnCsneXModuleObj {
  ;

  ;

  export enum XFinAndQueryFlags {

    F_CJS_SOLOEXPORT = 2 << 1 ,
    F_ESM_MAINEXPORT = 2 << 7 ,
    F_ESM_TOTALEXPORT = 2 << 8 ,
    /** the prop `imd.esmExports["module.exports"]` */
    F_ESM2CJSEXPORT = 2 << 9 ,

    /** the KV `__esModule` */
    F_ESMODULEMARKTAG = 2 << 11 ,

    ALL_F = (
      0
      & F_CJS_SOLOEXPORT
      & F_ESM_MAINEXPORT
      & F_ESM_TOTALEXPORT
      & F_ESM2CJSEXPORT
      & F_ESMODULEMARKTAG
    ) ,

  }

  /**
   * like {@link AssumedNodeModuleTypeProps} yet allows specifying neither
   * 
   */
  type OptAssumedNodeModuleTypeProps = (
    ConformOrAssignFalse<(
      EitherOneProp<{ assumedSrcedByEsm: true, }>
    )>
  ) ;

  /**
   * 
   * @deprecated
   */
  type AssumedNodeModuleTypeProps = (
    ExcludeSupertype<OptAssumedNodeModuleTypeProps, {}>
  ) ;

  export const checkModuleCodeRanSuccessfully: (
    (x: GnCsneXModuleObj) =>
      asserts x is (typeof x) & { readonly loadingIncomplete?: boolean }

  ) = function (...[imd])
  {

    for (const z of [imd.loadingIncomplete].filter(e => (e instanceof Error) ) )
    {
      throw z ;
    }

  }

  /**
   * {@link isModuleNotCompletelyLoaded}
   * 
   */
  export function isModuleNotCompletelyLoaded(...[imd, { failIfDetectedException = true, } = {}]: (

    ArgsWithOptions<[x: GnCsneXModuleObj], { failIfDetectedException?: boolean, }>
  ))
  {

    if (failIfDetectedException) {
      ;
      checkModuleCodeRanSuccessfully(imd) ;
    }

    return (
      !!(!imd.loaded || imd.loadingIncomplete)
    );
  }

  /**
   * fill-in these missing values ({@link GnCsneXModuleObj})
   * 
   */
  export const finaliseNodeJsCrossFmtExports = (

    function (...mArgs : (
      ArgsWithOptions<[imd: GnCsneXModuleObj], (
        & { f: XFinAndQueryFlags, }
        & OptAssumedNodeModuleTypeProps
      ) >
    )): (
      & object
      & {}
    )
    {
      const [imd, {
        assumedSrcedByEsm = false,
        f = assert.fail(new TypeError(`missing 'f'`) ),
      } = {}] = mArgs ;

      if (1) {
        /* TODO return immediately if already done */
        if (imd.assumeTotallyFinalised ) {
          return imd.assumeTotallyFinalised ;
        }
      }

      const ichkReturnVal = ((): ReturnType<typeof finaliseNodeJsCrossFmtExports> => {
      ;

      if (assumedSrcedByEsm ) {

        imd

        const finalEsmTotalExport = (
          internalGetEsmTotalExportsAc(imd)
        ) ;

        if (imd.exports === finalEsmTotalExport) {
          ;
        } else {
          return failWithReasonedSelfInconsistentModule(`unsatisfiled constr 'imd.exports === finalEsmTotalExport' for ESM`) ;
        }

        if (f & XFinAndQueryFlags.F_ESMODULEMARKTAG) {

          if (("__esModule" in finalEsmTotalExport ) ) {
            ;
      
          } else {
      
            Object.defineProperty(finalEsmTotalExport, "__esModule", {
              configurable: true ,
              writable: false,
              enumerable: false,
              value: true ,
            }) ;
      
          }
      
        }

        ;
        /**
         * there's (apart from `export { as 'module.exports' }`) no such thing as Reassignment To `exports` in ESM, so
         * we can safely assign {@link imd.finalEsmTotalExport} despite the Module's Code Not Having Finished Running
         * 
         */
        if (f & XFinAndQueryFlags.F_ESM_TOTALEXPORT) {
          ;

          imd.finalEsmTotalExport = (
            finalEsmTotalExport
          );
        }

        // TODO
        if ((
          (f & XFinAndQueryFlags.F_ESM_MAINEXPORT)
          || (f & XFinAndQueryFlags.F_ESM2CJSEXPORT)
          || (f & XFinAndQueryFlags.F_CJS_SOLOEXPORT)
        )) {
          ;

          ;
          /** Node 23 */
          if (("module.exports" in finalEsmTotalExport) ) {
            ;
          } else {
            finalEsmTotalExport["module.exports"] = imd.exports ;
          }

          const esmFv = (
            finalEsmTotalExport["default"]
          ) ;

          /** Node 23 */
          const cjsFv = (
            /** Node 23 */
            "module.exports" in finalEsmTotalExport ?
            finalEsmTotalExport["module.exports"] :
            imd.exports
          ) ;

          if (isModuleNotCompletelyLoaded(imd) ) {
            ;
          } else {
            ;

            ;
            /**
             * assign these `finalYyyExport`s
             * 
             */
            {
              imd.finalEsmDefaultExport    = esmFv ;
              imd.finalCjsSoleExport       = cjsFv ;
            }

            /**
             * check consistency
             * 
             */
            try {
              checkDefaultExportBeConsistent(imd) ;
            } catch (z) {
              return assert.fail(z) ;
            }

          }

          ;

          imd.intertemExports = {
            esmMainExports: esmFv,
            cjsExport: cjsFv ,
          } ;
        }

        return {} as const ;
      }

      if (1)
      /**
       * TODO switch to `cjs-module-lexer` (especially for {@link imd.finalEsmTotalExport})
       */
      {

        if ((
          (f & XFinAndQueryFlags.F_CJS_SOLOEXPORT )
          || (f & XFinAndQueryFlags.F_ESM_MAINEXPORT )
          || (f & XFinAndQueryFlags.F_ESM_TOTALEXPORT)
        ) ) {
          ;

          if (isModuleNotCompletelyLoaded(imd) ) {
            ;

          } else {
            const finalValue = imd.exports ;

            /**
             * assign these `finalYyyExport`s
             * 
             */
            {
              imd.finalCjsSoleExport       =    finalValue     ;
              imd.finalEsmDefaultExport    =    finalValue     ;
              imd.finalEsmTotalExport      =    finalValue as object    ;
            }

            /**
             * check consistency
             * 
             */
            try {
              checkDefaultExportBeConsistent(imd) ;
            } catch (z) {
              return assert.fail(z) ;
            }

          }

          imd.intertemExports = {
            cjsExport: imd.exports,
            esmMainExports: imd.exports ,
          } ;

        }

        return {} as const ;
      }

      return (
        failWithReasonedPoorlyWrittenModule(`The Module Appears To Be Neither ESM Nor CJS: ${util.inspect(imd) }`)
      ) ;

      })() ;

      if ((isModuleNotCompletelyLoaded(imd) ?? false ) === false ) {
        imd.assumeTotallyFinalised = ichkReturnVal ;
      }

      return ichkReturnVal ;
    }
  ) ;

  ;

  ;
  export function isProbablyCjsModule(...[x] : (

    ArgsWithOptions<[x: GnCsneXModuleObj ], {}>
  ) )
  {
    return (
      !!x.finalCjsSoleExport
    ) ;
  }

  function checkDefaultExportBeConsistent(...[imd]: [GnCsneXModuleObj])
  {

    if ("finalEsmDefaultExport" in imd && imd.intertemExports?.esmMainExports) {
      ;
      if (imd.finalEsmDefaultExport === imd.intertemExports.esmMainExports ) {
        ;
      } else {
        return failWithReasonedPoorlyWrittenModule((
          `the ESM was 'import x from it'ed while itself being initialised, and the final value of 'export default' or 'module.exports' differs from such momentary value: ${util.inspect({
            finalValue  : imd.finalEsmDefaultExport,
            interimValue: imd.intertemExports.esmMainExports,
          }) } `
        )) ;
      }
    }

    if ("finalCjsSoleExport" in imd && imd.intertemExports?.cjsExport) {
      ;
      if (imd.finalCjsSoleExport === imd.intertemExports.cjsExport ) {
        ;
      } else {
        return failWithReasonedPoorlyWrittenModule((
          `the CJS was 'require(...)'ed while itself being initialised, and the final value of 'module.exports' differs from such momentary value: ${util.inspect({
            finalValue  : imd.finalCjsSoleExport,
            interimValue: imd.intertemExports.cjsExport,
          }) } `
        )) ;
      }
    }

  }

  /**
   * {@link getCjsSoleExport} ; may run {@link finaliseNodeJsCrossFmtExports}
   * 
   */
  export function getCjsSoleExport(...gcjeArgs: (

    ArgsWithOptions<[x: GnCsneXModuleObj], (
      & OptAssumedNodeModuleTypeProps
    )>
  ) )
  {
    const [x, { assumedSrcedByEsm = false } = {}] = gcjeArgs ;

    finaliseNodeJsCrossFmtExports(x, {
      f: XFinAndQueryFlags.F_CJS_SOLOEXPORT ,
      assumedSrcedByEsm: assumedSrcedByEsm,
    })

    if (x.finalCjsSoleExport) {
      return x.finalCjsSoleExport ;
    }

    if (x.intertemExports?.cjsExport) {
      return x.intertemExports.cjsExport ;
    }

    return x.exports ;
  }

  function internalGetEsmTotalExportsAc(...[imd] : (
    ArgsWithOptions<[imd: GnCsneXModuleObj], (
      & (
        ConformOrAssignFalse<(
          EitherOneProp<{ assumedSrcedByEsm: true, }>
        )>
      )
    ) >
  ))
  {
    return imd.initialExportsObj ;
  }

  /**
   * `true` if-and-only-if the Module deserves special teratment, specifically these
   * - treat property `default` as the main export, otherwise don't
   * 
   */
  export function isSpecialEsmModule(...[x] : (

    ArgsWithOptions<[x: GnCsneXModuleObj ], {}>
  ) )
  {

    const v = (
      (() => {
        ;
        if (x.exports?.["__esModule"] ) {
          return true ;
        }
    
        return false ;
      })()
    ) ;

    return v ;
  }

  /**
   * {@link getEsmExports} ; may run {@link finaliseNodeJsCrossFmtExports}
   * 
   */
  export function getEsmExports(...gcjeArgs: (

    ArgsWithOptions<[x: GnCsneXModuleObj], (
      & OptAssumedNodeModuleTypeProps
    )>
  ) )
  : [mainExport: any, namedExports: object & Record<keyof any, unknown> ]
  {
    const [x, { assumedSrcedByEsm = false } = {}] = gcjeArgs ;

    finaliseNodeJsCrossFmtExports(x, {
      f: XFinAndQueryFlags.F_ESM_MAINEXPORT & XFinAndQueryFlags.F_ESM_TOTALEXPORT ,
      assumedSrcedByEsm: assumedSrcedByEsm,
    })

    if (!(assumedSrcedByEsm || isSpecialEsmModule(x) ) ) {
      console.warn(`not an ESM Module: ${x.filename }`) ;
    }

    const mainExpts = (
      x.finalEsmDefaultExport
      ??
      x.finalCjsSoleExport
      ??
      x.intertemExports?.cjsExport
      ??
      x.exports
    ) ;

    const ttalExpts = (
      x.finalEsmTotalExport
      ??
      x.finalCjsSoleExport
      ??
      x.intertemExports?.cjsExport
      ??
      x.exports
    ) ;

    return [mainExpts, { ...(ttalExpts ?? {}), }] ;
  }

  export function failWithReasonedSelfInconsistentModule(...[msg]: [msg: string])
  {
    return (
      assert.fail(`Self-Inconsistency (please file a bug-report; chances are something worse 've been happening): ${msg} ` )
    ) ;
  }

  export function failWithReasonedPoorlyWrittenModule(...[msg]: [msg: string])
  {
    return (
      assert.fail(new ReferenceError(`the module is poorly written: ${msg}`) )
    ) ;
  }

  export function failWithReasonedIModuleExportsPrimitivey()
  {
    return assert.fail(new ReferenceError(`please file a bug-report. 'x.export' is supposed to be 'object'.`) ) ;
  }

  ;
}

const EbGnLoadedModuleTree = (function () {
  ;

  ;
  /**
   * initial implementation didn't support LMGC (Loaded-Module-Graph Caching), but presently ver does;
   * while {@link CachedXT } doesn't, {@link XT} defines named-param which in-turn define which {@link SCMC} to use
   * 
   * {@link CachedXT}
   * is defined
   * that `code` get typed as `string`, and `options` don't define `scmc`, 
   * 
   */
  interface CachedXT<out R = any > extends XhrSyncTranslatorInvar<R, { } > {}

  /**
   * initial implementation didn't support LMGC (Loaded-Module-Graph Caching), but presently ver does;
   * while {@link CachedXT } doesn't, {@link XT} defines named-param which in-turn define which {@link SCMC} to use
   * 
   * {@link XT}
   * is defined
   * that `code` get typed as `string`, and `options` defines `scmc`, 
   * 
   */
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

  ;

  /** {@link newScmc1} */
  interface SCMC extends ReturnType<typeof newScmc1> {}

  type ToNewScmcArgs1<RtR, XToEmspT extends ToEmspMono<RtR> > = (

    ArgsWithOptions<[], {
      readonly resolvers: import("./index").NdResolversGcePublic
      ,
      readonly evaluateModuleOrSrcFileAtPath: XToEmspT ,
    }>

  ) ;

  /** {@link newScmc1} */
  function newScmc1<const RtR>(...sArgs : (

    ToNewScmcArgs1<RtR, ToEmspMono<RtR> >

  ))
  // : ReturnType<typeof newScmc1Alt >
  // {
  //   const [{ evaluateModuleOrSrcFileAtPath: evaluateModuleOrSrcFileAtPathImpl, ...otherOpts }] = sArgs ;

  //   return (

  //     newScmc1Alt({
  //       evaluateModuleOrSrcFileAtPath: <RtR> (...[v, opts]: Parameters<typeof evaluateModuleOrSrcFileAtPathImpl>) => {
  //         return (
  //           evaluateModuleOrSrcFileAtPathImpl(v, opts)
  //         ) ;
  //       } ,
  //       ...otherOpts ,
  //     })
  //   ) ;
  // }

  // /** {@link newScmc1} */
  // function newScmc1Alt(...[{ resolvers: resolvers, evaluateModuleOrSrcFileAtPath, }] : (

  //   ToNewScmcArgs1<unknown, ToEmspGeneric >

  // ))
  {
    const [{ evaluateModuleOrSrcFileAtPath, resolvers, }] = sArgs ;
  ;

  /**
   * 
   * @deprecated
   * 
   */
  const nativeRequire = require ;

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
        resolvers
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
      const runRequireEvCjsAtPath = (...[spcfier]: [string ]) => {
        /**
         * this seemingly extraneous `try .. catch` enclosure
         * is to give place for breakpoints in case things goes wrong
         * 
         */
        try {
        ;

        const spcfierResolvedPath = irqr(spcfier) ;

        return ((): (
          // { readonly m?: GnCsneXModuleObj, readonly v: unknown, }
          (unknown)
        ) => {
        ;

        if (builtinModules.includes(spcfier.replace(/^(?:node:)?/, "") ) && !existsSync(spcfierResolvedPath) ) {
          const v = (() => {
            ;
            if (spcfier === "electron") {
              return nativeRequire("electron") ;
            }
            return nativeRequire(spcfier.replace(/^(?:node:)?/, "node:") ) ;
          })() ;
          return (
            // { v: v, }
            v
          ) ;
        }

        return (
          evaluateModuleOrSrcFileAtPath(spcfierResolvedPath, {
            alwaysAvoidNativeImport: true,
            cached: mainJustO as SCMC ,
            pickFromExporteds: ((...[e, originalExports, m ]) => (
              // { v: e, m: m as GnCsneXModuleObj, }
              e
            ) )
            ,
          } )
        ) ;
        })() ;

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
      const runRequireEvS = function requireFromFUrlImpl(...[spcfr]: [urlOrSpecifier: string ]) {
        ;

        /* TODO */
        {
        ;

        (typeof spcfr === "string") || assert.fail(`${util.inspect(spcfr) }` ) ;

        if (spcfr.match(/^https?\:/) ) {
          throw new TypeError(`Illegal Internet Imports (${spcfr })`) ;
        }

        if (spcfr.match(/^file\:/) ) {
          const fpath = fileURLToPath(spcfr) ;
          return (
            runRequireEvCjsAtPath(fpath)
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
            runRequireEvCjsAtPath(fpath)
          ) ;
        }

        // throw new TypeError(`TODO`) ;
        return (

          runRequireEvCjsAtPath(spcfr)
        ) ;
        }
      } ;

      ;
      const runRequireEvCjs = (...[spcfier0]: [string | URL ]): unknown => {
        if ((
          (spcfier0 instanceof URL)
          /* the above is subject to fail for Cross-Realm */
          || (typeof spcfier0 === "object")
        )) {
          console["warn"](new TypeError(`[studk-ts-node] [EB] deprecated use of 'URL(...)' ('[object URL]') as Specifier; please convert your Specifier into String first `) , { spcfier0, } );
          const spcfUrl = String(spcfier0) ;
          return (
            runRequireEvS(spcfUrl)
          ) ;
        } else {
          (typeof spcfier0 === "string") || assert.fail(`${util.inspect(spcfier0) }` ) ;
          return (
            runRequireEvS(spcfier0)
          ) ;
        }
      } ;

      // TODO
      const REQUIRE: NodeRequire = (...args ) => {

        const value = (
          runRequireEvCjs(...args)
        ) ;

        /**
         * avoid calling {@link GnCsneXModuleObj.finaliseNodeJsCrossFmtExports} here;
         * we don't have enough access to enough info at this pt, and chances are it's taken-care by `dispatchCompiledCjs`;
         * 
         */
        void 0;

        // newModule.children = (
        //   [...newModule.children, value ]
        // ) ;

        return value ;
      } ;

      const initialExportsObj = (
        new Object() as Record<string, unknown>
      );

      const mdObjDId = (
        `[studk-dispatchInlineScript]`
        + encodeURIComponent(assumedSrcPath )
        + (0.25125125125125 )
      );

      /**
       * 
       * @todo what's missing from this initialiser
       */
      const newModule: (
        NodeJS.Module & GnCsneXModuleObj
      ) = {
        id: (
          mdObjDId
        ),
        // TODO
        filename: assumedSrcPath,

        /** unsupported. */
        parent: null ,
        // children: [] ,

        require: REQUIRE,

        initialExportsObj: initialExportsObj,
        exports: initialExportsObj,

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

  ;

  return {
    newCache1: newScmc1 ,
    // newCache1Alt: newScmc1Alt ,
  } as const ;
})() ;

/**
 * {@link ToEmspMono}
 * 
 * consider {@link ToEmspGeneric} instead.
 * 
 */
interface ToEmspMono<R = unknown > {

  //
  (...dpArgs: (

    ArgsWithOptions<[path: string], (
      & {

      }
      & (
        EbAaniAptProps
        & (
          import('./util').EitherOneProp<{ rerun: true, cached: true | SCMC, }>
        )
      )
      & EbPickFromExportedProps<R>
      & { readonly XRError ?: ErrorConstructor, }
      & Partial<WhenImportantEsmImportAttribsProps>
    )>
  )) : R ;

}

/**
 * alias of {@link ToEmspMono}
 * 
 * @deprecated consider {@link ToEmspGeneric} instead
 */
type ToEmsp< R = unknown > = (
  
  ToEmspMono<R>
) ;

interface ToEmspGeneric {

  //
  <const R>(...x: Parameters<ToEmspMono<R> > ): ReturnType<ToEmspMono<R> >
}

type SCMC = ReturnType<typeof EbGnLoadedModuleTree.newCache1> ;


export {
  EbGnLoadedModuleTree ,
  /** @deprecated */ GnCsneXModuleObj ,
  /** @deprecated consider {@link ToEmspGeneric} instead */ type ToEmsp ,
  /** @deprecated */ type ToEmspGeneric ,
  /** @deprecated */ type SCMC ,
} ;

;















