






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

const T_BY_HMS = (
  function (...[hn, mn, sn] : [...values: [Array<any>["length"], Array<any>["length"], Array<any>["length"]] ])
  {
    return (hn * 60 + mn) * 60 + sn ;
  }
) ;

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
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  getFullDocBodySrcBasedSvgDataUrl,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;







;

import {
  ScCHorizonConfigPropsDesc,
  SpclCoreC,
  TbmcKnsBasedModelState,
} from "studk-ui/src/tabularUi/reactjs/tbmc.tsx" ;

import {
  ScdC ,
  useDebouncedScdState1 ,
} from "studk-ui-encore/src/PaginatedUi/Scd.tsx" ;

export const TimeDomainedImgListFigureC = (
  describeComponent((
    function TimeDomainedImgListFigureCImpl({} : {})
    {
      ;

      const [lsce, { setLsce, setLsceDebcd, }] = useDebouncedScdState1() ;

      const horizonConfig = React.useMemo((): ScCHorizonConfigPropsDesc => (
        computeDefaultHorizonConfig()
      ) , [] ) ;

      return (
        <div className='studk-sequemi-tlwalkthruappcomp'>
          <p>
            Time-domain plot of <code>movie.mp4</code>
          </p>
          <ScdC
          children={(
            <TimeDomainedImgListSpC
            hc={horizonConfig }
            />
          )}
          cv={lsce.x }
          onScroll={e => { setLsceDebcd(e.newVals) ; } }
          />
          <p>
            Scrolled at <code>{ JSON.stringify(lsce) }</code>
          </p>
        </div>
      ) ;
    }
  ))
) ;

/**
 * 
 * @deprecated this is a WIP.
 */
export const TimeDomainedImgListSpanC = (
  describeComponent((
    //
    function TimeDomainedImgListSpanCImpl({} : {})
    {
      // TODO
      return <></> ;
    }
  ))
) ;

export const TimeDomainedImgListSpC = (
  describeComponent((
    function TimeDomainedImgListSpCImpl({ hc: horizonConfigArg } : { hc ?: ScCHorizonConfigPropsDesc, })
    {
      ;
      
      const horizonConfig = React.useMemo((): ScCHorizonConfigPropsDesc => (
        horizonConfigArg ??
        computeDefaultHorizonConfig()
      ) , [horizonConfigArg] ) ;

      const ls = (
        React.useMemo((): TbmcKnsBasedModelState => {
          return (
            TbmcKnsBasedModelState.getCmnInstance({
              layerStates: (
                util.reiterated(function* (): Generator<TbmcKnsBasedModelState.LayerStateOps> {
                  for (const i of util.range(0, 3) ) {
                    yield { id: `chnl ${i}`, kind: "XLayer", } ;
                  }
                } )
              ) ,
            })
          ) ;
        } , [] )
      ) ;

      const tdSnpMap = (
        util.Immutable.Range(0, T_BY_HMS(0, 45, 3 ) , 7.5 )
        .toMap().mapEntries(([, pTStamp]) => {
          const screenshotImgUrl = (
            getFullDocBodySrcBasedSvgDataUrl({ viewBox: `0 0 300 300`, }, (
              `<g><rect width="300" height="300" fill="${`hsl(${`${pTStamp / T_BY_HMS(0, 15, 0) }px` }, 50%, 50%)` }"/>`
            ) )
          ) ;
          const icoUrl = (
            screenshotImgUrl
          ) ;
          return (
            [pTStamp, {
              pTStamp ,
              screenshotImgUrl ,
              icoUrl ,
            } as const ]
          ) ;
        } )
      ) ;

      return (
        <div className='studk-sequemi-tlwalkthruinlinecomp'>
          <SpclCoreC
          horizonConfig={horizonConfig}
          value={ls}
          />
        </div>
      ) ;
    }
  ))
) ;

const computeDefaultHorizonConfig = (
  (): ScCHorizonConfigPropsDesc => ({
    range: {
      startPos: T_BY_HMS(0, 0, -15) ,
      endPos: T_BY_HMS(0, 45, 30) ,
    } ,
  })
) ;

import "studk-ui-encore/src/SequencedMediaUi/tmdc.scss" ;











