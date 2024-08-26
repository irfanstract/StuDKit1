






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
  toCyclicSliding ,
  toAdjacentPairs ,
} from "studk-i3d/src/xt/TCS.ts" ;





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
  linTrUniformZeroPtCenteredScaling3DMat,
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
  PmngPerContourDesc,
  PolygonallyMarkedNodeUnitGraph,
  PolygonallyMarkedPointWithUnitGraph ,
} from "studk-i3d/src/xt/IndividuallyGMarkedNodeListEnug1.tsx" ;

import {
  CartesOrthoFaceAngle ,
  describeCartesOrthoRotationFwd ,
  describeXConYRotationFwd ,
  describeXConZRotationFwd ,
} from "studk-i3d/src/xt/MatrixBasedRotationsXConYZFcea.ts" ;


;




;

export function xBall1(...args : (
  ArgsWithOptions<[
    ...[
      pos: Point3D,
      r : number,
    ] ,
  ], (
    & {
      /**
       * the granularity, in degrees, to use when plotting the curves as polygons
       */
      grnInDeg ?: number ,
    }
  )>
)){
  const [
    pos,
    r,
    {
      grnInDeg = (
        // 22.5
        45
      ),
    } = {} ,
  ] = args ;
  return (
    PolygonallyMarkedPointWithUnitGraph.by(pos, (
      PolygonallyMarkedNodeUnitGraph.byContoursAndFill((
        (function (...[{ er = 0.00001, } = {}] : (
          ArgsWithOptions<[], {
            er ?: number ,
          }>
        )) {
          const hAngList = (
            util.range(0, 360 + er, grnInDeg)
            .map(aDeg => Angle.ByDegrees(aDeg) )
          );
          const vAngList = (
            util.range(-90, 90 + er, grnInDeg)
            .map(aDeg => Angle.ByDegrees(aDeg) )
          );
          return (
            util.reiterated(function* () {
              for (const [va0, va1] of toAdjacentPairs(vAngList,) )
              {
                for (const [ha0, ha1] of toCyclicSliding(hAngList, 2) ) {
                  const pts = (
                    ([
                      { v: va0, h: ha0 },
                      { v: va0, h: ha1 },
                      { v: va1, h: ha1 },
                      { v: va1, h: ha0 },
                    ] satisfies { v: Angle, h: Angle, }[] )
                    .map(({ h, v, }) => ({
                      y: sineAt(v) ,
                      x: cosineAt(v) * (cosineAt(h)) ,
                      z: cosineAt(v) * (  sineAt(h)) ,
                    } satisfies Point3D) )
                  ) ;
                  // TODO
                  yield (
                    PmngPerContourDesc.byPointArray(pts)
                  ) ;
                }
              }
            })
          ) ;
        })()
      ))
      .toLinearTransformed((
        linTrUniformZeroPtCenteredScaling3DMat(r)
      ))
    ))
  ) ;
} ;



;








