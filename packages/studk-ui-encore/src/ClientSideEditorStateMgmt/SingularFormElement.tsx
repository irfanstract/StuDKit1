




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
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'






;

import * as React from "react" ;

const toComponentMountKey = (
  (value: (JSX.IntrinsicElements["input"] )["value"] ) => (
    ((): string => {
      switch (typeof value) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "undefined":
          return String(value) ;
      }
      return JSON.stringify(value) ;
    })()
  )
) ;


import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  withExtraSemanticProperties ,
} from 'studk-ui-fwcore/src/react-dom/helpers/WithAddedSemanticProperties.tsx'; ;

// import {
//   SingleChildDiv,
// } from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;

interface XIiSpcficProps extends Pick<JSX.IntrinsicElements["input"], "type" | "value" | "checked" | "step" | "spellCheck">
{}

export const SfmInputC = (
  describeHtmlComponent((
    function SfmInputCImpl(props : (
      // JSX.IntrinsicElements
      & { onChange: React.Dispatch<{ target: HTMLInputElement, }> , }
      & XIiSpcficProps
    ) )
    {
      const {
        value: givenValue ,
        type: itype,
        checked,
        step: stepv,
        spellCheck = false,
        onChange: runOnChgCb ,
      } = props ;

      const iRef = React.useRef<HTMLInputElement>(null) ;
      const fRef = React.useRef<HTMLFormElement>(null) ;

      type XV = Required<JSX.IntrinsicElements["input"]>["value"] ;

      const [{
        remtKey ,
        hasUnsavedChgs ,
        displayedValue = givenValue ,
      }, remt0] = (() => {
        interface SOps {
          remtKey: number,
          hasUnsavedChgs: boolean,
          displayedValue ?: XV ,
        }
        return (
          React.useReducer<(x: SOps, e: { type: "remt", } | { type: "edit", newTotalValue: XV, }) => SOps>((x, e ) => {
            if (e.type === "remt") {
              return {
                remtKey: x.remtKey + 1,
                hasUnsavedChgs: false,
              } ;
            }
            if (e.type === "edit") {
              return {
                ...x,
                hasUnsavedChgs: true ,
                displayedValue: e.newTotalValue,
              } ;
            }
            return x ;
          } , {
            remtKey: 1,
            hasUnsavedChgs: false,
          } )
        ) ;
      })() ;
      const remt = () => (
        remt0({ type: "remt", })
      ) ;

      const submitAndClear = (
        function () {
          ;
          const ie = iRef.current! ;
          runOnChgCb({ target: ie , }) ;
          remt() ;
        }
      ) ;

      return (
        <form
        ref={fRef}
        onSubmit={e => {
          e.preventDefault() ;

          submitAndClear() ;

        }}
        onBlur={async (e) => {
          await new Promise<void>(R => setTimeout(R, 0.1 * 1000 ) ) ;
          if (1) {
            submitAndClear() ;
          }
          remt() ;
        }}
        >
          <p>
            <label>
            <React.Fragment
            key={remtKey}
            >
            <input
            ref={iRef}
            key={(
              toComponentMountKey(givenValue)
            ) }
            type={itype}
            // defaultValue={value }
            value={displayedValue}
            spellCheck={spellCheck}
            checked={checked}
            step={stepv}
            onChange={e0 => {
              const { value: newTxt, } = e0.target ;

              // TODO
              remt0({ type: "edit", newTotalValue: newTxt, }) ;

              ;
            } }
            />
            </React.Fragment>
            </label>
          </p>
          { hasUnsavedChgs && (
            <p>
              <strong>
              has uncommitted chgs; press 'enter' to commit
              </strong>
            </p>
          ) }
          { null && (
            <p>
              Given Value      : {} <code>{ JSON.stringify(givenValue    ) }</code>; {}
              Displayed Value  : {} <code>{ JSON.stringify(displayedValue) }</code>; {}
            </p>
          ) }
        </form>
      ) ;
    }
  ))
) ;










