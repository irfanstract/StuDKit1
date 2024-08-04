








import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';




/**
 * @typedef {{ readonly x: number, readonly y: number, } }
 * 
 */
/** */
export const Point2D = (
  /** @type {(...x: Parameters<typeof point2DObjsPool.GET>) => Point2D } */
  function (x) { return point2DObjsPool.GET(x) ; }
) ;

const point2DObjsPool = (
  allocateKeyInternedObjectPool({
    recreate: /** @satisfies {(x: { readonly x: number, readonly y: number, } ) => x} */ (p) => p ,
  } , {
    convToCacheKey: (e) => [e.x, e.y].join(",")
    ,
  } )
) ;











