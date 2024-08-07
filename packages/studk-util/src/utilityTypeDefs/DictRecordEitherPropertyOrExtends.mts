


;






type RecordValueOut<opts extends object> = (
  opts[keyof opts]
) ;

export type {
  RecordValueOut as RecordValueOut1 ,
} ;






/**
 * restrict to, setting exactly one of its props.
 * 
 */
type EitherPropertyOf<opts extends object> = (
  Partial<opts>
  &
  RecordValueOut<{ readonly [k0 in keyof opts] -?: (
    RequiredPartially<(
      { readonly [k1 in keyof opts] ?: ([k1] extends [k0] ? unknown : never ) ; }
    ) , k0 >
  ) ; }>
) ;

/**
 * restrict to, setting all or neither, of its props.
 * 
 */
type AllOrNever<opts extends object> = (
  | Required<opts>
  | { /* supposed to be *homomorphic* */ [k in keyof opts] ?: never ; }
) ;

/**
 * {@link Partial} for select props/names
 * 
 */
type PartializedSelectively<opts extends object, omtK extends keyof opts> = (
  // Partial<opts> & Required<Omit<opts, omtK> >

  Partial<opts> & Pick<opts, ExcludeCase<keyof opts, omtK> >
) ;

/**
 * - {@link Partial} for select props/names
 * 
 */
type PartializedSelectivelyW<opts extends object, omtK extends keyof any> = (
  PartializedSelectively<opts, omtK & (keyof opts)>
) ;

/**
 * {@link Partial} outside select props/names
 * 
 * opposite of {@link RequiredPartially} WRT direction ;
 * opposite of {@link PartializedSelectively} WRT the sign ;
 * 
 */
type PartializedUnlessMentioned<opts extends object, yK extends keyof opts> = (
  Partial<opts> & Pick<opts, yK >
) ;

/**
 * {@link Required} for select props/names
 * 
 * opposite of {@link PartializedUnlessMentioned} WRT direction
 * 
 */
type RequiredPartially<opts extends object, yK extends keyof opts> = (
  opts & Required<Pick<opts, yK> >
) ;

import type {
  //
  PickCase ,
  PickW ,
  OmitCase ,
  OmitW ,
} from "studk-util/src/utilityTypeDefs/DictRecordKeyedPick.mts" ;

/**
 * refinement of {@link T1}
 * 
 */
type Extend<T1 extends {}, T2 extends Partial<T1> > = (
  T1 & T2
) ;

// type ExtendAll<T1 extends readonly unknown[], T2 extends Partial<T1> > = (
//   Extend<T1, T2>
// ) ;

import type {
  //
  ExtractCase ,
  ExcludeCase ,
} from "studk-util/src/utilityTypeDefs/SpecialiseW.mts" ;

export type {
  AllOrNever as AllOrNever1,
  /** @deprecated this (re)export is a WIP (even though {@link AllOrNever} itself is final ) */
  AllOrNever ,
  EitherPropertyOf ,
  PartializedSelectively ,
  PartializedSelectivelyW ,
  /** @deprecated alias of {@link PartializedSelectively} */
  PartializedSelectively as PartializedPartially,
  /** @deprecated alias of {@link PartializedSelectivelyW} */
  PartializedSelectivelyW as PartializedPartiallyW,
  PartializedUnlessMentioned ,
  RequiredPartially,
  PickCase ,
  PickW ,
  OmitCase ,
  OmitW ,
} ;

export type {
  Extend,
} ;




;




void (() => {
  { type Main = EitherPropertyOf<{ inclDeg: number ; inclRadians: number ; inclTan: number ; }> ; ({ inclDeg: 5, /* inclRadians: 5, */ } satisfies Main ) ; }
}) ;







