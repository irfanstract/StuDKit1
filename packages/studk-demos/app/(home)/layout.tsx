






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;







// import "./layout.css" ;







export default function HomePageLayoutC({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <div
    style={{
    }}
    >
      <div
      style={{
        maxInlineSize: `36em` ,
        marginInline: `auto` ,
      }}
      >
        { children }
      </div>
    </div>
  )
} ;














