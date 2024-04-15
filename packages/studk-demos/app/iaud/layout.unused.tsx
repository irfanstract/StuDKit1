



import Link from "next/link" ;

import { MainAndNavAndFinaleC, } from "@/components/mainAndAside" ;



import "@/public/global.css" ;








export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ background: "hsl(209.88deg 100% 87.5%)", color: "black" }}>
      <body style={{ padding: 0, margin: 0 }}>
      <MainAndNavAndFinaleC
      main={(
        //
        <div style={{ paddingBlock: "1em 1em", }}>
        <div
        style={{
          background: "white",
          color: "black",
          //
          borderRadius: "0.15em" ,
          //
          minWidth: "60vw",
          minHeight: "60vh",
        }}
        >
          {children}
        </div>
      </div>
      )}
      nav1={(
        <div style={{ background: "black", color: "white", fontWeight: "650" }}>
          <p>
            StuDK Focused Demo Page
          </p>
        </div>
      )}
      finale={(
        <div style={{ background: "black", color: "white", fontWeight: "650" }}>
            <p>
              StuDK
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
              </span>
            </p>
        </div>
      )}
      />
      </body>
    </html>
  )
}
