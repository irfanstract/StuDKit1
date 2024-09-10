



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
  // ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;






import * as React from "react" ;





import {
  describeComponent,
} from '#currentPkg/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from '#currentPkg/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

const SCD = (
  describeComponent(function SCDWRP({ style, ...remProps }: JSX.IntrinsicElements["div"]) {
    return (
       <SingleChildDiv
       {...remProps}
       style={{
        // border: `0.05em solid black`,
        ...style
       } }
       />
    ) ;
  })
) ;

import {
  Button ,
  Span ,
} from '#currentPkg/src/meta/react/dbc.tsx'; ;

// import Link from "next/link" ;








export {
  /** @deprecated */
  SCD,
} ;




const MainAndNavAndFinaleC = (
  describeComponent((
    function MainAndNavAndFinaleCImpl({ main: mainComp, nav1 = <div />, finale = <div />, className = ``, } : (
      & { main: React.ReactNode ; nav1?: React.ReactElement ; finale?: React.ReactElement ; }
      & Pick<JSX.IntrinsicElements["div"], "className" >
    )) {
      ;
      return (
        <div
        className={`studk-mnavf-wholediv ${className}`}
        style={{
          position: "relative",
          // display: "flex",
          // flexDirection: "column",
          // backgroundColor: "black",
          // color: "white",
          overflowBlock: "auto",
          // minBlockSize: `100vh`,
          // inlineSize: `100vw`,
          overflowInline: "clip",
          overflowX: "clip",
        }}
        >
          <div style={{
            // position: "relative",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "black",
            // color: "white",
            // overflowBlock: "auto",
            minBlockSize: `100vh`,
            // inlineSize: `100vw`,
            // overflowInline: "clip",
            // overflowX: "clip",
          }}>
            <SCD
            className="studk-mnavf-maindiv studk-mnavf-maindiv1 "
            style={{
              flex: "1 1 auto",
              // order: 1 ,
              // backgroundColor: "white",
              // color: "black",
            }}
            >
                { mainComp }
            </SCD>
            <SCD
            className="studk-mnavf-header "
            style={{
              // order: 0,
              // position: "sticky", insetBlockStart: 0,
              // backgroundColor: "inherit",
              // fontSize: `80%`,
              // zIndex: `var(--layers-headnav)`,
            }}
            >
                { nav1 }
            </SCD>
            <SCD
            className="studk-mnavf-footer "
            style={{
              // order: 2 ,
              // position: "sticky", insetBlockEnd: 0,
              // backgroundColor: "inherit",
              // fontSize: `80%`,
              // zIndex: `var(--layers-footer)`,
            }}
            >
                { finale }
            </SCD>
          </div>
        </div>
      ) ;
    }
  ))
) ;

import "./studkdem-semanticlayout-site-mnavf.scss" ;

export {
  MainAndNavAndFinaleC ,
} ;









