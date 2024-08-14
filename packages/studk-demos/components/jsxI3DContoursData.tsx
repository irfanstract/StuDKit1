
"use client" ;




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
  memoize ,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






import {
  Angle ,
  cosineAt,
  normaliseAngDeg, 
  sineAt,
} from "studk-video-fwcore/src/Angular1.mjs" ;

import {
  //
  LinTr3D ,
  linTrConcat3DMat,
  linTrFromTranslateCoord3Matr,
  linTrRotation3DForXConYMat,
  linTrRotation3DForXConZMat,
  linTrTransformedPosition3DMat ,
  matrixAsTr2D ,
  Point3D ,
} from "studk-video-fwcore/src/LinearTransforms.mjs" ;

import {
  identityMat4,
  Matrix3 ,
  Matrix4, 
  matrixAssign,
  multipliedMat4 ,
} from "studk-fwcore/src/LinearMap1.mjs";





import {
  IndividuallyMarkedNodeList ,
  NodeUnitGraph ,
  PolygonallyMarkedNodeUnitGraph ,
} from "studk-i3d/src/xt/IndividuallyGMarkedNodeListEnug1.tsx" ;

/**
 * 
 */
export type SpclDisplayable
= IndividuallyMarkedNodeList
;

export {
  /** @deprecated this is a WIP/TODO */
  IndividuallyMarkedNodeList ,
  /** @deprecated this is a WIP/TODO */
  NodeUnitGraph ,
  /** @deprecated this is a WIP/TODO */
  PolygonallyMarkedNodeUnitGraph ,
} ;

;

export function describeXConYRotationFwd(...[ang]: [ang: Angle] )
{ return linTrRotation3DForXConYMat(ang) ;
}

export function describeXConZRotationFwd(...[ang]: [ang: Angle] )
{ return linTrRotation3DForXConZMat(ang) ;
}

export function describeCartesOrthoRotationFwd(...[mde, ang]: [CartesOrthoFaceAngle, Angle] ) : Matrix4
{
  switch (mde) {
    case 'xConY': return linTrRotation3DForXConYMat(ang) ; ;
    case 'xConZ': return linTrRotation3DForXConZMat(ang) ; ;
    case 'yConZUnisigned': return linTrConcat3DMat(linTrRotation3DForXConYMat(Angle.ByDegrees(-90 ) ), linTrRotation3DForXConZMat(ang) ) ; ;
    default: return util.throwTypeError(`unsupported ${JSON.stringify({ mde, }) }`) ;
  }
  return util.throwAssertionError() ;
}

export type CartesOrthoFaceAngle = keyof {
  // @ts-ignore
  xConY, xConZ, yConZUnisigned,
} ;
export const CartesOrthoFaceAngle = {} ;

;

















