



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


import React, {
  useReducer,
  useRef,
  useState,
} from 'react'

import {
  describeComponent,
} from '#UiFwCore/ReactComponentDef.tsx'




import {
  useIntervalEffect,
  useEventDispatchCallback ,
} from '#UiFwCore/xt/ovc-util.tsx';

const useForceRedraw = () => (
  useReducer<(v0: any) => any>(v => (v + 1) , 0 )
)

import {
  describeThreeJsObjComponent ,
} from "studk-ui-encore/src/ThreeReactJsUi/DescribeMeshC.tsx"

import type * as THREE from 'three'

import {
  Canvas,
  useFrame,
  ThreeElements, 
  useThree,
} from '@react-three/fiber'

import {
  animated as sprungThreeElements ,
  useSpring as useThreeJsSpring ,
} from '@react-spring/three'



export {
  sprungThreeElements ,
  useThreeJsSpring ,
}

export const SupposeControlledForcedConstantRedrawC = (
  describeThreeJsObjComponent((
    function SupposePeriodicFallbackRedrawCImpl(props : { isInTopicallyNeglectibleState: () => boolean , })
    {
      const tr = useThree()
      const {
        invalidate ,
      } = useSpclRe()

      useFrame(() => {
        if (!(props.isInTopicallyNeglectibleState )() ) {
          invalidate() ;
        }
      })

      useIntervalEffect(() => {
        invalidate() ;
      } , 2.1 * 1000 , [invalidate] , ) ;

      return <></> ;
    }
  ))
)

const useSpclRe = (
  function () {
    ;

    const tr = useThree()
    const [ , RE] = (
      useForceRedraw()
    )
    const invalidate = (
      useEventDispatchCallback(() => {
        tr.invalidate()
        if (0) { RE() ; }
      } )
    )

    return {
      invalidate ,
    } as const
  }
)








