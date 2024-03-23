
import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
} from "lodash-es" ;








/**
 * @typedef {{ readonly [k in `m${I},${J}` ] : number ; } } Mt
 * @template {number } I
 * @template {number } J
 */

/**
 * @typedef {Mt<I, I> } SquareMt
 * @template {number } I
 */

/**
 * @typedef {SquareMt<NUpTo<l> > } Matrix
 * @template {number & (3 | 1 | 2 | 4 | 5) } l
 */
/** {@link Matrix} @namespace */
export const Matrix = {} ;

/** @typedef { 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 } Base10Digit */

/**
 * @typedef { { 1: 1, 2: 1 | 2, 3: 1 | 2 | 3, 4: 1 | 2 | 3 | 4, 5: 1 | 2 | 3 | 4 | 5, }[i] } NUpTo
 * @template {1 | 2 | 3 | 4 | 5 } i
 */

/** @typedef {Matrix<2> } Matrix2 */
/** @typedef {Matrix<3> } Matrix3 */
/** @typedef {Matrix<4> } Matrix4 */
/** @typedef {Matrix<5> } Matrix5 */



/**
 * 
 * @type {(x1: Matrix<3>, x2: Matrix<3> ) => Matrix<3> }
 */
export function multipliedMat3(m1, m2)
{
  return multipliedMatVari(m1, m2, [1, 2, 3] ) ;
}

/**
 * 
 * @type {(x1: Matrix<4>, x2: Matrix<4> ) => Matrix<4> }
 */
export function multipliedMat4(m1, m2)
{
  return multipliedMatVari(m1, m2, [1, 2, 3, 4] ) ;
}

/**
 * 
 * @type {<const n extends 2 | 3 | 4 | 5>(...args: [x1: Matrix<n>, x2: Matrix<n>, ord: (NUpTo<n> )[] ] ) => Matrix<n> }
 */
export function multipliedMatVari(m1, m2, ord)
{
  // @ts-ignore
  return (
    new (/** */ class MatrImpl{ constructor() {
      ;

      /**
       * step 1: initialisation
       * 
       */
      for (const i of ord )
      {
        for (const j of ord )
        {
          ;
          // @ts-ignore
          this[`m${i},${j}`] ??= 0 ;
        }
      }

      /**
       * step 2: collection
       */
      for (const i of ord )
      {
        for (const j of ord )
        {
          ;
          /**
           * addition
           */
          for (const k of ord )
          {
            ;
            // @ts-ignore
            this[`m${i},${j}`] += (
              m1[`m${i},${k}`] * m2[`m${k},${j}`]
            ) ;
          }
        }
      }
    } } )()
  ) ;
}

export const matrixAssign = /** @satisfies {<T extends {}>(...args: [T, Partial<T>] ) => any } */ (lhs, rhs) => (
  Object.assign(new Object, lhs, rhs )
) ;

/** `Matrix2`.                         . {@link identityMatForLength} */ export const identityMat2 = () => identityMatForLength(/** @type {const } */ (2  )) ;
/** `Matrix3`. usable for `Transform2D`. {@link identityMatForLength} */ export const identityMat3 = () => identityMatForLength(/** @type {const } */ (3  )) ;
/** `Matrix4`. usable for `Transform3D`. {@link identityMatForLength} */ export const identityMat4 = () => identityMatForLength(/** @type {const } */ (4  )) ;
/** `Matrix5`. usable for `Transform4D`. {@link identityMatForLength} */ export const identityMat5 = () => identityMatForLength(/** @type {const } */ (5  )) ;

/**
 * identity matrix (ie on diagonal are all `1`s, and elsewhere `0`s).
 * 
 * __caveat__,
 * `Transform<n>D` expects `Matrix<n+1>`, watco
 * 
 * @type {<const n extends 2 | 3 | 4 | 5, const I extends [1, 2, 3?, 4?, 5?][number] >(...args: [length: n, ] ) => Matrix<n> }
 * 
 */
export function identityMatForLength(lengthArg)
{
  /**
   * all the `i`s ;
   * here would be all from `1` to (including) `n`
   */
  const ord = (
    /** most `range` libraries will exclude `end`, so `end` needa be adjusted for this */
    range(1, lengthArg + 0.5 )
  ) ;

  /* TODO adopt type-safe refactor of this */
  // @ts-ignore
  return (
    new (/** */ class MatrImpl { constructor() {
      for (const i of ord )
      {
        for (const j of ord )
        {
          ;
          // @ts-ignore
          this[`m${i},${j}`] ??= 0 ;
        }
      }
      for (const k of ord )
      {
        ;
        // @ts-ignore
        this[`m${k},${k}`] = 1 ;
      }
    } } )()
  ) ;
}











