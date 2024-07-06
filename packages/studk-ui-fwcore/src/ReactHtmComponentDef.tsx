






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
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'; ;






import * as React from "react" ;

import * as DEC from "studk-ui-componentdefinition/src/dec.tsx" ;




import {
  describeComponent ,
} from "studk-ui-fwcore/src/ReactComponentDef.tsx" ;

export const describeHtmlComponent = (
  describeComponent
) ;



/**
 * space-separated class-name list,
 * very important as the only reasonable manner thru which CSS files can do their things
 * .
 * 
 */
export const getSpaceSeparatedClassNameList = (
  DEC.getSpaceSeparatedClassNameList
) ;








