



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







// import "./layout.css" ;

import {
  pagesConventions,
  describeHeadlinedWidget, 
  TocRenderingC,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  ChildrenAndOutlineAndExploring ,
  SpclCurrentlyPathDisplay ,
} from "@/appInternalScripts/layoutComponents" ;

;







import {
  KmcbsRootLayoutC,
} from "studk-ui/src/xst/prefabs/kmcbsRootLayout1.tsx" ;

export default function LdDirPageLayoutC({
  children: c3,
}: {
  children: React.ReactNode
})
{

  const c21 = (
    (() => {
    ;
  
    const Div1 = "div" ;
    
    return (
      <Div1>
              <div
              className="arbrd-d2"
              style={{
                background: "white",
                color: "black",
                //
                border: "0.05em solid black" ,
                //
                minWidth: "60vw",
                minHeight: "60vh",
              }}
              >
                <SpclCurrentlyPathDisplay />
                <div
                >
  
                <ChildrenAndOutlineAndExploring
                children={(
                  <div
                  style={{
                    display: "block flow-root",
                    paddingInlineEnd: `2em` ,
                    minBlockSize: "45em",
                  }}
                  >
                    <div
                    className="arbrd-d3 studk-ui-pageoverall-main "
                    style={{
                      //
                    }}
                    >
                    { c3 ?? null }
                    </div>
                  </div>
                ) }
                outline={(
                  describeHeadlinedWidget({
                    heading: (
                      <span>
                        ⛳ In This Article
                      </span>
                    ) ,
                    children: (
                      // <div/>
                      <div>
                        <TocRenderingC
                        />
                      </div>
                    ) ,
                  })
                )}
                exploring={(
                  describeHeadlinedWidget({
                    heading: (
                      <span>
                        ↗⛰⛱ Explore
                      </span>
                    ) ,
                    children: <div/> ,
                  })
                )}
                />
  
                </div>
              </div>
      </Div1>
    ) ;
    })()
  ) ;
  
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
        { c21 }
      </div>
    </div>
  ) ;

  return (
    <KmcbsRootLayoutC
    children={c1 }
    />
  ) ;

} ;














