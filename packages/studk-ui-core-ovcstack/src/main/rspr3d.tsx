


/* 
 * NOTE: probably the wrong place for this src file, better choose some different place next time
 * 
 * */




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

// import {
//   describeComponent,
// } from 'studk-ui-componentdefinition/src/dec.tsx'

// import {
//   describeSvgComponent ,
// } from 'studk-ui/src/meta/react/gec.tsx'

// import {
//   Button ,
//   Span ,
// } from 'studk-ui/src/xst/dbc.tsx'

// import {
//   describeCallbackAssignedStyleProps,
// } from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'


import {
  animated ,
  useSpring ,
} from '@react-spring/three'

import type * as THREE from 'three'
import type {
  Canvas,
  useFrame,
  ThreeElements, 
  useThree,
} from '@react-three/fiber'







;

/**
 * {@link useAnimatedTuple3}
 * 
 * for consistency with {@link ThreeElements.group the R3F syntax},
 * we're tempted to use the Tuple3 syntax to denote/represent coords
 * 
 */
export const useAnimatedTuple3 = (
  function (...[[x, y, z]] : [readonly [number, number, number] ] )
  {
    const { scale: ax } = useSpring({ scale: x })
    const { scale: ay } = useSpring({ scale: y })
    const { scale: az } = useSpring({ scale: z })
    return (
      React.useMemo(
        () => ([ ax, ay, az ] as const) ,
        [ax, ay, az] )
    )
  }
)
















