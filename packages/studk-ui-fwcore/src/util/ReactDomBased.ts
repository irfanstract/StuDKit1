






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
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'; ;



// export {
//   util ,
//   random ,
// } ;

// export type {
//   //
//   AllOrNever1,
//   ArgsGetOptions ,
//   ArgsWithOptions, 
//   Extend,
//   OmitW,
//   PartializedPartially,
//   PickW,
// } ;

// export * from 'studk-fwcore/src/util/C1.ts'; ;


;






import * as React from "react" ;


import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

import {
  withExtraSemanticProperties ,
  asHidden ,
} from 'studk-ui-fwcore/src/react-dom/helpers/WithAddedSemanticProperties.tsx'; ;

// export {
//   //
//   React ,
//   describeComponent,
//   describeHtmlComponent ,
//   getSpaceSeparatedClassNameList ,
//   withExtraSemanticProperties ,
//   asHidden ,
// } ;

// export {
//   mkClasses,
// } from 'studk-ui/src/meta/react/dec.tsx'; ;


// import {
//   describeHeadlinedArticle ,
// } from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  NativeButton ,
  Button ,
  ButtonC ,
  Span ,
  SpanC ,
} from 'studk-ui-fwcore/src/dbce.tsx'; ;

export {
  SingleChildDiv ,
  NativeButton ,
  Button ,
  ButtonC ,
  Span ,
  SpanC ,
} ;

export * from 'studk-ui-fwcore/src/dbce.tsx'; ;

// import Link from "next/link" ;

export * from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;



import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui-fwcore/src/xt/summerhitsmedia-cssd.tsx'; ;

export {
  //
  describeCallbackAssignedStyleProps ,
} ;

export * from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

export * from "studk-ui-fwcore/src/dom/helpers/DOmOnScreenBoundingRectOfElement.ts" ;
export * from "studk-ui-fwcore/src/dom/helpers/DOmLocalBoundingRectOfElement.ts" ;

export {
  getEffectiveZoom ,
  analyseNativeElemtClientOffsets ,
  getMouseEvtClientOffset ,
  isDescendantOfOrItselfEffectivelyDisplayNone ,
  isNativeElementNotHidden ,
} from "studk-ui-fwcore/src/dom/helpers/DOmOnScreenPropertiesOfElementEfz.ts" ;








;

export type {
  //
} ;













