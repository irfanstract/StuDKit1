





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
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  // ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;






export const getSvgDataUrl = (
  function (...[{} = {}, d]: [...ArgsWithOptions<[], {}>, src: string]) {
    return (
      (
        "data:image/svg+xml," + encodeURIComponent(d)
      )
    ) ;
  }
) ;

/**
 * generic (non-SVG) CSS filter URL based on `innerHTML` of SVG `<filter>`
 * 
 */
const getSvgFilterAsCssFilterUrlFast = (
  function (...[{} = {}, d]: [...ArgsWithOptions<[], {}>, src: string]) {
    return (
      (
        getSvgDataUrl({}, `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
          <filter id="main">
            ${d }
          </filter>
          </defs>
        `)
      )
      +
      "#main"
    ) ;
  }
) ;

export { /** @deprecated */ getSvgFilterAsCssFilterUrlFast , } ;
export { /** @deprecated */ getSvgFilterAsCssFilterUrlFast as getSvgFilterBySvmlAsCssFilterUrl , } ;

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












