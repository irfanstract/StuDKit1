
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





namespace I3D
{
  ;

  /**
   * 
   * @deprecated
   */
  // export interface IDrawable { posAll: { points: Point3D[] }[], }
  export type IDrawable = Required<React.ComponentProps<typeof I3DDemoCore> >["content"] ;

  export class IndividuallyMarkedNodeList {
    constructor(public posAll: I3D.NodeUnitGraph[] )
    {}
  }

  export abstract class NodeUnitGraph
  {}

  export class PolygonallyMarkedNodeUnitGraph
  extends NodeUnitGraph
  {
    constructor(public readonly points: Point3D[] ,)
    { super() ; }
  }

  ;
}





import * as React from "react" ;



import { IAngularSliderComp, } from "@/components/IAngularSlider";



// import dynamicComponent from "next/dynamic";

// import Link from "next/link";



// import mainOtfUrl from "otf-export/otfDemo.mjs" ;

// console.log({ mainOtfUrl, }) ;

function xBall(pos: Point3D) {
  return (
    new I3D.PolygonallyMarkedNodeUnitGraph((
      [
        // pos ,
        linTrTransformedPosition3DMat(linTrFromTranslateCoord3Matr({ x: -0.35, y:  0   , z: 0, })  , pos) ,
        linTrTransformedPosition3DMat(linTrFromTranslateCoord3Matr({ x:  0.25, y:  0.35, z: 0, })  , pos) ,
        linTrTransformedPosition3DMat(linTrFromTranslateCoord3Matr({ x:  0.25, y: -0.35, z: 0, })  , pos) ,
      ]
    ))
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
  const posAll = React.useMemo(() => ([
    xPolyg([
      { x: -3, z:  3, y: -0.5, } ,
      { x:  3, z:  3, y: -0.5, } ,
      { x:  3, z: -3, y: -0.5, } ,
      { x: -3, z: -3, y: -0.5, } ,
    ])
    ,
    //
    xBall({ x:  0    , y:  0   , z:  3   , }) ,
    xBall({ x: -1    , y:  0.5 , z:  2.5 , }) ,
    xBall({ x: -1    , y:  0   , z:  1   , }) ,
    xBall({ x: -0.3  , y: -0.5 , z:  1   , }) ,
    //
    xBall({ x:  2    , y:  0   , z:  2.5 , }) ,
    //
    xBall({ x:  1.5  , y:  0   , z: -2.5 , }) ,
    xBall({ x: -0.5  , y: -0.6 , z: -1   , }) ,
    //
    xBall({ x: -4    , y: -0.1 , z: -0.1 , }) ,
    xBall({ x:  3    , y: -0.1 , z: -0.1 , }) ,
    //
  ] ) , [] ) ;
  // const [tr, setPersp] = React.useState<Matrix4>(identityMat4() ) ;
  const [ang, setPersp] = React.useState<Angle>(Angle.ByDegrees(0) ) ;
  const persp = React.useMemo(() => (
    matrixAssign(identityMat4(), {
      "m1,1": cosineAt(ang) ,
      "m3,3": cosineAt(ang),
      "m1,3": -sineAt(ang),
      "m3,1":  sineAt(ang),
    } )
  ) , [ang] ) ;
  return (
    <div>
      <div>
        <I3DDemoCore content={new I3D.IndividuallyMarkedNodeList(posAll) } perspective={persp} />
      </div>
      <details>
        <pre>
          {JSON.stringify({ persp, ang, posAll, inPerspPos:  linTrTransformedPosition3DMat(persp, posAll[0]! ), }, null, 2) }
        </pre>
      </details>
      <p>
        <IAngularSliderComp value={ang} propagateEdit={e => setPersp(e.newValue) } />
      </p>
    </div>
  ) ;
} ;

export const I3DDemoCore = function I3DDemoCoreComp({ content, perspective: perspectiveArg, } : {
  content: I3D.IndividuallyMarkedNodeList
  ,
  perspective: Matrix4,
}) {
  const finalPersp = (() => {
    let persp: Matrix4 = (
      identityMat4()
    ) ;
    persp = (
      multipliedMat4(perspectiveArg, persp )
    ) ;
    persp = (
      multipliedMat4((
        matrixAssign(identityMat4(), {
          "m2,2": -1 ,
        } )
      ), persp )
    ) ;
    // persp = (
    //   ((scl: number) => (
    //     multipliedMat4((
    //       matrixAssign(identityMat4(), ((scl1: number) => ({
    //         "m1,1": scl1 ,
    //         "m2,2": scl1 ,
    //       }) )(scl ) )
    //     ), persp )
    //   ) )(200 )
    // ) ;
    return persp ;
  })() ;
  return (
    <svg viewBox="-200 -100 400 200">
      <path d={`M -8000 -8000 H 8000 V 8000 H -8000 z ` } fill="black" />
      <g>
        { (
          content.posAll
          .map(ndUnit => {
            ;

            if (ndUnit instanceof I3D.PolygonallyMarkedNodeUnitGraph)
            {
              const pts = (
                ndUnit
                .points
                .map(pos => (
                  linTrTransformedPosition3DMat(finalPersp, pos )
                ))
                .map(pos => ({
                  x: pos.x / Math.max(0, pos.z ) ,
                  y: pos.y / Math.max(0, pos.z ) ,
                }) )
                .map(pos => ({
                  x: pos.x * 240 ,
                  y: pos.y * 240 ,
                }) )
              ) ;
              return (
                //
                <path
                d={
                  `M ${pts.map(pos => `${pos.x } ${pos.y }` ).join(" L ") } z`
                }
                style={{ fill: "yellow", }}
                />
              ) ;
            }

            /* it's not supported. */
            return (
              <React.Fragment >
                <g />
              </React.Fragment>
            ) ;
          } )
        ) }
      </g>
    </svg>
  ) ;
} ;






