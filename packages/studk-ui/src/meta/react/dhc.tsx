






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;






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
export function describeHeadlinedArticle(...[{ heading, children, ...prps }] : [{
  heading: React.ReactElement,
  children: React.ReactElement | React.ReactElement[] ,
} & Pick<JSX.IntrinsicElements["div"] , "style" > ])
{
  return (
    <section {...prps}>
      <p>
        <b>
        { heading }
        </b>
      </p>
      <div>
        { children }
      </div>
    </section>
  ) ;
}





export function describeComponent(...[a] : [(...args: [] ) => React.ReactElement] ): React.FC ;
export function describeComponent<Props>(...[a] : [(...args: [props: Props] ) => React.ReactElement] ): React.FC<Props> ;
export function describeComponent<Props>(...[a] : [(...args: [props: Props] | [] ) => React.ReactElement] )
{
  return a ;
}









