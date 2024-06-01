





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
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui-core/src/xt/ovc-util.tsx" ;


import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

import {
  withRef ,
} from "studk-ui-core/src/reactjs/helpers/withAdHocRefs.tsx" ;





;

// import {
//   OVCB, 
// } from '#currentPkg/src/templating/xst/ovcb.tsx';

import {
  UserToElementActivityState,
  doNativeCompDisplayedOffsetsAnalysis,
  useIsNativeCompHoveredOrFocused,
  useNativeCompDisplayedOffsetsAnalysis,
} from "studk-ui-core/src/xt/ReactJsHookGetComputedStyle102.tsx" ;

import {
  useExistingNativeCompBoundingBoxViaRef ,
  NCPSR ,
} from "studk-ui-core/src/xt/ReactJsHookFollowOtherCompComputedStyle103.tsx" ;

import {
  OVCO ,
  OVCO_INNER, 
  ElementTypeBoundingBoxHtmlC,
} from 'studk-ui/src/templating/xst/react-dom/userModeElementBoundingBox.tsx'; ;

export {
  /**
   * @deprecated import from `studk-ui/src/meta/react-dom/computedstyles1.tsx` directly
   */
  useNativeCompDisplayedOffsetsAnalysis as useNativeCompPosition,
} ;

;



;

const ovc = (
  React.createContext<OvcLevelleOps | null>((
    null
  ) )
) ;

import {
  ElementHoveringHtmlC,
  ovcbMid ,
} from 'studk-ui/src/templating/xst/ovcbMid.tsx';

class OvcLevelleOps
{

  protected constructor(
    public readonly renderInAbsSpace: OvcLevelleOps.IRenderExterned ,
  )
  {}

  static get1(...[{ renderExterned, }]: ArgsWithOptions<[], { renderExterned: OvcLevelleOps.IRenderExterned , }>)
  {
    return (
      new OvcLevelleOps(renderExterned,)
    ) ;
  }

}
namespace OvcLevelleOps
{

  export const getPreferred = util.L.once(() => {
    //
    return OvcLevelleOps.get1({
      renderExterned: e => (
        // TODO
        ovcbMid.renderInAbsoluteSpace(e)
      ) ,
    }) ;
  }) ;

  // TODO
  export const noOpInstance = (
    (() => {
      ;
      return OvcLevelleOps.get1({
        renderExterned: e => (
          <React.Fragment />
        ) ,
      }) ;
    })()
  ) ;

}

namespace OvcLevelleOps
{

  export interface IRenderExterned {
    (x: React.ReactElement): React.ReactElement ;
  }

}

interface IRenderNativeElemOverlays {
  (x: HTMLElement | SVGElement): React.ReactElement ;
}
type IRenderNativeElemOverlaySupported = (
  IRenderNativeElemOverlays extends ((t: infer T, ...a: infer rest) => any ) ?
  T
  : never
) ;

const useOvcLevelleOps = () => (
  React.useContext(ovc)
) ;

const OvcPvdC : React.JSXElementConstructor<React.ProviderProps<OvcLevelleOps> > = (
  ovc.Provider
) ;

const WithOverlaySupportC: React.JSXElementConstructor<React.PropsWithChildren > = (
  function WithOverlaySupportComp({ children, })
  {
    const cv = useOvcLevelleOps() ;
    const o = React.useMemo(() => (cv ?? OvcLevelleOps.getPreferred() ) , [cv,] ) ;
    return (
      <OvcPvdC
      children={children }
      value={o }
      />
    ) ;
  }
) ;

;



export {
  //
} ;
export type {
  IRenderNativeElemOverlays ,
  IRenderNativeElemOverlaySupported ,
} ;



const WithElementBoundingBoxHighlightingC = (
  describeComponent((
    function WithOverlayHighlightingComp({ children, } : { children: React.ReactElement, })
    {
      ;

      return (
        <WithOvcLevelleGoodiesC
        children={({ asSpclFinalElement, renderNativeElemTypeInfoOverlay, }) => {
          return (
            <>
              { asSpclFinalElement(children) }
              { renderNativeElemTypeInfoOverlay() }
            </>
          ) ;
          return children ;
        } }
        />
      ) ;
    }
  ))
) ;

