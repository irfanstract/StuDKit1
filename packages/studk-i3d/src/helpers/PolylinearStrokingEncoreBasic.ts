





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
  ADJACENT_PAIRS ,
  OR_TUPLE_TWO ,
} from "studk-fwcore/src/util/AsStartAndEndPair1.ts"


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



import * as POE from "studk-i3d/src/xt/PolygonalOrthoExpansionABrueNrmOnXyz.ts"

import * as POE1 from "studk-i3d/src/xt/PolygonalOrthoExpansionABrueNrmOnCoord.ts"

import type * as THREE from 'three'

import {
  POLYLINE_AS_TRIANGLES ,
} from "studk-i3d/src/helpers/PolygonalAsTriangularOnCoord.ts"



export const LINE_STROKING_ANALYSIS = (
  function (...args : (
    ArgsWithOptions<[endpts: readonly [POE1.PTCOORD3D, POE1.PTCOORD3D] ], (
      & { strokeWidth: number | [number, number], }
    )>
  ) )
  {
    const [[p1Pos, p2Pos], { strokeWidth: strokeWidthArg, } ] = args

    const strokeWidths = OR_TUPLE_TWO(strokeWidthArg)

    const poles = [
      { x: p1Pos , c: (
        POE1.APPLY_NRMMAT_BRUSHEDGE_ALONG_BETWEEN_TWO([
          p1Pos,
          p2Pos ,
        ] as const , strokeWidths[0] )
      ), } ,
      { x: p2Pos , c: (
        POE1.APPLY_NRMMAT_BRUSHEDGE_ALONG_BETWEEN_TWO([
          p1Pos,
          p2Pos ,
        ] as const , strokeWidths[1] )
      ), } ,
    ] satisfies { x: POE1.PTCOORD3D, c: ReturnType<typeof POE1.APPLY_NRMMAT_BRUSHEDGE_ALONG_BETWEEN_TWO>, }[]

    const d0 = (
      util.reiterated(function * () {
        for (const [e0, e2] of ADJACENT_PAIRS(poles) ) {
          ;
          for (const [z0, z2] of (
            // TODO
            ADJACENT_PAIRS([
              e => e.strkeRelativePosR,
              e => e.strkeRelativePosE,
              e => e.strkeRelativePosL,
              e => e.strkeRelativePosB,
              e => e.strkeRelativePosR,
            ] satisfies ((d: ReturnType<typeof POE1.APPLY_NRMMAT_BRUSHEDGE_ALONG_BETWEEN_TWO>) => POE1.PTCOORD3D )[] )
          ) )
          {
            yield {
              x0: e0.x,
              z00: z0(e0.c),
              z02: z2(e0.c),
              //
              x2: e2.x,
              z20: z0(e2.c),
              z22: z2(e2.c),
              //
            } ;
          }
        }
      })
    )

    const asPolygonPtSeq = (
      util.reiterated(function * () {
        for (const { x0, x2, z00, z02, z20, z22, } of (
          d0
        ))
        {
          yield* [
            //
            POE1.PLUS_TWO(x0 , z00 ) ,
            POE1.PLUS_TWO(x0 , z02 ) ,
            POE1.PLUS_TWO(x2 , z22 ) ,
            POE1.PLUS_TWO(x2 , z20 ) ,
          ] ;
        }
      } )
    )

    return {
      p1Pos ,
      p2Pos ,
      strokeWidths ,
      poles ,
      asPolygonPtSeq ,
    } as const
  }
)


export const LINE_STROKED = (
  function (...args : (
    Parameters<typeof LINE_STROKING_ANALYSIS>
  ) )
  {
    const {
      p1Pos ,
      p2Pos ,
      asPolygonPtSeq ,
      strokeWidths ,
    } = LINE_STROKING_ANALYSIS(...args)

    return (
      POLYLINE_AS_TRIANGLES((() => {

        return [...asPolygonPtSeq, ...asPolygonPtSeq.toReversed() ]
      })() , { close: true, } )
    )
  }
)












