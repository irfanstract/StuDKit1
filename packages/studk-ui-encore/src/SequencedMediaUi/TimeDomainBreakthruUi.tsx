






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
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

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

// TODO
/**
 * 
 * WIP/TBD
 * 
 * @deprecated
 * 
 */
export const TimeDomainedImgListFigureC = (
  describeHtmlComponent((
    function TimeDomainedImgListFigureCBiggerImpl({ ...props } : TimeDomainedMultiChnlInspectiveFigureCProps)
    {
      ;

      return (
        <div>
          <p>
            <strong>
            Time-domained Image List FIgure
            </strong>
          </p>
        </div>
      ) ;
    }
  ))
) ;

interface TimeDomainedMultiChnlInspectiveFigureCProps
{
  scrollingConfig ?: {
    revertToRawPositioning ?: boolean ;
  } ,
}

export const TimeDomainedMultiChnlInspectiveFigureC = (
  describeHtmlComponent((
    function TimeDomainedImgListFigureCBiggerImpl({ ...props } : TimeDomainedMultiChnlInspectiveFigureCProps)
    {
      ;

      return (
        ((
          (...[e] : [React.ReactElement]) => {
            return e ;
          }
        ))((
          <TimeDomainedMultiChnlInspectiveFigureC11
          {...props}
          />
        ))
      ) ;
    }
  ))
) ;

// TODO
const TimeDomainedMultiChnlInspectiveFigureC11 = (
  describeHtmlComponent((
    function TimeDomainedImgListFigureCInnerImpl({
      scrollingConfig: {
        revertToRawPositioning: scRevertToRawPositioning = false ,
      } = {} ,
      ...otherProps
    } : TimeDomainedMultiChnlInspectiveFigureCProps)
    {
      ;

      const horizonConfig = React.useMemo((): ScCHorizonConfigPropsDesc => (
        computeDefaultHorizonConfig()
      ) , [] ) ;

      return (
        <div className='studk-sequemi-tlwalkthruappcomp'>
          <p>
            Time-domain plot of <code>movie.mp4</code>
          </p>
          <aside>
            <p>
              debug values:
            </p>
            { (
            // <pre style={{ whiteSpace: "pre-wrap", }}>
            //   { ((e: any) => JSON.stringify(e) )(statDerivable.s) }
            // </pre>
            null
            ) }
          </aside>
          { ((
            (...[e] : [React.ReactElement]) => {
              if (1)
              {
                e = (
                  <WithSsc1D
                  children={e}
                  revertToRawScrollSavePos={scRevertToRawPositioning }
                  />
                ) ;
              }
              return e ;
            }
          ))((
            <TimeDomainedImgListSpC
            hc={horizonConfig }
            />
          )) }
          { (
          // <p>
          //   Scrolled at <code>{ JSON.stringify(lsce) }</code>
          // </p>
          null
          ) }
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
  describeHtmlComponent((
    //
    function TimeDomainedImgListSpanCImpl({} : {})
    {
      // TODO
      return <></> ;
    }
  ))
) ;

export const TimeDomainedImgListSpC = (
  describeHtmlComponent((
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
      endPos: (
        1 ?
        T_BY_HMS(0, 15.5, 30)
        : T_BY_HMS(0, 45, 30)
      ) ,
    } ,
  })
) ;

const WithSsc1D = (
  describeHtmlComponent((
    function WithSsc1DImpl({ children, revertToRawScrollSavePos, } : React.PropsWithChildren<{ revertToRawScrollSavePos: boolean ; }>)
    {
      ;
      
      return (
        ((
          (...[e] : [React.ReactElement]) => {
            e = (
              <WithSsc1DInner
              children={e}
              />
            ) ;
            if (revertToRawScrollSavePos === false)
            {
              e = (
                <WithSpclisedScdOverrides1C
                children={e}
                />
              ) ;
            }
            return e ;
          }
        ))((
          <>{ children }</>
        ))
      ) ;
    }
  ))
) ;

const WithSsc1DInner = (
  describeHtmlComponent((
    function WithSsc1DInnerImpl({ children, } : React.PropsWithChildren)
    {
      ;

      const {
        poi ,
        setPoi ,
        statDerivable ,
        lsce ,
        setLsce ,
        setLsceDebcd ,
      } = useSpclisedScdStateValues1() ;

      return (
        ((
          (...[e] : [React.ReactElement]) => {
            if (1)
            {
              e = (
                <ScdC
                children={(
                  e
                )}
                {...{ orientCv: "horizontal", cv: lsce.x, crossCv: lsce.y, }}
                onScroll={e => { setLsceDebcd(e.newVals) ; } }
                // ctrlVarsDebug
                />
              ) ;
              e = (
                <div>
                <aside>
                  <p>
                    debug values:
                  </p>
                  <div
                  style={{
                    position: "relative",
                    overflow: "auto",
                    blockSize: `5em`,
                  }}
                  >
                  { (
                  <pre style={{ whiteSpace: "pre-wrap", }}>
                    { ((e: any) => JSON.stringify(e) )({
                      s: statDerivable.s, pos: statDerivable.pos,
                      clsn: (statDerivable.rootNd as (Element | null))?.className ?? `(no root nd)` ,
                    }) }
                  </pre>
                  ) }
                  </div>
                </aside>
                { e }
                { (
                  <p>
                    Scrolled at <code>{ JSON.stringify(lsce) }</code>
                  </p>
                ) }
                </div>
              ) ;
            }
            return e ;
          }
        ))((
          <>{ children }</>
        ))
      ) ;
    }
  ))
) ;

export const WithSpclisedScdOverrides1C = (
  describeHtmlComponent((
    function WithSpclisedOverrides1CImpl({ children, } : React.PropsWithChildren)
    {
      ;

      const scdPeer = (
        useSpclisedScdPeer()
      ) ;

      return (
        ((
          (...[e] : [React.ReactElement]) => {
            if (1)
            {
              e = (
                <WithCtxtuallyOverridenScdSProvC
                value={(
                  scdPeer
                )}
                children={e}
                />
              ) ;
            }
            return e ;
          }
        ))((
          <>{ children }</>
        ))
      ) ;
    }
  ))
) ;

import {
  useSpclisedScdStateValues1 ,
  SpclScrollHandler ,
  getSpclScrollHandleRefCtxStack ,
  useSpclisedScdPeer ,
} from "studk-ui-encore/src/SequencedMediaUi/TdbScd.tsx" ;

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











