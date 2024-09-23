






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
  EitherPropertyOf, 
  Extend,
  OmitCase,
  OmitW,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'

const nextUInt32 = () => (
  ((): number => {
    const d = new ArrayBuffer(0x100) ;
    new Float64Array(d)[0] = Math.random() ;
    return new Uint32Array(d)[0]! ;
  })()
) ;

export function assertAndPrintEquality<T>(actual: unknown, expected: T, message?: string | Error): asserts actual is T
{
  util.assert.deepStrictEqual(actual, expected, message) ;
  console["info"](`${actual } = ${expected }`) ;
}

declare global {
  export interface String {
    startsWith <const testv extends string, const thisT extends string >(this: thisT , expectedPrefix: testv) : this is (thisT & `${typeof expectedPrefix }${string }` )
    endsWith   <const testv extends string, const thisT extends string >(this: thisT , expectedPrefix: testv) : this is (thisT & `${string }${typeof expectedPrefix }` )
  }
}


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

export const generateCustomIntrinsicElementName = (
  function () {

    const idt = (
      nextUInt32()
    ) ;

    const pf = (
      ("elementdef" + idt )
    ) ;

    return (
      [pf, "main"].join("-")
    ) ;

  }
) ;

export namespace ReactJsBasedCustomIntrinsicElement {
  ;

  export namespace SpclPropNamesMapper {
    ;

    // TODO
    export const fromMdlSpacePropKeyNames = (
    function <const tgNm extends (keyof JSX.IntrinsicElements), actualProps extends JSX.IntrinsicElements[tgNm] >(...a : (
      ArgsWithOptions<[mdlSpacePropKeyNames: readonly (keyof actualProps & string)[] ], {}>
    ) )
    {
      const [mdlSpacePropKeyNames] = a ;

      const userSpacePropKnmp = (

        mdlSpacePropKeyNames

        .map(mdlSpaceKey => {

          const d = (
            ((): (
              | {
                mdlSpaceStedKey: `(OnUserspaceKey)${string}` | `(OnProgrammaticItcSpaceKey)${typeof mdlSpaceKey}` ,
                userSpaceKey: string,
                camelCasedEName?: never,
              }
              | {
                mdlSpaceStedKey: `(spcl)children` ,
                userSpaceKey?: never,
                camelCasedEName?: never,
              }
              | {
                mdlSpaceStedKey: `(AsEventKey)${string}`,
                userSpaceKey: string,
                camelCasedEName: string,
              }
            ) => {

              switch (mdlSpaceKey) {
                case "className"      : return { mdlSpaceStedKey: `(OnUserspaceKey)class`, userSpaceKey: "class" , } as const ;
                case "children"       : return { mdlSpaceStedKey: `(spcl)children`, } as const ;
                case "htmlFor"        : return { mdlSpaceStedKey: `(OnUserspaceKey)for`  , userSpaceKey: "for"   , } as const ;
              }

              for (const [fullNme = null, shortNme = null ] of util.iterateNonNull(mdlSpaceKey.match(/^on((?=[A-Z])\w+)/) ) ) {
                // TODO
                if ((shortNme !== null ) && (fullNme !== null ) ) {
                  return {
                    mdlSpaceStedKey: `(AsEventKey)${shortNme }`,
                    userSpaceKey: fullNme.toLowerCase() ,
                    camelCasedEName: shortNme ,
                  } as const ;
                }
              }

              {
                const pnm = (
                  1 ?
                  mdlSpaceKey.toLowerCase()
                  : util.L.kebabCase(mdlSpaceKey)
                ) ;

                return (
                  {
                    mdlSpaceStedKey: `(OnProgrammaticItcSpaceKey)${mdlSpaceKey }`,
                    userSpaceKey: pnm ,
                  } as const
                ) ;
              }
            })()
          ) ;

          return {
            mdlSpaceKey ,
            ...d ,
          } as const ;
        } )

      ) ;
  
      const userSpacePropKeyNames = (
        userSpacePropKnmp
        .map(({ userSpaceKey, }) => (
          userSpaceKey
        ) )
      ) ;
  
      return {
        mdlSpacePropKeyNames ,
        userSpacePropKeyNames ,
        userSpacePropKnmp ,
      } as const ;
    }
    ) ;

