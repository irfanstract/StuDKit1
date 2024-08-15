



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

import {
  ExemplaryOBJMC, 
  OBJMC,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshFromEnc.tsx" ;





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
      >

      <group
        position={[53000, 2500, 153000]}
      >
        <mesh
          position={[0, 0, 0]}
          >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </group>

      <group
        position={[53000, 2500, 153000]}
      >
        <mesh
          position={[5, 0, 0]}
          >
          <primitive object={mg} attach="geometry" />
          <meshStandardMaterial color={'brown'} />
        </mesh>
      </group>

      <group
        position={[53000, 2500, 153000]}
      >
        { <ExemplaryOBJMC/> }
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
            [53000.0, 2500, 153000] ,
            [53002.0, 2500, 153000] ,
            [53002.0, 2501, 152997] ,
            [53000.9, 2501, 152997] ,
          ]
        ) , { close: true, })
      )}
      attach="geometry"
      />
      <meshStandardMaterial color={'gray'} />
      </mesh>

      { null && (
      <mesh
          position={[0, 0, 0]}
      >
      <ByCoordTupleArrayGeometryC
      coords={(
        POLYLINE_AS_TRIANGLES([
          //
          [52998, 2499.905, 153000] ,
          [53002, 2499.905, 153000] ,
          [53002, 2499.905, 152915] ,
          [52998, 2499.905, 152915] ,
        ] , { close: true, })
      )}
      attach="geometry"
      />
      <meshStandardMaterial color={'gray'} />
      </mesh>
      ) }
      { (<OBJMC
        key={2}
        code={(
          util.stringLinesConcat(function* ()
          {
            yield ;
            yield `# ThreeJS's ObjLoader (apparently) always assign MeshPhongMaterial irrespective of what's in the OBJ file; ` ;
            yield `# .` ;
            yield `# in ThreeJS, coord 4 to 6 effectively (as effect of the chosen Material) dictates the annotated vertex's diffuse color ; ` ;
            yield `# a caveat is that the values are not the usual 0...25, but instead 'p'(s) (ie 0...1) .` ;
            yield `# https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L534 ` ;
            yield ;
            yield `# at least ThreeJS refuses to Add Object(s) unless we've begin with Directive(s) 'g' or 'o'. `;
            yield `# https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L54` ;
            yield `# ThreeJS refuses to display faces whose dir-ity is opposite to expected, so `;
            yield `# we need to work-around it by Double Definition With Opposite Direction. `
            yield ;
            yield ;
            yield ;
            yield ;
            yield `v   52998        2499.905 153100     0.49 0.50 0.50  ` ;
            yield `v         53002  2499.905 153100     0.49 0.50 0.50  ` ;
            yield `v   52995        2499.905 152923     0.53 0.55 0.55  ` ;
            yield `v         53002  2499.905 152923     0.53 0.55 0.55  ` ;
            yield `v   52998        2499.905 152860     0.49 0.50 0.50  ` ;
            yield `v         53002  2499.905 152860     0.49 0.50 0.50  ` ;
            yield `v   52998        2499.905 152815     0.55 0.57 0.57  ` ;
            yield `v         53002  2499.905 152815     0.55 0.57 0.57  ` ;
            yield `v   52998        2499.905 152715     0.50 0.50 0.50  ` ;
            yield `v         53002  2499.905 152715     0.50 0.50 0.50  ` ;
            yield ;
            yield `# at least ThreeJS refuses to Add Object(s) unless we've begin with any these Directive. `;
            yield `# https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L54` ;
            yield `# ThreeJS refuses to display faces whose dir-ity is opposite to expected, so `;
            yield `# we need to work-around it by Double Definition With Opposite Direction. `;
            yield `o oa9b30aa816d19270 `;
            yield `f  1  2  4  3` ;
            yield `f  2  1  3  4` ;
            yield `f  4  3  5  6` ;
            yield `f  3  4  6  5` ;
            yield `f  5  6  8  7` ;
            yield `f  6  5  7  8` ;
            yield ;

            ;
          } )
        )}
        />)}

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
      const [{ camPos: camPosv, }, update1 ] = (
        React.useState<{ readonly camPos: readonly [number, number, number], } >(() => {
          return {
            camPos: [53000, 2501, 152995],
          } as const ;
        })
      ) ;

      const c = (
        <Canvas
        /**
         * by default
         * `<Canvas>`(s) constantly redraw at SRR (Screen Refresh-Rate) irrespective of whether there's actually any changes,
         * so
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
            e = (
              <React.Suspense
              children={e}
              fallback={null}
              />
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

      const runCamShiftAction = function (...[v] : [value: number]) {
        update1(({ camPos: [x0, y0, z0,], ...etp }) => ({
          ...etp,
          camPos: [x0, y0, z0 + v ] ,
        }) )
      }
      const renderCamShiftBtn1 = function (...[v] : [value: number]) {
        return (
          <Button
          children={`SHFT ${v}`}
          onClick={() => (
            runCamShiftAction(-v)
          ) }
          />
        )
      }

      const mBtns = (
        <nav>
          <p>
            { renderCamShiftBtn1(-7.5) }
            { renderCamShiftBtn1(-1.5) }
            { renderCamShiftBtn1( 1.5) }
            { renderCamShiftBtn1( 7.5) }
          </p>
          <p>
            Viewer Position: <code>{ `x=${camPosv[0] } z=${camPosv[2] } y=${camPosv[1]}` }</code>
          </p>
        </nav>
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
        <div>
          { mBtns }
        </div>
        </div>
      )
    }
  ))
)




