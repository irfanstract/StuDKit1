






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

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'; ;



;



;






;

import {
  //
  useTuple ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseVectorOrTuple.ts" ;

import {
  useMemo,
  useCallback,
  useState ,
  useReducer ,
  useLayoutEffect,
  useEffect, 
  useRef,
} from "react" ;

import {
  //

  ReactSetStateActionHelpers ,

} from "studk-ui-fwcore/src/util/StudkReactJsCore.ts" ;

import {
  //
  useRefreshedCallback ,
} from "studk-ui-fwcore/src/util/StudkReactJsRefreshedCallback.tsx" ;

/**
 * {@link React.useState} optionally customisable.
 * 
 * 
 */
namespace OptionallyExternedState
{
  ;

  // const UNSPECIFIED = Symbol() ;

  /**
   * __overloaded function with two sig(s) with rather quite different semantics__:
   * 
   * ```
   * // FOR INITIAL VALUE
   * const [value, setValue] =
   *   OptionallyExternedState.useForValueAndSetter(initialValue ) ;
   * 
   * // FOR UPDATED VALUE
   * const [] =
   *   OptionallyExternedState.useForValueAndSetter(value, setValue, ) ;
   * 
   * ```
   * 
   * @deprecated consider {@link useForConfig} instead
   * 
   */
  export const useForValueAndSetter = (

    function usePossiblyExternedStateForValueAndSetterImpl<Value extends NonNullable<unknown> | null>(...args : (

      | ArgsWithOptions<[
        newValue: Value,
        update: React.Dispatch<React.SetStateAction<Value>>,
      ], {} >

      /**
       * NOTE:
       * using `[]` (or `readonly []`) prevents CFA Narrowing from doing its thing;
       * we had to expand this to explicitly include the 2nd param, as `?: never`,
       * like `[a: (... ...), b?: never]`,
       * to get CFA back
       * 
       */
      | [initialVal : Value, o2 ?: never]

    ) )
    {
      const [
        x,
        propagateChg,
      ] = args ;
      ;

      const s = (
        useRef<Value>(x)
      ) ;

      /**
       * NOTE:
       * hover {@link args} with cursor/pointer
       * to find out its narrowed type.
       * 
       */
      if (propagateChg) {
        args ;

        return (
          OptionallyExternedState.useForConfig({
            newValue: x ,
            update: propagateChg ,
          })
        ) ;
      }
      else {
        args;

        return (
          OptionallyExternedState.useForConfig({
            initialValue: x ,
            update: propagateChg ,
          })
        ) ;
      }
    }
  ) ;

  export const useForConfig = (

    function usePossiblyExternedStateByConfigImpl<Value extends NonNullable<unknown> | null>(...args : (

      ArgsWithOptions<[], (
        | {
          newValue: Value ,
          update: React.Dispatch<React.SetStateAction<Value>>,
        }
        | {
          initialValue: Value ,
          update?: never,
        }
      )>

    ) )
    : [
      newValue: Value,
      update: React.Dispatch<React.SetStateAction<Value>>,
    ]
    {

      const [
        props  /* effectively cannot be `null` */ ,
      ] = args ;

      const {
      } = props ;

      ;

      const {
        ensureInternalStateInitEdWithValueAndGetValue ,
        ensureInternalStateUpdatedWithValueAndGetValue ,
      } = (
        useSpclCrossRedrawTracker<Value>( )
      ) ;

      const {
        newVal ,
        propagateChg,

      } = (

        (function () {

          /**
           * NOTE:
           * hover {@link args} with cursor/pointer
           * to find out its narrowed type.
           * 
           */
          if ("newValue" in props) {
            args ;
    
            const {
              newValue: newVal ,
              update: propagateChg ,
            } = props ;
    
            void (
              ensureInternalStateUpdatedWithValueAndGetValue(newVal)
            ) ;
    
            return {
              newVal ,
              propagateChg ,
            } as const ;
          }
          else {
            args;
    
            const value = (
              ensureInternalStateInitEdWithValueAndGetValue(props.initialValue)
            ) ;
    
            // TODO
            return {

              newVal: value ,

              propagateChg: (v1) => {
                const newVal = (
                  ReactSetStateActionHelpers.runSpcl(v1, value )
                ) ;
                ensureInternalStateUpdatedWithValueAndGetValue(newVal) ;
              } ,

            } ;
          }
        } satisfies (( ) => (
          {
            newVal: Value,
            propagateChg: React.Dispatch<React.SetStateAction<Value>>
            ,
          }
        ) ) )()
      ) ;

      return (
        useTuple([
          newVal ,
          useRefreshedCallback(propagateChg)
          ,
        ])
      ) ;
    }
  ) ;

  const useSpclCrossRedrawTracker = (
    function <Value extends NonNullable<unknown> | null>()
    {

      const s = (
        useRef<null | [Value]>(null)
      ) ;

      return {
      //

      ...(

        useMemo(() => (
          {

            ensureInternalStateInitEdWithValueAndGetValue : (
              function (...[newValue] )
              {
                return (
                  (s.current ??= [newValue] )[0]
                ) ;
              }
            ),

            ensureInternalStateUpdatedWithValueAndGetValue : (
              function (...[newValue] )
              {
                return (
                  (s.current = [newValue] )[0]
                ) ;
              }
            ),
  
          } satisfies {
            [key: string]: (...args: [newValue: Value] ) => Value ,
          }
        ) , [s] )
      ) ,

      } ;
    }
  ) ;

  ;
}

export {
  OptionallyExternedState ,
} ;













