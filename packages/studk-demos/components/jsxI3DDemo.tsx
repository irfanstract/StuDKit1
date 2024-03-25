
"use client" ;




import { util, } from "typexpe-commons/src/common_sv.mjs";





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
} from "../../studk-fwcore/src/LinearMap1.mjs";





import {
  I3D,
  I3DFullMeshPerspDisplay,
  I3DFullSceneFigureDisplay ,
} from "@/components/jsxI3DContours";

export {
  // I3DFullMeshPerspDisplay,
  // I3DFullSceneFigureDisplay ,
} ;




import * as React from "react" ;



import { IAngularSliderComp, } from "@/components/IAngularSlider";




function xTransformedly(...[tr, pts] : [LinTr3DMat, readonly (Point3D | null)[]])
{
  ;
  return (
    pts
    .map(pt => (pt && linTrTransformedPosition3DMat(tr, pt ) ) )
  ) ;
}

function xBall(...[
  pos,
  r = 0.35,
] : [
  pos: Point3D,
  r ?: number,
]){
  if (1) {
    return xEquilateralTriangle(pos, r, ) ;
  }
  return (
    xEquilateralPolygon(pos, r, { granularityInDegrees: 22.5, } )
  ) ;
} ;

function xEquilateralPolygon(...[
  pos,
  r,
  { granularityInDegrees, } ,
] : [
  pos: Point3D,
  r : number,
  options: { granularityInDegrees: number, } ,
]){
  return (
    new I3D.PolygonallyMarkedNodeUnitGraph((
      [...util.reiterable(function* () {
        ;
        for (const a of (
          util.reiterable(function* () {
            for (let i=0; i<360; i+=granularityInDegrees)
            { yield Angle.ByDegrees(i) ; }
          } )
        ) )
        {
          ;
          const offsettingTr = (
            multipliedMat4(I3D.describeXConYRotationFwd(a), (
              linTrFromTranslateCoord3Matr({ x: -r, y:  0   , z: 0, })
            ) )
          ) ;
          yield linTrTransformedPosition3DMat(offsettingTr, pos) ;
        }
      }) ]
    ))
  ) ;
} ;

function xEquilateralTriangle(...[
  pos,
  r = 0.35,
] : [
  pos: Point3D,
  r ?: number,
])
{
  return (
    xEquilateralPolygon(pos, r, { granularityInDegrees: 120, } )
  ) ;
} ;

function xPolyg(pts: Point3D[]) {
  return (
    new I3D.PolygonallyMarkedNodeUnitGraph((
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

export const I3DDemo = function I3DDemoComp() {
  const posAll = React.useMemo(() => (
    new I3D.IndividuallyMarkedNodeList([
      ...util.reiterable(function* () {
        const sp = (
          [...util.reiterable(function* () {
            let range = 6;
            for (let i = -range; i <= range; i += 2)
            { yield i ; }
          } ) ]
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
          yield xEquilateralPolygon({ x, z, y, }, 0.05, { granularityInDegrees: 90, } ) ;
        }
      } ) ,
      ...[
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
      ] ,
    ])
  ) , [] ) ;
  // const [tr, setPersp] = React.useState<LinTr3DMat>(identityMat4() ) ;
  const [ang, setPersp] = React.useState<Angle>(Angle.ByDegrees(0) ) ;
  const persp = React.useMemo(() => (
    I3D.describeXConZRotationFwd(ang)
  ) , [ang] ) ;
  return (
    <div>
      <div>
        <I3DFullSceneFigureDisplay content={posAll } perspective={persp} />
      </div>
      <details>
        <pre>
          {JSON.stringify({ persp, ang, posAll, }, null, 2) }
        </pre>
      </details>
      <p>
        <IAngularSliderComp
        value={ang}
        /* needa be `async` to avoid "violation, handler took t" issues */
        propagateEdit={(e) => setTimeout(() => setPersp(e.newValue) , 0 ) }
        />
      </p>
    </div>
  ) ;
} ;






