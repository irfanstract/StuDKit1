





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






import {
  useRef,
} from 'react';

import {
  useRefreshedCallback ,
} from 'studk-ui-fwcore/src/util/StudkReactJsRefreshedCallback.tsx' ;

export {
  useRefreshedCallback ,
} ;

/**
 * to be able to *properly* call *event-handler(s)* from within `useYyyEffect` handlers
 * you'll *really* need this wrapper.
 * 
 * this is  a substitute of "experimental API that has not yet been released" `useEffectEvent` (not available yet),
 * see "Separating Events From Effects" (https://19.react.dev/learn/separating-events-from-effects ).
 * 
 * `impl` is supposed to be non-`undefined` so
 * you'll need to do `impl ?? null` that way.
 * 
 */
export const useEventDispatchCallback = (() => {
  ;
  function useEventDispatchCallbackImpl                  (...args           : [impl: ((    ) => void ) | null ] ) : () => void ;
  function useEventDispatchCallbackImpl<E extends object>(...args           : [impl: ((x: E) => void ) | null ] ) : (x: E) => void ;
  function useEventDispatchCallbackImpl<E extends object>(...[upstreamImpl] : [impl: ((x: E) => void ) | null ] )
  {
    return (
      useRefreshedCallback(upstreamImpl ?? (() => {} ) )
    ) ;
  }
  return useEventDispatchCallbackImpl ;
})() ;











