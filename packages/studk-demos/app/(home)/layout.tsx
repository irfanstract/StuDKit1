






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;







// import "./layout.css" ;







import {
  KmcbsRootLayoutC,
} from "studk-ui/src/xst/prefabs/kmcbsRootLayout1.tsx" ;

export default function PageLayoutC({
  children,
}: {
  children: React.ReactNode
})
{

  const c1 = (
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
  ) ;

  return (
    <KmcbsRootLayoutC
    children={c1 }
    />
  ) ;

} ;














