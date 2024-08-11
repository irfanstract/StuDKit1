



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
  LINE_STROKED, 
} from 'studk-ui-encore/src/ThreeReactJsUi/PolygonalOrthoExpansionEncore.tsx';

import {
  sprungThreeElements,
  useThreeJsSpring,
  SupposeControlledForcedConstantRedrawC,
} from 'studk-ui-encore/src/ThreeReactJsUi/TrA.tsx';

import {
  Box ,
  HovAcIbleC ,
} from "studk-ui-encore/src/ThreeReactJsUi/CDE.tsx"

import * as POE1 from "studk-ui-encore/src/ThreeReactJsUi/PolygonalOrthoExpansion1.tsx"






/* https://docs.pmnd.rs/react-three-fiber/api/canvas#tree-shaking */
import 'three'

export const TArmsDemoC = (
  describeComponent((
    function TArmsDemoCImpl() {

      const [isTrIng, startTransition] = React.useTransition()

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

      const [spnA, setSpnA] = React.useState<number>(() => 0 )
      const { scale: spnAAnimated, } = useThreeJsSpring({ scale: spnA, })

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
              <sprungThreeElements.group
              rotation-y={spnAAnimated }
              children={e}
              />
            )
            e = (
              <group scale={2 ** -2.5} children={e} />
            )
            return e
          } )(
            <>
            { ambientLights }
            <PReformableTriangularC />
            </>
          )
        ) }
        <SupposeControlledForcedConstantRedrawC
        isInTopicallyNeglectibleState={(
          () => (spnAAnimated.isAnimating === false )
        ) }
        />
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
              <sprungThreeElements.group
              rotation-y={spnAAnimated }
              children={e}
              />
            )
            e = (
              <group scale={2 ** -2.5} children={e} />
            )
            // e = (
            //   <group
            //   children={e}
            //   onPointerDown={e => setSpnA(() => Math.PI ) }
            //   onPointerUp={e => setSpnA(() => 0.00 ) }
            //   />
            // )
            return e
          } )(
            <>
            { ambientLights }
            <PEdgesC />
            </>
          )
        ) }
        <SupposeControlledForcedConstantRedrawC
        isInTopicallyNeglectibleState={(
          () => (spnAAnimated.isAnimating === false )
        ) }
        />
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

      const demoItems = (
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

      const ctrls1 = (
        <nav>
          <Button
          onClick={e => { setSpnA(v0 => (v0 + (0.225 * Math.PI ) ) ) }}
          >
            Rotate
          </Button>
          <Button
          onClick={async (e) => {
            flushSync(() => {
              setSpnA(v0 => ((-2 * (2 * Math.PI)) + (v0 % (2 * Math.PI ) ) ) ) ;
            }) ;
            (
              await new Promise<void>(r => requestAnimationFrame(() => r() ) )
              ,
              await new Promise<void>(r => setTimeout(() => r(), 50 ) )
            ) ;
            startTransition(() => {
              setSpnA(0 ) ;
            }) ;
          }}
          >
            Reset Rotation
          </Button>
        </nav>
      )
      
      return (
        <div
        >
          { demoItems }
          { ctrls1 }
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

const renderCtrlPoints = (
  function (...[pts] : [readonly POE1.PTCOORD3D[] ] )
  {
    return (
      <>
      { (
        pts
        .map((ptPos, i) => (
          <SpclCtrlPointC
          key={`ctrl pt ${i}`}
          position={ptPos}
          />
        ))
      ) }
      </>
    )
  }
)

const {
  PReformableTriangularC ,
} = (() => {
  return {
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
                renderCtrlPoints([
                  p1Pos ,
                  p2Pos ,
                  p3Pos ,
                ])
              ) }
              <mesh>
                <ByCoordTupleArrayGeometryC
                attach="geometry"
                coords={(
                  POLYLINE_AS_TRIANGLES((() => {
                    const d = [
                      p1Pos ,
                      p2Pos ,
                      p3Pos ,
                    ] satisfies POE1.PTCOORD3D[]
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

  }
} )() ;

const {
  PEdgesC ,
} = (() => {

  /**
   * Featured Key Drive Segment
   */
  function DSe(props : { readonly [k in keyof { p1Pos, p2Pos } ] -?: POE1.PTCOORD3D } )
  {
    const { p1Pos, p2Pos, } = props
    ;
    return (
      <mesh>
        <ByCoordTupleArrayGeometryC
        key={3}
        attach="geometry"
        coords={(
          LINE_STROKED([p1Pos, p2Pos] , { strokeWidth: [0.2025, 0.2725], } )
        )}
        />
        <meshStandardMaterial color={"#FFC0C0"} />
      </mesh>
    )
  }
  /**
   * Featured Key Drive-Joining Segment
   */
  function JSe(props : { readonly [k in keyof { centralPos } ] -?: POE1.PTCOORD3D } )
  {
    ;
    const { centralPos: p2Pos, } = props
    ;
    return (
      <group
      position={p2Pos}
      >
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5 ]} />
          <meshStandardMaterial color={'#000000'} />
        </mesh>
      </group>
    )
  }

  return ({
    //

    PEdgesC : describeThreeJsObjComponent((
      function PEdgeCImpl()
      {
        ;
        // const renderFeaturedKeyDriveSegment1 = (
        //   function (...[[p1Pos, p2Pos]] : [readonly [POE1.PTCOORD3D, POE1.PTCOORD3D] ] )
        //   {
        //     return (
        //       <DSe
        //       {...{ p1Pos, p2Pos, }}
        //       />
        //     )
        //   }
        // )

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

        const kdg = (
          (() => {
            ;

            const keyDriveG1 = (
              <DSe
              p1Pos={p1Pos}
              p2Pos={p2Pos}
              />
            )
            const joiningG1With2 = (
              <JSe centralPos={p2Pos} />
            )
            const keyDriveG2 = (
              <DSe
              p1Pos={p2Pos}
              p2Pos={p3Pos}
              />
            )
    
            return (
              <group>
                { keyDriveG1 }
                { joiningG1With2 }
                { keyDriveG2 }
              </group>
            )

            // const pts = [
            //   p1Pos ,
            //   p2Pos ,
            //   p3Pos ,
            //   [-2, -2, -2] as const ,
            //   [-12, 2.25, 1.5] as const ,
            // ]

            // interface S0 { i: number, r: React.ReactElement, }
            // interface S1 { i0: number, i1: number, r: React.ReactElement, }

            // return (
            //   <group>
            //   { (
            //     util.Immutable.Seq((
            //       util.unfoldConjPro({
            //         digest: ({ i, } : S0) => (
            //           0
            //         ) ,
            //       })
            //     ))
            //   ) }
            //   </group>
            // )
          })()
        )

        const mainG = (
          <group
          onClick={(event) => SCATTER_EM() }
          >
              <group>
                { kdg }
              </group>
              { (
                renderCtrlPoints([
                  p1Pos ,
                  p2Pos ,
                  p3Pos ,
                ])
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




