





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

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;

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
} from "studk-ui/src/meta/react-dom/ovc-util.tsx" ;

import * as ReactDOM from "react-dom" ;

import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;





;

import {
  OVCB, 
} from '#currentPkg/src/templating/xst/ovcb.tsx';

import {
  getNativeCompPosition,
  NCOP_DAT ,
} from "studk-ui/src/meta/dom/computedstyles1.tsx" ;

const useNativeCompPosition = (
  function (...[x, opts = {}] : ArgsWithOptions<[(HTMLElement | SVGElement) | null], { latencyMillis ?: number ; }> )
  {
    const { latencyMillis = 500, } = opts ;

    return (
      //
      useIntervalScan(() =>
      {

        return (
          x && getNativeCompPosition(x)
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
  useNativeCompPosition ,
  getNativeCompPosition ,
  useIsNativeCompMatchedBy ,
  useIsNativeCompHoveredOrFocused ,
  UserToElementActivityState ,
} ;









