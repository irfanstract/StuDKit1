
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;

import Link from "next/link" ;

import {
  usePathname,
} from 'next/navigation'; ;







const SpclCurrentlyPathDisplay = () => {
  ;
  const path = usePathname() ;
  const pathComps = (
    path.split(/[\/\\]+/g)
    .filter(e => e.length )
  ) ;
  return (
    <p>
      { (
        [
          `Home`,
          ...(
            pathComps
            .map(e => (
              <code>{ e }</code>
            ))
          ),
        ]
        .map((word, i) => (
          <Link
          href={"/" + pathComps.slice(0, i).join("/") }
          >
            { word }
          </Link>
        ) )
        .flatMap(e => [' > ', e] )
        .slice(1)
        .map((e, i) => (
          <React.Fragment key={i} children={e} />
        ) )
      ) }
    </p>
  ) ;
} ;

export { SpclCurrentlyPathDisplay, } ;








