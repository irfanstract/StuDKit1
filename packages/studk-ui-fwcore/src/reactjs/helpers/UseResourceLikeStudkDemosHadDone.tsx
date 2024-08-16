





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






import * as React from "react" ;


;

interface XResourceBaseOps { close(): void ; }

export function closeResource<T extends XResourceBaseOps>(x: T) {
  x.close() ;
}

export function useResource<T extends (Parameters<typeof closeResource>[0] & {} ) | null >(realloc: () => T, dp: React.DependencyList ) {

  const [exposedRes , setExposedRes] = (React.useState<T | null >(null) ) ;

  React.useEffect(() => {
    const res = realloc() ;
    setExposedRes(() => res) ;
    return () => {
      if (res) {
        closeResource(res) ;
      }
    } ;
  }, dp ) ;

  return exposedRes ;
}

/**
 * returns `[acReso | null, React.Dispatch<Event>]` --
 * the instantiation-or-initialisation will be deferred awaiting for calls to `initC` which requires an `Event`,
 * mirroring the "requires user gesture" normally applied.
 * 
 * the callback/function returned as the second item of the returned tuple
 * {@link React.useState will be the same identity across renders}.
 * 
 */
export const useEventAwaitingResourceInitState = function <acReso extends object & XResourceBaseOps, EvtT extends object = Event>(...[reconstr]: [reallocate: (x: Event) => acReso] ) {
  ;

  const [e, initC ] = (
    /**
     * remarks:
     * - the way the overload is written - combined with how {@link React.ReducerState } is written -
     *   led to unexpected "type not assignable" issues
     * - coundn't use {@link InputEvent} ; used plain {@link Event} instead
     * 
     */
    (
      React.useReducer<(...a: [any, Event]) => (Event | null)>((...[e0, e2]) => (e0 || e2) , null )
    )
  ) ;

  const c = (
    useResource(() => (
      e
      &&
      (() => {
        const c = reconstr(e) ;
        console["log"]({ c, }) ;
        return c ;
      })()
    ) , [e] )
  ) ;

  return (
    [
      c,
      initC,
    ] satisfies [any, any, ...any ]
  ) ;
} ;







