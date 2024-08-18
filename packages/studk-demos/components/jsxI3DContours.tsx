
"use client" ;




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  once ,
} from "lodash-es" ;





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





;






import * as React from "react" ;

import {
  describeComponent,
} from 'studk-ui-componentdefinition/src/dec.tsx'; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;







;

import {
  IndividuallyMarkedNodeList ,
  NodeUnitGraph ,
  PolygonallyMarkedNodeUnitGraph ,
} from "studk-i3d/src/xt/IndividuallyGMarkedNodeListEnug1.tsx" ;

import * as I3D from "./jsxI3DContoursData.tsx" ;

// TODO get rid of these
export { I3D , } ;





import {
  IndividuallyMarkedNodeListEnugFullMeshPerspG ,
  IndividuallyMarkedNodeListEnugFullSceneUnitAppletC ,
} from "studk-ui-encore/src/StI3dPresenters/IndividuallyGMarkedNodeListJsxEnug1.tsx" ;

export const I3DFullMeshPerspDisplay = (
  IndividuallyMarkedNodeListEnugFullMeshPerspG
) ;

export const I3DFullSceneFigureDisplay = (
  IndividuallyMarkedNodeListEnugFullSceneUnitAppletC
) ;





















