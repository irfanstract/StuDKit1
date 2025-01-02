





import {
  assert ,
  once,
  parse,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
} from './util';






/**
 * either (a) all of them, or (b) neither
 * 
 * ```
 * interface CompilerOptions extends Extract<(
 *   & { strict?: boolean; }
 * 
 *   // ensure users each set both at once, or neiher.
 *   & AllOrNever<{ emit: boolean; outDir: Path; }>
 * 
 * ), any> {}
 * 
 * ```
 * 
 * essentially {@link ConformOrNever `ConformOrNever<(Required<O> )>` }
 * 
 */
type AllOrNeither<O extends object> = (

  ConformOrNever<(
    Required<O>
  ) >
) ;

;
/**
 * like {@link AllOrNeither}, but retains the Optionality(es)
 * 
 */
type ConformOrNever<O extends object> = (

  | O
  | { readonly [k in KnownPossibleKey<O>] ?: never ; }
) ;

{
  (x: {
    (e: EitherOneProp<{
      //
      readonly srcDirWhitelist: Required<string> ,
      readonly srcDirBlacklist: Required<string> ,
      readonly srcUrlWhitelist: Required<string | URL> ,
    }>): void
  }) => {
    x({ srcDirBlacklist: "???" , }) ;
    x({ srcDirWhitelist: "???" , }) ;
    x({ srcUrlWhitelist: "???" , }) ;
  } ;

  ;
  (x: {
    (e: (
      ConformOrNever<(
        EitherOneProp<{
          //
          readonly srcDirWhitelist: Required<string> ,
          readonly srcDirBlacklist: Required<string> ,
          readonly srcUrlWhitelist: Required<string | URL> ,
        }>
      )>
    )): void
  }) => {
    x({ srcDirBlacklist: "???" , }) ;
    x({ srcDirWhitelist: "???" , }) ;
    x({ srcUrlWhitelist: "???" , }) ;
    x({  }) ;
  } ;

}

/**
 * like {@link ConformOrNever}, but allows setting to `false`
 * 
 */
type ConformOrAssignFalse<O extends Partial<Record<keyof any, true | object>>, SO extends O | {} = O | {}> = (

  SO extends any ?
  (
    //
    & {
      readonly [k in KnownPossibleKey<O>] ?: (
        false |
        ([k] extends [keyof SO] ? SO[k] : never )
      ) ;
    }
    & {
      readonly [k in keyof SO]: unknown ;
    }
    // & SO
    & {
      readonly __src_xs?: KnownPossibleKey<O>,
      readonly __src_so?: SO,
    }
  )
  : never
) ;

{

  (x: ConformOrAssignFalse<(
    EitherOneProp<{
      readonly fromEsm: true,
    }>
  )>) => {
    if (x.fromEsm) {
      x.fromEsm ;
      return ;
    }
    x.fromEsm ;
  } ;

  (x: ConformOrAssignFalse<(
    EitherOneProp<{
      readonly fromEsm: true,
      readonly fromCjs: true,
    }>
  )>) => {

    if (x.fromEsm) {
      x.fromEsm ;
      x.fromCjs ;
      return ;
    }

    if (x.fromCjs) {
      x.fromEsm ;
      x.fromCjs ;
      return ;
    }

    x.fromEsm ;

  } ;

}

/**
 * either of the props (after `Required`ed)
 * 
 * ```
 * interface CompilerOptions extends Extract<(
 *   & { strict?: boolean; }
 * 
 *   // ensure users each set either one, but not both.
 *   & EitherOneProp<{ outFile: Path; outDir: Path; }>
 * 
 * ), any> {}
 * 
 * ```
 * 
 */
type EitherOneProp<O extends object, unused1 = any, unused2 = any, D3 = any, k extends keyof O = keyof O> = (

  Partial<O> &
  (
    //
    /** distributivity */ k extends any ?
    PickGivenAndDenyOthers<Required<O>, k>
    : never
  )
) ;

/**
 * {@link Pick pick select}
 * 
 */
type Pick<D extends object, K extends keyof D> = (
  globalThis.Pick<D, K>
) ;

/**
 * {@link Pick pick select}, and deny others
 * 
 */
