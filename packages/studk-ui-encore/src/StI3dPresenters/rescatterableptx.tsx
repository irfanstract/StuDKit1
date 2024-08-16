



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
} from 'studk-fwcore-setups/src/util-eawo.mjs'

import {
  Matrix3,
  Matrix4,
  matrixAssign,
} from 'studk-simulations-commons/src/LinearMap1.mjs'
import {
  LinTrCoords3,
  linTrFromTranslateCoord3Matr, 
  linTrTransformedPosition3DMat,
} from "studk-video-fwcore/src/LinearTransforms.mjs"

import * as POE from "studk-ui-encore/src/StI3dPresenters/PolygonalOrthoExpansion.tsx"



import React, {
  useRef,
  useState,
} from 'react'

import {
  describeComponent,
} from 'studk-ui-componentdefinition/src/dec.tsx'

import {
  describeSvgComponent ,
} from 'studk-ui/src/meta/react/gec.tsx'

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'

const toUpdateFuncPrmv = (
  function <T extends (null | (
    | boolean | symbol | number
    | string
    | readonly unknown[]
    | object
  ))>(...[f] : [originalSsa: React.SetStateAction<T>]) {
    return (
      typeof f === "function" ? f : (() => f )
    )
  }
)



namespace XRescatterablePointsReact
{
  const usePtState = (
    function (...[initialValue ] : [initialValue: LinTrCoords3,])
    {
      const [ptPos, setPtPos] = React.useState<readonly [number, number, number]>([initialValue.x, initialValue.y, initialValue.z, ])
      return {
        ptPos ,
        setPtPos ,
      } as const
    }
  )

  export const useRePosIbleFor3 = (
    function ()
    {
      const [p1Pos, setP1Pos] = React.useState<readonly [number, number, number]>([0  ,  0, 0])
      const [p2Pos, setP2Pos] = React.useState<readonly [number, number, number]>([1.0,  1, 0])
      const [p3Pos, setP3Pos] = React.useState<readonly [number, number, number]>([1.5, -2, 0])

      return {
        p1Pos ,
        p2Pos ,
        p3Pos ,
        setP1Pos ,
        setP2Pos ,
        setP3Pos ,
      } as const
    }
  )

  /**
   * not only the point's position/location ;
   * we also need to know the point's tmp-al direction (aka "tangent")
   * for purpose of generating "offset contours"
   * .
   * 
   */
  type NrmMat4 = POE.NrmMat4

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
   * {@link useRePosIbleFor3} with some added stuffs {@link NrmMat4}
   * 
   */
  const useSizedPtState = (
    function (...[initialValue ] : [initialValue: LinTrCoords3,]) {

      const [ptMatr, setPtMatr] = (
        React.useState<NrmMat4>(linTrFromTranslateCoord3Matr(initialValue) )
      )
      const ptPos = (
        React.useMemo(() => (
          APPLY_NRMMAT_STRAIGHT(ptMatr)
        ) , [ptMatr] )
      )
      const setPtPos = React.useCallback((
        function (...[f] : [React.SetStateAction<readonly [number, number, number] > ])
        {
          setPtMatr(matr0 => {
            const pos0 = APPLY_NRMMAT_STRAIGHT(matr0)
            const [newX, newY, newZ] = (
              (toUpdateFuncPrmv(f) )(pos0 )
            )
            return (
              matrixAssign(matr0 , {
                "m1,4": newX ,
                "m2,4": newY ,
                "m3,4": newZ ,
              } )
            )
          })
        }
      ) , [ptMatr, setPtMatr] )

      return {
        ptMatr ,
        ptPos ,
        setPtMatr ,
        setPtPos ,
      } as const
    }
  )
  
  export const useRePosIbleNmvcFor3 = (
    function ()
    {
      const { ptMatr: p1Mat, ptPos: p1Pos, setPtMatr: setP1Matr, setPtPos: setP1Pos, } = (useSizedPtState({ z: 0, x:  -0.3, y:  0, }) )
      const { ptMatr: p2Mat, ptPos: p2Pos, setPtMatr: setP2Matr, setPtPos: setP2Pos, } = (useSizedPtState({ z: 0, x:   1.0, y:  1, }) )
      const { ptMatr: p3Mat, ptPos: p3Pos, setPtMatr: setP3Matr, setPtPos: setP3Pos, } = (useSizedPtState({ z: 0, x:   1.5, y: -2, }) )

      return {
        p1Mat ,
        p2Mat ,
        p3Mat ,
        p1Pos ,
        p2Pos ,
        p3Pos ,
        setP1Matr ,
        setP2Matr ,
        setP3Matr ,
        setP1Pos ,
        setP2Pos ,
        setP3Pos ,
      } as const
    }
  )

  export const useReScatterableFor3 = (
    function ()
    {
      const [mKey, scMKey] = (
        React.useReducer<(x: number) => number>(() => util.L.random(0, 3, true) , 0 )
      )

      const rpr = useRePosIbleNmvcFor3() ;
      const {
        p1Pos ,
        p2Pos ,
        p3Pos ,
        setP1Pos ,
        setP2Pos ,
        setP3Pos ,
      } = rpr

      const SCATTER_EM = function () {
        const SPCL_RAND = () => util.L.random(-2.25, 2.25)
        const newP1Pos = [SPCL_RAND(), SPCL_RAND(), SPCL_RAND() ] as const
        const newP2Pos = [SPCL_RAND(), SPCL_RAND(), SPCL_RAND() ] as const
        setP1Pos(() => newP1Pos)
        setP2Pos(() => newP2Pos)
        scMKey()
      }

      return {
        mKey ,
        p1Pos ,
        p2Pos ,
        p3Pos ,
        SCATTER_EM ,
        /** @deprecated WIP */
        etc: {
          ... rpr ,
          scMKey ,
        } ,
      } as const
    }
  )

}

export {
  /**
   * WIP/TBD
   * @deprecated
   */
  XRescatterablePointsReact ,
}








