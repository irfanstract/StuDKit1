





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
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'


;






import type * as React from "react" ;

namespace ReactSetStateActionHelpers {
  ;

  export function asDigestFnc<S , SF extends (
    // (S extends ((...args: any) => any ) ? never : (React.SetStateAction<S> ) )
    React.SetStateAction<S>
  )>(f0: SF) : ((x0: S) => S)
  {
    return (
      (typeof f0 === "function") ? f0 : (() => f0 )
    ) ;
  }

}

export {
  ReactSetStateActionHelpers as ReactSetStateActionHelpers ,
} ;