type PickGivenAndDenyOthers<D extends object, K extends keyof D> = (
  // Partial<D> &
  Pick<D, K> & { readonly [sk in keyof D ] ?: ([sk] extends [K] ? unknown : never ) ; }
) ;


export type {
  /** alias of {@link AllOrNeither}. @deprecated */
  AllOrNeither as AllOrNever ,
  AllOrNeither ,
  ConformOrNever,
  ConformOrAssignFalse,
  /** alias of {@link EitherOneProp}. */
  EitherOneProp as EitherProp ,
  EitherOneProp ,
  Pick ,
  PickGivenAndDenyOthers ,
} ;







type PartializeOptionsConditionally<D extends object, E extends boolean> = (
  (
    // [E] extends [true] ? Partial<D> :
    // D
    [D, Partial<D> ][[E] extends [true] ? 1 : 0 ]
  )
) ;

type PartializeOptionsConditionallyAndRequifyIfFalse<D extends object, E extends boolean> = (
  (
    [E] extends [true    ] ?  Partial<D> :

    /** note: one may need to Conjunct with `Record<keyof D, unknown>`, to work-around Deference (of the reduction) */
    [E] extends [false   ] ? Required<D> :

    D
  )
) ;

/**
 * only make it Optional when `undefined` conforms;
 * leave it Required/Obligatory otherwise
 * 
 * NOTE: we disabled Distributivity since
 * such Distributivity broke usages of Instantiable-Type-Param(s) with this TC (the TC got widened into `{} | null | undefined` )
 * 
 */
type MayOptRecord<K extends keyof any, value> = (
  /** note: may need to Conjunct with `& Record<keyof D, unknown>`, to work-around Deference (of the reduction) */

  // /* embrace distributivity from alts */ value extends any ?
  (
    // { [k in K] ?: unknown; }
    // &
    PartializeOptionsConditionally<Record<K, value >, [value] extends [undefined] ? true : false >
  )
  // : never
) ;

/**
 * {@link MayOptRecord `MayOptRecord<keyof K, value>`}.
 * 
 */
type MayOptRecordRevalue<K extends object, value> = (
  MayOptRecord<keyof K, value>
) ;


export type {

  PartializeOptionsConditionally ,
  PartializeOptionsConditionallyAndRequifyIfFalse ,

  MayOptRecord ,
  MayOptRecordRevalue ,

} ;








;

type Extract<T, U> = (
  T extends U ? T : never
) ;

type ExtractSupertype<T, U> = (
  T extends any ?
  ([U] extends [T] ? T : never )
  : never
) ;

type Exclude<T, U> = (
  T extends U ? never : T
) ;

type ExcludeSupertype<T, U> = (
  T extends any ?
  ([U] extends [T] ? never : T )
  : never
) ;

{
  (x: Extract                 <{ c: 3, } | { d: 3, } | { e: 3, } | { readonly g?: 5, }, {}>) => {} ;
  (x: ExtractSupertype        <{ c: 3, } | { d: 3, } | { e: 3, } | { readonly g?: 5, }, {}>) => {} ;
  (x: Exclude                 <{ c: 3, } | { d: 3, } | { e: 3, } | { readonly g?: 5, }, {}>) => {} ;
  (x: ExcludeSupertype        <{ c: 3, } | { d: 3, } | { e: 3, } | { readonly g?: 5, }, {}>) => {} ;
}

type Parameters<T extends (...args: any) => any> = (
  [T] extends [(...args: infer P) => any ] ? P : never
) ;

/**
 * convert `A1 | A2 | ... | AN` into
 * `A1 & A2 & ... & AN`
 * 
 */
type AltsConjunction<T extends object> = (

  /**
   * `T extends any ?` distributes, so
   * eg `number | string` become `number[] | string[]` and not `(number | string)[]`.
   * atthesametime,
   * Function Param(s) have inverted variance, so
   * `((x: number ) => void ) | ((x: string ) => void )` becomes `((x: number & string ) => void )`
   * 
   */
  Parameters<(
    //
    T extends any ?
    ((x: T) => void )
    : never
  )>[0]
) ;

