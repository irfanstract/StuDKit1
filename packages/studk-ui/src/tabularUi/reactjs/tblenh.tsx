













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

const T_BY_HMS = (
  function (...[hn, mn, sn] : [...values: [Array<any>["length"], Array<any>["length"], Array<any>["length"]] ])
  {
    return (hn * 60 + mn) * 60 + sn ;
  }
) ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'; ;






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

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

import {
  useEventDispatchCallback,
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

const useXChangingPeriodTimeoutEffect = (
  function useDOmXEffectImpl(...[runMain0, getPeriodTM, dependencyList] : (
    [cbk: () => void, getPeriodTMillis: () => number, React.DependencyList]
  ))
  {

    React["useLayoutEffect"](() => {
      const sC = new AbortController ;
      const s = sC.signal;
      void (function RESCHED() {
        if (s.aborted) { return ; }
        setTimeout(() => {
          if (s.aborted) { return ; }
          runMain0() ;
          if (s.aborted) { return ; }
          RESCHED() ;
          if (s.aborted) { return ; }
        } , (
          getPeriodTM()
        ) * 1000 ) ;
      })() ;
      return () => {
        sC.abort() ;
      } ;
    } , dependencyList ) ;

  }
) ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

import {
  withRef ,
} from "studk-ui-fwcore/src/reactjs/helpers/withAdHocRefs.tsx" ;

import {
  ARel ,
  captureStyleValuesAs ,
} from "studk-ui-core-ovcstack/src/main/ovcbAncestorElementStyleValueCapture.tsx" ;

function useHtmlElemtRefAlt1<T extends HTMLElement | SVGElement>()
{
  const refObj = React.useRef<T | null>(null) ;
  return refObj ;
}

const useRefBasedDirectPresenter1 = (
  // TODO
  function useSpcls1<T extends HTMLElement | SVGElement>(...args : (
    ArgsWithOptions<[
      React.MutableRefObject<T | null>,
      (e: T) => void,
    ], {} >
  ))
  {
    const [
      wholeBRef ,
      cb1 ,
    ] = args ;
    
    const wholeBAsgn = (
      React.useCallback((e: T | null) => {
        wholeBRef.current = e ;
        if (e) {
          (e.style.display = `none !important`) ;
        }
      } , [wholeBRef])
    ) ;

    const mainPresenter = (
      React.useMemo(() => ({
        applyRefresh: () => {{
          const e = wholeBRef.current ;
          if (e) {
            /* clear the property */
            (e.style.display = "") ;

            cb1(e) ;
          }
        }
        } ,
      }) , [wholeBRef] )
    ) ;

    return {
      wholeBAsgn ,
      ...(() : { wholeBRef: React.RefObject<T | null> } => ({ wholeBRef, }) )() ,
      mainPresenter ,
    } as const ;
  }
) ;

const useDOmXEffect = (
  function useDOmXEffectImpl(...[runMain0, dependencyList] : (
    [cbk: () => void, React.DependencyList]
  ))
  {

    /**
     * `useEventDispatchCallback(runMain0)`
     * 
     */
    const runMain = (
      useEventDispatchCallback(runMain0)
    ) ;

    /**
     * note --
     * since there's already {@link dependencyList},
     * we use the original unwrapped fnc {@link runMain0} instead
     * 
     */
    const cteRe = useXChangingPeriodTimeoutEffect(runMain0, () => {

      const beingActive = (
        document.body.matches(`:is(:focus-within , :hover )`)
      ) ;
      const beingInactive = (
        document.body.matches(`:not(:focus-within ):not(:hover )`)
      ) ;

      if (beingActive ) {
        return 0.1 ;
      }
      if (beingInactive) {
        return 0.6 ;
      }

      return 0.5 ;
    } , dependencyList ) ;

    // TODO
    /**
     * since the above "interval" firing is likely to be delayed for a while initially,
     * we'll need, as work-around, an immediate "quasi-synchronous" "initial call" like this
     * 
     */
    React["useLayoutEffect"](() => {
      runMain() ;
    } , [runMain,] ) ;

  }
) ;








;

export const EnhancedTableC = (
  describeComponent(function EnhancedTableCImpl({ className: cnm, children, style: s, ...otherProps } : (
    JSX.IntrinsicElements["table"]
  ))
  {
    const wholeBRef = (
      useHtmlElemtRefAlt1
    )<HTMLTableElement>() ;

    const {
      wholeBAsgn ,
      mainPresenter ,
    } = useRefBasedDirectPresenter1(wholeBRef, function (e) {
      ;

      // const pRe = re.parentElement ;
      // const parentWrDir = (
      //   pRe && getComputedStyle(pRe,).writingMode
      // ) ;
      // re.style.setProperty("--ovcbxassigned-studkenhancedtableelementprops-originalwritingdircssval", parentWrDir ) ;
      captureStyleValuesAs(e, {
        ["studkenhancedtableelementprops-originalwritingdircssval"]: "writingMode",
      } , {
        aRel: ARel.PARENT ,
      } )
    }) ;

    useDOmXEffect(() => {
      mainPresenter.applyRefresh() ;
    }, [mainPresenter] ) ;

    return (
      <table
      ref={wholeBAsgn}
      className={`studk-enhancedtableelement ${cnm} `}
      {...otherProps}
      style={{
        ...s ,
      }}
      >
        { children }
      </table>
    ) ;
  } )
) ;





;

import "studk-ui/src/tabularUi/reactjs/tbl-default1.scss" ;

;









