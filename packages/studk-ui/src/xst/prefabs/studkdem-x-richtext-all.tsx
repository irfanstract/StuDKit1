



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
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  // ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from '#currentPkg/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/meta/react/dbc.tsx'; ;

// import Link from "next/link" ;







export type StudkRichTextContent = string ;

interface SpclCommonProps
{
  onChange ?: (e: { newValue: StudkRichTextContent | string, }) => void ,
}

export const StudkRichTextComp = (
  describeComponent(function StudkTxt1({ value, ...prps } : { value: StudkRichTextContent } & SpclCommonProps) {
    // TODO
    return (
      <div
      style={{
        display: "grid",
      }}
      >
        <StudkPlainTextComp
        {...prps}
        value={value}
        />
      </div>
    ) ;
  })
) ;

export const StudkPlainTextComp = (
  describeComponent(function StudkTxt1({ value, onChange, } : { value: string; } & SpclCommonProps) {
    return (
      <div
      style={{
        display: "grid",
        // resize: "block",
        overflowInline: "hidden",
      }}
      >
        <textarea
        value={value}
        style={{
          fontFamily: "monospace",
          // resize: "none",
          resize: "block",
          transition: "none" ,
        }}
        {...(onChange ? { onChange: e => onChange({ newValue: e.target.value, }) , } : { readOnly: true, }) }
        />
      </div>
    ) ;
  })
) ;













