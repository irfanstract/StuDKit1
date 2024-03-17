



import * as React from "react" ;



import {
  SingleChildDiv,
} from "@/components/SingularComponent1"; ;

import { MainAndNavAndFinaleC, } from "@/components/mainAndAside" ;

import Link from "next/link" ;

import { NavigateBackButton, } from "@/components/NavigateButtons"; ;



import "@/appInternalScripts/env" ;

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

          const articleWindowPaddingProps = {
            //
            paddingBlock: "2em 3em",
            paddingInline: "0.51em 0.51em",
          } satisfies React.CSSProperties ;

          return (
            //
            <div
            className="arbrd-d1"
            style={{
              //
            }}
            >
            <div
            className="arbrd-d2"
            style={{
              background: "white",
              color: "black",
              //
              boxShadow: "#0000002d 0 0 0.3em 0.3em" ,
              borderRadius: "0.25em" ,
              border: "0.05em solid black" ,
              //
              minWidth: "60vw",
              minHeight: "60vh",
              //
              paddingBlock: articleWindowPaddingProps.paddingBlock,
              paddingInline: articleWindowPaddingProps.paddingInline,
            }}
            >
              <ChildrenAndOutlineAndExploring
              children={(
                <div
                style={{
                  display: "block flow-root",
                  paddingInlineEnd: `2em` ,
                  minBlockSize: "45em",
                }}
                >
                  { children ?? null }
                </div>
              ) }
              outline={(
                <div>
                <p>
                  ⛳ In This Article
                </p>
                </div>
              )}
              exploring={(
                <div>
                <p>
                  ↗⛰⛱ Explore
                </p>
                </div>
              )}
              />
            </div>
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
              </React.Fragment>
            </menu>
        </SingleChildDiv>
      )}
      />
      </body>
    </html>
  )
}


const ChildrenAndOutlineAndExploring = (...[{ children, outline: outlinePane, exploring: exploringPane, }] : [{ children: (React.ReactNode & {} ) | null, outline?: React.ReactElement, exploring?: React.ReactElement, }]) => {
  ;
  return (
    <div className="strl-d1">
      <div className="strl-d2">
        {children}
      </div>
      <div className="strl-exploringAndOutline">
        { outlinePane }
        { exploringPane }
      </div>
    </div>
  ) ;
} ;



