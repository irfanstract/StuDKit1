






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
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'; ;






;

import {
  DOmClientBoundingRect ,
} from "studk-ui-fwcore/src/dom/helpers/DOmOnScreenBoundingRectOfElement.ts" ;
import {
  DOmLocalClientBoundingRect ,
} from "studk-ui-fwcore/src/dom/helpers/DOmLocalBoundingRectOfElement.ts" ;

export const GET_LOCALOFFSET_OF = (
  DOmLocalClientBoundingRect.getFrom
) ;

export interface GCOIbleNode extends Extract<DOmLocalClientBoundingRect.EligibleElem, any> {}







;