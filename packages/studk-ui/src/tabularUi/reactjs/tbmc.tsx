




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

export { TbmcModelState , } ;

export {} ;

export { SCC as SpclCoreC, } ;

export interface ScCProps {
  horizonConfig: ScCHorizonConfigPropsDesc ,
  value?: TbmcModelState ,
}

export interface ScCHorizonConfigPropsDesc extends Extract<TbmcHc, any> {}

export const SCC = (
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

import {
  TbmcKnbC ,
  TbmcHc ,
} from 'studk-ui/src/tabularUi/reactjs/tbmc-knbc.tsx' ;




import 'studk-ui/src/tabularUi/reactjs/tbmc-defaults.scss' ;

















