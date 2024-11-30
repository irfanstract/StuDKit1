





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
  | { readonly [k in keyof O] ?: never ; }
) ;

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








