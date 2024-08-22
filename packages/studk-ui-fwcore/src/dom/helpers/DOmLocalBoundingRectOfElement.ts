






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

namespace DOmLocalClientBoundingRect {
  ;
  
  export const getFrom = (
    (...[mainDiv, { referenceDiv, }] : (
      ArgsWithOptions<[mainDiv: EligibleElem,] , (
        & { referenceDiv: EligibleElem, }
      ) >
    ) ) => ({
      x: (DOmClientBoundingRect.getFrom(mainDiv).left) - ((DOmClientBoundingRect.getFrom(referenceDiv).left) ) ,
      y: (DOmClientBoundingRect.getFrom(mainDiv).top ) - ((DOmClientBoundingRect.getFrom(referenceDiv).top ) ) ,
    })
  ) ;

  export interface EligibleElem extends DOmClientBoundingRect.EligibleElement {}

}

/**
 * TODO/WIP
 * 
 * @deprecated this is a WIP
 * 
 */
namespace DOmPerViewportClientBoundingRect {
  ;
  
  export const getFrom = (
    (...[mainDiv, { referenceDiv, }] : (
      ArgsWithOptions<[mainDiv: EligibleElem,] , (
        & { referenceDiv: EligibleElem, }
      ) >
    ) ) => ({
      x: (DOmClientBoundingRect.getFrom(mainDiv).left) - ((DOmClientBoundingRect.getFrom(referenceDiv).left) + -(referenceDiv.scrollLeft) ) ,
      y: (DOmClientBoundingRect.getFrom(mainDiv).top ) - ((DOmClientBoundingRect.getFrom(referenceDiv).top ) + -(referenceDiv.scrollTop ) ) ,
    })
  ) ;

  export interface EligibleElem extends DOmClientBoundingRect.EligibleElement {}

}

export {
  DOmLocalClientBoundingRect,
  /** @deprecated this is a WIP */
  DOmPerViewportClientBoundingRect ,
} ;








;
