
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
  builtinModules ,
  builtinModulesListed ,
  // builtinModulesListed0 ,
} from "./BuiltinModules" ;

import { createRequire, } from 'node:module';

import * as VM from "node:vm" ;








// TODO
function tryAllocateRealmImpl(...[rOpts = {}] : (

  ArgsWithOptions<[], (
    & { allowReturningCurrentGlobal?: boolean, }
  )>

))
{
  const {
    allowReturningCurrentGlobal: canReturningCurrentGlobal = true ,
  } = rOpts ;

  /**
   * {@link dedicedCrossCallsCtx}
   * 
   * see also https://github.com/electron/electron/issues/31724#issuecomment-2334254448 ;
   * 
   */
  const dedicedCrossCallsCtx = (

    (function (): (
      | (typeof globalThis )
      | Window
      | WindowOrWorkerGlobalScope
      | VM.Context
    ) {

      /**
       * per https://github.com/electron/electron/issues/31724#issuecomment-2334254448 ;
       * 
       */
      if (
        // TODO
        !(
          (typeof window !== "undefined")
          ||
          (typeof HTMLDivElement !== "undefined")
        )
      ) {

        console.warn(`[tryAllocateRealmImpl] allocating Realm via Node 'VM' Module`) ;

        const newc1 = (
          VM.createContext(undefined , {  })
        ) ;

        Object.assign(newc1, {

          queueMicrotask   : globalThis.queueMicrotask ?? globalThis.process.nextTick ,
          setImmediate     : globalThis.process.nextTick ?? globalThis.queueMicrotask ,
          setInterval, clearInterval ,
          setTimeout , clearTimeout ,

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
      }

      if ((
        (typeof window !== "undefined")
        &&
        (typeof HTMLIFrameElement !== "undefined")
      )) {

        if (1) {
          ;

          console.warn(`[tryAllocateRealmImpl] allocating Realm via constructing '<iframe>'`) ;

          const e = document.createElement("iframe") ;

          if (0) {
            e.src === "about:blank" ;
          }

          if (e.contentWindow) {

            return e.contentWindow ;
          } else {
            ;
            console.warn(`[tryAllocateRealmImpl] failed '<iframe>'-based -- cannot synchronous allocation; a Wait for Next Microtask will be necessary but cannot be done in this Synchronous Flow`) ;
          }
        }
      }

      if (canReturningCurrentGlobal) {

        console.warn(`[tryAllocateRealmImpl] returning 'globalThis'`) ;

        return globalThis ;
      }

      throw new TypeError(`Cannot Allocate Distinctive Realm`) ;
    })()
  ) ;

  return {
    dedicedCrossCallsCtx ,
  } ;
}

/**
 * 
 * 
 */
function tryAllocateRealm()
{

  const {
    dedicedCrossCallsCtx,
  } = tryAllocateRealmImpl({}) ;

  return dedicedCrossCallsCtx ;
}

/**
 * 
 * 
 */
function newRealm()
{

  const r = (
    tryAllocateRealm()
  ) ;

  if (r === globalThis) {
    throw new TypeError(`Cannot Allocate Distinctive Realm`) ;
  }

  return r ;
}




export {
  newRealm ,
  tryAllocateRealm ,
} ;









