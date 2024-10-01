









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

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
} from '#ReactJsBased.ts'; ;

import {
  useDeferredAndTransitionalValue,
} from '#UiFwCore/reactjs/helpers/UseUncontrolledInputsAsControlledComponents1.tsx';

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
} from "#UiFwCore/reactjs/helpers/CFa.tsx" ;

;
const assignIfIhtmlNotSame = (
  function (...[lhsAsNode, rhsAsHtml ] : (
    ArgsWithOptions<[receiver: Element, newInnerHtml: string ] , {
    }>
  ) )
  {
    ;
    if (
      // TODO
      (
        util.Immutable.Set([lhsAsNode.innerHTML, rhsAsHtml ])
        .map(s => s.replaceAll("\r\n", "\n") )
        .size
        <=
        1
      )
    ) {
      return 0 ;
    } else {
      lhsAsNode.innerHTML = rhsAsHtml ;
      return 1 ;
    }
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

export const useTceDeferredAndTransitionalValue = (

  function <T> (...[specifiedValAsHtml, {
    fallbackContentAsHtml ,
  }] : (
    ArgsWithOptions<[specifiedValAsHtml: string ], { fallbackContentAsHtml: string, }>
  ) )
  {
    ;
    
    const {
      specifiedVal: svh1,
      specifiedValDeferred: specifiedValDeferredAsHtml ,
      transitionalValue: transitionalValAsHtml ,
      setTransitionalValue: setTransitionalValAsHtml ,
      dwc ,
    } = (
      useDeferredAndTransitionalValue<string>(specifiedValAsHtml , {
        fallbackValue: fallbackContentAsHtml ,
      } )
    ) ;

    const ccee = (
      React.useMemo(() => (
        {
          computeAsHtmlToConstantEditEvent: (
            (x: (
              OmitW<TceMainChgEventDesc, "existingValueInHtml">
            )): TceMainChgEventDesc => ({
              ...x ,
              existingValueInHtml: specifiedValAsHtml ,
            })
          ) ,
        } as const
      ) , [
        specifiedValAsHtml ,
      ])
    ) ;

    return {

      specifiedValAsHtml ,
      specifiedValDeferredAsHtml ,
      transitionalValAsHtml ,
      setTransitionalValAsHtml ,
      ccee ,
      dwc ,

    } as const ;
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
        specifiedValDeferredAsHtml ,
        transitionalValAsHtml ,
        setTransitionalValAsHtml ,
        ccee ,
        dwc,
      } = (
        useTceDeferredAndTransitionalValue(specifiedValAsHtml , {
          fallbackContentAsHtml: "?????" ,
        } )
      ) ;

      if (actualElem) {
        if ((
          assignIfIhtmlNotSame(actualElem, transitionalValAsHtml )
        )) {
          Object ;
        }
      }

      return (
        React.useMemo(() => (
          {

            actualElem ,
            setAssumedActualElem ,
    
            specifiedValDeferredAsHtml ,
            transitionalValAsHtml ,
            setTransitionalValAsHtml ,
            ccee ,

            dwc,
    
          } as const
        ) , [
          //

          actualElem ,
          setAssumedActualElem ,
  
          specifiedValDeferredAsHtml ,
          transitionalValAsHtml ,
          setTransitionalValAsHtml ,
          ccee ,
  
          dwc,

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
          | ({ editable: true, } & { onChange: (evtInfo: TceMainChgEventDesc ) => void } )
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
          transitionalValAsHtml ,
          setTransitionalValAsHtml ,
          ccee ,
  
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

              const eTarget = e0.currentTarget ;

              const v1 = eTarget.innerHTML ?? "" ;
              const v1Plain = eTarget.textContent ?? "" ;

              const einf = (

                ccee.computeAsHtmlToConstantEditEvent({
                  //
                  newValueAsPlainTxt: v1Plain ,
                  newValueInHtml: v1,
                })
              ) ;

              occbLocal(einf ) ;

              void ((e, tOut) => e() )(function () {
                ;
                setTransitionalValAsHtml(v1) ;
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

export interface TceMainChgEventDesc
{
  existingValueInHtml: string,
  newValueInHtml: string,
  newValueAsPlainTxt: string,
}

export type TceCompIRefValue = (
  React.ElementRef<(
    React.FC<{ ref: (
      React.ComponentProps<typeof TceC>["xRef"]
    ) }>
  ) >
) ;
















