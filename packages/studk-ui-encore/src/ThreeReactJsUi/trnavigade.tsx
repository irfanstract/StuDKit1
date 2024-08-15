



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
} from "studk-ui-encore/src/ThreeReactJsUi/xbp.tsx" ;

import {
  POLYLINE_AS_TRIANGLES ,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshPrimitives.ts" ;





/* https://docs.pmnd.rs/react-three-fiber/api/canvas#tree-shaking */
import 'three'

const LoceC = function LoceCImpl(props: {}) {
  /** manual call to `invalidate()` is necessary since the enclosing `<R3F.Canvas>` could have set `frameloop` to `"demand"`. */
  const tr = useThree()
  const mg = (
    React.useMemo(() => {
      const mg = new THREE.BoxGeometry(1.8, 0.72, 0.70)
      return (mg)
    } , [] )
  )
  useFrame((state, delta) => {
    if (0) {
      // meshRef.current.rotation.x += delta
      // tr.invalidate()
    }
  })
  return (
    <group>
      <group>
        <mesh
          position={[0, 0, 0]}
          // scale={1.5}
          // onClick={(event) => {}}
          // onPointerOver={(event) => {}}
          // onPointerOut={(event) => {}}
          >
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </group>

      <group
        position={[53000, 2500, 153000]}
      >
      <group>
        <mesh
          position={[0, 0, 0]}
          >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </group>
      <group>
        <mesh
          position={[5, 0, 0]}
          >
          <primitive object={mg} attach="geometry" />
          <meshStandardMaterial color={'brown'} />
        </mesh>
      </group>
      </group>
      
      <mesh
          position={[0, 0, 0]}
      >
      <ByCoordTupleArrayGeometryC
      coords={(
        POLYLINE_AS_TRIANGLES((
          // [
          //   //
          //   [52998, 2495, 153000] ,
          //   [53002, 2495, 153000] ,
          //   [53002, 2495, 153030] ,
          //   [52998, 2495, 153030] ,
          // ]
          [
            [53000, 2500, 153000] ,
            [53002, 2500, 153000] ,
            [53002, 2500, 152997] ,
            [53000, 2500, 152997] ,
          ]
        ) , { close: true, })
      )}
      />
      <meshStandardMaterial color={'gray'} />
      </mesh>

      <mesh
          position={[0, 0, 0]}
      >
      <ByCoordTupleArrayGeometryC
      coords={(
        POLYLINE_AS_TRIANGLES([
          //
          [52998, 2499.905, 153000] ,
          [53002, 2499.905, 153000] ,
          [53002, 2499.905, 152300] ,
          [52998, 2499.905, 152300] ,
        ] , { close: true, })
      )}
      />
      <meshStandardMaterial color={'gray'} />
      </mesh>

    </group>
  )
}

export const ThreeReactJsNavigaDemoC = (
  describeComponent((
    function ThreeReactJsNavigaDemoCImpl()
    {
      ;

      const [camPropv, ] = (
        React.useState<Extract<React.ComponentProps<typeof Canvas>["camera"] , {}> >(() => {
          return {
            fov: 75,
            near: 0.1, far: 1000,
            /**
             * NOTE:
             * this is not quite `position`  like it seems -
             * this effectively doesn't seem like regular, common `position`
             * 
             */
            position: (
              [0, 0, 5.9]
            ),
          } ;
        })
      ) ;
      
      /**
       * to substitute `camera.position` which didn't seem to behave as expected.
       */
      const [camPosv, ] = (
        React.useState<readonly [number, number, number] >(() => {
          return [53000, 2501, 153000] as const ;
        })
      ) ;

      const c = (
        <Canvas
        /**
         * to avoid unnecessary repaints
         * we're tempted to set `frameloop="demand"`
         * 
         */
        frameloop='demand'
        camera={camPropv}
        >
        { (
          ((e: React.ReactElement) => {
            // e = (
            //   <group
            //   matrixAutoUpdate={false} /* https://threejs.org/docs/#manual/en/introduction/Matrix-transformations */
            //   matrix={[
            //     0.7, -0.7, 0, 0 ,
            //     0.7,  0.7, 0, 0 ,
            //     0  ,  0  , 1, 0 ,
            //     0  ,  0  , 0, 1 ,
            //   ]}
            //   >
            //     { e }
            //   </group>
            // )
            // e = (
            //   <group
            //   position={[53000, 3000, 153000]}
            //   >
            //     { e }
            //   </group>
            // )
            // e = (
            //   <group
            //   position={[0, 0, 5]}
            //   >
            //     { e }
            //   </group>
            // )
            e = (
              <group
              position={[-camPosv[0], -camPosv[1], -camPosv[2]]}
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
            <LoceC  />
            </>
          )
        ) }
        </Canvas>
      )

      return (
        <div>
        <div
        className=''
        children={c}
        style={{
          display: "flex",
          blockSize: `calc(min(50vh, 75vw) )`,
        }}
        />
        <p>
          Viewer Position: <code>{ `x=${camPosv[0] } z=${camPosv[2] } y=${camPosv[1]}` }</code>
        </p>
        </div>
      )
    }
  ))
)




