





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




// /** TODO/WIP @deprecated */
class IntervalSource extends ((

  createInterningSubclass((
    class MillisecsIntervalSourceImpl {
      constructor (...[{ tMillis, onceOnly = false, }] : [{ tMillis: number, onceOnly ?: boolean, }] ) {
        this.tMillis = tMillis ;
        this.onceOnly = onceOnly ;
      }
      readonly tMillis !: number ;
      readonly onceOnly !: boolean ;
    }
  ) , {
    //
    computeArgsHash: e => JSON.stringify(e) ,
  } )

))
{}

export {
  /** @deprecated {@link IntervalSource } is a WIP. */
  IntervalSource ,
} ;

const useIntervalOrOnmessageEffect = (

  function (...a : ArgsWithOptions<[() => void, ...(
    | [IntervalSource]
    | [EventSource]
  ), React.DependencyList], {} > )
  {
    const [mCb, mode, dependencyList] = a ;

    useEffect(() =>
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
              if (mode.onceOnly === false ) { RESCHED() ; }
    
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

/**
 * React-specific wrapper for {@link setInterval };
 * signature made resembling {@link setInterval}'s as much possible,
 * 
 */
const useIntervalEffect = (

  function (...a : (

    ArgsWithOptions<[() => void, timeoutMillis: number, dependencies: React.DependencyList], {
      //
    } >
  ) )
  {
    const [mCb, timeoutMillis, dependencyList, opts] = a ;

    const ac = (
      useMemo(() => (
        new IntervalSource({ tMillis: timeoutMillis, })
      ) , [timeoutMillis] )
    ) ;

    return (

      useIntervalOrOnmessageEffect(mCb, ac, dependencyList, opts)
    ) ;
  }
) ;

const useIntervalScan = (
  function <const valueT>(...a : (

    ArgsWithOptions<[() => valueT], {
      //
      latencyMillis : number ,
      getFallbackValue ?: () => valueT,
    }>
  ) ) : valueT
  {

    const [
      getSnpsh,
      {
        latencyMillis = util.throwTypeError(`missing 'interval' in 'options'`) ,
        getFallbackValue: getServerSnapshot ,
      },
    ] = a ;

    const [ , startTransition ] = useTransition() ;

    return (
      useSyncExternalStore((
        // LOL
        useCallback(c => {
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

;









;




