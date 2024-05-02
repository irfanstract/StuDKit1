



/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * */
"use client" ;






import {
  util,
} from "typexpe-commons/src/common_sv.mjs";







function createAndAddNewLinkRelStylesheetTag(...[]: [ ] )
{
  const s = document.head.appendChild(document.createElement("link") ) ;
  s.rel = "stylesheet" ;
  return s ;
}

function installCssFromUrl(...[src]: [Extract<URL["href"], {}>] )
{
  const s = createAndAddNewLinkRelStylesheetTag() ;
  s.href = src ;
}

function createAndAddNewScriptTag(...[]: [ ] )
{
  const s = document.head.appendChild(document.createElement("script") ) ;
  return s ;
}

export { installCssFromUrl, } ;

export { createAndAddNewLinkRelStylesheetTag, } ;
export { createAndAddNewScriptTag, } ;









