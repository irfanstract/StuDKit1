



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
  POLYLINE_AS_TRIANGLES ,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshPrimitives.ts"

import {
  describeThreeJsObjComponent ,
} from "studk-ui-encore/src/ThreeReactJsUi/DescribeMeshC.tsx"

import {
  ByCoordTupleArrayGeometryC ,
} from "studk-ui-encore/src/ThreeReactJsUi/xbp.tsx" 

const Box = (
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

const HovAcIbleC = (
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

import * as POE1 from "studk-ui-encore/src/ThreeReactJsUi/PolygonalOrthoExpansion1.tsx"






/* https://docs.pmnd.rs/react-three-fiber/api/canvas#tree-shaking */
import 'three'

export const TArmsDemoC = (
  describeComponent((
    function TArmsDemoCImpl() {

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

      const ambientLights = (
        <>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        </>
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
            return e
          } )(
            <>
            { ambientLights }
            <PReformableTriangularC />
            </>
          )
        ) }
        </Canvas>
      )

      const c2 = (
        <Canvas
        key={3}
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
            { ambientLights }
            <PEdgesC />
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
              contain: `layout size`,
            }}
            />
          )
        }
      )

      return (
        <div
        style={{
          display: "grid",
          gridTemplate: `
          "c1 c2"
          "c3 c4"
          `,
        }}
        >
          { renderSpclCont(c1) }
          { renderSpclCont(c2) }
        </div>
      )
    }
  ))
)

// import {
//   Matrix3,
//   Matrix4,
//   matrixAssign,
// } from 'studk-simulations-commons/src/LinearMap1.mjs'
// import {
//   LinTrCoords3,
//   linTrFromTranslateCoord3Matr, 
//   linTrTransformedPosition3DMat,
// } from "studk-video-fwcore/src/LinearTransforms.mjs"

import {
  XRescatterablePointsReact ,
} from "studk-ui-encore/src/StI3dPresenters/rescatterableptx.tsx"

const {
  PReformableTriangularC ,
  PEdgesC ,
} = (() => {
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
  return ({
    //

    PReformableTriangularC : describeThreeJsObjComponent((
      function PEdgeCImpl()
      {

        const {
          mKey ,
          p1Pos ,
          p2Pos ,
          p3Pos ,
          SCATTER_EM ,
        } = XRescatterablePointsReact.useReScatterableFor3()

        return (
          <group
          key={mKey }
          onClick={(event) => SCATTER_EM() }
          >
              { (
                [
                  p1Pos ,
                  p2Pos ,
                  p3Pos ,
                ]
                .map((ptPos, i) => (
                  <SpclCtrlPointC
                  key={`ctrl pt ${i}`}
                  position={ptPos}
                  />
                ))
              ) }
              <mesh>
                <ByCoordTupleArrayGeometryC
                attach="geometry"
                coords={(
                  POLYLINE_AS_TRIANGLES((() => {
                    const d = [
                      [p1Pos[0], p1Pos[1], -3.8, ] as const ,
                      [p2Pos[0], p2Pos[1], -3.8, ] as const ,
                      [p3Pos[0], p3Pos[1], -3.8, ] as const ,
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
    )) ,

    PEdgesC : describeThreeJsObjComponent((
      function PEdgeCImpl()
      {
        ;
        const drawCtrlPoint = (
          function (...[[p1Pos, p2Pos]] : [readonly [POE1.PTCOORD3D, POE1.PTCOORD3D] ] )
          {
            return (
              <mesh>
                <ByCoordTupleArrayGeometryC
                key={2}
                attach="geometry"
                coords={(
                  POLYLINE_AS_TRIANGLES((() => {
                    const {
                      strkeRelativePosL ,
                      strkeRelativePosR ,
                    } = POE1.APPLY_NRMMAT_BRUSHEDGE_ALONG_BETWEEN_TWO([
                      // p1Pos, p2Pos ,
                      [p1Pos[0], p1Pos[1], 0] as const ,
                      [p2Pos[0], p2Pos[1], 0] as const ,
                    ] , 0.1525 )
                    const d = [
                      POE1.PLUS_TWO(p1Pos , strkeRelativePosR ) ,
                      POE1.PLUS_TWO(p1Pos , strkeRelativePosL ) ,
                      POE1.PLUS_TWO(p2Pos , strkeRelativePosL ) ,
                      POE1.PLUS_TWO(p2Pos , strkeRelativePosR ) ,
                    ]
                    return [...d, ...d.toReversed() ]
                  })() , { close: true, } )
                )}
                />
                <meshStandardMaterial color={"blue"} />
              </mesh>
            )
          }
        )

        {

        const {
          mKey ,
          p1Pos ,
          p2Pos ,
          p3Pos ,
          SCATTER_EM ,
          etc: {
            p1Mat ,
            p2Mat ,
            p3Mat ,
          } ,
        } = XRescatterablePointsReact.useReScatterableFor3()

        const mainG = (
          <group
          onClick={(event) => SCATTER_EM() }
          >
              { drawCtrlPoint([p1Pos, p2Pos]) }
              { drawCtrlPoint([p2Pos, p3Pos]) }
              { (
                [
                  p1Pos ,
                  p2Pos ,
                  p3Pos ,
                ]
                .map((ptPos, i) => (
                  <SpclCtrlPointC
                  key={`ctrl pt ${i}`}
                  position={ptPos}
                  />
                ))
              ) }
          </group>
        )
        return (
          <React.Fragment
          key={mKey }
          children={mainG }
          />
        )
        ;}
      }
    )) ,

  } as const)
})()




