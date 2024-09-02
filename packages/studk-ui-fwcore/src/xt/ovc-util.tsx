





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

import * as uedcs from "studk-ui-fwcore/src/util/StudkReactJsxEventListenerDispatchUtils.tsx" ;

/**
 * in this case,
 * the returned Function will stay the same Function obj (IOW "the identity will not change");
 * instead,
 * the associated {@link Ref Ref }, supposed to be constantly updated to point to the specified Function obj arg,
 * will be constantly updated such way, giving effect one'll refer as "constantly-refreshed callback";
 * thereby eliminating the need for {@link useCallback }
 * 
 * to be able to *properly* call *event-handler(s)* __(or other callbacks u're okay it may change anytime)__ from within `useYyyEffect` handlers
 * you'll *really* need this wrapper.
 * this is  a substitute of "experimental API that has not yet been released" `useEffectEvent` (not available yet),
 * see "Separating Events From Effects" (https://19.react.dev/learn/separating-events-from-effects ).
 * 
 */
export const useRefreshedCallback = (
  
  uedcs.useRefreshedCallback
) ;

/**
 * to be able to *properly* call *event-handler(s)* from within `useYyyEffect` handlers
 * you'll *really* need this wrapper.
 * 
 * this is  a substitute of "experimental API that has not yet been released" `useEffectEvent` (not available yet),
 * see "Separating Events From Effects" (https://19.react.dev/learn/separating-events-from-effects ).
 * 
 */
export const useEventDispatchCallback = (

  uedcs.useEventDispatchCallback
) ;

import * as ietvs from "studk-ui-fwcore/src/reactjs/helpers/UsePeriodicScanningOrSideEffects.tsx" ;

import IntervalSource = ietvs.IntervalSource ;

export {
  /** @deprecated */
  IntervalSource ,
} ;

const useIntervalEffect = (

  ietvs.useIntervalEffect
) ;

const useIntervalScan = (
  ietvs.useIntervalScan
) ;

export {
  useIntervalEffect ,
  useIntervalScan ,
} ;

type RefHookArgsImpl<valueT extends object | symbol> = (
  ArgsWithOptions<[], { latencyMillis ?: number ; }>
) ;

/**
 * use {@link React.useRef mutable-ref-pointed } value,
 * forcing {@link React.useLayoutEffect re-render} when it (ie the value identity) changes.
 * 
 * __avoid using ref-maintained values as props since
 * doing so will easily lead to buggy component implementation causing the renderer to hang.__
 * 
 * TODO/TBD/WIP
 * 
 */
const useMutableRefObjState = (

  //
  function <valueT extends object>(...[opts = {}] : RefHookArgsImpl<valueT> )
  {

    const { latencyMillis = 1000 , } = opts ;

    const ref = (
      useRef<valueT | null>(null )
    ) ;

    return [
      useIntervalScan(() => ref.current , { latencyMillis, getFallbackValue: () => null, } )
      ,
      ref,
    ] satisfies [any, any] ;

  }
) ;

/**
 * use {@link React.Ref callback-ref-pointed} value,
 * forcing {@link React.useLayoutEffect re-render} when it (ie the value identity) changes.
 * 
 * __avoid using ref-maintained values as props since
 * doing so will easily lead to buggy component implementation causing the renderer to hang.__
 * 
 * TODO/TBD/WIP
 * 
 */
const useCallbackRefState = (
  //
  function <valueT extends object>(...[opts = {}] : RefHookArgsImpl<valueT> ) : [valueT | null, Extract<React.Ref<valueT>, Function>]
  {

    const {
       latencyMillis ,
    } = opts ;

    const [mainRefEd, mainRef] = (
      useMutableRefObjState<valueT>({ latencyMillis, })
    ) ;

    return (
      [
        mainRefEd,

        (
          useCallback(async (e: (valueT | null) ) => {
            await (
              TIMEOUT(0.5 * 1000 )
            ) ;
            mainRef.current = e ;
          } , [mainRef, ] )
        ) ,

      ] satisfies [any,any]
    ) ;
  }
) ;

/**
 * use {@link React.Ref ref-pointed} value,
 * forcing {@link React.useLayoutEffect re-render} when it (ie the value identity) changes.
 * 
 * __avoid using ref-maintained values as props since
 * doing so will easily lead to buggy component implementation causing the renderer to hang.__
 * 
 * TODO/TBD/WIP
 * 
 */
const useRefState = (
  //
  function <valueT extends object>(...args : RefHookArgsImpl<valueT> ) : [valueT | null, React.Ref<valueT>]
  {
    return (
      useCallbackRefState<valueT>(...args)
    ) ;
  }
) ;

export {
  /** @deprecated */
  useMutableRefObjState ,
  useRefState ,
} ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

import {
  useEventEmitterListener ,
  useEventTargetListener ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseDOmOrNodeJsEventEmitters.ts" ;

export {
  useEventTargetListener ,
  useEventEmitterListener,
} ;









