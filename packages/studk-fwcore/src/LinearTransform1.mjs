
import { util, } from "typexpe-commons/src/common_sv.mjs" ;





import {
  Angle,
  normaliseAngDeg ,
  cosineAt ,
  sineAt ,
} from "./Trigonometric1.mjs";

import {
  Matrix,
  identityMat4 ,
  identityMat3 ,
  matrixAssign ,
} from "./LinearMap1.mjs";

/**
 * @typedef {Matrix<{ 2: 3, 3: 4, 4: 5 }[dim] > } LinTrMat
 * @template {2 | 3 | 4} dim
 * 
 */
/** @typedef {LinTrMat<2> } LinTr2DMat */
/** @typedef {LinTrMat<3> } LinTr3DMat */ 








/**
 * @typedef {(LinTrScale<i, i> & LinTrTranslate<i> ) } LinTr
 * @template {LinTrSupportedDimensions } i
 */

/** @typedef {LinTr<2> } LinTr2D */
/** @typedef {LinTr<3> } LinTr3D */ 

/**
 * @typedef {(LinTrCoords<i> ) } Point
 * @template {LinTrSupportedDimensions } i
 */

/** {@link Point2D } @typedef {Point<2> } Point2D */ export const Point2D = {} ;
/** {@link Point3D } @typedef {Point<3> } Point3D */ export const Point3D = {} ;
/** {@link Point4D } @typedef {Point<4> } Point4D */ export const Point4D = {} ;
/** {@link Point5D } @typedef {Point<5> } Point5D */ export const Point5D = {} ;




/** @typedef {{ 2: "x" | "y", 3: "x" | "y" | "z", 4: "p" | "x" | "y" | "z", 5: "p" | "q" | "x" | "y" | "z" } } LinTrAxeLists */

/** @typedef {keyof LinTrAxeLists } LinTrSupportedDimensions */

/**
 * @typedef {LinTrAxeLists[i] } LinTrAxesAsPointKey
 * @template {LinTrSupportedDimensions } i
 */

/**
 * @typedef {`tr${Uppercase<LinTrAxesAsPointKey<i> > }` } LinTrAxesAsTrKey
 * @template {LinTrSupportedDimensions } i
 */

/**
 * @typedef {`s${Uppercase<LinTrAxesAsPointKey<i> > }${Uppercase<LinTrAxesAsPointKey<j> > }` } LinTrAxesAsScaleKey
 * @template {LinTrSupportedDimensions } i
 * @template {LinTrSupportedDimensions } j
 */

// /**
//  * @typedef {{ readonly [k in keyof Arr ] }} LinTrTranslate
//  * @template {number} n
//  */

/**
 * @typedef {{ readonly [k in LinTrAxesAsPointKey<i> ]: number ; }} LinTrCoords
 * @template {LinTrSupportedDimensions } i
 */

/** @typedef {LinTrCoords<2> } LinTrCoords2 */
/** @typedef {LinTrCoords<3> } LinTrCoords3 */
/** @typedef {LinTrCoords<4> } LinTrCoords4 */

/**
 * @typedef {{ readonly [k in LinTrAxesAsTrKey<i> ]: number ; }} LinTrTranslate
 * @template {LinTrSupportedDimensions } i
 */

/** @typedef {LinTrTranslate<2> } LinTrTranslate2 */
/** @typedef {LinTrTranslate<3> } LinTrTranslate3 */
/** @typedef {LinTrTranslate<4> } LinTrTranslate4 */

/**
 * @typedef {{ readonly [k in LinTrAxesAsScaleKey<i, j> ]: number ; }} LinTrScale
 * @template {LinTrSupportedDimensions } i
 * @template {LinTrSupportedDimensions } j
 */

/** @typedef {LinTrScale<2, 2> } LinTrScale2 */
/** @typedef {LinTrScale<3, 3> } LinTrScale3 */
/** @typedef {LinTrScale<4, 4> } LinTrScale4 */





