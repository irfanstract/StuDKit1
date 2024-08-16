













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
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

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
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui-fwcore/src/xt/ovc-util.tsx" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

import {
  withRef ,
} from "studk-ui-fwcore/src/reactjs/helpers/withAdHocRefs.tsx" ;

import {
  ARel ,
  captureStyleValuesAs ,
} from "studk-ui-core-ovcstack/src/main/ovcbAncestorElementStyleValueCapture.tsx" ;








;

export const EnhancedTableC = (
  describeComponent(function EnhancedTableCImpl({ className: cnm, children, style: s, ...otherProps } : (
    JSX.IntrinsicElements["table"]
  ))
  {
    const wholeBRef = React.useRef<HTMLTableElement | null>(null) ;

    const mainPresenter = (
      React.useMemo(() => ({
        applyRefresh: () => {{
          const re = wholeBRef.current ;
          if (re) {
            // const pRe = re.parentElement ;
            // const parentWrDir = (
            //   pRe && getComputedStyle(pRe,).writingMode
            // ) ;
            // re.style.setProperty("--ovcbxassigned-studkenhancedtableelementprops-originalwritingdircssval", parentWrDir ) ;
            captureStyleValuesAs(re, {
              ["studkenhancedtableelementprops-originalwritingdircssval"]: "writingMode",
            } , {
              aRel: ARel.PARENT ,
            } )
          }
        }
        } ,
      }) , [wholeBRef] )
    ) ;

    useIntervalEffect(() => {
      mainPresenter.applyRefresh() ;
    }, 0.1 * 1000, [mainPresenter] ) ;

    return (
      <table
      ref={wholeBRef}
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









