



/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  // ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;






import * as React from "react" ;





import {
  describeComponent,
} from '#currentPkg/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from '#currentPkg/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  MainAndNavAndFinaleC,
} from "studk-ui/src/xst/prefabs/studkdem-semanticlayout-site-mnavf" ;

import Link from "next/link" ;

import {
  NavigateBackButton,
  NavigateForwardButton ,
} from "studk-ui/src/meta/react/uiNavigateBackForth" ;


// TODO

import "./kmcbsRootLayout1.scss" ;








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
  const metaProviderLogo = (
    <span>
    ☘ KMC Book Studio ⚾
    </span>
  ) ;
  const subsiteLogo = (
    subsiteLogoArg || organisingTeamLogoArg || (
      metaProviderLogo
    )
  ) ;
  const organisingTeamLogo = (
    organisingTeamLogoArg || subsiteLogo || (
      metaProviderLogo
    )
  ) ;
  const version = versionArg ?? "1.1";
  const asClsVerTag = (
    `studk-kmcbsrootmnvf-of-version${String(version).replace(/\./g, "p") }`
  );
  const footerSecContents = (
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
  ) ;
  return (
      <MainAndNavAndFinaleC
      className={`studk-kmcbsrootmnvf-whole ${asClsVerTag} `}
      main={(
        //
        (() => {
          ;

          // ↗⛰⛱⛲⛳☸★

          return (
            //
            <div
            className={`arbrd-d1 studk-kmcbsrootmnvf-main ${asClsVerTag}`}
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
        className={`studk-kmcbsrootmnvf-aside studk-kmcbsrootmnvf-navdiv ${asClsVerTag} `}
        style={{
        }}
        >
          <menu>
            { subsiteLogo }
          </menu>
        </SingleChildDiv>
      )}
      finale={(
        <SingleChildDiv
        className={`studk-kmcbsrootmnvf-aside studk-kmcbsrootmnvf-footerdiv ${asClsVerTag} `}
        style={{
          //
        }}
        >
          { footerSecContents }
        </SingleChildDiv>
      )}
      />
  );
} ;
















