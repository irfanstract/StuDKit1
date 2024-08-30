



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






import * as React from "react" ;

import {
  describeComponent,
} from '#currentPkg/src/meta/react/dec.tsx'; ;






/**
 * {@link describeHeadlinedArticle }
 * 
 * this abstraction
 * is meant as work-around to issues described in the intro of {@link describeArticleImpl}.
 * 
 */
export function describeHeadlinedArticle(...[{ heading: headingArg, children, ...prps }] : [{
  heading: React.ReactElement,
  children: React.ReactElement | React.ReactElement[] ,
} & DhaCommonProps ])
{
  return (
    describeArticleImpl({
      heading: headingArg ,
      children ,
      restProps: prps ,
    })
  ) ;
}

/**
 * {@link describeArticle }
 * 
 * this abstraction
 * is meant as work-around to issues described in the intro of {@link describeArticleImpl}.
 * 
 */
export function describeArticle(...[{ heading: headingArg = null, children, ...prps }] : [{
  heading?: React.ReactElement | null,
  children: React.ReactElement | React.ReactElement[] ,
} & DhaCommonProps ])
{
  return (
    describeArticleImpl({
      heading: headingArg ,
      children ,
      restProps: prps ,
    })
  ) ;
}

interface DhaCommonProps extends Pick<JSX.IntrinsicElements["div"] , "style" >
{}

/**
 * {@link describeArticleImpl }
 * 
 * bases on discussions
 * https://css-tricks.com/document-outline-dilemma/ and
 * https://github.com/whatwg/html/issues/83 and https://github.com/whatwg/html/pull/3499 
 * .
 * this forcing us to resort to {@link XHC } ;
 * in future
 * we may eventually
 * acquire automatic means for *automatically assigning h-level(s) properly for these "heading"s* .
 * 
 */
function describeArticleImpl(...[{ heading: headingArg = null , children, classNameProp = ``, restProps: prps, }] : [{
  heading: React.ReactElement | null,
  children: React.ReactElement | React.ReactElement[] ,
  classNameProp?: string ,
  restProps: DhaCommonProps ,
} ])
{
  return (
    <section className={`${classNameProp } studk-ui-dhc-sectionboundary `} {...prps}>
      { (headingArg !== null) && (
        <XHC children={headingArg } />
      ) }
      <div>
        { children }
      </div>
    </section>
  ) ;
}
namespace describeArticleImpl { ; }

namespace describeArticleImpl
{

  /**
   * `true` IOIF
   * the {@link Element}
   * maps to complete fragment returned by {@link describeArticleImpl}
   * .
   * 
   */
  export function isFullSecElemPeer(e: HTMLElement | SVGElement) : boolean
  export function isFullSecElemPeer(e: HTMLElement | SVGElement)
  {
    return e.matches(`.studk-ui-dhc-sectionboundary`) ;
  }

}

export function describeWorksheet(...[{ heading, children, style = {}, ...prps }] : [{
  heading?: never,
  children: React.ReactElement | React.ReactElement[] ,
} & Pick<JSX.IntrinsicElements["div"] , "style" > ])
{
  return (
    <section
    style={{
      overflow: "auto",
      ...style,
    }}
    {...prps}
    >
      <div>
        { children }
      </div>
    </section>
  ) ;
}

/**
 * {@link XHC }
 * 
 * bases on discussions
 * https://css-tricks.com/document-outline-dilemma/ and
 * https://github.com/whatwg/html/issues/83 and https://github.com/whatwg/html/pull/3499 
 * .
 * this forcing us to resort to regular `<p>` (this time with `<strong>`) or `<b>` ;
 * in future
 * we may eventually
 * acquire automatic means for *automatically assigning h-level(s) properly for these "heading"s* .
 * 
 */
const XHC = (
  // TODO
  describeComponent(function XHCRend({ children: c, } : { children: React.ReactNode & {} ; } ) {
    return (
      //
      <p children={<b children={c} /> } />
    ) ;
  })
) ;

export { XHC, } ;





export {
  /** @deprecated */
  describeComponent ,
} ;









