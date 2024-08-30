






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;

import {
  usePathname,
} from 'next/navigation'; ;








import "./layout.css" ;







export default function ReferenceDirPageLayoutC({
  children,
}: {
  children: React.ReactNode
})
{
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
                  { children ?? null }
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
                  children: <div/> ,
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
  )
}

import {
  SpclCurrentlyPathDisplay ,
} from "../layoutComponents" ;

import {
  pagesConventions,
  describeHeadlinedWidget ,
} from "@/appInternalScripts/appPagesConvention"; ;



const ChildrenAndOutlineAndExploring = (...[{ children, outline: outlinePane, exploring: exploringPane, }] : [{ children: (React.ReactNode & {} ) | null, outline?: React.ReactElement, exploring?: React.ReactElement, }]) => {
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



