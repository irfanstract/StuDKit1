



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
  describeComponent(function SCDWRP({ style, ...props }: JSX.IntrinsicElements["div"]) {
    return (
       <SingleChildDiv {...props} style={{ border: `0.05em solid black`, ...style } } />
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
    function MainAndNavAndFinaleCImpl({ main: mainComp, nav1 = <div />, finale = <div />, } : (
      { main: React.ReactNode ; nav1?: React.ReactElement ; finale?: React.ReactElement ; }
    )) {
      ;
      return (
        <div style={{
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
        }}>
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
            style={{
              order: 1 ,
              flex: "1 1 auto",
              // backgroundColor: "white",
              // color: "black",
            }}
            >
                { mainComp }
            </SCD>
            <SCD style={{ order: 0, position: "sticky", insetBlockStart: 0, backgroundColor: "inherit", fontSize: `80%`, }} >
                { nav1 }
            </SCD>
            <SCD style={{ order: 2 , position: "sticky", insetBlockEnd: 0, backgroundColor: "inherit", fontSize: `80%`, zIndex: `50` }}>
                { finale }
            </SCD>
          </div>
        </div>
      ) ;
    }
  ))
) ;

export {
  MainAndNavAndFinaleC ,
} ;









