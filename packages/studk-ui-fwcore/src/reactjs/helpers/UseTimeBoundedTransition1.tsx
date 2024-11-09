




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

import * as React from "react" ;

const useOpaqueIncrementer = (

  () => (

    React.useReducer((
      (x: number): number => (
        x + 1
      )
    ) , util.L.random(32000, 308000 , false) )
  )
) ;

import {
  useAsyncResolutionSpcl,
} from 'studk-ui-fwcore/src/util/StudkReactJsAsyncFunctionReturnValue.ts';

import {
  TIMEOUT,
} from 'studk-ui-fwcore/src/util/TimeoutPromiseUtil.ts';

const useTimeBoundedDependencyChangeTransition = (
  //

  function (...[optsArg] : (
    ArgsWithOptions<[], {
      timeoutMillis: number ,
      dependencies: React.DependencyList ,
    }>
  ) )
  {

    const {
      timeoutMillis = util.throwTypeError(`unspecified 'timeoutMillis'`) ,
      dependencies  = util.throwTypeError(`unspecified 'dependencies'`) ,
    } = optsArg ;

    const finished = (

      useAsyncResolutionSpcl({

        fallbackValue: false ,

        resolve: (
          async () => (
            await TIMEOUT(timeoutMillis)
            ,
            true
          )
        ) ,

      } , dependencies , {

        // TODO
        onResolverError: (
          e => {
            console["error"](e.message ) ;
            console.groupCollapsed(`Stack trace for ${e.message }:` ) ;
            console["info"](e) ;
            console.groupEnd() ;
          }
        ) ,

      } )
    ) ;

    const inProgress = (
      finished === false
    ) ;

    return (
      React.useMemo(() => (
        (
          inProgress ?
          [inProgress, {
            inProgress ,
            finished ,
          } ]
          :
          [inProgress, {
            inProgress ,
            finished ,
          } ]
        ) satisfies [any, {}]
      ) , [
        inProgress ,
        finished ,
      ] )
    ) ;
  }
) ;

const useTimeBoundedCallableTransition = (
  //

  function (...[optsArg] : (
    ArgsWithOptions<[], {
      timeoutMillis: number ,
      // dependencies: React.DependencyList ,
    }>
  ) )
  {

    const {
      timeoutMillis = util.throwTypeError(`unspecified 'timeoutMillis'`) ,
      // dependencies  = util.throwTypeError(`unspecified 'dependencies'`) ,
    } = optsArg ;

    const [c, incrementC] = (
      useOpaqueIncrementer()
    ) ;

    const [isInTransition] = (
      useTimeBoundedDependencyChangeTransition({
        timeoutMillis ,
        dependencies: [c] ,
      })
    ) ;

    return (
      React.useMemo(() => (
        [isInTransition, incrementC ] as const
      ) , [
        isInTransition ,
        incrementC ,
      ])
    ) ;
  }
) ;

export {
  useTimeBoundedDependencyChangeTransition ,
  useTimeBoundedCallableTransition ,
} ;

;











