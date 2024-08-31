




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

import type {
  ContinuousLinearRange ,
} from 'studk-ui/src/fwCore/linearValues.ts'; ;

export namespace XUtil { ; }






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









/* can't use `const TbmcModelState = ... ... ;` */
import TbmcModelState = TbmcKnsBasedModelState ;

export { TbmcModelState , } ;

import {
  TbmcKnsBasedModelState ,
} from 'studk-ui/src/tabularUi/tbmc-knsb.tsx' ;

export {
  TbmcKnsBasedModelState ,
} ;

;




export { SCC as SpclCoreC, } ;

import {
  TbmcBreakthruColumnsRendering ,
  getSuggestedSccMastPlotter ,
} from 'studk-ui/src/tabularUi/tbmc-breakthrusdisplay.tsx' ;

export {} ;

interface ScCProps {
  horizonConfig: {
    range: ContinuousLinearRange ,
  } ,
  value?: TbmcModelState ,
}

const SCC = (
  describeComponent(function TimeTableMC({
    horizonConfig ,
    value: valueArg ,
  } : ScCProps ) {
    return (
      <TbmcKnbC
      horizonConfig={horizonConfig}
      value={valueArg}
      />
    ) ;
  })
) ;

const TbmcKnbC = (
  describeComponent(function KnBasedTimeTableMC({
    horizonConfig ,
    value: valueArg ,
  } : {
    //
  horizonConfig: {
    range: ContinuousLinearRange ,
  } ,
  value?: TbmcKnsBasedModelState ,
  } ) {
    ;

    const {
      effectiveWindowSeq: hoSegmentDescs ,
      renderPerChannelPlotAsUnitApplet ,
      renderPerChannelPlotAsWrInlineContent ,
    } = (
      TbmcBreakthruColumnsRendering.describeSuggestedConfig1({ horizonConfig, })
    ) ;

    const chnlDataList = (
      valueArg?.layerStates ??
      mkArray(function* () {
        for (const i of util.range(0, 10) ) {
          yield { kind: "X", id: `chnl-${i}`, } satisfies TbmcModelState.KnLayerStateOpsImpl ;
        }
      } )
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
                id: `itemKind`,
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
                      { `(Hor ${`${srcSpan.startPos} to ${srcSpan.endPos}` })` }
                    </span>
                  ) ,
                  renderContent: (v) => (
                    renderPerChannelPlotAsWrInlineContent(v, msd )
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

















