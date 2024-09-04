






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

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;

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
  getDirectChildren ,
  querySelectorAllAll ,
  /** @deprecated */
  getPrecedingSiblings ,
  getPrecedingAllNodes ,
} ;

;

;










