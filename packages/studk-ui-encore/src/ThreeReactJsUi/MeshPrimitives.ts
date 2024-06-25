



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


import React, {
  useRef,
  useState,
} from 'react'

import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'

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


import * as THREE from 'three'
import {
  Canvas,
  useFrame,
  ThreeElements, 
  useThree,
} from '@react-three/fiber'

import {
  ByCoordTupleArrayGeometryC ,
} from "studk-ui-encore/src/ThreeReactJsUi/xbp.tsx"

export const POLYLINE_AS_TRIANGLES = (
  function (...[pts, { close: shallClose, } ] : (
    ArgsWithOptions<[pts: (readonly [number, number, number])[]], { close: boolean, }>
  ) )
  {
    const idxs = (
      util.reiterated(function* () {
        for (let i0 = 0; (i0 + 2) <= pts.length; i0 += 2 ) {
          yield i0 ;
          yield i0 + 1 ;
          yield i0 + 2 ;
        }
      })
    ) ;
    return (
      idxs
      .map((i) => (
        pts[i % pts.length] ?? ([Number.NaN, Number.NaN, Number.NaN] as const)
      ))
    ) ;
  }
)






