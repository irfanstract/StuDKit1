





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
} from '#UiFwCore/util/EWithOpt.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#UiFwCore/util/EWithOpt.ts'; ;

import type {
  ContinuousLinearRange ,
} from '#UiFwCore/util/ContinuousLinearRangeTs.ts'; ;

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
} from "#UiFwCore/xt/ovc-util.tsx" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

import {
  describeComponent,
} from '#UiFwCore/ReactComponentDef.tsx'; ;





;

import {
  doNativeCompDisplayedOffsetsAnalysis,
  useNativeCompDisplayedOffsetsAnalysis,
} from "#UiFwCore/xt/ReactJsHookGetComputedStyle102.tsx" ;

import {
  useExistingNativeCompBoundingBoxViaRef ,
  NCPSR ,
} from "#UiFwCore/xt/ReactJsHookFollowOtherCompComputedStyle103.tsx" ;

export {
  useExistingNativeCompBoundingBoxViaRef as useNativeCompPositionSyncRef ,
  /** @deprecated make the import direct to the source. */
  NCPSR ,
} ;



import {
  IRenderNativeElemOverlaySupported ,
  ElementHoveringHtmlC ,
} from 'studk-ui/src/templating/xst/ovcbMid.tsx';


export type {
  /** @deprecated */
  IRenderNativeElemOverlaySupported ,
} ;


;

export {
  /** @deprecated */
  ElementHoveringHtmlC ,
} ;

;









