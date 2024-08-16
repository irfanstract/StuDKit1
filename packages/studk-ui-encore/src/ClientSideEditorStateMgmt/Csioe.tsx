









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
  OmitW,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'



;



import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;

;



;







;

import * as React from "react" ;

import {
  ReactSetStateActionHelpers ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseReactSetStateAction.tsx" ;

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

// interface CsioeRevTStamp extends number {}
type CsioeRevTStamp = number & { isCsioeRevTStamp ?: true, } ;

class CsioeTable<Vle extends object = any >
{

  static initiallyWith<Vle extends object>(...[d0, t]: (
    ArgsWithOptions<[Vle, t: CsioeRevTStamp ], {} >
  ))
  : CsioeTable<Vle>
  {

    return (
      new CsioeTable({
        presentlyRevT: t ,
        revs: (
          util.Immutable.Map<CsioeRevTStamp, Vle>()
          .set(t, d0)
        ) ,
        revParentMap: (
          util.Immutable.Map<CsioeRevTStamp, CsioeRevTStamp>()
        ) ,
        revRedoMap: (
          util.Immutable.Map<CsioeRevTStamp, CsioeRevTStamp>()
        ) ,
      })
    ) ;
  }

  withPushedEdit(...[newValue, t]: (
    ArgsWithOptions<[Vle, t: CsioeRevTStamp ], {} >
  ))
  : CsioeTable<Vle>
  {
    const sv = this ;
    return (
      this.derivedWithProps({
        ...sv ,
        presentlyRevT: t ,
        revs: (
          sv.revs
          .set(t , newValue )
        ) ,
        revParentMap: (
          sv.revParentMap
          .set(t, sv.presentlyRevT )
        ) ,
        revRedoMap: (
          sv.revRedoMap
          .set(sv.presentlyRevT, t )
        ) ,
      })
    ) ;
  }

  withHavingBeenRevertedToRevT(...[t]: (
    ArgsWithOptions<[t: CsioeRevTStamp ], {} >
  ))
  : CsioeTable<Vle>
  {
    const sv = this ;
    return (
      this.derivedWithProps({
        ...sv ,
        presentlyRevT: t ,
      })
    ) ;
  }

  getParentStateRevT() {
    return (
      this.revParentMap.get(this.presentlyRevT )
      ?? null
    ) ;
  }

  withUndo() {

    const parentRevT = this.getParentStateRevT() ;
    if (typeof parentRevT === "number") {
      return (
        this.withHavingBeenRevertedToRevT(parentRevT)
      ) ;
    }

    return (
      this
    ) ;
  }

  withUndoIfWithin(...[tDeltaLmit] : [tDelta: CsioeRevTStamp]) {

    const parentRevT = this.getParentStateRevT() ;
    const selfRevT = this.presentlyRevT ;
    if (typeof parentRevT === "number") {
      if ((parentRevT <= selfRevT ) && (selfRevT - parentRevT <= tDeltaLmit) ) {
        ;
        return (
          this.withHavingBeenRevertedToRevT(parentRevT)
        ) ;
      }
    }

    return (
      this
    ) ;
  }

  withRedo() {

    const afrRevT = this.revRedoMap.get(this.presentlyRevT , null ) ;
    if (typeof afrRevT === "number") {
      return (
        this.withHavingBeenRevertedToRevT(afrRevT)
      ) ;
    }

    return (
      this
    ) ;
  }

  /**
   * all the revs, keyed by ID (in this case, the time-stamp)
   * 
   */
  readonly revs   !: util.Immutable.Map<CsioeRevTStamp, Vle> ;
  /**
   * the ID (in this case, the time-stamp) of the rev we're presently at
   * 
   */
  readonly presentlyRevT    !: CsioeRevTStamp ;

  /** the 'undo' map    */ readonly revParentMap  !: util.Immutable.Map<CsioeRevTStamp, CsioeRevTStamp> ;
  /** the 'redo' map    */ readonly revRedoMap    !: util.Immutable.Map<CsioeRevTStamp, CsioeRevTStamp> ;

  /**
   * the repr/structure of the rev we're presently at --
   * defined as `revs[prT ]`.
   * TO BE COMPUTED IN {@link constructor}.
   * 
   */
  readonly presentlyRevContent !: Vle ;

  private constructor(private props: (
    OmitW<CsioeTable<Vle> , (
      never
      | `with${string }`
      | `get${string }`
      | `presentlyRevContent`
    ) >
  ) )
  {
    Object.assign(this, props) ;

    this.presentlyRevContent = (
      this.revs.get(this.presentlyRevT) ?? util.throwAssertionError()
    ) ;

  }
  
  protected derivedWithProps(...[props] : [CsioeTable<Vle>["props"] ] )
  {
    return new CsioeTable(props) ;
  }

  // getAllReachableRevTs = (
  //   util.L.once(() => this.getAllReachableRevTsUncached() )
  // ) ;
  getAllReachableRevTs() { return this.getAllReachableRevTsUncached() ; }

  protected getAllReachableRevTsUncached()
  : readonly CsioeRevTStamp[]
  {
    const this1 = this ;

    const VN = (
      function (...[specifiedId] : [CsioeRevTStamp] )
      {
        ;
        if (!vnImmediateRchblsDictBuf[specifiedId]) {
          ;

          /**
           * note -- shall use `??=`, not plain `=`, to mitigate race-condition
           * 
           */
          vnImmediateRchblsDictBuf[specifiedId] ??= (
            util.Immutable.Set(util.reiterated(function * () {
              yield* [specifiedId] ;
              yield* util.iterateNonNull((this1.revParentMap ).get(specifiedId) ) ;
              yield* util.iterateNonNull((this1.revRedoMap   ).get(specifiedId) ) ;
            } ))
          ) ;

          /**
           * recursion WRT {@link VN} ;
           * this needs to be deferred here past the above `vnImmediateRchblsDictBuf[specifiedId] ??= (... ...)` LOC,
           * to avoid infinite-depth recursion.
           * 
           */
          void (
            vnImmediateRchblsDictBuf[specifiedId]!
            .forEach(e => VN(e) )
          ) ;

        }

        return (
          vnImmediateRchblsDictBuf[specifiedId]
          ?? util.throwAssertionError()
        ) ;
      }
    ) ;
    const vnImmediateRchblsDictBuf = (
      new Object() as { [k: CsioeRevTStamp]: util.Immutable.Set<CsioeRevTStamp> ; }
    ) ;

    void VN(this1.presentlyRevT) ;

    // TODO
    return (
      Object.keys(vnImmediateRchblsDictBuf)
      .map(v => +v )
    ) ;
  }

  /**
   * optimisational method
   * intended solely for avoiding memory usage issues ;
   * mathematically,
   * using this method is unecessary .
   * 
   */
  // TODO
  withHavingBeenReferentiallyPruned() {
    const allReachblRevTs = this.getAllReachableRevTs() ;
    return (
      this.derivedWithProps({
        ...this ,
        revs: (
          this.revs
          .filter((vle, key) => (
            allReachblRevTs.includes(key)
          ) )
        ) ,
      })
    ) ;
  }

  getTowardsParentRevTDelta() {
    const selfT = this.presentlyRevT ;
    const parentT = this.getParentStateRevT() ;
    if (parentT !== null) {
      return selfT - parentT ;
    }
    return null ;
  }

  withPushedEditEncore(...[newValue, t, { asBeingWithinHighFrequencyEditSeqce = false, } = {}]: (
    ArgsWithOptions<[Vle, t: CsioeRevTStamp ], { asBeingWithinHighFrequencyEditSeqce ?: boolean, } >
  ))
  {
    return (
      this
      .withUndoIfWithin((
        (asBeingWithinHighFrequencyEditSeqce ? 4.5 : Number.NEGATIVE_INFINITY )
        * 1000
      ) )
      .withPushedEdit(newValue, t)
    ) ;
  }

}

// TODO
const useRevCsioe = (
  function <Vle extends object>(...[getSampleDocument,] : [() => Vle] ) {

    const [vAndE, setVAndE] = (
      useCsioe<object & (
        CsioeTable<Vle>
      )>(() => {

        const d0 = (
          getSampleDocument()
        ) ;
        const t = Date.now() ;

        return (
          CsioeTable.initiallyWith(d0, t )
        ) ;
      })
    ) ;

    const pushRevContent = (
      function (...[newValue, { asBeingWithinHighFrequencyEditSeqce = false, } = {} ] : (
        ArgsWithOptions<[Vle ], { asBeingWithinHighFrequencyEditSeqce ?: boolean, }>
      ) ) {
        ;
        const t = Date.now() ;

        return (
          setVAndE(s0 => {
            const { value: sv , } = s0 ?? {} ;

            if (sv) {

              return {
                value: (
                  sv.withPushedEditEncore(newValue, t, { asBeingWithinHighFrequencyEditSeqce, } )
                ) ,
              } ;
            }

            return s0 ;
          })
        ) ;
      }
    ) ;

    const revertToRevT = (
      function (...[requestedT] : [CsioeRevTStamp ] ) {
        ;

        return (
          setVAndE(s0 => {
            const { value: sv, } = s0 ?? {} ;

            if (sv) {

              return {
                value: (
                  sv.withHavingBeenRevertedToRevT(requestedT)
                ) ,
              } ;
            }
            return s0 ;
          })
        ) ;
      }
    ) ;

    const pruneAllRevsList = (
      function (...[] : [ ] ) {
        ;

        return (
          setVAndE(s0 => {
            const { value: sv, } = s0 ?? {} ;

            if (sv) {

              return {
                value: (
                  sv.withHavingBeenReferentiallyPruned()
                ) ,
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
      pruneAllRevsList ,
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












