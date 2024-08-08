






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



;



function xTransformedly(...[tr, pts] : [LinTr3DMat, readonly (Point3D | null)[]])
{
  ;
  return (
    pts
    .map(pt => (pt && linTrTransformedPosition3DMat(tr, pt ) ) )
  ) ;
}

import { xBall1, } from "studk-i3d/src/xt/SphericalMeshSpm.ts" ;

function xBall(...[
  pos,
  r = 0.35,
  { grnInDeg = 22.5, } = {} ,
] : (
  ArgsWithOptions<[
    ...[
      pos: Point3D,
      r ?: number,
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
  if (0) {
    return (
      xBall1(pos, r, {
        grnInDeg: 90,
      } )
    ) ;
  }

  if (0) {
    return (
      xBall1(pos, r, { grnInDeg, } )
    ) ;
  }
  return (
    PolygonallyMarkedPointWithUnitGraph.by(pos, (
      PolygonallyMarkedNodeUnitGraph.byContoursAndFill([
        ...(
          xEquilateralPolygon(pos, "xConY", r, { granularityInDegrees: grnInDeg, } )
          .getContours()
        ) ,
        ...(
          xEquilateralPolygon(pos, "yConZUnisigned", r, { granularityInDegrees: grnInDeg, } )
          .getContours()
        ) ,
        ...(
          xEquilateralPolygon(pos, "xConZ", r, { granularityInDegrees: grnInDeg, } )
          .getContours()
        ) ,
      ])
    ))
  ) ;
} ;

function xEquilateralPolygon(...[
  nodeAnchPos,
  md = "xConY" ,
  r,
  { granularityInDegrees, } ,
] : (
  ArgsWithOptions<[
    pos: Point3D,
    ...[
      md?: CartesOrthoFaceAngle ,
    ] ,
    r : number,
  ], (
    & {
      /**
       * the per-sector (uniform) width, in degrees
       */
      granularityInDegrees: number,
    }
  ) >
)){
  return (
    PolygonallyMarkedPointWithUnitGraph.by(nodeAnchPos, (
      PolygonallyMarkedNodeUnitGraph.byPointsAndFill((
        [...util.reiterable(function* () {
          ;
          for (const a of (
            util.range(0, 360 + (granularityInDegrees / 8 ), granularityInDegrees )
            .map(v => Angle.ByDegrees(v) )
          ) )
          {
            ;
            yield (() => {
              const mvVec1 = (
                linTrTransformedPosition3DMat(describeCartesOrthoRotationFwd(md, a), (
                  ({ x: -r, y:  0   , z: 0, })
                ) )
              ) ;
              return mvVec1 ;
            })() ;
          }
        }) ]
      ))
    ))
  ) ;
} ;

function xEquilateralTriangle(...[
  pos,
  md,
  r = 0.35,
] : [
  pos: Point3D,
  md: CartesOrthoFaceAngle ,
  r ?: number,
])
{
  return (
    xEquilateralPolygon(pos, md, r, { granularityInDegrees: 120, } )
  ) ;
} ;

function xPolyg(pts: Point3D[]) {
  return (
    PolygonallyMarkedNodeUnitGraph.byPointsAndFill((
      [...util.reiterable(function* (): Generator<Point3D, void> {
        for (let i=1; i<pts.length; i += 1 )
        {
          yield pts[(i   ) % pts.length]! ;
          yield pts[(i+1 ) % pts.length]! ;
          yield pts[0]! ;
        }
        ;
      } )]
    ))
  ) ;
} ;

const xI3dExtendedYardStarFieldGraphDemo = (
  function ()
  {
    return (
      IndividuallyMarkedNodeList.byEachOptionalEnugBasedLayerGraph([
        ...util.reiterable(function* () {
          const sp = (
            ((...[{ range, spacing = 2 , }] : ArgsWithOptions<[], { range: number, spacing?: number, }> ) => (
              util.reiterated(function* () {
                for (let i = -(
                  util.Immutable.Range(0, Math.abs(range) + 0.05, Math.abs(spacing) )
                  .max()
                  ??
                  0
                ); i <= range; i += spacing)
                { yield i ; }
              } )
            ))({ range: 7.5, })
          ) ;
          const pts = (
            [...util.reiterable(function* () {
              ;
              for (const x of sp ) {
                for (const z of sp ) {
                  for (const y of sp ) {
                    yield { x, y, z, } ;
                  }
                }
              }
            } ) ]
          ) ;
          for (const { x, z, y, } of pts )
          {
            yield xBall({ x, z, y, }, 0.05, { grnInDeg: 52, } ) ;
          }
        } ) ,
        ...(0 ? [] : [
          xPolyg([
            { x: -3, z:  3, y: -0.5, } ,
            { x:  3, z:  3, y: -0.5, } ,
            { x:  3, z: -3, y: -0.5, } ,
            { x: -3, z: -3, y: -0.5, } ,
          ])
          ,
          //
          xBall({ x:  0    , z:  3   , y:  0   , }) ,
          xBall({ x: -1    , z:  2.5 , y:  0.5 , }) ,
          // xBall({ x: -1    , z:  1   , y:  0   , }) ,
          // xBall({ x: -0.3  , z:  1   , y: -0.5 , }) ,
          //
          xBall({ x:  2    , z:  2.5 , y:  0   , }) ,
          //
          // xBall({ x:  1.5  , z: -2.5 , y:  0   , }) ,
          // xBall({ x: -0.5  , z: -1   , y: -0.6 , }) ,
          //
          xBall({ x: -4    , z: -0.1 , y: -0.1 , }) ,
          xBall({ x:  3    , z: -0.1 , y: -0.1 , }) ,
          //
        ]) ,
      ])
    ) ;
  }
) ;



export {
  /** @deprecated */
  xPolyg,
  xEquilateralPolygon,
  // /** @deprecated */
  xEquilateralTriangle,
  xBall ,
  xI3dExtendedYardStarFieldGraphDemo ,
} ;

export {
  /** @deprecated */
  xTransformedly ,
} ;





