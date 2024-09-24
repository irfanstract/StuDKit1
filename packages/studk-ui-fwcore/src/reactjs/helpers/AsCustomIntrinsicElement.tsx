






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

// function assertAndPrintEquality<T>(actual: unknown, expected: T, message?: string | Error): asserts actual is T
// {
//   util.assert.deepStrictEqual(actual, expected, message) ;
//   console["info"](`${actual } = ${expected }`) ;
// }

import {
  assertAndPrintEquality,
  nextUInt32 ,
} from 'studk-ui-fwcore/src/util/DOmCustomIntrinsicElemsInfrasCommon.ts';

export {
  assertAndPrintEquality ,
  // nextUInt32 ,
} ;

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

import {
  generateCustomIntrinsicElementName ,
} from 'studk-ui-fwcore/src/util/DOmCustomIntrinsicElemsInfrasCommon.ts';

export {
  generateCustomIntrinsicElementName ,
} ;

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

    export const getCurriedEventTargetDispatcher = (

      function (...[e, camelCasedEName] : [receiver: EventTarget, camelCasedEName: string ] )
      {

        return (

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

  type CeEventListenerFnc<Evt extends Event = any, R extends void | boolean = any > = (
    | ((evt: Evt) => (R ))
  ) ;

  const defineWithRender10 = (
    function <const tgNm extends string, actualProps extends { [k: string]: string | (CeEventListenerFnc<Event, boolean> | CeEventListenerFnc<Event, void> ) ; } >(...a : (
      ArgsWithOptions<[
        tgName: tgNm,
        render: (props: actualProps) => Extract<React.ReactNode, object | null> ,
      ], (
        SpclWithRenderFncCaseProps<actualProps>
      )>
    ) )
    : (
      | tgNm & React.ExoticComponent<actualProps>
    )
    {

      const [
        tgName,
        C,
        {
          /**
           * note: DOM like `HTMLElement` is not available server-side so
           * we need to defer the defaulting behind the check `typeof document !== "undefined" && typeof HTMLElement !== "undefined"`
           */
          supc : supcArg ,
          sdr: shadowRootExpsMode = ("open" satisfies ShadowRootMode) ,
          ...otherOpts
        },
      ] = null ?? a ;

      interface EvmpOpsCommon {
        readonly mdlSpaceKey: (keyof actualProps & string) | "children" ;
        readonly userSpaceKey?: string;
        // readonly value: (object | string) | null;
        readonly getValueFrom: (mainMountedElem: Element) => ((object | string ) | null )
      }
      
      interface EvmpOpsChPropertyDesc extends EvmpOpsCommon
      {
        readonly mdlSpaceKey: (keyof actualProps & string) ;
        readonly userSpaceKey: string;
        // readonly value: (object | string) | null;
      }

      interface EvmpOpsChildrenListing extends EvmpOpsCommon
      {
        readonly mdlSpaceKey: "children" ;
        readonly userSpaceKey?: never;
        // readonly value: (object | string) | null;
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

      const {
        mdlSpacePropKeyNames ,
        userSpacePropKnmp ,
        userSpacePropKeyNames ,
      } = (
        SpclPropNamesMapper.fromDefnrProps1(otherOpts)
      ) ;

      // if (beingInDOmEnv) {
      //   ;
      // }

      /**
       * note:
       * SSR by-default won't have access to {@link document} and anything else.
       * in addition, it's possible to `import ... from "jsdom"` and then {@link globalThis `globalThis.document = document`}, but
       * we still doesn't have most of these DOM API(s).
       * 
       */
      if (
        typeof document      !== "undefined"
        &&
        typeof window        !== "undefined"
        &&
        typeof HTMLElement   !== "undefined"
      ) {
      ;

      Object ;

      const { supc = HTMLElement } = { supc: supcArg, } ;

      const propSerDeserTransationalDescs = (
        (function ()
        {
            ;
            
            const m2 = (
              util.reiterated<EvmpOps>(function* () {

                yield* (
                  userSpacePropKnmp

                  .flatMap((c) => c.camelCasedEName ? [c] : [] as const )

                  .map(({ mdlSpaceKey, camelCasedEName, mdlSpaceStedKey, userSpaceKey, }) => {

                    // TODO
                    const getVle = (e: Element) => (

                      SpclPropNamesMapper.getCurriedEventTargetDispatcher(e, camelCasedEName)
                    ) ;

                    return {
                      mdlSpaceKey,
                      userSpaceKey,
                      getValueFrom: getVle,
                    } satisfies EvmpOps ;
                  } )

                ) ;

                yield* (
                  userSpacePropKnmp

                  .filter((c) => c.mdlSpaceStedKey.startsWith("(OnProgrammaticItcSpaceKey)") )

                  /**
                   * `children` is to be handled some other way -
                   * excluding it from this list
                   * 
                   */
                  .filter(c => !(c.mdlSpaceKey === "children") )

                  /**
                   * `hidden`, `style`, etc
                   * already got their place on *the host-node* in-turn directly referentible from CSS -
                   * excluding it from this list
                   * 
                   */
                  .filter(c => !(c.mdlSpaceKey.match(/^(hidden|style)$/)) )

                  .map(({ mdlSpaceKey, userSpaceKey = util.throwAssertionError() , }) => {

                    const getVle = (e: Element) => e.getAttribute(userSpaceKey) ;

                    return {
                      mdlSpaceKey,
                      userSpaceKey,
                      getValueFrom: getVle,
                    } satisfies EvmpOps ;
                  } )

                ) ;

                yield {
                  mdlSpaceKey: "children",
                  // userSpaceKey: "children",
                  getValueFrom: () => <slot />,
                } satisfies EvmpOps ;

              })
            ) ;

            return m2 ;
        })()
      ) ;

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

            const o3 = (
              util.Immutable.Map((
                propSerDeserTransationalDescs
                .map(({ mdlSpaceKey, getValueFrom, }) => ({ mdlSpaceKey, value: getValueFrom(e), } as const ) )
                .map(({ mdlSpaceKey, value, }) => [ mdlSpaceKey, value ] as const )
              ))
              .toObject()
            ) ;

            return (
              o3 as actualProps
            ) ;

      }

      if (1) {
        console["log"]({
          tgName ,
          mdlSpacePropKeyNames,
          userSpacePropKeyNames ,
          propSerDeserTransationalDescs ,
        }) ;
      }

      globalThis.customElements.define ;

      const {
        alreadyCreatedElementPrototype ,
        acec ,

        mainProgrammticItc ,

      } = (
        analysePossiblyAlreadyDefinedElementNameAndCtor(tgName)
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
          mode: shadowRootExpsMode,
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

  /**
   * if on client-side supporting {@link customElements}, will `register` with given name (`tgName`) ; otherwise, do nothing.
   * returns `tgName`.
   * 
   * ```typescript
   * import { StudkReactJs } from "#uifwcore/StudkReactJs" ;
   * 
   * const Button = ReactJsBasedCustomIntrinsicElement.defineWithRender("nyapp-button", ... ... ) ;
   * const Canvas = ReactJsBasedCustomIntrinsicElement.defineWithRender("nyapp-canvas", ... ... ) ;
   * 
   * export default (
   * 
   *   StudkReactJs.describeHtmlComponent((
   *     function MBCImpl(... )
   *     {
   * 
   *       return (
   *         <nav>
   *           <Button ... ... />
   *           <Button ... ... />
   *           <Canvas ... ... />
   *         </nav>
   *       ) ;
   *     }
   *   ))
   * ) ;
   * ```
   * 
   * TBD: SSR
   * 
   */
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

      return (
        defineWithRender10(...a )
      ) ;
    }
  )

  export type SpclWithRenderFncAndPrgmtcBaseClsCaseProps<actualProps extends {} = any > =
  Extract<(
    OmitCase<SpclWithRenderFncCaseProps<actualProps>, "supc">
  ) , unknown>
  // {
  // }
  ;

  /**
   * if on client-side supporting {@link customElements}, will `register` with given name (`tgName`) ; otherwise, do nothing.
   * returns `tgName`.
   * 
   * ```typescript
   * import { StudkReactJs } from "#uifwcore/StudkReactJs" ;
   * 
   * const Button = ReactJsBasedCustomIntrinsicElement.defineWithRender("nyapp-button", ... ... ) ;
   * const Canvas = ReactJsBasedCustomIntrinsicElement.defineWithRender("nyapp-canvas", ... ... ) ;
   * 
   * export default (
   * 
   *   StudkReactJs.describeHtmlComponent((
   *     function MBCImpl(... )
   *     {
   * 
   *       return (
   *         <nav>
   *           <Button ... ... />
   *           <Button ... ... />
   *           <Canvas ... ... />
   *         </nav>
   *       ) ;
   *     }
   *   ))
   * ) ;
   * ```
   * 
   * see {@link defineWithRender}
   * 
   * TBD: SSR
   * 
   */
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
   * {@link defineWithRenderFnAndProgrammaticItcBaseClass}
   * 
   * @deprecated
   * 
   */
  export const defineWithRenderFnAndProgrammaticItcBaseClassAlt = (
    function <const tgNm extends string, const actualProps extends { [k: string]: string ; } >(...a : (
      ArgsWithOptions<[
        tgName: tgNm,
        render: (props: actualProps ) => Extract<React.ReactNode, object | null> ,
        supc ?: CustomElementConstructor ,
      ], (
        SpclWithRenderFncAndPrgmtcBaseClsCaseProps<actualProps>
      )>
    ) )
    {
      ;
  
      return (
        definePrivatelyWithRenderFnAndProgrammaticItcBaseClassAlt(...a )
      ) ;
    }
  ) ;

  /**
   * 
   * {@link defineWithRenderFnAndProgrammaticItcBaseClass} without public name
   * 
   * AVOID USING THIS API IN SSR-BASED FW(s) LIKE NEXTJS OR SVELTE.
   * this API doesn't play well with SSR.
   * 
   * 
   * @deprecated  this API doesn't play well with SSR.
   * 
   */
  export const definePrivatelyWithRenderFnAndProgrammaticItcBaseClassAlt = (
    function <const tgNm extends string, const actualProps extends { [k: string]: string | (CeEventListenerFnc<Event, boolean> | CeEventListenerFnc<Event, void> ) ; } >(...a : (
      ArgsWithOptions<[
        ...[tgName?: tgNm | null,],
        render: (props: actualProps ) => Extract<React.ReactNode, object | null> ,
        supc ?: CustomElementConstructor ,
      ], (
        SpclWithRenderFncAndPrgmtcBaseClsCaseProps<actualProps>
      )>
    ) )
    {
      const [
        tgName0 = null, C,
        supc ,
        { ...etcProps } = {} ,
      ] = null ?? a ;
      const tgName = (
        (tgName0 ?? generateCustomIntrinsicElementName() ) as ([tgNm] extends [string] ? string : string )
      ) ;

      ;

      return (
        defineWithRender10(tgName, C, {
          supc ,
          ...etcProps
        })
      ) ;
    }
  ) ;

  /**
   * 
   * 
   */
  const analysePossiblyAlreadyDefinedElementNameAndCtor = (

    function <const tgnmv extends string>(...[tgName] : [tgName: tgnmv] )
    {

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

      return {
        tgName ,

        alreadyCreatedElementPrototype ,
        acec ,

        mainProgrammticItc ,

      } as const ;
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
                    mode: "closed",
                  }]
                ) ) )
              ) )
            ) ;

          }

          playptArgs!: Parameters<Element["attachShadow"] > ;

          // TODO
          
          remountImpl() : void
          {
            /* cannot safely `throw`, since {@link customElement.register `registerElement`} calls `connectedCallback` */
            // throw new Error(`unimplemented 'remountImpl'`) ;

            this.r.render(null) ;
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















