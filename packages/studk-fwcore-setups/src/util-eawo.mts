









// @ts-ignore
export * from "studk-ui-fwcore/src/util/EWithOpt.ts" ;



export type * from "studk-util/src/utilityTypeDefs/OITF.mjs" ;

import type {
  //
} from "studk-util/src/utilityTypeDefs/OITF.mjs" ;

;



// type RecordValueOut<opts extends object> = (
//   opts[keyof opts]
// ) ;

// type RecordValueAllcast<opts extends object> = (
//   EffectiveParameters<(
//     RecordValueOut<({
//       readonly [key in keyof opts] : (
//         (x: opts[key] ) => void
//       )
//     })>
//   )>[0]
// ) ;

// /**
//  * is {@link RecordValueOut}.
//  * 
//  * @deprecated this is {@link RecordValueOut}.
//  * 
//  */
// type RecordValue<opts extends object> = (
//   RecordValueOut<opts>
// ) ;

// type MapEntrySpec<k, v> = (
//   readonly [key: k, value: v ]
// ) ;

// /**
//  * {@link Object.entries}
//  * 
//  */
// type RecordEntry<opts extends object> = (
//   RecordValueOut<{ readonly [k in keyof opts] -?: MapEntrySpec<k, opts[k] > ; }>
// ) ;

// /**
//  * {@link Object.entries}
//  * 
//  */
// type ObjectEntry<T extends object> = (
//   RecordEntry<T>
// ) ;

// /**
//  * {@link Object.fromEntries}
//  * 
//  */
// type RecordFromEntry<opts extends MapEntrySpec<any, any> > = (
//   RecordValueAllcast<{
//     readonly [k0 in opts[0]] : {
//       readonly [k1 in k0] : (
//         (
//           /** the matching MapEntry (pair, both K-V) */
//           Extract<opts , MapEntrySpec<k1, any > >
//         )[1]
//       ) ;
//     } ;
//   }>
// ) ;

// /**
//  * {@link Object.fromEntries}
//  * 
//  */
// type ObjectFromEntry<opts extends MapEntrySpec<any, any> > = (
//   RecordFromEntry<opts>
// ) ;

// /**
//  * dictionary of property-descriptors leading to the type (assumed to be a record-type)
//  * 
//  */
// type PDE<opts extends object> = (
//   { readonly [k in keyof opts] : PropertyDescriptor ; }
// ) ;
// /**
//  * like {@link PDE}, except that all shall be present
//  * 
//  */
// type PDE_FULL<opts extends object> = (
//   Required<PDE<opts> >
// ) ;

// export type {
//   PDE,
//   PDE_FULL,
//   RecordValue,
//   RecordValueOut ,
//   RecordValueAllcast  ,
//   RecordEntry ,
//   ObjectEntry,
//   RecordFromEntry,
//   ObjectFromEntry,
//   MapEntrySpec,
// } ;




// /**
//  * restrict to, setting exactly one of its props.
//  * 
//  */
// type EitherPropertyOf<opts extends object> = (
//   Partial<opts>
//   &
//   RecordValueOut<{ readonly [k0 in keyof opts] -?: (
//     RequiredPartially<(
//       { readonly [k1 in keyof opts] ?: ([k1] extends [k0] ? unknown : never ) ; }
//     ) , k0 >
//   ) ; }>
// ) ;

// /**
//  * restrict to, setting all or neither, of its props.
//  * 
//  */
// type AllOrNever<opts extends object> = (
//   | Required<opts>
//   | { /* supposed to be *homomorphic* */ [k in keyof opts] ?: never ; }
// ) ;

// /**
//  * {@link Partial} for select props/names
//  * 
//  */
// type PartializedSelectively<opts extends object, omtK extends keyof opts> = (
//   // Partial<opts> & Required<Omit<opts, omtK> >

//   Partial<opts> & Pick<opts, ExcludeCase<keyof opts, omtK> >
// ) ;

// /**
//  * {@link Partial} outside select props/names
//  * 
//  * opposite of {@link RequiredPartially} WRT direction ;
//  * opposite of {@link PartializedSelectively} WRT the sign ;
//  * 
//  */
// type PartializedUnlessMentioned<opts extends object, yK extends keyof opts> = (
//   Partial<opts> & Pick<opts, yK >
// ) ;

// /**
//  * {@link Required} for select props/names
//  * 
//  * opposite of {@link PartializedUnlessMentioned} WRT direction
//  * 
//  */
// type RequiredPartially<opts extends object, yK extends keyof opts> = (
//   opts & Required<Pick<opts, yK> >
// ) ;

// /**
//  * refinement of {@link T1}
//  * 
//  */
// type Extend<T1 extends {}, T2 extends Partial<T1> > = (
//   T1 & T2
// ) ;

// type EA<T1 extends readonly unknown[] > = (
//   EffectiveParameters<[]>[0]
// ) ;

// // type ExtendAll<T1 extends readonly unknown[], T2 extends Partial<T1> > = (
// //   Extend<T1, T2>
// // ) ;

// /**
//  * {@link Extract}, with constraint `T2 extends T0`
//  * 
//  */
// type ExtractCase<T0, T2 extends T0> = (
//   Extract<T0, T2>
// ) ;

// /**
//  * {@link Exclude}, with constraint `T2 extends T0`
//  * 
//  */
// type ExcludeCase<T0, T2 extends T0> = (
//   Exclude<T0, T2>
// ) ;

// export type {
//   AllOrNever as AllOrNever1,
//   EitherPropertyOf ,
//   PartializedSelectively ,
//   /** @deprecated alias of {@link PartializedSelectively} */
//   PartializedSelectively as PartializedPartially,
//   PartializedUnlessMentioned ,
//   RequiredPartially,
// } ;

// export type {
//   Extend,
//   ExtractCase ,
//   ExcludeCase ,
// } ;




// /**
//  * bugfixed version of {@link Parameters}.
//  * 
//  */
// type EffectiveParameters<T extends object> = (
//   [T] extends [(...args: infer P) => any] ? P : never
// ) ;

// /**
//  * bugfixed version of {@link Parameters} and {@link ReturnType}.
//  * 
//  */
// type EffectiveArgsAndReturnSignature<T extends object> = (
//   [T] extends [(...args: infer P) => (infer R)] ? (readonly [args: P, returnT: R ]) : never
// ) ;

// type IIndexOfItemOf<T1 extends readonly unknown[] > = (
//   Extract<keyof T1, number | `${number}`>
// ) ;


// export type {
//   EffectiveParameters,
//   EffectiveArgsAndReturnSignature ,
// } ;





// void (() => {
//   { type Main = EitherPropertyOf<{ inclDeg: number ; inclRadians: number ; inclTan: number ; }> ; ({ inclDeg: 5, /* inclRadians: 5, */ } satisfies Main ) ; }
// }) ;







