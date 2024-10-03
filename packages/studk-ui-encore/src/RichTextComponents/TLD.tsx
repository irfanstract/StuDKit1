









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

namespace TextContentAsHtmlCode
{
  ;

  export const toPlainText = (
    (v: string): string => {
      const e = document.createElement("body") ;
      return (e.innerHTML = v , e.textContent ?? "" ) ;
    }
  ) ;
  
  ;
}

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
  LexicalAutoLinkPlugin,
  //
  LexicalCommand ,
  LexicalEditor ,
  LexicalHtmlHelpers,
  LexicalJsCodeNodeSupport,
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

import {
  GWR ,
} from "studk-ui-encore/src/RichTextComponents/TldHtmlImportAndExport.tsx" ;

import {
  //
  LexicalComposer ,
  useLexicalComposerContext ,
  LexicalErrorBoundary ,
  LexicalContentEditable ,
  LexicalHistoryPlugin ,
  LexicalOnChangePlugin ,
  LexicalPlainTextPlugin ,
  LexicalRichTextPlugin ,
} from "#UiFwCore/xt/StFbDraftJsLexicalJsBased1.ts" ;

import {
  LjdeHtml ,
} from "studk-ui-encore/src/RichTextComponents/TldHtmlImportAndExport.tsx" ;

const LjdeC = (

  StudkReactJs.describeHtmlComponent((
    function LjdeCImpl({
      valueAsHtml ,
      onChange ,
    } : React.ComponentProps<typeof TceC> )
    {


      return (
        <LexicalComposer
        initialConfig={{
          namespace: `StLjdeEditor` ,
          onError: (e) => { console["error"](e) ; } ,
          nodes: [
            LexicalJsListsSupport.ListNode ,
            LexicalJsListsSupport.ListItemNode ,
            LexicalJsLinkElemsSupport.AutoLinkNode ,
            LexicalJsLinkElemsSupport.LinkNode ,
            LexicalJsCodeNodeSupport.CodeNode ,
            LexicalJsCodeNodeSupport.CodeHighlightNode ,
            LexicalJsTablesSupport.TableNode ,
            LexicalJsTablesSupport.TableRowNode ,
            LexicalJsTablesSupport.TableCellNode ,
            LjdeLImgNode ,
            LjdeLVideoElemt ,
          ]
        }}
        >
          <LjdeDataSyncPluginC
          valueAsHtml={valueAsHtml }
          {...(onChange ? { editable: true, onChange } : { onChange, } ) }
          />
          <LexicalRichTextPlugin
          contentEditable={<LexicalContentEditable /> }
          placeholder={(
            <p>User Content</p>
          ) }
          ErrorBoundary={LexicalErrorBoundary }
          />
          <LexicalHistoryPlugin />

          <LexicalListPlugin />
          <LexicalLinkPlugin />
          {(
            (() => {
              const URL_MATCHER =
                /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
              
              const MATCHERS = [
                (text: string) => {
                  const match = URL_MATCHER.exec(text);
                  if (match === null) {
                    return null;
                  }
                  const fullMatch = match[0];
                  return {
                    index: match.index,
                    length: fullMatch.length,
                    text: fullMatch,
                    url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
                    // attributes: { rel: 'noreferrer', target: '_blank' }, // Optional link attributes
                  };
                },
              ];

              return (
                <LexicalAutoLinkPlugin matchers={MATCHERS} />
              ) ;
            })()
          )}
          <LexicalTablePlugin />
        </LexicalComposer>
      ) ;
    }
  ))
) ;

import type {
  TceC, 
  TceCompIRefValue,
  TceMainChgEventDesc,
} from "studk-ui-encore/src/RichTextComponents/TCE1.tsx" ;

import {
  useTceDeferredAndTransitionalValue ,
} from "studk-ui-encore/src/RichTextComponents/TCE1.tsx" ;

import {
  LjdeLImgNode,
  LjdeLVideoElemt ,
} from 'studk-ui-encore/src/RichTextComponents/TldDisplayedNodeClass1.tsx';

