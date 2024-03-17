
import { util, } from "typexpe-commons/src/common_sv.mjs" ;









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
 * @type {<const n extends 2 | 3 | 4 | 5>(...args: [x1: Matrix<n>, x2: Matrix<n>, ord: (NUpTo<n> )[] ] ) => Matrix<4> }
 */
export function multipliedMatVari(m1, m2, ord)
{
  // @ts-ignore
  return (
    new (/** */ class MatrImpl{ constructor() {
      for (const i of ord )
      {
        for (const j of ord )
        {
          ;
          // @ts-ignore
          this[`m${i},${j}`] ??= 0 ;
          for (const k of ord )
          {
            ;
            // @ts-ignore
            this[`m${i},${j}`] += (
              m1[`m${k},${j}`] * m2[`m${i},${k}`]
            ) ;
          }
        }
      }
    } } )()
  ) ;
}











