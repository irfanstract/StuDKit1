



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
  animated ,
} from '@react-spring/three'

import {
  useAnimatedTuple3 ,
} from 'studk-ui-core-ovcstack/src/main/rspr3d.tsx'

import {
  ByCoordTupleArrayGeometryC ,
} from "studk-ui-encore/src/ThreeReactJsUi/xbp.tsx" 

import {
  POLYLINE_AS_TRIANGLES ,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshPrimitives.ts"

import {
  ExemplaryOBJMC, 
  OBJMC,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshFromEnc.tsx"

import {
  XTrC ,
} from "studk-ui-encore/src/ThreeReactJsUi/trc.tsx"

import {
  UNIQUES,
  formatByKeyedPointDictMeshObjFile1, 
  formatByPreSymbsKeyedPointDictMeshObjFile1,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshPrimitivesAsObjFile.ts"





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
          position={[5, 1, 0]}
          >
          <primitive object={mg} attach="geometry" />
          <meshStandardMaterial color={'brown'} />
        </mesh>
        <mesh
          position={[-5.7, 2, 0]}
          >
          <primitive object={mg} attach="geometry" />
          <meshStandardMaterial color={'blue'} />
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
      <group>
        <mesh>
          <ByCoordTupleArrayGeometryC
          coords={(
            POLYLINE_AS_TRIANGLES([
              //
              [52996, 2499.905, 153035] ,
              [53005, 2499.905, 153035] ,
              [53005, 2499.905, 152923] ,
              [52994, 2499.905, 152923] ,
            ] , { close: true, })
          )}
          attach="geometry"
          />
          <meshStandardMaterial color={'gray'} />
        </mesh>
        <mesh>
          <ByCoordTupleArrayGeometryC
          coords={(
            POLYLINE_AS_TRIANGLES([
              //
              [53005, 2499.905, 153035] ,
              [53096, 2499.905, 153035] ,
              [53094, 2499.905, 152923] ,
              [53005, 2499.905, 152923] ,
            ] , { close: true, })
          )}
          attach="geometry"
          />
          <meshStandardMaterial color={'green'} />
        </mesh>
        <mesh>
          <ByCoordTupleArrayGeometryC
          coords={(
            POLYLINE_AS_TRIANGLES([
              //
              [52005, 2499.905, 153035] ,
              [52996, 2499.905, 153035] ,
              [52994, 2499.905, 152923] ,
              [52005, 2499.905, 152923] ,
            ] , { close: true, })
          )}
          attach="geometry"
          />
          <meshStandardMaterial color={'green'} />
        </mesh>
      </group>
      { null && (<OBJMC
        key={2}
        code={(
          formatByPreSymbsKeyedPointDictMeshObjFile1(({ newSpclUniqueKey, }) => {
          ;
          const pts = {
            //

            /**
             * this (hypothetical) Geo data
             * 
             * we impose the notation `RD<i>YD<j>` (`RD` for "Road", `YD` for "Yard")
             * to name each of these locations.
             * 
             * we map Unit Length (ie `1`) to 1 Metre in the Story.
             * 
             * to keep numerical errors uniform
             * we offset (each of) these values with some large-enough integers
             * .
             * 
             */

            RD201YD201_AGrJ  : ` 52902                2499.905 153035     0.49 0.90 0.50  ` ,
            RD201YD201_AGrK  : ` 52996                2499.905 153035     0.49 0.90 0.50  ` ,
            RD201YD201_ASdA  : ` 52996                2499.905 153035     0.49 0.50 0.50  ` ,
            RD201YD201_ASdB  : `       53005          2499.905 153035     0.49 0.50 0.50  ` ,
            RD201YD201_AGrB  : `       53005          2499.905 153035     0.49 0.90 0.50  ` ,
            RD201YD201_AGrC  : `               53096  2499.905 153035     0.49 0.90 0.50  ` ,

            RD201YD202_AGrJ  : ` 52902                2499.905 152923     0.49 0.90 0.50  ` ,
            RD201YD202_AGrK  : ` 52994                2499.905 152923     0.49 0.90 0.50  ` ,
            RD201YD202_ASdA  : ` 52994                2499.905 152923     0.53 0.55 0.55  ` ,
            RD201YD202_ASdB  : `       53005          2499.905 152923     0.53 0.55 0.55  ` ,
            RD201YD202_AGrB  : `       53005          2499.905 152923     0.64 0.90 0.50  ` ,
            RD201YD202_AGrC  : `               53096  2499.905 152923     0.64 0.90 0.50  ` ,

            RD201YD203_ASdA  : ` 52996                2499.905 152860     0.49 0.50 0.50  ` ,
            RD201YD203_ASdB  : `       53005          2499.905 152860     0.49 0.50 0.50  ` ,
            RD201YD203_AGrB  : `       53005          2499.905 152860     0.49 0.90 0.50  ` ,
            RD201YD203_AGrC  : `               53096  2499.905 152860     0.49 0.90 0.50  ` ,

            RD201YD204_ASdA  : ` 52996                2499.905 152815     0.55 0.57 0.57  ` ,
            RD201YD204_ASdB  : `       53005          2499.905 152815     0.55 0.57 0.57  ` ,

            RD201YD205_ASdA  : ` 52996                2499.905 152715     0.50 0.50 0.50  ` ,
            RD201YD205_ASdB  : `       53005          2499.905 152715     0.50 0.50 0.50  ` ,


          } as const;
          const ptIdDIct = (
            UNIQUES(pts)
          ) ;
          return [pts , { mapVtxDataToString: c => c } , (
            ({ }) => {
              /**
               * at least ThreeJS refuses to Add Object(s) unless we've begin with any these Directive.
               * https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L54
               * ThreeJS refuses to display faces whose dir-ity is opposite to expected, so
               * we need to work-around it by Double Definition With Opposite Direction.
               */
              return [
                { ptIds: [
                  ptIdDIct.RD201YD201_AGrJ,
                  ptIdDIct.RD201YD201_AGrK ,
                  ptIdDIct.RD201YD202_AGrK ,
                  ptIdDIct.RD201YD202_AGrJ ,
                ] } ,
                { ptIds: [
                  ptIdDIct.RD201YD201_ASdA,
                  ptIdDIct.RD201YD201_ASdB ,
                  ptIdDIct.RD201YD202_ASdB ,
                  ptIdDIct.RD201YD202_ASdA ,
                ] } ,
                { ptIds: [
                  ptIdDIct.RD201YD201_AGrB,
                  ptIdDIct.RD201YD201_AGrC ,
                  ptIdDIct.RD201YD202_AGrC ,
                  ptIdDIct.RD201YD202_AGrB ,
                ] } ,

                { ptIds: [
                  ptIdDIct.RD201YD202_ASdA,
                  ptIdDIct.RD201YD202_ASdB ,
                  ptIdDIct.RD201YD203_ASdB ,
                  ptIdDIct.RD201YD203_ASdA ,
                ] } ,
                { ptIds: [
                  ptIdDIct.RD201YD202_AGrC ,
                  ptIdDIct.RD201YD202_AGrB ,
                  ptIdDIct.RD201YD203_AGrB,
                  ptIdDIct.RD201YD203_AGrC ,
                ] } ,
                
                { ptIds: [
                  ptIdDIct.RD201YD203_ASdB ,
                  ptIdDIct.RD201YD203_ASdA ,
                  ptIdDIct.RD201YD204_ASdA ,
                  ptIdDIct.RD201YD204_ASdB ,
                ] } ,
              ] ;
            }
          )]
          })
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

      return (
        <div
        key={2}
        >
        <XTrC
        initialCamPos={[52998.15, 2501, 152995]}
        >
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <LoceC  />
        </XTrC>
        <div>
          {null && (<pre>
            { (
              formatByKeyedPointDictMeshObjFile1({
                pt001: ` 0 0 3 ` ,
                pt002: ` 3 0 0 ` ,
                pt003: ` 2 0 0 ` ,
                pt004: ` 0 0 2 ` ,
                pt005: ` 0 0 1 ` ,
              } , {
                mapVtxDataToString: (vle) => (vle) ,
              } , ({ cornerPtIds: vtcDict, }) => {
                return (
                  [
                    { ptIds: [vtcDict.pt002, vtcDict.pt003, ] } ,
                  ]
                ) ;
              } )
            ) }
          </pre>)}
        </div>
        </div>
      )
    }
  ))
)




