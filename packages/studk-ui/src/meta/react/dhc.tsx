
/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets just have `"use client"` wherever possible
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
export function describeHeadlinedArticle(...[{ heading: headingArg = null, children, ...prps }] : [{
  heading?: React.ReactElement,
  children: React.ReactElement | React.ReactElement[] ,
} & Pick<JSX.IntrinsicElements["div"] , "style" > ])
{
  return (
    <section {...prps}>
      { (headingArg !== null) && (
        <p>
          <b>
          { headingArg }
          </b>
        </p>
      ) }
      <div>
        { children }
      </div>
    </section>
  ) ;
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





export {
  /** @deprecated */
  describeComponent ,
} ;









