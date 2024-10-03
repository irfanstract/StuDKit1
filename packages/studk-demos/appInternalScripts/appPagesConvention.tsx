



// /* 
//  * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
//  * https://stackoverflow.com/q/77592173  
//  * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
//  * 
//  * */
// "use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






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
  withExtraSemanticProperties ,
} from 'studk-ui-fwcore/src/react-dom/helpers/WithAddedSemanticProperties.tsx'; ;

// import {
//   SingleChildDiv,
// } from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;

import * as ReactDOM from "react-dom" ;






import dynamicComponent from "next/dynamic";

export {
  dynamicComponent as dynamicComponent,
} ;

import Link from "next/link";

import Image from "next/image";

export {
  Link as Link,
  Image as Image,
} ;





/* ts(1205) */
namespace pagesConventions { ; }

export { pagesConventions , } ;

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

void [ReactDOM].slice(0) ;

export * from "@/appInternalScripts/appPagesButtons" ;
import {
  AsTocAllocatingAncestorC ,
} from "@/appInternalScripts/appPagesButtons" ;

export const RPC = (
  function RPCompImpl(props : React.PropsWithChildren )
  {
    let e: React.ReactElement = <>{ props.children }</> ;
    e = (
      <AsTocAllocatingAncestorC
      key={2}
      children={e}
      />
    ) ;
    return e ;
  }
) ;





;









