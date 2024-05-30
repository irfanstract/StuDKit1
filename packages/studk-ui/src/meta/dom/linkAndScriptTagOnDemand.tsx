



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

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs'; ;







function createAndAddNewLinkRelStylesheetTag(...[{ targetSelector = null, } = {}]: ArgsWithOptions<[], { targetSelector ?: string | null ; }> )
{
  const s = SharedElement.forTagName(document.head, "link" , { targetSelector, } ) ;
  s.rel = "stylesheet" ;
  return s ;
}

namespace SharedElement { ; }
namespace SharedElement
{
  export type EGA<T> = (
    readonly [... ArgsWithOptions<[host: Element, init: T, ], { targetSelector : string | null ; }> ]
  ) ;
  
  export function forTagName<const tgnm extends keyof HTMLElementTagNameMap>(...[host, init, { targetSelector, } ]: SharedElement.EGA<tgnm> )
  {
    return (
      SharedElement.forDoCreateTag(host, () => document.createElement<tgnm>(init ) , { targetSelector, } )
    ) ;
  }

  export function forDoCreateTag<T extends Element>(...[host, init, { targetSelector, } ]: SharedElement.EGA<() => T> )
  {
    const s = (
      (
        (typeof targetSelector === "string") ?
        host.querySelector<T>(targetSelector)
        : null 
      )
      ??
      host.appendChild(init() )
    ) satisfies T ;
    return s ;
  }

}

function installCssFromUrl(...[src, { targetSelector = null, } = {}]: ArgsWithOptions<[srcUrl: Extract<URL["href"], {}>], { targetSelector ?: string | null ; } > )
{
  const s = createAndAddNewLinkRelStylesheetTag({ targetSelector, }) ;
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









