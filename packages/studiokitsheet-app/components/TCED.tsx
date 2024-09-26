









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



import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;

import {
  parseTsSourceFileContent,
} from "studk-ts-codeanalysis/src/core/TsSourceCodeParsingFrontend.ts" ;

;



;







;

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  useClientSideOnly ,
  useClientSideOnlyCompute ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/ClientSideOnlyComputeInReact.tsx" ;

import {
  useClientSideInitOnlyState ,
  useCsioe ,
  useRevCsioe ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe" ;

import {
  CFaBku ,
} from "studk-ui-fwcore/src/reactjs/helpers/CFa" ;




import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
  describeHtmlComponent,
  describeHeadlinedWidget,
  Button,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  AccrdListC ,
} from "studk-ui-encore/src/PaginatedUi/Accrd1" ;

import {
  TceC ,
} from "studk-ui-encore/src/RichTextComponents/TCE1" ;

export const EvTceC = (

  StudkReactJs.describeHtmlComponent((
    function EvTceCImpl()
    {

      const [cInHtml, setCInHtml] = (
        React.useState<string>(() => (
          `
          <section>

          <p lang="en">
            The value
            is equivalent to <code>2Π/360</code> nominally
            .
          </p>
          <p lang="en">
            The value
            is equivalent to
            <span>(sin<sup>d:n</sup>[0]&nbsp;<span>(2Π/360)<sup>n</sup></span>&nbsp;(n!)<sup>−1</sup>&nbsp;) * x<sup>n</sup></span>
            .
          </p>

          <p lang="en">
            Let's say:
          </p>
          <blockquote >
          <p lang="en">
            The value
            <em>is (de)nominally equivalent</em> in this sense
            .
          </p>
          <p lang="ru">
            Пeннск.
          </p>
          </blockquote>

          <p lang="en">
            That's it
          </p>

          </section>
          `
        ))
      ) ;

      return (
        <div >
          <TceC
          valueAsHtml={cInHtml }
          editable
          onChange={({ newValueInHtml, existingValueInHtml: eV0, }) => (
            // true ||
            setCInHtml(aV0 => (eV0 === aV0 ? newValueInHtml : aV0 ) )
          ) }
          style={{
            contain: `layout`,
          }}
          />
          <pre>
            { cInHtml }
          </pre>
        </div>
      ) ;
    }
  ))
) ;














