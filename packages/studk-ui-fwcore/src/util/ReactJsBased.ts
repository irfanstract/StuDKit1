






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

export type {
  ReadonlyArrayOrSeq ,
} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;



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

import * as StudkReactJs from "studk-ui-fwcore/src/util/StudkReactJs.ts" ;

export {
  ReactSetStateActionHelpers ,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts" ;

import {
  //
  toComponentMountKey ,
  getFromClassNameProp ,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts" ;

export {
  toComponentMountKey ,
  getFromClassNameProp ,
} ;

;


;

export type {
  // ComponentProps ,
  /** @deprecated use qualified name at {@link StudkReactJs }. */
  ComponentPropsWithoutRef ,
} from "react" ;

export type {
  /** @deprecated use qualified name at {@link StudkReactJs }. */
  RequiredComponentProps ,
  /** @deprecated use qualified name at {@link StudkReactJs }. */
  ComponentProps ,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts" ;

import {
  //
  RequiredComponentProps ,
  ComponentProps ,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts" ;

import {
  //
  describeComponent ,
  withExtraSemanticProperties ,
  asHidden ,
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts" ;

import {
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

import {
} from 'studk-ui-fwcore/src/react-dom/helpers/WithAddedSemanticProperties.tsx'; ;

export {
  React ,
  StudkReactJs ,
} ;

export {
  //
  /** @deprecated use qualified name {@link StudkReactJs.describeComponent }. */
  describeComponent,
  /** @deprecated use qualified name {@link StudkReactJs.describeHtmlComponent }. */
  describeHtmlComponent ,
  getSpaceSeparatedClassNameList ,
  /** @deprecated use qualified name {@link StudkReactJs.withExtraSemanticProperties }. */
  withExtraSemanticProperties ,
  /** @deprecated use qualified name {@link StudkReactJs.asHidden }. */
  asHidden ,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts" ;

export {
  /** @deprecated use {@link getSpaceSeparatedClassNameList }. */
  mkClasses,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts"; ;


// import {
//   describeHeadlinedArticle ,
// } from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts"; ;

import {
  NativeButton ,
  Button ,
  ButtonC ,
  Span ,
  SpanC ,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts"; ;

export {
  SingleChildDiv ,
  NativeButton ,
  Button ,
  ButtonC ,
  Span ,
  SpanC ,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts" ;

export * from 'studk-ui-fwcore/src/dbce.tsx'; ;

// import Link from "next/link" ;



;

export {
  describeCallbackAssignedStyleProps,
} from "studk-ui-fwcore/src/util/StudkReactJs.ts"; ;

export * as StudkReactJsOvcUtil from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

;








;

export type {
  //
} ;













