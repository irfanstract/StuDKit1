












/* 
 * only meant for client-side calls.
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






import {
  useMemo,
  useCallback,
  useState ,
  useReducer ,
  useLayoutEffect,
  useEffect, 
  DependencyList,
} from "react" ;






const useAsyncInterlacingHetero = (
  (() => {

    const ABORT = "abort" ;
    type  ABORT = typeof ABORT ;

    const REKEY = "rekey" ;
    type  REKEY = typeof REKEY ;

    const INTERRIMUPDATE = "pr" as const ;
    type  INTERRIMUPDATE = typeof INTERRIMUPDATE ;

    const useSpclRestartureState = (

      function <IntermR extends {}, FinalR extends {}, keyT extends number | string>(...[opts] : (
        ArgsWithOptions<[], {
          initialKey: keyT ,
        } >
      ) )
      {
        const {
          initialKey ,
        } = opts ?? {} ;

        interface RS {
          readonly key: keyT ,
          readonly lastRotorState: null | IteratorResult<IntermR, FinalR> ,
        }

        const [
          {
            key: priorRedrawTimeKey,
            lastRotorState,
          } ,
          pgs ,
        ] = (

          useReducer((
            (...[s0, ac] : [
              state: RS ,
              (
                | [ABORT, e: Error ]
                | [REKEY, newKey: keyT]
                | [INTERRIMUPDATE   , IteratorResult<IntermR, FinalR>, keyT]
              ) ,
            ] ): RS => {

              // TODO

              if (ac[0] === ABORT) {
                throw ac[1] ;
              }

              if (ac[0] === REKEY) {

                if (ac[1] === s0.key ) {

                  return s0 ;
                } else {

                  return {
                    key: ac[1] ,
                    lastRotorState: null ,
                  } satisfies RS ;
                }

                // TODO
                return util.throwTypeError() ;
              }

              if (ac[0] === INTERRIMUPDATE && ac[2] === s0.key ) {

                return {
                  ...s0 ,
                  lastRotorState: ac[1] ,
                } ;

              }

              return s0 ;
            }
          ) , ({
            key: initialKey,
            lastRotorState: null ,
          } satisfies RS ) )
        ) ;

        // TODO
        return {
          priorRedrawTimeKey ,
          lastRotorState ,
          pgs ,
        } as const ;
      }
    ) ;

    const useSpclBatchId: {
      (x: DependencyList): number ;
    } = (dependencies) => (
      useMemo(() => Math.random() , dependencies )
    ) ;

    const useSpclRestarture1 = (

      function <const IntermR extends {}, const FinalR extends {}>(...[optsArg] : (

        ArgsWithOptions<[], {
          dependencies: DependencyList ,
        }>
      ))
      {

        const {
          dependencies ,
        } = optsArg ;

        const updatedBId = (
          useSpclBatchId(dependencies)
        ) ;

        const {
          priorRedrawTimeKey: priorRedrawTimeBId ,
          lastRotorState ,
          pgs ,
        } = (
          useSpclRestartureState<IntermR, FinalR, number>({
            initialKey: 0 ,
          })
        ) ;

        void (
          priorRedrawTimeBId === updatedBId
          ||
          pgs([REKEY, updatedBId ])
        ) ;

        return {

          /* repeating the above props */
          dependencies ,

          updatedBId ,
          lastRotorState ,
          pgs ,

        } as const ;
      }
    ) ;

    return (

      function useAsyncInterlacingHeteroImpl<const IntermR extends {}, const FinalR extends {}>(...a : (
    
        ArgsWithOptions<[
          resolve: (
            (...a: ArgsWithOptions<[unknown], { s: AbortSignal } > ) =>
              AsyncGenerator<IntermR, FinalR, void >
          )
          ,
          dependencies: DependencyList
          ,
        ] , (
          & CommonAsrfOptions<FinalR >
          & CommonAsyncInternacingOptions
        )>
      ) )
      {
        ;
    
        const [
          startNextRecomp1
          ,
          dependencies = util.throwTypeError(`['useAsyncInterlacingImpl'] missing 'dependencies'`)
          ,
          optnsArg,
        ] = a ;

        const {
          onResolverError: processResolverErrorEvt1 = (e) => { throw e ; } ,
        } = optnsArg ;

        const {

          updatedBId ,
          lastRotorState ,
          pgs ,

        } = (

          useSpclRestarture1<IntermR, FinalR>({
            dependencies ,
          })
        ) ;

        useLayoutEffect(() => {
          const s = new AbortController() ;

          const itr = (
            startNextRecomp1(false, { s: s.signal, } )
          ) ;

          void (

            (async () => {

              LOOP:
              for (;;) {

                if (s.signal.aborted) {
                  break LOOP ;
                }

                const itrR = (
                  await (
                    itr.next()
                  )
                ) ;

                if (itrR.done) {
                  ;

                  // TODO
                  pgs([INTERRIMUPDATE , itrR, updatedBId, ])

                  break LOOP ;

                } else {

                  // TODO
                  pgs([INTERRIMUPDATE , itrR, updatedBId, ])

                }

              }

            })()

            .catch(ez => (
              processResolverErrorEvt1(ez)
            ) )

          ) ;

          return () => {
            s.abort() ;
            itr.throw(new TypeError(`aborted`) ) ;
          } ;
        } , [
          updatedBId ,
        ] ) ;
    
        // TODO

        return (
          useMemo(() => (
            /**
             * note:
             * we need this `val ? val : false` pattern
             * for convenience of the users of this API, receiving type-level inter-correlation (see: CFA)
             * 
             */
            (
              lastRotorState
              ?
              (
                lastRotorState.done ?
                [
                  lastRotorState ,
                  {
                    lastRotorState ,
                    done: true ,
                    started: true ,
                  } ,
                ]
                : 
                [
                  lastRotorState ,
                  {
                    lastRotorState ,
                    done: false ,
                    started: true ,
                  } ,
                ]
              )
              :
              [
                lastRotorState ,
                {
                  lastRotorState ,
                  done: false ,
                  started: false ,
                } ,
              ]

            ) satisfies [any, { lastRotorState: any, done: boolean , started: boolean, } ]
          ) , [
            lastRotorState ,
          ])
        ) ;
      }
    ) ;
  })()
) ;

