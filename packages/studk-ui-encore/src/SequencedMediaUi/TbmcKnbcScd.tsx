






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
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

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
    SdsFncImpl<(
      ReadonlyArray<(
        & {
          readonly startT: number,
          readonly endT?: number,
        }
        & { rnk: string | null, }
        & { etc ?: {} | null, }
      )>
    )>
  ) ;

  analyseDisplayedSegsSearchReturnedDescs: (
    (ctx: readonly (ReturnType<TbmcKnbSpclScrollHandler["searchDisplayedSegs"] >[number] )[] ) => (
      ReadonlyArray<(
        { pt: { x: number, y: number, } }
      )>
    )
  ) ;

}

interface SdsFncImpl<out R>
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
                const cp = GET_LOCALOFFSET_OF(e, { referenceDiv: (assumedPositionalParentNode ), }) ;
                const vp = GET_LOCALOFFSET_OF(e, { referenceDiv: (assumedViewportNode         ), }) ;
                return {
                  startT: -1 ,
                  rnk,
                  etc: {
                    rnk,
                    cp,
                    vp,
                  } ,
                } as const ;
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

            .flatMap(({ rnk, }) => (

              util.reiterated(function* () {

                if (typeof rnk === "string") {

                  for (const e of (function () {

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
                    const poi = (
                      GET_LOCALOFFSET_OF(e, { referenceDiv: customRootDiv, })
                    ) ;
                    yield {
                      poi,
                    } as const ;
                  }
                }
              } )
            ) )
            .map(e => ({
              pt: e.poi,
            } as const ) )

          ) ;
          return [] as const ;
        } ,

      }
    ) satisfies TbmcKnbSpclScrollHandler)
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








