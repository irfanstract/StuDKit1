






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
          /** __replaces__ the existing `key`. */
          key ?: React.Key ,

          /** adds into {@link HTMLElement.className `className`}. */
          classNames ?: readonly string[],
          hidden ?: boolean,
          props ?: JSX.IntrinsicElements["div"] ,
          /** `data-<key-name>` . note -- please omit the leading `data-` it'll be added automtclly. */
          customDataProperties ?: Record<string, any> ,

          style ?: React.CSSProperties ,
          /** `--some-prop` . note -- please include the leading suffix `--` . */
          customStyleProperties ?: Record<string, any> ,

        }
      )>
    ) , ...[React.ReactElement]]
  ))
  : React.ReactElement
  {
    const [
      {
        key: ovdKeyVal = null,
        classNames: extraClassNames = [] as const,
        hidden: hidden1 = false,
        style: styleProps1 = {} ,
        customDataProperties: cdp = {} ,
        customStyleProperties: cssp = {} ,
        props: opaquePropsArg = {} ,
      } = null ?? {},
      e,
    ] = args ;

    const {
      key: keyFrom ,
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
        style: { ...(styleProps0), ...(styleProps1), ...(cssp), } ,
        ...(
          Object.fromEntries((
            Object.entries(cdp)
            .map(([k, v]) => (
              [`data-${k}` as const, v] satisfies [any, any]
            ))
          ))
        ),
        ...(otherProps) ,
        ...(opaquePropsArg) ,
        // ...({ key: ovdKeyVal , }) ,
        children ,
      } satisfies JSX.IntrinsicElements["div" | "g"] )
    ) ;

    return (
      React.createElement(
        type ,
        {
          key: ovdKeyVal ?? keyFrom ,
          ref ,
          ...props2 ,
        } ,
      )
    ) ;
  }
) ;


















