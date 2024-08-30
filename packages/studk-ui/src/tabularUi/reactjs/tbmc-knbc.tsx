









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
} from 'studk-ui/src/fwCore/ewo.ts'; ;
import type { PartializedPartially, RequiredPartially, } from 'studk-fwcore-setups/src/util-eawo.mjs';

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
        
        const mainTable = (
          renderTableByRowDtListAndColumnList(chnlDataList , {

            getRowHash: (v, i) => `item ${i}-th`
            ,

            perRowCellRenderers: renderTableByRowDtListAndColumnList.generateColumns(function* () {
              yield {
                renderHead: () => <i children={`name`} /> ,
                renderContent: (v) => <code children={`${v.id}`} /> ,
                id: `itemId`,
              } ;

              yield {
                renderHead: () => <i children={`kind letter`} /> ,
                renderContent: (v) => <code children={`${v.kind}`} /> ,
                id: `itemKind`,
              } ;

              for (const msd of hoSegmentDescs)
              {
                const { srcSpan, id: colId, } = msd ;
                yield {
                  id: `Horizon Segment ${colId}`,
                  classNames: ['studk-ui-tbmc-timewatchcolumncell'],
                  renderHead: () => (
                    <span>
                      Spn
                      <span>
                        (
                          <EllapsedTValueC value={srcSpan.startPos} maxUnit='hours' />
                          to
                          <EllapsedTValueC value={srcSpan.endPos} maxUnit='hours' />
                        )
                      </span>
                    </span>
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
                      { renderPerChannelPlotAsWrInlineContent(v, msd ) }
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




import 'studk-ui/src/tabularUi/reactjs/tbmc-defaults.scss' ;













