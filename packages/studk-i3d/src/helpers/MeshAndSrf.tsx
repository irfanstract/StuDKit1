







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
  POLYGON_AS_TRIANGLES,
  POLYLINE_AS_TRIANGLES ,
} from "studk-i3d/src/helpers/PolygonalAsTriangularOnCoord.ts"

import {
  LINE_STROKING_ANALYSIS ,
  LINE_STROKED ,
} from "studk-i3d/src/helpers/PolylinearStrokingEncoreBasic.ts"







export class Surface
{
  
  static fromPolygonCoord(...args: [asPolygonPtSeq: readonly POE1.PTCOORD3D[] ] ) : Surface
  {
    const [asPolygonPtSeq ] = args ;

    return (
      new Surface((
        POLYLINE_AS_TRIANGLES((() => {
  
          return [...asPolygonPtSeq, ...asPolygonPtSeq.toReversed() ]
        })() , { close: true, } )
      ))
    ) ;
  }

  private constructor(public readonly triangulatedCoords: readonly POE1.PTCOORD3D[])
  {}
}

/**
 * a mono-material {@link Volume}.
 * 
 */
export class PlainVolume
{

  static fromStrokedLine(...args: Parameters<typeof LINE_STROKED> ) : PlainVolume
  {

    const {
      p1Pos ,
      p2Pos ,
      asPolygonPtSeq ,
    } = LINE_STROKING_ANALYSIS(...args)

    return (
      new PlainVolume((
        Surface.fromPolygonCoord(asPolygonPtSeq)
      ))
    ) ;
  }

  private constructor(protected readonly s : Surface )
  {}

  asSurface(): Surface
  { return this.s ; }

}




/**
 * a {@link Surface} with possibly multiple Materials
 * 
 */
export class Mesh
{
  private constructor() {}
}

/**
 * a {@link PlainVolume} with possibly multiple materials.
 * 
 */
export class Volume
{
  private constructor() {}
}












