





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
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#UiFwCore/util/EWithOpt.ts'; ;

import type {
  ContinuousLinearRange ,
} from '#UiFwCore/util/ContinuousLinearRangeTs.ts'; ;

import {
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';

import {
  createInterningSubclass ,
} from 'typexpe-commons/src/ortEdConstructors.mjs';

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








export {
  util ,
  random ,
  /** @deprecated */
  MNI_CTXTUALONLY ,
  mkArray ,
} ;

export type * from '#UiFwCore/util/EWithOpt.ts'; ;

export type {
  ContinuousLinearRange ,
} ;

export {
  allocateKeyInternedObjectPool ,
  createInterningSubclass ,
  Point2D ,
  TIMEOUT ,
} ;










