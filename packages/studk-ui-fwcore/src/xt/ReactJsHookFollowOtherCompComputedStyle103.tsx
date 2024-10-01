





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
} from "#UiFwCore/xt/ovc-util.tsx" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;





;

import {
  doNativeCompDisplayedOffsetsAnalysis,
  useNativeCompDisplayedOffsetsAnalysis,
} from "#UiFwCore/xt/ReactJsHookGetComputedStyle102.tsx" ;

import type {
  //
  NcpSupportedElem ,
} from "studk-dom-util/src/xst/DOmRenderedClientOffsets101.tsx" ;

const useExistingNativeCompBoundingBoxViaRef = (
  function (...[syncReferee, syncedGraphicalBoundsRel = ToNativeDomElementSyncing.GraphicalBoundsSyncing.Subject.BOUNDINGBOX] : [src: NcpSupportedElem, mode?: NCPSR.Subject] )
  : React.Ref<HTMLDivElement>
  {
    return (
      useExistingNativeCompPropertiesViaRef(syncReferee, {
        syncedGraphicalBoundsRel ,
      } )
    ) ;
  }
);

const useExistingNativeCompPropertiesViaRef = (
  function (...[syncReferee, {
    syncedGraphicalBoundsRel = ToNativeDomElementSyncing.GraphicalBoundsSyncing.Subject.BOUNDINGBOX ,
  } = {}] : ArgsWithOptions<[src: NcpSupportedElem, ], {
    syncedGraphicalBoundsRel ?: ToNativeDomElementSyncing.GraphicalBoundsSyncing.Subject ,
  } >)
  : React.Ref<HTMLDivElement>
  {
    ;

    const clientRef = (
      React.useRef<HTMLDivElement | null>(null)
    ) ;

    const drivingPeer = (
      React.useMemo(() => ({
        applyRefresh: function () {
          const e1 = clientRef.current ;
          if (e1) {
            const ncp = doNativeCompDisplayedOffsetsAnalysis(syncReferee) ;
            if ((e1.hidden = !(!!ncp) , ncp) )
            {
              Object.assign(e1.style, {
                transition: null,
              }) ;

              C :
              switch (syncedGraphicalBoundsRel) {
                //
                case ToNativeDomElementSyncing.GraphicalBoundsSyncing.Subject.BOTTOM :
                {
                  Object.assign(e1.style, {
                    //
                    top : `${`${ncp.bottomPos }px` } ` , 
                    left: `${`${ncp.pos["x"] }px` } ` , 
                  } ) ;
                  break C ;
                }
                case ToNativeDomElementSyncing.GraphicalBoundsSyncing.Subject.BOUNDINGBOX :
                {
                  Object.assign(e1.style, {
                    transition: `all 0.2s ease-out, inset 0.005s ease-out`,
                  }) ;
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
        } ,
      }) , [clientRef] )
    ) ;

    /** the preferred refresh hook. caveat - switched to {@link React.useLayoutEffect} due to unacceptable delays on {@link React.useEffect }. */
    React["useLayoutEffect"](() => {
      const s = new AbortController() ;
      {
        const doMain = function () {
          drivingPeer.applyRefresh() ;
        } ;
        doMain() ;
        window.addEventListener("scroll", evt => {
          doMain() ;
        }, { signal: s.signal, } ) ;
      }
      return () => {
        s.abort() ;
      } ;
    } , [drivingPeer,] ) ;
    /** a fallback interval hook */
    useIntervalEffect(() => (
      drivingPeer.applyRefresh()
    ) , 0.37551 * 1000 , [drivingPeer] ) ;
    ;

    return clientRef ;
  }
) ;

namespace ToNativeDomElementSyncing {; }
namespace ToNativeDomElementSyncing
{
  
  export namespace GraphicalBoundsSyncing
  {
    ;
    export enum Subject {
      BOTTOM = 1 << 1 ,
      // BEFORE = 1 << 2 ,
      BOUNDINGBOX = 1 << 3 ,
    }
  }

}

/** @deprecated alias of {@link ToNativeDomElementSyncing.GraphicalBoundsSyncing} */
import NCPSR = ToNativeDomElementSyncing.GraphicalBoundsSyncing ;
/** @deprecated alias of {@link ToNativeDomElementSyncing.GraphicalBoundsSyncing} */
import NCPSRI = ToNativeDomElementSyncing.GraphicalBoundsSyncing ;

export {
  //
  useExistingNativeCompPropertiesViaRef ,
  /** @deprecated consider using the more general API {@link useExistingNativeCompPropertiesViaRef}. */
  useExistingNativeCompBoundingBoxViaRef ,
  /** @deprecated alias of {@link useExistingNativeCompBoundingBoxViaRef} */
  useExistingNativeCompBoundingBoxViaRef as useNativeCompPositionSyncRef ,
  NCPSRI as NCPSR ,
  ToNativeDomElementSyncing ,
} ;

export type {
  NcpSupportedElem ,
} ;











