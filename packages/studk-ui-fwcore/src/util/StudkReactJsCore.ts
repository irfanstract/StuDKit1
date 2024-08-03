






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

/**
 * ideally an immutable list;
 * in the end, {@link Array.from a "sequential list of items" supporting the protocol `@@iterator` };
 * 
 */
export type ReadonlyArrayOrSeq<E> = (
  | ReadonlyArray<E>
  | (
    | util.Immutable.Collection.Indexed<E>
  )
) ;



// export {
//   util ,
//   random ,
// } ;

// export type {
//   //
//   AllOrNever1,
//   ArgsGetOptions ,
//   ArgsWithOptions, 
//   Extend,
//   OmitW,
//   PartializedPartially,
//   PickW,
// } ;

// export * from 'studk-fwcore/src/util/C1.ts'; ;

// export {} from 'studk-util/src/utilityTypeDefs/OITF.mts'; ;
// export * from 'studk-util/src/utilityTypeDefs/DictRecordEitherPropertyOrExtends.mts'; ;
// export * from 'studk-util/src/utilityTypeDefs/DictRecordKeyedPick.mts'; ;
// // export * from 'studk-util/src/utilityTypeDefs/SpecialiseW.mts'; ;
// export {
//   ArgsWithOptions ,
// } from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mts'; ;


;






import * as React from "react" ;

import {
  useMemo,
  useCallback,
  useState ,
  useReducer ,
  useLayoutEffect,
  useEffect ,
} from "react" ;

/**
 * `useSyncExternalStore`,
 * `useMemo`,
 * `useDeferredValue`,
 * `useState`,
 * `useReducer`,
 * `useCallback`,
 * 
 */
;

export {
  useMemo ,
} from "react" ;

/**
 * {@link React.useDeferredValue }
 * with signature subtly refined (specifically add second parameter) in light of React 19.
 * 
 * NOTE: we don't add `const` to `A` because
 * React Hooks are not totally sound eg
 * now you {@link React.CSSProperties pass `"column"`} but later you pass `"row"`.
 * 
 * @param s1 new value
 * @param s0 ignored unless you're setting React at ver 19, in which case this would be *the initial value*.
 * 
 */
const useDeferredValue = (
  React.useDeferredValue as
  (
    <A extends NonNullable<unknown> | null>(s1: A, s0?: A) =>
      A
  )
);

export {
  useDeferredValue ,
} ;

export {
  useSyncExternalStore ,
} from "react" ;

export {
  useState ,
  useReducer ,
} from "react" ;

export {
  ReactSetStateActionHelpers ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseReactSetStateAction.tsx" ;

export {
  useCallback,
} from "react" ;

export {
  useEventDispatchCallback ,
  useRefreshedCallback ,
} from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

/** SUSPENSE */

export {
  Suspense as AsSuspensedE ,
  useTransition ,
} from "react" ;

/* IMPERATIVE EFFECTS */

export {
  useEffect,
  useLayoutEffect ,
  // useTransition ,
  // Suspense ,
} from "react" ;

export {
  useRef ,
  createRef ,
  useImperativeHandle ,
} from "react" ;

/* COMPONENT DEFINITION */

export {
  createContext ,
  useContext ,
} from "react" ;

export {
  useId,
  forwardRef as describeRefIbleComponent ,
} from "react" ;

export {
  createElement ,
} from "react" ;

// /**
//  * WIP
//  * 
//  * @deprecated
//  * 
//  */
// export const UnorderedListC = "ul" ;

// /**
//  * WIP
//  * 
//  * @deprecated
//  * 
//  */
// export const OrderedListC = "ul" ;

/**
 * {@link toComponentMountKey} - WIP
 * 
 */
const toComponentMountKey = (
  (value: (JSX.IntrinsicElements["input"] )["value"] ) => (
    ((): string => {
      switch (typeof value) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "undefined":
          return String(value) ;
      }
      return JSON.stringify(value) ;
    })()
  )
) ;

export {
  toComponentMountKey ,
} ;

export const getFromClassNameProp = (

  function (...[classNameProp = ``] : [classNamePropValue: string])
  : ReadonlyArrayOrSeq<string>
  {
    return (
      classNameProp.split(/\s+/)
      .filter(e => e.length )
    ) ;
  }
)

;


;

export type {
  // ComponentProps ,
  /** @deprecated */
  ComponentPropsWithoutRef ,
} from "react" ;

/**
 * applies {@link ComponentProps `React.ComponentProps<T>`} and then {@link Required `Required`}.
 * 
 */
export type RequiredComponentProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = (
  Required<(
    ComponentProps<T>
  )>
) ;

export type ComponentProps<T extends React.JSXElementConstructor<any> | keyof React.JSX.IntrinsicElements> = (

  [T] extends [React.JSXElementConstructor<infer P>] ?
  P
  :

  [T] extends [keyof React.JSX.IntrinsicElements] ?
  React.JSX.IntrinsicElements[T]
  :

  {}
) ; // ComponentProps

export {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;


;



;

;








;

export type {
  //
} ;













