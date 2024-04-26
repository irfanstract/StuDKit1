



import * as React from "react" ;



import {
  SingleChildDiv,
} from "@/components/SingularComponent1"; ;

import { MainAndNavAndFinaleC, } from "@/components/mainAndAside" ;

import Link from "next/link" ;

import {
  NavigateBackButton,
  NavigateForwardButton ,
} from "@/components/NavigateButtons"; ;


// TODO

// import "./layout.css" ;








export const KmcbsRootLayoutC = function RootLayoutComp({
  children,
  subsiteLogo: subsiteLogoArg ,
  organisingTeamLogo: organisingTeamLogoArg ,
  version: versionArg ,
}: {
  children: React.ReactNode ,
  subsiteLogo ?: React.ReactElement ,
  organisingTeamLogo ?: React.ReactElement ,
  version ?: "1.0" | "1.1" ,
})
{
  const templateMaintainerLogo = (
    <span>
    KMC Book Studio
    </span>
  ) ;
  const subsiteLogo = (
    subsiteLogoArg || organisingTeamLogoArg || (
      templateMaintainerLogo
    )
  ) ;
  const organisingTeamLogo = (
    organisingTeamLogoArg || subsiteLogo || (
      templateMaintainerLogo
    )
  ) ;
  const version = versionArg ?? "1.1";
  return (
      <MainAndNavAndFinaleC
      main={(
        //
        (() => {
          ;

          // ↗⛰⛱⛲⛳☸★

          return (
            //
            <div
            className="arbrd-d1 studk-kmcbsrootmnvf-main "
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
        <SingleChildDiv
        className="studk-kmcbsrootmnvf-aside "
        style={{
          background: (1.1 <= Number(version)) ? `rgba(0 0 0 / 0.6)` : "black",
          color: "white",
          fontWeight: "650" ,
          backdropFilter: `blur(0.75em)`,
        }}
        >
          <menu>
            { subsiteLogo }
          </menu>
        </SingleChildDiv>
      )}
      finale={(
        <SingleChildDiv
        className="studk-kmcbsrootmnvf-aside "
        style={{ background: "black", color: "white", fontWeight: "650" }}
        >
            <menu>
              <span>
                { organisingTeamLogo }
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
  )
} ;

console["log"]({ KmcbsRootLayoutC, }) ;







