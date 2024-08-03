





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
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';
import {
  createInterningSubclass ,
} from 'typexpe-commons/src/ortEdConstructors.mjs';

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'


;






import {
  //

  //
  useCallback,
  useState,

  //
  useRef,
  Ref ,

} from 'react';

/**
 * in this case,
 * the returned Function will stay the same Function obj (IOW "the identity will not change");
 * instead,
 * the associated {@link Ref Ref }, supposed to be constantly updated to point to the specified Function obj arg,
 * will be constantly updated such way, giving effect one'll refer as "constantly-refreshed callback";
 * thereby eliminating the need for {@link useCallback }
 * 
 * to be able to *properly* call *event-handler(s)* __(or other callbacks u're okay it may change anytime)__ from within `useYyyEffect` handlers
 * you'll *really* need this wrapper.
 * this is  a substitute of "experimental API that has not yet been released" `useEffectEvent` (not available yet),
 * see "Separating Events From Effects" (https://19.react.dev/learn/separating-events-from-effects ).
 * 
 * `impl` is supposed to be non-`null`, so
 * you'll need to do `impl ?? (() => (appropriate return value) )` if needed.
 * also,
 * we refuse to add `const` modifier to `argsT`, to work-around {@link useState `useState`-related soundness isssues}.
 * 
 */
const useRefreshedCallback = (
  function <argsT extends readonly unknown[], const R>(...[upstreamImpl] : [impl: (...args: argsT) => R ])
  {

    const iRef = (
      useRef<(...x: argsT) => R>(() => util.throwAssertionError(`URC not initailsed yet`) )
    ) ;
    iRef.current = upstreamImpl ;

    return (
      useCallback((
        (...a: argsT) => (iRef.current )(...a)
      ) , [iRef, ] )
    ) ;
  }
) ;

export {
  useRefreshedCallback ,
} ;












