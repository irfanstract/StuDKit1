









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
} from '#UiFwCore/util/ContinuousLinearRangeTs'; ;

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
} from '#UiFwCore/util/ReactJsBased'; ;

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

  rowHeadCollDescs?: readonly renderTableByRowDtListAndColumnList.PerColumnPrImpl<TbmcKnsBasedModelState.LayerStateOps>[] ,

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

      rowHeadCollDescs : rhcdArg ,

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
      TbmcKnsBasedModelState.asFixed(valueArg).layerStatesImtb!
      // .valueSeq()
    ) ;

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
            { " " && (
              <p>
                (ID: <code>{ msd.id }</code> )
              </p>
            ) }
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
          chnlDesc: (typeof valueArg.layerStates)[number],
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
        rhcdArg,
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
      rhcdArg,
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

        const rowHeadCollDescs = (
          rhcdArg
          ??
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
                  </div>
                ) ,
                asRowHeader: true,
              } ;

          })
        ) ;
  
        const mainTable = (
          renderTableByRowDtListAndColumnList.renderAsTransposed((
            chnlDataList
            .valueSeq()
            .toArray()
          ) , {

            getRowHash: (v, displayedI) => {
              const i = (
                (
                  chnlDataList
                  .sortBy((vle, key) => vle.id )
                )
                .valueSeq().indexOf(v)
              ) ;
              return (
                `content-layer-${i}` as const
              ) ;
            }
            ,

            perRowCellRenderers: renderTableByRowDtListAndColumnList.generateColumns(function* () {

              yield* rowHeadCollDescs ;

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
  export function searchSegmentDisplayNodes<Mpe>(...args: (
    ArgsWithOptions<[host ?: Element | Document], {
      flatTranslate: (ctx: ReturnType<typeof S_EHE1>) => ([Mpe ] | []) ,
    }>
  ) )
  {
    const [
      root0 = document,
      {
        flatTranslate: flm,
      },
    ] = args ;

    const root = (
      (function (): Element {
        if ("matches" in root0) {
          return root0 ;
        }
        if ("documentElement" in root0) {
          return root0.documentElement ;
        }
        return (
          util.throwTypeError()
        ) ;
      } )()
    ) ;

    return (

      // TODO
      (
        (function () {

          const s0 = (
            // `.studk-sequemi-tlwalkthruappcomp`
            `* `
          );
          const s1 = `:is(tr)[data-src-row-id^=plotsegment]`;

          return (
            root.matches(s0) ?
            (
              Array.from((
                root.querySelectorAll(`:is(${s1 })`)
              ) )
            )
            :
            (
              Array.from((
                root.querySelectorAll(`:is(${s0 }) :is(${s1 })`)
              ) )
            )
          ) ;
        })()
      )

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













