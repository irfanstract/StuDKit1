





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

import * as ReactDOM from "react-dom" ;

import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;





;

import {
  getNativeCompPosition,
  useNativeCompPosition,
} from "studk-ui/src/meta/react-dom/computedstyles1.tsx" ;

import {
  useNativeCompPositionSyncRef ,
  NCPSR ,
} from "studk-ui/src/meta/react-dom/hovers-positioning-sync-1.tsx" ;

import type {
  NcpSupportedElem ,
} from "studk-ui/src/meta/react-dom/hovers-positioning-sync-1.tsx" ;

export {
  // /** @deprecated */
  useNativeCompPositionSyncRef ,
  // /** @deprecated */
  NCPSR ,
} ;



type IRenderNativeElemOverlaySupported = (
  NcpSupportedElem
) ;

export type {
  IRenderNativeElemOverlaySupported ,
} ;


// TODO
const ElementHoverHtmlC : React.JSXElementConstructor<(
  & { e: IRenderNativeElemOverlaySupported, }
  & (
    | { s: NCPSR.Subject.BOUNDINGBOX, children?: never, }
    | { s: NCPSR.Subject.BOUNDINGBOX, children: React.ReactElement, }
    | { s: NCPSR.Subject.BOTTOM, children: React.ReactNode, }
  )
)> = (
  function ElementHoverHtmlCImpl(props)
  {
    ;

    const { e: e, } = props ;

    /** `tagName` will always stays the same for its lifetime. */
    const { tagName, } = e ;
    ;

    const boxRef = (
      useNativeCompPositionSyncRef(e, props.s)
    ) ;

    switch (props.s) {
      case NCPSR.Subject.BOTTOM:
        {
          const { children, } = props ;
          return (
            <>
            <div
            ref={boxRef}
            style={{
              position: "fixed",
              background: `black`,
              color: `white`,
              transition: `all 0.205s ease-out` ,
              // transition: `initial` ,
              fontWeight: `550` ,
            }}
            >
              <div
              style={{
                zoom: `82%` ,
              }}
              >
                { children }
              </div>
            </div>
            </>
          ) ;
        }

      case NCPSR.Subject.BOUNDINGBOX:
        // TODO
        const { children = "\u00A0", } = props ;
        return (
          <>
          <div
          ref={boxRef}
          // viewBox='0 0 300 300'
          // preserveAspectRatio="none"
          style={{
            position: "fixed",
            display: "block",
            border: `0.2ex solid red`,
            color: `white`,
            transition: `all 0.205s ease-out` ,
            // transition: `initial` ,
            pointerEvents: "none" ,
          }}
          children={children}
          />
          </>
        ) ;
    }
  }
) ;

export {
  ElementHoverHtmlC ,
} ;

;









