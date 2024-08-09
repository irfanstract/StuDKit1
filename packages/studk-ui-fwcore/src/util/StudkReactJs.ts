






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

export {} from 'studk-util/src/utilityTypeDefs/OITF.mts'; ;
export * from 'studk-util/src/utilityTypeDefs/DictRecordEitherPropertyOrExtends.mts'; ;
export * from 'studk-util/src/utilityTypeDefs/DictRecordKeyedPick.mts'; ;
// export * from 'studk-util/src/utilityTypeDefs/SpecialiseW.mts'; ;
export {
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mts'; ;



;






;

import {
  //
  useTuple ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseVectorOrTuple.ts" ;

export {
  //
  useTuple ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseVectorOrTuple.ts" ;

export * from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

import * as React from "react" ;

import {
  useMemo,
  useCallback,
  useState ,
  useReducer ,
  useLayoutEffect,
  useEffect ,
} from "react" ;

import {
  //

  ReactSetStateActionHelpers ,

} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

export {
  //

  //
  useCallback,
  useMemo ,

  //
  useState ,
  ReactSetStateActionHelpers ,
  useReducer,

  //
  useEffect ,
  useLayoutEffect ,

} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

import {
  //
  OptionallyExternedState ,
} from "studk-ui-fwcore/src/reactjs/helpers/OptionallyExternedSetStateHook.tsx" ;

export {
  OptionallyExternedState ,
} ;

import {
  //
  toComponentMountKey ,
  getFromClassNameProp ,
} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

export {
  //
  toComponentMountKey ,
  getFromClassNameProp ,

} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

/**
 * WIP
 * 
 * @deprecated
 * 
 */
export const ItemC = (
  "li"
) ;

/**
 * WIP .
 * when the enclosing component were a {@link customElements *custom element*},
 * render the element's payload
 * 
 * @deprecated
 * 
 */
export const AppliedComponentPayloadE = (
  "slot" satisfies keyof React.JSX.IntrinsicElements
) ;

export {
  //
  useRefreshedCallback ,
} from "studk-ui-fwcore/src/util/StudkReactJsRefreshedCallback.tsx" ;

;


;

export type {
  // ComponentProps ,
  /** @deprecated */
  ComponentPropsWithoutRef ,
} from "react" ;

import {
  //
  RequiredComponentProps ,
  ComponentProps ,
} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

export type {
  //
  RequiredComponentProps ,
  ComponentProps ,
} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

export {
  //
  useEventDispatchCallback ,

} from "studk-ui-fwcore/src/util/StudkReactJsxEventListenerDispatchUtils.tsx" ;

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

export {
  //
  describeComponent,
} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

export {
  //
  describeHtmlComponent ,
  getSpaceSeparatedClassNameList ,
  withExtraSemanticProperties ,
  asHidden ,
} ;

export {
  /* wanted to delete this re-export but can't do it... chances are some things refer to this re-export by name */
  /** @deprecated use {@link getSpaceSeparatedClassNameList } instead. */
  mkClasses,
} from 'studk-ui/src/meta/react/dec.tsx'; ;


// import {
//   describeHeadlinedArticle ,
// } from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  NativeButton ,
  Button ,
  ButtonC ,
  Span ,
  SpanC ,
} from 'studk-ui-fwcore/src/dbce.tsx'; ;

export {
  // SingleChildDiv ,
  NativeButton ,
  /** @deprecated use {@link ButtonC } instead. */
  Button ,
  ButtonC ,
  /** @deprecated use {@link SpanC } instead. */
  Span ,
  SpanC ,
} ;

export {
  /** @deprecated this is a WIP. */
  SingleChildDiv,

  // @ts-ignore
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

export * from 'studk-ui-fwcore/src/dbce.tsx'; ;

// import Link from "next/link" ;



;

export {
  describeCallbackAssignedStyleProps,
} from 'studk-ui-fwcore/src/xt/summerhitsmedia-cssd.tsx'; ;

;








;

export type {
  //
} ;













