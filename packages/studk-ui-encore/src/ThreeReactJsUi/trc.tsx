



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

const XTrC = (
  describeComponent((
    function XTrCImpl({
      children ,
      initialCamPos = [52999.5, 2501, 152995] ,
    } : React.PropsWithChildren<{ initialCamPos ?: readonly [number, number, number], }>)
    {
      ;

      const [camPropv, ] = (
        React.useState<Extract<React.ComponentProps<typeof Canvas>["camera"] , {}> >(() => {
          return {
            fov:  10.95,
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
            camPos: initialCamPos,
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
              <XCmC
              children={e}
              pos={camPosv}
              />
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
            { children }
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
        <div>
        <nav>
          <p
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
          >
            { renderCamShiftBtn1(-40.5) }
            { renderCamShiftBtn1(-22.5) }
            {/* { renderCamShiftBtn1(-12.5) } */}
            { renderCamShiftBtn1(- 7.5) }
            { renderCamShiftBtn1(- 2.5) }
            <br />
            { renderCamShiftBtn1(  2.5) }
            { renderCamShiftBtn1(  7.5) }
            {/* { renderCamShiftBtn1( 12.5) } */}
            { renderCamShiftBtn1( 22.5) }
            { renderCamShiftBtn1( 40.5) }
            <br />
          </p>
          <p>
            { renderCamShiftBtn1(-37.5) }
            { renderCamShiftBtn1( 37.5) }
          </p>
        </nav>
        <p>
          Viewer Position: <code>{ `x=${camPosv[0] } z=${camPosv[2] } y=${camPosv[1]}` }</code>
        </p>
        </div>
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

const XCmC = (
  describeComponent((
    function XCmrCImpl1({
      children ,
      pos: camPosv ,
    } : React.PropsWithChildren<(
      & { pos: readonly [number, number, number] }
    )>)
    {
      ;

      /** manual call to `invalidate()` is necessary since the enclosing `<R3F.Canvas>` could have set `frameloop` to `"demand"`. */
      const tr = useThree()

      const camPosVAnmtd = (
        useAnimatedTuple3(camPosv)
      ) ;

      useFrame(() => {
        if (camPosVAnmtd.some(e => e.isAnimating)) {
          tr.invalidate()
        }
      })

      let e : React.ReactElement = <>{ children }</>
      void (() => {
        switch (1 as number) {
          case 0 :
            e = (
              <animated.group
              position={[-camPosv[0], -camPosv[1], -camPosv[2]]}
              children={e}
              />
            )
            return
          case 1 :
            e = (
              <animated.group
              scale={-1}
              children={e}
              />
            )
            e = (
              <animated.group
              position-x={camPosVAnmtd[0] }
              position-z={camPosVAnmtd[2] }
              position-y={camPosVAnmtd[1] }
              children={e}
              />
            )
            e = (
              <animated.group
              scale={-1}
              children={e}
              />
            )
        }
      })()

      return e ;
    }
  ))
)

export {
  /**
   * WIP/TBD
   * @deprecated this is a WIP/TBD
   */
  XTrC ,
}







;