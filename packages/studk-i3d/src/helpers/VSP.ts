












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



import type * as POE from "studk-i3d/src/xt/PolygonalOrthoExpansionABrueNrmOnXyz.ts"

import type * as POE1 from "studk-i3d/src/xt/PolygonalOrthoExpansionABrueNrmOnCoord.ts"

import type * as THREE from 'three'

;



;






namespace VSP
{
  ;

  type KeyBase = {}

  // interface SBVE { ve: util.Immutable.Map<EK, readonly [VK, VK]> }

  // TODO
  /**
   * WIP
   */
  const solveB = (
    function <VK extends KeyBase, EK extends KeyBase>
    (...args : [
      EdgeSet<VK, EK>,
      {
        edgeLengths: util.Immutable.Map<EK, number> ,
        cornerPos: util.Immutable.Map<VK, POE1.PTCOORD3D > ,
      },
    ] )
    {
      const [
        edgeEndNodes ,
        {
          edgeLengths ,
          cornerPos: cornerPos0 ,
        } ,
      ] = args
      const cornerXPos0 = cornerPos0.map(vec => vec[0])
      const cornerYPos0 = cornerPos0.map(vec => vec[1])
      const cornerZPos0 = cornerPos0.map(vec => vec[2])

      // TODO

      return {
        edgeEndNodes ,
        edgeLengths ,
        cornerXPos0 ,
        cornerZPos0 ,
      } as const
    }
  )

  /**
   * WIP
   */
  export class PositionedCornersEngine<VK extends KeyBase = any, EK extends KeyBase = any>
  {
    private constructor(
      protected edgeSet: EdgeSet<VK, EK>,
      public edgeLengths: util.Immutable.Map<EK, number> ,
      protected cornerPos: util.Immutable.Map<VK, POE1.PTCOORD3D > ,
    )
    {}

    getCorneredEdges = (
      (...[queriedCornerId] : [VK]) => (
        this.edgeSet
        .getCorneredEdges(queriedCornerId)
      )
    ) ;

    getEdgesEachWithConnectedCorners()
    {
      return (
        this.edgeSet
        .getEdgesEachWithConnectedCorners()
      )
    }

    getPerEdgeConnectedCorners()
    {
      return (
        this.edgeSet
        .edgeEndNodesMap
      )
    }

    getActualEdgeLengths()
    {
      return (
        this.getPerEdgeConnectedCorners()
        .map(([endp1, endp2], cnnctorId) => {
          const endPos0 = this.cornerPos.get(endp1)
          const endPos2 = this.cornerPos.get(endp2)
          if (endPos0 && endPos2) {
            const [x0, y0, z0] = endPos0
            const [x2, y2, z2] = endPos2
            return Math.hypot(
              x2 - x0,
              y2 - y0,
              z2 - z0,
            )
          } else {
            return null
          }
        } )
      ) ;
    }

    // getDeviationsOfEdgeLengths() {}

  }

  export class EdgeSet<VK extends KeyBase = any, EK extends KeyBase = any>
  {
    private constructor(
      public edgeEndNodesMap: util.Immutable.Map<EK, readonly [VK, VK]> ,
    )
    {}

    getEdges()
    {
      return (
        this.edgeEndNodesMap
        .keySeq()
      )
    }

    getEdgesEachWithConnectedCorners()
    {
      return (
        this.edgeEndNodesMap
        .entrySeq()
      )
    }

    getCorneredEdges = (...[queriedCornerId] : [VK]) => {
      return (
        this.getEdgesEachWithConnectedCorners()
        .flatMap(([eId, [endp1, endp2] ]) => [
          [eId, endp1],
          [eId, endp2],
        ] as const )
        .filter(([eId, endPtId]) => (
          endPtId === queriedCornerId
        ) )
        .map(([eId, ]) => eId )
      ) ;
    } ;

  }
}







;







