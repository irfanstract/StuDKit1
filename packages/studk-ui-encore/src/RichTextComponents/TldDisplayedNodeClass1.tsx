











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
  EitherPropertyOf, 
  Extend,
  OmitCase,
  OmitW,
  RequiredPartially,
} from 'studk-fwcore/src/util/C1.ts'



;

;







;

import {
  parseDOmParseableCode ,
  parseHtml ,
} from "studk-dom-util/src/xst/DOmParsing1.tsx" ;

type JsxCreatedNativeElemt<exprtdnmv extends keyof React.JSX.IntrinsicElements > = (
  React.ElementRef<exprtdnmv>
) ;

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  StudkReactJsOvcUtil,
} from '#ReactJsBased.ts'; ;

import {
  //
  RDC, 
  ReactDOMClient,
} from '#UiFwCore/util/ReactDomBased.ts'; ;

import * as RDS from "react-dom/server" ;

import {
  CFaBku ,
} from "#UiFwCore/reactjs/helpers/CFa.tsx" ;









import {
  Lexical,
  LexicalAutoLinkPlugin,
  //
  LexicalCommand ,
  LexicalEditor ,
  LexicalHtmlHelpers,
  LexicalJsLinkElemsSupport,
  LexicalJsListsSupport,
  LexicalJsTablesSupport,
  LexicalJsUndoRedoSupport,
  LexicalLinkPlugin,
  LexicalListPlugin,
  LexicalNode ,
  LexicalSerializedEditorState, 
  LexicalTablePlugin,
} from "#UiFwCore/xt/StFbDraftJsLexicalJsBased1.ts" ;








;

namespace LjdeLNode
{
  ;

  export const describeElementNodeConstructor = (

    /* see https://lexical.dev/docs/concepts/nodes */
    /* see https://lexical.dev/docs/concepts/serialization */
    function <const lnamv extends string, const exprtdnmv extends keyof React.JSX.IntrinsicElements , > (...[options] : (

      ArgsWithOptions<[], {

        lName: lnamv
        ,
        lTst ?: string
        ,

        exportedName: exprtdnmv
        ,
        getPropsFromExprtd: (
          (...x: (
            ArgsWithOptions<[
              NoInfer<JsxCreatedNativeElemt<exprtdnmv> >
              ,
            ], {} >
          ) ) =>
            React.ComponentProps<exprtdnmv>
        )
        ,
        defaultProps: NoInfer<React.ComponentProps<exprtdnmv> >
        ,

      }>

    ) )
    {
      ;

      const {
        lName ,
        lTst = util.L.camelCase(lName) ,
        getPropsFromExprtd,
        exportedName ,
        defaultProps: defaultProps1 ,
      } = options;

      type AsCreatedDOM = (
        JsxCreatedNativeElemt<exprtdnmv> & HTMLElement
      ) ;

      return (

        class XNd extends Lexical.ElementNode
        {

          static getType() : lnamv
          {

            return lName ;
          }

          static clone(x: XNd ): XNd
          {

            return (
              new XNd(x.__key , x.dProps )
            ) ;
          }

          get [Symbol.toStringTag]() {
            return lTst ;
          }

          static fromProps(dProps : React.ComponentProps<exprtdnmv> ) : XNd
          {

            return (
              new XNd(undefined, dProps )
            ) ;
          }

          constructor(
            __key: Lexical.ElementNode["__key"] | undefined ,
            public dProps : React.ComponentProps<exprtdnmv> = defaultProps1 ,
          )
          {
            super(__key ) ;

          }

          toReactJsElement() : React.ReactElement
          {

            return (
              (() => { const C = exportedName ; return <C {...this.dProps } /> })() 
            ) ;
          }

          exportDOM(...[editor]: [_editor: LexicalEditor] ) : Lexical.DOMExportOutput
          {

            const nd = (
              this.#createDOMImpl(undefined, editor)
            ) ;
            return {
              element: nd ,
            } ;
          }

          createDOM(...[c, editor] : [_config: Lexical.EditorConfig, _editor: LexicalEditor] ) : AsCreatedDOM
          {

            return (
              this.#createDOMImpl(undefined, editor)
            ) ;
          }

          #createDOMImpl(...[ , editor ] : [...[_config?: never], _editor: LexicalEditor] ) : AsCreatedDOM
          {

            const newJsx = (
              this.toReactJsElement()
            ) ;

            const rCNd = TO_ELEMENT((
              newJsx
            )) ;

            return rCNd as AsCreatedDOM ;
          }

          updateDOM(...[prevNode, dom, config ] : [XNd, AsCreatedDOM, Lexical.EditorConfig] ) : boolean
          {

            const newJsx = (
              this.toReactJsElement()
            ) ;

            if (newJsx.type === dom.tagName.toLowerCase() ) {

              UPDATE_ELEMENT(dom, (
                newJsx
              )) ;
  
              return false ;
            } else {
              return true ;
            }
          }

          static importDOM(): Lexical.DOMConversionMap
          {

            return {
              //
              [exportedName ]: (n1: Node) => {

                return {

                  conversion: (n1) => {
                    const asProps = (
                      getPropsFromExprtd(n1 as AsCreatedDOM)
                    ) ;
                    return {
                      node: XNd.fromProps(asProps) ,
                    } satisfies Lexical.DOMConversionOutput ;
                  } ,

                } ;
              } ,

            } ;
          }

        }
      ) ;
    }
  ) ;

  const ndrm = (
    new WeakMap<Element, ReactDOMClient.Root >()
  ) ;

  const TO_ELEMENT = (
    

    function (...[e0] : [React.ReactElement])
    {

      const r1 = (
        // document.createDocumentFragment()
        document.createElement("div")
      ) ;

      const rt1 = (
        RDC.createRoot(r1)
      ) ;

      if (0) {
        ;
        void (
          rt1
          .render(e0  )
        ) ;
      } else {
        // // TODO
        // util.throwAssertionError() ;
        r1.innerHTML = (
          RDS.renderToString(e0 , {
            //
          } )
        ) ;
      }
      const rCNd = r1.children[0]! satisfies Element ;

      ndrm.get(rCNd) && util.throwTypeError() ;
      ndrm.set(rCNd, rt1 ) ;

      return rCNd ;
    }
  ) ;

  const UPDATE_ELEMENT = (

    function (...[receiver, e0] : [receiver: Element, React.ReactElement])
    {

      const rt1 = (
        ndrm.get(receiver)
        || util.throwTypeError(`unsupported externally-created Element: ${receiver } `)
      ) ;

      void (
        rt1
        .render(e0  )
      ) ;

    }
    //
  ) ;

  ;
}

export {
  LjdeLNode ,
} ;

const LjdeLImgNode = (

  LjdeLNode.describeElementNodeConstructor({
    lName: "custom-img",
    exportedName: "img" ,
    getPropsFromExprtd: (e0) => {
      return {
        src: e0.src ,
      } ;
    } ,
    defaultProps: {
      // src: "data:"
    } ,
  })
) ;
const LjdeLVideoElemt = (

  LjdeLNode.describeElementNodeConstructor({
    lName: "custom-videoelement",
    exportedName: "video" ,
    getPropsFromExprtd: (e0) => {
      return {
        src        : e0.src       ,
        controls   : e0.controls      ,
      } ;
    } ,
    defaultProps: {
      controls: true ,
    } ,
  })
) ;

export {
  LjdeLImgNode ,
  LjdeLVideoElemt ,
} ;































