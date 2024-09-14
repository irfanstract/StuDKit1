





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
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






import {
  getSvgDataUrl ,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

export { getSvgDataUrl, } ;

import {
  getSvgFilterAsCssFilterUrlFast ,
  getSvgFilterAsCssFilterSpecFast ,
} from "studk-dom-util/src/CssFilterUrlFmt" ;

export {
  /** @deprecated */
  getSvgFilterAsCssFilterUrlFast ,
  getSvgFilterAsCssFilterSpecFast ,
} ;

export {
  /** @deprecated */
  getSvgFilterAsCssFilterUrlFast as getSvgFilterBySvmlAsCssFilterUrl ,
} ;

export const getGsSharpenFltUrl = (
  util.memoize((
    function getGsSharpenFltUrlImpl(...[{ rad = 0.8925 , intensity = 5.25, } = {}] : (
      ArgsWithOptions<[], (
        & { rad ?: number }
        & { intensity ?: number }
      ) >
    ) ) {
      return (
        getSvgFilterAsCssFilterUrlFast(undefined, (
          `
          <feGaussianBlur in="SourceGraphic" stdDeviation="${rad }" result="f03" />
          <feComposite in2="f03" in="SourceGraphic" operator="arithmetic" k1="0" k3="-1" k2="1" k4="0" />
          <feComposite operator="arithmetic" k1="0" k3="0" k2="${intensity }" k4="0" result="f02" />
          <feComposite in2="SourceGraphic" in="f02" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          `
        ))
      ) ;
    }
  ) , opts => JSON.stringify(opts) )
) ;

// `url("${getGsSharpenFltUrl() }") `
export const getGsSharpenFltAsSpec = (
  function (...args: Parameters<typeof getGsSharpenFltUrl> )
  {
    return (
      `url("${ getGsSharpenFltUrl(...args) }")`
    ) ;
  }
) ;
;

;




;

import * as React from "react" ;

import * as ReactDOMCl from "react-dom/client" ;

/**
 * generic (non-SVG) CSS filter URL based on `innerHTML` of SVG `<filter>`
 * 
 */
export const getSvgFilterByEAsCssFilterUrl = (
  function (...[{ ...remOpts } = {}, d]: [...ArgsWithOptions<[], {}>, src: React.ReactNode]) {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "filter") ;
    ReactDOMCl.createRoot(e).render(d) ;
    return (
      getSvgFilterAsCssFilterUrlFast(remOpts, e.innerHTML)
    ) ;
  }
) ;

// 












