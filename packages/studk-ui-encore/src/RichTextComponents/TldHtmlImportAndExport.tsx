









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

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  StudkReactJsOvcUtil,
} from '#ReactJsBased.ts'; ;

import {
  useAsyncInitedEffect ,
} from '#UiFwCore/reactjs/helpers/UseResourceViaAsync1.tsx';

import {
  useClientSideInitOnlyState ,
  useCsioe ,
  useRevCsioe ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe.tsx" ;

import {
  CFaBku ,
} from "#UiFwCore/reactjs/helpers/CFa.tsx" ;

import {
  useDeferredAndTransitionalValue,
} from '#UiFwCore/reactjs/helpers/UseUncontrolledInputsAsControlledComponents1.tsx';

import {
  useClientSideOnly ,
  useClientSideOnlyCompute ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/ClientSideOnlyComputeInReact.tsx" ;









import {
  Lexical,
  //
  LexicalCommand ,
  LexicalEditor ,
  LexicalHtmlHelpers,
  LexicalJsUndoRedoSupport,
  LexicalNode ,
  LexicalSerializedEditorState ,
} from "#UiFwCore/xt/StFbDraftJsLexicalJsBased1.ts" ;

const GWR = (

  function <const R> (...gwrArgs : (
    ArgsWithOptions<[LexicalEditor, (x: LexicalEditor) => R ], {
      noFlush ?: boolean ,
    }>
  ) ) {

    const [
      e,
      callback,
      { noFlush = false, } = {},
    ] = gwrArgs ;

    return new Promise<R>(resolveWith => (

      e[noFlush ? "update" : "read"](() => {
        const v1 = callback(e) ;
        return resolveWith(v1) ;
      } )
    ) ) ;
  }
);

export {
  /**
   * 
   * @deprecated THIS IS A WIP.
   */
  GWR ,
} ;

import {
  //
  LexicalComposer ,
  LexicalContentEditable ,
} from "#UiFwCore/xt/StFbDraftJsLexicalJsBased1.ts" ;

namespace LjdeHtml
{
  ;

  export const getFromEditorAsync = (
    async (...[editor] : [LexicalEditor] ) => (
              
      await GWR(editor, () => (
        LexicalHtmlHelpers.$generateHtmlFromNodes(editor)
      ) , {
        noFlush: true ,
      } )
    )
  ) ;

  export const assignIfValueNotSameAsynchronously = (
    function (...[editor, transitionalValAsHtml ] : (
      ArgsWithOptions<[receiver: LexicalEditor, newInnerHtml: string ] , {
      }>
    ) )
    {

      return (async (): Promise<0 | 1> => {

        const existingInnerCode = (
          await LjdeHtml.getFromEditorAsync(editor )
        ) ;

        {

          let dbskip: boolean = false ;

          if (existingInnerCode === transitionalValAsHtml ) {
            return 0 ;
          }

          const {
            skipContentBoxClearout ,
            skipUndoRedoListClearout ,
          } = (
            ((): (
              | { skipUndoRedoListClearout: false          , skipContentBoxClearout: false    , }
              | { skipUndoRedoListClearout: false          , skipContentBoxClearout: true     , }
              | { skipUndoRedoListClearout: true           , skipContentBoxClearout: true     , }
            ) => ({
              skipContentBoxClearout: true ,
              skipUndoRedoListClearout: true ,
            }) )()
          ) ;

          if (dbskip) {
            return 0 ;
          }

          void (
            [
              skipContentBoxClearout || editor.dispatchCommand(Lexical.CLEAR_EDITOR_COMMAND   , undefined),
              skipUndoRedoListClearout || editor.dispatchCommand(Lexical.CLEAR_HISTORY_COMMAND  , undefined),
            ].length
            ,
            editor.read(() => {})
            ,
            [
              0 && await StudkReactJsOvcUtil.TIMEOUT(3 * 1000 ) ,
              0 && await StudkReactJsOvcUtil.TIMEOUT(0.25 * 1000 ) ,
            ]
            ,
            await (
              GWR(editor , () => {

                const nd1 = parseHtml(transitionalValAsHtml) ;
  
                const nd2 = LexicalHtmlHelpers.$generateNodesFromDOM(editor, nd1 ) ;
    
                // DBG: (dbskip = true, false )
                if (dbskip) {
                  return ;
                }
      
                CREMV : switch (-2 as number ) {
                  case -1:
                    Lexical.$getRoot().select() ;
                    Lexical.$insertNodes(nd2) ;
                    break CREMV ;
                  case -2: {
                    const rootnd = Lexical.$getRoot() ;
                    /**
                     * wated to {@link rootnd.clear `rootnd.clear()`}, but that caused it to grab focus, so
                     * we instead do it the latter way
                     * 
                     */
                    void (
                      0 ? rootnd.clear() :
                      rootnd.splice(0, rootnd.getChildren().length, [] )
                    ) ;
                    rootnd.splice(0, 0, nd2) ;
                    break CREMV ;
                  }
                }
  
                //
              } , {
                noFlush: true ,
              } )
            )
            ,
            skipUndoRedoListClearout || editor.dispatchCommand(Lexical.CLEAR_HISTORY_COMMAND  , undefined)
          ) ;

          return 1 ;
        }

      })() ;
    }
  ) ;
  
  ;
}

// import {
//   $generateHtmlFromNodes as ghfn,
//   $generateNodesFromDOM as dgebfn ,
// } from '@lexical/html';

export {
  //
  LjdeHtml ,
} ;





















