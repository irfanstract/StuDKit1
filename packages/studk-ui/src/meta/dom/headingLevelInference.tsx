






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
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs'; ;

import {
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';

const TIMEOUT = (
  (tMillis: number) => (
    new Promise<void>(resume => (
      setTimeout(resume, tMillis)
    ))
  )
) ;






;

import {
  getDirectChildren ,
  querySelectorAllAll ,
} from "studk-dom-util/src/xst/DOmQuerySelectorAll.tsx" ;

import {
  /** @deprecated */
  getPrecedingSiblings ,
  getPrecedingAllNodes ,
} from "studk-dom-util/src/xst/DOmQueryPrecedingNodes.tsx" ;



const getSelfSecLevelImpl: (
  <const L extends {}>(...args: (
    ArgsWithOptions<[Element, ], {
      extractLevelleValue: (x: Element) => L ,
    } >
  ) ) => readonly L[]
) = (
  function (...[x, opts])
  {
    const { extractLevelleValue, } = opts ;

    const parentSecLevelVec = (
      util.reiterated(function * ()
      {
        if (x.parentElement) {
          yield* (
            getSelfSecLevelImpl(x.parentElement, opts )
          ) ;
        }
      })
    ) ;

    return (
      ([...parentSecLevelVec , ...util.reiterable(function * () {
        if (x.matches(`:is(section, main, aside, nav, navbar, menu, article, ) `) ) {
          yield extractLevelleValue(x) ;
        }
        ;
      }) ] as const )
    ) ;
  }
) ;

const getSelfSecLevel = (
  function (...[x] : [Element])
  {
    return (
      [":host", ...getSelfSecLevelImpl(x, {
        extractLevelleValue: e => e.tagName ,
      } ) ]
      .join(" ")
    ) ;
  }
) ;

const getSelfSecLevellePoints = (
  function (...[x] : [Element])
  {
    return (
      getSelfSecLevelImpl(x, {
        extractLevelleValue: e => e ,
      } )
    ) ;
  }
) ;

export {
  //
  getSelfSecLevelImpl,
  getSelfSecLevel ,
  getSelfSecLevellePoints ,
} ;











