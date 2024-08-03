




;




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
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

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
      | ReadonlyArray<TbmcKnsBasedModelState.LayerStateOps >
      |  util.Immutable.Collection<any, TbmcKnsBasedModelState.LayerStateOps>
    ) ,
  }>) {
    return (
      (
        layerStates instanceof Array ?
        (
          new TbmcKnsBasedModelState(
            layerStates,
            util.Immutable.Seq(layerStates) ,
          )
        )
        : (
          new TbmcKnsBasedModelState(
            layerStates.valueSeq().toArray() ,
            layerStates ,
          )
        )
      )
    ) ;
  }

  private constructor(
    /** @deprecated */
    public layerStates: (
      ReadonlyArray<TbmcKnsBasedModelState.LayerStateOps >
    ) ,
    // TODO remove the '?'-mark
    public layerStatesImtb?: (
      // | ReadonlyArray<TbmcKnsBasedModelState.LayerStateOps >
      util.Immutable.Collection<any, TbmcKnsBasedModelState.LayerStateOps>
    ) ,
  )
  { super() ; }

  static asFixed(v0: TbmcKnsBasedModelState )
  {
    return (
      v0.layerStatesImtb ?
      v0
      : TbmcKnsBasedModelState.getCmnInstance({ layerStates: v0.layerStates, })
    ) ;
  }

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









