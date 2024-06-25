





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

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs'; ;

const TIMEOUT = (
  (tMillis: number) => (
    new Promise<void>(resume => (
      setTimeout(resume, tMillis)
    ))
  )
) ;


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;






import * as React from "react" ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;





;

import {
  doNativeCompDisplayedOffsetsAnalysis,
  useNativeCompDisplayedOffsetsAnalysis,
} from "studk-ui-fwcore/src/xt/ReactJsHookGetComputedStyle102.tsx" ;

import type {
  //
  NcpSupportedElem ,
} from "studk-dom-util/src/xst/DOmRenderedClientOffsets101" ;

import {
  useExistingNativeCompBoundingBoxViaRef ,
  ToNativeDomElementSyncing ,
  NCPSR ,
} from "studk-ui-fwcore/src/xt/ReactJsHookFollowOtherCompComputedStyle103.tsx" ;

export {
  useExistingNativeCompBoundingBoxViaRef ,
  /** @deprecated alias of {@link useExistingNativeCompBoundingBoxViaRef} */
  useExistingNativeCompBoundingBoxViaRef as useNativeCompPositionSyncRef ,
  NCPSR ,
  /** @deprecated import from the srce directly */
  ToNativeDomElementSyncing ,
} ;

export type {
  // /** @deprecated use direct import from `studk-ui/src/meta/dom/computedstyles1.tsx`. */
  NcpSupportedElem ,
} ;







