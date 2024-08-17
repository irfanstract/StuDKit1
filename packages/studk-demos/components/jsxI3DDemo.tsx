
"use client" ;




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import type {
  AllOrNever1,
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
  LinTr3DMat,
  linTrFromTranslateCoord3Matr,
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





;

import {
  IndividuallyMarkedNodeList ,
  NodeUnitGraph ,
  PolygonallyMarkedNodeUnitGraph ,
} from "studk-i3d/src/xt/IndividuallyGMarkedNodeListEnug1.tsx" ;

import {
  CartesOrthoFaceAngle ,
  describeCartesOrthoRotationFwd ,
  describeXConYRotationFwd ,
  describeXConZRotationFwd ,
} from "studk-i3d/src/xt/MatrixBasedRotationsXConYZFcea.ts" ;


// import {
//   I3D,
//   I3DFullMeshPerspDisplay,
//   I3DFullSceneFigureDisplay ,
// } from "@/components/jsxI3DContours";

import {
  IndividuallyMarkedNodeListEnugFullMeshPerspG ,
  IndividuallyMarkedNodeListEnugFullSceneUnitAppletC ,
} from "studk-ui-encore/src/StI3dPresenters/IndividuallyGMarkedNodeListJsxEnug1.tsx" ;

export {
  // I3DFullMeshPerspDisplay,
  // I3DFullSceneFigureDisplay ,
} ;




import * as React from "react" ;



import {
  IAngularSliderComp,
} from "studk-ui-encore/src/StI3dPresenters/IAngularSlider4Mat.tsx";




;

import {
  xTransformedly ,
  xBall ,
  xEquilateralPolygon ,
  xEquilateralTriangle ,
  xI3dExtendedYardStarFieldGraphDemo ,
} from "studk-i3d/src/xt/I3dExtendedYardFieldDemos1.tsx" ;

import {
  I3DDemoC ,
  I3DDemo ,
} from "studk-ui-encore/src/StI3dPresenters/I3DDemoC.tsx" ;

export {
  I3DDemo ,
} ;






