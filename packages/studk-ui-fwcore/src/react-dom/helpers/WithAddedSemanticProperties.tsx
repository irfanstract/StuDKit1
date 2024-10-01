






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

/* cannot import from `ReactJsBased.ts` because that'd lead to cycle */

import {
  ReactSetStateActionHelpers ,
} from "#UiFwCore/reactjs/helpers/UseReactSetStateAction.tsx" ;

;


import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;


import {
  analyseReusableJsxElement ,
} from "#UiFwCore/reactjs/helpers/ForwardedJsxElementAnalysis.tsx" ;


export const asHidden = (
  function (...[e] : [React.ReactElement])
  : React.ReactElement
  {

    return (
      withExtraSemanticProperties({ hidden: true, }, e )
    ) ;
  }
) ;

type PrependableSemanticProperties = (
  & PrependableSemanticPropertiesFixedProps

  & (
    | {
      //

      /**
       * if `true`, sets `hidden={true}`.
       * (however, __setting this to `false` won't do anything__).
       * 
       */
      hidden ?: boolean,
    }
    | {
      //

      /**
       * sets `hidden={true}`.
       * 
       */
      hidden : true,
    }
    | {
      //

      /**
       * 
       * @deprecated setting to `false` won't have effect
       * 
       */
      hidden ?: false,
    }
  )

) ;

interface PrependableSemanticPropertiesFixedProps {
  //

  /**
   * __replaces__ the existing `key`.
   * 
   */
  key ?: (React.Key | Extract<React.SetStateAction<React.Key | null > , (...a: any) => any > ) ,

  /**
   * adds into {@link HTMLElement.className `className`}.
   * 
   */
  classNames ?: readonly string[],

  /**
   * assign to the ReactElement's props
   * 
   */
  props ?: JSX.IntrinsicElements["div"] ,
  /**
   * `data-<key-name>` .
   * note --
   * please omit the leading `data-`
   * it'll be added automtclly.
   * 
   */
  customDataProperties ?: Record<string, any> ,

  /**
   * assign to the ReactElement's prop `style`
   * 
   */
  style ?: React.CSSProperties ,
  /**
   * `--some-prop` .
   * note --
   * please include the leading suffix `--` .
   * 
   */
  customStyleProperties ?: Record<string, any> ,

}

export const withExtraSemanticProperties = (
  function (...args : (
    [...(
      ArgsWithOptions<[], (
        PrependableSemanticProperties
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
      e0,
    ] = args ;

    const e = (
      1 ?
      e0
      : (
        expandElemt1(e0)
      )
    ) ;

    const {
      key: orignlKey ,
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
          key: (ovdKeyVal) ? ReactSetStateActionHelpers.asDigestFnc(ovdKeyVal)(orignlKey ) : orignlKey ,
          ref ,
          ...props2 ,
        } ,
      )
    ) ;
  }
) ;

/**
 * incase the `ReactElement` is Fragment or Component Elemt then
 * actually call the func-or-constructor, and dive, and return the resulting JSX
 * 
 */
const expandElemt1 = (
  function (...[e0]: [React.ReactElement]): React.ReactElement {

    EC : {
      ;
      const C = e0.type ;

      if (typeof C === "function") {

        const e01 = (
          ((): { value: React.ReactNode, } | false => {
            // TODO
            try {
              return { value: C(e0.props), } ;
            } catch (z) {
              return false ;
            }
          })()
        ) ;

        if (e01) {
          ;

          const e0110 = (
            e01.value
          ) ;

          const e011: React.ReactElement = (
            e0110 && (typeof e0110 === "object") && ("props" in e0110) ?
            e0110
            :
            <>{ e0110 }</>
          ) ;

          const e10 : React.ReactElement = {
            ...e011 ,
            key: e0.key ,
          } ;

          if (1) {
            ;
            return (
              expandElemt1(e10)
            ) ;
          }

        } else if (e01 === false) {

          break EC ;

        }
      }

    }

    return e0 ;
  }
) ;


















