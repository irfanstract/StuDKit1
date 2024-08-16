





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






import type {
  CSSProperties ,
  Attributes ,
  HTMLAttributes ,
} from "react" ;

type MutableCSSProperties = (
  CSSProperties extends infer T ? (
    { [k in Exclude<keyof T, never>] : T[k] ; }
  ) : never
) ;

export type {
  CSSProperties ,
  MutableCSSProperties ,
} ;





;

export const describeCallbackAssignedStyleProps = (
  function (...[init] : [(self: MutableCSSProperties) => void ])
  : CSSProperties
  {
    const e = new Object() as MutableCSSProperties ;
    init(e) ;
    return (
      /* object possibly leaked somewhere else. */
      { ...e } as const
    ) ;
  }
) ;

export const describeByCssStringStyleProps = (
  function (...[c] : [HTMLStyleElement["innerHTML"] ])
  : CSSProperties
  {
    const e = (
      document.createElement("div") as (
        Extend<Pick<HTMLElement, "setAttribute">, {} > & { style: MutableCSSProperties | CSSStyleDeclaration, }
      ) as (
        Extend<Pick<HTMLElement, "setAttribute">, {} > & { style: MutableCSSProperties, }
      )
    ) ;
    e.setAttribute("style", c) ;
    return (
      /* object possibly leaked somewhere else. */
      { ...((
        Object.fromEntries((
          Object.entries(e.style)
          .filter(([k, v]) => (
            Number.isNaN(+k )
          ))
        ))
      )) } as const
    ) ;
  }
) ;




;