/**
 * 
 * @type {(x: LinTrCoords2) => LinTr2D }
 */
export function linTrFromScaleCoord2({ x, y, })
{
  return {
    // DIAGONAL
    sXX: x ,
    sYY: y ,
    // ELSEWHERE ALONG THE DIAGONAL
    sYX: 0,
    sXY: 0,
    // TRANSLATION
    trX: 0,
    trY: 0 ,
  } ;
}

/**
 * 
 * @type {(x: LinTrCoords2) => LinTr2D }
 */
export function linTrFromTranslateCoord2({ x, y, })
{
  return matrixAsTr2D((
    linTrFromTranslateCoord2Matr({ x, y, })
  )) ;
}

/**
 * 
 * @type {(x: LinTrCoords2) => Matrix<3> }
 */
export function linTrFromTranslateCoord2Matr({ x, y, })
{
  return (
    matrixAssign(identityMat3() , {
      "m1,3": x ,
      "m2,3": y ,
    } )
  ) ;
}

/**
 * 
 * @type {(x: LinTrCoords3) => Matrix<4> }
 */
export function linTrFromTranslateCoord3Matr({ x, y, z, })
{
  return (
    matrixAssign(identityMat4() , {
      "m1,4": x ,
      "m2,4": y ,
      "m3,4": z ,
    } )
  ) ;
}

/**
 * 
 * copies only the translational part
 * 
 * @type {(x: Matrix<4>) => Matrix<4> }
 */
export function linTrFromTr3DTranslatePart(offsettingTr)
{
  return (
    linTrFromTranslateCoord3Matr({ x: offsettingTr["m1,4"], y:  offsettingTr["m2,4"]   , z: offsettingTr["m3,4"], })
  ) ;
}

export function identityTr2D()
{
  return linTrFromScaleCoord2({ x: 1, y: 1, }) ;
}

/**
 * 
 * @type {(x: Matrix<3> ) => LinTr2D }
 */
export function matrixAsTr2D(m1)
{
  ;
  return {
    // DIAGONAL
    sXX: m1["m1,1"] ,
    sYY: m1["m2,2"] ,
    // ELSEWHERE ALONG THE DIAGONAL
    sXY: m1["m1,2"] ,
    sYX: m1["m2,1"] ,
    // TRANSLATION
    trX: m1["m1,3"] ,
    trY: m1["m2,3"] ,
  } ;
}

/**
 * 
 * @type {(x: LinTr2D ) => Matrix<3> }
 */
export function matrixFromTr2D(m1)
{
  ;
  return {
    // DIAGONAL
    "m1,1": m1.sXX ,
    "m2,2": m1.sYY ,
    // ELSEWHERE ALONG THE DIAGONAL
    "m1,2": m1.sXY ,
    "m2,1": m1.sYX ,
    // TRANSLATION
    "m1,3": m1.trX ,
    "m2,3": m1.trY ,
    // BOTTOM ROW
    "m3,1": 0 ,
    "m3,2": 0 ,
    "m3,3": 1 ,
  } ;
}

/**
 * 
 * @type {(x0: LinTrTranslate<2>, x1: LinTr2D) => LinTr2D }
 */
export function linTrTranslated2D(m0, m1)
{
  ;
  return {
    // DIAGONAL
    sXX: m1.sXX ,
    sYY: m1.sYY ,
    // ELSEWHERE ALONG THE DIAGONAL
    sXY: m1.sXY ,
    sYX: m1.sYX ,
    // TRANSLATION
    trX: m0.trX ,
    trY: m0.trY ,
  } ;
}

/**
 * 
 * @type {(x0: LinTrScale2, x1: LinTr2D) => LinTr2D }
 */
