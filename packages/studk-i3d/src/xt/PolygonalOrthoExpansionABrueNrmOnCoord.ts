





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

import {
  NrmMat4 ,
} from "studk-i3d/src/xt/PolygonalOrthoExpansionABrueNrmOnXyz.ts"

import * as POE from "studk-i3d/src/xt/PolygonalOrthoExpansionABrueNrmOnXyz.ts"

// import * as THREE from 'three'

import {
  FROM_THRREJSMATRIXOBJ_4 ,
  TO_THRREJSMATRIXOBJ_4 ,
} from "studk-ui-fwcore/src/i3d/ToThreeJsMatrixObj.ts"

export {
  /** @deprecated WIP/TBD */
  NrmMat4 ,
}

/**
 * applies the NRM Matrix, for directional.
 * 
 */
export const APPLY_NRMMAT_STRAIGHT = (
  POE.APPLY_NRMMAT_STRAIGHT
)

/**
 * applies the NRM Matrix, for brush-edge offset.
 * 
 */
export const APPLY_NRMMAT_BRUSHEDGE_OFFSET = (
  POE.APPLY_NRMMAT_BRUSHEDGE_OFFSET
)

/**
 * applies the NRM Matrix, between the two end-pt(s).
 * 
 */
export const APPLY_NRMMAT_BRUSHEDGE_ALONG_BETWEEN_TWO = (
  function (...[[p0, p2], strokeWidth] : (
    ArgsWithOptions<[readonly [PTCOORD3D, PTCOORD3D ], strokeWidth: number], (
      & {}
    )>
  ))
  {
    // const pDiff = (
    //   DIFF_BETWEEN_TWO(p0, p2)
    // )
    const alongDir = (
      DIRECTION_BETWEEN_TWO(p0, p2)
    )
    const strkeRelativePosL = APPLY_NRMMAT_BRUSHEDGE_OFFSET(alongDir, strokeWidth, { quadrantIndex: 0, } )
    const strkeRelativePosE = APPLY_NRMMAT_BRUSHEDGE_OFFSET(alongDir, strokeWidth, { quadrantIndex: 1, } )
    const strkeRelativePosR = APPLY_NRMMAT_BRUSHEDGE_OFFSET(alongDir, strokeWidth, { quadrantIndex: 2, } )
    const strkeRelativePosB = APPLY_NRMMAT_BRUSHEDGE_OFFSET(alongDir, strokeWidth, { quadrantIndex: 3, } )
    return {
      strkeRelativePosL ,
      strkeRelativePosE ,
      strkeRelativePosR ,
      strkeRelativePosB ,
    } as const
  }
)

export const WITHOUT_TRANSLATION = (
  POE.WITHOUT_TRANSLATION
)

export type PTCOORD3D = (
  readonly [x: number, y: number, z: number]
)

export const DIFF_BETWEEN_TWO = (
  function (...[[x0, y0, z0], [x2, y2, z2]] : [pt0: PTCOORD3D, pt2: PTCOORD3D])
  : PTCOORD3D
  {
    return [
      x2 - x0 ,
      y2 - y0 ,
      z2 - z0 ,
    ]
  }
)

export const PLUS_TWO = (
  function (...[[x0, y0, z0], [x2, y2, z2]] : [pt0: PTCOORD3D, pt2: PTCOORD3D])
  : PTCOORD3D
  {
    return [
      x2 + x0 ,
      y2 + y0 ,
      z2 + z0 ,
    ]
  }
)

/**
 * 
 * 
 */
export const LOGICALAND_BETWEEN_TWO = (
  function (...[[x0, y0, z0], [x2, y2, z2]] : [pt0: PTCOORD3D, pt2: PTCOORD3D])
  : PTCOORD3D
  {
    return [
      x2 * x0 ,
      y2 * y0 ,
      z2 * z0 ,
    ]
  }
)

/**
 * essentially {@link DIRECTION_OF} applied to `linTrFromTranslateCoord3Matr(DELTA_BETWEEN(pt0, pt2) )`
 * 
 */
export const DIRECTION_BETWEEN_TWO = (
  function (...[[x0, y0, z0], [x2, y2, z2]] : [pt0: PTCOORD3D, pt2: PTCOORD3D])
  {
    return (
      POE.DIRECTION_BETWEEN_TWO(
        { x: x0, y: y0, z: z0, } ,
        { x: x2, y: y2, z: z2, } ,
      )
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
export const DIRECTION_OF = (
  POE.DIRECTION_OF_SHEARSCALING_BY
)

/**
 * the Matrix's Determinant
 * 
 */
export const DETERMINANT_OF = (
  POE.DETERMINANT_OF
)







