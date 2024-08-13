




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

import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;

import {
  getNodeTypeLabelTxt ,
  getNodeChildren ,
} from "studk-ui-encore/src/CommonParsedMarkupFileDisplayUi/TsAstUtils.tsx"

import {
  KeywordAlikeKcn,
  NodeListKcn,
  getKcn, 
  getRlKcn,
} from "studk-ts-codeanalysis/src/TsDeriva.ts" ;






;

import * as React from "react" ;






import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  withExtraSemanticProperties ,
} from 'studk-ui-fwcore/src/react-dom/helpers/WithAddedSemanticProperties.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

const useIsClientSide = (): boolean => (
  React.useSyncExternalStore(() => (() => {}) , () => true, () => false )
) ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;




// namespace ReactJsTsc
// {
//   ;

//   const useNodeChildren = function (...[value] : [TS.Node]) {
//     ;
//   } ;

// }

const getSpclDefaultClvMd = () => (
  // <p><code>{nodeTypeLabelTxt }</code></p>
  CLV.forIsTerminaNdFnc()
) ;

namespace TsAstDisplayEvents
{
  /* extra semi-colon tp work-around `TS(1205)` */ ;

  export interface SelfTotalReplacingChgEventDesc {
    newValue: TS.Node,
  }

}

export {
  /** @deprecated this is a WIP */
  TsAstDisplayEvents ,
} ;

