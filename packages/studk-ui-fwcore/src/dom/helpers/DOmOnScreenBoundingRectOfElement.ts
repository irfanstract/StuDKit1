






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

/**
 * the bounding rect of given Element
 * as evidenced thru {@link Element.getBoundingClientRect }.
 * 
 */
namespace DOmClientBoundingRect {
  ;
  
  const getVerbatimFrom = (
    function (...[e, { } = {}] : (
      ArgsWithOptions<[main: EligibleElement,] , (
        & { }
      ) >
    ) )
    : OmitW<DOMRect, "toJSON">
    {

      const r = (
        e.getBoundingClientRect()
      ) ;

      r.left ;

      return r ;
    }
  ) ;

  export interface EligibleElement extends Element {}

  export const getFrom = (
    function (...[e, { } = {}] : (
      ArgsWithOptions<[main: EligibleElement,] , (
        & {
          // rescale ?: boolean ,
        }
      ) >
    ) )
    {

      const r = (
        getVerbatimFrom(e)
      ) ;

      r.left ;

      return r ;
    }
  ) ;

}

export {
  DOmClientBoundingRect as DOmClientBoundingRect ,
} ;







;
