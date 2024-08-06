



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
  POLYLINE_AS_TRIANGLES ,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshPrimitives.ts"

import {
  describeThreeJsObjComponent ,
} from "studk-ui-encore/src/ThreeReactJsUi/DescribeMeshC.tsx"

import {
  ByCoordTupleArrayGeometryC ,
} from "studk-ui-encore/src/ThreeReactJsUi/xbp.tsx" 





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

export { Box, }

export const ThreeReactJsDemoC = (
  describeComponent((
    function ThreeJsDemoCImpl() {

      const [camPropv, ] = (
        React.useState<Extract<React.ComponentProps<typeof Canvas>["camera"] , {}> >(() => {
          return {
            /**
             * the default being `75` produces graphically-odd result;
             * change to `10.95`
             * 
             */
            fov:  10.95,
            near: 0.1, far: 1000,
            /**
             * NOTE:
             * this is not quite `position`  like it seems -
             * this effectively doesn't seem like regular, common `position`
             * 
             */
            position: (
              [0, 0, 5.009]
            ),
          }
        })
      )

      const c1 = (
        <Canvas
        /**
         * to avoid constant continuous redraw which drains battery
         * we're tempted to assign `frameloop="demand"`
         * 
         */
        frameloop='demand'
        camera={camPropv}
        >
        { (
          ((e: React.ReactElement) => {
            e = (
              <group
              scale={2 ** -2.5}
              >
                { e }
              </group>
            )
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

      const c2 = (
        <Canvas
        /**
         * to avoid constant continuous redraw which drains battery
         * we're tempted to assign `frameloop="demand"`
         * 
         */
        frameloop='demand'
        camera={camPropv}
        >
        { (
          ((e: React.ReactElement) => {
            e = (
              <group
              scale={2 ** -2.5}
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
            <PEdgeC />
            </>
          )
        ) }
        </Canvas>
      )

      const renderSpclCont = (
        function (...[c] : [React.ReactElement])
        {
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
      )

      return (
        <div>
          { renderSpclCont(c1) }
          { renderSpclCont(c2) }
        </div>
      )
    }
  ))
)

export const PEdgeC = (() => {
  const SpclCtrlPointC = (
    describeThreeJsObjComponent((
      function CtrlPointCImpl({ position: positionArg, ...etProps } : { position: readonly [number, number, number], } )
      {
        let e: React.ReactElement = (
          <Box position={[0, 0, 0]} />
        )
        e = (
          <group scale={2 ** -2} >
            { e }
          </group>
        )
        e = (
          <group position={positionArg} >
            { e }
          </group>
        )
        return (
          e
        )
      }
    ))
  )
  return (
    describeThreeJsObjComponent((
      function PEdgeCImpl()
      {
        const [mKey, scMKey] = (
          React.useReducer<(x: number) => number>(() => util.L.random(0, 3, true) , 0 )
        )
        const [p1Pos, setP1Pos] = React.useState<readonly [number, number, number]>([0, 0, 0])
        const [p2Pos, setP2Pos] = React.useState<readonly [number, number, number]>([1, 1, 0])
        const SCATTER_EM = function () {
          const SPCL_RAND = () => util.L.random(-2.25, 2.25)
          const newP1Pos = [SPCL_RAND(), SPCL_RAND(), SPCL_RAND() ] as const
          const newP2Pos = [SPCL_RAND(), SPCL_RAND(), SPCL_RAND() ] as const
          setP1Pos(() => newP1Pos)
          setP2Pos(() => newP2Pos)
          scMKey()
        }
        return (
          <group
          key={mKey }
          onClick={(event) => SCATTER_EM() }
          >
              <SpclCtrlPointC position={p1Pos} />
              <SpclCtrlPointC position={p2Pos} />
              <mesh>
                <ByCoordTupleArrayGeometryC
                attach="geometry"
                coords={(
                  POLYLINE_AS_TRIANGLES((() => {
                    const d = [
                      [p1Pos[0], p1Pos[1], -3.8, ] as const ,
                      [p2Pos[0], p2Pos[1], -3.8, ] as const ,
                      [      -5,       -5, -3.8, ] as const ,
                    ]
                    return [...d, ...d.toReversed() ]
                  })() , { close: true, } )
                )}
                />
                <meshStandardMaterial color={"blue"} />
              </mesh>
          </group>
        )
      }
    ))
  )
})()




