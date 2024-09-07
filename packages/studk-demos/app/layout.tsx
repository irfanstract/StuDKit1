



import * as React from "react" ;



import Link from "next/link" ;

import { MainAndNavAndFinaleC, } from "@/components/mainAndAside" ;

import { NavigateBackButton, } from "@/components/NavigateButtons"; ;



import "@/public/global.css" ;

import "./layout.css" ;








export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="en" style={{ background: "hsl(89.88deg 100% 31.5%)", color: "black" }}>
      <body style={{ padding: 0, margin: 0 }}>
      <MainAndNavAndFinaleC
      main={(
        //
        (() => {
          ;
          return (
            //
            <div style={{ paddingInline: "1em 1em", paddingBlock: "1em 1em", [1 ? "overflowX" : "overflowInline"]: "auto", }}>
            <div
            style={{
              background: "white",
              color: "black",
              //
              boxShadow: "#0000002d 0 0 0.3em 0.3em" ,
              borderRadius: "0.15em" ,
              border: "0.05em solid black" ,
              //
              minWidth: "60vw",
              minHeight: "60vh",
            }}
            >
              <ChildrenAndOutlineAndExploring
              children={children ?? null }
              outline={(
                <div>
                <p>
                  Explorer
                </p>
                </div>
              )}
              exploring={(
                <div>
                <p>
                  Explorer
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
        <div style={{ background: "black", color: "white", fontWeight: "650" }}>
          <p>
            KMC Book Studio
          </p>
        </div>
      )}
      finale={(
        <div style={{ background: "black", color: "white", fontWeight: "650" }}>
            <p>
              KMC Book Studio
              --
              <span>
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
              </span>
            </p>
        </div>
      )}
      />
      </body>
    </html>
  )
}


const ChildrenAndOutlineAndExploring = (...[{ children, outline: outlinePane, exploring: exploringPane, }] : [{ children: (React.ReactNode & {} ) | null, outline?: React.ReactElement, exploring?: React.ReactElement, }]) => {
  ;
  return (
    <div className="strl-d1" style={{ display: "flex", flexDirection: "row" }} >
      <div className="strl-d2" style={{ flex: `1 1 32em`, }}>
        <div style={{ minHeight: `180vh` }}>
        {children}
        </div>
      </div>
      <div style={{ flex: `1 1 10em`, }}>
        <div className="strl-exploringAndOutline" style={{ display: `grid`, grid: `"b" "a" `, position: "sticky", top: 0, height: `90vh`, }}>
          { outlinePane }
          { exploringPane }
        </div>
      </div>
    </div>
  ) ;
} ;



