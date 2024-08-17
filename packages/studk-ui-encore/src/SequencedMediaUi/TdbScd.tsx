






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

import {
  TbmcKnbSpclScrollHandler ,
  getPreferredSpclisedTbmcKnbSpclScrollHandler ,
} from "studk-ui-encore/src/SequencedMediaUi/TbmcKnbcScd.tsx" ;

export interface SpclScrollHandler extends Extract<TbmcKnbSpclScrollHandler, any>
{}

export const getSpclScrollHandleRefCtxStack = (
  util.L.once(() => {
    const defaultItc: SpclScrollHandler | null = (
      getPreferredSpclisedTbmcKnbSpclScrollHandler()
    ) ;

    return (
      React.createContext<SpclScrollHandler | null>(defaultItc)
    ) ;
  })
) ;

export const useSpclisedScdPeer = (
  function () {
    const ctxtuSpclScrollHandler = (
      React.useContext(getSpclScrollHandleRefCtxStack() )
    ) ;
    const ctxtuScdHandler0 = (
      React.useContext(getScdSProvCtxStack() )
    ) ;
    return (
      // TODO
      React.useMemo<ScdStateProvCtx>(() => {
        if (ctxtuSpclScrollHandler) {
          // TODO
          return (
            describeSsva({ getSFromPt: function (pt0): (
              | { readonly startT : number, readonly rnk: string | null, readonly dsc ?: any }
              | false
            ) {
              const e = ctxtuSpclScrollHandler.searchDisplayedSegs({ pt: pt0, }) ;
              for (const dsc of e ) {
                const {
                  startT ,
                  rnk ,
                } = dsc ;
                // const  ;
                return ({
                  dsc ,
                  rnk,
                  startT ,
                } as const) ;
              }
              {
                return false ;
              }
            } , getPtFromS: (e00) => {
              if (!!e00)
              {
                const { startT, } = e00;
                const e0 = (
                  // TODO
                  ctxtuSpclScrollHandler.analyseDisplayedSegsSearchReturnedDescs([e00])[0]
                );
                if (e0) {
                  const { pt = util.throwAssertionError(`assertion failed for ${JSON.stringify({ e00, startT, e0, }) }`), } = e0 ;
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
      } , [ctxtuSpclScrollHandler] )
    ) ;
  }
) ;

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








