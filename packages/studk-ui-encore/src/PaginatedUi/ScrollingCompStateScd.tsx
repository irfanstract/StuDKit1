











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

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'; ;






import * as React from "react" ;





;

import {
  getScdSProvCtxStack ,
  ScdStateDerivable ,
  ScdStateProvCtx ,
  useCtxtualScdProv ,
  WithCtxtuallyOverridenScdSProvC ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScdStack.tsx" ;

const useScdState1 = (
  function (scprov: ScdStateProvCtx) {
    ;

    const [sDerivbl, setDrvblState] = (
      function <S extends {} & P, P extends {}, CS>(...a : [(prov: P) => S , newProvdr: P, checkProvd?: (...a: NoInfer<[prov: P]>) => CS] )
      {
        ;
        const [mp, scprov, chkProvd = mp] = a ;
        ;
        const [lastSdvb, setDrvblState] = (
          React.useState<S>((
            mp(scprov)
          ))
        ) ;
        /**
         * avoid staleness.
         * since
         * {@link lastSdvb} (from parameter or `useState`/`useReducer`) and {@link scprov}
         * are technically two *independent* variables,
         * updating {@link scprov} means we need to manually (re)set {@link lastSdvb}.
         * see https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
         * for how to properly do that.
         * 
         */
        if (chkProvd(scprov) !== chkProvd(lastSdvb) ) {
          setDrvblState(mp(scprov))
        }
        return [lastSdvb, setDrvblState] as const ;
      }
    )((scprov: ScdStateProvCtx): ScdStateDerivable => scprov , scprov, e => e.rootNd ) ;

    const { pos: lastPoi, } = sDerivbl ;
    const setPoi = (
      React.useCallback((x: React.SetStateAction<SsvaPoint2D> ) => (
        setDrvblState(s0 => (
          s0.insteadForPos({ pos: ((typeof x === "function" ? x : (() => x) ))(s0.pos), })
        ) )
      ) , [setDrvblState] )
    ) ;

    return {
      scprov ,
      statDerivable: sDerivbl ,
      poi: lastPoi ,
      setDrvblState ,
      setPoi ,
    } as const ;
  }
) ;

export type ScdsPoint2D = { x: number, y: number } ;

/**
 * enhanced version of {@link useCtxtualisedScdPoiState1}
 * with essential additional features
 * (eg `statDerivable`, `setDrvblState`, etc )
 * 
 */
const useCtxtualisedScdState1 = (
  function () {
    ;

    const scprov = (
      useCtxtualScdProv()
    ) ;

    const {
      statDerivable ,
      poi ,
      setDrvblState ,
      setPoi ,
    } = useScdState1(scprov) ;

    return (
      [statDerivable, {
        statDerivable ,
        poi ,
        /**
         * @deprecated this is a WIP/TBD.
         */
        setDrvblState ,
        /**
         * @deprecated this is a WIP/TBD.
         */
        setPoi ,
      }] as const
    ) ;
  }
) ;

/**
 * minimisation of {@link useCtxtualisedScdState1}
 * where we only want the value `poi` (like eg `<Scd>` does) -
 * returned in the format of {@link React.useState}
 * 
 */
const useCtxtualisedScdPoiState1 = (
  function () {
    ;

    const [ ,{
      poi ,
      statDerivable ,
      setDrvblState ,
      setPoi ,
    }] = useCtxtualisedScdState1() ;

    return (
      [poi, setPoi] as const
    ) ;
  }
) ;

export {
  useCtxtualisedScdState1 ,
  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  useCtxtualisedScdPoiState1 ,
  WithCtxtuallyOverridenScdSProvC ,
} ;

export {
} ;

export {
  /** @deprecated this is a WIP/TBD. */
  useScdState1 ,
  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  getScdSProvCtxStack ,
} ;
export type {
  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  ScdStateProvCtx ,
  /* final */
  ScdStateDerivable ,
} ;

;

type SsvaPoint2D = { x: number, y: number } ;

/**
 * 
 * 
 */
export const useDebouncedScdStateWrapper1A = (
  function <T extends {}>(...[poi, setPoi] : [state: T, updateState: React.Dispatch<React.SetStateAction<T> >] )
  {
    
    const setPoiDebcd = (
      React.useCallback(util.L.throttle(setPoi, 0.10205 * 1000 ) , [setPoi] )
    ) ;

    const poiDeferred = (
      React.useDeferredValue(poi)
    ) ;

    return [poiDeferred, { poi, poiDeferred, setPoi, setPoiDebcd, }] as const ;
  }
) ;

;





;

















