



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
  useLoader ,
} from '@react-three/fiber'

import {
  OBJLoader ,
} from "three/examples/jsm/loaders/OBJLoader.js" ;










export const OBJMC = (
  describeComponent((
    function OBJMCImpl1({
      code ,
      ...etProps
    } : (
      & { code: string, }
      & Omit<ThreeElements["primitive"], "coords">
    ))
    {
      ;

      const m = (
        // useLoader(OBJLoader, `data:text/plain,` + encodeURIComponent(code) )
        React.useMemo(function () {
          const o = (
            new OBJLoader()
            .parse(code)
          ) ;
          return o ;
        } , [code])
      ) ;

      return (
        <primitive
        key={code}
        object={m}
        {...etProps}
        />
      ) ;
    }
  ))
) ;

/**
 * WIP/TBD
 * 
 * @deprecated
 */
export const ExemplaryOBJMC = (
  describeComponent((
    function ExemplaryOBJMCImpl({
      ...etProps
    } : (
      & Omit<ThreeElements["primitive"], "coords">
    ))
    {
      return (
        <OBJMC
        key={3}
        code={(
          util.stringLinesConcat(function* ()
          {
            yield ;
            yield `v   0  -3   0` ;
            yield `v   0   3   0` ;
            yield `v   3   3   0` ;
            yield `v   3   0   0` ;
            yield ;
            yield `# at least ThreeJS refuses to Add Object(s) unless we've begin with any these Directive. `;
            yield `# https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L54` ;
            yield `o oa9b30aa816d19270 `;
            yield ;
            yield `# ThreeJS refuses to display faces whose dir-ity is opposite to expected, so `;
            yield `# we need to work-around it by Double Definition With Opposite Direction. `;
            yield `f  1  2  3  4` ;
            yield `f  1  4  3  2` ;
            yield ;

            ;
          } )
        )}
        {...etProps}
        />
      ) ;
    }
  ))
) ;

// export const renderOBjCode = (
//   function (...[c] : [code: string])
//   {
//     return (
//       <OBJMC
//       code={c}
//       />
//     ) ;
//   }
// ) ;












