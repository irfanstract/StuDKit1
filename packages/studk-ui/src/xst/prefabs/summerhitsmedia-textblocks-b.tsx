




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

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;







;

declare global {
  export namespace JSX {
    export interface IntrinsicElements
    {
      /**
       * on interactive media,
       * "phrasal block"s each
       * shows at different points in time
       * 
       */
      ["studk-spmea-phrasalblock" ] : IntrinsicElements["div"] ,

      /**
       * a column of phrasing content, in printed media
       * 
       */
      ["studk-spmea-msptextcolumn"  ] : IntrinsicElements["div"] ,

    }
  }
}

export const MspPhrasalBlockC: React.ElementType<JSX.IntrinsicElements["studk-spmea-phrasalblock"] > = (
  "studk-spmea-phrasalblock"
) ;

export const MspPhrasalTextColC: React.ElementType<JSX.IntrinsicElements["studk-spmea-msptextcolumn"] > = (
  "studk-spmea-msptextcolumn"
) ;

export namespace MspStacking { ; }

export namespace MspStacking {
  ;
}

interface MspStackingCProps extends Extend<JSX.IntrinsicElements["div"], {}>
{}

const MspStackingC: React.ElementType<MspStackingCProps> = (
  "studk-spmea-backgroundandcaption" as const
) ;

export { MspStackingC, } ;

declare global {
  export namespace JSX {
    export interface IntrinsicElements {
      ["studk-spmea-backgroundandcaption" ] : MspStackingCProps ,
    }
  }
}

import "./summerhitsmedia-textblocks-d.scss" ;

const XH = (
  describeHtmlComponent(function XHeadingCompImpl({ children, ...remProps } : JSX.IntrinsicElements["p"] ) {
    return (
      <p {...remProps}>
        <span
        children={(
          <i
          children={children}
          />
        )}
        />
      </p>
    ) ;
  } )
) ;

export { XH as XH, } ;



;

const describeSvgViewboxedApplet = (
  function (...[{ viewBox: viewBoxArg, }, e ] : [{ viewBox: string, }, React.ReactElement])
  {
    return (
      <div>
        <svg viewBox={viewBoxArg}>
          <g >
            { e }
          </g>
        </svg>
      </div>
    ) ;
  }
) ;

const describeUrlIcoApplet = (
  function (...[icoUrl] : [url: string])
  {
    return (
      <div>
        <svg viewBox="0 0 300 300">
          <g >
            <image
            {...{
              href: icoUrl ,
              width: 300,
              height: 300 ,
            }}
            />
          </g>
        </svg>
      </div>
    ) ;
  }
) ;

export {
  describeUrlIcoApplet ,
  /** @deprecated TODO/WIP */
  describeSvgViewboxedApplet as describeSvgApplet ,
  describeSvgViewboxedApplet as describeViewboxedSvgApplet ,
} ;

type PbcProps = PbcPropsImpl<any> ;

interface PbcPropsImpl<out icoT extends {}> {
  readonly ico: icoT ;
  readonly children: React.ReactNode ;
}

export const BackgroundedBlockC = (
  describeHtmlComponent(function BBlockCImpl({ children, ico: icoUrl, } : PbcPropsImpl<HTMLLinkElement["href"]> ) {
    return (
      <BackgroundedAdvBlockC
      ico={describeUrlIcoApplet(icoUrl) }
      children={children }
      />
    ) ;
  } )
) ;

export const PicturingBlockC = (
  describeHtmlComponent(function PicturingBlockCImpl({ children, ico: icoUrl, } : PbcPropsImpl<HTMLLinkElement["href"]> ) {
    return (
      <PicturingAdvBlockC
      ico={describeUrlIcoApplet(icoUrl) }
      children={children }
      />
    ) ;
  } )
) ;

export const BackgroundedAdvBlockC = (
  describeHtmlComponent(function BcAdvBlockCImpl({ children, ico: icoApplet, } : PbcPropsImpl< React.ReactElement> ) {
    return (
      <studk-card
      children={(
        <MspStackingC className="studk-printexactmode">
          <div>
            { icoApplet }
          </div>
          <studk-spmea-msptextcolumn
          style={{
            backdropFilter: `blur(0.1ex)` ,
            textAlign: `center`,
          }}
          children={children}
          />
        </MspStackingC>
      )}
      />
    ) ;
  } )
) ;

export const PicturingAdvBlockC = (
  describeHtmlComponent(function PicturingAdvBlockCImpl({ children, ico: icoApplet, } : PbcPropsImpl<React.ReactElement> ) {
    return (
      <studk-card
      children={(
        <MspStackingC className="studk-printexactmode">
          <div>
            { icoApplet }
          </div>
          <studk-spmea-msptextcolumn
          style={{
            justifyContent: "end" ,
          }}
          children={children}
          />
        </MspStackingC>
      )}
      />
    ) ;
  } )
) ;

















