









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
  describeCallbackAssignedStyleProps,
} from '#UiFwCore/util/ReactJsBased.ts'; ;

import {
  CFaBku ,
} from "#UiFwCore/reactjs/helpers/CFa.tsx" ;

import {
  ReactJsBasedCustomIntrinsicElement ,
} from "#UiFwCore/reactjs/helpers/AsCustomIntrinsicElement.tsx" ;

import {
  useClientSideOnly ,
  useClientSideOnlyCompute ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/ClientSideOnlyComputeInReact.tsx" ;

// import {
//   useClientSideInitOnlyState ,
//   useCsioe ,
//   useRevCsioe ,
// } from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe" ;





import "studk-ui-encore/src/AsciiBlockUi/CbeDefaults.scss" ;

const FormCtAlikeAsciiCodeBlockCC = (
  (ReactJsBasedCustomIntrinsicElement.definePrivatelyWithRenderFnAndProgrammaticItcBaseClassAlt )("studk-lbasciicodeblock" , ({ value: cInHtml, onChange, }: (
    Pick<JSX.IntrinsicElements["textarea"] , "value" | "onChange" >
  ) ) => {
    return (
      <textarea
      part="coretextarea"
      className='studk-lbasciicodeblock-coretextarea'
      value={cInHtml}
      onChange={onChange}
      spellCheck={false }
      style={{
        resize: "none" ,
      }}
      />
    ) ;
  } , globalThis.HTMLSpanElement, {
    mdlSpacePropKeyNames: [
      "value" ,
      "onChange" ,
    ] as const ,
    sdr: "open" ,
  } )
) ;

export {
  FormCtAlikeAsciiCodeBlockCC as FormCtAlikeAsciiCodeBlockCC ,
  /**
   * @deprecated
   */
  FormCtAlikeAsciiCodeBlockCC as XCodeC ,
} ;




