export const TsAstDisplayC = (
  describeHtmlComponent((function TsAstDisplayCImpl(props : (
    {
      value: TS.Node ,
      clvMd ?: CLV,
      onChange ?: (evt: TsAstDisplayEvents.SelfTotalReplacingChgEventDesc) => void ,
    }
  ) )
  {
    const {
      value: nd,
      clvMd = (
        // <p><code>{nodeTypeLabelTxt }</code></p>
        getSpclDefaultClvMd()
      ) ,
      onChange: runWholeTreeChgHandler ,
    } = props ;

    ;
    
    const renderAsEnlargedPuncTokenCode = (e0: React.ReactElement) => (
      <span style={{ display: "inline-block", inlineSize: `4em` }} >
        <span style={{ textAlign: "center", }} >
        <span style={{ fontSize: `1.25em`, }}>
          <span style={{ display: "inline-block", position: "relative", transform: `scale(2.5, 1)`, transformOrigin: `0 0 0` }}>
          { e0 }
          </span>
          </span>
        </span>
      </span>
    ) ;
    const renderAsEnlargedBracketTokenCode = (e0: React.ReactElement) => (
      renderAsEnlargedPuncTokenCode((
        <span style={{ display: "inline-block", position: "relative", transform: `scale(1, 1.25)`, }}>
        <span style={{ writingMode: "vertical-rl", }} >
          { withExtraSemanticProperties({ style: { fontFamily: "serif", fontSize: `2em` } } , e0) }
        </span>
        </span>
      ))
    ) ;

    const renderSubTerm = (
      function (...[e, { onChange, } = {} ] : (
        ArgsWithOptions<[TS.Node] , {
          onChange ?: (evt: TsAstDisplayEvents.SelfTotalReplacingChgEventDesc) => void ,
        } >
      ))
      {
        return (
          <TsAstDisplayC
          value={e }
          clvMd={clvMd}
          // TODO
          onChange={onChange}
          />
        ) ;
      }
    ) ;

    const renderJsxExpression = (
      function (...[e, { onValueChange, } = {}] : (
        ArgsWithOptions<[TS.JsxExpression & { readonly expression : TS.Node, }] , {
          //
          onValueChange ?: (evt: TsAstDisplayEvents.SelfTotalReplacingChgEventDesc) => void ,
        } >
      ))
      {

        const e1 = (
          renderSubTerm(e.expression , { onChange: onValueChange, } )
        ) ;

        if (1) {
          ;
          return (
            <div
            style={{
              border: `0.1ex dashed currentcolor` ,
              padding: `1ex` ,
              // margin: `0.75ex` ,
            }}
            >
              { e1 }
            </div>
          ) ;
        }

        return (
          <>
          { renderAsEnlargedBracketTokenCode(<code>{ "(" }</code>) }
          { e1 }
          { renderAsEnlargedBracketTokenCode(<code>{ ")" }</code>) }
          </>
        ) ;

      }
    ) ;
    
    const renderPropertylike = (
      function (...[nd, { onValueChange: runOnChgCb, } = {}] : (
        ArgsWithOptions<[TS.VariableDeclaration | TS.JsxAttribute] , {
          // onChange ?:
          onValueChange ?: (evt: TsAstDisplayEvents.SelfTotalReplacingChgEventDesc) => void ,
        } >
      ))
      {
        ;
        
        const {
          name ,
          rhs ,
        } = (
          (function (): { name: TS.Node, rhs: React.ReactElement | null, } {
            ;

            if (TS.isJsxAttribute(nd)) {
              ;

              const {
                name ,
                initializer ,
              } = nd ;
  
              const rhs = (
                initializer ? (
                  <>
                  { (
                    (() => {
                      if (TS.isJsxExpression(initializer) && initializer.expression ) {
                        return (
                          renderJsxExpression(initializer , {
                            onValueChange: runOnChgCb,
                          } )
                        ) ;
                      }
                      return (
                        <TsAstDisplayC
                        value={initializer }
                        clvMd={clvMd}
                        // TODO
                        onChange={undefined}
                        />
                      ) ;
                    })()
                  ) }
                  </>
                ) : null
              ) ;
              
              return {
                name ,
                rhs ,
              } ;
            }

            if (TS.isVariableDeclaration(nd)) {
              const {
                name ,
                initializer ,
              } = nd ;
              
              const rhs = (
                initializer ? (
                  <>
                  { (
                    renderJsxExpression((
                      TS.factory.createJsxExpression(undefined, initializer )
                    ) , {
                      onValueChange: runOnChgCb ,
                    } )
                  ) }
                  </>
                ) : null
              ) ;

              return {
                name ,
                rhs ,
              } ;

            }

          } )()
        ) ;

        return (
          <div
          key={3}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
          }}
          >
            <code>{ name.getText() }</code> {}
            { rhs ? (
              <>
              <code> </code>
              <code>=</code>
              <code> </code>
              { withExtraSemanticProperties({ style: { flex: `1 1 auto`, } } , (
                <div style={{ display: "grid" }}>
                  { rhs }
                </div>
              ) ) }
              </>
            ) : null }
          </div>
        ) ;
      }
    ) ;

    const ndCtor = (
      (Object.getPrototypeOf(nd) as (Object | null ))?.constructor
    ) ;
    const nodeTypeLabelTxt = (
      getNodeTypeLabelTxt(nd)
      ??
      `Node Type ${nd.kind }`
    ) ;

    const ncs = (
      useIsClientSide()
    ) ;

    const asTerminalMdlNode = (
      TS.isToken(nd)
      || TS.isLiteralExpression(nd)
    ) ;

    const sptdKcn = (
      getRlKcn(nd)
    ) ;

    const childListDView = (() => {
      if (!ncs) {
        return <></> ;
      }

      if (!asTerminalMdlNode ) {
        ;

        const ndChildren = (
          ((): readonly TS.Node[] => {
            /**
             * note --
             * TS Node methods failed with programmatically-constructed Node(s) so
             * there arises need for `try-catch`
             * 
             */
            {
              ;
              if (TS.isSourceFile(nd) ) {
                return nd.statements ;
              }
              if (TS.isBlock(nd) ) {
                return nd.statements ;
              }
              return (
                nd.getChildren()
              ) ;
            }
          })()
        ) ;
    
        return (
          <div
          style={{
            zoom: `95%` ,
          }}
          >
          <TsAllChildNodesListDisplayC
          value={ndChildren }
          clvMd={clvMd}
          // srcNd={nd }
          onChange={runWholeTreeChgHandler && (
            (sptdKcn instanceof NodeListKcn)
            ?
            (({ newValue: newChildrenList, }) => {
              const newv = (
                sptdKcn.withReplacedChildren(nd, newChildrenList )
              ) ;
              runWholeTreeChgHandler({ newValue: newv }) ;
            } )
            : undefined
          )}
          />
          </div>
        ) ;
      } else {
        return <></> ;
      }
    })() ;

    const e = (() => {
      ;
      
      if (clvMd.asDbWhen() ) {

        if (asTerminalMdlNode) {
          const ndSrcTxt = nd.getText() ;

          switch (ndSrcTxt ) {
            // ════
            case "(" : return renderAsEnlargedBracketTokenCode(<code>{ ndSrcTxt }</code>   ) ;
            case ")" : return renderAsEnlargedBracketTokenCode(<code>{ ndSrcTxt }</code>   ) ;
            case "[" : return renderAsEnlargedBracketTokenCode(<code>{ ndSrcTxt }</code> ) ;
            case "]" : return renderAsEnlargedBracketTokenCode(<code>{ ndSrcTxt }</code> ) ;
            case "{" : return renderAsEnlargedBracketTokenCode(<code>{ ndSrcTxt }</code>) ;
            case "}" : return renderAsEnlargedBracketTokenCode(<code>{ ndSrcTxt }</code>) ;
            case "<" : break ; return <code><>{ "<   <   <" }</></code> ;
            case ">" : break ; return <code><>{ ">   >   >" }</></code> ;
          }
          if (TS.isToken(nd) && !ndSrcTxt.match(/\s|\w/) ) {
            return renderAsEnlargedPuncTokenCode(<code>{ ndSrcTxt }</code>) ;
          }
          if ((
            getNodeTypeLabelTxt(nd).endsWith("Keyword")
          ) ) {
            return (
              <strong>
                <code>{ ndSrcTxt }</code>
              </strong>
            ) ;
          }

          if (TS.isIdentifier(nd) || TS.isLiteralExpression(nd) ) {
            return (
              <div
              title={`value: ${ndSrcTxt}`}
              >
              <p>
                { (() => {
                  if (runWholeTreeChgHandler && sptdKcn ) {
                    if (sptdKcn instanceof KeywordAlikeKcn) {
                      return (
                        <input
                        value={ndSrcTxt}
                        onChange={evt => {
                          const { value, } = evt.target ;

                          const newNd = sptdKcn.compileLiteral(value) ;

                          console["log"]({ newNd, }) ;

                          runWholeTreeChgHandler({ newValue: newNd, }) ;

                          ;
                        } }
                        />
                      ) ;
                    }
                  }
                  return (
                    <code>{ ndSrcTxt }</code>
                  ) ;
                })() }
              </p>
              </div>
            ) ;
          }
        }

        if (TS.isJsxAttributeLike(nd) || TS.isVariableDeclaration(nd) ) {
          if (TS.isJsxAttribute(nd) || TS.isVariableDeclaration(nd) ) {
            ;

            return (
              renderPropertylike(nd)
            ) ;
          }
          ;
        }
        if (TS.isJsxExpression(nd) && nd.expression ) {
          return renderJsxExpression(nd) ;
        }

        const asJsxTag = (() => {
          if ((
            false
            || TS.isJsxOpeningLikeElement(nd)
            || TS.isJsxClosingElement(nd)
          )) { return true ; }
          return false ;
        })() ;
        const bord = (() => {
          if ((
            false
            || TS.isBlock(nd)
            || TS.isVariableDeclaration(nd)
          )) { return true ; }
          return false ;
        })() ;

        const e1C = (() => {

          if (TS.isJsxClosingElement(nd)) {
            return (
              <code>{ nd.getText() }</code>
            ) ;
          }

          if (TS.isJsxOpeningLikeElement(nd)) {
            ;
            if (nd.attributes.properties.length <= 0 ) {
              ;
              return (
                <div
                style={{
                  display: "flex" ,
                  flexDirection: "row",
                }}
                >
                <>
                { renderAsEnlargedPuncTokenCode(<code>{ "<" }</code>) } {}
                { renderSubTerm(nd.tagName) }
                { renderAsEnlargedPuncTokenCode(<code>{ ">" }</code>) } {}
                </>
                </div>
              ) ;
            }
          }

          return (
            <>
            { asTerminalMdlNode && clvMd.getHeadlineImpl(nd) }
            { (asTerminalMdlNode === false) && (
              <div
              style={{ paddingInlineStart: `1.0ex`, }}
              >
                { childListDView }
              </div>
            ) }
            </>
          ) ;
        })() ;

        const e1 = (
          <div
          title={`${nodeTypeLabelTxt } - ${JSON.stringify(nd.getText() ) }`}
          style={{
            zoom: `99%` ,
            border: bord ? `0.05em solid currentcolor` : undefined ,
            background: asJsxTag ? `rgba(0 0 0 / 0.25 )` : undefined ,
            ...((TS.isJsxOpeningElement(nd) ) ? {
              overflow: "auto" ,
              maxBlockSize: `9.5em` ,
            } : {}) ,
          }}
          >
            { e1C }
          </div>
        ) ;

        return (
          <div
          style={{
            // display: "inline-block" ,
          }}
          >
            <div
            style={{
              display: "flex" ,
              flexDirection: "column",
            }}
            >
              { e1 }
              <div>
              { (
                (runWholeTreeChgHandler && (sptdKcn ) )
                &&
                <Button
                title={`Replace This ${getNodeTypeLabelTxt(nd) ?? `Expression/Statement` } With...`}
                children={<>☯</>}
                onClick={() => {
                  // const newNd = (() => {
                  //   if (sptdKcn instanceof NodeListKcn) {
                  //     return sptdKcn.withReplacedChildren(nd,  ) ;
                  //   }
                  //   return nd ;
                  // })() ;
                }}
                />
              ) }
              </div>
            </div>
          </div>
        ) ;

      }
      return (
        <div
        style={{
          zoom: `95%` ,
        }}
        >
          { clvMd.getHeadlineImpl(nd) }
          { childListDView }
        </div>
      ) ;
    })() ;
    return (
      e
    ) ;
  }))
) ;

