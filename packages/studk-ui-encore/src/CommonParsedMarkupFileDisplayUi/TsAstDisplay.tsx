




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
  PartializedPartially,
  PickW,
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

import {
  SfmInputC ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/SingularFormElement.tsx" ;




// namespace ReactJsTsc
// {
//   ;

//   const useNodeChildren = function (...[value] : [TS.Node]) {
//     ;
//   } ;

// }

interface TsAstDisplayCompCommonProps
{

  /**
   * display configuration likely to be exact same unchanged for the whole doc tree.
   * 
   */
  clvMd ?: CLV,

  onTextualEditEvt ?: (evt: TsAstDisplayEvents.NdseEditEventDesc) => void ,

}

const getSpclDefaultClvMd = () => (
  // <p><code>{nodeTypeLabelTxt }</code></p>
  CLV.forIsTerminaNdFnc(undefined, { asDbWhen: () => true, } )
) ;

namespace TsAstDisplayEvents
{
  /* extra semi-colon tp work-around `TS(1205)` */ ;

  export interface SelfTotalReplacingChgEventDesc {
    readonly newValue: TS.Node,
  }

  export function describeNdseEdit(...[{
    // lsAbsoluteStart ,
    // lsAbsoluteEnd ,
    lsNd ,
    newTxt ,
    asBeingWithinHighFrequencyEditSeqce = true ,
  }] : [(
    {
      // readonly lsAbsoluteStart: number,
      // readonly lsAbsoluteEnd: number,
      readonly lsNd: TS.Node ,
      readonly newTxt: string ,
      // readonly existingTxt: string ,
      readonly asBeingWithinHighFrequencyEditSeqce ?: boolean,
    }
  )] )
  {

    const {
      pos: lsAbsoluteStart,
      end: lsAbsoluteEnd ,
    } = lsNd ;
    const existingTxt = (
      ((): string => {
        switch (2 as number) {
          case 1 :
            return (
              lsNd.getSourceFile().text.slice(lsAbsoluteStart, lsAbsoluteEnd )
            ) ;
          default :
            return (
              lsNd.getText()
            ) ;
        }
      })()
    ) ;

    return {
      lsNd ,
      lsAbsoluteEnd ,
      lsAbsoluteStart ,
      existingTxt ,
      newTxt ,
      asBeingWithinHighFrequencyEditSeqce ,
    } as const ;
  }

  export interface NdseEditEventDesc extends
  Extract<ReturnType<typeof describeNdseEdit> , any >
  {}

}

export {
  /** @deprecated this is a WIP */
  TsAstDisplayEvents ,
} ;

interface TsNodeUnitDisplayCompProps extends
Omit<TsNodeUnitDisplayCompPrivProps , "onChange">
{
}

interface TsNodeUnitDisplayCompPrivProps extends
TsAstDisplayCompCommonProps
{

      value: TS.Node ,
      clvMd ?: CLV,

      onTextualEditEvt ?: (evt: TsAstDisplayEvents.NdseEditEventDesc) => void ,
      /**
       * {@link onChange}.
       * *we don't fire this Event anymore*;
       * consider {@link onTextualEditEvt } instead.
       * 
       */
      onChange ?: (evt: TsAstDisplayEvents.SelfTotalReplacingChgEventDesc) => void ,

}

const TsNodeUnitDisplayPrivC = (
  describeHtmlComponent((function TsAstDisplayCImpl(props : (
    TsNodeUnitDisplayCompPrivProps
  ) )
  {
    const {
      value: nd,
      clvMd = (
        // <p><code>{nodeTypeLabelTxt }</code></p>
        getSpclDefaultClvMd()
      ) ,
      onTextualEditEvt: runnTextualEditEvtCb ,
    } = props ;

    const {
      autoCommitOnType = false ,
      noSupressionOfZeroChgEvts = false ,
    } = ((): {
      autoCommitOnType ?: boolean ,
      noSupressionOfZeroChgEvts ?: boolean ,
    } => ({}) )() ;

    ;
    
    const {
      renderPuncTokenCodeFigure ,
      renderBracketTokenCodeFigure ,
      renderKeywordTokenCodeFigure ,
      renderNameTokenCodeFigure ,
      renderTokenCodeFigure ,
    } = clvMd.rptcf ;

    const renderSubTerm = (
      function (...[e, { onChange, } = null ?? {} ] : (
        ArgsWithOptions<[TS.Node] , {
          onChange ?: (evt: TsAstDisplayEvents.SelfTotalReplacingChgEventDesc) => void ,
        } >
      ))
      {
        return (
          <TsNodeUnitDisplayPrivC
          value={e }
          clvMd={clvMd}
          // TODO
          onChange={onChange}
          onTextualEditEvt={runnTextualEditEvtCb}
          />
        ) ;
      }
    ) ;

    const renderJsxExpression = (
      function (...[e, { onValueChange, } = null ?? {}] : (
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
          { renderBracketTokenCodeFigure(<code>{ "(" }</code>) }
          { e1 }
          { renderBracketTokenCodeFigure(<code>{ ")" }</code>) }
          </>
        ) ;

      }
    ) ;
    
    const renderPropertylike = (
      function (...[nd, { onValueChange: runOnChgCb, } = null ?? {}] : (
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
                        <TsNodeUnitDisplayPrivC
                        value={initializer }
                        clvMd={clvMd}
                        // TODO
                        onChange={undefined}
                        onTextualEditEvt={runnTextualEditEvtCb}
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

        const e5 = (
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
        return (
          clvMd.postdecDbwPropertylikeB5(e5 , {})
        ) ;
      }
    ) ;

    const ncs = (
      useIsClientSide()
    ) ;

    const asTerminalMdlNode = (
      TS.isToken(nd)
      || TS.isLiteralExpression(nd)
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
          <TsChildNodeListDisplayC
          value={ndChildren }
          clvMd={clvMd}
          // srcNd={nd }
          onTextualEditEvt={runnTextualEditEvtCb}
          />
        ) ;
      } else {
        return <></> ;
      }
    })() ;

    const e = (() => {
      ;
      
      const selfEditBtnsSec = (
        <div>
        { (
          (runnTextualEditEvtCb ) ?
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
          : <></>
        ) }
        </div>
      ) ;

      if (clvMd.asDbWhen() ) {

        {
        ;

        const et = (() => {
        ;
        
        if (asTerminalMdlNode) {
          const ndSrcTxt = nd.getText() ;

          switch (ndSrcTxt ) {
            // ════
            case "(" : return renderBracketTokenCodeFigure(<code>{ ndSrcTxt }</code>   ) ;
            case ")" : return renderBracketTokenCodeFigure(<code>{ ndSrcTxt }</code>   ) ;
            case "[" : return renderBracketTokenCodeFigure(<code>{ ndSrcTxt }</code> ) ;
            case "]" : return renderBracketTokenCodeFigure(<code>{ ndSrcTxt }</code> ) ;
            case "{" : return renderBracketTokenCodeFigure(<code>{ ndSrcTxt }</code>) ;
            case "}" : return renderBracketTokenCodeFigure(<code>{ ndSrcTxt }</code>) ;
            case "<" : break ; return <code><>{ "<   <   <" }</></code> ;
            case ">" : break ; return <code><>{ ">   >   >" }</></code> ;
          }
          if (TS.isToken(nd) && !ndSrcTxt.match(/\s|\w/) ) {
            return (
              renderPuncTokenCodeFigure((
                <code>{ ndSrcTxt }</code>
              ))
            ) ;
          }
          if ((
            getNodeTypeLabelTxt(nd).endsWith("Keyword")
          ) ) {
            return (
              renderKeywordTokenCodeFigure((
                <code>{ ndSrcTxt }</code>
              ))
            ) ;
          }

          if (TS.isIdentifier(nd) || TS.isLiteralExpression(nd) ) {
            return (
              <div
              title={`value: ${ndSrcTxt}`}
              >
              <p>
                { (() => {
                  if (runnTextualEditEvtCb ) {
                    ;
                    const {
                      asBwhfe ,
                      XInput ,
                    } = (
                      ((): { asBwhfe : boolean, XInput : "input" | (typeof SfmInputC) } => {
                        if (autoCommitOnType) {
                          return { XInput: "input", asBwhfe: true, } ;
                        }
                        return { XInput: SfmInputC, asBwhfe: false, } ;
                      } )()
                    ) ;
                    return (
                      <XInput
                      value={nd.getText() }
                      onChange={e0 => {
                        const { value: newTxt, } = e0.target ;

                        const e1 = (
                          TsAstDisplayEvents.describeNdseEdit({
                            lsNd: nd,
                            newTxt: newTxt,
                            asBeingWithinHighFrequencyEditSeqce: asBwhfe ,
                          })
                        ) ;

                        const isZeroChg = (
                          e1.newTxt === e1.existingTxt
                        ) ;

                        0 && console["log"]({ ...(e1), isZeroChg, noSupressionOfZeroChgEvts, }) ;

                        if ((
                          ((): boolean => {
                            if (noSupressionOfZeroChgEvts) { return true ; }

                            return (!isZeroChg || noSupressionOfZeroChgEvts) || (
                              console["log"](`newText exactly the same so chg evt should be supressed.`)
                              , false
                            ) ;
                          })()
                        )) {
                          runnTextualEditEvtCb(e1) ;
                        }

                        ;
                      } }
                      />
                    ) ;
                  }
                  return (
                    renderNameTokenCodeFigure((
                      <code>{ ndSrcTxt }</code>
                    ))
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

        return null ;
        } )() ;

        if (et !== null) {
          const et2 = (
            clvMd.postdecDbwInlinelikeB4(et, {})
          ) ;
          return (
            clvMd.postdecDbwBdB3(et2, {
              selfEditBtnsSec ,
              nd,
            } )
          ) ;
        }

        }

        {
        ;
        
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
                { renderPuncTokenCodeFigure(<code>{ "<" }</code>) } {}
                { renderSubTerm(nd.tagName) }
                { renderPuncTokenCodeFigure(<code>{ ">" }</code>) } {}
                </>
                </div>
              ) ;
            }
          }

          return (
            clvMd.postdecDbwBdB2({
              asTerminalMdlNode ,
              nd ,
              childListDView ,
            })
          ) ;
        })() ;

        const e1 = (
          clvMd.postdecDbwBdB1({
            asTerminalMdlNode ,
            nd ,
            bord ,
            asJsxTag ,
          } , e1C )
        ) ;

        return (
          clvMd.postdecDbwBdB3(e1, {
            nd,
            selfEditBtnsSec ,
          } )
        ) ;

        }
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

export const TsNodeUnitDisplayC: (
  React.FC<TsNodeUnitDisplayCompProps>
) = (
  TsNodeUnitDisplayPrivC
) ;

export {
  TsNodeUnitDisplayPrivC as TsAstDisplayC,
} ;

interface TsChildNodeListDisplayCompProps extends
TsAstDisplayCompCommonProps
{

  value: ReadonlyArray<TS.Node>,
  clvMd ?: CLV,

  /**  @deprecated consider {@link onTextualEditEvt } instead. */
  onChange?: (evt: { newValue: ReadonlyArray<TS.Node> , changedIndices: readonly number[] }) => void ,
  onTextualEditEvt ?: (evt: TsAstDisplayEvents.NdseEditEventDesc) => void ,

  // // TODO
  // /** @deprecated */
  // srcNd: TS.Node ,

}

const TsChildNodeListDisplayC = (
  describeHtmlComponent((function TsNodeListDisplayCImpl(props : (
    TsChildNodeListDisplayCompProps
  ) )
  {
    const {
      clvMd = getSpclDefaultClvMd() ,
      value: ndChildren,
      // srcNd ,
      onChange: runOnChgCbk  ,
      onTextualEditEvt: runOnTextualEditEvtCbk ,
    } = props ;

    const children1 = (
      ndChildren
      .map((nd, i) => {
        return (
          <TsNodeUnitDisplayPrivC
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
          onTextualEditEvt={runOnTextualEditEvtCbk}
          />
        ) ;
      })
    ) ;

    if (clvMd.asDbWhen() ) {

      const childrenAsLs = (
        clvMd.expandCldl(children1)
      ) ;

      const c11 = (
        withExtraSemanticProperties({
          classNames: ["studk-ui-encoretsnodedisp-inline-children-l"] ,
        } , childrenAsLs)
      ) ;
  
      return (
        clvMd.postdecMultiNodeView1(c11 )
      ) ;
    }
    {

      const childrenAsLs = (
        CLV.defaultRenderCldlAsHtmList(children1)
      ) ;
  
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
    }
  }))
) ;

export {
  TsChildNodeListDisplayC as TsAllChildNodesListDisplayC,
} ;

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

class CLV
{

  static forIsTerminaNdFnc(...args : (
    ArgsWithOptions<[isTerminalNd ?: (e: TS.Node) => boolean ], {
      asDbWhen?: () => boolean ,
    } >
  )) {
    const [
      isTerminalNd = (e) => {
        if (TS.isSourceFile(e) ) {
          return false ;
        }
        if (TS.isToken(e) || TS.isLiteralExpression(e) ) {
          return true ;
        }
        return false ;
      } ,
      {
        asDbWhen ,
      } = null ?? {} ,
    ] = args ;

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
      } , {
        skipToTerminalDecendantsFor: (e) => (
          // TS.isToken(e) || TS.isLiteralExpression(e)
          // true
          isTerminalNd(e) === false
        ) ,
        asDbWhen ,
      } )
    )
  }

  static fromGetHeadlineImpl(...args : (
    ArgsWithOptions<[getHeadlineImpl: (e: TS.Node) => React.ReactElement] , (
      // { skipToTerminalDecendantsFor ?: (e: TS.Node) => boolean , }
      PartializedPartially<(
        OmitW<CLV,  | `getHeadl${string}`>
      ) ,(

        | "asDbWhen"

        /* NODE_UNIT */

        | "postdecDbwBdB1"
        | "postdecDbwBdB2"
        | "postdecDbwBdB3"
        | "skipToTerminalDecendantsFor"
        | "postdecDbwInlinelikeB4"
        | "postdecDbwPropertylikeB5"
        | "rptcf"

        /* CHILD_NODE_SEQ */

        | "expandCldl"
        | "postdecMultiNodeView1"

      ) >
    )>
  ) )
  {
    const [
      getHeadlineImpl,
      prps1 = {} ,
    ] = args ;

    return (
      this.fromProps({ getHeadlineImpl, ...(prps1), })
    ) ;
  }

  static fromProps(...[props] : (
    ArgsWithOptions<[] , (
      // { skipToTerminalDecendantsFor ?: (e: TS.Node) => boolean , }
      PartializedPartially<(
        OmitW<CLV, never>
      ) , (

        | "asDbWhen"

        /* NODE_UNIT */

        | "postdecDbwBdB1"
        | "postdecDbwBdB2"
        | "postdecDbwBdB3"
        | "skipToTerminalDecendantsFor"
        | "postdecDbwInlinelikeB4"
        | "postdecDbwPropertylikeB5"
        | "rptcf"

        /* CHILD_NODE_SEQ */

        | "expandCldl"
        | "postdecMultiNodeView1"

      ) >
    )>
  ) )
  {
    const {
      //

      getHeadlineImpl,
      asDbWhen = () => false ,
      skipToTerminalDecendantsFor: skipToTerminalDecendants = (...args) => false,

      /* NODE_UNIT */

      postdecDbwBdB1 = (
        ({
          asTerminalMdlNode ,
          nd ,
          bord ,
          asJsxTag,
        }, e1C) => {
          ;
          
          const e1 = (
            <div
            title={`${getNodeTypeLabelTxt(nd) } `}
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

          return e1 ;
        }
      ) ,
      postdecDbwBdB2 = (
        ({
          asTerminalMdlNode ,
          nd ,

          childListDView ,

        }) => {
          ;
          
          if (asTerminalMdlNode ) {

            return (
              <>
              { getHeadlineImpl(nd) }
              </>
            ) ;
          } else {
            ;

            return (
              <>
              { (asTerminalMdlNode === false) && (
                <div
                style={{
                  paddingInlineStart: `1.0ex`,
                  zoom: `95%` ,
                }}
                >
                  { childListDView }
                </div>
              ) }
              </>
            ) ;
          }
        }
      ),
      postdecDbwBdB3 = (
        (e1, {
          selfEditBtnsSec ,
          nd ,
        } ) => {
          ;

          if (nd.kind === TS.SyntaxKind.SyntaxList) {
            return e1 ;
          }

          return (
            <div
            style={{
              // display: "inline-block" ,
            }}
            >
              <div
              style={{
                display: "flex" ,
                flexDirection: "column-reverse",
              }}
              >
                { e1 }
                { selfEditBtnsSec }
              </div>
            </div>
          ) ;
        }
      ) ,

      /* CHILD_NODE_SEQ */

      postdecDbwInlinelikeB4 = e => e ,
      postdecDbwPropertylikeB5 = e50 => (
        e50
      ) ,
      rptcf = (
        CLV.getDfltBlockLevellingRptcf()
      ) ,
      
      expandCldl = (...[children1]) => (
        CLV.defaultRenderCldlAsHtmList(children1 )
      ) ,
      postdecMultiNodeView1 = (cldl) => (
        <div>
          { cldl }
        </div>
      ) ,

    } = props ;

    return new CLV(
      //

      getHeadlineImpl ,
      skipToTerminalDecendants ,
      asDbWhen ,

      expandCldl ,
      postdecMultiNodeView1 ,

      postdecDbwBdB1 ,
      postdecDbwBdB2 ,
      postdecDbwBdB3 ,
      postdecDbwInlinelikeB4 ,
      postdecDbwPropertylikeB5 ,
      rptcf ,

    ) ;
  }

  private constructor(
    //

    public readonly getHeadlineImpl: (e: TS.Node) => React.ReactElement  ,

    /**
     * @deprecated
     */
    readonly skipToTerminalDecendantsFor : (e: TS.Node) => boolean ,
    public readonly asDbWhen : () => boolean ,

    /* CHILD NODE SEQ */

    public readonly expandCldl: (...args: [readonly React.ReactElement[] ]) => React.ReactElement ,
    public readonly postdecMultiNodeView1: (...args: [cldl: React.ReactElement ]) => React.ReactElement ,

    /* NODE_UNIT */

    readonly postdecDbwBdB1: (...args: [{
      asTerminalMdlNode: boolean ,
      nd: TS.Node ,
      bord: boolean ,
      asJsxTag: boolean ,
    }, React.ReactElement] ) => React.ReactElement ,

    readonly postdecDbwBdB2: (...ctx: [{
      asTerminalMdlNode: boolean ,
      nd: TS.Node ,
      childListDView: React.ReactElement,
    }] ) => React.ReactElement ,

    readonly postdecDbwBdB3: (...args: [
      React.ReactElement ,
      {
        nd: TS.Node ,
        selfEditBtnsSec?: React.ReactElement ,
      },
    ] ) => React.ReactElement ,
    
    readonly postdecDbwInlinelikeB4: (...args: [
      React.ReactElement ,
      {
      },
    ] ) => React.ReactElement ,

    readonly postdecDbwPropertylikeB5: (...args: [
      React.ReactElement ,
      {
      },
    ] ) => React.ReactElement ,

    readonly rptcf: CLV.RPTCF ,

  )
  {}
}

namespace CLV {
  ;

  export interface RPTCF
  {
    readonly renderPuncTokenCodeFigure   : (e0: React.ReactElement) => React.JSX.Element;
    readonly renderBracketTokenCodeFigure: (e0: React.ReactElement) => React.JSX.Element;
    readonly renderKeywordTokenCodeFigure: (e0: React.ReactElement) => React.JSX.Element;
    readonly renderTokenCodeFigure    : (e0: React.ReactElement) => React.ReactElement;
    readonly renderNameTokenCodeFigure: (e0: React.ReactElement) => React.ReactElement;
    // }
  }

  export function getDfltBlockLevellingRptcf()
  : RPTCF
  {

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

    const renderPuncTokenCodeFigure = (e0: React.ReactElement) => (
      renderAsEnlargedPuncTokenCode(e0)
    ) ;
    const renderBracketTokenCodeFigure = (e0: React.ReactElement) => (
      renderAsEnlargedBracketTokenCode(e0)
    ) ;
    const renderKeywordTokenCodeFigure = (e0: React.ReactElement) => (
      <strong>
        { e0 }
      </strong>
    ) ;
    const renderTokenCodeFigure = (e0: React.ReactElement) => (
      e0
    ) ;
    const renderNameTokenCodeFigure = (e0: React.ReactElement) => (
      e0
    ) ;

    return {
      renderPuncTokenCodeFigure ,
      renderBracketTokenCodeFigure ,
      renderKeywordTokenCodeFigure ,
      renderTokenCodeFigure ,
      renderNameTokenCodeFigure ,
    } satisfies RPTCF ;
  }

  export const defaultRenderCldlAsHtmList: CLV["expandCldl"] = (
    (...[children1]) => {
      ;
      return (
        <ul>
        { (
          children1
          .map((nd, i) => (
            <li
            key={i }
            children={(
              nd
            )}
            />
          ))
        ) }
        </ul>
      ) ;
    }
  ) ;

}

import "studk-ui-encore/src/CommonParsedMarkupFileDisplayUi/tsd.scss" ;










