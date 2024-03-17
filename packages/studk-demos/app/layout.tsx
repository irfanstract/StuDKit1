



import Link from "next/link" ;

import { MainAndNavAndFinaleC, } from "../components/mainAndAside" ;



import "../public/global.css" ;








export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ background: "hsl(89.88deg 100% 31.5%)", color: "black" }}>
      <body style={{ padding: 0, margin: 0 }}>
      <MainAndNavAndFinaleC
      main={(
        //
        <div style={{ paddingInline: "1em 1em", paddingBlock: "1em 1em" }}>
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
          {children}
        </div>
      </div>
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
              </span>
            </p>
        </div>
      )}
      />
      </body>
    </html>
  )
}
