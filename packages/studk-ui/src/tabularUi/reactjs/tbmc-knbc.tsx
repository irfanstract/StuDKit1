









import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from 'studk-ui/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
  PartializedPartially,
  RequiredPartially,
} from 'studk-fwcore-setups/src/util-eawo.mjs';

import type {
  ContinuousLinearRange ,
} from 'studk-ui/src/fwCore/linearValues.ts'; ;

export namespace XUtil { ; }

import {
  T_STRING ,
} from "studk-ui-encore/src/SpclTStampFmtFncs.tsx" ;






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
} from 'studk-ui/src/meta/react/dbc.tsx'; ;

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

export const TbmcKnbC: {
  /** @deprecated please make `value` non-null. */
  (props: PartializedPartially<TbmcKnbCProps, "value">): React.JSX.Element ;
  (props: TbmcKnbCProps): React.JSX.Element ;
} = (
  describeComponent(function KnBasedTimeTableMC({
    horizonConfig ,
    value: valueArg = getTbmcKnbDefaultSpecimen() ,
  } : TbmcKnbCProps ) {
    ;

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

        const renderTSegLabel : React.FC<{ msd: (typeof hoSegmentDescs)[number], }> = (
          function ({ msd, }) {
            ;
            const { srcSpan, id: colId, } = msd ;
            return (
              <p
              style={{
                // display: `inline-block` ,
                fontSize: `75%` ,
              }}
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
        
        const mainTable = (
          renderTableByRowDtListAndColumnList.renderAsTransposed(chnlDataList , {

            getRowHash: (v, i) => `content-layer-${i}`
            ,

            perRowCellRenderers: renderTableByRowDtListAndColumnList.generateColumns(function* () {
              yield {
                renderHead: () => <i children={`name`} /> ,
                renderContent: (v) => <code children={`${v.id}`} /> ,
                id: `itemident`,
              } ;

              yield {
                renderHead: () => <i children={`kind letter`} /> ,
                renderContent: (v) => <code children={`${v.kind}`} /> ,
                id: `itemkind`,
              } ;

              for (const msd of hoSegmentDescs)
              {
                const { srcSpan, id: colId, } = msd ;
                yield {
                  id: `plotsegment-${colId}`,
                  classNames: ['studk-ui-tbmc-timewatchcolumncell'],
                  renderHead: () => (
                    <div
                    data-t-start={srcSpan.startPos }
                    data-t-end={srcSpan.endPos }
                    style={{
                      inlineSize: `calc((var(--t-end) - var(--t-start) ) * var(--sc, 1) * 1ex)` ,
                      minBlockSize: `2em`,
                      contain: `layout inline-size`,
                      overflow: "hidden",
                      ...({
                        ["--t-start"]: `attr(data-t-start)` ,
                        ["--t-end"  ]: `attr(data-t-end  )` ,
                        ["--sc"]: 1 ,
                      }),
                    }}
                    children={(
                      renderTSegLabel({ msd, })
                    ) }
                    />
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
          mainTable
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













