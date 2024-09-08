



import * as React from "react" ;



/* import needs to be pre/repeated preceding the imports of component defs, as work-around to the naive approach the platform takes to bundle CSS */
// console["log"](new Error("l") ) ;
import "@/public/global.css" ;
import "@/appInternalScripts/env" ;

import {
  SingleChildDiv,
} from "@/components/SingularComponent1"; ;

import { MainAndNavAndFinaleC, } from "@/components/mainAndAside" ;

import Link from "next/link" ;

import {
  NavigateBackButton,
  NavigateForwardButton ,
} from "@/components/NavigateButtons"; ;



import "@/appInternalScripts/env" ;

import { allFonts, } from "@/appInternalScripts/fonts" ;

import "./layout.css" ;








import { KmcbsRootLayoutC, } from "studk-ui/src/xst/prefabs/kmcbsRootLayout1.tsx" ;

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
          ...(
            [...Object.values(allFonts) ]
            .map(fnt => fnt.variable )
          )
          ,
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
      <KmcbsRootLayoutC
      children={children }
      />
      </body>
    </html>
  )
}

import {
  SpclCurrentlyPathDisplay ,
} from "./layoutComponents" ;

import {
  pagesConventions,
  describeHeadlinedWidget ,
} from "@/appInternalScripts/appPagesConvention"; ;







