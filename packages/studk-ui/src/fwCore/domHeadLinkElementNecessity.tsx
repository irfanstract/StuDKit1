




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









