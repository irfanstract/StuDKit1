

import { util, } from "typexpe-commons/src/common_sv.mjs";







import {
  Point3D,
  Point2D,
  linTrTransformedPosition2D ,
  linTrTransformedPosition2DMat ,
  linTrTransformedPosition3DMat ,
  linTrFromTranslateCoord2Matr ,
  linTrFromTranslateCoord3Matr ,
} from "./LinearTransforms.mjs";

import {
  Matrix,
  identityMat3 ,
  identityMat4 ,
  matrixAssign ,
} from "studk-fwcore/src/LinearMap1.mjs";



// const In3DPerspectiveTransformProto = (
//   // // @ts-ignore
//   /** @type {new () => (Object & { applyTo: } ) } */
//   (Object)
// ) ;
/**
 * @typedef {{ applyToPoint3D(pt: Point3D ): Point3D }} In3DPerspectiveTransformOps
 */


/**
 * in-3D-space viewing ortho transform
 * 
 * linear
 * 
 * @implements In3DPerspectiveTransformOps
 * 
 */
export class In3DViewingOrthoTransform extends (
  // // @ts-ignore
  // /** @type {new () => import("./LinearTransforms.mjs").LinTr3D } */
  (Object)
)
{
  //

  /**
   * 
   * @protected
   * 
   * @param {In3DViewingOrthoTransform["projectingTransform"] } prArg
   */
  constructor (prArg)
  {
    super() ;

    /**
     * the `Transform3D`
     * to
     * transform arbitrary points each
     * to position they'd be relative to the viewing agent
     * 
     * @type {{ pjtConformantBrand ?: any , } & ReturnType<typeof import("./LinearTransforms.mjs").linTrFromTranslateCoord3Matr > }
     */
    this.projectingTransform = prArg ;
  }

  /**
   * 
   * @param {In3DViewingOrthoTransform["projectingTransform"] } prArg
   */
  static fromProjectingTransform(prArg) {
    return new In3DViewingOrthoTransform(prArg) ;
  }

  /** @type {In3DPerspectiveTransformOps["applyToPoint3D"] } */
  applyToPoint3D(pt) {
    return linTrTransformedPosition3DMat(this.projectingTransform, pt ) ;
  }

}


/**
 * 
 * in-3D-space viewing perspective transform
 * 
 * non-linear
 * 
 * 
 * @implements In3DPerspectiveTransformOps
 * 
 */
export class In3DPerspectiveTransform extends (
  Object
)
{
  /**
   * 
   * @protected
   * 
   * @param {In3DPerspectiveTransform["step1ProjectingTransform"] } prArg
   * @param {In3DPerspectiveTransform["step3PerspectifyingDividingFactor"] } perspCoefArg
   */
  constructor (prArg, perspCoefArg)
  {
    super() ;
    
    /**
     * the `Transform3D` to transform arbitrary points each to position they'd be relative to the viewing agent,
     * before applying the final perspectifying transform.
     * 
     * @type {In3DViewingOrthoTransform["projectingTransform"] }
     * 
     */
    this.step1ProjectingTransform = prArg ;

    /**
     * the factor to determine the divisor - defined to be `v * zPos` -
     * to divide the `x`-and-`y`s at this point with {@link step1ProjectingTransform } having already been applied -
     * to achieve the intended perspective effect
     * 
     * @type {number }
     * 
     */
    this.step3PerspectifyingDividingFactor = perspCoefArg ;
  }

  /**
   * 
   * @protected
   * 
   * @param {In3DPerspectiveTransform["step1ProjectingTransform"] } prArg
   * @param {In3DPerspectiveTransform["step3PerspectifyingDividingFactor"] } perspCoefArg
   */
  static ["of"](prArg, perspCoefArg) {
    return new In3DPerspectiveTransform(prArg, perspCoefArg) ;
  }
  /**
   * 
   * @protected
   * 
   * @param {In3DViewingOrthoTransform } prArg
   * @param {In3DPerspectiveTransform["step3PerspectifyingDividingFactor"] } perspCoefArg
   */
  static ["for"](prArg, perspCoefArg) {
    return In3DPerspectiveTransform.of(prArg.projectingTransform, perspCoefArg) ;
  }
  
  /** @type {In3DPerspectiveTransformOps["applyToPoint3D"] } */
  applyToPoint3D(pt0)
  {
    const pt1 = linTrTransformedPosition3DMat(this.step1ProjectingTransform, pt0 ) ;
    const pt2 = this.applyPerspOnlyToPoint3D(pt1) ;
    return pt2 ;
  }

  /**
   * 
   * 
   * @type {(x: Point3D) => Point3D }
   * 
   * @protected
   */
  applyPerspOnlyToPoint3D(pt1)
  {
    const dvf = Math.max(Number.EPSILON, pt1.z * this.step3PerspectifyingDividingFactor ) ;
    return linTrTransformedPosition3DMat((
      matrixAssign(identityMat4(), {
        "m1,1": 1 / dvf ,
        "m2,2": 1 / dvf ,
      } )
    ), pt1 ) ;
  }

}







