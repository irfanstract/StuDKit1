









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






;

import * as React from "react" ;


import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;






;

export interface ElementsEcOps {
  attach: () => ElementsEcAttachedOps ,
  getAsRenderable: () => React.ReactElement,
}

export interface ElementsEcAttachedOps extends
EcAttachedOps<readonly [x: React.ReactElement]>
{
  update: (x: React.ReactElement) => void ;
  close(): void ;
}

/**
 * avoid using this kook.
 * 
 * @deprecated avoid using this kook.
 * 
 */
export const useElemtsInterningCentralState = (
  function () {
    ;

    const [mp, i0] = (
      useElemtsInterningCentralState1()
    ) ;

    ;
    const mainExportedItc = (
      React.useMemo((): ElementsEcOps => ({
        attach: () => (
          i0.attach()
        ) ,
        getAsRenderable: () => {
          // TODO
          return (
            <>
            <p>
              (Count: {mp.size } )
            </p>
            <ul>
              { (
                mp
                .entrySeq()
                .map(([k, v]) => (
                  <li
                  key={k}
                  children={<>[id: <code>{ k }</code> ] { v }</> }
                  />
                ))
              ) }
            </ul>
            <p>
              - - - - - - - 
            </p>
            </>
          ) ;
        } ,
      }) , [
        i0 ,
        mp ,
      ] )
    ) ;

    return (
      mainExportedItc
    ) ;
  }
) ;

export const useElemtsInterningCentralState1 = (
  function () {
    ;

    const [mp, i0] = (
      useValueInterningCentralState1<React.ReactElement>()
    ) ;

    ;
    const mainExportedItc = (
      React.useMemo((): OmitCase<ElementsEcOps, "getAsRenderable"> => ({
        attach: () => (
          i0.attach()
        ) ,
      }) , [
        i0 ,
      ] )
    ) ;

    return (
      [mp, mainExportedItc] as const
    ) ;
  }
) ;



interface EcAttachedOps<EcArgs extends readonly unknown[]>
{
  update: (...x: EcArgs) => void ;
  close(): void ;
}

/**
 * avoid using this kook.
 * 
 * @deprecated avoid using this kook.
 * 
 */
export const useValueInterningCentralState = (
  function <Value extends {} | null>()
  {

    const [allocTable, s] = (
      useValueInterningCentralState1<Value>()
    ) ;

    const mainExportedItc = (
      React.useMemo(() => ({
        attach: () => (
          s.attach()
        ) ,
        getValues: () => {
          // TODO
          return (
            allocTable
          ) ;
        } ,
      }) , [
        s ,
        allocTable ,
      ] )
    ) ;

    return mainExportedItc ;
  }
) ;

export const useValueInterningCentralState1 = (
  function <Value extends {} | null>()
  {

    const [allocTable, setAllcT] = (
      React.useState<util.Immutable.Map<string | number , Value | null > >(util.Immutable.Map() )
    ) ;

    const mainExportedItc = (
      React.useMemo(() => ({
        attach: () => {
          const id = Math.random() ;

          ;
          /**
           * two things:
           * 
           * -
           * asynchronously since React disallows calling `setState` of different Component(s) synchronously during Render ,
           * "cannot update a component while rendering another component"
           * 
           * -
           * what we're working with
           * is Immutable data-structure(s)
           * 
           */
          ;

          const releaseImpl = (
            /**
             * run `setState(... ...) ;`,
             * asynchronously since React disallows calling `setState` of different Component(s) synchronously during Render ,
             * "cannot update a component while rendering another component"
             * 
             */
            async function (...[] : [ ] ) {
              await (new Promise<void>(R => setImmediate(R) ) ) ;
              setAllcT(m0 => (
                m0.remove(id)
              ) ) ;
            }
          ) ;

          const reassign = (
            /**
             * run `setState(... ...) ;`,
             * asynchronously since React disallows calling `setState` of different Component(s) synchronously during Render ,
             * "cannot update a component while rendering another component"
             * 
             */
            async function (...[x] : [Value | null] ) {
              await (new Promise<void>(R => setImmediate(R) ) ) ;
              setAllcT(m0 => (
                (m0.get(id) === x ) ?
                m0 :
                m0.set(id, x)
              ) ) ;
            }
          ) ;

          const reassignIfKeyPresent = (
            /**
             * run `setState(... ...) ;`,
             * asynchronously since React disallows calling `setState` of different Component(s) synchronously during Render ,
             * "cannot update a component while rendering another component"
             * 
             */
            async function (...[x] : [Value | null] ) {
              await (new Promise<void>(R => setImmediate(R) ) ) ;
              setAllcT(m0 => (
                m0.has(id) && !(m0.get(id) === x ) ?
                m0.set(id, x)
                : m0
              ) ) ;
            } 
          ) ;

          reassign(null) ;

          return {
            update: async (x: Value) => {
              await (new Promise<void>(R => setTimeout(R, 3 * 1000 ) ) ) ;
              reassignIfKeyPresent(x) ;
            } ,
            close: async () => {
              releaseImpl() ;
            } ,
          } ;
        } ,
      }) , [
        Math ,
        setAllcT ,
        // allocTable ,
      ] )
    ) ;

    return [allocTable, mainExportedItc ] as const ;
  }
) ;

;

;

;










