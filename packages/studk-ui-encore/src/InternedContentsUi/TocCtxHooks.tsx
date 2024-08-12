









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
  OmitCase,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'

import {
  IObservableValue,
  observable, 
  runInAction,
  shiftStateBoxValue ,
} from "studk-fwcore/src/FunctionalReactiveChaining/StudkMobx.ts" ;






;

import * as React from "react" ;


import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  ElementsEcAttachedOps ,
  ElementsEcOps ,
  useElemtsInterningCentralState, 
  useElemtsInterningCentralState1,
} from 'studk-ui-fwcore/src/reactjs/helpers/ElementsInterning.tsx'; ;

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

// import {
//   SingleChildDiv,
// } from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;

import * as MBRL from "mobx-react-lite" ;

import {
  useClientSideInitOnlyState ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe.tsx" ;






;

interface TocCtxS1Ops {
  attachItem: () => TocAttachedIndividualItemOps ,
}

interface TocCtxS3Ops {
  getAsJsxList: () => React.ReactElement,
}

interface TocAttachedIndividualItemOps {
  update: (x: React.ReactElement) => void ;
  close(): void ;
}

;


;

const {
  allocateMain: allocateSpcl1,
} = (() => {
      ;

      const allocateMain = (
        function ({ debug = false, } : { debug ?: boolean, } )
        {
          ;

          ;
          const stateBox = (
                observable.box<util.Immutable.Map<string | number, React.ReactElement> >((
                  util.Immutable.Map()
                ))
          ) ;

          return (
            ((): (TocCtxS1Ops & TocCtxS3Ops ) => ({

              attachItem: (): TocAttachedIndividualItemOps => {

                const id = Math.random() ;

                return (
                  {
                    update: (itemv) => {
                      runInAction(() => {
                        ;

                        const {
                          state0 ,
                          state1 ,
                        } = (
                          shiftStateBoxValue(stateBox, mp0 => {
                            const mp1 = (
                              (mp0.get(id,) === itemv) ?
                              mp0
                              : mp0.set(id, itemv)
                            ) ;
                            return mp1 ;
                          })
                        ) ;
                      }) ;
                    } ,

                    close: () => {
                      runInAction(() => {
                        ;

                        const {
                          state0 ,
                          state1 ,
                        } = (
                          shiftStateBoxValue(stateBox, mp0 => {
                            const mp1 = (
                              mp0.remove(id,)
                            ) ;
                            return mp1 ;
                          })
                        ) ;
                      }) ;
                    } ,

                  } satisfies TocAttachedIndividualItemOps
                ) ;
              } ,

              // TODO
              getAsJsxList: () => {
                return (
                  <SpclAsJsxListImpl
                  debug={debug}
                  mpOb={stateBox}
                  />
                ) ;
              } ,

            }) )()
          ) ;
        }
      ) ;

      /**
       * used above
       * 
       */
      const SpclAsJsxListImpl = (
        MBRL.observer(({ mpOb: mOb, debug, } : {
          debug?: Boolean,
          mpOb: IObservableValue<util.Immutable.Map<string | number, React.ReactElement>>,
        }) => {
          ;
          const mp = mOb.get() ;
          return (
            <>
            { debug && (
              <p>
                (Count: {mp.size } )
              </p>
            ) }
            <ul>
              { (
                mp
                .entrySeq()
                .map(([k, v]) => (
                  <li
                  key={k}
                  children={(
                    <>
                    { debug ? (<>[id: <code>{ k }</code> ]</> ) : null } {}
                    { v }
                    </>
                  ) }
                  />
                ))
              ) }
            </ul>
            <p>
              - - - - - - - 
            </p>
            </>
          ) ;
        })
      ) ;


      return {
        allocateMain: allocateMain ,
      } ;
})() ;

;



export const allocateTocCtx = (
  () => (
    (function () {
  
      interface TocCtxPosOps extends
      TocCtxS1Ops, TocCtxS3Ops
      {}

      const tocOpCtx = (
        React.createContext<(TocCtxS1Ops & TocCtxS3Ops) | null>(null)
      ) ;

      const WithTocAllocC = (
        describeComponent((
          function WithTocAllocCImpl({ debug = false, children, } : { debug ?: boolean, } & React.PropsWithChildren )
          {
            ;

            /**
             * we cannot safely use the commonplace {@link React.useState `useState<RegItems>(Immutable.Map() )`} style as
             * here that (if not done properly in the burdensome way) is prone to risking bringing re-renders into nonterminating loop.
             * instead,
             * we need to switch to *ref*-like storage
             * 
             */
            const [mainExportedOpItc,  ] = (

              useClientSideInitOnlyState(() => (
                allocateSpcl1({ debug, })
              ) )
            ) ;

            let e1 : React.ReactElement = <>{ children }</> ;

            e1 = (
              <tocOpCtx.Provider
              value={mainExportedOpItc}
              children={e1}
              />
            ) ;

            return e1 ;
          }
        ))
      ) ;

      const useTocIndividualAttachCl = function () {
        ;

        const [cRef, setCRef] = React.useState<OmitW<TocAttachedIndividualItemOps, "close"> | null>(null) ;

        const c = React.useContext(tocOpCtx) ;

        React["useLayoutEffect"](() => {
          if (c) {
            const a = c.attachItem() ;
            setCRef(() => a ) ;
            return () => {
              a.close() ;
            } ;
          }
        } , [c] ) ;

        return cRef ;
      } ;
  
      const SpclIndividualInternC = (
        describeComponent((
          function MustAttachTocImplCImpl({ children: renderee, } : React.PropsWithChildren) {
            const ac = useTocIndividualAttachCl() ;
            if (ac) {
              /**
               * run `ac.update(<>{ renderee }</>) ;`,
               * asynchronously since React disallows calling `setState` of different Component(s) synchronously during Render ,
               * "cannot update a component while rendering another component"
               * 
               */
              ac.update(<>{ renderee }</>) ;
            }
            return (
              <></>
            ) ;
          }
        ))
      );
  
      /**
       * `TocRenderingC`
       * 
       */
      const SpclPresentativeC = (
        describeHtmlComponent((
          function TocRenderingCImpl({ } : {}) {

            const acm = (
              React.useContext(tocOpCtx)
            ) ;

            const ac = (
              // ((): TocCtxS3Ops | null => {
              //   return null ;
              // } )()
              acm
            ) ;

            if (ac) {
              return (
                ac.getAsJsxList()
              ) ;
            }

            return (
              <></>
            ) ;
          }
        ))
      );
  
      return {
        AsSpclAllocatingAncestorC: WithTocAllocC,
        MustAttachDelegateC: SpclIndividualInternC ,
        SpclPresentativeC ,
      } as const ;
    } )()
  )
) ;

;












