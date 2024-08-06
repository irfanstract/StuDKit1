




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

import TS from "typescript" ;






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

export const TsAstDisplayC = (
  describeHtmlComponent((function TsAstDisplayCImpl(props : { value: TS.Node } )
  {
    const { value: nd, } = props ;

    const ndCtor = (
      (Object.getPrototypeOf(nd) as (Object | null ))?.constructor
    ) ;
    const nodeTypeLabelTxt = (
      (ndCtor ? `${TS.SyntaxKind[nd.kind] }` : null)
      ??
      `Node Type ${nd.kind }`
    ) ;

    const ncs = (
      useIsClientSide()
    ) ;

    const childListDView = (() => {
      if (ncs) {
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
          <p>Children (<code>{ ndChildren.length }</code>):</p>
          <TsAllChildNodesListDisplayC
          value={ndChildren }
          />
          </div>
        ) ;
      } else {
        return <></> ;
      }
    })() ;

    return (
      <div
      style={{
        zoom: `95%` ,
      }}
      >
        <p><code>{nodeTypeLabelTxt }</code></p>
        { childListDView }
      </div>
    ) ;
  }))
) ;

export const TsAllChildNodesListDisplayC = (
  describeHtmlComponent((function TsNodeListDisplayCImpl(props : { value: ReadonlyArray<TS.Node> } )
  {
    const { value: ndChildren, } = props ;
    return (
      <div>
        <p>Children:</p>
        <ul>
        { (
          ndChildren
          .map((nd, i) => (
            <React.Fragment
            key={i }
            children={(
              <TsAstDisplayC
              value={nd}
              />
            )}
            />
          ))
        ) }
        </ul>
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