export function linTrScaled2D(m0, m1)
{
  /**
   * for scale-element `s<L><L>` in resulting matrix
   * it's a result of sum of two products, overall there occurs its name exactly two times
   * 
   */
  return {
    // DIAGONAL
    sXX: (
      0
      + m0.sXX * m1.sXX
      + m0.sYX * m1.sXY
    ) ,
    sYY: (
      0
      + m0.sXY * m1.sYX
      + m0.sYY * m1.sYY
    ) ,
    // ELSEWHERE ALONG THE DIAGONAL
    sYX: (
      0
      + m0.sXX * m1.sYX
      + m0.sYX * m1.sYY
    ),
    sXY: (
      0
      + m0.sXY + m1.sXX
      + m0.sYY + m1.sXY
    ),
    // TRANSLATION
    trX: m0.sXX * m1.trX ,
    trY: m1.sYY * m1.trY ,
  } ;
}

/**
 * 
 * @param {[Angle] } args
 */
export function linTrRotation3DForXConYMat(...[ang] )
{
  return (
    matrixAssign(identityMat4(), {
      "m1,1": cosineAt(ang) ,
      "m2,2": cosineAt(ang),
      "m1,2": -sineAt(ang),
      "m2,1":  sineAt(ang),
    } )
  ) ;
}

/**
 * 
 * @param {[Angle] } args
 */
export function linTrRotation3DForXConZMat(...[ang] )
{
  return (
    matrixAssign(identityMat4(), {
      "m1,1": cosineAt(ang) ,
      "m3,3": cosineAt(ang),
      "m1,3": -sineAt(ang),
      "m3,1":  sineAt(ang),
    } )
  ) ;
}

// TODO
// /**
//  * 
//  * @param {[Angle, Angle] } args
//  */
// export function linTrRotation3DForCustomAxisMat(...[vAng, baseAng] )
// {
//   return (
//   ) ;
// }

/**
 * 
 * @type {(x0: LinTr2D, x1: LinTr2D) => LinTr2D }
 */
export function linTrConcat2D(m0, m1)
{
  const m3 = matrixFromTr2D(m0) ;
  const m2 = matrixFromTr2D(m1) ;
  const m4 = linTrConcat2DMat(m3, m2) ;
  return matrixAsTr2D(m4) ;
}

/**
 * 
 * @type {(...x: readonly Matrix<3>[] ) => Matrix<3> }
 */
export function linTrConcat2DMat(...m)
{
  return (
    m.reduce(multipliedMat3)
  ) ;
}

/**
 * 
 * @type {(x0: Matrix<4>, x1: Matrix<4> ) => Matrix<4> }
 */
export function linTrConcat3DMat(m3, m2)
{
  const m4 = multipliedMat4(m3, m2) ;
  return (m4) ;
}

import { multipliedMat3, multipliedMat4, } from "./LinearMap1.mjs" ;

/**
 * 
 * @type {(x0: LinTr2D, x1: Point2D) => Point2D }
 * 
 * @deprecated
 * 
 */
export function linTrTransformedPosition2D(m, r0 )
{
  ;
  const r1 = linTrFromTranslateCoord2(r0) ;
  const r2 = linTrConcat2D(m, r1 ) ;
  return { x: r2.trX, y: r2.trY } ;
}

/**
 * 
 * @type {(x0: Matrix<3>, x1: Point2D) => Point2D }
 */
export function linTrTransformedPosition2DMat(m, r0 )
{
  ;
  const r1 = linTrFromTranslateCoord2Matr(r0) ;
  const r2 = linTrConcat2DMat(m, r1 ) ;
  return { x: r2["m1,3"], y: r2["m2,3"] } ;
}

/**
 * 
 * @type {(x0: Matrix<4>, x1: Point3D) => Point3D }
 */
export function linTrTransformedPosition3DMat(m, r0 )
{
  ;
  const r1 = linTrFromTranslateCoord3Matr(r0) ;
  const r2 = linTrConcat3DMat(m, r1 ) ;
  return { x: r2["m1,4"], y: r2["m2,4"], z: r2["m3,4"], } ;
}







