



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
  describeThreeJsObjComponent ,
} from "studk-ui-encore/src/ThreeReactJsUi/DescribeMeshC.tsx"

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

export const TrnvLoceUniC = describeThreeJsObjComponent(function TrnvLoceUniCImpl(props: {})
{

  function xtCoordObj(...[pt] : [import("studk-video-fwcore/src/LinearTransforms.mjs").Point3D] )
  {
    return [pt.x, pt.y, pt.z] as const
  }

  function jsxMesh1(...[{ pgonPts, color, }] : (
    ArgsWithOptions<[], {
      pgonPts: readonly (readonly [number, number, number])[],
      color: import("csstype").Property.Color ,
    }>
  ))
  {
    return (
      <mesh>
        <ByCoordTupleArrayGeometryC
        coords={pgonPts}
        attach="geometry"
        />
        <meshStandardMaterial color={color} />
      </mesh>
    )
  }

  const mg = (
    React.useMemo(() => {
      const mg = new THREE.BoxGeometry(1.8, 0.72, 0.70)
      return (mg)
    } , [] )
  )

  return (
    <group>

      <group
        position={[53000, 2500, 153000]}
      >
        { <ExemplaryOBJMC/> }
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

      </group>
  
      <group>
        { jsxMesh1({
          //
          pgonPts: (
            POLYLINE_AS_TRIANGLES([
              //
              xtCoordObj({ z: 153035, x: 52905, y: 2499.795, }) ,
              xtCoordObj({ z: 153035, x: 52986, y: 2499.795, }) ,
              xtCoordObj({ z: 153035, x: 53096, y: 2499.795, }) ,
              xtCoordObj({ z: 152703, x: 53094, y: 2499.795, }) ,
              xtCoordObj({ z: 152703, x: 52984, y: 2499.795, }) ,
              xtCoordObj({ z: 152703, x: 52905, y: 2499.795, }) ,
            ] , { close: true, })
          ) ,
          color: "#00C000" ,
        }) }
        { jsxMesh1({
          //
          pgonPts: (
            POLYLINE_AS_TRIANGLES([
              //
              xtCoordObj({ z: 152735, x: 52005, y: 2499.795, }) ,
              xtCoordObj({ z: 152735, x: 53996, y: 2499.795, }) ,
              xtCoordObj({ z: 152403, x: 53994, y: 2499.795, }) ,
              xtCoordObj({ z: 152403, x: 52005, y: 2499.795, }) ,
            ] , { close: true, })
          ) ,
          color: "#00C000" ,
        }) }
      </group>
      <group>
        { jsxMesh1({
          //
          pgonPts: (
            POLYLINE_AS_TRIANGLES([
              //
              xtCoordObj({ z: 153035, x: 52996, y: 2499.905, }) ,
              xtCoordObj({ z: 153035, x: 53005, y: 2499.905, }) ,
              xtCoordObj({ z: 152903, x: 53005, y: 2499.905, }) ,
              xtCoordObj({ z: 152903, x: 52994, y: 2499.905, }) ,
            ] , { close: true, })
          ) ,
          color: "gray" ,
        }) }
        { jsxMesh1({
          //
          pgonPts: (
            POLYLINE_AS_TRIANGLES([
              //
              xtCoordObj({ z: 153035, x: 53000 + -0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 153035, x: 53000 +  0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 152903, x: 53000 +  0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 152903, x: 53000 + -0.095, y: 2499.908, }) ,
            ] , { close: true, })
          ) ,
          color: "yellow" ,
        }) }
        { jsxMesh1({
          //
          pgonPts: (
            POLYLINE_AS_TRIANGLES([
              //
              xtCoordObj({ z: 152905, x: 52996, y: 2499.905, }) ,
              xtCoordObj({ z: 152905, x: 53005, y: 2499.905, }) ,
              xtCoordObj({ z: 152803, x: 53005, y: 2499.905, }) ,
              xtCoordObj({ z: 152803, x: 52994, y: 2499.905, }) ,
            ] , { close: true, })
          ) ,
          color: "gray" ,
        }) }
        { jsxMesh1({
          //
          pgonPts: (
            POLYLINE_AS_TRIANGLES([
              //
              xtCoordObj({ z: 152905, x: 53000 + -0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 152905, x: 53000 +  0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 152803, x: 53000 +  0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 152803, x: 53000 + -0.095, y: 2499.908, }) ,
            ] , { close: true, })
          ) ,
          color: "yellow" ,
        }) }
        { jsxMesh1({
          //
          pgonPts: (
            POLYLINE_AS_TRIANGLES([
              //
              xtCoordObj({ z: 152803, x: 52996, y: 2499.905, }) ,
              xtCoordObj({ z: 152803, x: 53005, y: 2499.905, }) ,
              xtCoordObj({ z: 152603, x: 53005, y: 2499.905, }) ,
              xtCoordObj({ z: 152603, x: 52994, y: 2499.905, }) ,
            ] , { close: true, })
          ) ,
          color: "gray" ,
        }) }
        { jsxMesh1({
          //
          pgonPts: (
            POLYLINE_AS_TRIANGLES([
              //
              xtCoordObj({ z: 152803, x: 53000 + -0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 152803, x: 53000 +  0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 152603, x: 53000 +  0.095, y: 2499.908, }) ,
              xtCoordObj({ z: 152603, x: 53000 + -0.095, y: 2499.908, }) ,
            ] , { close: true, })
          ) ,
          color: "yellow" ,
        }) }
      </group>
      <group>
      </group>

    </group>
  )
})








