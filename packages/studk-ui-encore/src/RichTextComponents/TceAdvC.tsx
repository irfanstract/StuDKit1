









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



;

;



;







;

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  describeCallbackAssignedStyleProps,
  ButtonC ,
  StudkReactJsOvcUtil,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  useClientSideOnly ,
  useClientSideOnlyCompute ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/ClientSideOnlyComputeInReact.tsx" ;

// import {
//   useClientSideInitOnlyState ,
//   useCsioe ,
//   useRevCsioe ,
// } from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe" ;

import {
  CFaBku ,
} from "studk-ui-fwcore/src/reactjs/helpers/CFa.tsx" ;




import {
  ReactJsBasedCustomIntrinsicElement ,
  generateCustomIntrinsicElementName ,
} from "studk-ui-fwcore/src/reactjs/helpers/AsCustomIntrinsicElement.tsx" ;

// import {
//   AccrdListC ,
// } from "studk-ui-encore/src/PaginatedUi/Accrd1" ;

const ELCC = (
  // 1 ?
  (function () {
    Object ;

    let v : number | string = 5 ;
    
    void (
      (ReactJsBasedCustomIntrinsicElement.definePrivatelyWithRenderFnAndProgrammaticItcBaseClassAlt )("elementdef3422118914-main" , (props: {
        //
      } ) => {
        return (
          <p>
            Empty Component
          </p> 
        ) ;
      } , globalThis.HTMLSpanElement, {
        mdlSpacePropKeyNames: [
        ] as const ,
        sdr: "open" ,
      } )
    ) ;

    return (
      (ReactJsBasedCustomIntrinsicElement.definePrivatelyWithRenderFnAndProgrammaticItcBaseClassAlt )("elementdef3422118914-main" , (props: {
        //
        "controlX": string ,
        "controlY": string ,
        "mdlY"    : string ,
      } ) => {
        return (
          <p>
            <code>TCE_C</code> for example {}
            was rendered with {}
            <code>{ JSON.stringify(props, null, 1 ) }</code>
            {} (<code>{v }</code>)
            .
          </p> 
        ) ;
      } , globalThis.HTMLSpanElement, {
        mdlSpacePropKeyNames: [
          "controlX" ,
          "controlY" ,
          "mdlY" ,
        ] as const ,
        sdr: "open" ,
      } )
    ) ;
  } )()
  // : null
) ;

import {
  TceC, 
  TceCompIRefValue,
} from "studk-ui-encore/src/RichTextComponents/TCE1.tsx" ;

const TceAdvC = (

  StudkReactJs.describeHtmlComponent((
    function TceAdvCImpl({ ...etcProps } : React.ComponentProps<typeof TceC> )
    {
      ;

      const edh = (
        React.useRef<TceCompIRefValue | null >(null)
      ) ;

      // TODO
      // const cursorInfo = (
      //   StudkReactJsOvcUtil.useIntervalScan((
      //     React.useCallback(() => {
      //       for (const { actualElem, } of util.iterateNonNull(edh.current) ) {
      //         if (actualElem) {
      //           ;
      //           const selection = document.getSelection() ;
      //           return {
      //             // selection ,
      //           } as const ;
      //         }
      //       }
      //       return null ;
      //     } , [
      //       edh ,
      //     ] )
      //   ) , {
      //     latencyMillis: 500 ,
      //     getFallbackValue: () => null ,
      //   } )
      // ) ;

      const getTextWrapperTogglingCallback = (
        (...a : [ectgnm: string] ) : (((e: Event | React.SyntheticEvent) => {} ) | false ) => (
          // (e: Event) => {}
          false
        )
      ) ;
      const getTextWrapperTogglingButton = (
        (...[tgNme] : [ectgnm: string] ) => (
          <ButtonC
          title={`Toggle ${`<${tgNme }>` }.` }
          children={ <strong><code>{ `<${tgNme }>` }</code></strong> }
          onClick={getTextWrapperTogglingCallback(tgNme) }
          />
        )
      ) ;

      const cursoryActionsSpan = (
        // –—
        <span>
        Formatting: {}
        <span>
        { null && getTextWrapperTogglingButton("b") } {}
        { getTextWrapperTogglingButton("strong") } {}
        { getTextWrapperTogglingButton("em") } {}
        – {}
        { getTextWrapperTogglingButton("q") } {}
        { getTextWrapperTogglingButton("i") } {}
        { getTextWrapperTogglingButton("u") } {}
        { getTextWrapperTogglingButton("code") } {}
        – {}
        { getTextWrapperTogglingButton("del") } {}
        </span>
        — {}
        Insert: {}
        <span>
        </span>
        </span>
      ) ;

      return (
        <div
        style={(
          describeCallbackAssignedStyleProps(function (s) {
            s.margin = `0.9ex` ;
          })
        )}
        >
        <nav>
          <p>
          { cursoryActionsSpan }
          { (
            null ?
            (
              <ELCC
              controlX={5 }
              controlY={"1" }
              children={(
                <p>
                  Good.
                </p>
              )}
              style={(
                describeCallbackAssignedStyleProps(function (s) {
                  s.display = "inline-block" ;
                  s.border = `0.1ex solid currentcolor` ;
                })
              )}
              />
            )
            : null
          ) }
          </p>
        </nav>
        <div
        style={(
          describeCallbackAssignedStyleProps(function (s) {
            s.maxBlockSize = `30ex` ;
            s.overflowBlock = "auto" ;
            s.overflowInline = "hidden" ;
            s.overflow = "auto" ;
            s.contain = `layout` ;
            s.border = `0.1ex solid currentcolor` ;
          })
        )}
        >
        <TceC
        //
        xRef={edh}
        // valueAsHtml={etcProps.valueAsHtml }
        style={{
          contain: `layout`,
          // border: `0.1ex solid currentcolor` ,
          paddingInline: `0.5ex` ,
          paddingBlock: `0.8ex` ,
          background: `canvas` ,
        }}
        {...etcProps }
        />
        </div>
        </div>
      ) ;
    }
  ))
) ;

export {
  TceAdvC as TceAdvC ,
} ;



















