









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

const useClientSideInitOnlyState = (
  function <const R extends true | object > (...[recompute]: [() => R] )
  {

    const [s, setS] = React.useState<R | null>(() => null) ;
    const clear = (
      () => setS(v0 => null )
    ) ;
    const fillIfCleared = (
      () => setS(v0 => (v0 ?? recompute() ) )
    ) ;
    const reinitialise = (
      () => {
        clear() ;
        fillIfCleared() ;
      }
    ) ;
    React["useEffect"](() => {
      fillIfCleared()
    } ) ;

    return [s, setS, { reinitialise, } ] as const ;
  }
) ;

const useCsioe = (
  function <Vle extends object>(...[recompute,] : [() => Vle] ) {

    return (
      useClientSideInitOnlyState((): (
        | { value: Vle, err?: null, }
        | { err: Error, value?: false | null, }
      ) => {
        try {
          const value = recompute() ;
          return { value, } ;
        } catch (z : any) {
          return {
            err: z ,
            value: false ,
          } ;
        }
      } )
    ) ;
  }
) ;

// TODO
const useRevCsioe = (
  function <Vle extends object>(...[getSampleDocument,] : [() => Vle] ) {

    const [vAndE, setVAndE] = (
      useCsioe<object & (
        {
          lastRevT : number ,
          revs: util.Immutable.Map<number, Vle> ,
          revParentMap : util.Immutable.Map<number, number> ,
        }
      )>(() => {
        const d0 = (
          getSampleDocument()
        ) ;
        const t = Date.now() ;
        return {
          lastRevT: t ,
          revs: (
            util.Immutable.Map<number, Vle>()
            .set(t, d0)
          ) ,
          revParentMap: (
            util.Immutable.Map<number, number>()
          ) ,
        }  ;
      })
    ) ;
    const pushRevContent = (
      function (...[newValue] : [Vle ] ) {
        ;
        const t = Date.now() ;
        return (
          setVAndE(s0 => {
            if (s0?.value) {
              return {
                value: {
                  ...s0.value ,
                  lastRevT: t ,
                  revs: (
                    s0.value.revs
                    .set(t , newValue )
                  ) ,
                  revParentMap: (
                    s0.value.revParentMap
                    .set(t, s0.value.lastRevT )
                  ) ,
                } ,
              } ;
            }
            return s0 ;
          })
        ) ;
      }
    ) ;
    const revertToRevT = (
      function (...[t] : [number ] ) {
        ;
        return (
          setVAndE(s0 => {
            if (s0?.value) {
              return {
                value: {
                  ...s0.value ,
                  lastRevT: t ,
                } ,
              } ;
            }
            return s0 ;
          })
        ) ;
      }
    ) ;

    return {
      vAndE ,
      pushRevContent ,
      revertToRevT ,
    } as const ;

  }
) ;

export {
  // useCLientSideOnly ,
  useClientSideOnlyCompute ,
  useClientSideInitOnlyState ,
  useCsioe ,
  useRevCsioe ,
} ;












