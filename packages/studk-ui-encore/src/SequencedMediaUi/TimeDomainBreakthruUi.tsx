






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

const T_BY_HMS = (
  function (...[hn, mn, sn] : [...values: [Array<any>["length"], Array<any>["length"], Array<any>["length"]] ])
  {
    return (hn * 60 + mn) * 60 + sn ;
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
  ButtonC,
  Span ,
  describeCallbackAssignedStyleProps ,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

// import Link from "next/link" ;

import {
  getFullDocBodySrcBasedSvgDataUrl,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

import {
  renderTableByRowDtListAndColumnList,
} from 'studk-ui/src/tabularUi/reactjs/tblbyrow.tsx';







;

import {
  ScCHorizonConfigPropsDesc,
  SpclCoreC,
  TbmcKnsBasedModelState,
} from "studk-ui/src/tabularUi/reactjs/tbmc.tsx" ;

import {
  SccMastPlotter ,
} from "studk-ui/src/tabularUi/tbmc-breakthrusdisplay.tsx" ;

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

  readonly scrollingConfig ?: {
    readonly revertToRawPositioning ?: boolean ;
  } ,

  readonly mainPlotter ?: SccMastPlotter.SpclSizelessInst ,

}

/**
 * 
 * @deprecated this is a WIP.
 * 
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

/**
 * 
 * @deprecated this is a WIP.
 * 
 */
export const TimeDomainedMultiChnlInspectiveSpanC = (
  describeHtmlComponent((
    //
    function TimeDomainedMultiChnlInspectiveSpanCImpl({} : {})
    {
      // TODO
      return <></> ;
    }
  ))
) ;

export const TimeDomainedMultiChnlInspectiveFigureC = (
  describeHtmlComponent((
    function TimeDomainedMultiChnlInspectiveFigureCBiggerImpl({ ...props } : TimeDomainedMultiChnlInspectiveFigureCProps)
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
    function TimeDomainedMultiChnlInspectiveFigureCInnerImpl({
      scrollingConfig: {
        revertToRawPositioning: scRevertToRawPositioning = false ,
      } = {} ,
      mainPlotter,
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
            <TimeDomainedMultiChnlInspectiveSpC
            hc={horizonConfig }
            mainPlotter={mainPlotter ?? getSpclDefaultMainPlotter() }
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
 * @deprecated
 * 
 */
const getSpclDefaultMainPlotter = (
  util.L.once(() => (
    SccMastPlotter.SpclSizelessInst.getInstance()
  ))
) ;

/**
 * WIP/TBD
 * 
 * @deprecated
 * 
 */
export const TimeDomainedImgListSpC = (
  describeHtmlComponent((
    function TimeDomainedImgListSpCImpl()
    {
      // TODO
      return <></> ;
    }
  ))
) ;

export const TimeDomainedMultiChnlInspectiveSpC = (
  describeHtmlComponent((
    function TimeDomainedMultiChnlInspectiveSpCImpl({ hc: horizonConfigArg, mainPlotter, } : { hc ?: ScCHorizonConfigPropsDesc, mainPlotter : SccMastPlotter.SpclSizelessInst, })
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

      const mainPlotterAsAppletifyingInst = (
        React.useMemo(() => (
          SccMastPlotter.fromSizelessInstance(mainPlotter)
        ) , [mainPlotter])
      ) ;

      ;
      const rowHeadCollDescs = (
        util.reiterated<(
          renderTableByRowDtListAndColumnList.PerColumnPrImpl<TbmcKnsBasedModelState.LayerStateOps >
        ) >(function* () {
          ;

          // ⬆️⬇️☯️

          yield {
            id: `itemident`,
            renderHead: () => <i children={`name`} /> ,
            renderContent: (v) => (
              <div
              style={{
                minInlineSize: `12ex`,
              }}
              >
                <p>
                  <i children={v.id} />
                </p>
                <p>
                  <ButtonC
                  title={`Move Up`}
                  children={`⬆️`}
                  onClick={false }
                  />
                  <ButtonC
                  title={`Move Down`}
                  children={`⬇️`}
                  onClick={false }
                  />
                </p>
              </div>
            ) ,
            asRowHeader: true,
          } ;

          yield {
            id: `itemkind`,
            renderHead: () => <i children={`kind letter`} /> ,
            renderContent: (v) => (
              <div>
                <p>
                  <code children={`${v.kind}`} />
                </p>
                <p>
                  <ButtonC
                  title={`Change Kind`}
                  children={`☯️`}
                  onClick={false }
                  />
                </p>
              </div>
            ) ,
            asRowHeader: true,
          } ;

        })
      ) ;


      return (
        <div className='studk-sequemi-tlwalkthruinlinecomp'>
          <SpclCoreC
          horizonConfig={horizonConfig}
          value={ls}
          mainPlotters={{
            primaryStreamPlotter: (
              mainPlotterAsAppletifyingInst
            ) ,
          }}
          rowHeadCollDescs={rowHeadCollDescs}
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
        T_BY_HMS(0, (
          5.5
          // 15.5
          // 45
        ), 30)
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
            if (TBMC_SCDNEXTINGDEBUG)
            {
              e = (
                <div
                className='studk-sequemi-tdbi-withspecialisedscdoverrides-1do03'
                children={e}
                />
              ) ;
            }
            e = (
              <WithSsc1DInner
              children={e}
              />
            ) ;
            if (TBMC_SCDNEXTINGDEBUG)
            {
              e = (
                <div
                className='studk-sequemi-tdbi-withspecialisedscdoverrides-1do02'
                children={e}
                />
              ) ;
            }
            if (revertToRawScrollSavePos === false)
            {
              e = (
                <WithSpclisedScdOverrides1C
                children={e}
                />
              ) ;
            }
            if (TBMC_SCDNEXTINGDEBUG)
            {
              e = (
                <div
                className='studk-sequemi-tdbi-withspecialisedscdoverrides-1do01'
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

      const scprov0 = (
        useCtxtualScdProv()
      ) ;

      const atLevelDivRef1 = (
        React.useRef<HTMLDivElement>(null)
      ) ;
      const viewportDivRef1 = (
        React.useRef<HTMLDivElement>(null)
      ) ;

      const scprovAlt = (
        useCtxExplicitSpclisedScdPeer(scprov0, {
          ctxtuSpclScrollHandler0: null ,
          csDivRef: (
            atLevelDivRef1
          ),
          viwportRef: (
            viewportDivRef1
          ) ,
        } )
      ) ;

      const {
        poi ,
        setPoi ,
        statDerivable ,
        lsce ,
        setLsce ,
        setLsceDebcd ,
      } = (
        useCtxExplicitSpclisedScdStateValues1((
          // scprov0
          scprovAlt
        ))
      ) ;

      return (
        ((
          (...[e] : [React.ReactElement]) => {
            if (1)
            {
              if (TBMC_SCDNEXTINGDEBUG)
              {
                e = (
                  <div
                  className='studk-sequemi-tdbi-withspecialisedscdoverrides-1dinner02'
                  children={e}
                  />
                ) ;
              }
              e = (
                <div
                ref={atLevelDivRef1}
                // className='studk-sequemi-tdbi-withspecialisedscdoverrides-1dinner01'
                children={e}
                />
              ) ;
              if (TBMC_SCDNEXTINGDEBUG)
              {
                e = (
                  <div
                  className='studk-sequemi-tdbi-withspecialisedscdoverrides-1dinner02'
                  children={e}
                  />
                ) ;
              }
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
              if (TBMC_SCDNEXTINGDEBUG)
              {
                e = (
                  <div
                  className='studk-sequemi-tdbi-withspecialisedscdoverrides-1dinner01'
                  children={e}
                  />
                ) ;
              }
              e = (
                <div
                ref={viewportDivRef1}
                // className='studk-sequemi-tdbi-withspecialisedscdoverrides-1dinner01'
                children={e}
                />
              ) ;
              if (TBMC_SCDNEXTINGDEBUG)
              {
                e = (
                  <div
                  className='studk-sequemi-tdbi-withspecialisedscdoverrides-1dinner01'
                  children={e}
                  />
                ) ;
              }
              e = (
                <div>
                <aside>
                  { " " && (
                  //
                  <div>
                  <p>
                    debug values:
                  </p>
                  <div
                  style={{
                    position: "relative",
                    overflow: "auto",
                    blockSize: `13.5em`,
                  }}
                  >
                  { (
                  <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: `8px`,
                  }}
                  >
                    { (
                      ((e: any) => JSON.stringify(e, null, 2 ) )({

                        // s: statDerivable.s,
                        rnk: statDerivable.s.rnk,
                        origiinalPos: statDerivable.originalPosArg ,
                        pos1: statDerivable.pos,
                        altPos1: (statDerivable.s.etc ?? {}).sO,
                        ...(0 ? { coords: statDerivable.s.etc, } : { }),
                        poi,

                        hostNd: (
                          (() => {
                            const rootNd = (
                              statDerivable.rootNd as (Element | null)
                            ) ;
                            return (
                              rootNd ? (rootNd.className ?? `Element <(no class name) >`) : `(no root nd)`
                            ) ;
                          })()
                        ) ,

                      })
                    ) }
                  </pre>
                  ) }
                  </div>
                  </div>
                  ) }
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
            if (TBMC_SCDNEXTINGDEBUG)
            {
              e = (
                <div
                className='studk-sequemi-tdbi-withspecialisedscdoverrides-1c02'
                children={e}
                />
              ) ;
            }
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
            if (TBMC_SCDNEXTINGDEBUG)
            {
              e = (
                <div
                className='studk-sequemi-tdbi-withspecialisedscdoverrides-1c01'
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
  SpclScrollHandler ,
  useSpclisedScdPeer, 
  useCtxExplicitSpclisedScdStateValues1,
  useCtxExplicitSpclisedScdPeer,
} from "studk-ui-encore/src/SequencedMediaUi/TdbScd.tsx" ;

import {
  ScdC ,
  useDebouncedScdStateWrapper1,
} from "studk-ui-encore/src/PaginatedUi/Scd.tsx" ;

import {
  WithCtxtuallyOverridenScdSProvC,
  describeSsva ,
  useCtxtualScdProv,
  type ScdStateProvCtx ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScdStack.tsx" ;

import {
  TbmcKnbCDisplayed ,
} from "studk-ui/src/tabularUi/reactjs/tbmc-knbc.tsx" ;

import "studk-ui-encore/src/SequencedMediaUi/tmdc.scss" ;

let TBMC_SCDNEXTINGDEBUG: boolean = true ;











