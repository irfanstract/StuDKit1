



import * as React from "react" ;



/* import needs to be pre/repeated preceding the imports of component defs, as work-around to the naive approach the platform takes to bundle CSS */
// console["log"](new Error("l") ) ;
import "@/public/global.css" ;
import "@/appInternalScripts/env" ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import { MainAndNavAndFinaleC, } from "studk-ui/src/xst/prefabs/studkdem-semanticlayout-site-mnavf.tsx" ;

import Link from "next/link" ;

import {
  NavigateBackButton,
  NavigateForwardButton ,
} from "studk-ui/src/meta/react/uiNavigateBackForth.tsx"; ;



import "@/appInternalScripts/env" ;

// import "./layout.css" ;








import { KmcbsRootLayoutC, } from "studk-ui/src/xst/prefabs/kmcbsRootLayout1.tsx" ;

import {
  WithOverlaySupportC,
} from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="en" style={{ }}>
      <body
      className={(
        [
        ]
        .join(" ")
      )}
      style={{
        padding: 0,
        margin: 0,
        maxWidth: `100vw`,
        overflowX: "clip",
      }}
      >
        <WOSC>
        <KmcbsRootLayoutC
        children={children }
        />
        </WOSC>
      </body>
    </html>
  ) ;
}

const WOSC : React.JSXElementConstructor<React.PropsWithChildren> = (
  function WOSComp({ children, })
  {
    return (
      <WithOverlaySupportC>
        { children }
      </WithOverlaySupportC>
    ) ;
  }
) ;

// import {
//   SpclCurrentlyPathDisplay ,
// } from "./layoutComponents" ;

import {
  pagesConventions,
  describeHeadlinedWidget ,
} from "@/appInternalScripts/appPagesConvention"; ;







