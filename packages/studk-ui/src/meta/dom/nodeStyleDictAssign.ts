





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


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;







;

const assignStylesOnto: {
  <hostT extends ElementCSSInlineStyle, const R extends void>(...x: [receiver: hostT, (x: hostT["style"]) => R ] ): R ;
} = (
  function (nd, applyStls) {
    return applyStls(nd.style) ;
  }
) ;

export { assignStylesOnto, } ;








