





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

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;





;

import {
  getNativeCompPosition,
  useNativeCompPosition,
} from "studk-ui/src/meta/react-dom/computedstyles1.tsx" ;

import type {
  //
  NcpSupportedElem ,
} from "studk-ui/src/meta/dom/computedstyles1.tsx" ;

const useExistingNativeCompBoundingBoxViaRef = (
  function (...[e, mde = NCPSR.Subject.BOUNDINGBOX] : [src: NcpSupportedElem, mode?: NCPSR.Subject] )
  : React.Ref<HTMLDivElement>
  {
    ;

    const ncpRef = React.useRef<HTMLDivElement | null>(null) ;

    useIntervalEffect(() => {
      const e1 = ncpRef.current ;
      if (e1) {
        const ncp = getNativeCompPosition(e) ;
        if ((e1.hidden = !(!!ncp) , ncp) )
        {
          C :
          switch (mde) {
            //
            case NCPSR.Subject.BOTTOM :
            {
              Object.assign(e1.style, {
                //
                top : `${`${ncp.bottomPos }px` } ` , 
                left: `${`${ncp.pos["x"] }px` } ` , 
              } ) ;
              break C ;
            }
            case NCPSR.Subject.BOUNDINGBOX :
            {
              Object.assign(e1.style, {
                //
                top : `${`${ncp.pos.y }px` } ` , 
                left: `${`${ncp.pos["x"] }px` } ` , 
                height : `${`${ncp.bottomPos - ncp.pos.y }px` } ` , 
                width : `${`${ncp.rightPos - ncp.pos.x }px` } ` , 
              } satisfies React.CSSProperties ) ;
              break C ;
            }
          }
        }
      }
    } , 0.0551 * 1000 , [ncpRef] ) ;
    ;

    return ncpRef ;
  }
) ;

namespace NCPSR { ; }

namespace NCPSR
{
  ;
  export enum Subject {
    BOTTOM = 1 << 1 ,
    BOUNDINGBOX = 1 << 3 ,
  }
}

export {
  useExistingNativeCompBoundingBoxViaRef ,
  /** @deprecated alias of {@link useExistingNativeCompBoundingBoxViaRef} */
  useExistingNativeCompBoundingBoxViaRef as useNativeCompPositionSyncRef ,
  NCPSR ,
} ;

export type {
  // /** @deprecated use direct import from `studk-ui/src/meta/dom/computedstyles1.tsx`. */
  NcpSupportedElem ,
} ;







