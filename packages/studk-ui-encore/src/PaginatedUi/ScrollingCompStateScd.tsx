











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

const withLoggingAfterwards = (
  function <Args extends readonly unknown[], R>(x0: (...args: Args) => R )
  {
    const x1 = (
      (...a: Args) => {
        const originalReturnVal = x0(...a) ;
        console["debug"]({ originalReturnVal, a, }) ;
        return originalReturnVal ;
      }
    ) ;
    return x1 ;
  }
) ;






import {
  React ,
  toComponentMountKey,
  describeComponent ,
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
  mkClasses ,
  withExtraSemanticProperties,
  Button ,
  Span, 
  ReactSetStateActionHelpers,
} from '#UiFwCore/util/ReactJsBased.ts'; ;

import {
  useAutoresettingProvideredState ,
} from '#UiFwCore/reactjs/helpers/ProvideredStateHook1.tsx'; ;





;

import {
  getScdSProvCtxStack ,
  ScdStateDerivable ,
  ScdStateProvCtx ,
  useCtxtualScdProv ,
  WithCtxtuallyOverridenScdSProvC ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScdStack.tsx" ;

/**
 * *like {@link useCtxtualisedScdState1} but `provider` most be explicitly specified*.
 * *no-tuple version of {@link useScdState1Tupled}*.
 * 
 */
const useScdState1 = (
  function <St extends {}>(...args : (
    ArgsWithOptions<[provider: ScdStateProvCtx<St>] , {
      getIdOf?: (e: ScdStateDerivable) => (NonNullable<unknown> | null ) ,
    } >
  ) ) {

    const [
      scprov,
      {
        getIdOf = (e: ScdStateDerivable) => e.rootNd
        ,
      } = null ?? {},
    ] = args ;
    ;

    const [sDerivbl, setDrvblState] = (

      useAutoresettingProvideredState

    )((scprov: ScdStateProvCtx): ScdStateDerivable => scprov , scprov, getIdOf ) ;

    const {
      pos: lastPoi,
    } = sDerivbl ;

    const setPoi = (

      React.useCallback((getDerivedPos: React.SetStateAction<SsvaPoint2D> ) => (

        setDrvblState(s0 => (

          s0.insteadForPos({
            pos: (ReactSetStateActionHelpers.asDigestFnc(getDerivedPos) )(s0.pos)
            ,
          })
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
 * *like {@link useCtxtualisedScdState1} but `provider` must be explicitly specified*.
 * *tupled version of {@link useScdState1}*.
 * 
 */
const useScdState1Tupled = (
  function <St extends {}>(...args: Parameters<typeof useScdState1<St> > )
  {
    const {
      //
      scprov ,
      statDerivable ,
      poi,
      setDrvblState ,
      setPoi ,
    } = useScdState1(...args) ;

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
 * enhanced version of {@link useCtxtualisedScdPoiState1}
 * with essential additional features
 * (eg `statDerivable`, `setDrvblState`, etc ) .
 * a version of {@link useScdState1 } with
 * the main argument being the return-value of {@link useCtxtualScdProv } .
 * 
 * @deprecated instead,
 * expand to (in order) {@link useCtxtualScdProv } and {@link useScdState1Tupled}
 * 
 */
const useCtxtualisedScdState1 = (
  function () {
    ;

    const scprov = (
      useCtxtualScdProv()
    ) ;

    return (
      useScdState1Tupled(scprov)
    ) ;

  }
) ;

/**
 * minimisation of {@link useCtxtualisedScdState1}
 * where we only want the value `poi` (like eg `<Scd>` does) -
 * returned in the format of {@link React.useState}
 * 
 * @deprecated instead,
 * expand to (in order) {@link useCtxtualScdProv } and {@link useScdState1}
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
  /** @deprecated this is a WIP/TBD. */
  useScdState1Tupled,
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
      React.useCallback((
        util.L.throttle((
          withLoggingAfterwards(setPoi)
        ), 0.10205 * 1000 , {
          leading: false,
          trailing: true,
        } )
      ) , [setPoi] )
    ) ;

    const poiDeferred = (
      React.useDeferredValue(poi)
    ) ;

    return [poiDeferred, { poi, poiDeferred, setPoi, setPoiDebcd, }] as const ;
  }
) ;

;





;

















