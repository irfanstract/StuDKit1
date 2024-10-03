
/* 
 * Commonly-Used Demo-Applet Elements
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
} from 'studk-fwcore/src/util/C1.ts'


import React, {
  useRef,
  useState,
} from 'react'

import {
  describeComponent,
} from '#UiFwCore/ReactComponentDef.tsx'

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'

import { flushSync, } from 'react-dom';


import * as THREE from 'three'
import {
  Canvas,
  useFrame,
  ThreeElements, 
  useThree,
} from '@react-three/fiber'

import {
  POLYLINE_AS_TRIANGLES ,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshPrimitives.ts"

import {
  describeThreeJsObjComponent ,
} from "studk-ui-encore/src/ThreeReactJsUi/DescribeMeshC.tsx"

import {
  ByCoordTupleArrayGeometryC ,
} from "studk-ui-encore/src/ThreeReactJsUi/xbp.tsx" 

import {
  sprungThreeElements,
  useThreeJsSpring,
  SupposeControlledForcedConstantRedrawC,
} from 'studk-ui-encore/src/ThreeReactJsUi/TrA.tsx';

export const Box = (
  describeComponent((
    function BoxCImpl(props0: ThreeElements['mesh']) {
      const {
        position,
        ...props
      } = props0 ;

      return (
        <HovAcIbleC
        position={position }

        children={(...[{ hovered, active, }] ) => (
          <group
          >
          <mesh
            {...props}
            >
            <boxGeometry args={[1, 1, 1]} />
            { (
              // <meshStandardMaterial color={hovered ? 'yellow' : 'orange'} />
              hovered ?
              <meshStandardMaterial color={"yellow"} />
              : <meshStandardMaterial color={"orange"} />
            ) }
          </mesh>
          </group>
        ) }

        />
      )
    }
  ))
)

export const HovAcIbleC = (
  describeComponent((
    function HovAcIbleCImpl(props0: (
      & {
        children: (...[{ hovered, active, }] : ArgsWithOptions<[], (
          & { hovered : boolean, }
          & { active : boolean, }
        )>) => (React.ReactElement | null) ,
      }
      & Partial<Pick<ThreeElements["mesh"], "position" > >
    )) {
      const {
        children: renderContent ,
        position ,
        ...props
      } = props0

      /** manual call to `invalidate()` is necessary since the enclosing `<R3F.Canvas>` could have set `frameloop` to `"demand"`. */
      const tr = useThree()
      const meshRef = useRef<THREE.Group>(null!)
      const [hovered, setHover] = useState(false)
      const [active, setActive] = useState(false)
      useFrame((state, delta) => {
        if (active || hovered) {
          meshRef.current.rotation.x += delta
          tr.invalidate()
        }
      })
      return (
        <group
        ref={meshRef}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        scale={active ? 1.5 : 1}
        position={position}
        >
          { renderContent({ hovered, active, }) }
        </group>
      )
    }
  ))
)











