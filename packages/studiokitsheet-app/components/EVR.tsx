









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



import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;

;



;







;

import * as React from "react" ;

import {
  useClientSideOnly ,
  useClientSideOnlyCompute ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/ClientSideOnlyComputeInReact.tsx" ;

import {
  useClientSideInitOnlyState ,
  useCsioe ,
  useRevCsioe ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe" ;

import {
  CFaBku ,
} from "studk-ui-fwcore/src/reactjs/helpers/CFa" ;




import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
  describeHtmlComponent,
  describeHeadlinedWidget,
  Button,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  AccrdListC ,
} from "studk-ui-encore/src/PaginatedUi/Accrd1" ;



import {
  TsAstDisplayC,
  TsAstDisplayEvents,
  TsSrcFileInfoDisplayC ,
} from "studk-ui-encore/src/CommonParsedMarkupFileDisplayUi/TsAstDisplay" ;

import {
  getSampleDocument ,
} from "@/components/spcl/SampleTdDocuments" ;

export const EvrC = (
  describeHtmlComponent((
    //
    function EvrCImpl()
    {

      const {
        vAndE ,
        pushRevContent ,
        revertToRevT ,
      } = (
        useRevCsioe<TS.SourceFile >(() => (
          getSampleDocument()
        ))
      ) ;

      if (vAndE) {
        ;
        const {
          value: v0 ,
          err ,
        } = vAndE ;
  
        if (v0) {
          ;
          const {
            revs,
            lastRevT ,
            revParentMap ,
          } = v0 ;
          const revT = lastRevT ;
          const runUndoBtnAction = (
            (() => {
              const nextRevT = revParentMap.get(revT) ?? null ;
              if (nextRevT !== null) {
                return () => {
                  revertToRevT(nextRevT) ;
                } ;
              } else {
                return false ;
              }
            })()
          ) ;
          const value = (
            revs.get(revT)
          ) ;
          if (value) {
          ;
          return (
            <EvrCPos
            value={value}
            onChange={e => {
              const { newValue, } = e ;
              if (TS.isSourceFile(newValue) ) {
                ;
                pushRevContent(newValue)
              } else {
                ;
                console["warn"](`'newValue' is  arbitrary Node but we can only accept SourceFile(s). ignoring the submitted chg evt, not committing it. `, { newValue, } ) ;
              }
            } }
            revActionsPane={(
              <div>
                <p>
                  Rev T: <i>{ new Date(revT).toLocaleString() }</i>
                </p>
                <Button
                children={`Undo` }
                onClick={runUndoBtnAction}
                />
              </div>
            )}
            />
          ) ;
          }
        } else {
          ;
  
          return (
            <div>
              <p>Failed To Render Document: <code>{ err.message }</code></p>
              <pre>{ err.stack ?? "" }</pre>
            </div>
          ) ;
        }
      } else {
        ;
        return (
          <div>
            <p>Failed To Render Document: The Document Is Not Loaded Yet</p>
          </div>
        ) ;
      }

      return (
        <div>
          <p>Failed To Render Document:</p>
          <p>???</p>
        </div>
      ) ;
    }
  ))
) ;

const TsAstDisplayCAlt = (
  function TsAstDisplayCAltCImpl(props: React.ComponentProps<typeof TsAstDisplayC>)
  {
    const astRenderRetryK = (
      React.useMemo(() => Math.random() , [props.value] )
    ) ;
    return (
      <div>
        <p>AST:</p>
        <CFaBku
        key={astRenderRetryK}
        >
        <TsAstDisplayC
        { ...props }
        />
        </CFaBku>
      </div>
    ) ;
  }
) ;

const EvrCPos = (
  describeHtmlComponent((
    function EvrCPosImpl(props : (
      & {
        value: import('typescript').SourceFile ,
        onChange ?: (evt: { newValue: TS.Node }) => void ,
        revActionsPane ?: React.ReactElement ,
      }
    ) )
    {
      const {
        value,
        onChange: onChgArg ,
        revActionsPane: revActionsPaneArg,
      } = props ;

      const revActionsFrame = (
        revActionsPaneArg
        &&
        ((
          describeHeadlinedWidget({
            //
            heading: <>Rev Actions</> ,
            children: (
              <div>
                { revActionsPaneArg }
              </div>
            ) ,
          })
        ))
      ) ;

      const definingScriptViewFrame = (() => {
        ;

        const handleChgEvt = (
          onChgArg
          &&
          function (...[chgEvt] : [TsAstDisplayEvents.SelfTotalReplacingChgEventDesc ]) {
            ;

            // TODO
            console["log"]({ chgEvt, }) ;

            onChgArg({ newValue: chgEvt.newValue, }) ;
          }
        ) ;

        return (
          ((
            describeHeadlinedWidget({
              heading: <>The Defining Script</> ,
              children: (
                <div>
                  <p>The Defining Script</p>
                  <p>TypeScript</p>
                  <TsAstDisplayCAlt
                  value={value}
                  onChange={handleChgEvt}
                  />
                </div>
              ) ,
            })
          ))
        ) ;
      })() ;

      const structureExploringFrame = (
        ((
          describeHeadlinedWidget({
            heading: <>The Structure</> ,
            children: (
              <div>
                <p>Structure:</p>
                <ul>
                  <li>Object 1</li>
                  <li>Object 2</li>
                  <li>Object 3</li>
                </ul>
              </div>
            ) ,
          })
        ))
      ) ;

      const semiFinalRenderingAppFrame = (
        ((
          describeHeadlinedWidget({
            //
            heading: <>The Rendered View</> ,
            children: (
              <div>
                <p>The Preview Will Go Here</p>
              </div>
            ) ,
          })
        ))
      ) ;

      return (
        <div>
          <AccrdListC>
            { revActionsFrame && <li key="und">{ revActionsFrame }</li> }
            <li key="dsv">{ definingScriptViewFrame     }</li>
            <li key="scu">{ structureExploringFrame     }</li>
            <li key="rfm">{ semiFinalRenderingAppFrame  }</li>
          </AccrdListC>
        </div>
      ) ;
    }
  ))
) ;













