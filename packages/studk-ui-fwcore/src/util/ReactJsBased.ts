






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

export {
  ReactSetStateActionHelpers ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseReactSetStateAction.tsx" ;

const toComponentMountKey = (
  (value: (JSX.IntrinsicElements["input"] )["value"] ) => (
    ((): string => {
      switch (typeof value) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "undefined":
          return String(value) ;
      }
      return JSON.stringify(value) ;
    })()
  )
) ;

export {
  toComponentMountKey ,
} ;

export const getFromClassNameProp = (

  function (...[classNameProp = ``] : [classNamePropValue: string])
  : readonly string[]
  {
    return (
      classNameProp.split(/\s+/)
      .filter(e => e.length )
    ) ;
  }
)

;


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
  React ,
  describeComponent,
  describeHtmlComponent ,
  getSpaceSeparatedClassNameList ,
  withExtraSemanticProperties ,
  asHidden ,
} ;

export {
  mkClasses,
} from 'studk-ui/src/meta/react/dec.tsx'; ;


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



;

export {
  describeCallbackAssignedStyleProps,
} from 'studk-ui-fwcore/src/xt/summerhitsmedia-cssd.tsx'; ;

;








;

export type {
  //
} ;













