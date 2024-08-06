



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
  describeThreeJsObjComponent ,
} from "studk-ui-encore/src/ThreeReactJsUi/DescribeMeshC.tsx"











export const ByCoordTupleArrayGeometryC = (
  describeThreeJsObjComponent((
    function ByCoordTupleArrayGeometryOuterC(props0 : (
      & React.ComponentProps<typeof ByCoordTupleArrayGeometryInnerC>
      & { dbflp ?: boolean }
    ))
    {
      const {
        coords ,
        dbflp = false ,
        ...etProps
      } = props0 ;
      return (
        <ByCoordTupleArrayGeometryInnerC
        coords={(
          dbflp ?
          [...coords , ...(coords.toReversed()) ]
          : coords
        )}
        {...etProps}
        />
      ) ;
    }
  ))
) ;

const ByCoordTupleArrayGeometryInnerC = (
  describeThreeJsObjComponent((
    function ByCoordTupleArrayGeometryInnerCImpl(props0 : (
      & { coords: readonly (readonly [number, number, number])[], }
      & Omit<ThreeElements["primitive"], "coords">
    ))
    {
      const {
        coords ,
        ...etProps
      } = props0 ;

      const gmb = (
        React.useMemo(() => {
          const gm = new THREE.BufferGeometry() ;
          return gm ;
        } , [])
      ) ;

      /**
       * trying to {@link gmb.setFromPoints} but
       * we needs to cache these.
       */
      const pta = (
        React.useMemo(() => (
          coords
          .map(([x, y, z]) => (
            new THREE.Vector3(x, y, z)
          ))
        ) , (
          // work-around
          coords.flatMap(e => [...e, ";"] as const )
        ) )
      ) ;
      {
        /** manual call to `invalidate()` is necessary since the enclosing `<R3F.Canvas>` could have set `frameloop` to `"demand"`. */
        const tr = useThree() ;

        React["useInsertionEffect"](() => {
          ;

          // gmb.setIndex([
          //   0, 1, 2,
          //   2, 3, 0,
          // ]) ;
          gmb.setFromPoints((
            pta
          )) ;
          tr.invalidate() ;

        } , [gmb, pta]) ;
      }

      return (
        <primitive
        // {...{ attach: "geometry" }}
        attach="geometry"
        {...etProps}
        object={gmb}
        />
      ) ;
    }
  ))
) ;









