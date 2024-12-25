
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

  getFileNameExt,

} from "./EbCore" ;

import { relative, basename, extname, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';

import {
  XhrSyncTranslatorInvar ,
} from "./ebModuleTreeLoadMgmt" ;

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


import { EbTsUserspace, } from './rt/EbModuleEval';

const checkIsValidCjs = (

  function (...[c, { ...o }] : (
    Parameters<(
      typeof EbTsUserspace.checkIsValidCjs
    )>
  ))
  {
    return EbTsUserspace.checkIsValidCjs(c, o ) ;
  }
) ;

import {

  type ExportedValueHandler ,
  type EbPickFromExportedProps ,

  type OndpeRProps ,
  /** @deprecated please Dealias. */
  type OndpeProps ,

  type EbAaniAptProps ,
  type OAlwaysPreTranspileOptProps ,

} from "./EbCore" ;





/* EMULATION FOR SOME NODEJS FEATS, LIVE-RUN OR SAVED-BUNDLE */

/* EXTRACTED HERE, TO ALLOW BEING STATICALLY-BUNDLED WITH USER-SPACE APP CODE */





import tsc0 = require("./rt/OptionalTsc") ;
const tsc = tsc0 ;





import {
  EbTsCommonJsGlobalScopeValues,
  EbXddiProto ,
} from './rt/EbModuleEval';



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
    dccLinkerHelper ,
  } = (
  //

    newEbTsModuleDispatcherInt()
  ) ;

  const dispatchCompiledCjsImpl: (
    GnCsneOptions["dispatcher"]["dispatchCompiledCjsImpl"]
  ) = (

    function (...dpArgs )
    {
      const [fo, { fileExt: assumedSrcFileExt, assumedSrcPath, module: imd, }] = dpArgs;

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
            srcFileExt0: assumedSrcFileExt ,
            id: imd.id ,
            __filename: imd.filename ,
          }) ;
        }
      }

      const REQUIRE = imd.require;

      const originalExports = imd.initialExportsObj ;

      const assumedSrcedByEsm = (
        !!assumedSrcFileExt.match(/^m[jt]sx?$/)
      ) ;

      const finaliseCrossFmtExports = (

        once(() => (
          GnCsneXModuleObj.finaliseNodeJsCrossFmtExports(imd, {
            f: GnCsneXModuleObj.XFinAndQueryFlags.ALL_F ,
            assumedSrcedByEsm,
          })
        ))
      ) ;

      behingMdueReentranceCheck(imd, function () {
      //

      if (1) {
        checkIsValidCjs(fo, {
          assumedSrcPath ,
          fileExt: assumedSrcFileExt ,
          module: imd,
        }) ;
      }

      // TODO

      const f1 = (
        compileCjsToByCtxRunFnc1(fo, {
          purportedSrcPath: assumedSrcPath,
          purportedSrcFileExt: assumedSrcFileExt,
        })

      ) ;

      if (0) {
        console["log"](f1.toString() ) ;
      }

      void (
        (() => {
          try {

            if (assumedSrcedByEsm ) {
              originalExports.__esModule ??= true ;
            }

            f1({
              module: imd ,
              exports: originalExports ,
              require: REQUIRE ,
              __filename: assumedSrcPath ,
              __dirname: join(assumedSrcPath, "..") ,
            }) ;

            finaliseCrossFmtExports() ;

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
          finalCjsSoleExports : imd.finalCjsSoleExport ,
          finalEsmMainExports : imd.finalEsmDefaultExport ,
          finalEsmTotalExports: imd.finalEsmTotalExport ?? imd.initialExportsObj ,
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

      const originalExports = module.initialExportsObj ;

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
          finalCjsSoleExports: module.finalCjsSoleExport ,
          finalEsmMainExports: module.finalEsmDefaultExport ,
          finalEsmTotalExports: module.finalEsmTotalExport ?? module.initialExportsObj ,
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



/**
 * early part of {@link createSpclGnNodeEngine}.
 * 
 */
function parseSpclGnNodeEngineProps<const ActualOpts extends GnCsneOptions<XHelper>, const XHelper extends object>(...crArgs : (

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

    aux: { fs: spclFs, ...otherAuxes },
  } = opts ;
  const propagateNewKnownPath = (

    (value: string) => {
      propagateNewKnownPathImpl(value) ;
      tsc && propagateNewDynamicPathExprImpl?.(tsc.factory.createStringLiteral(value) ) ;
    }
  ) ;

  return {
    crArgs ,
    opts ,

    compiler,
    oAlwaysPreTranspile,

    dispatchCompiledCjsImpl ,
    dccLinkerHelper ,

    propagateNewKnownPath ,
    propagateNewKnownPathImpl ,
    propagateNewDynamicPathExprImpl ,

    spclFs ,

    otherAuxes ,

  } as const ;
}

/**
 * early part of {@link createSpclGnNodeEngine}.
 * 
 */
function createSpclGnNodeEnginePre<const ActualOpts extends GnCsneOptions<XHelper>, const XHelper extends object>(...crArgs : (

  /* no positional args; only options. */
  [opts: GnCsneOptions<XHelper> & ActualOpts ]
))
{
  ;

  ;

  ;

  ;

  const {
    opts ,

    compiler,
    oAlwaysPreTranspile,

    dispatchCompiledCjsImpl ,
    dccLinkerHelper ,

    propagateNewKnownPath ,
    propagateNewKnownPathImpl ,
    propagateNewDynamicPathExprImpl ,

    spclFs ,

    otherAuxes ,

  } = parseSpclGnNodeEngineProps(...crArgs) ;

  console["log"](`[createSpclGnNodeEngine]`, { oAlwaysPreTranspile, } ) ;

  const { translateInlineScriptIntoCjs , } = { ...compiler, } ;

  const behingMdueReentranceCheck = (

    function (...[imd, runMain]: [GnCsneXModuleObj, main: () => void])
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

  return {
    //

    opts ,

    compiler,
    oAlwaysPreTranspile,

    dispatchCompiledCjsImpl ,
    dccLinkerHelper ,

    propagateNewKnownPath ,
    propagateNewKnownPathImpl ,
    propagateNewDynamicPathExprImpl ,

    spclFs ,

    otherAuxes ,

    //

    translateInlineScriptIntoCjs,
    behingMdueReentranceCheck ,

    runCompiledCjsAndGetModuleExportsDesc ,
    runCompiledCjsAndGetSelectedExport ,

    setNdImportResolvers ,
    getNdResolversOverallExpectNonnull ,

    //
  } as const ;
}

import {
  EbGnLoadedModuleTree ,
  GnCsneXModuleObj ,
  ToEmsp ,
  SCMC ,
} from "./ebModuleTreeLoadMgmt" ;

function createSpclGnNodeEngine<const ActualOpts extends GnCsneOptions<XHelper>, const XHelper extends object>(...crArgs : (

  /* no positional args; only options. */
  [opts: GnCsneOptions<XHelper> & ActualOpts ]
))
{

  const {
    //

    opts ,

    compiler,
    oAlwaysPreTranspile,

    dispatchCompiledCjsImpl ,
    dccLinkerHelper ,

    propagateNewKnownPath ,
    propagateNewKnownPathImpl ,
    propagateNewDynamicPathExprImpl ,

    spclFs ,

    otherAuxes ,

    //

    translateInlineScriptIntoCjs,
    behingMdueReentranceCheck ,

    runCompiledCjsAndGetModuleExportsDesc ,
    runCompiledCjsAndGetSelectedExport ,

    setNdImportResolvers ,
    getNdResolversOverallExpectNonnull ,

  } = (
    createSpclGnNodeEnginePre(...crArgs)
  ) ;

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

  type ToDispatchCompiledCjsOptions = (
    Parameters<typeof runCompiledCjsAndGetModuleExportsDesc>[1] & {}
  ) ;

  type ToDispatchCompiledCjsOptionsAndPickFromOuter<R> = (
    //
    Parameters<typeof runCompiledCjsAndGetSelectedExport<R>>[1] & {}
  ) ;

  /** {@link newScmc} */
  function newScmc()
  : ReturnType<typeof EbGnLoadedModuleTree.newCache1>
  {
    return (
      EbGnLoadedModuleTree.newCache1({
        resolvers: getNdResolversOverallExpectNonnull(),
        evaluateModuleOrSrcFileAtPath,
      })
    ) ;
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
    }) satisfies (typeof resolvePreCompiled), () => assert.fail() )
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
    }) satisfies ((...args: Parameters<XT> ) => VemsModuleAndExportsDescProto ), () => assert.fail() )
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

      Parameters<ToEmsp>
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
    dispatchInlineScript: (
      compiledThusNonNull((

        /** work-around complaint "return-type uses private name" */

        dispatchInlineScript && (
          ((...[code, {
            assumedSrcPath,
            fileExt,
            scmc,
          }]  : (
            ArgsWithOptions<[code: string] , (
              // Omit<ToDispatchCompiledCjsOptions, keyof Pick<ToDispatchCompiledCjsOptions, "esmImportAttribs">>
              (
                & WhenImportantAssumedActualSrcFilePathInfoProps
                & WhenImportantAssumedActualFileNameExtProps
                & {
                  scmc: SCMC ,
                }
                & WhenImportantEsmImportAttribsProps
              )
            ) >
          ) ) => (

            dispatchInlineScript(code, {
              assumedSrcPath,
              fileExt,
              scmc,
            })
          ) )
        )
      ))
    ) ,
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

export {

  createSpclGnNodeEngine ,

  //
  // /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type createSpclGnNodeEnginePre ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type EbGnLoadedModuleTree ,

};




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
            module: GnCsneXModuleObj ,
          }
        ) >) : (
          // & {
          //   /**
          //    * @deprecated
          //    */
          //   readonly finalMainExports: any;
          //   readonly finalEsmMainExports: any;
          //   readonly finalEsmTotalExports: any;
          //   readonly finalCjsSoleExports: any;
          //   readonly originalExports: object;
          //   readonly module: NodeJS.Module;
          // }
          & EbXddiProto
        )
      } ;
    } ,

    readonly impliedHelper: XHelper ,

  }
  & CsneAuxProps

), any > {}

export {

  //
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type CsneOptions ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type LiveRunningCsneOptions ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type DepScnCsneOptions ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type PackingCsneOptions ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type GnCsneOptions ,

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

  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type EbAaniAptProps ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type EbPickFromExportedProps ,
  /** @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type GnCsneXModuleObj  ,
  /** alias of {@link GnCsneXModuleObj}. @deprecated this re-export is still experimental. need to do this `export` otherwise DTS(es) won't emit */ type GnCsneXModuleObj as GnCsneXoduleObj ,

} ;












