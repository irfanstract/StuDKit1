






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

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitCase,
  OmitW,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'


;






import * as React from "react" ;
import { Component, } from "react" ;
import * as RDC from "react-dom/client" ;



namespace DCIE {
  ;

  export interface ProgrammaticItcBaseClassChoiceProps {
    // ;
    supc ?: CustomElementConstructor ,
  }
  
  export interface SdrModeRelatedProps {
    // ;
    sdr ?: ShadowRootMode ,
  }

}

export namespace ReactJsBasedCustomIntrinsicElement {
  ;

  export interface SpclWithRenderFncCaseProps<actualProps extends {} = any > extends
  Extract<(
    & DCIE.ProgrammaticItcBaseClassChoiceProps
    & DCIE.SdrModeRelatedProps
  ) , unknown>
  {
    readonly mdlSpacePropKeyNames: readonly ((keyof actualProps) & string)[] ;
  }

  export const defineWithRender = (
    function <const tgNm extends (keyof JSX.IntrinsicElements), actualProps extends JSX.IntrinsicElements[tgNm] >(...a : (
      ArgsWithOptions<[
        tgName: tgNm,
        render: (props: actualProps) => Extract<React.ReactNode, object | null> ,
      ], (
        SpclWithRenderFncCaseProps<actualProps>
      )>
    ) )
    : (tgNm | React.ElementType<actualProps, tgNm > )
    {
      const [
        tgName,
        C,
        {
          supc = HTMLElement ,
          sdr = ("open" satisfies ShadowRootMode) ,
          mdlSpacePropKeyNames = [] ,
        } = {},
      ] = null ?? a ;

      const userSpacePropKnmp = (

        mdlSpacePropKeyNames

        .map(mdlSpaceKey => {

          const {
            userSpaceKey ,
            camelCasedEName ,
          } = (
            ((): { userSpaceKey: string, camelCasedEName?: string } => {

              switch (mdlSpaceKey) {
                case "className"      : return { userSpaceKey: "class" , } ;
                case "htmlFor"        : return { userSpaceKey: "for"   , } ;
              }

              for (const [nme = null ] of util.iterateNonNull(mdlSpaceKey.match(/^on((?=[A-Z])\w+)/) ) ) {
                // TODO
                if (nme !== null) {
                  return {
                    userSpaceKey: nme.toLowerCase() ,
                    camelCasedEName: nme ,
                  } ;
                }
              }

              return (
                {
                  userSpaceKey: util.L.kebabCase(mdlSpaceKey) ,
                }
              ) ;
            })()
          ) ;

          return {
            mdlSpaceKey ,
            userSpaceKey ,
            camelCasedEName ,
          } as const ;
        } )

      ) ;
  
      const userSpacePropKeyNames = (
        userSpacePropKnmp
        .map(({ userSpaceKey, }) => (
          userSpaceKey
        ) )
      ) ;
  
      globalThis.customElements.define ;
  
      globalThis.customElements.define(tgName, (
  
        class extends supc {
          //

          r !: RDC.Root ;
  
          constructor (...args: any )
          {
            super(...args) ;

            this.r = (
              RDC.createRoot((
                this.attachShadow({
                  mode: sdr,
                })
              ) )
            ) ;

          }

          // TODO
          
          private getAsProps() : actualProps {
            const e = this; 

            interface EvmpOps {
              readonly mdlSpaceKey: (keyof actualProps & string) | "children" ;
              readonly userSpaceKey: string;
              readonly value: (object | string) | null;
            }

            const m2 = (
              util.reiterated<EvmpOps>(function* () {

                yield* (
                  userSpacePropKnmp

                  .filter(({ mdlSpaceKey, }) => !(mdlSpaceKey === "children") )
                  .map(({ mdlSpaceKey, userSpaceKey, }) => {

                    const vle = e.getAttribute(userSpaceKey) ;

                    return {
                      mdlSpaceKey,
                      userSpaceKey,
                      value: vle,
                    } satisfies EvmpOps ;
                  } )

                ) ;

                yield {
                  mdlSpaceKey: "children",
                  userSpaceKey: "children",
                  value: <slot />,
                } satisfies EvmpOps ;

              })
            ) ;

            const o3 = (
              util.Immutable.Map((
                m2
                .map(({ mdlSpaceKey, value, }) => [ mdlSpaceKey, value ] as const )
              ))
              .toObject()
            ) ;

            return (
              o3 as actualProps
            ) ;
          }

          private remount1() : void
          {

            const props = this.getAsProps() ;

            this.r.render((
              <C {...props} />
            )) ;

          }

          connectedCallback() : void
          {
            this.remount1() ;
          }

          attributeChangedCallback() : void
          {
            this.remount1() ;
          }

          disconnectedCallback() : void
          {
            this.r.unmount() ;
          }
  
        }
  
      )) ;
  
      return tgName ;
    }
  ) ;

  export interface SpclWithRenderFncAndPrgmtcBaseClsCaseProps<actualProps extends {} = any > extends
  Extract<(
    OmitCase<SpclWithRenderFncCaseProps<actualProps>, "supc">
  ) , unknown>
  {
  }

  export const defineWithRenderFnAndProgrammaticItcBaseClass = (
    function <const tgNm extends (keyof JSX.IntrinsicElements), actualProps extends JSX.IntrinsicElements[tgNm] >(...a : (
      ArgsWithOptions<[
        tgName: tgNm,
        render: (props: actualProps) => Extract<React.ReactNode, object | null> ,
        supc ?: CustomElementConstructor ,
      ], (
        SpclWithRenderFncAndPrgmtcBaseClsCaseProps<actualProps>
      )>
    ) )
    {
      const [
        tgName, C,
        supc ,
        { ...etcProps },
      ] = null ?? a ;
  
      ;
  
      return (
        defineWithRender(tgName, C, {
          supc ,
          ...etcProps
        })
      ) ;
    }
  ) ;
  
}

declare global {
  export namespace JSX {
    export interface IntrinsicElements {
      ["studk-mname"]: { k: "5", l: "6", m?: "7", } ,
    }
  }
}

void (() => {
  {
    const Com1 = (
      ReactJsBasedCustomIntrinsicElement.defineWithRender("studk-mname", (props) => {
        ;
        return (
          <></>
        ) ;
      } , {
        mdlSpacePropKeyNames: [] ,
      } )
    ) ;
    if (1) {
      return (
        <studk-mname
        k='5'
        l='6'
        />
      ) ;
    }
    if (1) {
      return (
        <Com1
        k='5'
        l='6'
        />
      ) ;
    }
  }
}) ;

;







;















