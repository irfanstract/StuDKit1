



import * as React from "react" ;



/**
 * trying to make module `@/appInternalScripts/env` run .
 * it seems like the FW refuses to re-run this file `layout.tsx` on Client-Side, so
 * we need to make the module define-and-export a Client Component and actually put the exported Component into display ;
 * otherwise, the module's code will never run, since nothing else will ever cause the module's code to run
 * 
 */
import {
  EnvTsxMainDummyC,
} from "@/appInternalScripts/env" ;

import "@/public/global1.scss" ;



import {
  pagesConventions,
  describeHeadlinedWidget, 
  RPC,
} from "@/appInternalScripts/appPagesConvention"; ;

import { allFonts, } from "@/appInternalScripts/fonts" ;

import "./layout.css" ;








import {
} from "./layoutComponents" ;

import {
  NavigateBackButton,
  NavigateForwardButton ,
} from "@/components/NavigateButtons"; ;

import { KmcbsRootLayoutC, } from "studk-ui/src/xst/prefabs/kmcbsRootLayout1.tsx" ;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <>
    <EnvTsxMainDummyC />
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
      <RPC children={children} />
      </body>
    </html>
    </>
  )
}