    ;
  }

  type MdlSpacePropKeyNameMappingConfiguringProps<actualProps extends {} = any > = (
    EitherPropertyOf<{
      readonly mdlSpacePropKeyNames?: readonly ((keyof actualProps) & string)[] ;
      readonly mdlSpacePropKeyNameMapper?: ReturnType<typeof SpclPropNamesMapper.fromMdlSpacePropKeyNames> ;
    }>
  ) ;

  export namespace SpclPropNamesMapper {
    ;

    export const fromDefnrProps1 = (
      function <const tgNm extends (keyof JSX.IntrinsicElements), actualProps extends JSX.IntrinsicElements[tgNm] >(...args : (
        ArgsWithOptions<[ ], MdlSpacePropKeyNameMappingConfiguringProps<actualProps> >
      ) )
      {
        const [
          {
            mdlSpacePropKeyNames : mspknArg,
            mdlSpacePropKeyNameMapper: mspknmpprArg ,
          } = null ?? {} ,
        ] = args ;

        return (
          mspknmpprArg
          ||
          SpclPropNamesMapper.fromMdlSpacePropKeyNames(mspknArg ?? [] )
        ) ;
      }
    ) ;

    ;
  }

  interface SpclWithRenderFncCasePropsFixed<actualProps extends {} = any > extends
  Extract<(
    & DCIE.ProgrammaticItcBaseClassChoiceProps
    & DCIE.SdrModeRelatedProps
  ) , unknown>
  {
    // readonly mdlSpacePropKeyNames?: readonly ((keyof actualProps) & string)[] ;
    // readonly mdlSpacePropKeyNameMapper?: ReturnType<typeof SpclPropNamesMapper.fromMdlSpacePropKeyNames> ;
  }

