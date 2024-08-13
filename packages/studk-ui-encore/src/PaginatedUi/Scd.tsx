








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
} from 'studk-fwcore/src/util/C1.ts'; ;

/**
 * proper version of {@link Omit} - WIP
 * 
 */
type ProperOmit<T extends {}, xk extends keyof any> = (
  T extends infer T1 ? (
    Omit<T, xk>
  ) : never
);






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  getFullDocBodySrcBasedSvgDataUrl,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;







;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

const warnOnceOfUnsetScdOnscrollVal = (
  util.L.once(() => {
    console["warn"](`[Scrollable Div] missing 'onScroll' or 'cv' props, resulting in non-scrollability `) ;
  })
) ;

export interface ScrollingEvt
{
  target: Element ;
  newVals: { x: number, y: number ; } ;
}

export const ScdC = (
  describeHtmlComponent((
    function ScdCImpl({ ...props } : (
      ProperOmit<React.ComponentProps<typeof ScdSubC>, (
        | "divRef"
        | never
      )>
    ) )
    {
      // const divRef = (
      //   React.useRef<HTMLDivElement | null>(null)
      // ) ;

      var e : React.ReactElement = (
        <ScdSubC
        {...props}
        // divRef={divRef}
        />
      ) ;
      if (1)
      {
        // e = (
        //   <scdDivRefCtx.Provider
        //   value={divRef}
        //   children={e}
        //   />
        // ) ;
      }
      return e ;
    }
  ))
) ;

const ScdSubC = (
  describeHtmlComponent((
    function ScdCSubImpl({
      children,
      cv: ctrlVal1 = (warnOnceOfUnsetScdOnscrollVal(), 0),
      crossCv: ctrlValCrs = (warnOnceOfUnsetScdOnscrollVal(), 0),
      orientCv = "vertical",
      onScroll: runOnScroll = (warnOnceOfUnsetScdOnscrollVal(), () => {}),
      style: styl,
      // divRef,
      ctrlVarsDebug: shallCtrlVarsDebug = false,
      ...otherProps
    } : (
      & React.PropsWithChildren
      & AllOrNever1<{ cv : number, crossCv: number, } & { orientCv : "inherit" | "horizontal" | "vertical" }>
      & Pick<JSX.IntrinsicElements["div"] , "hidden" | "style" >
      & { onScroll?: (evtInfo: ScrollingEvt) => void ; }
      /* INTERNAL OBLIGATORY VARS */
      // & { divRef: React.MutableRefObject<HTMLDivElement | null>, }
      /* DEBUG VARS */
      & { ctrlVarsDebug ?: boolean ; }
    ))
    {
      const divRef = (
        React.useRef<HTMLDivElement | null>(null)
      ) ;

      const cv1Ref = (
        React.useRef<number>(0)
      ) ;
      const cvCrsRef = (
        React.useRef<number>(0)
      ) ;
      cv1Ref.current = ctrlVal1 ;
      cvCrsRef.current = ctrlValCrs ;

      useIntervalEffect(() => {
        ;
        const { current: dv, } = divRef ;
        if (dv) {
          void (() => {
            switch (orientCv) {
              case "horizontal":
                dv.scrollLeft = cv1Ref.current ;
                dv.scrollTop = cvCrsRef.current ;
                return ;
              case "vertical":
                dv.scrollTop = cv1Ref.current ;
                dv.scrollLeft = cvCrsRef.current ;
                return ;
            }
          })() ;
        }
      } , 1.7 * 1000 , [divRef, cv1Ref, cvCrsRef]) ;

      const applyInputEvt = (
        function (e : React.UIEvent<HTMLDivElement>)
        {
          const y = e.currentTarget.scrollTop ; ;
          const x = e.currentTarget.scrollLeft ; ;
          runOnScroll({ target: e.currentTarget, newVals: { x, y, } , }) ;
        }
      ) ;

      const debugP = (
        <div>
          { shallCtrlVarsDebug ? (
            <pre style={{ whiteSpace: `pre-wrap`, }}>
              { JSON.stringify((
                React.useDeferredValue({ ctrlVal1, ctrlValCrs, orientCv, })
              )) }
            </pre>
          ) : null }
        </div>
      ) ;

      // TODO
      const withSpclNecessaryCtxOverrides = (
        (...[e] : [React.ReactElement]) => {
          return e ;
        }
      ) ;

      return (
        <div
        className='studk-paginatedui-scdc-wholediv '
        style={{
          ...styl ,
        }}
        {...otherProps}
        children={(
          <>
          <aside>
            { debugP }
          </aside>
          { withSpclNecessaryCtxOverrides((
          <div
          className='studk-paginatedui-scdc-paginroot studk-paginatedui-scdc-payloadrootdiv'
          ref={divRef}
          onScroll={(e) => {
            applyInputEvt(e) ;
          } }
          style={{
            //
            contain: "layout" ,
            overflow: "auto" ,
          }}
          >
            { ((e: React.ReactElement) => {
              if (1)
              {
                e = (
                  <scdDivRefCtx.Provider
                  value={divRef}
                  children={e}
                  />
                ) ;
              }
              return e ;
            })(<>{ children }</>) }
          </div>
          )) }
          </>
        )}
        />
      ) ;
    }
  ))
) ;

const scdDivRefCtx = (
  React.createContext<{ mainDRef: React.RefObject<HTMLDivElement | null>, }["mainDRef"] | null>(null)
) ;

export {
  /** WIP/TBD @deprecated */
  scdDivRefCtx ,
} ;

/**
 * 
 * @deprecated
 */
export const useDebouncedScdState1 = (
  function () {
    ;
    const [lsce, setLsce] = (
      useCtxtualisedScdPoiState1()
    ) ;

    return (
      useDebouncedScdStateWrapper1(lsce, setLsce)
    ) ;
  }
) ;

/**
 * 
 * @deprecated use {@link useDebouncedScdStateWrapper1A} instead.
 */
export const useDebouncedScdStateWrapper1 = (
  function <T extends {}>(...[poi, setPoi] : [state: T, updateState: React.Dispatch<React.SetStateAction<T> >] )
  {

    const [ ,{
      setPoiDebcd ,
      poiDeferred ,
    }] = useDebouncedScdStateWrapper1A(poi, setPoi) ;

    return [poiDeferred, { lsce: poi, lsceDeferred: poiDeferred, setLsce: setPoi, setLsceDebcd: setPoiDebcd, }] as const ;
  }
) ;

import {
  useCtxtualisedScdPoiState1 ,
  useDebouncedScdStateWrapper1A ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScd.tsx" ;

import {
  WithCtxtuallyOverridenScdSProvC,
  describeSsva ,
} from "studk-ui-encore/src/PaginatedUi/ScrollingCompStateScdStack.tsx" ;



import "studk-ui-encore/src/PaginatedUi/scds.scss" ;









