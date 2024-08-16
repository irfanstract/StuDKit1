






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






const throwDetailedAssertionError = (
  function (s: Record<string, unknown>)
  {
    return (
      util.throwAssertionError(`assertion failed for ${JSON.stringify(s) }`)
    ) ;
  }
) ;

import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts' ;






import {
  React ,
  toComponentMountKey,
  describeComponent ,
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
  mkClasses ,
  withExtraSemanticProperties,
  Button ,
  ButtonC,
  Span ,
  describeCallbackAssignedStyleProps ,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  getFullDocBodySrcBasedSvgDataUrl,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

const GET_CLIENTOFFSET_OF = (
  (e: Element) => ({
    x: e.getBoundingClientRect().left,
    y: e.getBoundingClientRect().top,
  })
) ;







;

import {
  ScCHorizonConfigPropsDesc,
  SpclCoreC,
  TbmcKnsBasedModelState,
} from "studk-ui/src/tabularUi/reactjs/tbmc.tsx" ;

import {
  ScdC ,
  scdDivRefCtx,
  useDebouncedScdStateWrapper1,
} from "studk-ui-encore/src/PaginatedUi/Scd.tsx" ;

import {
  useScdState1Tupled,
  // useDebouncedScdStateWrapper1A ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScd.tsx" ;

import {
  describeSsva ,
  getScdSProvCtxStack ,
  type ScdStateProvCtx ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScdStack.tsx" ;

import {
  ASVN,
  TbmcKnbSpclScrollHandler ,
  getPreferredSpclisedTbmcKnbSpclScrollHandler, 
  getPreferredSpclisedTbmcKnbSpclScrollHandlerUncachedFor,
} from "studk-ui-encore/src/SequencedMediaUi/TbmcKnbcScd.tsx" ;

/**
 * 
 * WIP
 * 
 * @deprecated
 * 
 */
export interface SpclScrollHandler extends Extract<TbmcKnbSpclScrollHandler, any>
{}

/**
 * 
 * WIP
 * 
 * @deprecated
 * 
 */
const getSpclScrollHandleRefCtxStack = (
  util.L.once(() => {
    // TODO
    const defaultItc: SpclScrollHandler | null = (
      null
    ) ;

    return (
      React.createContext<SpclScrollHandler | null>(defaultItc)
    ) ;
  })
) ;

export {

  /**
   * @deprecated this is a WIP.
   */
  getSpclScrollHandleRefCtxStack ,

} ;

/**
 * 
 * WIP
 * 
 * @deprecated
 * 
 */
export const useSpclisedScdPeer = (
  function ()
  {

    const ctxtuSpclScrollHandler0 = (
      React.useContext(getSpclScrollHandleRefCtxStack() )
    ) ;

    const ctxtuScdHandler0 = (
      React.useContext(getScdSProvCtxStack() )
    ) ;

    const csDivRef = (
      React.useContext(scdDivRefCtx)
    ) ;

    return (
      useCtxExplicitSpclisedScdPeer(ctxtuScdHandler0, {
        ctxtuSpclScrollHandler0 ,
        csDivRef ,
      } )
    ) ;
  }
) ;

/**
 * WIP
 * 
 */
export const useCtxExplicitSpclisedScdPeer = (
  function (...[
    ctxtuScdHandler0 ,
    { ctxtuSpclScrollHandler0, csDivRef, viwportRef, } ,
  ] : (
    ArgsWithOptions<[ScdStateProvCtx ] , {
      ctxtuSpclScrollHandler0: SpclScrollHandler | null ,
      csDivRef: React.RefObject<HTMLDivElement | null> | null ,
      viwportRef?: React.RefObject<HTMLDivElement | null> | null ,
    }>
  ) )
  {

    // const {
    //   //
    //   csDiv1 ,
    //   viewportDiv1 ,
    // } = (
    //   useIntervalScan((
    //     React.useCallback(() => (
    //       {
    //         csDiv1: csDivRef?.current ?? null ,
    //         viewportDiv1: viwportRef?.current ?? null ,
    //       } as const
    //     ) , [csDivRef, viwportRef, ] )
    //   ) , {
    //     latencyMillis: 0.125 * 1000 ,
    //     getFallbackValue: () => null ,
    //   } )
    //   ??
    //   {}
    // ) ;
    const csDiv1 = (
      useIntervalScan(() => (csDivRef?.current ?? null) , {
        latencyMillis: 0.125 * 1000 ,
        getFallbackValue: () => null ,
      } )
    ) ;
    const viewportDiv1 = (
      useIntervalScan(() => (viwportRef?.current ?? null) , {
        latencyMillis: 0.125 * 1000 ,
        getFallbackValue: () => null ,
      } )
    ) ;

    // TODO
    const ctxtuSpclScrollHandler = (

      React.useMemo(() => {

        if (ctxtuSpclScrollHandler0) {
          return ctxtuSpclScrollHandler0 ;
        }

        const mainBaseE = (
          (csDiv1 ?? null )
          ??
          ((typeof document !== "undefined") ? document.documentElement : null )
        ) ;

        if (mainBaseE) {

          const asvn = (
            (mainBaseE && viewportDiv1 ) ?
            ASVN({
              assumedPositionalParentNode: mainBaseE ,
              assumedViewportNode: viewportDiv1 ,
            })
            : null
          ) ;

          return (
            getPreferredSpclisedTbmcKnbSpclScrollHandlerUncachedFor(mainBaseE , {
              aSVn: (asvn ?? undefined) ,
            } )
          ) ;
        }

        return null ;
      } , [
        ctxtuSpclScrollHandler0,
        csDiv1,
        viewportDiv1,
      ] )
    ) ;

    return (
      // TODO
      React.useMemo<ScdStateProvCtx>(() => {
        if (ctxtuSpclScrollHandler && csDiv1) {
          // TODO
          return (

            describeSsva({ hostNode: csDiv1, getSFromPt: function (pt0): (
              | { readonly startT : number, readonly rnk: string | null, readonly dsc ?: any, readonly debug1 ?: any, }
              | false
            ) {

              /**
               * note:
               * return on the first found one.
               * 
               */
              for (const r of (

                ctxtuSpclScrollHandler.searchDisplayedSegs({
                  pt: pt0,
                  searchScope: csDiv1,
                }) 

                .map((dsc, i) => {

                  ;

                  // const  ;
                  return ({
                    dsc ,
                    ...(dsc) ,
                    // rnk,
                    // startT ,
                    debug1: {
                      // csDivRef ,
                    } ,
                  } as const) ;
                } )

              ) ) {
                return r ;
              }

              {
                return false ;
              }
            } , getPtFromS: (e00) => {

              if (!!e00)
              {

                const {
                  startT,
                } = e00;

                const e0 = (
                  // TODO
                  ctxtuSpclScrollHandler.analyseDisplayedSegsSearchReturnedDescs([e00])[0]
                );

                if (e0) {
                  const {
                    pt = throwDetailedAssertionError({ e00, startT, e0, })
                    ,
                  } = e0 ;
                  return pt ;
                } else {
                }
              }

              return {
                x: -1, y: -1,
              } ;
            } })
          ) ;
        }
        if (0) {
          return (
            describeSsva({ getSFromPt: pt => ({ x: 100, y: 100 }) , getPtFromS: pt => pt })
          ) ;
        }
        return (
          (
            ctxtuScdHandler0
          )
        ) ;
      } , [
        ctxtuSpclScrollHandler,
        csDiv1,
        // csDivRef,
      ] )
    ) ;
  }
) ;

export const useCtxExplicitSpclisedScdStateValues1 = (
  function (...[scprov]: (
    [scprov: ScdStateProvCtx,]
  ) ) {
    ;

    const [ , { poi , setPoi, statDerivable, }] = (
      useScdState1Tupled(scprov)
    ) ;

    const [lsce, { setLsce, setLsceDebcd, }] = (
      useDebouncedScdStateWrapper1(poi, setPoi)
    ) ;

    return {
      poi ,
      setPoi ,
      statDerivable ,
      lsce ,
      setLsce ,
      setLsceDebcd ,
    } as const ;
  }
) ;

import {
  TbmcKnbCDisplayed ,
} from "studk-ui/src/tabularUi/reactjs/tbmc-knbc.tsx" ;

import "studk-ui-encore/src/SequencedMediaUi/tmdc.scss" ;