  export type SpclWithRenderFncCaseProps<actualProps extends {} = any > = (
    & SpclWithRenderFncCasePropsFixed<actualProps>
    & MdlSpacePropKeyNameMappingConfiguringProps<actualProps>
    & {
      // readonly mdlSpacePropKeyNames: readonly ((keyof actualProps) & string)[] ;
    }
  ) ;

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
          ...otherOpts
        },
      ] = null ?? a ;

      const {
        mdlSpacePropKeyNames ,
        userSpacePropKnmp ,
        userSpacePropKeyNames ,
      } = (
        SpclPropNamesMapper.fromDefnrProps1(otherOpts)
      ) ;

      /**
       * note: skip in server-side setting.
       * 
       */
      if (typeof document !== undefined ) {
      ;

      Object ;

      /**
       * we can only do {@link customElements.define `customElements.define(... ...)` } with given `name` at-most once, so
       * we'll need to make the resulting programmatic-itc `class { ... ... }` reconfigurable.
       * 
       */
      const {} = {} ;

      function extractAsProps(...[e] : [mainMountedElem: Element])
      : actualProps
      {
            ;
            
            interface EvmpOpsCommon {
              readonly mdlSpaceKey: (keyof actualProps & string) | "children" ;
              readonly userSpaceKey?: string;
              readonly value: (object | string) | null;
            }
            
            interface EvmpOpsChPropertyDesc extends EvmpOpsCommon
            {
              readonly mdlSpaceKey: (keyof actualProps & string) ;
              readonly userSpaceKey: string;
              readonly value: (object | string) | null;
            }

            interface EvmpOpsChildrenListing extends EvmpOpsCommon
            {
              readonly mdlSpaceKey: "children" ;
              readonly userSpaceKey?: never;
              readonly value: (object | string) | null;
            }
            
            // interface EvmpOps {
            //   readonly mdlSpaceKey: (keyof actualProps & string) | "children" ;
            //   readonly userSpaceKey: string;
            //   readonly value: (object | string) | null;
            // }
            type EvmpOps = (
              | EvmpOpsChPropertyDesc
              | EvmpOpsChildrenListing
            ) ;

            const m2 = (
              util.reiterated<EvmpOps>(function* () {

                yield* (
                  userSpacePropKnmp

                  .flatMap((c) => c.camelCasedEName ? [c] : [] as const )

                  .map(({ mdlSpaceKey, camelCasedEName, mdlSpaceStedKey, userSpaceKey, }) => {

                    // TODO
                    const vle = (

                      (...args: [unknown] ) => {
                        const receiver = e satisfies EventTarget ;

                        const [evt] = args ;

                        if (evt instanceof Event) {
                          ;
                          
                          if (
                            !(
                              [
                                camelCasedEName,
                                util.L.kebabCase(camelCasedEName) ,
                                camelCasedEName.toLowerCase(),
                              ]
                              .includes(evt.type ) 
                            )
                          ) {
                            throw util.throwTypeError(`mismatched evt name: 'evt.type' ${evt.type }, 'camelCasedEName' ${camelCasedEName } `) ;
                          }

                          return (
                            receiver.dispatchEvent(evt)
                          ) ;
                        } else {
                          throw new TypeError(`can only pass 'Event's, but found ${args.join(", ") } `) ;
                        }
                      }
                    ) ;

                    return {
                      mdlSpaceKey,
                      userSpaceKey,
                      value: vle,
                    } satisfies EvmpOps ;
                  } )

                ) ;

                yield* (
                  userSpacePropKnmp

                  .filter((c) => c.mdlSpaceStedKey.startsWith("(OnProgrammaticItcSpaceKey)") )

                  .map(({ mdlSpaceKey, userSpaceKey = util.throwAssertionError() , }) => {

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
                  // userSpaceKey: "children",
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

      globalThis.customElements.define ;
  
      const alreadyCreatedElementPrototype = (
        (() => {
          const e = document.createElement(tgName) ;
          const ePrototype = (
            Object.getPrototypeOf(e) as object
          ) ;
          return ePrototype ;
        })()
      ) ;

      const acec = (alreadyCreatedElementPrototype as Object).constructor ;

      void (
        (
          alreadyCreatedElementPrototype
          ===
          HTMLUnknownElement.prototype
        ) && console["error"](`trying to (re)define (uneligible) element-name '${tgName }', resolving to 'HTMLUnknownElement', which will likely fail.`)
      ) ;

      void (
        (
          alreadyCreatedElementPrototype
          !==
          HTMLElement.prototype
        ) && console["warn"](`custom element '${tgName }' had to be redefined.`)
      ) ;

      const {
        mainProgrammticItc ,

      } = (

        (function () {
          ;

          // TODO
          if (
            alreadyCreatedElementPrototype !== HTMLElement.prototype
            ||
            globalThis.customElements.get(tgName )
          ) {
            ;
    
            if (
              (
                alreadyCreatedElementPrototype
                ===
                HTMLUnknownElement.prototype
              )
            ) {
              throw new TypeError(`unsupported tag-name (HTMLUnknownElement) '${tgName }' (prototype: ${alreadyCreatedElementPrototype } ) `) ;
            }
    
            /* already defined */

            if (DwrAsMounted.wasItcInstantiatedHere(acec ) ) {
              ;
              
              const mainProgrammticItc0 = (
                acec
              ) ;

              return {
                mainProgrammticItc: mainProgrammticItc0 ,
              } ;

            } else {
              throw new TypeError(`Element already registered elsewhere and therefore cannot be redefined here: ${tgName } (pt: ${alreadyCreatedElementPrototype } ) `) ;
            }
    
          } else {
            ;
    
            const mainProgrammticItc0 = (
  
              DwrAsMounted.allocateProgrammaticItc()
        
            ) ;
      
            if ((
              alreadyCreatedElementPrototype === HTMLElement.prototype
            ) ) {
              ;
      
              globalThis.customElements.define(tgName, (
                mainProgrammticItc0
              )) ;
      
            } else {
      
              if (
                (
                  alreadyCreatedElementPrototype
                  ===
                  HTMLUnknownElement.prototype
                )
              ) {
                throw new TypeError(`unsupported tag-name '${tgName }' (HTMLUnknownElement: ${alreadyCreatedElementPrototype } ) `) ;
              }

              throw new TypeError(`unsupported tag-name '${tgName }' (prototype: ${alreadyCreatedElementPrototype } ) `) ;
      
              // TODO
              ;
            }

            return {
              mainProgrammticItc: mainProgrammticItc0 ,
            } ;
        
            ;
          }

        } )()
      ) ;

      void (
        (
          Object.getPrototypeOf((
            mainProgrammticItc.prototype
          ) )
          ===
          supc.prototype
        )
        ||
        (
          Object.setPrototypeOf((
            mainProgrammticItc.prototype
          ) , (
            supc.prototype
          ) )
        )
      ) ;

      mainProgrammticItc.prototype.playptArgs = (
        [{
          mode: sdr,
        }]
      ) ;

      mainProgrammticItc.prototype.remountImpl = (
        function (this: InstanceType<typeof mainProgrammticItc > ) {
          ;

          const props = (
            extractAsProps(this)
          ) ;

          this.r.render((
            <C {...props} />
          )) ;

        }
      ) ;

      }

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
        { ...etcProps } = {} ,
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

  /**
   * 
   * @deprecated
   * 
   */
  export const defineWithRenderFnAndProgrammaticItcBaseClassAlt = (
    function <const tgNm extends string, >(...a : (
      ArgsWithOptions<[
        tgName: tgNm,
        render: (props: object ) => Extract<React.ReactNode, object | null> ,
        supc ?: CustomElementConstructor ,
      ], (
        SpclWithRenderFncAndPrgmtcBaseClsCaseProps<actualProps>
      )>
    ) )
    {
      const [
        tgName, C,
        supc ,
        { ...etcProps } = {} ,
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

  export namespace DwrAsMounted
  {
    ;

    export const wasItcInstantiatedHere: (
      (x: Function ) => x is ItcAllocatedHere
    ) = (
      x => (
        (mp as WeakSet<Function> )
        .has(x)
      )
    ) ;

    type ItcAllocatedHere = (
      ReturnType<typeof allocateProgrammaticItc>
    ) ;

    export const allocateProgrammaticItc = (function () {

      const mainProgrammticItc = (
  
        class extends (HTMLElement as CustomElementConstructor) {
          //

          private static WAS_ADDED_THERE = mp.add(this) ;

          r !: RDC.Root ;
  
          constructor (...args: any )
          {
            super(...args) ;

            this.r = (
              RDC.createRoot((
                this.attachShadow(...(this.playptArgs ?? (
                  console["error"](`[ReactJsBasedCustomIntrinsicElement] [mainProgrammticItc.new] unexpected null-ness of 'playptArgs'`) ,
                  [{
                    mode: "open",
                  }]
                ) ) )
              ) )
            ) ;

          }

          playptArgs!: Parameters<Element["attachShadow"] > ;

          // TODO
          
          remountImpl() : void
          {
            throw Error(`unimplemented 'remountImpl'`) ;
          }

          connectedCallback() : void
          {
            this.remountImpl() ;
          }

          attributeChangedCallback() : void
          {
            this.remountImpl() ;
          }

          disconnectedCallback() : void
          {
            this.r.unmount() ;
          }
  
        }
  
      ) ;

      return mainProgrammticItc ;
    } ) ;

    const mp = (
      new WeakSet<ItcAllocatedHere>()
    ) ;

    ;
  }
  
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















