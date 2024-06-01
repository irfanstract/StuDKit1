





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

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs'; ;

import type {
  RecordValue,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






import * as React from "react" ;

import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  type MutableCSSProperties ,
  describeCallbackAssignedStyleProps ,
  describeByCssStringStyleProps ,
} from "studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;





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
        Object.assign(nd.style, (
          describeCallbackAssignedStyleProps((s) => {
            s.position = "fixed" ;
            s.top = 0 ;
            s.left = 0 ;
            s.width = `100vw` ;
            s.height = `100vh` ;
            s.overflow = "hidden" ;
            s.overflow = "clip" ;
            s.pointerEvents = "none" ;
          })
        ) ) ;
        return nd ;
      }
    })
  ) ;

}

export { OVCB, } ;