{
  type Dispatch1<T> = import("react").Dispatch<T> ;

  ((x:    AltsConjunction<{ length: number, } | { knownLength?: null, tail?: object, }>) => x ) ;

  ((x:    Partial<{ length: number, }> & Partial<{ length: null, tail?: object, }>) => x ) ;
  ((x:    Dispatch1<Partial<{ length: number, }>> | Dispatch1<Partial<{ length: null, tail?: object, }>>) => {
    x({ }) ;
    return x ;
  } ) ;
  ((x:    KnownPossibleKey<{ length: number, } | { length: null, tail?: object, }>) => x ) ;
  ((x:    KnownPossibleKey<Partial<{ length: number, }> | Partial<{ length: null, tail?: object, }>>) => x ) ;
  ((x:    Dispatch1<{ length: number, }> | Dispatch1<{ length: null, tail?: object, }>) => x ) ;
  ((x:    AltsConjunction<{ length: number, } | { length: null, tail?: object, }>) => x ) ;

}

{
  (x: AltsConjunction<NumberConstructor | DateConstructor | OscillatorNode>) => {} ;
}

/**
 * Known Possible Key Of {@link T}
 * 
 * ```
 * k: KnownPossibleKey<{ length: number, } | { length?: null, tail?: object, }> // "length" | "tail"
 * k:        UsableKey<{ length: number, } | { length?: null, tail?: object, }> // "length"
 * ```
 * 
 */
type KnownPossibleKey<T extends object> = (

  /** Distribute Over Alts */ T extends any ?
  (keyof T)
  : never

) ;

/**
 * Key Which Can Definitely Be Used For {@link T}
 * 
 * ```
 * k: KnownPossibleKey<{ length: number, } | { length?: null, tail?: object, }> // "length" | "tail"
 * k:        UsableKey<{ length: number, } | { length?: null, tail?: object, }> // "length"
 * ```
 * 
 */
type UsableKey<T extends object> = (

  keyof T
) ;

{
  ((x:      KnownPossibleKey<{ length: number, } | { length: null, tail?: object, }>) => x ) ;
  ((x:        UsableKey<{ length: number, } | { length: null, tail?: object, }>) => x ) ;
}

{
  ((x: KnownPossibleKey<NumberConstructor | DateConstructor | OscillatorNode>) => {} )("UTC") ;
}

type Entry<T extends object> = (

  [{ readonly [k in keyof T]: readonly [key: k, value: T[k]] }] extends [infer Dx] ?
  Dx[keyof Dx]
  : never
) ;

type CompileEntry<T extends readonly [key: keyof any, value: unknown]> = (

  { readonly [k in T[0] ]: Extract<T, readonly [k, value: unknown]>[1]; }
) ;

type ToRequiredKeyArray<T extends object, dmmy1 = never, dmmy2 = never, dmmy3 = never,  > = (

  /** Distribute Over The Alts */ T extends any ?
  ReadonlyArray<(
    keyof (
      CompileEntry<(
        Extract<(
          Entry<(
            ToRequirednessRecord<T, 1>
          )>
        ) , readonly [unknown, 1] >
      )>
    )
  ) >
  : never
) ;

type ToRequirednessRecord<T extends object, TT extends {} | null = 1, dmmy1 = never, dmmy2 = never, dmmy3 = never, FT extends {} | null = 0 > = (

  /** Distribute Over The Alts */ T extends any ?
  { [k in keyof T] -?: ([undefined] extends [T[k] ] ? FT : TT ) ; }
  : never
) ;

type ToAnyTyped<T extends object> = (

  /** Distribute Over The Alts */ T extends any ?
  { [k in keyof T]: any ; }
  : never
) ;

type ToReadonlyAnyTyped<T extends object> = (

  Readonly<ToAnyTyped<T> >
) ;

export {
  type Extract ,
  type ExtractSupertype ,
  type Exclude ,
  type ExcludeSupertype ,
  type Parameters ,
  type AltsConjunction  ,
  /** alias of {@link AltsConjunction}. @deprecated */
  type AltsConjunction as LxIntersection ,
  type UsableKey ,
  type KnownPossibleKey ,
  /** alias of {@link KnownPossibleKey}. @deprecated */
  type KnownPossibleKey as AllPossibleKeys ,
  /** @deprecated */ type Entry ,
  /** @deprecated */ type CompileEntry ,
  type ToRequiredKeyArray ,
  type ToRequirednessRecord ,
  type ToAnyTyped ,
  type ToReadonlyAnyTyped ,
} ;

;








