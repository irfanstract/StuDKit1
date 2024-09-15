





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
} from 'studk-fwcore/src/util/C1.ts'; ;






const getFullDocSrcBasedSvgDataUrl = (
  function (...[{} = {}, d]: [...ArgsWithOptions<[], {}>, src: string]) {
    return (
      (
        "data:image/svg+xml," + encodeURIComponent(d)
      )
    ) ;
  }
) ;

/**
 * the `innerHTML`-only-based version of {@link getFullDocSrcBasedSvgDataUrl}
 * 
 */
const getFullDocBodySrcBasedSvgDataUrl = (
  function (...[{ viewBox: viewBoxSpec, }, contents]: [...ArgsWithOptions<[], { viewBox: string, }>, src: string]) {
    return (
      (
        getFullDocSrcBasedSvgDataUrl({}, `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="${viewBoxSpec }"
        >
          ${contents }
        `)
      )
    ) ;
  }
) ;

export {
  getFullDocBodySrcBasedSvgDataUrl ,
  getFullDocSrcBasedSvgDataUrl ,
  /** @deprecated alias of {@link getFullDocSrcBasedSvgDataUrl} */
  getFullDocSrcBasedSvgDataUrl as getSvgDataUrl,
} ;

;




;











