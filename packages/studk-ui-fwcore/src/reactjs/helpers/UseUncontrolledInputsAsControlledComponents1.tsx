









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
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

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

    if (specifiedValDeferredAsHtml === specifiedValAsHtml ) {
      void (transitionalValue === specifiedValAsHtml || setTransitionalValue(specifiedValAsHtml ) ) ;
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

      } as const) , [
        //

        specifiedValAsHtml ,
        specifiedValDeferredAsHtml ,
        transitionalValue ,
        setTransitionalValue ,

        fallbackValue ,

      ])
    ) ;

    ;
  })
) ;

export {
  useDeferredAndTransitionalValue ,
} ;



















