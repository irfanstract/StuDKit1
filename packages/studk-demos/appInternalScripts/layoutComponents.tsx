



/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;

import {
  NativeButton ,
  ButtonC ,
  SpanC ,
} from "studk-ui/src/xst/dbc.tsx" ;

import Link from "next/link" ;

;

export const ChildrenAndOutlineAndExploring = (...[{ children, outline: outlinePane, exploring: exploringPane, }] : [{ children: (React.ReactNode & {} ) | null, outline?: React.ReactElement, exploring?: React.ReactElement, }]) => {
  ;
  return (
    <div className="strl-d1">
      <div className="strl-d2">
        {children}
      </div>
      <div className="strl-exploringAndOutline">
        { outlinePane }
        { exploringPane }
      </div>
    </div>
  ) ;
} ;

export const ActivableStudkCard = (
  function (props: React.PropsWithChildren<{ autoActivate ?: boolean, }>)
  {
    const { children: e0, autoActivate = true, } = props ;

    const e1 = (
      <>{ e0 }</>
    ) ;

    return (
      <studk-card>
        { e1 }
      </studk-card>
    ) ;
  }
) ;

export const AsResettibleC = (
  function (props: React.PropsWithChildren)
  {

    const [k, adv] = (
      React.useReducer<(x: number) => number>(x => (x + 1), 1 )
    ) ;

    return (
      <div
      key={k}
      style={{
        display: "flex" ,
        flexDirection: "column-reverse",
      }}
      >
        <div>
        { props.children }
        </div>
        <div>
          <nav>
            <ButtonC
            children={`Reset` }
            onClick={e => adv() }
            />
          </nav>
        </div>
      </div>
    ) ;
  }
) ;


;




;

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








