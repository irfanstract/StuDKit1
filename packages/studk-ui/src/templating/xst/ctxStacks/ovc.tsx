





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



const ovc = (
  React.createContext<OvcLevelleOps | null>((
    null
  ) )
) ;

class OvcLevelleOps
{

  protected constructor(
    public readonly renderExterned: OvcLevelleOps.IRenderExterned ,
  )
  {}

  renderNativeElemOverlays: IRenderNativeElemOverlays = (
    // TODO
    (e ) => {
      return (
        this.renderExterned(this.renderNativeElemInfoBox(e) )
      ) ;
    }
  ) ;
  
  renderNativeElemInfoBox : (
    (e: HTMLElement | SVGElement) => React.ReactElement
  ) = (
    // TODO
    (e: Element) => {
      if (1)
      {
        if (0)
        {
          if (e instanceof HTMLElement) {
            return <React.Fragment /> ;
          }
          if (e instanceof SVGElement) {
            return <React.Fragment /> ;
          }
        }
        {
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

  static get01() {
    return this.get1({
      renderExterned: e => (
        // TODO
        ReactDOM.createPortal(e, OVCB.getMainNode() )
      ) ,
    }) ;
  }

}
namespace OvcLevelleOps
{

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



export {
  //
} ;
export type {
  IRenderNativeElemOverlays ,
  IRenderNativeElemOverlaySupported ,
} ;



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
    const o = React.useMemo(() => (cv ?? OvcLevelleOps.get01() ) , [cv,] ) ;
    return (
      <OvcPvdC
      children={children }
      value={o }
      />
    ) ;
  }
) ;

const WithOverlayHighlightingC: (
  React.JSXElementConstructor<{ children: React.ReactElement, } >
) = (
  function WithOverlayHighlightingComp({ children, })
  {
    return (
      <WithOvcLevelleGoodiesC
      children={({ ref1, }) => {
        return (
          withRef(ref1, children)
        ) ;
        return children ;
      } }
      />
    ) ;
  }
) ;

const WithOvcLevelleGoodiesC: React.JSXElementConstructor<{ children: (ctx: { ref1: React.Ref<IRenderNativeElemOverlaySupported>, } ) => React.ReactNode, } > = (
  function WithOverlayMcrComp({ children, })
  {
    return (
      <WithOvcLevelleRefGoodiesC children={({ ref, }) => (
        children({ ref1: ref, }, )
      )} />
    ) ;
  }
) ;

const WithOvcLevelleRefGoodiesC: React.JSXElementConstructor<{ children: (ctx: { ref: React.Ref<IRenderNativeElemOverlaySupported>, } ) => React.ReactNode, } > = (
  function WithOverlayMcrComp({ children, })
  {
    const e = (
      useOvcLevelleOps()
    ) ;

    const [mainRefEd, mainRef] = useRefState<IRenderNativeElemOverlaySupported>() ;

    // TODO
    const props = (
      React.useMemo(() => ((
        e ? { ref: mainRef } : { ref: mainRef }
      ) satisfies (Parameters<typeof children>[0] ) ) , [e] )
    ) ;
    return (
      <>
        { children(props) }
        { e && (1 && (mainRefEd && e.renderNativeElemOverlays(mainRefEd) ) ) }
      </>
    ) ;
  }
) ;

// const useOvcLevelleRefGoodies = () => {
//   ;
  
//   const e = (
//     useOvcLevelleOps()
//   ) ;

//   const [mainRefEd, mainRef] = useRefState<IRenderNativeElemOverlaySupported>() ;

//   // TODO
//   const props = (
//     React.useMemo(() => (
//       {
//         ...(
//           (
//             e ? { ref: mainRef } : { ref: mainRef }
//           ) satisfies { ref: React.Ref<IRenderNativeElemOverlaySupported>, }
//         ) ,
//       }
//     ) , [e] )
//   ) ;

//   return props ;
// } ;

export {
  WithOverlayHighlightingC,
  WithOvcLevelleGoodiesC,
  WithOverlaySupportC ,

  /** @deprecated */
  WithOvcLevelleRefGoodiesC ,
} ;











