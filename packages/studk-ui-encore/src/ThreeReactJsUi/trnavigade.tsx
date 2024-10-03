



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

import {
  TrnvLoceUniC ,
} from "studk-ui-encore/src/ThreeReactJsUi/TrnvLoceUni1.tsx" 





/* https://docs.pmnd.rs/react-three-fiber/api/canvas#tree-shaking */
import 'three'

const LoceC = function LoceCImpl(props: {})
{
  /** manual call to `invalidate()` is necessary since the enclosing `<R3F.Canvas>` could have set `frameloop` to `"demand"`. */
  const tr = useThree()

  function xtCoordObj(...[pt] : [import("studk-video-fwcore/src/LinearTransforms.mjs").Point3D] )
  {
    return [pt.x, pt.y, pt.z] as const
  }

  function jsxMesh1(...[{ pgonPts, color, }] : (
    ArgsWithOptions<[], {
      pgonPts: readonly (readonly [number, number, number])[],
      color: Required<React.CSSProperties>["color"] ,
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

      { <TrnvLoceUniC /> }

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




