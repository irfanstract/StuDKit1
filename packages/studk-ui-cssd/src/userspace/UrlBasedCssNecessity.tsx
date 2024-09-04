




/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns  
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * */
"use client" ;



import {
  util,
} from "typexpe-commons/src/common_sv.mjs";







import {
  installCssFromUrl ,
  createAndAddNewScriptTag,
} from 'studk-dom-util/src/htmldom/linkAndScriptTagOnDemand.tsx'; ;



export const declareUrlBasedCssNecessity = (
  function (...[src]: [srcUrl: string]) : void
  {
    if (typeof document !== "undefined")
    {
      installCssFromUrl(src) ;
    }
  }
) ;
;









