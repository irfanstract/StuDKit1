



/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;

import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  withExtraSemanticProperties ,
} from 'studk-ui-fwcore/src/react-dom/helpers/WithAddedSemanticProperties.tsx'; ;

// import {
//   SingleChildDiv,
// } from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;

import * as ReactDOM from "react-dom" ;






import dynamicComponent from "next/dynamic";

export {
  dynamicComponent as dynamicComponent,
} ;

import Link from "next/link";

import Image from "next/image";

export {
  Link as Link,
  Image as Image,
} ;





void [ReactDOM].slice(0) ;

import {
  allocateTocCtx ,
} from "studk-ui-encore/src/InternedContentsUi/TocCtxHooks" ;

import {
  AsTocAllocatingAncestorC ,
  MustAttachToc,
  TocRenderingC,
} from "./tocElemt" ;

export {
  AsTocAllocatingAncestorC ,
  MustAttachToc,
  TocRenderingC,
} ;





;









