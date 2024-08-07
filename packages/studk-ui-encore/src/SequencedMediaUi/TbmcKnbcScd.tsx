






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
} from 'studk-ui-fwcore/src/util/ReactDomBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

// import Link from "next/link" ;

import {
  getFullDocBodySrcBasedSvgDataUrl,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

import {
  GET_LOCALOFFSET_OF ,
  GCOIbleNode ,
} from "studk-ui-fwcore/src/dom/helpers/DOmLocalBoundingRectOfElementGeCo.ts" ;

export type {
  /** @deprecated this is a WIP/TBD. */
  GCOIbleNode ,
};







;

import {
  ScCHorizonConfigPropsDesc,
  SpclCoreC,
  TbmcKnsBasedModelState,
} from "studk-ui/src/tabularUi/reactjs/tbmc.tsx" ;

import {
  ScdC ,
  useDebouncedScdStateWrapper1,
} from "studk-ui-encore/src/PaginatedUi/Scd.tsx" ;

import {
  // useCtxtualisedScdState1,
  // useDebouncedScdStateWrapper1A ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScd.tsx" ;

export interface TbmcKnbSpclScrollHandler extends Extract<{}, any>
{
  isTbmcKnbSpclScrollHandler ?: true ;

  searchDisplayedSegs: (
    TbmcKnbSpclScrollHandler.SdsFncImpl<(
      ReadonlyArray<(
        TbmcKnbSpclScrollHandler.SdsItemDesc
      )>
    )>
  ) ;

  analyseDisplayedSegsSearchReturnedDescs: (
    (ctx: readonly (ReturnType<TbmcKnbSpclScrollHandler["searchDisplayedSegs"] >[number] )[] ) => (
      ReadonlyArray<(
        TbmcKnbSpclScrollHandler.AdrResultItem
      )>
    )
  ) ;

}

export namespace TbmcKnbSpclScrollHandler {
  ;

  export interface SdsItemDesc extends Extract<(
    & {
      readonly startT: number,
      readonly endT?: number,
    }
    & { rnk: string | null, }
    & { asNde: Element, }
    & { etc ?: {} | null, }
  ) , any > {}

  export interface SdsFncImpl<out R>
  {
    //
  
    (...ctx: (
      ArgsWithOptions<(
        ArgsWithOptions<[], (
          & ({ e: Element } | { pt: { x: number, y: number, } })
          & ({ searchScope: GCOIbleNode, })
        )>
      ) , {  }>
    )): R ;
  
    /** @deprecated */
    (...ctx: (
      ArgsWithOptions<(
        ArgsWithOptions<[], (
          & ({ e: Element } | { pt: { x: number, y: number, } })
          & ({ searchScope?: never, })
        )>
      ) , {}>
    )): R ;
  
  }

  export interface AdrResultItem extends Extract<(
    & { pt: { x: number, y: number, } }
    & { rnk: string, }
  ), any > {}
  
  ;
}

interface ASVN {
  //
  assumedViewportNode : (
    // Document | Element
    GCOIbleNode
  ),
  assumedPositionalParentNode : (
    // Document | Element
    GCOIbleNode
  ),
}
function ASVN(props : ASVN )
: ASVN
{
  return props ;
}
export { ASVN, } ;

export const getPreferredSpclisedTbmcKnbSpclScrollHandlerUncachedFor = (
  function (...args : (

    ArgsWithOptions<[rootNode: (
      // Document | Element
      GCOIbleNode
    )], {
      lookupRootNode ?: (
        // Document | Element
        GCOIbleNode
      ),
      aSVn?: ASVN ,
    } >

  )) : TbmcKnbSpclScrollHandler
  {
  ;

  const [
    rootNode,
    {
      lookupRootNode: altLookupRootNode = rootNode,
      aSVn: {
        //
        assumedPositionalParentNode = rootNode ,
        assumedViewportNode = rootNode ,
      } = {} satisfies AllOrNever1<ASVN> ,
    } = null ?? {} ,
  ] = args ;

  const processAdrdException = (
    // console["error"](String(z) )
    util.L.throttle((z: unknown) => (
      console["error"](String(z) )
    ) , (100 * 1000 ) )
  ) ;

  return (
    ((
      {

        searchDisplayedSegs: (ctx) => {

          if (0) {
            return [] ;
          }

          if (1)
          {

            const {
              searchScope: customRootDiv = rootNode ,
            } = ctx ;
            const {
              searchScope: lookupRootNode = altLookupRootNode ,
            } = ctx ;

            return (

              TbmcKnbCDisplayed.searchSegmentDisplayNodes(lookupRootNode, {
                flatTranslate: ({ e, rnk: rnk, }) => {
                  return [
                    { e, rnk, } ,
                  ] as const ;
                } ,
              } )

              .filter(({ e, }) => {
                if (0) {
                  return true ;
                }
                // TODO
                return (
                  0 <= GET_LOCALOFFSET_OF(e, { referenceDiv: assumedPositionalParentNode, } ).x
                  &&
                  (1 || -23.0 <= GET_LOCALOFFSET_OF(e, { referenceDiv: assumedPositionalParentNode, }).y )
                ) ;
              } )

              .map(({ rnk, e, }) => {
                const toPpn = GET_LOCALOFFSET_OF(e, { referenceDiv: (assumedPositionalParentNode ), }) ;
                const toVwp = GET_LOCALOFFSET_OF(e, { referenceDiv: (assumedViewportNode         ), }) ;
                const baselines = {
                  ePage: GET_LOCALOFFSET_OF(e                          , { referenceDiv: (document.body ), }) ,
                  cPage: GET_LOCALOFFSET_OF(assumedPositionalParentNode, { referenceDiv: (document.body ), }) ,
                  vPage: GET_LOCALOFFSET_OF(assumedViewportNode        , { referenceDiv: (document.body ), }) ,
                } ;
                return {
                  startT: -1 ,
                  rnk,
                  asNde: e,
                  etc: {
                    rnk,
                    toPpn,
                    toVwp,
                    // baselines ,
                    ...baselines,
                    vp: toVwp,
                    cp: toPpn,
                  } ,
                } satisfies TbmcKnbSpclScrollHandler.SdsItemDesc ;
              } )

            ) ;
          }
          return [] as const ;
        } ,

        analyseDisplayedSegsSearchReturnedDescs: (ctxs) => {
          // TODO

          const customRootDiv = rootNode;

          return (

            ctxs

            .flatMap(({ rnk, asNde: asNde0, }) => (

              util.reiterated(function* () {

                if (typeof rnk === "string") {

                  for (const e of (function (): Element[] {

                    if (1) {
                      return [asNde0] ;
                    }

                    try {
                      return (
                        TbmcKnbCDisplayed.getSegmentDisplayRowsByRnk(rnk)
                      ) ;
                    } catch (z: any) {
                      processAdrdException(z) ;
                      return [] ;
                    }
                  })() )
                  {
                    yield {
                      incidedPageProperties: {
                        rnk: rnk,
                        topLeftPos: (
                          GET_LOCALOFFSET_OF(e, {
                            referenceDiv: assumedPositionalParentNode,
                          })
                        ) ,
                      } ,
                    } as const ;
                  }
                }
              } )
            ) )
            .map(e => ({
              pt: e.incidedPageProperties.topLeftPos ,
              rnk: e.incidedPageProperties.rnk ,
            } satisfies TbmcKnbSpclScrollHandler.AdrResultItem ) )

          ) ;
          return [] as const ;
        } ,

      } satisfies TbmcKnbSpclScrollHandler
    ) )
  ) ;
  }
) ;

export const getPreferredSpclisedTbmcKnbSpclScrollHandler = (
  util.L.once(function (): TbmcKnbSpclScrollHandler | null {
    return (typeof document !== "undefined") ? ((
      getPreferredSpclisedTbmcKnbSpclScrollHandlerUncachedFor(document.documentElement)
    ) satisfies TbmcKnbSpclScrollHandler) : null ;
  })
) ;

import {
  describeSsva ,
  type ScdStateProvCtx ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScdStack.tsx" ;

import {
  TbmcKnbCDisplayed ,
} from "studk-ui/src/tabularUi/reactjs/tbmc-knbc.tsx" ;

import "studk-ui-encore/src/SequencedMediaUi/tmdc.scss" ;








