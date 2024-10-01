









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
} from '#ReactJsBased.ts'; ;

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
} from "#UiFwCore/reactjs/helpers/CFa.tsx" ;




import {
  ReactJsBasedCustomIntrinsicElement ,
  generateCustomIntrinsicElementName ,
} from "#UiFwCore/reactjs/helpers/AsCustomIntrinsicElement.tsx" ;

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

import {
  LjdeC ,
} from "studk-ui-encore/src/RichTextComponents/TLD.tsx" ;

interface TceAdvCore
{
  //
  readonly mainContentDivElem: React.ReactElement;
  readonly cursorInfo: TceAdvEditorCaretAndSelectionListInfo | null;
  readonly gtwtc: TceAdvGtwtc;
}

type TceAdvCoreOptions = (
  TceAdvDisplayOptions
) ;

const useTceAdvCore = (

    function ({ ...ceeProps } : TceAdvCoreOptions )
    : TceAdvCore
    {
      ;

      const edh = (
        React.useRef<TceCompIRefValue | null >(null)
      ) ;

      // TODO
      const {
        cursorInfo ,
      } = (
        (function () {

          const CSIV = (
            util.memoize((selectedText: string | null) => {
              ;
              return {
                // selection ,
                selectedText: selectedText ,
              } satisfies TceAdvEditorCaretAndSelectionListInfo ;
            } , (...a) => a[0] )
          );

          const cursorInfo1 = (
            StudkReactJsOvcUtil.useIntervalScan((
              React.useCallback(() => {
                for (const { actualElem, } of util.iterateNonNull(edh.current) ) {
                  if (actualElem) {
                    ;
                    const selection = document.getSelection() ?? null ;
                    const selectionRgs = (selection && selection.rangeCount && selection.getRangeAt(0)) ?? null ;
                    ;
                    return (
                      CSIV(selectionRgs?.toString() ?? null )
                    ) ;
                  }
                }
                return null ;
              } , [
                edh ,
              ] )
            ) , {
              latencyMillis: 500 ,
              getFallbackValue: () => null ,
            } )
          ) ;

          return {
            cursorInfo: (
              React.useDeferredValue(cursorInfo1)
            ) ,
          } as const ;

        })()
      ) ;

      const mainContentDivElem = (
        (() => {

          if ("valueAsHtml" in ceeProps) {

            const SpclTceC: (
              | (typeof TceC)
              | (typeof LjdeC)
            ) = (
              1 ?
              LjdeC :
              TceC
            ) ;

            return (
              <SpclTceC
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
              {...ceeProps }
              />
            ) ;
          }

          ceeProps ;

          return <></> ;
        })()
      ) ;

      const gtwtc: TceAdvGtwtc = (
        (...a ) => (
          // (e: Event) => {}
          false
        )
      ) ;

      return {
        ceeProps ,

        mainContentDivElem ,
        cursorInfo ,
        gtwtc ,

      } as const ;
    }
) ;

interface TceAdvEditorCaretAndSelectionListInfo {
  readonly selectedText: string | null;
}

interface TceAdvGtwtc {
  (ectgnm: string): StudkReactJs.RequiredComponentProps<typeof ButtonC>["onClick"];
}

type TceAdvDisplayOptions = (
  // div "valueAsHtml", "xRef"
  & OmitW<React.ComponentProps<typeof TceC> , "valueAsHtml" | "xRef" >
  & (
    | Pick<React.ComponentProps<typeof TceC> , "valueAsHtml" | "xRef" >
    | { elw ?: boolean , }
  )
) ;

const TceAdvC = (

  StudkReactJs.describeHtmlComponent((
    function TceAdvCImpl({ ...etcProps } : TceAdvDisplayOptions )
    {
      ;

      const ceeProps = (
        etcProps
      ) ;

      const {
        //
        
        mainContentDivElem ,
        cursorInfo ,
        gtwtc ,

      } = (
        useTceAdvCore(ceeProps)
      ) ;

      const getTextWrapperTogglingCallback = (
        (...a : Parameters<typeof gtwtc> ) => (
          gtwtc(...a)
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

      const statsSpan = (
        <span>
          Stats:
          {}
          { cursorInfo && (
            <span>
            Selected text: {}
            <code>
              { JSON.stringify(cursorInfo.selectedText satisfies (string | null ) ) }
            </code>
            ;
            </span>
          ) }
        </span>
      ) ;

      const oe0 = (
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
          <p>
            { statsSpan }
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
        { mainContentDivElem }
        </div>
        </div>
      ) ;

      return (
        // StudkReactJs.withExtraSemanticProperties()
        oe0
      ) ;
    }
  ))
) ;

export {
  TceAdvC as TceAdvC ,
} ;



















