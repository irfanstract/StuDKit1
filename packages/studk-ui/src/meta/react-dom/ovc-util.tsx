





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

/** TODO/TBD/WIP */
const useMutableRefObjState = (
  //
  function <valueT extends object>(...[opts = {}] : ArgsWithOptions<[], { latencyMillis ?: number ; }> )
  {
    const { latencyMillis = 1000 , } = opts ;

    const ref = React.useRef<valueT | null>(null ) ;
    return [useIntervalScan(() => ref.current , { latencyMillis, getFallbackValue: () => null, } ) , ref] satisfies [any, any] ;
  }
) ;

/** TODO/TBD/WIP */
const useRefState = (
  //
  function <valueT extends object>(...[opts = {}] : ArgsWithOptions<[], { latencyMillis ?: number ; }> ) : [valueT | null, React.Ref<valueT>]
  {
    const [mainRefEd, mainRef] = useMutableRefObjState<valueT>() ;

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

export {
  /** @deprecated */
  useMutableRefObjState ,
  useRefState ,
} ;

import * as ReactDOM from "react-dom" ;









