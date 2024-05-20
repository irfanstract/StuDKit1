





/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
  ObjectFromEntry, 
  RecordValue,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;

import type {
  ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;






import * as React from "react" ;

import * as ReactDOM from "react-dom" ;

import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;





;

namespace OVCB { ; }

namespace OVCB
{

  /** TODO/WIP */
  export function getMainNode() : HTMLElement | SVGGElement ;
  export function getMainNode()
  {
    return (
      GMN_IMPL()
    ) ;
  }

  const GMN_IMPL = (
    util.L.once(() => {
      ;
      // return (
      //   document.querySelector("#studk-ui-ovcb-main")!
      // ) ;
      {
        const nd = document.createElement("div") ;
        document.body.appendChild(nd) ;
        // Object.assign(nd.style, {
        //   position: "fixed",
        //   top: 0 ,
        //   left: 0 ,
        //   width: `100vw`,
        //   height: `100vh`,
        // } satisfies React.CSSProperties ) ;
        nd.setAttribute("style", (
          util.stringLinesConcat(function* (): Generator<(React.CSSProperties extends infer CSSP ? RecordValue<{ [k in Extract<keyof CSSP, string>]: `${k}: ${Extract<CSSP[k], string | number | bigint | boolean | null | undefined>} ;` }> : never) , void> {
            // yield* [] ;
            yield `position: fixed ;` ;
            yield `top: 0 ;` ;
            yield `left: 0 ;` ;
            yield `width: 100vw ;` ;
            yield `height: 100vh ;` ;
            yield `overflow: hidden ;` ;
            yield `overflow: clip ;` ;
            yield `pointer-events: none ;` ;
          })
        )) ;
        return nd ;
      }
    })
  ) ;

}

export { OVCB, } ;








