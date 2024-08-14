










;

/**
 * {@link Extract}, with constraint `T2 extends T0`
 * 
 */
export type ExtractCase<T0, T2 extends T0> = (
  Extract<T0, T2>
) ;

/**
 * {@link Exclude}, with constraint `T2 extends T0`
 * 
 */
export type ExcludeCase<T0, T2 extends T0> = (
  Exclude<T0, T2>
) ;

;



/**
 * constrained {@link Pick}.
 * one of the four series of `PickW` and `OmitW`.
 */
export type PickCase<O, P extends keyof O> = (
  Pick<O, P>
) ;

/**
 * relaxed {@link Pick}.
 * one of the four series of `PickW` and `OmitW`.
 */
export type PickW<O, P extends keyof any> = (
  Pick<O, P & (keyof O)>
) ;

/**
 * constrained {@link Omit}.
 * one of the four series of `PickW` and `OmitW`.
 */
export type OmitCase<O, P extends keyof O> = (
  Omit<O, P>
) ;

/**
 * relaxed {@link Omit}.
 * one of the four series of `PickW` and `OmitW`.
 */
export type OmitW<O, P extends keyof any> = (
  Omit<O, P>
) ;





// export type {
//   //
//   PickCase ,
//   PickW ,
//   OmitCase ,
//   OmitW ,
// }







