



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
}: {
  children: React.ReactNode ,
  subsiteLogo ?: React.ReactElement ,
  organisingTeamLogo ?: React.ReactElement ,
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
            { subsiteLogo }
          </menu>
        </SingleChildDiv>
      )}
      finale={(
        <SingleChildDiv style={{ background: "black", color: "white", fontWeight: "650" }}>
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







