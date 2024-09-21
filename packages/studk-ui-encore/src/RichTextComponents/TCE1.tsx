









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
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe.tsx" ;

import {
  CFaBku ,
} from "studk-ui-fwcore/src/reactjs/helpers/CFa.tsx" ;

;
const assignIfIhtmlNotSame = (
  function (...[actualElem, valueAsHtml ] : [Element, string ] )
  {
    ;
    void ((
      // false &&
      (actualElem.innerHTML === valueAsHtml )
    ) || (actualElem.innerHTML = valueAsHtml ) ) ;
  }
) ;

const useDoDOmToggleContentEditability = (
  function (...[actualElem, asEditable ] : [Element | null, boolean ] )
  {
    ;

    React["useLayoutEffect"](function () {

      ;
      if (actualElem) {
        ;
        actualElem.toggleAttribute("contenteditable", asEditable ) ;
        // void ((actualElem.innerHTML === valueAsHtml ) || (actualElem.innerHTML = valueAsHtml ) ) ;
      }

      return ;
    } , [
      actualElem,
      // valueAsHtml,
      asEditable ,
    ] ) ;

  }
) ;

export const TceC = (() => {

  return (

    StudkReactJs.describeHtmlComponent((
      function TceCImpl({ valueAsHtml: specifiedValAsHtml, editable: asEditable = false , onChange: occbArg, ...etcPrps } : (
        & { valueAsHtml: string, }
        & Omit<JSX.IntrinsicElements["div"] , "children" | "ref" | ("onChange" | "onInput") >
        & (
          | ({ editable: true, } & { onChange: (evtInfo: { existingValueInHtml: string, newValueInHtml: string, } ) => void } )
          | { editable?: false, onChange?: never, }
        )
      ) )
      {

        const occbLocal = (
          StudkReactJs.useEventDispatchCallback(occbArg || Object )
        ) ;

        const [actualElem, setAssumedActualElem] = (
          React.useState<HTMLDivElement | null>(null )
        ) ;

        useDoDOmToggleContentEditability(actualElem, asEditable ) ;
  
        void (
          React.useCallback((c: HTMLDivElement | null ) => {
            ;
          } , [])
        ) ;

        // const [ , ST ] = React.useTransition() ;

        const specifiedValDeferredAsHtml = (
          React.useDeferredValue(specifiedValAsHtml)
        ) ;

        const [sv1AsHtml, setSv1] = (
          React.useState<string>("?????")
        ) ;

        if (specifiedValDeferredAsHtml === specifiedValAsHtml ) {
          void (sv1AsHtml === specifiedValAsHtml || setSv1(specifiedValAsHtml ) ) ;
        }

        if (actualElem) {
          assignIfIhtmlNotSame(actualElem, sv1AsHtml ) ;
        }

        const rcbMain = (
          React.useCallback((c: HTMLDivElement | null ) => {
            ;

            setAssumedActualElem(() => c ) ;

          } , [
            setAssumedActualElem,
          ])
        ) ;

        const handleEdit = (
          (actualElem ? (e0) => {
            const v1 = e0.currentTarget.innerHTML ;
            occbLocal({
              newValueInHtml: v1,
              existingValueInHtml: specifiedValAsHtml,
            } ) ;
            void ((e, tOut) => e() )(function () {
              ;
              // assignIfIhtmlNotSame(actualElem, valueAsHtml ) ;
              setSv1(v1) ;
            } , 0 ) ;
          } : Object ) satisfies React.FormEventHandler<HTMLDivElement>
        ) ;
  
        return (
          <div
          ref={rcbMain}
          onInput={(
            handleEdit
          )}
          {...etcPrps }
          />
        ) ;
      }
    ))
  ) ;

})() ;
















