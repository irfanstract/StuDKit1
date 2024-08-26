











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
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'; ;






import * as React from "react" ;

import {
  describeComponent,
} from 'studk-ui-componentdefinition/src/dec.tsx'; ;





;

type ScdsPoint2D = { x: number, y: number } ;

const useCtxtualScdProv = () => (
  React.useContext(getScdSProvCtxStack() )
) ;

export {
} ;

/**
 * boundary with ctxtual override for {@link ScdStateProvCtx}.
 * use-case for eg overriding the defaults of `<Scd>`.
 * 
 */
const WithCtxtuallyOverridenScdSProvC = (
  describeComponent (function WithCtxtuallyOverridenScdSProvCImpl(props : React.ProviderProps<ScdStateProvCtx> ) {
    const C = getScdSProvCtxStack().Provider ;
    return (
      <C {...props} />
    ) ;
  } )
) ;

/* needs deferring, to avoid unexpected NPE(s) */
const getScdSProvCtxStack = (
  util.L.once(() => (
    React.createContext<ScdStateProvCtx >((
      computeGlobalDefaultScdsHandler()
    ))
  ))
) ;

interface ScdStateProvCtx extends Extract<ScdStateDerivable, any>
{}

interface ScdStateDerivable extends Extract<(
  ReturnType<typeof describeSsva>
), any>
{}

/* needs deferring, to avoid unexpected NPE(s) */
const computeGlobalDefaultScdsHandler = (
  function () {
    return (
      describeSsva({ hostNode: null, getSFromPt: pt => pt, getPtFromS: pt => pt })
    ) ;
  }
) ;

export {
  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  getScdSProvCtxStack ,
  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  useCtxtualScdProv ,
  WithCtxtuallyOverridenScdSProvC ,
} ;
export type {
  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  ScdStateProvCtx ,
  /* final */
  ScdStateDerivable ,
} ;



;

type SsvaPoint2D = { x: number, y: number } ;

/**
 * describes
 * `interface`
 * to be used in the {@link React.Context} returned by {@link getScdSProvCtxStack }
 * .
 * 
 */
const describeSsva = (
  function <S extends {}>(...[opts] : (
    ArgsWithOptions<[], (
      & (
        | { hostNode: Element | Document, }
        | { /** @deprecated */ hostNode: null, }
        | { /** @deprecated */ hostNode?: never, }
      )
      & { getSFromPt: (x: SsvaPoint2D) => S, }
      & { getPtFromS: (...args: NoInfer<[x: S]>) => SsvaPoint2D, }
    )>
  ) )
  {
    const {
      hostNode: rootNode = null,
      getPtFromS ,
      getSFromPt ,
    } = opts ;

    interface DfoReturnedOps {
      readonly rootNd: typeof rootNode,
      readonly s: S ,
      readonly pos: SsvaPoint2D ,
      readonly insteadForPos: (ctx: { pos: SsvaPoint2D, }) => DfoReturnedOps ,
    }
    const DERIVED_FOR: DfoReturnedOps["insteadForPos"] = (
      function (...[{ pos: posArg, }] )
      {
        const s = getSFromPt(posArg) ;
        const nrmsedPos = getPtFromS(s) ;
        return {
          rootNd: rootNode,
          pos: nrmsedPos,
          s ,
          insteadForPos: DERIVED_FOR ,
        } as const ;
      }
    ) ;

    return (
      DERIVED_FOR({
        pos: { x: 0, y: 0 },
      })
    ) ;
  }
) ;

export {
  /** @deprecated this is a WIP/TBD. */
  describeSsva ,
} ;

;





;

















