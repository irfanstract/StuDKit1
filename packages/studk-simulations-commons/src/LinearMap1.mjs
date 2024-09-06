
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
  return new MUL3CON(m1, m2,) ;
}

/**
 * 
 * @type {(x1: Matrix<4>, x2: Matrix<4> ) => Matrix<4> }
 */
export function multipliedMat4(m1, m2)
{
  return new MUL4CON(m1, m2,) ;
}

/**
 * 
 * returns a constructor to compute multiplied matrix
 * 
 * be sure to check the CSP settings!
 * 
 * @type {<const n extends 2 | 3 | 4 | 5>(...args: [ord: (NUpTo<n> )[] ] ) => (new (...args: [x1: Matrix<n>, x2: Matrix<n>, ] ) => Matrix<n> ) }
 * 
 */
export function getMultipliedMatrCtor(ord)
{
  // switch (lengthArg) {
  //   case 3 : return IDENTITYMATRIX3 ;
  //   case 4 : return IDENTITYMATRIX4 ;
  //   default: return identityMatForLengthUncached(lengthArg) ;
  // }
  return getMultipliedMatrCtorUncached(ord) ;
}

/* for performance reasons we're forced to cache things */

const MUL3CON = getMultipliedMatrCtorUncached(/** @type {const} */ ([1, 2, 3,  ])) ;
const MUL4CON = getMultipliedMatrCtorUncached(/** @type {const} */ ([1, 2, 3, 4])) ;

/**
 * 
 * returns a constructor to compute multiplied matrix
 * 
 * be sure to check the CSP settings!
 * 
 * @type {<const t extends NUpTo<n>, const n extends 2 | 3 | 4 | 5 = (4 extends t ? 4 : 3 extends t ? 3 : never ) >(...args: [ord: t[] ] ) => (new (...args: [x1: Matrix<n>, x2: Matrix<n>, ] ) => Matrix<n> ) }
 * 
 */
export function getMultipliedMatrCtorUncached(ord)
{
  ;
  const C = new Function("m1", "m2", (
    util.stringLinesConcat(function* () {
      yield* [] ;
      
      /**
       * step 1: initialisation
       * 
       */
      yield `/* initialise with zeroes */` ;
      for (const i of ord )
      {
        for (const j of ord )
        {
          ;
          yield `/** @type {number} */` ;
          yield `this[${JSON.stringify(`m${i},${j}`) }] = 0 ;` ;
        }
      }
      
      yield `  ` ;

      /**
       * step 2: collection
       */
      yield `/* do the main thing */` ;
      for (const i of ord )
      {
        for (const j of ord )
        {
          ;
          /**
           * addition
           */
          yield `this[${JSON.stringify(`m${i},${j}`) }] += (` ;
          yield `  0` ;
          for (const k of ord )
          {
            ;
            yield `  +` ;
            yield `  m1[${JSON.stringify(`m${i},${k}`) }] * m2[${JSON.stringify(`m${k},${j}`) }]` ;
          }
          yield `) ;` ;
        }
      }
    })
  )) ;
  // @ts-ignore
  return C ;
}

/**
 * 
 * @type {<const n extends 2 | 3 | 4 | 5>(...args: [x1: Matrix<n>, x2: Matrix<n>, ord: (NUpTo<n> )[] ] ) => Matrix<n> }
 */
export function multipliedMatVari(m1, m2, ord)
{
  // @ts-ignore
  return (
    new (
      getMultipliedMatrCtor(ord)
    )(m1, m2)
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
  switch (lengthArg) {
    case 3 : return IDENTITYMATRIX3 ;
    case 4 : return IDENTITYMATRIX4 ;
    default: return identityMatForLengthUncached(lengthArg) ;
  }
}

/*
 * with assumption of immutability
 * we cache matrices.
 */

const IDENTITYMATRIX3 = identityMatForLengthUncached(3) ;
const IDENTITYMATRIX4 = identityMatForLengthUncached(4) ;

/**
 * identity matrix (ie on diagonal are all `1`s, and elsewhere `0`s).
 * 
 * __caveat__,
 * `Transform<n>D` expects `Matrix<n+1>`, watco
 * 
 * @type {<const n extends 2 | 3 | 4 | 5, const I extends [1, 2, 3?, 4?, 5?][number] >(...args: [length: n, ] ) => Matrix<n> }
 * 
 */
export function identityMatForLengthUncached(lengthArg)
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