const useAsyncInterlacing = (

  function useAsyncInterlacingHmogenImpl<const IntermR extends {}, >(...a : (

    Parameters<typeof useAsyncInterlacingHetero<IntermR, IntermR> >
  ) )
  {

    const [lastRotorState, ctrl ] = (
      useAsyncInterlacingHetero(...a )
    ) ;

    return (
      useMemo(() => (
        /**
         * note:
         * we need this `val ? val : false` pattern
         * for convenience of the users of this API, receiving type-level inter-correlation (see: CFA)
         * 
         */
        (
          lastRotorState
          ?
          (
            [
              lastRotorState.value ,
              ctrl ,
            ]
          )
          :
          (
            [
              null ,
              ctrl ,
            ]
          )
        ) satisfies [any, typeof ctrl ]
      ) , [
        lastRotorState ,
      ])
    ) ;
  }
) ;

interface CommonAsrfOptions<FinalR>
{

  readonly onResolverError?: (
    (...es: [Error] ) => void
  ) ,

}

interface CommonAsyncInternacingOptions extends
CommonAsrfOptions<any>
, Required<Pick<CommonAsrfOptions<any> , "onResolverError" > >
{

  readonly onResolverError: (
    CommonAsrfOptions<any>["onResolverError"] & {}
  ) ,

}

export {
  useAsyncInterlacingHetero ,
  useAsyncInterlacing,
} ;



interface CommonAsyncResolveOptions<FinalR> extends
CommonAsrfOptions<FinalR>
, Required<Pick<CommonAsrfOptions<any> , "onResolverError" > >
{

  readonly onResolverError: (
    CommonAsrfOptions<any>["onResolverError"] & {}
  ) ,

}

const useAsyncResolutionSpcl = (

  function <const IntermR extends {}, const FlbaV extends {} | null,>(...a : (
    
    ArgsWithOptions<[
      {
        resolve: (
          (...a: ArgsWithOptions<[unknown], { s: AbortSignal } > ) =>
            Promise<IntermR >
        ) ,
        fallbackValue: FlbaV ,
      }
      ,
      dependencies: DependencyList
      ,
    ] , (
      & CommonAsrfOptions<IntermR | FlbaV>
      & CommonAsyncResolveOptions<IntermR | FlbaV>
    )>
  ) )
  {

    const [
      {
        resolve: resolve1 ,
        fallbackValue ,
      } ,
      dependencies ,
      optnsArg ,
    ] = a ;

    const {
      onResolverError: onResolverErrorArg ,

    } = optnsArg ?? {} ;

    const [updatedV, ctrl] = (
      //

      useAsyncInterlacing(
        async function* (...resolverCallArgs) {

          const returnv = (
            await (
              resolve1(...resolverCallArgs)
            )
          ) ;
  
          return returnv ;
        } ,
        dependencies ,
        {

          onResolverError: onResolverErrorArg ,

        } , )
    ) ;

    return (
      updatedV ??
      fallbackValue
    ) ;
  }
) ;

const useAsyncResolution = (

  function <const IntermR extends {}, >(...a : (
    
    ArgsWithOptions<[
      resolve: (
        (...a: ArgsWithOptions<[unknown], { s: AbortSignal } > ) =>
          Promise<IntermR >
      )
      ,
      dependencies: DependencyList
      ,
    ] , (
      & CommonAsrfOptions<IntermR | null>
      & CommonAsyncResolveOptions<IntermR | null>
    )>
  ) )
  {

    const [
      resolve1 ,
      dependencies ,
      optnsArg ,
    ] = a ;

    const {
      onResolverError: onResolverErrorArg ,
    } = optnsArg ?? {} ;

    return (
      useAsyncResolutionSpcl(
        {
          resolve: resolve1 ,
          fallbackValue: null ,
        } ,
        dependencies,
        {
          onResolverError: onResolverErrorArg ,
        })
    ) ;
  }
) ;

export {
  useAsyncResolutionSpcl  ,
  useAsyncResolution ,
} ;














