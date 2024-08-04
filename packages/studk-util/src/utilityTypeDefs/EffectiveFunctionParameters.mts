






;






/**
 * bugfixed version of {@link Parameters}.
 * 
 */
type EffectiveParameters<T extends object> = (
  [T] extends [(...args: infer P) => any] ? P : never
) ;

namespace EffectiveParameters { ; }

/**
 * bugfixed version of {@link Parameters} and {@link ReturnType}.
 * 
 */
type EffectiveArgsAndReturnSignature<T extends object> = (
  [T] extends [(...args: infer P) => (infer R)] ? (readonly [args: P, returnT: R ]) : never
) ;

namespace EffectiveArgsAndReturnSignature { ; }

/**
 * WIP
 * 
 * @deprecated this is a WIP.
 * 
 */
type IIndexOfItemOf<T1 extends readonly unknown[] > = (
  Extract<keyof T1, number | `${number}`>
) ;


export {
  EffectiveParameters,
  EffectiveArgsAndReturnSignature ,
} ;

export type {
  /** @deprecated this `export` is a WIP. */
  IIndexOfItemOf ,
} ;










