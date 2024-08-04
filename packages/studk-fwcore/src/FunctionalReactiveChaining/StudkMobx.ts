







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitCase,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'







import {
  //

  observable, 
  runInAction,
  action as asUpdatingAction ,
  
  IObservable,
  IObservableValue,
  CreateObservableOptions ,
  IMapEntries ,
  IMapEntry ,
  IKeyValueMap ,
  IEqualsComparer ,
  IComputedFactory,
  IComputedValue,
  IComputedValueOptions,
  IAtom,
  IArraySplice,
  IObservableArray,
  IObservableMapInitialValues,

} from "mobx" ;

const shiftStateBoxValue = (
  function <Value extends {} | null | undefined>(...[rceivr, shft1] : [receiver: IObservableValue<Value> , digest: NoInfer<(x0: Value) => Value> ] )
  {

    const state0 = rceivr.get() ;

    const state1 = shft1(state0) ;

    rceivr.set(state1 ) ;

    return {
      state0 ,
      state1 ,
    } as const ;
  }
) ;



export {
  observable, 
  asUpdatingAction,
  runInAction,
  shiftStateBoxValue ,
} ;

export type {
  IObservable,
  IObservableValue,
  CreateObservableOptions ,
  IMapEntries ,
  IMapEntry ,
  IKeyValueMap ,
  IEqualsComparer ,
  IComputedFactory,
  IComputedValue,
  IComputedValueOptions,
  IAtom,
  IArraySplice,
  IObservableArray,
  IObservableMapInitialValues,
} ;











