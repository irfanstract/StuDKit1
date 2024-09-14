





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

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;






import * as React from "react" ;


import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

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

/**
 * analyse a {@link JSX.Element} or {@link React.ReactElement}
 * to gather its
 * `key`, {@link React.ElementType `type`},
 * {@link React.ComponentPropsWithRef `ref`},{@link React.PropsWithChildren `children`}, and
 * {@link Omit other props }
 * 
 */
export const analyseReusableJsxElement = (
  function <
    //
    const tagNameT extends (
      React.JSXElementConstructor<any>
      | string
    ) ,
    const propsT extends (
      React.ReactElement<{ ref ?: (
        tagNameT extends (keyof JSX.IntrinsicElements) ?
        React.Ref<(
          /** naming {@link React.ElementRef} doesn't agree */
          React.ElementRef<tagNameT>
        ) >
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








