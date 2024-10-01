





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

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#UiFwCore/util/EWithOpt.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;

import type {
  // ContinuousLinearRange ,
} from '#UiFwCore/util/ContinuousLinearRangeTs.ts'; ;






import * as React from "react" ;





;

import {
  type MutableCSSProperties ,
  describeCallbackAssignedStyleProps ,
  describeByCssStringStyleProps ,
} from "./summerhitsmedia-cssd.tsx" ;

export {
  describeCallbackAssignedStyleProps ,
  describeByCssStringStyleProps ,
} ;




;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "#UiFwCore/xt/ovc-util.tsx" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

import {
  withRef ,
} from "studk-ui/src/meta/react/withAdHocRefs.tsx" ;


;

type InlineCss = string & { isInlineCss ?: true } ;

interface AddedCssApplicable extends React.ReactElement {}

export const withPresentationalGoodiesApplied = (
  function (...[{ style: s = ``, hidden, className = ` `, }, main] : [{ style ?: InlineCss, className ?: string ; hidden ?: boolean ; }, main: AddedCssApplicable])
  {
    return (
      <WithPrGoodiesElemC
      style={s}
      hidden={hidden}
      className={`${className} `}
      children={main}
      />
    ) ;
  }
) ;

export const withCssStringApplied = (
  function (...[s, main] : [s: InlineCss, main: AddedCssApplicable])
  {
    return (
      <WithInlineCssC
      c={s}
      children={main}
      />
    ) ;
  }
) ;

export const WithPrGoodiesElemC = (
  function WithPrGoodiesElemCImpl({ style: c = ` `, className = ` `, hidden: asHidden, children: main, } : (
    & { style?: InlineCss, className ?: string, hidden ?: boolean, children: AddedCssApplicable }
  )) {
    const localRef = React.useRef<null | (HTMLElement | SVGElement)>() ;
    const {
      key ,
      eType ,
      srcPassedRef ,
      children ,
      style: orignlStylePrp,
      otherProps ,
    } = WICS.analyseJsxWhtElement(main) ;
    useIntervalEffect(() => {
      const {
        current: receiver ,
      } = localRef ;
      if (receiver)
      {
        // receiver.
        ;
        WICS.replaceInlineStyleString(receiver, "" ) ;
        Object.assign(receiver.style, orignlStylePrp ) ;
        WICS.assignCssString(receiver, c ) ;
      }
    }, 750, (
      // TODO
      [c]
    ) ) ;
    return (
      // @ts-ignore
      withRef(localRef, (
        React.createElement(eType, { key, className, hidden: asHidden, ...otherProps, }, children )
      ) )
    ) ;
  }
) ;

export const WithInlineCssC = (
  function WithInlineCssCImpl({ c, children: main, } : { c: InlineCss, children: AddedCssApplicable }) {
    return (
      <WithPrGoodiesElemC
      children={main}
      style={c}
      />
    ) ;;
  }
) ;

export namespace WICS { ; }
export namespace WICS
{
  export function analyseJsxElement(...[main,] : [React.ReactElement ])
  {
    const {
      key ,
      type ,
      props: { ref, children, ...otherProps } ,
    } = main ;
    return {
      key ,
      eType: type ,
      srcPassedRef: ref ,
      // style ,
      children ,
      otherProps ,
    } as const ;
  }

  export function analyseJsxWhtElement(...[main,] : [React.ReactElement ])
  {
    ;
    const {
      key ,
      eType ,
      srcPassedRef ,
      children ,
      otherProps: { style, ...otherProps } ,
    } = WICS.analyseJsxElement(main) ;
    return {
      key ,
      eType ,
      srcPassedRef ,
      children ,
      style ,
      otherProps ,
    } as const ;
  }

  export function replaceInlineStyleString(...[receiver, c] : [HTMLElement | SVGElement, string ])
  {
    receiver.setAttribute("style", c) ;
  }

  // TODO
  export function assignCssString(...[receiver, c] : [HTMLElement | SVGElement, string ])
  {
    const cParsed = describeByCssStringStyleProps(c) ;
    Object.assign(receiver.style, cParsed ) ;
    receiver
    ;
  }
}








