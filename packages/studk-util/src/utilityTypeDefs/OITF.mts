

;

// TODO
export type {
  //
} from "studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs" ;











type RecordValueOut<opts extends object> = (
  opts[keyof opts]
) ;

type RecordValueAllcast<opts extends object> = (
  EffectiveParameters<(
    (
      RVA.AsValueTransposed<(
        RecordEntry<opts>
      )>
    )[1]
  )>[0]
) ;

namespace RVA {
  ;

  // AsValueTransposed
  export type AsValueTransposed<Ent extends MapEntrySpec<any, any > > = (
    Ent extends MapEntrySpec<infer K, infer V> ?
    MapEntrySpec<K , (x: V ) => void>
    : never
  ) ;

  {
    interface T1 { x: number, y: string, }
    type RVT1 = [...(
      RVA.AsValueTransposed<(
        RecordEntry<T1>
      )>
    )] ;
    type TVT1 = RecordFromEntry<RVT1> ;

  }

}

/**
 * is {@link RecordValueOut}.
 * 
 * @deprecated this is {@link RecordValueOut}.
 * 
 */
type RecordValue<opts extends object> = (
  RecordValueOut<opts>
) ;

type MapEntrySpec<k, v> = (
  readonly [key: k, value: v ]
) ;

type MapEntrySelectByKey<SE extends MapEntrySpec<any, any>, IntendedK extends keyof any > = (
  /* Distributive Conditional Type */
  SE extends any ?
  (
    [MapEntrySpec<IntendedK, any>] extends [MapEntrySpec<SE[0] , any> ] ?
    SE
    : never
  )
  : never
) ;

{
  type T1 = MapEntrySelectByKey<[k: "3", v: "three"] | [k: "4", v: "four"] , "3" > ;
  type T2 = MapEntrySelectByKey<[k: string, v: "three"] | [k: "4", v: "four"] , "3" > ;
}

/**
 * {@link Object.entries}
 * 
 */
type RecordEntry<opts extends object> = (
  RecordValueOut<{ readonly [k in keyof opts] -?: MapEntrySpec<k, opts[k] > ; }>
) ;

/**
 * {@link Object.entries}
 * 
 */
type ObjectEntry<T extends object> = (
  RecordEntry<T>
) ;

/**
 * {@link Object.fromEntries}
 * 
 */
type RecordFromEntry<XKv extends MapEntrySpec<any, any> > = (
  { readonly [k in XKv[0]] : MapEntrySelectByKey<XKv, k>[1] }
) ;

{
  //
}

/**
 * {@link Object.fromEntries}
 * 
 */
type ObjectFromEntry<XKv extends MapEntrySpec<any, any> > = (
  RecordFromEntry<XKv>
) ;

type PickByEntryW<opts extends object, XKv extends MapEntrySpec<any, any> > = (
  RecordFromEntry<(
    Extract<(
      [...RecordEntry<opts>]
    ) , XKv>
  )>
) ;

/**
 * dictionary of property-descriptors leading to the type (assumed to be a record-type)
 * 
 */
type PDE<opts extends object> = (
  { readonly [k in keyof opts] : PropertyDescriptor ; }
) ;
/**
 * like {@link PDE}, except that all shall be present
 * 
 */
type PDE_FULL<opts extends object> = (
  Required<PDE<opts> >
) ;

export type {
  PDE,
  PDE_FULL,
  RecordValue,
  RecordValueOut ,
  RecordValueAllcast  ,
  RecordEntry ,
  ObjectEntry,
  RecordFromEntry,
  ObjectFromEntry,
  PickByEntryW,
  MapEntrySpec,
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

type EA<T1 extends readonly unknown[] > = (
  EffectiveParameters<[]>[0]
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
  EitherPropertyOf ,
  PartializedSelectively ,
  PartializedSelectivelyW ,
  /** @deprecated alias of {@link PartializedSelectively} */
  PartializedSelectively as PartializedPartially,
  /** @deprecated alias of {@link PartializedSelectivelyW} */
  PartializedSelectivelyW as PartializedPartiallyW,
  PartializedUnlessMentioned ,
  RequiredPartially,
  // PickCase ,
  // PickW ,
  // OmitCase ,
  // OmitW ,
} ;

export type {
  Extend,
  ExtractCase ,
  ExcludeCase ,
} ;




/**
 * bugfixed version of {@link Parameters}.
 * 
 */
type EffectiveParameters<T extends object> = (
  [T] extends [(...args: infer P) => any] ? P : never
) ;

/**
 * bugfixed version of {@link Parameters} and {@link ReturnType}.
 * 
 */
type EffectiveArgsAndReturnSignature<T extends object> = (
  [T] extends [(...args: infer P) => (infer R)] ? (readonly [args: P, returnT: R ]) : never
) ;

type IIndexOfItemOf<T1 extends readonly unknown[] > = (
  Extract<keyof T1, number | `${number}`>
) ;


export type {
  EffectiveParameters,
  EffectiveArgsAndReturnSignature ,
} ;





void (() => {
  { type Main = EitherPropertyOf<{ inclDeg: number ; inclRadians: number ; inclTan: number ; }> ; ({ inclDeg: 5, /* inclRadians: 5, */ } satisfies Main ) ; }
}) ;