/**
 * TODO/TBD/WIP
 * 
 * 
 */
const WithOvcLevelleGoodiesC = (
  function WithOverlayMcrComp({ children, } : { children: (ctx: ReturnType<typeof useOvcLevelleGoodies> ) => React.ReactNode, } )
  {
    const props = useOvcLevelleGoodies() ;

    return (
      <>{ children(props, ) }</>
    ) ;
  }
) ;

const WithOvcLevelleRefGoodiesC = (
  describeComponent((
    function WithOverlayMcrComp({ children, } : { children: (ctx: ReturnType<typeof useOvcLevelleRefGoodies> ) => React.ReactNode, } )
    {
      const props = useOvcLevelleRefGoodies() ;

      return (
        <>{ children(props, ) }</>
      ) ;
    }
  ))
) ;

const useOvcLevelleRefGoodies = () => {
  ;
  
  const e = (
    useOvcLevelleOps()
  ) ;

  const [mainRefEd, mainRef] = useRefState<IRenderNativeElemOverlaySupported>() ;

  // TODO
  const props = (
    React.useMemo(() => (
      {
        ...(
          (
            e ?
            { e, }
            : { e, }
          )
        ) ,
        ...(
          (
            mainRefEd ?
            { ref: mainRef, refEd: mainRefEd, }
            :
            { ref: mainRef, refEd: mainRefEd, }
          )
        ) ,
      } as const
    ) , [e, mainRefEd, mainRef,] )
  ) ;

  return props ;
} ;

/**
 * TODO/TBD/WIP
 * 
 * @deprecated
 * 
 */
const useOvcLevelleGoodies = () => {
  ;
  
  const props = useOvcLevelleRefGoodies() ;

  const {
    e ,
    refEd: mainRefEd ,
    ref: mainRef ,
  } = props ;

  const utcs = (
    useIsNativeCompHoveredOrFocused(mainRefEd)
  ) ;

  return (() => {
    return {
      ...((
        (e && mainRefEd) ? {
          renderNativeElemTypeInfoOverlay: () => {
            ;
            return (
              (((
                e.renderInAbsSpace((
                  <OVCO value={mainRefEd} />
                ))
              ) ) )
            ) ;
          } ,
          renderNativeElemBoundingBoxOverlay: () => {
            ;
            return (
              (
                e.renderInAbsSpace((
                  <ElementTypeBoundingBoxHtmlC value={mainRefEd} />
                ))
              )
            ) ;
          } ,
          renderNativeElemBoundingBoxSpc: (...[prps] : (
            ArgsWithOptions<[], (
              React.ComponentProps<typeof ElementHoveringHtmlC> extends infer T ? (
                T extends any ? Omit<T, "e"> : never
              ) : never
            ) >
          ) ) => {
            ;
            return (
              (
                e.renderInAbsSpace((
                  <ElementHoveringHtmlC
                  {...({
                    e: mainRefEd,
                    ...prps
                  } as const)}
                  />
                ))
              )
            ) ;
          } ,
        } : {
          renderNativeElemTypeInfoOverlay: () => null ,
          renderNativeElemBoundingBoxOverlay: () => null ,
          renderNativeElemBoundingBoxSpc: () => null ,
        }
      ) satisfies {
        renderNativeElemTypeInfoOverlay   : () => any ,
        renderNativeElemBoundingBoxOverlay: () => any ,
        renderNativeElemBoundingBoxSpc    : (...a: any ) => any ,
      }) ,
      /** @deprecated temporary work-around */
      mainRef ,
      asSpclFinalElement: (children: React.ReactElement) => (
        withRef(mainRef, children)
      ) ,
      ...(({
        utcs ,
      }) ) ,
    } as const ;
  })() ;
} ;

export {
  /** @deprecated alias of {@link WithElementBoundingBoxHighlightingC} */
  WithElementBoundingBoxHighlightingC as WithOverlayHighlightingC,
  WithElementBoundingBoxHighlightingC ,
  WithOvcLevelleGoodiesC,
  WithOverlaySupportC ,

  /** @deprecated */
  WithOvcLevelleRefGoodiesC ,
} ;

export {
  NCPSR ,
} ;











