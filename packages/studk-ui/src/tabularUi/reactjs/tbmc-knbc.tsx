









import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  PartializedPartially,
} from 'studk-fwcore/src/util/C1.ts'; ;

import type {
  ContinuousLinearRange ,
} from 'studk-ui-fwcore/src/util/ContinuousLinearRangeTs'; ;

export namespace XUtil { ; }






import {
  React ,
  describeComponent ,
  mkClasses ,
  Button ,
  Span, 
  withExtraSemanticProperties,
  describeCallbackAssignedStyleProps,
  ButtonC,
} from 'studk-ui-fwcore/src/util/ReactJsBased'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  EllapsedTValueC ,
} from "studk-ui-encore/src/SpclTStampFmtComps" ;

import {
  renderTableByRowDtListAndPresenter ,
  renderTableByRowDtListAndColumnList ,
  TableHeadRendererMono ,
  TableRowRendererMono ,
  TableRowsetRendererOpsImpl ,
} from 'studk-ui/src/tabularUi/reactjs/tblbyrow.tsx'; ;

import {
  Svg ,
  describeSvg ,
  describeSvgContent ,
} from 'studk-ui/src/meta/react/gec.tsx'; ;

import {
  WithOverlayHighlightingC,
  WithOvcLevelleGoodiesC ,
  WithElementBoundingBoxHighlightingC ,
  NCPSR ,
} from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;









import {
  TbmcKnsBasedModelState ,
} from 'studk-ui/src/tabularUi/tbmc-knsb.tsx' ;

;




import {
  TbmcModelState,
  TbmcBreakthruColumnsRendering ,
  getSuggestedSccMastPlotter, 
  SccMastPlotter,
} from 'studk-ui/src/tabularUi/tbmc-breakthrusdisplay.tsx' ;

export {} ;

export type TbmcHc = {
  range: ContinuousLinearRange ,
}

interface TbmcKnbCPropsImpl extends Extract<{
  //

  horizonConfig: TbmcHc ,

  value?: TbmcKnsBasedModelState ,
  mainPlotters ?: {
    primaryStreamPlotter ?: SccMastPlotter.RegularAppletifyingInstance ,
  } ,

}, any>
{}

/**
 * WIP/TBD
 * 
 */
export type TbmcKnbCProps = TbmcKnbCPropsImpl ;

const getTbmcKnbDefaultSpecimen = util.L.once(function ()
{
  return (
    TbmcKnsBasedModelState.getDemoInstance()
  ) ;
}) ;

const useTbmcKnbCProps = (

  function (props : TbmcKnbCProps )
  {
    ;

    const {

      horizonConfig ,

      value: valueArg = getTbmcKnbDefaultSpecimen() ,

      mainPlotters: {
        primaryStreamPlotter = getSuggestedSccMastPlotter() ,
      } = null ?? {} ,

    } = null ?? props ;

    const {
      effectiveWindowSeq: ddsds ,
      segmenterConfig,
      renderPerChannelPlotAsUnitApplet ,
      renderPerChannelPlotAsWrInlineContent ,
    } = (

      TbmcBreakthruColumnsRendering.describeSuggestedConfig11({

        horizonConfig: {
          range: horizonConfig.range ,
          samplingConfig: {
            perWindowSpan: (
              // TODO
              15.0
            ) ,
          } ,
        } ,

        primaryStreamSegmtPlotter: primaryStreamPlotter ,

      })

    ) ;

    const chnlDataList = (
      valueArg.layerStates
    ) satisfies TbmcModelState["layerStates"] ;

    {
      ;

      const renderTSegHeadLabelDiv : (
        (props: { msd: (typeof segmenterConfig.effectiveWindowSeq)[number], }) => React.ReactElement
      ) = (
        function ({ msd, }) {
          ;
          const { srcSpan, id: colId, } = msd ;
          return (
            <div
            style={{
              // display: `inline-block` ,
              fontSize: `75%` ,
            }}
            >
            <p
            >
              Spn
              <span>
                (
                  <EllapsedTValueC value={srcSpan.startPos} maxUnit='hours' /> {}
                  to {}
                  <EllapsedTValueC value={srcSpan.endPos} maxUnit='hours' /> {}
                )
              </span>
            </p>
            </div>
          ) ;
        }
      ) ;

      const renderChPlotSeg : (
        React.FC<{
          chnlDesc: (typeof chnlDataList)[number],
          directionalLocDesc: (typeof segmenterConfig.effectiveWindowSeq)[number],
        }>
      ) = (
        function ({ chnlDesc: v, directionalLocDesc: msd, })
        {
          return (
            renderPerChannelPlotAsWrInlineContent(v, msd )
          ) ;
        }
      ) ;

      return {
        horizonConfig,
        segmenterConfig,
        valueArg ,
        /** {@link segmenterConfig.effectiveWindowSeq} */
        directionalDomainWindowDescs: ddsds ,
        renderPerChannelPlotAsUnitApplet ,
        renderPerChannelPlotAsWrInlineContent ,
        chnlDataList,

        renderTSegHeadLabelDiv ,
        renderChPlotSeg ,

      } as const ;

    }

  }
) ;

