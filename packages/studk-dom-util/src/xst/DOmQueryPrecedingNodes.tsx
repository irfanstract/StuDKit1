






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

import {
  getDirectChildren,
  querySelectorAllAll ,
  querySelectorAll ,
  getPrecedingSiblings ,
} from "./DOmQuerySelectorAll.tsx" ;

const getPrecedingAllNodes: (
  (...args: (
    ArgsWithOptions<[x: Element], { preDescendCrit ?: string, indivCriter?: string, noLvZero ?: boolean, }>
  ) ) => readonly Element[]
) = (
  function (...[x, opts = {}] )
  {
    const {
      noLvZero: excludeSbDescendants = false,
      preDescendCrit: preDescendCrit = `*`,
      indivCriter: indivPostCriter = `*` ,
    } = opts ;

    return (
      util.reiterated(function* () {
        yield* [] ;

        C1:
        {
          if (x.parentElement)
          {
            yield* getPrecedingAllNodes(x.parentElement, opts ) ;

            if ((x.parentElement ).matches(preDescendCrit) ) {}
            else {
              break C1 ;
            }
  
            yield x.parentElement ;
          }
  
          if (!excludeSbDescendants)
          {
            const sibls = getPrecedingSiblings(x) ;

            for (const sibl of sibls ) {
              C2 :
              {
                if (!sibl.matches(preDescendCrit) ) {
                  break C2 ;
                }
  
                yield* querySelectorAll(sibl, `:is(${`:not(:host)`} ):is(:is(${preDescendCrit }) > * )`) ;
              }
            }
          }
  
        }

      } )
      .filter(nd => nd.matches(indivPostCriter) )
    ) ;
  }
) ;

export {
  getPrecedingSiblings ,
  getPrecedingAllNodes ,
} ;

;

;