const LjdeDataSyncPluginC = (

  StudkReactJs.describeComponent((
    function LjdeDataSyncPluginCImpl({
      valueAsHtml: specifiedValAsHtml ,
      onChange: onChgArg ,
    } : (
      React.ComponentProps<typeof TceC> extends infer T ?
      RequiredPartially<T & object, `value${string}` & keyof T >
      : never
    ) )
    {

      const shallEditable = (
        !!onChgArg
      ) ;

      const [editor] = useLexicalComposerContext() ;

      // const {
      //   historyStack ,
      //   HISTOTWK ,
      // } = useLjdeHistoryStack() ;

      const {
        specifiedValDeferredAsHtml ,
        transitionalValAsHtml ,
        setTransitionalValAsHtml ,
        dwc ,
      } = (
        useTceDeferredAndTransitionalValue(specifiedValAsHtml , {
          fallbackContentAsHtml: specifiedValAsHtml ,
        } )
      ) ;

      const PROPAGATECHANGE = (

        StudkReactJs.useEventDispatchCallback((

          React.useCallback((

            (onChgArg && (
              (x : (
                (OmitW<TceMainChgEventDesc , "existingValueInHtml">)
              ) ) => {

                const cmpv = (
                  // specifiedValAsHtml
                  // transitionalValAsHtml
                  transitionalValAsHtml
                ) ;

                void (
                  (x.newValueInHtml === cmpv )
                  ?
                  (void 0)
                  :
                  onChgArg({
                    ...x ,
                    existingValueInHtml: (
                      cmpv
                    ) ,
                  })
                ) ;
              }
            ) ) ?? Object
          ) , [
            transitionalValAsHtml ,
          ] )
        ))
      ) ;

      const PROCESSEDITORUPDATEEVENT1 = (

        React.useCallback((

          async function ()
          {
  
            const newInnerCode = (
              await LjdeHtml.getFromEditorAsync(editor )
            ) ;
  
            const newValAsPlainTxt = (
              TextContentAsHtmlCode.toPlainText(newInnerCode)
            ) ;
  
            console["debug"]({
              newValAsPlainTxt,
              newInnerCode ,
            }) ;
  
            // TODO
            void PROPAGATECHANGE({
              // existingValueInHtml: (
              //   specifiedValAsHtml
              // ) ,
              newValueInHtml        : newInnerCode         ,
              newValueAsPlainTxt    : newValAsPlainTxt     ,
            }) ;
  
            setTransitionalValAsHtml(newInnerCode) ;
  
          }
        ) , [
          editor ,
          PROPAGATECHANGE ,
          setTransitionalValAsHtml ,

          // LjdeHtml ,
          // TextContentAsHtmlCode ,
        ])
      ) ;

      const ppgcs = (
        React.useMemo(() => (
          {
            PROPAGATECHANGE ,
            PROCESSEDITORUPDATEEVENT1 ,
          } as const
        ) , [
          // dwc ,
          // asynchronouslyApplyTrvh1 ,
          PROPAGATECHANGE ,
          PROCESSEDITORUPDATEEVENT1 ,
        ])
      ) ;

      React.useLayoutEffect(() => {
        void (editor.isEditable() === shallEditable ) || editor.setEditable(shallEditable) ;
        return ;
      } , [
        editor ,
        shallEditable ,
      ] ) ;

      /**
       * we deserve to synchronously make this call to {@link LjdeHtml.assignIfValueNotSameAsynchronously},
       * but
       * doing so at this point
       * is inappropriate since,
       * in case {@link dwc} changes, the 'cleanup fn' associated with such {@link React.useEffect `useEffect`} (below) (to remove the on-chg listener (`registerTextContentListener`) ) needs to have already run prior to making the AIVAS call
       * .
       * 
       */
      const asynchronouslyApplyTrvh1 = (

        React.useCallback((

          util.L.once(async () => {

            if (await LjdeHtml.assignIfValueNotSameAsynchronously(editor , transitionalValAsHtml) ) {
              // TODO clear the hist stack
              0 && editor.dispatchCommand(Lexical.CLEAR_HISTORY_COMMAND , undefined ) ;
            }
    
          })
        ) , [
          editor ,
          transitionalValAsHtml ,
        ])
      ) ;

      if (0) {
      ;
      void (
        asynchronouslyApplyTrvh1()
      ) ;
      }

      const dwcDependent = (
        React.useMemo(() => (
          {
            dwc ,
            asynchronouslyApplyTrvh1 ,
          } as const
        ) , [
          dwc ,
          asynchronouslyApplyTrvh1 ,
        ])
      ) ;

      /**
       * the {@link editor.registerTextContentListener} call.
       * 
       */
      useAsyncInitedEffect(async (c) => {

        const {
          dwc ,
          asynchronouslyApplyTrvh1 ,
        } = dwcDependent ;

        const {
          PROPAGATECHANGE ,
          PROCESSEDITORUPDATEEVENT1 ,
        } = ppgcs ;

        const preEditInnerCodeAsync = (
          LjdeHtml.getFromEditorAsync(editor )
        ) ;

        /**
         * forces the DOM or the Editor to
         * have been thoroughly refreshed-or-reconciled prior to the following {@link editor.registerTextContentListener}
         * 
         */
        {
          await asynchronouslyApplyTrvh1() ;
          editor.read(() => {}) ;
        }

        /**
         * *effectively*,
         * from the viewpoint of Lexical
         * there's no distinction between programmatic updates and user-done updates, and
         * neither of {@link editor.registerUpdateListener } nor {@link editor.registerUpdateListener} provide way to tell the thing.
         * instead,
         * we need to
         * make this {@link React.useEffect `useEffect`} remount whenever top-down update runs,
         * by including {@link dwcDependent } into `dependencies` - and this `void dwc ;` is to prevent linters from raising diagnostics
         * .
         * 
         */
        void dwc ;

        if (c.aborted) {
          return ;
        }

        const unreg = (
          ((cb: () => Promise<void> ) => (

            editor.registerUpdateListener(cb)
            // editor.registerMutationListener(LexicalNode , cb, {
            //   skipInitialization: true,
            // } )

          ) )( async (  ) => {
            ;

            const preEditInnerCode = (
              await preEditInnerCodeAsync
            ) ;

            console["debug"]({
              dwc ,
              preEditInnerCode ,
              preEditPlainTxt: TextContentAsHtmlCode.toPlainText(preEditInnerCode) ,
            }) ;

            // const newInnerCode = (
            //   await LjdeHtml.getFromEditorAsync(editor )
            // ) ;

            // const newValAsPlainTxt = (
            //   TextContentAsHtmlCode.toPlainText(newInnerCode)
            // ) ;

            // console["debug"]({
            //   newValAsPlainTxt,
            //   newInnerCode ,
            // }) ;

            // // TODO
            // void PROPAGATECHANGE({
            //   // existingValueInHtml: (
            //   //   specifiedValAsHtml
            //   // ) ,
            //   newValueInHtml        : newInnerCode         ,
            //   newValueAsPlainTxt    : newValAsPlainTxt     ,
            // }) ;

            // setTransitionalValAsHtml(newInnerCode) ;

            await PROCESSEDITORUPDATEEVENT1() ;

          })
        ) ;

        if (c.aborted satisfies boolean ) {
          unreg() ;
        }

        return () => {
          unreg() ;
          // asynchronouslyApplyLatestTrvh() ;
        } ;
      } , [
        editor ,
        dwcDependent ,
        ppgcs ,
      ]) ;

      /**
       * disabled for now.
       * 
       * if we do indeed need to invoke {@link asynchronouslyApplyTrvh1}, then
       * needs to defer until React has fully run the 'cleanup fnc' above (which'd be the point It has identified `dependencies` of the above hook-call)
       * 
       */
      React.useLayoutEffect(() => {

        if (0) {
          asynchronouslyApplyTrvh1() ;
        }

        return ;
      } , [
        asynchronouslyApplyTrvh1 ,
      ] ) ;

      return <></> ;
    }
  ))
) ;





export {
  LjdeC ,
} ;














