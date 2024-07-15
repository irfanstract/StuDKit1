






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
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs'; ;


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;






import * as React from "react" ;


import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;


import {
  analyseReusableJsxElement ,
} from "studk-ui-fwcore/src/reactjs/helpers/ForwardedJsxElementAnalysis.tsx" ;


export const asHidden = (
  function (...[e] : [React.ReactElement])
  : React.ReactElement
  {

    return (
      withExtraSemanticProperties({ hidden: true, }, e )
    ) ;
  }
) ;

export const withExtraSemanticProperties = (
  function (...args : (
    [...(
      ArgsWithOptions<[], (
        {
          classNames ?: readonly string[],
          hidden ?: boolean,
          style ?: React.CSSProperties ,
          props ?: JSX.IntrinsicElements["div"] ,
        }
      )>
    ) , ...[React.ReactElement]]
  ))
  : React.ReactElement
  {
    const [
      {
        classNames: extraClassNames = [] as const,
        hidden: hidden1 = false,
        style: styleProps1 = {} ,
        props: opaquePropsArg = {} ,
      } = {},
      e,
    ] = args ;

    const {
      key ,
      type ,
      ref ,
      otherProps: props0 ,
      children ,
    } = analyseReusableJsxElement(e) ;

    const {
      className: cnm0 = "" ,
      hidden: hidden0 ,
      style: styleProps0 ,
      ...otherProps
    } = props0 as JSX.IntrinsicElements["div"] ;

    const props2 = (
      ({
        className: `${extraClassNames.join(" ") } ${cnm0 ?? " " } ` ,
        hidden: hidden0 || hidden1 ,
        style: { ...(styleProps0), ...(styleProps1), } ,
        ...(otherProps) ,
        ...(opaquePropsArg) ,
        children ,
      } satisfies JSX.IntrinsicElements["div" | "g"] )
    ) ;

    return (
      React.createElement(
        type ,
        {
          key ,
          ref ,
          ...props2 ,
        } ,
      )
    ) ;
  }
) ;


















