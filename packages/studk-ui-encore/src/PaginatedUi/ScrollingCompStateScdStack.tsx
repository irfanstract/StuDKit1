











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

interface ScdStateDerivable<S extends {} = any> extends Extract<(
  ReturnType<typeof describeSsva<S >>
), any>
{}

namespace ScdStateDerivable {
  ;

  export type WithStateT<S extends {}> = (
    ScdStateDerivable<S>
  ) ;

}

export {

  /* final */
  ScdStateDerivable ,

} ;



;

type ScdsPoint2D = { x: number, y: number } ;

/**
 * 
 * @deprecated
 * this is primarily part of those not-scalable solution.
 * 
 */
const useCtxtualScdProv = () => (
  React.useContext(getScdSProvCtxStack() )
) ;

export {
} ;

/**
 * boundary with ctxtual override for {@link ScdStateProvCtx}.
 * use-case for eg overriding the defaults of `<Scd>`.
 * 
 * @deprecated
 * this is primarily part of those not-scalable solution.
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
/**
 * 
 * 
 * @deprecated
 * this is primarily part of those not-scalable solution.
 * 
 */
const getScdSProvCtxStack = (
  util.L.once(() => (
    React.createContext<ScdStateProvCtx >((
      computeGlobalDefaultScdsHandler()
    ))
  ))
) ;

interface ScdStateProvCtx<St extends {} = any > extends
Extract<ScdStateDerivable.WithStateT<St>, any>
{}

namespace ScdStateProvCtx { ; }

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
  useCtxtualScdProv ,
  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  WithCtxtuallyOverridenScdSProvC ,

  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  getScdSProvCtxStack ,

  /**
   * 
   * @deprecated this is a WIP/TBD.
   */
  ScdStateProvCtx ,

} ;

export type {

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
      /**
       * 
       * @deprecated
       * *this property would prevent cross-element reusability of {@link describeSsva}-ed ctx(es)* .
       */
      readonly rootNd: typeof rootNode,
      readonly s: S ,
      readonly pos: SsvaPoint2D ,
      readonly originalPosArg: SsvaPoint2D ,
      readonly insteadForPos: (ctx: { pos: SsvaPoint2D, }) => DfoReturnedOps ,
    }

    const DERIVED_FOR: (
      (ctx: { pos: SsvaPoint2D, }) =>
        DfoReturnedOps
    ) = (
      function (...[{ pos: posArg, }] )
      {
        const s = getSFromPt(posArg) ;
        const nrmsedPos = getPtFromS(s) ;
        return {
          rootNd: rootNode,
          originalPosArg: posArg,
          pos: nrmsedPos,
          s ,
          insteadForPos: ({ pos, }) => DERIVED_FOR({ pos, }) ,
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

















