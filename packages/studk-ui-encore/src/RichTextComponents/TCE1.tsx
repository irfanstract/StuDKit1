









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
  useDeferredAndTransitionalValue,
} from 'studk-ui-fwcore/src/reactjs/helpers/UseUncontrolledInputsAsControlledComponents1.tsx';

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

  const useSpcl = (
    (...[{
      asEditable ,
      specifiedValAsHtml ,
    }] ) => {
      ;

      const [actualElem, setAssumedActualElem] = (
        React.useState<HTMLDivElement | null>(null )
      ) ;

      useDoDOmToggleContentEditability(actualElem, asEditable ) ;

      void (
        React.useCallback((c: HTMLDivElement | null ) => {
          ;
        } , [])
      ) ;

      const {
        specifiedVal: svh1,
        specifiedValDeferred: specifiedValDeferredAsHtml ,
        transitionalValue ,
        setTransitionalValue ,
      } = (
        useDeferredAndTransitionalValue<string>(specifiedValAsHtml , {
          fallbackValue: "?????" ,
        } )
      ) ;

      if (actualElem) {
        assignIfIhtmlNotSame(actualElem, transitionalValue ) ;
      }

      return (
        React.useMemo(() => (
          {

            actualElem ,
            setAssumedActualElem ,
    
            specifiedValDeferredAsHtml ,
            transitionalValue ,
            setTransitionalValue ,
    
          } as const
        ) , [
          //

          actualElem ,
          setAssumedActualElem ,
  
          specifiedValDeferredAsHtml ,
          transitionalValue ,
          setTransitionalValue ,
  
        ])
      ) ;

    }
  ) satisfies (
    (...a: ArgsWithOptions<[], {
      specifiedValAsHtml: string ,
      asEditable: boolean ,
    }>) => void
  ) ;

  return (

    StudkReactJs.describeHtmlComponent((
      function TceCImpl({
        valueAsHtml: specifiedValAsHtml,
        editable: asEditable = false ,
        onChange: occbArg,
        xRef,
        ...etcPrps
      } : (
        & { valueAsHtml: string, }
        & Omit<JSX.IntrinsicElements["div"] , "children" | "ref" | ("onChange" | "onInput") >
        & (
          | ({ editable: true, } & { onChange: (evtInfo: { existingValueInHtml: string, newValueInHtml: string, } ) => void } )
          | { editable?: false, onChange?: never, }
        )
        & { xRef ?: React.Ref<(
          ReturnType<typeof useSpcl>
          // | null
        ) > }
      ) )
      {

        const occbLocal = (
          StudkReactJs.useEventDispatchCallback(occbArg || Object )
        ) ;

        const s = (
          useSpcl({
            specifiedValAsHtml ,
            asEditable ,
          })
        ) ;

        React.useImperativeHandle(xRef , () => s , [
          s ,
        ] ) ;

        const {

          // actualElem ,
          setAssumedActualElem ,
  
          specifiedValDeferredAsHtml ,
          transitionalValue ,
          setTransitionalValue ,
  
        } = s ;

        const rcbMain = (
          React.useCallback((c: HTMLDivElement | null ) => {
            ;

            setAssumedActualElem(() => c ) ;

          } , [
            setAssumedActualElem,
          ])
        ) ;

        const handleEditEvt = (
          (

            function (e0)
            {
              const v1 = e0.currentTarget.innerHTML ;

              occbLocal({
                newValueInHtml: v1,
                existingValueInHtml: specifiedValAsHtml,
              } ) ;

              void ((e, tOut) => e() )(function () {
                ;
                setTransitionalValue(v1) ;
              } , 0 ) ;

            }

          ) satisfies React.FormEventHandler<HTMLDivElement>
        ) ;
  
        return (
          <div
          ref={rcbMain}
          onInput={(
            handleEditEvt
          )}
          {...etcPrps }
          />
        ) ;
      }
    ))
  ) ;

})() ;

export type TceCompIRefValue = (
  React.ElementRef<(
    React.FC<{ ref: (
      React.ComponentProps<typeof TceC>["xRef"]
    ) }>
  ) >
) ;
















