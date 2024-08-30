





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
  random,
} from "lodash-es" ;

import {
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';
import {
  createInterningSubclass ,
} from 'typexpe-commons/src/ortEdConstructors.mjs';

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;


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

import * as React from "react" ;

export const useRefreshedCallback = (
  function <argsT extends readonly unknown[], const R>(...[upstreamImpl] : [impl: (...args: argsT) => R ])
  {
    const iRef = (
      React.useRef<(...x: argsT) => R>(() => util.throwAssertionError(`URC not initailsed yet`) )
    ) ;
    iRef.current = upstreamImpl ;

    return (...a: argsT) => iRef.current(...a) ;
  }
) ;

export const useEventDispatchCallback = (
  function <E extends object>(...[upstreamImpl] : [impl: (x: E) => void ] )
  {
    return (
      useRefreshedCallback(upstreamImpl)
    ) ;
  }
) ;

// /** TODO/WIP @deprecated */
class IntervalSource extends ((
  createInterningSubclass((
    class MillisecsIntervalSourceImpl {
      constructor (...[{ tMillis, }] : [{ tMillis: number, }] ) {
        this.tMillis = tMillis ;
      }
      readonly tMillis !: number ;
    }
  ) , {
    //
    computeArgsHash: e => JSON.stringify(e) ,
  } )
)) {}

export {
  /** @deprecated */
  IntervalSource ,
} ;

const useIntervalOrOnmessageEffect = (
  function (...[mCb, mode, dependencyList] : ArgsWithOptions<[() => void, ...(
    | [IntervalSource]
    | [EventSource]
  ), React.DependencyList], {} > )
  {

    React.useEffect(() =>
    {
      const s = new AbortController() ;

      void (() => {
        if (mode instanceof EventSource) {
          return util.throwTypeError(`TODO`) ;
        }

        if (mode instanceof IntervalSource) {
          ;
          const { tMillis, } = mode ;
  
          void (function RESCHED() {
            setTimeout(() =>
            {
              if (!(s.signal.aborted === false ) ) { return ; }
              mCb() ;
    
              if (!(s.signal.aborted === false ) ) { return ; }
              RESCHED() ;
    
            }, tMillis ) ;
          })() ;

          return ;
        }
        
        return util.throwTypeError(`unsupported: ${mode }`) ;
      })() ;

      return () => {
        s.abort() ;
      } ;
    } , dependencyList ) ;
  }
) ;

const useIntervalEffect = (
  function (...[mCb, timeoutMillis, dependencyList, opts] : ArgsWithOptions<[() => void, timeoutMillis: number, React.DependencyList], {} > )
  {
    return (
      useIntervalOrOnmessageEffect(mCb, (
        React.useMemo(() => new IntervalSource({ tMillis: timeoutMillis, }) , [timeoutMillis] )
      ), dependencyList, opts)
    ) ;
  }
) ;

const useIntervalScan = (
  function <const valueT>(...[getSnpsh, opts] : ArgsWithOptions<[() => valueT], { latencyMillis : number ; getFallbackValue ?: () => valueT, }> ) : valueT
  {
    const {
      latencyMillis = util.throwTypeError(`missing 'interval' in 'options'`) ,
      getFallbackValue: getServerSnapshot ,
    } = opts ;

    const [ , startTransition ] = React.useTransition() ;

    return (
      React.useSyncExternalStore((
        // LOL
        React.useCallback(c => {
          const intd = setInterval(c , latencyMillis) ;
          return () => { clearInterval(intd) ; } ;
        }, [latencyMillis, ] )
      ), getSnpsh, getServerSnapshot )
    ) ;
  }
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

    const ref = React.useRef<valueT | null>(null ) ;
    return [useIntervalScan(() => ref.current , { latencyMillis, getFallbackValue: () => null, } ) , ref] satisfies [any, any] ;
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
      [mainRefEd, (
        React.useCallback(async (e: (valueT | null) ) => {
          await (
            TIMEOUT(0.5 * 1000 )
          ) ;
          mainRef.current = e ;
        } , [mainRef, ] )
      ) ] satisfies [any,any]
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









