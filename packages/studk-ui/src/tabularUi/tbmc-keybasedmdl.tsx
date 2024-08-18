




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
  EffectiveParameters,
  PartializedPartially,
  RequiredPartially,
} from 'studk-fwcore-setups/src/util-eawo.mjs';

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









interface TbmcKybmGenericKeySet<out T> extends Extract<(util.Immutable.Set<T>), any>
{}




export type TbmcKybmKeySet = (
  EffectiveParameters<TbmcAppliedKeySetCons>[0]
) ;
interface TbmcAppliedKeySetCons extends Extract<(x: (
  | TbmcKybmGenericKeySet<symbol>
  | TbmcKybmGenericKeySet<number>
  | TbmcKybmGenericKeySet<string>
)) => void, any>
{}

class TbmcKeyBasedModelState extends Object
{
  readonly isTbmcKeyBasedModelState !: true ;

  static getCmnInstance(...[opts] : ArgsWithOptions<[], {
    //
    layerKeys: (
      TbmcKybmKeySet
    ) ,
  }>) {
    const { layerKeys, } = opts ;
    return new TbmcKeyBasedModelState(layerKeys) ;
  }

  protected constructor(public layerKeys: (
    (
      TbmcKybmKeySet
    )
  ) )
  { super() ; }
}
namespace TbmcKeyBasedModelState { ; }

namespace TbmcKeyBasedModelState
{
  export class LayerStateOps
  {
    declare readonly kind: string ;
    declare readonly id: string ;
    protected constructor() {}
  }

  // export class KnLayerStateOpsImpl extends LayerStateOps
  // {
  //   declare readonly kind: "X" ;
  //   protected constructor() { super() ; }
  // }

}

namespace TbmcKeyBasedModelState
{

  /**
   * 
   * @deprecated
   */
  export const getDemoInstance = (
    function () {
      return (
        TbmcKeyBasedModelState.getCmnInstance({
          layerKeys: (
            util.Immutable.Set((
              util.reiterated(function* () {
                for (const i of util.range(0, 3) ) {
                  yield `chnl ${i}` ;
                }
              } )
            ))
          ) ,
        })
      ) ;
    }
  ) ;

}

export { TbmcKeyBasedModelState , } ;

;






;









