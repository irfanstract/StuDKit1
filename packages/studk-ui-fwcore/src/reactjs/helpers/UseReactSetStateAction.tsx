





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

  export function asDigestFnc<S , >(f0: React.SetStateAction<S>)
  : (
    S extends ((...a: any) => any ) ?
    Function
    : ((x0: S) => S)
  )
  {
    return (
      asDigestFnc1(f0)
    ) ;
  }

  export function asDigestFnc1<SA, const S0 extends SA , const S2 extends SA >(f0: S2 | ((x0: SA ) => S2 ))
  : (
    S2 extends ((...a: any) => any ) ?
    Function
    : ((x0: S0 | SA ) => S2)
  )
  {
    return (
      (typeof f0 === "function") ? f0 : (() => f0 )
    ) ;
  }

  export function runSpcl<SA, S0 extends SA , S2 extends SA >(...[f0, v0] : [S2 | ((x0: SA ) => S2 ), prevValue: S0 & SA ] )
  {
    return (
      (asDigestFnc1(f0) )(v0)
    ) ;
  }

}

export {
  ReactSetStateActionHelpers as ReactSetStateActionHelpers ,
} ;










