









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
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'







;

import * as React from "react" ;






import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
  describeHtmlComponent,
  describeHeadlinedWidget,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  AccrdListC ,
} from "studk-ui-encore/src/PaginatedUi/Accrd1" ;



import {
  TsAstDisplayC,
  TsSrcFileInfoDisplayC ,
} from "studk-ui-encore/src/CommonParsedMarkupFileDisplayUi/TsAstDisplay" ;

import {
  getSampleDocument ,
} from "@/components/spcl/SampleTdDocuments" ;

export const EvrC = (
  describeHtmlComponent((
    //
    function EvrCImpl()
    {

      const {
        value ,
        err ,
      } = (
        React.useMemo((): (
          | { value: ReturnType<typeof getSampleDocument>, err?: null, }
          | { err: Error, value?: false | null, }
        ) => {
          try {
            const value = getSampleDocument() ;
            return { value } ;
          } catch (z : any) {
            return {
              err: z ,
              value: false ,
            } ;
          }
        } , [] )
      ) ;

      if (value) {
        ;
        return (
          <EvrCPos value={value} />
        ) ;
      } else {
        ;

        return (
          <div>
            <p>Failed To Render Document: <code>{ err.message }</code></p>
            <pre>{ err.stack ?? "" }</pre>
          </div>
        ) ;
      }
    }
  ))
) ;

const EvrCPos = (
  describeHtmlComponent((
    function EvrCPosImpl({ value, } : { value: import('typescript').SourceFile } )
    {

      const definingScriptViewFrame = (
        ((
          describeHeadlinedWidget({
            heading: <>The Defining Script</> ,
            children: (
              <div>
                <p>The Defining Script</p>
                <p>TypeScript</p>
                <TsAstDisplayC
                value={value}
                />
              </div>
            ) ,
          })
        ))
      ) ;

      const structureExploringFrame = (
        ((
          describeHeadlinedWidget({
            heading: <>The Structure</> ,
            children: (
              <div>
                <p>Structure:</p>
                <ul>
                  <li>Object 1</li>
                  <li>Object 2</li>
                  <li>Object 3</li>
                </ul>
              </div>
            ) ,
          })
        ))
      ) ;

      const semiFinalRenderingAppFrame = (
        ((
          describeHeadlinedWidget({
            //
            heading: <>The Rendered View</> ,
            children: (
              <div>
                <p>The Preview Will Go Here</p>
              </div>
            ) ,
          })
        ))
      ) ;

      return (
        <div>
          <AccrdListC>
            <li>{ definingScriptViewFrame     }</li>
            <li>{ structureExploringFrame     }</li>
            <li>{ semiFinalRenderingAppFrame  }</li>
          </AccrdListC>
        </div>
      ) ;
    }
  ))
) ;













