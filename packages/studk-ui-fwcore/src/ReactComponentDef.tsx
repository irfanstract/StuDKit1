






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






import * as DEC from "studk-ui-componentdefinition/src/dec.tsx" ;






export const describeComponent = (
  DEC.describeComponent
) ;



// export {
//   /** @deprecated an off-topic re-export(ed) item from `ReactHtmComponentDef.tsx` */
//   getSpaceSeparatedClassNameList ,
// } from "studk-ui-fwcore/src/ReactHtmComponentDef.tsx" ;








