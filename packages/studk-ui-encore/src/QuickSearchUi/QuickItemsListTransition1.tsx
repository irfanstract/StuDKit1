




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
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'






;

import {
  React ,
  StudkReactJs,
  describeCallbackAssignedStyleProps,
  StudkReactJsOvcUtil, 
} from '#UiFwCore/util/ReactJsBased.ts'; ;

;




import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;







;




const useKeyTypedownTransitionState = (

  () => {

    return (
      StudkReactJs.useTimeBoundedCallableTransition({
        timeoutMillis: 750 ,
      })
    ) ;
  }
) ;

export {
  useKeyTypedownTransitionState ,
} ;

namespace QuickSearchTransition
{
  ;

  const useDeferredDpTransIntra1 = (

    function <R extends {} > (...[opts ] : (

      ArgsWithOptions<[], {
        transitionalTimeoutMillis?: number ,
        presentlyFullResults: R | null,
        priorFullResults: R ,
        redrawDeps: React.DependencyList | null ,
      }>
    ) )
    {

      const {
        priorFullResults: priorFullResultsArg,
        presentlyFullResults: pstFullResultsArg,

        transitionalTimeoutMillis = 625
        ,

        redrawDeps: redrawDepsArg ,
      } = opts ;

      const {
        priorFullResults ,
        pstFullResultsFinal ,
      } = (
        React.useMemo(() => (
          // priorFullResultsArg
          {
            priorFullResults     : priorFullResultsArg ,
            pstFullResultsFinal  : pstFullResultsArg ?? priorFullResultsArg ,
          } as const
        ) , (
          redrawDepsArg ?? [
            priorFullResultsArg,
            pstFullResultsArg ,
          ]
        ) )
      ) ;

      return (
        React.useMemo(() => {
          return {

            priorFullResults ,
            pstFullResultsFinal ,

          } as const ;
        } , [
          // ,
          priorFullResults ,
          pstFullResultsFinal ,
        ])
      ) ;
    }
  ) ;

}

export {
  QuickSearchTransition ,
} ;

























