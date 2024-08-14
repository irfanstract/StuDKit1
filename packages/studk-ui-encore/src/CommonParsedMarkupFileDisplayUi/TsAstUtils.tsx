




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
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'




import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;



import {
  getNodeTypeLabelTxt ,
  getNodeChildren ,
} from "studk-ts-codeanalysis/src/core/TsAstInspectiveUtil.ts" ;

export {
  getNodeTypeLabelTxt ,
} ;







import {
  getSampleTsSourceFile ,
} from "studk-ts-codeanalysis/src/core/TsAstScaffoldedExample.ts" ;

export {
  getSampleTsSourceFile ,
} ;

export {
  getNodeChildren ,
} ;

import {
  getRepresentationallyReducedCopyOf ,
} from "studk-ts-codeanalysis/src/core/TsAstComposableMode.ts" ;

export {
  getRepresentationallyReducedCopyOf as getRepresentationallyReducedCopyOf ,
} ;













