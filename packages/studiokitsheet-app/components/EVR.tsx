









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

import {
  parseTsSourceFileContent,
} from "studk-ts-codeanalysis/src/core/TsSourceCodeParsingFrontend.ts" ;

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
        pruneAllRevsList ,
      } = (
        useRevCsioe<ReturnType<typeof getSampleDocument> >(() => (
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
            presentlyRevT: presentlyRevT ,
            revParentMap ,
          } = v0 ;
          const revT = presentlyRevT ;
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
          const runRedoBtnAction = (
            (() => {
              if (v0.withRedo().presentlyRevT === v0.presentlyRevT ) {
                return false ;
              }
              return () => {
                revertToRevT(v0.withRedo().presentlyRevT ) ;
              } ;
            })()
          ) ;
          const value = (
            revs.get(revT)
          ) ;
          if (value) {
          ;
          const memub = (
            revs.valueSeq()
            /* total length */
            .map(f => f.text ).join("").length
          ) ;
          const revActsPane = (
            <div>
              <ul
              style={{ display: "flex", flexDirection: "row" }}
              >
                <li
                style={{ order: 2, }}
                >
                Rev T: {}
                [<i>{ new Date(revT).toLocaleString() }</i>] {}
                <i>{ new Date(v0.presentlyRevT ).toLocaleString() }</i> {}
                </li>
                <li
                style={{ order: 1, }}
                >
                Parent Rev T: {}
                <i>{ new Date(v0.withUndo().presentlyRevT ).toLocaleString() }</i>
                </li>
                <li
                style={{ order: 3, }}
                >
                Redo Rev T: {}
                <i>{ new Date(v0.withRedo().presentlyRevT ).toLocaleString() }</i>
                </li>
              </ul>
              <details>
                <pre style={{}} >
                  { JSON.stringify({ t: v0.presentlyRevT, u: v0.revParentMap, r: v0.revRedoMap, }, null, 2 ) }
                </pre>
              </details>
              <nav>
                <Button
                children={`Undo` }
                onClick={runUndoBtnAction}
                />
                <Button
                children={`Redo` }
                onClick={runRedoBtnAction}
                />
              </nav>
              <aside>
              <p>
                Estimated Mem Usage (maybe): {}
                <i>{ ((v: number, s: number) => `${(v / (1024 ** s ) ).toFixed(2) } ${(["B", "KiB", "MiB", "GiB"] as const)[s] ?? "(...)" }` )(memub, 2 ) }</i> {}
                ; {}
                Current Rev          : <i>{ new Date(v0.presentlyRevT).toLocaleString() }</i> ; {}
                Revs          : <i>{ revs.size }</i> ; {}
                Reachable Revs: { (() => { const rs = v0.getAllReachableRevTs() ; if (0 && (rs.length < 6)) { return <i>{ rs.map(t => new Date(t).toLocaleString() ).join(" and ") }</i> } ; return <i>{ rs.length } items</i> ; })() } ; {}
                <Button
                children={`Prune Revs` }
                onClick={pruneAllRevsList || false }
                /> {}
              </p>
              </aside>
            </div>
          ) ;
          return (
            <EvrCPos
            value={value}
            onChange={e => {
              const { newValue, } = e ;
              if (TS.isSourceFile(newValue) ) {
                ;
                pushRevContent(newValue, { asBeingWithinHighFrequencyEditSeqce: true, } )
              } else {
                ;
                console["warn"](`'newValue' is  arbitrary Node but we can only accept SourceFile(s). ignoring the submitted chg evt, not committing it. `, { newValue, } ) ;
              }
            } }
            revActionsPane={(
              revActsPane
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
    const astRenderRetryK : number | string = (
      // React.useMemo(() => Math.random() , [props.value] )
      1
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
        onChange ?: (evt: { newValue: TS.SourceFile }) => void ,
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
          function (...[chgEvt] : [TsAstDisplayEvents.NdseEditEventDesc ]) {
            ;

            const existingSrcText = (
              value.text
            ) ;

            // TODO
            console["log"]({ chgEvt, }) ;

            const newSrcTxt = (
              existingSrcText.slice(0, chgEvt.lsAbsoluteStart )
              + chgEvt.newTxt
              + existingSrcText.slice(chgEvt.lsAbsoluteEnd )
            ) ;

            const s1 = (
              parseTsSourceFileContent((
                newSrcTxt
              ))
            ) ;

            onChgArg({ newValue: s1, }) ;
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
                  onTextualEditEvt={handleChgEvt}
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













