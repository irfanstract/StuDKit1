





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
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;






import * as React from "react" ;

import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;


import * as ReactDOM from "react-dom" ;

type IntrinsicElementRef< tagNameT extends (
  keyof JSX.IntrinsicElements
)> = (
  Extract<(
    (
      JSX.IntrinsicElements[tagNameT]["ref"]
    )
  ), React.Ref<any> >
) ;

export type {
  IntrinsicElementRef ,
} ;

const destructureElement = (
  function <
    //
    const tagNameT extends (
      React.JSXElementConstructor<any>
      | string
    ) ,
    const propsT extends (
      React.ReactElement<{ ref ?: (
        tagNameT extends (keyof JSX.IntrinsicElements) ?
        React.ElementRef<tagNameT>
        : React.Ref<refEdElemT>
      ), children ?: any, }, tagNameT >["props"]
    ) ,
    const refEdElemT = never ,
  >(...[srcE ] : (
    ArgsWithOptions<[original: React.ReactElement<propsT, tagNameT>, ], {} >
  ) )
  {
    const {
      key,
      type,
      props: {
        ref ,
        children ,
        ...otherProps
      } ,
    } = srcE ;

    return {
      key,
      type ,
      ref ,
      children ,
      otherProps ,
    } as const ;
  }
) ;

const withRef: (
  & {
    <const tagNameT extends keyof JSX.IntrinsicElements>(...args: (
      ArgsWithOptions<[IntrinsicElementRef<tagNameT> , original: React.ReactElement<any, tagNameT >, ], {} >
    ) ): React.ReactElement

    /** @deprecated */
    <const tagNameT extends keyof JSX.IntrinsicElements>(...args: (
      ArgsWithOptions<[IntrinsicElementRef<tagNameT> , original: React.ReactElement, ], {} >
    ) ): React.ReactElement

  }
) = (
  function withRefElemImpl<const tagNameT extends (
    keyof JSX.IntrinsicElements
  )>(...[intendedRef, srcE ] : (
    ArgsWithOptions<[IntrinsicElementRef<tagNameT> , original: React.ReactElement<any, tagNameT>, ], {} >
  ) )
  : React.ReactElement
  {
    if (typeof srcE.type === "string")
    {
      const {
        key,
        ref: existingRef,
        type ,
        children,
        otherProps ,
      } = (
        destructureElement(srcE)
      ) ;
      return (
        React.createElement(type, {
          key,
          ref: combineRefs(intendedRef, existingRef),
          ...otherProps,
        }, children )
      ) ;
    }

    if (srcE.type === React.Fragment)
    {
      // TODO
    }

    // {
    //   const s = React.Children.toArray(srcE) ;
    //   if (s.length === 1) {
    //     return l
    //   }
    // }

    return srcE ;
  }
) ;

const combineRefs: {
  <tagNameT extends keyof JSX.IntrinsicElements>(...[intendedRef, existingRef] : (
    ArgsWithOptions<(
      | [...[ IntrinsicElementRef<tagNameT> ] , original?: IntrinsicElementRef<tagNameT>, ]
      | [...[ IntrinsicElementRef<tagNameT>? ] , original: IntrinsicElementRef<tagNameT>, ]
    ), {} >
  )): IntrinsicElementRef<tagNameT> ;

  <tagNameT extends keyof JSX.IntrinsicElements>(...[intendedRef, existingRef] : (
    ArgsWithOptions<[...[ IntrinsicElementRef<tagNameT> ? ] , original?: IntrinsicElementRef<tagNameT>, ], {} >
  )): IntrinsicElementRef<tagNameT> | undefined ;

} = (
  // ArgsWithOptions<[IntrinsicElementRef<tagNameT> , original: React.ReactElement<any, tagNameT>, ], {} >
  function <tagNameT extends keyof JSX.IntrinsicElements>(...[intendedRef, existingRef] : (
    ArgsWithOptions<[...[ IntrinsicElementRef<tagNameT> ? ] , original?: IntrinsicElementRef<tagNameT>, ], {} >
  ))
  {
    return (
      // existingRef ?? intendedRef
      intendedRef ?? existingRef
    ) ;
  }
) ;



/**
 * test the strict sig check
 * 
 */
{ (...[ref, e]: [React.Ref<HTMLDivElement>, React.ReactElement ] ) => {
  ;
  withRef(ref, e) ;
  withRef(ref, e as React.ReactElement<any, "div">) ;
} }

export {
  withRef ,
} ;











