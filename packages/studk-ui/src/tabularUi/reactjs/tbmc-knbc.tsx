









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
} from 'studk-ui/src/fwCore/linearValues.ts'; ;

export namespace XUtil { ; }






import {
  React ,
  describeComponent ,
  mkClasses ,
  Button ,
  Span, 
  withExtraSemanticProperties,
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
  getSuggestedSccMastPlotter ,
} from 'studk-ui/src/tabularUi/tbmc-breakthrusdisplay.tsx' ;

export {} ;

export type TbmcHc = {
  range: ContinuousLinearRange ,
}

interface TbmcKnbCProps extends Extract<{
  //
  horizonConfig: TbmcHc ,
  value?: TbmcKnsBasedModelState ,
}, any>
{}

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
    } = null ?? props ;

    const {
      effectiveWindowSeq: hoSegmentDescs ,
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
      })
    ) ;

    const chnlDataList = (
      valueArg.layerStates
    ) satisfies TbmcModelState["layerStates"] ;

    {
      ;

      const renderTSegHeadLabelDiv : (
        (props: { msd: (typeof hoSegmentDescs)[number], }) => React.ReactElement
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

      const renderChPlotSeg : React.FC<{ v: (typeof chnlDataList)[number], msd: (typeof hoSegmentDescs)[number], }> = (
        function ({ v, msd, })
        {
          return (
            renderPerChannelPlotAsWrInlineContent(v, msd )
          ) ;
        }
      ) ;

      return {
        horizonConfig,
        valueArg ,
        hoSegmentDescs ,
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
      hoSegmentDescs ,
      renderPerChannelPlotAsUnitApplet ,
      renderPerChannelPlotAsWrInlineContent ,
      chnlDataList,

      renderTSegHeadLabelDiv ,
      renderChPlotSeg ,

    } = useTbmcKnbCProps(props) ;

    {
        ;

        const withSpclTbmcTdCssAnnotation = (
          function (...[e, srcSpan]: [React.ReactElement, ((typeof hoSegmentDescs)[number] )["srcSpan"] ] )
          {
  
            return (
  
              withExtraSemanticProperties({
                style: {
                  //
                  inlineSize: `calc((var(--t-end) - var(--t-start) ) * var(--sc, 1) * 1ex)` ,
                  ...({
                    ["--t-start"]: srcSpan.startPos ,
                    ["--t-end"  ]: srcSpan.endPos ,
                    ["--sc"]: 1 ,
                  }),
                } ,
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
                renderContent: (v) => <code children={`${v.id}`} /> ,
              } ;

              yield {
                id: `itemkind`,
                renderHead: () => <i children={`kind letter`} /> ,
                renderContent: (v) => <code children={`${v.kind}`} /> ,
              } ;

              for (const msd of hoSegmentDescs)
              {
                const { srcSpan, id: colId, } = msd ;

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
                        renderTSegHeadLabelDiv({ msd, })
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
                      { renderChPlotSeg({ v, msd, } ) }
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













