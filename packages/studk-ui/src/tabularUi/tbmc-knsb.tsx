




;




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









class TbmcKnsBasedModelState extends Object
{
  readonly isTbmcKnsBasedModelState !: true ;

  static getCmnInstance(...[{ layerStates, }] : ArgsWithOptions<[], {
    //
    layerStates: (
      ReadonlyArray<TbmcKnsBasedModelState.LayerStateOps >
    ) ,
  }>) {
    return new TbmcKnsBasedModelState(layerStates) ;
  }

  protected constructor(public layerStates: (
    ReadonlyArray<TbmcKnsBasedModelState.LayerStateOps >
  ) )
  { super() ; }
}
namespace TbmcKnsBasedModelState { ; }

namespace TbmcKnsBasedModelState
{
  export class LayerStateOps
  {
    declare readonly kind: string ;
    declare readonly id: string ;
    protected constructor() {}
  }

  export class KnLayerStateOpsImpl extends LayerStateOps
  {
    declare readonly kind: "X" ;
    protected constructor() { super() ; }
  }

}

namespace TbmcKnsBasedModelState
{

  /**
   * 
   * @deprecated
   */
  export const getDemoInstance = (
    function () {
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
    }
  ) ;

}

export { TbmcKnsBasedModelState , } ;

;






;









