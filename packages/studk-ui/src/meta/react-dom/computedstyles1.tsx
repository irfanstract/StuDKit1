





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






import * as React from "react" ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui/src/meta/react-dom/ovc-util.tsx" ;

import * as ReactDOM from "react-dom" ;

import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;





;

import {
  OVCB, 
} from '#currentPkg/src/templating/xst/ovcb.tsx';

import {
  getNativeCompPosition,
  NCOP_DAT ,
} from "studk-ui/src/meta/dom/computedstyles1.tsx" ;

const useNativeCompPosition = (
  function (...[x, opts = {}] : ArgsWithOptions<[HTMLElement | SVGElement], { latencyMillis ?: number ; }> )
  {
    const { latencyMillis = 500, } = opts ;

    return (
      //
      useIntervalScan(() =>
      {

        return (
          getNativeCompPosition(x)
        ) ;
      } , { latencyMillis, }, )
    ) ;
  }
) ;

export {
  useNativeCompPosition ,
  getNativeCompPosition ,
} ;









