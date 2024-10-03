









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
  ArgsWithOptions ,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






;

import * as React from "react" ;






import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
  AppLinkAsLi,
} from "@/appInternalScripts/appPagesConvention"; ;

export default function App()
{
  ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          <code>/reference/demos</code>
        </span>
      ) ,
      children: (
        <div>
          <p>
            <b><code>/reference/demos</code> not yet public </b>
          </p>
          <ul>
            <AppLinkAsLi
            href="/"
            children={(
              <span>
                Studio Home
              </span>
            )}
            />
            <AppLinkAsLi
            href="/reference/demos/"
            children={(
              <span>
                Reference
              </span>
            )}
            />
          </ul>
        </div>
      ) ,
    })
  ) ;
} ;











