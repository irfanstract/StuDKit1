
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
} from "./EbMockBlob" ;

import {
  builtinModules ,
  builtinModulesListed ,
  // builtinModulesListed0 ,
} from "./BuiltinModules" ;

import { createRequire, } from 'node:module';

import * as VM from "node:vm" ;

import {
  newRealm, 
  tryAllocateRealm,
} from "./Realms" ;

import {
  //
} from "./Eval" ;

import type * as _ts from 'typescript';





import type {
  GnCsneOptions ,
} from "../eb" ;

namespace EbTsUserspace {
  ;

  export const checkIsValidCjs = (

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
  
  ;
}

export {
  // /** @deprecated */
  EbTsUserspace ,
} ;






/**
 * {@link EbTsCommonJsGlobalScopeValues}
 * 
 */
interface EbTsCommonJsGlobalScopeValues
{
  readonly module: NodeJS.Module,
  readonly exports: Record<string, unknown>,
  readonly require: NodeRequire,
  readonly __filename: string,
  readonly __dirname: string,
}

namespace EbTsCommonJsGlobalScopeValues {
  ;

  ;
  export const expand1 = (...[ctx]: [...[ctx: EbTsCommonJsGlobalScopeValues] ]) => (
    (() => {
                    const { module, exports, require, __filename, __dirname, } = ctx ;
                    const ctx1 = (
                      {
                        module: module,
                        __module: module,
                        exports: exports,
                        __exports: exports,
                        require: require,
                        __require: require,
  
                        __filename, __dirname,
                      } satisfies Partial<EbTsCommonJsGlobalScopeValues & { readonly [k in keyof EbTsCommonJsGlobalScopeValues as `__${k}`]: any; } >
                    ) ;
                    return ctx1 ;
    })()
  ) ;

  ;
}


function newEbTsModuleDispatcherInt()
{
  ;

  ;

  interface CjsCompilerFncPre
  {
    (...args: (
        
      ArgsWithOptions<[codeAsCjs: string,] , (
        & {
          purportedSrcPath: string;
          purportedSrcFileExt: string;
        }
      ) >

    ) ): any ;
  }

  return (() => {
  ;

  {
  ;

  const dedicedCrossCallsCtx = (
    tryAllocateRealm()
  ) ;

  ;
  const expandCtx = (...[ctx]: [...[ctx: EbTsCommonJsGlobalScopeValues] ]) => (
    EbTsCommonJsGlobalScopeValues.expand1(ctx)
  ) ;

  ;
  const {
    compileCjsToByCtxRunFnc1,
  } = {

    compileCjsToByCtxRunFnc1: (

      (function compileCjsToByCtxRunFnc1Impl (...[fo, { purportedSrcPath, purportedSrcFileExt, }] )
      : (
        ((...args: [ctx: EbTsCommonJsGlobalScopeValues ] ) => any )
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

      }) satisfies CjsCompilerFncPre
    ) ,
  } ;

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
        const createEscapedRequireCall = (
          (...[args]: [argExprs: readonly _ts.Expression[]] ) => (
            tsc.factory.createCallExpression(
              createEscapedBuiltinRef("require") ,
              undefined, args )
          )
        ) ;
      
        return {
          dccEscapeBuiltinRef ,
          createEscapedBuiltinRef,
          createEscapedRequireCall: createEscapedRequireCall,
        } as const ;
      } else {
        return {} as const ;
      }
    })()
  ) ;

  return {
    compileCjsToByCtxRunFnc1 ,
    dccLinkerHelper,
  } as const ;

  }

  ;})() ;
}





import tsc0 = require("./OptionalTsc") ;
const tsc = tsc0 ;





;

interface EbXddiProto<out XMainExports = unknown> extends Extract<(
  & {
    /**
     * @deprecated
     */
    readonly finalMainExports         : XMainExports;
    readonly finalCjsSoleExports      : XMainExports;
    readonly finalEsmMainExports      : XMainExports;
    readonly finalEsmTotalExports     : object;
    /**
     * the initial value of `module.exports`
     */
    readonly originalExports: object;
    readonly module: NodeJS.Module;
  }
), any > {}

type EbXddiProtoValued<out XMainExports = unknown> = (
  EbXddiProto<XMainExports>
) ;

;






export {
  /** @deprecated this is a WIP. */ EbTsCommonJsGlobalScopeValues ,
  newEbTsModuleDispatcherInt ,
  type EbXddiProto ,
  type EbXddiProtoValued ,
} ;
















