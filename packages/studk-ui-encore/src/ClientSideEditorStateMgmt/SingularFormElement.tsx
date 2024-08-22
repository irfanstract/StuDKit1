




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

import {
  React ,
  toComponentMountKey,
  describeComponent ,
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
  mkClasses ,
  withExtraSemanticProperties,
  Button ,
  Span ,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

// import {
//   SingleChildDiv,
// } from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;

interface XIiSpcficProps extends
Pick<JSX.IntrinsicElements["input"], "type" | "checked" | "step" | "spellCheck">,
Extract<{ value?: string, }, any >
{}

interface SfmInputCProps extends Extract<(
  (
    // JSX.IntrinsicElements
    & { onChange: React.Dispatch<{ target: Pick<HTMLInputElement, "value">, }> , }
    & XIiSpcficProps
  )
), unknown>
{}

export const SfmInputC = (
  describeHtmlComponent((
    function SfmInputCImpl(props : (
      SfmInputCProps
    ) )
    {
      const {
        encoreMidSizedElemt ,
      } = (
        useSfmInputCProps(props)
      ) ;

      return encoreMidSizedElemt ;
    }
  ))
) ;

const useSfmInputCProps = (
  ((
    function (props : (
      SfmInputCProps
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

      type XV = Required<XIiSpcficProps>["value"] ;

      const [
        {
          displayedValue = givenValue ,
          hasUnsavedChgs: shallPretendTheresUnsavedChgs = (
            !(displayedValue === givenValue)
          ) ,
        },
        remt0 ,
      ] = (() => {

        interface SOps {
          hasUnsavedChgs?: boolean,
          displayedValue ?: XV ,
        }

        return (
          React.useReducer<(x: SOps, e: (
            | { type: "remt", }
            | { type: "edit", newTotalValue: XV, }
          )) => SOps>((x, e ) => {

            if (e.type === "remt") {
              return {
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
          } )
        ) ;

      })() ;

      const clear1 = () => (
        remt0({ type: "remt", })
      ) ;

      const submitAndClear = (
        function () {
          ;
          const ie = (displayedValue || displayedValue === "") ? { value: displayedValue, } : (Object(displayedValue), null) ;
          ie && runOnChgCb({ target: ie , }) ;
          clear1() ;
        }
      ) ;

      const coreElemt = (
        <input
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
      ) ;

      const coreElemtL = (
        <label>
        <React.Fragment
        >
        { coreElemt }
        </React.Fragment>
        </label>
      ) ;

      const {
        onSubmit: handleFormSubmitEvt ,
        onBlur: handleFormFocusOutEvt ,
      } = (
        {
          onSubmit: e => {
            e.preventDefault() ;
  
            submitAndClear() ;
  
          } ,
          onBlur: async (e) => {
            await new Promise<void>(R => setTimeout(R, 0.1 * 1000 ) ) ;
            if (1) {
              submitAndClear() ;
            }
            clear1() ;
          } ,
        } satisfies JSX.IntrinsicElements["form"]
      ) ;

      const encoreMidSizedElemt = (
        <form
        onSubmit={handleFormSubmitEvt}
        onBlur={handleFormFocusOutEvt}
        >
          <p>
            { coreElemtL }
          </p>
          { shallPretendTheresUnsavedChgs && (
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

      return {
        coreElemt ,
        encoreMidSizedElemt ,
      } as const ;
    }
  ))
) ;










