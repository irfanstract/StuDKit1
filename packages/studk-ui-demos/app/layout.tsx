



import * as React from "react" ;



/* import needs to be pre/repeated preceding the imports of component defs, as work-around to the naive approach the platform takes to bundle CSS */
// console["log"](new Error("l") ) ;
import "@/public/global1.scss" ;
import "@/appInternalScripts/env" ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import { MainAndNavAndFinaleC, } from "studk-ui/src/xst/prefabs/studkdem-semanticlayout-site-mnavf.tsx" ;

import AppLink from "next/link" ;

import {
  NavigateBackButton,
  NavigateForwardButton ,
} from "studk-ui/src/meta/react/uiNavigateBackForth.tsx"; ;



/**
 * trying to make module `@/appInternalScripts/env` run .
 * it seems like the FW refuses to re-run this file `layout.tsx` on Client-Side, so
 * we need to make the module define-and-export a Client Component and actually put the exported Component into display ;
 * otherwise, the module's code will never run, since nothing else will ever cause the module's code to run
 * 
 */
import { EnvTsxMainDummyC, } from "@/appInternalScripts/env" ;

import "./layout.scss" ;








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
    <>
    <EnvTsxMainDummyC />
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
        footerSecContents={(
          <menu>
          <React.Fragment>
              <AppLink href="/" >
              Home
              </AppLink>
              --
              <AppLink href="/reference/demos/" >
              Demos
              </AppLink>
              <AppLink href="/reference/emptypage/" >
              Empty Page
              </AppLink>
              --
              <AppLink href="/credits/">
              credits
              </AppLink>
              --
              <AppLink href="about:blank">
              <code>about:blank</code>
              </AppLink>
              --
              <NavigateBackButton />
              <NavigateForwardButton />
          </React.Fragment>
          </menu>
        )}
        />
        </WOSC>
      </body>
    </html>
    </>
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







