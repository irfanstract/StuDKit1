






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
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  getFullDocBodySrcBasedSvgDataUrl,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

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
  useDebouncedScdState1, 
  useDebouncedScdStateWrapper1,
} from "studk-ui-encore/src/PaginatedUi/Scd.tsx" ;

import {
  useCtxtualisedScdPoiState1, 
  useCtxtualisedScdState1,
  // useDebouncedScdStateWrapper1A ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScd.tsx" ;

export interface TbmcKnbSpclScrollHandler extends Extract<{}, any>
{
  isSpclScrollHandler ?: true ;
  searchDisplayedSegs: {
    (ctx: (
      & ({ e: Element } | { pt: { x: number, y: number, } })
    )): (
      ReadonlyArray<(
        & {
          readonly startT: number,
          readonly endT?: number,
        }
        & { rnk: string | null, }
        & { etc ?: {} | null, }
      )>
    ) ;
  } ;
  analyseDisplayedSegsSearchReturnedDescs: (ctx: readonly (ReturnType<TbmcKnbSpclScrollHandler["searchDisplayedSegs"] >[number] )[] ) => (
    ReadonlyArray<(
      { pt: { x: number, y: number, } }
    )>
  ) ;
}

export const getPreferredSpclisedTbmcKnbSpclScrollHandler = (
  util.L.once(function (): TbmcKnbSpclScrollHandler | null {
    return (typeof document !== "undefined") ? ((
      {
        searchDisplayedSegs: (ctx) => {
          if (0) {
            return [] ;
          }
          if (1)
          {
            return (
              TbmcKnbCDisplayed.searchSegmentDisplayNodes(document, {
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
                return (
                  0 <= GET_CLIENTOFFSET_OF(e).x
                  &&
                  (1 || -23.0 <= GET_CLIENTOFFSET_OF(e).y )
                ) ;
              } )
              .map(({ rnk, e, }) => {
                const cp = GET_CLIENTOFFSET_OF(e) ;
                return {
                  startT: -1 ,
                  rnk,
                  etc: { rnk, cp, } ,
                } as const ;
              } )
            ) ;
          }
          return [] ;
        } ,
        analyseDisplayedSegsSearchReturnedDescs: (ctxs) => {
          // TODO
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
                      console["error"](String(z) ) ;
                      return [] ;
                    }
                  })() )
                  {
                    const poi = GET_CLIENTOFFSET_OF(e) ;
                    yield { poi, } as const ;
                  }
                }
              } )
            ) )
            .map(e => ({ pt: e.poi, }) )
          ) ;
          return [] ;
        } ,
      }
    ) satisfies TbmcKnbSpclScrollHandler) : null ;
  })
) ;

/**
 * 
 * @deprecated this is a WIP/TBD
 */
export const useSpclisedScdStateValues1 = (
  function () {
    ;
    const [ , { poi , setPoi, statDerivable, }] = useCtxtualisedScdState1() ;
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
  WithCtxtuallyOverridenScdSProvC,
  describeSsva ,
  getScdSProvCtxStack ,
  type ScdStateProvCtx ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScdStack.tsx" ;

import {
  TbmcKnbCDisplayed ,
} from "studk-ui/src/tabularUi/reactjs/tbmc-knbc.tsx" ;

import "studk-ui-encore/src/SequencedMediaUi/tmdc.scss" ;








