
import { util, } from "typexpe-commons/src/common_sv.mjs" ;






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

/** @typedef {Point<2> } Point2D */
/** @typedef {Point<3> } Point3D */
/** @typedef {Point<4> } Point4D */
/** @typedef {Point<5> } Point5D */




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
 * @type {(x: Point2D) => LinTr2D }
 */
export function matrixFromPoint2({ x, y, })
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
 * @type {(x0: LinTrTranslate<2>, x1: LinTr2D) => LinTr2D }
 */
export function matrixTranslated(m0, m1)
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
export function matrixScaled(m0, m1)
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







