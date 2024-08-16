



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
  useRef,
  useState,
} from 'react'

import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'

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

// const POLYLINE_AS_THREEJSSHAPEOBJ = (
//   (...[p0] : [ReadonlyArray<(readonly [number, number, number]) > ]) => {
//     const s1 = new THREE.Shape()
//     if (p0[0]) {
//       s1.moveTo(p0[0][0])
//     }
//     return s1
//   }
// )

import {
  POLYLINE_AS_TRIANGLES ,
} from "studk-i3d/src/helpers/PolygonalAsTriangularOnCoord.ts"

export { POLYLINE_AS_TRIANGLES, }

// const POLYLINE_AS_TRIANGLES = (
//   function <const perPtT extends (
//     | (readonly [number, number, number])
//     // | import("studk-video-fwcore/src/LinearTransforms.mjs").Point3D
//   )>(...[
//     pts, { close: shallClose, } ,
//   ] : (
//     ArgsWithOptions<[pts: readonly perPtT[]], { close: boolean, }>
//   ) )
//   {
//     if (pts[0]) {

//       if (1) {
//         const idxs = (
//           util.reiterated(function* () {
//             for (let i0 = 1; (i0 + 1) <= (pts.length + (shallClose ? 0 : -1 ) ); i0 += 1 ) {
//               yield 0 ;
//               yield (i0 + 0 ) % pts.length ;
//               yield (i0 + 1 ) % pts.length ;
//             }
//           })
//         )
  
//         return (
//           idxs
//           .map((i) => (
//             pts[i % pts.length] ?? pts[0] ?? util.throwAssertionError()
//           ))
//           .map(([x, y, z]) => (
//             [
//               x + (Math.random() * 1E-7 ) ,
//               y + (Math.random() * 1E-7 ) ,
//               z + (Math.random() * 1E-7 ) ,
//             ] as const
//           ) )
//         )
//       }

//       {

//         return util.throwAssertionError()
//       }
//     } else {
//       return [] as const
//     }
//   }
// )







