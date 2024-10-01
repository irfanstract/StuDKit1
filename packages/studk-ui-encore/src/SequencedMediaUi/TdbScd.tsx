






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
  DOmClientBoundingRect ,
} from '#UiFwCore/util/ReactDomBased.ts'; ;

import {
  GET_LOCALOFFSET_OF,
} from '#UiFwCore/dom/helpers/DOmLocalBoundingRectOfElementGeCo.ts';

import {
  getFullDocBodySrcBasedSvgDataUrl,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "#UiFwCore/xt/ovc-util.tsx" ;

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
      React.useMemo<ScdStateProvCtx<{}> >(() => {

        if (ctxtuSpclScrollHandler && csDiv1 && viewportDiv1 ) {

          type ENH_BSE = ReturnType<typeof ctxtuSpclScrollHandler.searchDisplayedSegs> ;

          const handleSdsReturnedItem = (
            ((dsc, i) => {

              ;

              const localOffset = (
                GET_LOCALOFFSET_OF(dsc.asNde, { referenceDiv: csDiv1, } )
              ) ;
              const clientOffset = (
                DOmClientBoundingRect.getFrom(dsc.asNde)
              ) ;

              // const  ;
              return (
                {
                  rnk: dsc.rnk ,
                  localOffset: localOffset,
                  clientOffset: clientOffset,
                  ...(dsc.etc) ,
                } as const
              ) ;
            }) satisfies Parameters<ENH_BSE["map"] >[0]
          ) ;

          const captureAndComputeStateFromSdsReturnedItem = (
            ((dsc, i, { originalPt, } ) => {

              ;

              const fdr = (
                handleSdsReturnedItem(dsc, i )
              ) ;

              const {
                localOffset: localOffset ,
                clientOffset: clientOffset ,
              } = fdr ;

              const sO = (
                DOmClientBoundingRect.getFrom(viewportDiv1).left
                -
                DOmClientBoundingRect.getFrom(csDiv1).left
              ) ;

              const eDbr1 = (
                DOmClientBoundingRect.getFrom(dsc.asNde)
              ) ;
              const csDbr = (
                DOmClientBoundingRect.getFrom(csDiv1)
              ) ;
              const viewportDbr = (
                DOmClientBoundingRect.getFrom(viewportDiv1)
              ) ;

              const globalCoords = {
                //
                originalActualPt: originalPt,
                sO ,
                eDbr1,
                csDbr ,
                viewportDbr ,
              } as const ;

              // const  ;
              return ({
                dsc ,
                clientOffset ,
                ...(globalCoords ) ,
                etc: (
                  {
                    rnk1: dsc.rnk ,
                    ...(globalCoords) ,
                    rnk: dsc.rnk ,
                    localOffset ,
                    clientOffset ,
                    ...(dsc.etc) ,
                    dec: localOffset,
                    dbr: clientOffset,
                  } as const
                ) ,
                ... (
                  (() => { const { etc, ...p } = dsc ; return p ; })()
                ) ,
                dbr: clientOffset ,
                // rnk,
                // startT ,
                debug1: {
                  // csDivRef ,
                } ,
              } as const) ;
            }) satisfies ((...args: ArgsWithOptions<[ENH_BSE[number] , number ], { originalPt: { x: number, y: number }, }> ) => object )
          ) ;

          interface MStateStructure extends
          ReturnType<typeof captureAndComputeStateFromSdsReturnedItem>
          {}

          const reanalyseMState = (
            function (...[e00] : [MStateStructure ] )
            {
              return (
                // TODO
                ctxtuSpclScrollHandler.analyseDisplayedSegsSearchReturnedDescs([e00])[0]
              ) ;
            }
          ) ;

          // TODO
          return (

            describeSsva({ hostNode: csDiv1, getSFromPt: function (pt0)
            {

              const describeMainFromSdsReturnedItem = (

                ((dsc, i) => (
                  captureAndComputeStateFromSdsReturnedItem(dsc, i, {
                    originalPt: pt0 ,
                  } )

                )) satisfies Parameters<ENH_BSE["map"] >[0]
              ) ;

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

                .map(describeMainFromSdsReturnedItem )

                .filter(function (s): boolean {
                ;

                const {
                  asNde: e,
                  etc: {
                    sO,
                    csDbr,
                    rnk: rnk0,
                  } ,
                } = s ;

                if (0) { return true ; }

                // TODO

                const sReanalysed = (
                  reanalyseMState(s)
                ) ;

                if (1 && !sReanalysed) {
                  return false ;
                }

                {
                  ;
                  if (sReanalysed && !(sReanalysed.rnk === rnk0 )) {
                    return false ;
                  }
                }

                const beingOutOfViewport = (
                  DOmClientBoundingRect.getFrom(e).right
                  <=
                  (
                    DOmClientBoundingRect.getFrom(viewportDiv1).left
                    +
                    (
                      22
                    )
                  )
                ) ;

                if (beingOutOfViewport) {
                  return false ;
                }

                return (
                  true
                ) ;
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

                if (1) {
                  return e00.originalActualPt ;
                }

                const {
                  startT,
                } = e00;

                const e0 = (
                  // TODO
                  reanalyseMState(e00)
                );

                if (e0) {
                  const {
                    pt = throwDetailedAssertionError({ e00, startT, e0, })
                    ,
                  } = e0 ;
                  if (e0.rnk === e00.rnk) {
                    return e00.originalActualPt ;
                  }
                  return e0.pt ;
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
        viewportDiv1 ,
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








