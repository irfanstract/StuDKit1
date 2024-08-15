









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
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






;

import * as React from "react" ;






import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;

// import {
//   useIntervalEffect ,
//   useIntervalScan ,
//   useMutableRefObjState ,
//   useRefState ,
// } from "studk-ui/src/meta/react-dom/ovc-util.tsx" ;

// import {
//   WithElementBoundingBoxHighlightingC,
//   WithOvcLevelleRefGoodiesC,
//   WithOverlaySupportC,
// } from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;

export default function App()
{
  ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          a page with no demo
        </span>
      ) ,
      children: (
        <div>
          <p>
            a page with no demo.
          </p>
        </div>
      ) ,
    })
  ) ;
} ;






