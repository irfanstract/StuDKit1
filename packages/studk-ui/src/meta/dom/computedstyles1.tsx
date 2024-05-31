





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

import type {
  ContinuousLinearRange ,
} from 'studk-ui/src/fwCore/linearValues.ts'; ;

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

/**
 * {@link isNativeElementNotHidden}
 * 
 */
const isNativeElementNotHidden = (
  function (...[x, opts = {}] : ArgsWithOptions<[Element], { }> )
  {
    return (
      x.matches(`:not(*[hidden], *[hidden] *, details:not(details[open]) *, head, head *)`)
      &&
      (isDescendantOfOrItselfEffectivelyDisplayNone(x) === false )
    ) ;
  }
) ;

/**
 * whether
 * it's
 * descendant of, or itself,
 * Element whose {@link getComputedStyle `getComputedStyle` yields `display: none` }
 * 
 * note: this may be performance-intensive
 * 
 * @see https://stackoverflow.com/questions/46786663/is-there-a-selector-to-exclude-display-none-elements?rq=3 
 * 
 */
const isDescendantOfOrItselfEffectivelyDisplayNone: { (x: Element): boolean ; } = (
  (self) => {
    {
      if (getComputedStyle(self).display === "none" ) {
        return true ;
      }
    }
    {
      const parent = self.parentElement ;
      if (parent) {
        if (isDescendantOfOrItselfEffectivelyDisplayNone(parent) ) {
          return true ;
        }
      } else {
      }
    }
    return false ;
  }
) ;

const getEffectiveZoom: { (x: Element): number ; } = (
  (self) => {
    let r : number = 1 ;
    {
      r *= (getComputedStyle(self).zoom ?? 1 ) ;
    }
    {
      const parent = self.parentElement ;
      if (parent) {
        r *= getEffectiveZoom(parent)
      } else {
      }
    }
    return r ;
  }
) ;

export {
  isNativeElementNotHidden as isNativeElementNotHidden ,
  isDescendantOfOrItselfEffectivelyDisplayNone ,
  getEffectiveZoom as getEffectiveZoom ,
} ;




const getNativeCompPosition = (
  function (...[x, opts = {}] : ArgsWithOptions<[HTMLElement | SVGElement], { }> ) : NCOP_DAT_ITC | null
  {

    /* if element not proprly visible, don't bother */
    if (isNativeElementNotHidden(x) )
    {
      const gcsZoomVal = (
        getEffectiveZoom(x)
      ) ;

      const cr = (
        x.getBoundingClientRect()
      ) ;
  
      const {
        left: rLeft ,
        top: rTop ,
        right: rRight ,
        bottom: rBottom,
      } = cr ;
  
      return (
        NCOP_DAT.GET({
          pos: Point2D({ x: gcsZoomVal * rLeft, y: gcsZoomVal * rTop }) ,
          // TODO
          bottomPos: gcsZoomVal * rBottom ,
          rightPos: gcsZoomVal * rRight ,
        })
      ) ;
    }
    else {
      ;
      return (
        NCOP_DAT.GET({
          pos: Point2D({ x: -320, y: -320 }) ,
          // TODO
          bottomPos: -320 ,
          rightPos: -320 ,
        })
      ) ;
    }
  }
) ;

interface NCOP_DAT_ITC {
  readonly pos: Point2D,
  readonly bottomPos: number,
  readonly rightPos: number,
}

const NCOP_DAT = (
  allocateKeyInternedObjectPool({
    recreate: (x: Required<NCOP_DAT_ITC> ): NCOP_DAT_ITC => ({
      pos: x.pos ,
      bottomPos: x.bottomPos ,
      rightPos: x.rightPos ,
    }) ,
  } , {
    convToCacheKey: e => JSON.stringify(e) ,
  } )
) ;

type NcpSupportedElem = (
  Parameters<typeof getNativeCompPosition> extends readonly [infer T, ...(infer T1) ] ?
  T
  : never
) ;

const getMouseEvtPosition = (
  function (...[xE] : [(MouseEvent | PointerEvent) & { target: NcpSupportedElem }])
  {
    ;

    const x = xE.target ;
    
    if (x)
    {
      const gcsZoomVal = (
        getEffectiveZoom(x)
      ) ;

      return (
        Point2D({
          x: gcsZoomVal * xE.clientX,
          y: gcsZoomVal * xE.clientY,
        })
      ) ;
    }

    return null ;
  }
) ;


export {
  getNativeCompPosition as analyseNativeElemtClientOffsets ,
  getMouseEvtPosition as getMouseEvtClientOffset ,
} ;

export {
  /** @deprecated */
  NCOP_DAT ,
} ;

export type {
  // /** @deprecated */
  // NCOP_DAT_ITC ,
  NcpSupportedElem ,
} ;;

;











