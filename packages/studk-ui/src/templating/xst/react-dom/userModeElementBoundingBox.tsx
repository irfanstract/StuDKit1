





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
} from "./userModeElementHovers1.tsx" ;

export {
  /** @deprecated */
  useNativeCompPositionSyncRef ,
  /** @deprecated */
  NCPSR ,
} ;


;

import {
  IRenderNativeElemOverlaySupported ,
  ElementHoveringHtmlC ,
} from "studk-ui/src/templating/xst/react-dom/userModeElementHovers1.tsx" ;

;



const ElementTypeHoveringAllHtmlC : React.JSXElementConstructor<{ value: IRenderNativeElemOverlaySupported, }> = (
  function ElementTypeHoveringAllHtmlCImpl({ value: e, })
  {
    ;

    /** `tagName` will always stays the same for its lifetime. */
    const { tagName, } = e ;
    ;

    if (0) {
      return <div /> ;
    }

    return (
      <>
      <ElementTypeBoundingBoxHtmlC value={e} />
      <ElementTypeHoveringInfoHtmlC value={e} />
      </>
    ) ;
  }
) ;

const ElementTypeBoundingBoxHtmlC : React.JSXElementConstructor<{ value: IRenderNativeElemOverlaySupported, }> = (
  function ElementTypeHoveringAllHtmlCImpl({ value: e, })
  {
    ;

    /** `tagName` will always stays the same for its lifetime. */
    const { tagName, } = e ;
    ;

    return (
      <>
      <ElementHoveringHtmlC
      e={e}
      s={NCPSR.Subject.BOUNDINGBOX}
      />
      </>
    ) ;
  }
) ;

const ElementTypeHoveringInfoHtmlC : React.JSXElementConstructor<{ value: IRenderNativeElemOverlaySupported, }> = (
  function ElementTypeHoveringAllHtmlCImpl({ value: e, })
  {
    ;

    /** `tagName` will always stays the same for its lifetime. */
    const { tagName, } = e ;
    ;

    return (
      <>
      <ElementHoveringHtmlC
      e={e}
      s={NCPSR.Subject.BOTTOM}
      children={(
        <ElementTypeAndInfoBoxC
        value={e}
        />
      )}
      />
      </>
    ) ;
  }
) ;

const ElementTypeAndInfoBoxC : React.JSXElementConstructor<{ value: IRenderNativeElemOverlaySupported, }> = (
  function OVCO_INNER_IMPL({ value: e, })
  {
    /** `tagName` will always stays the same for its lifetime. */
    const { tagName, } = e ;
    ;

    const ncp = useNativeCompPosition(e , { latencyMillis: 0.58 * 1000 , } ) ;
    ;

    if (0) {
      return <div /> ;
    }

    return (
      ncp ?
      (
        <div
        style={{
        }}
        >
          <p>
            Element <code>{ `${tagName}` }</code> {}
            positioned at <code>{ JSON.stringify(ncp.pos ) }</code> {}
          </p>
        </div>
      )
      : <></>
    ) ;
  }
) ;

export {
  ElementTypeHoveringAllHtmlC as OverlayHtml ,
  /** @deprecated alias of {@link ElementTypeHoveringAllHtmlC} */
  ElementTypeHoveringAllHtmlC as OVCO ,

  ElementTypeBoundingBoxHtmlC,
  ElementTypeHoveringInfoHtmlC,
  /** @deprecated */
  ElementHoveringHtmlC,

  ElementTypeAndInfoBoxC ,
  /** @deprecated see {@link ElementTypeAndInfoBoxC} */
  ElementTypeAndInfoBoxC as OVCO_INNER ,
} ;

;








