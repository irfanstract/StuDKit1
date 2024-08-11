





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
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs'; ;

import {
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';

const TIMEOUT = (
  (tMillis: number) => (
    new Promise<void>(resume => (
      setTimeout(resume, tMillis)
    ))
  )
) ;


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;






import * as React from "react" ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

// import {
//   describeComponent,
// } from 'studk-ui-componentdefinition/src/dec.tsx'; ;





;

import {
  analyseNativeElemtClientOffsets,
  // NCOP_DAT ,
} from "studk-dom-util/src/xst/DOmRenderedClientOffsets101.tsx" ;

const useNativeCompPosition = (
  function (...[x, opts = {}] : ArgsWithOptions<[(HTMLElement | SVGElement) | null], { latencyMillis ?: number ; }> )
  {
    const { latencyMillis = 500, } = opts ;

    return (
      //
      useIntervalScan(() =>
      {

        return (
          x && analyseNativeElemtClientOffsets(x)
        ) ;
      } , { latencyMillis, }, )
    ) ;
  }
) ;

const useIsNativeCompMatchedBy = (
  function (...[x, sel, opts = {}] : ArgsWithOptions<[Element | null, selector: string], { latencyMillis ?: number ; }> )
  {
    const { latencyMillis = 500, } = opts ;

    return (
      //
      useIntervalScan(() =>
      {

        return (
          x && (x).matches(sel)
        ) ;
      } , { latencyMillis, }, )
    ) ;
  }
) ;

// TODO
const useIsNativeCompHoveredOrFocused = (
  function (...[x,  opts = {}] : ArgsWithOptions<[(HTMLElement | SVGElement) | null, ], { }> )
  : UserToElementActivityState
  {
    const { } = opts ;

    return (
      //
      React.useSyncExternalStore<UserToElementActivityState>((
        React.useCallback(notify1 => {
          const sC = new AbortController() ;
          if (x)
          {
            const l = () => notify1() ;
            x.addEventListener("pointerenter", l, { signal: sC.signal, } ) ;
            x.addEventListener("pointerleave", l, { signal: sC.signal, } ) ;
            x.addEventListener("focusin" , l, { signal: sC.signal, } ) ;
            x.addEventListener("focusout", l, { signal: sC.signal, } ) ;
          }
          return () => {
            sC.abort() ;
          } ;
        }, [x] )
      ), () =>
      {

        return (
          0
          | (x && x.matches(":focus-within") ? UserToElementActivityState.FOCUSED : 0 )
          | (x && x.matches(":hover"       ) ? UserToElementActivityState.HOVERED : 0 )
        ) ;
      } , () => (0 as UserToElementActivityState) )
    ) ;
  }
) ;

enum UserToElementActivityState {
  FOCUSED = 1 << 7 ,
  HOVERED = 1 << 1 ,
}

export {
  useNativeCompPosition as useNativeCompDisplayedOffsetsAnalysis ,
  analyseNativeElemtClientOffsets as doNativeCompDisplayedOffsetsAnalysis ,
  useIsNativeCompMatchedBy ,
  useIsNativeCompHoveredOrFocused ,
  UserToElementActivityState ,
} ;









