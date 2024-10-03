





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
  identityMat4,
  matrixAssign,
} from 'studk-simulations-commons/src/LinearMap1.mjs'
import {
  LinTrCoords3,
  Point3D,
  linTrFromTranslateCoord3Matr, 
  linTrTransformedPosition3DMat,
} from "studk-video-fwcore/src/LinearTransforms.mjs"

import * as THREE from 'three'

import {
  FROM_THRREJSMATRIXOBJ_4 ,
  TO_THRREJSMATRIXOBJ_4 ,
} from "studk-ui-fwcore/src/i3d/ToThreeJsMatrixObj.ts"






/**
 * not only the point's position/location ;
 * we also need to know the point's tmp-al direction (aka "tangent")
 * for purpose of generating "offset contours"
 * .
 * 
 */
interface NrmMat4 extends Matrix4
{}
namespace NrmMat4 { ; }
export {
  /** @deprecated WIP/TBD */
  NrmMat4 ,
}

/**
 * applies the NRM Matrix, for directional.
 * 
 */
export const APPLY_NRMMAT_STRAIGHT = (
  function (...[ptMatr] : (
    ArgsWithOptions<[dirAndShearScale: NrmMat4], (
      & {}
    )>
  ))
  {
    const p = (
      linTrTransformedPosition3DMat(ptMatr, { z: 0, x: 1, y: 0, } )
    )
    return [
      p.x,
      p.y,
      p.z ,
    ] as const
  }
)

/**
 * applies the NRM Matrix, for brush-edge offset.
 * 
 */
export const APPLY_NRMMAT_BRUSHEDGE_OFFSET = (() => {
  ;
  function APPLY_NRMMAT_BRUSHEDGE_OFFSET_IMPL(...args : (
    ArgsWithOptions<[dirAndShearScale: NrmMat4, strokeWidth: number], (
      & { quadrantIndex ?: 0 | 1 | 2 | 3 , }
    )>
  ))
  {
    const [ptMatr, strokeWidth, { quadrantIndex = 0 , } = {}] = args

    const p = (
      linTrTransformedPosition3DMat(ptMatr, ((): Point3D => {
        switch (quadrantIndex) {
          case 0: return { z: 0, x: 0, y:  strokeWidth, }
          case 2: return { z: 0, x: 0, y: -strokeWidth, } 
          case 1: return { y: 0, x: 0, z:  strokeWidth, }
          case 3: return { y: 0, x: 0, z: -strokeWidth, }
        }
      } )() )
    )
    return [
      p.x,
      p.y,
      p.z ,
    ] as const
  }
  return APPLY_NRMMAT_BRUSHEDGE_OFFSET_IMPL
})()

export const WITHOUT_TRANSLATION = (
  function (...[mtr0] : [Matrix4])
  {
    const mtr2 = (
      matrixAssign(mtr0 , {
        "m1,4": 0,
        "m2,4": 0,
        "m3,4": 0,
      } )
    )
    return mtr2
  }
)

/**
 * {@link TRANSLATIONAL2SHSCLMAT}
 * 
 */
export const TRANSLATIONAL2SHSCLMAT = (
  function (...[mtr0] : [Matrix4])
  {
    return (
      matrixAssign(identityMat4() , {
        "m1,1": mtr0['m1,4'] ,
        "m2,2": mtr0['m2,4'] ,
        "m3,3": mtr0['m3,4'] ,
      } )
    )
  }
)

/**
 * essentially {@link DIRECTION_OF_SHEARSCALING_BY} applied to `linTrFromTranslateCoord3Matr(DELTA_BETWEEN(pt0, pt2) )`
 * 
 */
export const DIRECTION_BETWEEN_TWO = (
  function (...[p0, p1] : [pt0: Point3D, pt2: Point3D])
  {
    const ptdiff = (
      {
        x: p1.x - p0.x ,
        y: p1.y - p0.y ,
        z: p1.z - p0.z ,
      } satisfies Point3D
    ) ;
    const detmt = (
      Math.hypot(ptdiff.x, ptdiff.y, ptdiff.z )
    ) ;
    const ptDiffDir = (
      {
        x: ptdiff.x / detmt ,
        y: ptdiff.y / detmt ,
        z: ptdiff.z / detmt ,
      } satisfies Point3D
    ) ;
    {
      const m1 = new THREE.Matrix4()
      return (
        m1.makeRotationFromQuaternion((
          (function unitVecToQuaternionImpl(...[u ] : [Point3D]) {
            const m = new THREE.Quaternion()
            m.setFromUnitVectors(
              new THREE.Vector3(1, 0, 0),
              new THREE.Vector3(u.x, u.y, u.z),
            )
            return m
          } )(ptDiffDir)
        ))
        ,
        null && m1.multiplyScalar(detmt)
        ,
        FROM_THRREJSMATRIXOBJ_4(m1)
      )
    }
  }
)

/**
 * like {@link DIRECTION_OF_SHEARSCALING_BY} yet applied to its "translation-al component" instead.
 * 
 */
export const DIRECTION_OF_TRANSLATION_BY = (
  function (...[mtr0] : [Matrix4])
  : Matrix4
  {
    return (
      DIRECTION_OF_SHEARSCALING_BY((
        TRANSLATIONAL2SHSCLMAT(mtr0)
      ))
    )
  }
)

/**
 * derived matrix
 * {@link DETERMINANT_OF multiplied with some scalar resulting in a matrix with determinant being `1`}, and
 * with "the translation-al components" "all zeroed"
 * .
 * 
 */
export const DIRECTION_OF_SHEARSCALING_BY = (
  function (...[mtr0] : [NrmMat4])
  {
    const m1 = TO_THRREJSMATRIXOBJ_4(WITHOUT_TRANSLATION(mtr0) )
    return (
      m1.multiplyScalar(1 / m1.determinant() )
      ,
      FROM_THRREJSMATRIXOBJ_4(m1)
    )
  }
)

/**
 * the Matrix's Determinant
 * 
 */
export const DETERMINANT_OF = (
  function (...[mtr0] : [Matrix4])
  {
    return (
      TO_THRREJSMATRIXOBJ_4(WITHOUT_TRANSLATION(mtr0) ).determinant()
    )
  }
)






