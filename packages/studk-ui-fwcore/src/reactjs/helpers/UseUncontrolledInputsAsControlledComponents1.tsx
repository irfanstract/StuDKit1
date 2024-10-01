









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

;







;

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  StudkReactJsOvcUtil,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  withTimeoutMillis ,
  useAsyncInitedEffect ,
  useAsyncStartEffect ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseResourceViaAsync1.tsx" ;

export {
  /**
   * @deprecated instead, redirect it into direct one `UseResourceViaAsync1.tsx`.
   */
  useAsyncStartEffect ,
} ;

const useDeferredAndTransitionalValue = (
  (function <T> (...[specifiedValAsHtml, {
    fallbackValue ,
  }] : (
    ArgsWithOptions<[updatedSpecifiedValue: T ], { fallbackValue: T, }>
  ) ) {

    // const [ , ST ] = React.useTransition() ;

    const specifiedValDeferredAsHtml = (
      React.useDeferredValue(specifiedValAsHtml)
    ) ;

    const [transitionalValue, setTransitionalValue] = (
      React.useState(fallbackValue)
    ) ;

    const [dwc, setDwc] = (
      React.useState<number>(() => (
        util.L.random(32, 800, false )
        * 1000
      ) )
    ) ;

    if (specifiedValDeferredAsHtml === specifiedValAsHtml ) {
      void (transitionalValue === specifiedValAsHtml || [
        setTransitionalValue(specifiedValAsHtml ) ,
        setDwc(v => (v + 1 ) ) ,
      ] ) ;
    }

    return (
      React.useMemo(() => ({
        //

        specifiedVal        : specifiedValAsHtml ,
        /** is {@link React.useDeferredValue `React.useDeferredValue(specifiedVal)`}. */
        specifiedValDeferred: specifiedValDeferredAsHtml ,
        transitionalValue ,
        setTransitionalValue ,

        fallbackValue ,

        dwc ,

      } as const) , [
        //

        specifiedValAsHtml ,
        specifiedValDeferredAsHtml ,
        transitionalValue ,
        setTransitionalValue ,

        fallbackValue ,

        dwc ,

      ])
    ) ;

    ;
  })
) ;

export {
  useDeferredAndTransitionalValue ,
} ;



















