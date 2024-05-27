







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;






// import dynamicComponent from "next/dynamic";
const dynamicComponent: (
  // | (typeof util.L.identity)
  | (typeof import("next/dynamic").default )
  | null
) = (
  null
) ;

export {
  dynamicComponent as dynamicComponent,
} ;

import AppLink from "next/link";

// import NxImage from "next/image";
const Image: (
  | React.ElementType<JSX.IntrinsicElements["img"] >
  | (typeof import("next/image") )
) = "img" ;

// export {
//   default as NxImage,
// } from "next/image";
export {
  AppLink as AppLink,
  Image as Image,
  // NxImage ,
} ;





export { pagesConventions , } ;
/* ts(1205) */
namespace pagesConventions { ; }

namespace pagesConventions
{
  /*
   * 
   * TODO update this to
   * reflect the discussions
   * https://css-tricks.com/document-outline-dilemma/ and
   * https://github.com/whatwg/html/issues/83 and https://github.com/whatwg/html/pull/3499 
   * 
   */
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









