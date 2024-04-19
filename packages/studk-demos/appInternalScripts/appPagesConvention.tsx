







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;






import dynamicComponent from "next/dynamic";

import Link from "next/link";

import Image from "next/image";





export { pagesConventions , } ;
/* ts(1205) */
namespace pagesConventions { ; }

namespace pagesConventions
{
  export function describeArticlePage(...[{ heading, children, ...prps }] : [{
    heading: React.ReactElement,
    children: React.ReactElement | React.ReactElement[] ,
  } & Pick<JSX.IntrinsicElements["div"] , "style" > ])
  {
    return (
      <div {...prps}>
        <h1>
          { heading }
        </h1>
        <div>
          { children }
        </div>
      </div>
    ) ;
  }
}

/**
 * {@link describeHeadlinedWidget }
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
export function describeHeadlinedWidget(...[{ heading, children, ...prps }] : [{
  heading: React.ReactElement,
  children: React.ReactElement | React.ReactElement[] ,
} & Pick<JSX.IntrinsicElements["div"] , "style" > ])
{
  return (
    <div {...prps}>
      <p>
        <b>
        { heading }
        </b>
      </p>
      <div>
        { children }
      </div>
    </div>
  ) ;
}





;









