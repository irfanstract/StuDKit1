





/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * https://react.dev/reference/rsc/server-components#adding-interactivity-to-server-components 
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'

import {
  Matrix3,
  Matrix4,
  matrixAssign,
} from 'studk-simulations-commons/src/LinearMap1.mjs'
import {
  LinTrCoords3,
  Point3D,
  linTrFromTranslateCoord3Matr, 
  linTrTransformedPosition3DMat,
} from "studk-video-fwcore/src/LinearTransforms.mjs"

import * as THREE from 'three'






export const TO_THRREJSMATRIXOBJ_4 = (
  function (...[mtr0] : [Matrix4])
  {
    const m = (
      new THREE.Matrix4()
    )
    m.set(...([
      mtr0['m1,1'],
      mtr0['m1,2'],
      mtr0['m1,3'],
      mtr0['m1,4'],
      //
      mtr0['m2,1'],
      mtr0['m2,2'],
      mtr0['m2,3'],
      mtr0['m2,4'],
      //
      mtr0['m3,1'],
      mtr0['m3,2'],
      mtr0['m3,3'],
      mtr0['m3,4'],
      //
      0,
      0,
      0,
      1,
      //
    ] as const))
    return m
  }
)

export const FROM_THRREJSMATRIXOBJ_4 = (
  function (...[mtr0] : [THREE.Matrix4])
  : (
    | Matrix4
    // | THREE.Matrix4
  )
  {
    {
      const values = mtr0.elements ;
      /**
       * use `GETV(1, 1)` to get value at the first col of the first row.
       * 
       */
      const GETV = (
        (...[iw, jw]: [rowIdx: number, colIdx: number]): number => {
          const i = -1 + iw
          const j = -1 + jw

          /* https://threejs.org/docs/index.html#api/en/math/Matrix4.elements - meaning that the orientation is transposed relatively. */
          {
            return (
              values[(j * 4 ) + i ]
              ??
              util.throwTypeError(`unexpected 'undefined/null' for idx ${`i=${i}, j=${j} `} in 'values', make sure the 'THREE#Matrix4' has been initialised properly.`)
            )
          }
        }
      )
      return ({
  
        "m1,1": GETV(1, 1) ,
        "m1,2": GETV(1, 2) ,
        "m1,3": GETV(1, 3) ,
        "m1,4": GETV(1, 4) ,
        //
        "m2,1": GETV(2, 1) ,
        "m2,2": GETV(2, 2) ,
        "m2,3": GETV(2, 3) ,
        "m2,4": GETV(2, 4) ,
        //
        "m3,1": GETV(3, 1) ,
        "m3,2": GETV(3, 2) ,
        "m3,3": GETV(3, 3) ,
        "m3,4": GETV(3, 4) ,
        //
        "m4,1": GETV(4, 1) ,
        "m4,2": GETV(4, 2) ,
        "m4,3": GETV(4, 3) ,
        "m4,4": GETV(4, 4) ,
        //
      } satisfies Matrix4)
    }

    // return mtr0
  }
)






