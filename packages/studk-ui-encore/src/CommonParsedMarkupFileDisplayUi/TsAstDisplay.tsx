




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

import { TS, } from "studk-ui-encore/src/CommonParsedMarkupFileDisplayUi/TsLib.ts" ;

const getNodeTypeLabelTxt = (nd: TS.Node) => (
    `${TS.SyntaxKind[nd.kind] }`
) ;

import type * as TsServer from "typescript/lib/tsserver.js" ;






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

export const TsAstDisplayC = (
  describeHtmlComponent((function TsAstDisplayCImpl(props : (
    {
      value: TS.Node ,
      clvMd ?: CLV,
      onChange ?: (evt: { newValue: TS.Node, }) => void ,
    }
  ) )
  {
    const {
      value: nd,
      clvMd = (
        // <p><code>{nodeTypeLabelTxt }</code></p>
        getSpclDefaultClvMd()
      ) ,
      onChange: runOnChgHandler ,
    } = props ;

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

    const childListDView = (() => {
      if (!ncs) {
        return <></> ;
      }

      if (!asTerminalMdlNode ) {
        ;

        const ndChildren = (
          nd.getChildren()
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
            case "(" : return <code><>╭━━━━━━╮</></code> ;
            case ")" : return <code><>╰━━━━━━╯</></code> ;
            case "[" : return <code><>┏════════┓</></code> ;
            case "]" : return <code><>┗════════┛</></code> ;
            case "{" : return <code><>╭════^════╮</></code> ;
            case "}" : return <code><>╰════v════╯</></code> ;
            case "<" : return <code><>{ "<   <   <" }</></code> ;
            case ">" : return <code><>{ ">   >   >" }</></code> ;
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
        }
        const bord = (() => {
          if ((
            TS.isJsxOpeningLikeElement(nd)
          )) { return true ; }
          return false ;
        })() ;
        const e1 = (
          <div
          style={{
            zoom: `99%` ,
            border: bord ? `0.05em solid currentcolor` : undefined ,
          }}
          >
            { asTerminalMdlNode && clvMd.getHeadlineImpl(nd) }
            { (asTerminalMdlNode === false) && (
              <div
              style={{ paddingInlineStart: `1.0ex`, }}
              >
                { childListDView }
              </div>
            ) }
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
              flexDirection: "column-reverse",
            }}
            >
              { e1 }
              <div>
              { (
                (runOnChgHandler && (TS.isExpression(nd) || TS.isStatement(nd) ) )
                &&
                <Button
                title='Replace This Expression/Statement With...'
                children={<>☯</>}
                onClick={false}
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










