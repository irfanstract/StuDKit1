










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
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'



;



import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;

;



;







;

import * as React from "react" ;

export const useClientSideOnly = (
  () => React.useSyncExternalStore((
    React.useCallback(() => (() => {} ) , [] )
  ) , () => true, () => false )
) ;

import {
  useClientSideInitOnlyState ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe.tsx" ;

export const useClientSideOnlyCompute = (
  function <const R extends true | object > (...[recompute]: [() => R] )
  {
    const [s, setS] = useClientSideInitOnlyState(recompute) ;
    return s ;
  }
) ;










