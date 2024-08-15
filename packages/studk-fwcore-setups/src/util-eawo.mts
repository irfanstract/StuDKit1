









// @ts-ignore
export * from "studk-ui/src/fwCore/ewo.ts" ;



type AllOrNever<opts extends object> = (
  Required<opts> | { /* supposed to be *homomorphic* */ [k in keyof opts] ?: never ; }
) ;

type RecordValueOut<opts extends object> = (
  opts[keyof opts]
) ;

type RecordValueAllcast<opts extends object> = (
  EffectiveParameters<(
    RecordValueOut<({
      readonly [key in keyof opts] : (
        (x: opts[key] ) => void
      )
    })>
  )>[0]
) ;

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
type RecordFromEntry<opts extends MapEntrySpec<any, any> > = (
  RecordValueAllcast<{
    readonly [k0 in opts[0]] : {
      readonly [k1 in k0] : (
        (
          /** the matching MapEntry (pair, both K-V) */
          Extract<opts , MapEntrySpec<k1, any > >
        )[1]
      ) ;
    } ;
  }>
) ;

/**
 * {@link Object.fromEntries}
 * 
 */
type ObjectFromEntry<opts extends MapEntrySpec<any, any> > = (
  RecordFromEntry<opts>
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

/**
 * restrict to, setting exactly one of its props.
 * 
 */
type EitherPropertyOf<opts extends object> = (
  Partial<opts>
  &
  RecordValueOut<{ readonly [k0 in keyof opts] -?: (
    { readonly [k1 in keyof opts] ?: ([k1] extends [k0] ? unknown : never ) ; }
  ) ; }>
) ;

/**
 * {@link Partial} for select names
 * 
 */
type PartializedPartially<opts extends object, k1 extends keyof opts> = (
  Partial<opts> & Required<Omit<opts, k1> >
) ;

/**
 * {@link Required} for select names
 * 
 */
type RequiredPartially<opts extends object, k1 extends keyof opts> = (
  opts & Required<Pick<opts, k1> >
) ;

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



/**
 * bugfixed version of {@link Parameters}.
 * 
 */
type EffectiveParameters<T extends object> = (
  [T] extends [(...args: infer P) => any] ? P : never
) ;

type IIndexOfItemOf<T1 extends readonly unknown[] > = (
  Extract<keyof T1, number | `${number}`>
) ;


export type {
  AllOrNever as AllOrNever1,
  EitherPropertyOf ,
  PartializedPartially,
  RequiredPartially,
} ;
export type {
  Extend,
} ;

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
  MapEntrySpec,
} ;



export type {
  EffectiveParameters,
} ;




void (() => {
  { type Main = EitherPropertyOf<{ inclDeg: number ; inclRadians: number ; inclTan: number ; }> ; ({ inclDeg: 5, /* inclRadians: 5, */ } satisfies Main ) ; }
}) ;







