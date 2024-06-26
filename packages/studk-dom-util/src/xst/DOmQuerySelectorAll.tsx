






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
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs'; ;






;

const getDirectChildren = (
  function (...[x] : [Element])
  {
    return (
      Array.from(x.children)
    ) ;
  }
) ;

const querySelectorAll = (
  function (...[x, s] : [Element, string ])
  {
    return (
      Array.from(x.querySelectorAll(s) )
    ) ;
  }
) ;

const querySelectorAllAll = (
  function (...[x, s] : [Iterable<Element>, string ])
  {
    return (
      util.reiterated(function * () {
        for (const xItem of x ) {
          for (const xMatching of querySelectorAll(xItem, s) )
          {
            yield xMatching ;
          }
        }
      })
    ) ;
  }
) ;

/**
 * the preceding {@link Element.children immediate-children} of {@link Node.parentNode `x.parent` }
 * 
 */
const getPrecedingSiblings = (
  function (...[x] : [Element])
  {
    return (
      util.reiterated(function* () {
        LOOP :
        for (const c of (
          x.parentElement ?
          getDirectChildren(x.parentElement)
          : []
        ) )
        {
          if (c === x) {
            break LOOP ;
          }
          yield c ;
        }
      } )
    ) ;
  }
) ;

export {
  getDirectChildren ,
  querySelectorAll,
  querySelectorAllAll ,
  // /** @deprecated */
  getPrecedingSiblings ,
} ;

;

;