class CLV
{

  static forIsTerminaNdFnc(...[
    isTerminalNd = (e) => {
      if (TS.isSourceFile(e) ) {
        return false ;
      }
      if (TS.isToken(e) || TS.isLiteralExpression(e) ) {
        return true ;
      }
      return false ;
    } ,
  ] : [isTerminalNd ?: (e: TS.Node) => boolean ]) {
    return (
      // <p><code>{nodeTypeLabelTxt }</code></p>
      CLV.fromGetHeadlineImpl(e => {
        if (isTerminalNd(e) ) {
          return (
            <p>
              <code>{ e.getText() }</code>
            </p>
          ) ;
        }
        return (
          <p>
            (a Node <code>{ getNodeTypeLabelTxt(e) }</code>)
          </p>
        ) ;
      } , { skipToTerminalDecendants: (e) => (
        // TS.isToken(e) || TS.isLiteralExpression(e)
        // true
        isTerminalNd(e) === false
      ) , } )
    )
  }

  static fromGetHeadlineImpl(...args : (
    ArgsWithOptions<[getHeadlineImpl: (e: TS.Node) => React.ReactElement] , (
      { skipToTerminalDecendants ?: (e: TS.Node) => boolean , }
    )>
  ) )
  {
    const [
      getHeadlineImpl,
      {
        skipToTerminalDecendants = (e: unknown) => false,
      } = {} ,
    ] = args ;
    return new CLV(
      getHeadlineImpl , skipToTerminalDecendants ,
      () => true ,
    ) ;
  }

