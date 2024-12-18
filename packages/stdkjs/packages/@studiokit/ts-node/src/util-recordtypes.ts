





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
  | { readonly [k in AllPossibleKeys<O>] ?: never ; }
) ;

/**
 * like {@link ConformOrNever}, but allows setting to `false`
 * 
 */
type ConformOrAssignFalse<O extends Record<keyof any, true | object>, SO extends O | {} = O | {}> = (

  SO extends any ?
  (
    //
    & { readonly [k in AllPossibleKeys<O>] ?: SO[k] | false ; }
    & SO
  )
  : never
) ;

{
  (x: ConformOrAssignFalse<{ fromEsm: true, }>) => {
    if (x.fromEsm) {
      x.fromEsm ;
      return ;
    }
    x.fromEsm ;
  } ;
  (x: ConformOrAssignFalse<{ fromEsm: true, fromCjs: true, }>) => {
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
 * either of the props
 * 
 * ```
 * interface CompilerOptions extends Extract<(
 *   & { strict?: boolean; }
 * 
 *   // ensure users each set either one, but not both.
 *   & AllOrNever<{ outFile: Path; outDir: Path; }>
 * 
 * ), any> {}
 * 
 * ```
 * 
 */
type EitherOneProp<O extends object, unused1 = any, unused2 = any, D3 = any, ks extends keyof O = keyof O> = (

  Partial<O> &
  (
    //
    /** distributivity */ ks extends any ?
    PickGivenAndDenyOthers<Required<O>, ks>
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
type LxIntersection<T extends object> = (

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
  (x: LxIntersection<NumberConstructor | DateConstructor | OscillatorNode>) => {} ;
}

type AllPossibleKeys<T extends object> = (

  keyof LxIntersection<T>
) ;

{
  ((x: AllPossibleKeys<NumberConstructor | DateConstructor | OscillatorNode>) => {} )("UTC") ;
}

export {
  type Extract ,
  type ExtractSupertype ,
  type Exclude ,
  type ExcludeSupertype ,
  type Parameters ,
  type LxIntersection ,
  type AllPossibleKeys ,
} ;

;








