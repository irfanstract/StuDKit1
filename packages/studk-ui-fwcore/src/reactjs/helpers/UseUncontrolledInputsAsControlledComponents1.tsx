









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
} from '#ReactJsBased.ts'; ;

import {
  withTimeoutMillis ,
  useAsyncInitedEffect ,
  useAsyncStartEffect ,
} from "#UiFwCore/reactjs/helpers/UseResourceViaAsync1.tsx" ;

import {
  useTimeBoundedDependencyChangeTransition ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseTimeBoundedTransition1.tsx" ;

export {
  /**
   * @deprecated instead, redirect it into direct one `UseResourceViaAsync1.tsx`.
   */
  useAsyncStartEffect ,
} ;

const useDeferredAndTransitionalValue = (
  (function <T extends {}> (...[specifiedValAsHtml, {
    fallbackValue ,
  }] : (
    ArgsWithOptions<[updatedSpecifiedValue: T ], { fallbackValue: T, }>
  ) ) {

    // const [ , ST ] = React.useTransition() ;

    const specifiedValDeferredAsHtml = (
      React.useDeferredValue(specifiedValAsHtml)
    ) ;

    const [tsv0, setTransitionalValue] = (
      React.useState<T | null>(null )
    ) ;

    const transitionalValue = (
      // TODO
      tsv0 ?? specifiedValAsHtml ?? fallbackValue
    ) ;

    const hasTransitionalValue = (
      (tsv0 !== null )
    ) ;

    const [dwc, setDwc] = (
      React.useState<number>(() => (
        util.L.random(32, 800, false )
        * 1000
      ) )
    ) ;

    // TODO
    const [isPspb, ] = (

      useTimeBoundedDependencyChangeTransition({
        timeoutMillis: 750 ,
        dependencies: [
          specifiedValAsHtml ,
        ] ,
      })
    ) ;

    const isIntendedTransitionState = (
      hasTransitionalValue
      &&
      isPspb
    ) ;

    if ((
      !isIntendedTransitionState
    ) ) {
      void (transitionalValue === specifiedValAsHtml || [
        setTransitionalValue(null ) ,
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
        hasTransitionalValue ,
        isIntendedTransitionState,

        fallbackValue ,

        dwc ,

      } as const) , [
        //

        specifiedValAsHtml ,
        specifiedValDeferredAsHtml ,
        transitionalValue ,
        setTransitionalValue ,
        hasTransitionalValue ,
        isIntendedTransitionState,

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



















