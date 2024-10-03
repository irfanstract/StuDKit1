









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

import {
  React ,
  StudkReactJs ,
  toComponentMountKey, 
  getSpaceSeparatedClassNameList,
  Button ,
  Span ,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;








export default function App()
{
  return (
    <div>
      <p>
        please open:
      </p>
      <ul>
        <li>
          <AppLink
          href="/reference/demos/all/"
          children={<code>all</code> }
          />
        </li>
        <li>
          <AppLink
          href="/reference/demos/sim3d/"
          children={<><i>Simulation 3D</i></> }
          />
        </li>
      </ul>
    </div>
  )
}






