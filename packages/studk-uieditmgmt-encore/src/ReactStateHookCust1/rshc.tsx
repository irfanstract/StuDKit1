






"use client" ;








import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  EitherPropertyOf, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'; ;

// import {
//   ReadonlyURLSearchParams,
// } from "next/navigation.js";

// export {
//   ReadonlyURLSearchParams ,
// } ;






;

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  ReactSetStateActionHelpers,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

;











const useShc = (

  function <E extends {} | null>(...a : (
    ArgsWithOptions<[E | (() => E ), never? ] , (
      & {
        //
        onPushEdit?: (...a : ArgsWithOptions<[newValue: E ], (
          & {}
        )> ) => void ,
      }
    )>
  ) )
  {
    ;
  }
) ;

class IntraSs<E, IntrS = any>
{
  constructor(readonly implUpd: (x: E) => IntrS , readonly implRestore: (x: IntrS) => E )
  {}
}

// function IntraSs<E> (this)

// type ShcBaseOp<E = any > = (
//   ReturnType<ShcBaseOpAcc<E> >
// ) ;

// interface ShcBaseOpAcc<E> {
//   (): (
//     & {
//       //
//       onPushState?: (...a : ArgsWithOptions<[newValue: E ], (
//         & (
//           | { asFromEdit  : true , asFromUndoOrRedo?: false, }
//           | { asFromEdit ?: false, asFromUndoOrRedo : true , }
//         )
//       )> ) => void ,
//     }
//   ) ;
// }













