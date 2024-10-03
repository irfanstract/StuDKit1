




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-fwcore/src/util/C1.ts'; ;

export namespace XUtil { ; }






import * as React from "react" ;





import {
  describeComponent,
} from '#UiFwCore/ReactComponentDef.tsx'; ;

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









import {
  TbmcKnsBasedModelState ,
} from 'studk-ui/src/tabularUi/tbmc-knsb.tsx' ;

export {
  TbmcKnsBasedModelState ,
} ;

;




import {
  TbmcModelState,
  TbmcBreakthruColumnsRendering ,
  getSuggestedSccMastPlotter ,
} from 'studk-ui/src/tabularUi/tbmc-breakthrusdisplay.tsx' ;

import {
  TbmcKnbC ,
  TbmcHc ,
} from 'studk-ui/src/tabularUi/reactjs/tbmc-knbc.tsx' ;

export { TbmcModelState , } ;

export {} ;

export { SCC as SpclCoreC, } ;

export interface ScCProps {

  // horizonConfig: ScCHorizonConfigPropsDesc ,

  // value?: TbmcModelState ,
  // mainPlotters ?: Required<React.ComponentProps<typeof TbmcKnbC> >["mainPlotters"] ,

}
export interface ScCProps extends React.ComponentProps<typeof TbmcKnbC> {}

export interface ScCHorizonConfigPropsDesc extends Extract<TbmcHc, any> {}

export const SCC = (

  describeComponent(function TimeTableMC({

    horizonConfig ,

    value: valueArg ,

    rowHeadCollDescs ,

    mainPlotters ,

  } : ScCProps )
  {

    return (
      <TbmcKnbC
      horizonConfig={horizonConfig}
      value={valueArg}
      rowHeadCollDescs={rowHeadCollDescs}
      mainPlotters={mainPlotters}
      />
    ) ;

  })
) ;




import 'studk-ui/src/tabularUi/reactjs/tbmc-defaults.scss' ;

