  private constructor(
    //
    public readonly getHeadlineImpl: (e: TS.Node) => React.ReactElement  ,
    public readonly skipToTerminalDecendantsFor : (e: TS.Node) => boolean ,
    public readonly asDbWhen : () => boolean = () => false ,
  )
  {}
}

export const TsAllChildNodesListDisplayC = (
  describeHtmlComponent((function TsNodeListDisplayCImpl(props : (
    & { value: ReadonlyArray<TS.Node>, clvMd ?: CLV, }
    & { onChange?: (evt: { newValue: ReadonlyArray<TS.Node> , changedIndices: readonly number[] }) => void }
    & {
      // // TODO
      // /** @deprecated */
      // srcNd: TS.Node ,
    }
  ) )
  {
    const {
      clvMd = getSpclDefaultClvMd() ,
      value: ndChildren,
      // srcNd ,
      onChange: runOnChgCbk  ,
    } = props ;

    const childrenAsLs = (
      <ul>
      { (
        ndChildren
        .map((nd, i) => (
          <li
          key={i }
          children={(
            <TsAstDisplayC
            value={nd}
            clvMd={clvMd}
            onChange={runOnChgCbk && (({ newValue, }) => (
              runOnChgCbk({
                changedIndices: [i] ,
                newValue: (
                  ndChildren
                  .toSpliced(i, 1, ...[newValue] )
                ) ,
              })
            ) ) }
            />
          )}
          />
        ))
      ) }
      </ul>
    ) ;

    if (clvMd.asDbWhen() ) {
      return (
        <div>
          { (
            withExtraSemanticProperties({
              classNames: ["studk-ui-encoretsnodedisp-inline-children-l"] ,
            } , childrenAsLs)
          ) }
        </div>
      ) ;
    }
    return (
      <div>
        { (
          <p><code>{ ndChildren.length }</code> child(en)</p>
        ) }
        { (
          withExtraSemanticProperties({
            classNames: ["studk-ui-encoretsnodedisp-blocklevel-children-l"] ,
          } , childrenAsLs)
        ) }
      </div>
    ) ;
  }))
) ;

export const TsSrcFileInfoDisplayC = (
  describeHtmlComponent(function TsSrcFileDisplayCImpl(props : { value: TS.SourceFile } )
  {
    const { value: nd, } = props ;
    return (
      <div>
        <p>Source File</p>
        <p>Child Count: { nd.getChildren().length }</p>
      </div>
    ) ;
  })
) ;

import "studk-ui-encore/src/CommonParsedMarkupFileDisplayUi/tsd.scss" ;










