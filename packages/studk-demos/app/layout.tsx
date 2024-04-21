



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
      <MainAndNavAndFinaleC
      main={(
        //
        (() => {
          ;

          // ↗⛰⛱⛲⛳☸★

          return (
            //
            <div
            className="arbrd-d1"
            style={{
              //
            }}
            >
              { children ?? null }
          </div>
          ) ;
        } )()
      )}
      nav1={(
        <SingleChildDiv style={{ background: "black", color: "white", fontWeight: "650" }}>
          <menu>
            <span>
            KMC Book Studio
            </span>
          </menu>
        </SingleChildDiv>
      )}
      finale={(
        <SingleChildDiv style={{ background: "black", color: "white", fontWeight: "650" }}>
            <menu>
              <span>
              KMC Book Studio
              </span>
              --
              <React.Fragment>
                  <Link href="/" >
                  Home
                  </Link>
                  --
                  <Link href="credits/">
                  credits
                  </Link>
                  --
                  <Link href="about:blank">
                  <code>about:blank</code>
                  </Link>
                  --
                  <NavigateBackButton />
                  <NavigateForwardButton />
              </React.Fragment>
            </menu>
        </SingleChildDiv>
      )}
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







