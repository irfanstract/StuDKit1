









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

/**
 * convenience timing-out wrapper.
 * 
 */
const withTimeoutMillis = (

  function <R> (...[rAsync, tMillis]: [Promise<R> , tMillis: number ] )
  {

    return (
      Promise.race([
        rAsync
        ,
        StudkReactJsOvcUtil.TIMEOUT(tMillis )
        .then(e => util.throwTypeError(`TIMEOUT (${`${tMillis }ms` })`) )
        ,
      ])
    )
  }
) ;

export {
  /**
   * @deprecated to be moved into different module
   */
  withTimeoutMillis ,
} ;

import {
  useBooleanFalseOrErrorEvtValuedErrorState ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseBooleanValuedErrorState1.ts" ;

/**
 * convenience for {@link React.useEffect } for `async function`s.
 * 
 */
const useAsyncInitedEffect = (

  function (...[start1, dependencies] : [(...x: ArgsWithOptions<[AbortSignal], { abSgpt: AbortSignal, }>) => Promise<ReturnType<React.EffectCallback > > , React.DependencyList ] )
  {

    const lastDeinitCompletionRef = (
      React.useRef<(
        Promise<void>
      )>(Promise.resolve() )
    ) ;

    const [ , {
      brokenAtThisPt ,
      setAsBeingBroken ,
      checkNotBrokenAtThisPt ,
      checkNotBrokenOnRefreshed ,
    } ] = (
      useBooleanFalseOrErrorEvtValuedErrorState()
    ) ;

    return (
      React.useEffect(() => {
        ;

        {
          checkNotBrokenAtThisPt() ;
          checkNotBrokenOnRefreshed() ;
        }

        const sC = new AbortController() ;

        const rAsync = (
          (async () => (
            await (
              withTimeoutMillis(lastDeinitCompletionRef.current, 15 * 1000 )
            )
            ,
            lastDeinitCompletionRef.current = Promise.resolve()
            ,
            await (
              start1(sC.signal , {
                abSgpt: sC.signal ,
              } )
            )
          ))()
        ) ;

        const deinitingStart = (
          util.L.once(async () => {

            sC.abort() ;

            const deinit = (
              await (
                withTimeoutMillis(rAsync, 55 * 1000 )
              )
            ) ;

            deinit?.() ;

          })
        ) ;

        return () => {

          const dcr = (
            deinitingStart()
          ) ;

          lastDeinitCompletionRef.current = dcr ;

          void (
            dcr
            .catch((z: Error) => (
              setAsBeingBroken(z)
            ))
          ) ;

        } ;
      } , dependencies )
    ) ;
  }
) ;

export {
  useAsyncInitedEffect ,
  /**
   * @deprecated prefer newer name {@link useAsyncInitedEffect}.
   */
  useAsyncInitedEffect as useAsyncStartEffect ,
} ;
















