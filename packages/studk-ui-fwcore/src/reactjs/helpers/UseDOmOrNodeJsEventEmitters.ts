





/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';
import {
  createInterningSubclass ,
} from 'typexpe-commons/src/ortEdConstructors.mjs';

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;


const TIMEOUT = (
  (tMillis: number) => (
    new Promise<void>(resume => (
      setTimeout(resume, tMillis)
    ))
  )
) ;

export {
  TIMEOUT ,
} ;

import type EventEmitter from 'events';

;






// import * as React from "react" ;

import {
  useCallback ,
  Ref, 
  useLayoutEffect,
  useEffect,
  useRef,
  useSyncExternalStore,
  useTransition,
  useMemo,
} from "react" ;



/**
 * {@link EventEmitter}
 * 
 */
const useEventEmitterListener = (

  function <hostT extends EventEmitter, typ extends string>(...a : (
    SpclEvtlHookMinimumArgs<hostT, Parameters<typeof EventEmitter.prototype.on >, {} >["main"]

  ))
  {
    const [receiver, [evtnm, cbk], dependencyList, { defer = false, } = {}] = a ;

    type ActualEvt = Event ;

    void (defer ? useEffect : useLayoutEffect )(() => {
      const fnc = (
        cbk
      ) ;
      receiver.on(evtnm, fnc, ) ;
      return () => {
        ;
        receiver.off(evtnm, fnc, ) ;
      } ;
    } , dependencyList) ;

  }
) ;

/**
 * {@link EventTarget}
 * 
 */
function useEventTargetListener<hostT extends EventTarget, >(...args : (
  SpclEvtlHookMinimumArgs<hostT, Parameters<typeof EventTarget.prototype.addEventListener >, {} >["main"]

)) : void ;

function useEventTargetListener<hostT extends HTMLElement, typ extends keyof HTMLElementEventMap>(...args : (
  SpclEvtlHookMinimumArgs<hostT, Parameters<typeof HTMLElement.prototype.addEventListener<typ> >, {} >["main"]

)) : void ;

function useEventTargetListener<hostT extends EventTarget, typ extends string>(...a : (
  SpclEvtlHookMinimumArgs<hostT, Parameters<typeof EventTarget.prototype.addEventListener >, {} >["main"]
))
{
  const [receiver, [evtnm, cbk, optns, ], dependencyList, { defer = false, } = {}] = a ;

  type ActualEvt = Event ;

  void (defer ? useEffect : useLayoutEffect )(() => {
    const fnc = (
      cbk
    ) ;
    receiver.addEventListener(evtnm, fnc, optns ) ;
    return () => {
      ;
      receiver.removeEventListener(evtnm, fnc, optns ) ;
    } ;
  } , dependencyList) ;

}

interface SpclEvtlHookMinimumArgs<hostT, argsT extends readonly [evtSelector: string | symbol, ...(readonly unknown[] ) ], optionsT extends object = {} >
{

  readonly main: (
    ArgsWithOptions<(
      [host: hostT, argsT, React.DependencyList ]
    ) , { defer ?: boolean, } & optionsT >
  ) ,
}

export {
  useEventTargetListener ,
  useEventEmitterListener ,
} ;



















