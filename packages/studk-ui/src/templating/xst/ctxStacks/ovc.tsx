





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
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui/src/meta/react-dom/ovc-util.tsx" ;


import * as ReactDOM from "react-dom" ;

import {
  withRef ,
} from "studk-ui/src/meta/react/withAdHocRefs.tsx" ;





;

import {
  OVCB, 
} from '#currentPkg/src/templating/xst/ovcb.tsx';

import {
  getNativeCompPosition,
  useNativeCompPosition,
} from "studk-ui/src/meta/react-dom/computedstyles1.tsx" ;

import {
  useNativeCompPositionSyncRef,
  NCPSR,
  OVCO ,
  OVCO_INNER ,
} from 'studk-ui/src/templating/xst/react-dom/userModeElementBoundingBox.tsx'; ;

export {
  /**
   * @deprecated import from `studk-ui/src/meta/react-dom/computedstyles1.tsx` directly
   */
  useNativeCompPosition,
} ;

;



;

const ovc = (
  React.createContext<OvcLevelleOps | null>((
    null
  ) )
) ;

import {
  ovcbMid ,
} from 'studk-ui/src/templating/xst/ovcbMid.tsx';

class OvcLevelleOps
{

  protected constructor(
    public readonly renderInAbsSpace: OvcLevelleOps.IRenderExterned ,
  )
  {}

  renderNativeElemOverlays: IRenderNativeElemOverlays = (
    // TODO
    (e ) => {
      return (
        this.renderInAbsSpace(this.renderNativeElemTypeInfoOverlay(e) )
      ) ;
    }
  ) ;
  
  renderNativeElemTypeInfoOverlay : (
    (e: HTMLElement | SVGElement) => React.ReactElement
  ) = (
    // TODO
    (e: Element) => {
      if (1) {
        CNC: {
          if (e instanceof HTMLElement || e instanceof SVGElement)
          {
            if (0) {
              break CNC ;
            }
            return (
              <OVCO
              value={e }
              />
            ) ;
          }
        }
        return (
          <></>
        ) ;
      }

      return util.throwTypeError(`element [${e.namespaceURI}]${e.tagName}`) ;
    }
  ) ;

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
        children={({ mainRef: ref1, renderNativeElemTypeInfoOverlay, }) => {
          return (
            <>
              { withRef(ref1, children) }
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

  return (() => {
    return {
      ...(
        (e && mainRefEd) ? {
          renderNativeElemTypeInfoOverlay: () => {
            ;
            return (
              e && (1 && (mainRefEd && e.renderNativeElemOverlays(mainRefEd) ) )
            ) ;
          } ,
        } : {
          renderNativeElemTypeInfoOverlay: () => null
        }
      ) ,
      /** @deprecated temporary work-around */
      mainRef ,
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











