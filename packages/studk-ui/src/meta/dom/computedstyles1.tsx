





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


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;






;

const getNativeCompPosition = (
  function (...[x, opts = {}] : ArgsWithOptions<[HTMLElement | SVGElement], { }> )
  {

    const cr = (
      x.getBoundingClientRect()
    ) ;

    const pos = (
      0 ?
      Point2D({ x: 0, y: 0, }) :
      Point2D({ x: cr.left, y: cr.top })
    ) ;
    return (
      NCOP_DAT.GET({
        origin: Point2D({ x: cr.left, y: cr.top }) ,
        bottomPos: cr.bottom ,
      })
    ) ;
  }
) ;

interface NCOP_DAT_ITC {
  readonly pos: Point2D,
  readonly bottomPos: number,
}

const NCOP_DAT = (
  allocateKeyInternedObjectPool({
    recreate: (x: { readonly origin: Point2D, readonly bottomPos: number, } ): NCOP_DAT_ITC => ({
      pos: x.origin ,
      bottomPos: x.bottomPos ,
    }) ,
  } , {
    convToCacheKey: e => JSON.stringify(e) ,
  } )
) ;

export {
  getNativeCompPosition ,
} ;

export {
  /** @deprecated */
  NCOP_DAT ,
} ;

;











