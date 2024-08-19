






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
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'; ;



;



;






;

import {
  useMemo,
  // useCallback,
  // useState ,
  // useReducer ,
  // useLayoutEffect,
  // useEffect, 
  // useRef,
} from "react" ;

/**
 * 
 * @deprecated use {@link useTuple} instead.
 * 
 */
export const useBoth = (

  function <const EA extends readonly unknown[]>(...values : EA )
  : EA
  {

    return (
      useTuple(values)
    ) ;
  }
) ;

export const useTuple = (

  function <const EA extends readonly unknown[]>(values: EA )
  : EA
  {

    Object.freeze(values) ;

    return (
      useMemo(() => (
        values
      ), values )
    ) ;
  }
) ;

void (
  function () {
    useTuple([5, 6, 7]) ;
  }
) ;














