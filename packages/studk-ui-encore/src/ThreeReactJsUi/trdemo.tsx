



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





/* https://docs.pmnd.rs/react-three-fiber/api/canvas#tree-shaking */
import 'three'

function Box(props: ThreeElements['mesh']) {
  /** manual call to `invalidate()` is necessary since the enclosing `<R3F.Canvas>` could have set `frameloop` to `"demand"`. */
  const tr = useThree()
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    if (active || hovered) {
      meshRef.current.rotation.x += delta
      tr.invalidate()
    }
  })
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export const ThreeReactJsDemoC = (
  describeComponent((
    function ThreeJsDemoCImpl() {
      const c = (
        <Canvas
        frameloop='demand'
        >
        { (
          ((e: React.ReactElement) => {
            e = (
              <group
              matrixAutoUpdate={false} /* https://threejs.org/docs/#manual/en/introduction/Matrix-transformations */
              matrix={[
                0.7, -0.7, 0, 0 ,
                0.7,  0.7, 0, 0 ,
                0  ,  0  , 1, 0 ,
                0  ,  0  , 0, 1 ,
              ]}
              >
                { e }
              </group>
            )
            return e
          } )(
            <>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            </>
          )
        ) }
        </Canvas>
      )
      return (
        <div
        className=''
        children={c}
        style={{
          display: "flex",
          blockSize: `calc(min(50vh, 75vw) )`,
        }}
        />
      )
    }
  ))
)