export const TbmcKnbC: {
  /** @deprecated please make `value` non-null. */
  (props: PartializedPartially<TbmcKnbCProps, "value">): React.ReactNode ;
  (props: TbmcKnbCProps): React.ReactNode ;
} = (
  describeComponent(function KnBasedTimeTableMC(props : TbmcKnbCProps ) {
    ;

    const {
      horizonConfig,
      valueArg ,
      directionalDomainWindowDescs: ddsds ,
      renderPerChannelPlotAsUnitApplet ,
      renderPerChannelPlotAsWrInlineContent ,
      chnlDataList,

      renderTSegHeadLabelDiv ,
      renderChPlotSeg ,

    } = useTbmcKnbCProps(props) ;

    {
        ;

        const withSpclTbmcTdCssAnnotation = (
          function (...[e, srcSpan]: [React.ReactElement, ((typeof ddsds)[number] )["srcSpan"] ] )
          {
  
            return (
  
              withExtraSemanticProperties({
                style: (
                  describeCallbackAssignedStyleProps(c => {
                    if (0) {
                      c.inlineSize = `calc((var(--t-end) - var(--t-start) ) * var(--sc, 1) * 1ex)` ;
                    }
                    c.minInlineSize = `9ex` ;
                    void 0 ; (c as any )["--t-start"] = srcSpan.startPos ;
                    void 0 ; (c as any )["--t-end"  ] = srcSpan.endPos ;
                    void 0 ; (c as any )["--sc"     ] = 1 ;
                  } )
                ) ,
              } , e )
            ) ;
          }
        ) ;
  
        const mainTable = (
          renderTableByRowDtListAndColumnList.renderAsTransposed(chnlDataList , {

            getRowHash: (v, i) => `content-layer-${i}`
            ,

            perRowCellRenderers: renderTableByRowDtListAndColumnList.generateColumns(function* () {

              yield {
                id: `itemident`,
                renderHead: () => <i children={`name`} /> ,
                renderContent: (v) => (
                  <div>
                    <p>
                      <i children={v.id} />
                    </p>
                    <p>
                      <ButtonC
                      title={`Move Up`}
                      children={`Up`}
                      onClick={false }
                      />
                      <ButtonC
                      title={`Move Down`}
                      children={`DOwn`}
                      onClick={false }
                      />
                    </p>
                  </div>
                ) ,
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
                      children={`Change Kind`}
                      onClick={false }
                      />
                    </p>
                  </div>
                ) ,
              } ;

              for (const ddsd of ddsds)
              {
                const { srcSpan, id: colId, } = ddsd ;

                yield {
                  id: `plotsegment-${colId}`,
                  classNames: ['studk-ui-tbmc-timewatchcolumncell'],

                  renderHead: () => (

                    withSpclTbmcTdCssAnnotation((
                      <div
                      // data-t-start={srcSpan.startPos }
                      // data-t-end={srcSpan.endPos }
                      style={{
                        minBlockSize: `2em`,
                        contain: `layout inline-size`,
                        overflow: "hidden",
                      }}
                      children={(
                        renderTSegHeadLabelDiv({ msd: ddsd, })
                      ) }
                      />
                    ) , srcSpan )
                  ) ,

                  renderContent: (v) => (
                    <div
                    style={{
                      display: `flex` ,
                      flexDirection: "column" ,
                      blockSize: `100%`,
                      inlineSize: `100%`,
                    }}
                    >
                      { renderChPlotSeg({ chnlDesc: v, directionalLocDesc: ddsd, } ) }
                    </div>
                  )
                  ,

                } ;

              }
            } )
            ,

          } )
        ) ;

        return (
          withExtraSemanticProperties({
            classNames: ["studk-ui-tbmctableeelem"] ,
          } , mainTable )
        ) ;
    }
    ;
  } )
) ;

export namespace TbmcKnbCDisplayed
{

  /**
   * WIP/TBD
   * 
   * @deprecated
   */
  export function searchSegmentDisplayNodes<Mpe>(...[root = document, { flatTranslate: flm, }]: ArgsWithOptions<[host ?: Element | Document], { flatTranslate: (ctx: ReturnType<typeof S_EHE1>) => ([Mpe ] | []) }> ) {
    return (
      Array.from(root.querySelectorAll(`.studk-sequemi-tlwalkthruappcomp :is(tr)[data-src-row-id^=plotsegment]`) )
      .flatMap(e => {
        return (
          flm(S_EHE1(e) )
        ) ;
      })
    )  ;
  }
  const S_EHE1 = (e: Element) => {
    ;
    const rnk = (
      e.getAttribute("data-src-row-id")
    ) ;
    return {
      e ,
      rnk ,
    } ;
  } ;

  /**
   * WIP/TBD - `rnk` supposed to come from `ctx` given as ctx for that one callback required for {@link searchSegmentDisplayNodes}
   * 
   * @deprecated
   */
  export const getSegmentDisplayRowsByRnk = (
    function (...[rnk]: [rnk: string])
    {
      return (
        Array.from(document.querySelectorAll(`[data-src-row-id=${rnk }] `) )
      ) ;
    }
  ) ;

}




import 'studk-ui/src/tabularUi/reactjs/tbmc-defaults.scss' ;













