





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
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






;

/**
 * 
 * 
 * 
 */
export const getUrlBasedFltExpr = (
  function (...[c]: [srcUrl: string] )
  {
    return (
      `url(${ JSON.stringify(c satisfies string ) })`
    ) ;
  }
) ;
;

/**
 * *unsharp-mask* filter expr
 * 
 */
export const getGaussianSharpenFltExpr = (
  function (...args: Parameters<typeof getGaussianSharpenFltUrl> )
  {
    return (
      getUrlBasedFltExpr((
        getGaussianSharpenFltUrl(...args) satisfies string
      ))
    ) ;
  }
) ;
;

/**
 * *unsharp-mask* filter URL
 * 
 */
export const getGaussianSharpenFltUrl = (
  util.memoize((
    function getGsSharpenFltUrlImpl(...[opts = {}] : (
      ArgsWithOptions<[], (
        & { rad ?: number }
        & { intensity ?: number }
      ) >
    ) ) {
      const {
        // rad = 0.8925 , intensity = 5.25,
        rad = 0.6925 , intensity = 9.25,
      } = opts ;
      return (
        getSvgFilterDefBasedCssFilterUrlFast(undefined, (
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

export {
  /** @deprecated alias of {@link getGaussianSharpenFltExpr} */
  getGaussianSharpenFltExpr as getGsSharpenFltExpr ,
  /** @deprecated alias of {@link getGaussianSharpenFltExpr} */
  getGaussianSharpenFltExpr as getGsSharpenFltAsSpec,
  /** @deprecated alias of {@link getGaussianSharpenFltUrl} */
  getGaussianSharpenFltUrl as getGsSharpenFltUrl,
} ;



import {
  getSvgDataUrl ,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

/**
 * generic (non-SVG) CSS filter URL based on `innerHTML` of SVG `<filter>`
 * 
 * ```
 * c.filter = `url("${getSvgFilterAsCssFilterUrlFast(... ...) }")` ;
 * c.pointerEvents = "none" ;
 * ```
 * 
 */
const getSvgFilterDefBasedCssFilterUrlFast = (
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

/**
 * generic (non-SVG) CSS filter spec based on `innerHTML` of SVG `<filter>`
 * 
 * ```
 * c.filter = `scale(1.08) ${getSvgFilterAsCssFilterSpecFast(... ...) } scale(1.05)` ;
 * c.pointerEvents = "none" ;
 * ```
 * 
 */
const getSvgFilterDefBasedCssFilterSpecFast = (
  function (...args: Parameters<typeof getSvgFilterDefBasedCssFilterUrlFast> )
  {
    return (
      `url("${ getSvgFilterDefBasedCssFilterUrlFast(...args) }")`
    ) ;
  }
) ;

export {
  /** @deprecated this api is XSS-prone. */
  getSvgFilterDefBasedCssFilterUrlFast ,
  /** @deprecated this api is XSS-prone. */
  getSvgFilterDefBasedCssFilterSpecFast ,

  /** @deprecated alias of {@link getSvgFilterDefBasedCssFilterUrlFast}. this api is XSS-prone. */
  getSvgFilterDefBasedCssFilterUrlFast as getSvgFilterAsCssFilterUrlFast ,
  /** @deprecated alias of {@link getSvgFilterDefBasedCssFilterSpecFast}. this api is XSS-prone. */
  getSvgFilterDefBasedCssFilterSpecFast as getSvgFilterAsCssFilterSpecFast ,
} ;

export {
  /** @deprecated alias of {@link getSvgFilterDefBasedCssFilterUrlFast } */
  getSvgFilterDefBasedCssFilterUrlFast as getSvgFilterBySvmlAsCssFilterUrl ,
} ;

;




;
