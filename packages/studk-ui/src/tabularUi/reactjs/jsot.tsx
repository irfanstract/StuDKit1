
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

import {
  MNI_CTXTUALONLY ,
  XJson,
  mkArray ,
} from 'studk-ui-fwcore/src/util/EWithOpt.ts'; ;






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
  describeWorksheet ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/meta/react/dbc.tsx'; ;







export {
  renderAsJson,
} ;

function renderAsJson(...args: [dataset: XJson.IAny , C: "div" | "span" , ] ): React.ReactElement ;
function renderAsJson(...[v, C] : [dataset: XJson.IAny , C: "div" | "span" , ] )
{
  ;

  function renderList(...[{ unordered, }, c] : [opts: { unordered: boolean, }, c: (readonly [React.Key , React.ReactElement])[]] )
  {
    if (C === "div") {
      const L = unordered ? "ul" : "ol" ;
      return (
        <L
        children={(
          c
          .map(([k, e]) => (
            <li key={k} children={e} /> 
          ))
        ) }
        />
      ) ;
    }
    return (
      <span
      children={(
        c
        .map(([k, e]) => (
          <span key={k} >
            { e }
            { ";" } {}
          </span>
        ))
      ) }
      />
    ) ;
  }

  if (XJson.isDictOrArray(v))
  {
    if (XJson.isArray(v)) {
      return (
        <div>
          { "[" }
          { renderList({ unordered: false }, (
            v
            .map((v, i) => [i, renderAsJson(v, C)] as const )
          ) ) }
          { "]" }
        </div>
      ) ;
    }
    return (
      <div>
      { "{" }
      { renderList({ unordered: true }, (
        Object.entries(v)
        .map(([k, v], i) => [k, renderAsJson(v, C)] as const )
      ) ) }
      { "}" }
      </div>
    ) ;
  }
  return (
    <code children={JSON.stringify(v, null, 0) } />
  ) ;
}











