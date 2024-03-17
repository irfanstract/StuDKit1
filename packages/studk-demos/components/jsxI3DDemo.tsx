
"use client" ;




import {
  Angle ,
  cosineAt,
  normaliseAngDeg, 
  sineAt,
} from "studk-video-fwcore/src/Angular1.mjs" ;

import {
  //
  LinTr3D ,
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

  export interface IDrawable { pos: Point3D }

  ;
}





import * as React from "react" ;



import { IAngularSliderComp, } from "@/components/IAngularSlider";



// import dynamicComponent from "next/dynamic";

// import Link from "next/link";



// import mainOtfUrl from "otf-export/otfDemo.mjs" ;

// console.log({ mainOtfUrl, }) ;

export const I3DDemo = function I3DDemoComp() {
  const pos = React.useMemo(() => ({ x: 0, y:0, z: 3, } satisfies Point3D ) , [] ) ;
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
        <I3DDemoCore content={{ pos: pos, }} perspective={persp} />
      </div>
      <details>
        <pre>
          {JSON.stringify({ persp, ang, pos, inPerspPos:  linTrTransformedPosition3DMat(persp, pos ), }, null, 2) }
        </pre>
      </details>
      <p>
        <IAngularSliderComp value={ang} propagateEdit={e => setPersp(e.newValue) } />
      </p>
    </div>
  ) ;
} ;

export const I3DDemoCore = function I3DDemoCoreComp({ content, perspective: perspectiveArg, } : { content: I3D.IDrawable, perspective: Matrix4, }) {
  const finalPersp = (
    multipliedMat4((
      matrixAssign(identityMat4(), ((scl: number) => ({
        "m1,1": scl ,
        "m2,2": scl ,
        "m3,3": scl ,
      }) )(100 ) )
    ), perspectiveArg)
  ) ;
  const pos = (
    linTrTransformedPosition3DMat(finalPersp, content.pos )
  ) ;
  return (
    <svg viewBox="-200 -100 400 200">
      <path d={`M -8000 -8000 H 8000 V 8000 H -8000 z ` } fill="black" />
      <g>
        <circle
        cx={pos.x}
        cy={pos.y}
        r={16}
        style={{ fill: "yellow", }}
        />
      </g>
    </svg>
  ) ;
} ;






