








import { throwTypeError } from "typexpe-commons/src/common_sv1.mjs";;

import {
  defaultCompare,
  getKeyingComparator,
  SpecificComparator ,
} from "typexpe-commons/src/common-comparingfn-all.mjs"; ;






;



;

/**
 * 
 * a facility implementing identity-interned data-structure constructor(s)
 * 
 */
const allocateKeyInternedObjectPool = (
  /**
   * 
   * @template {Exclude<import("./eawo1.mjs").XJson.IAny, null | undefined > } KeyT
   * @template {object} WrpT
   * 
   * @param {import("./eawo1.mjs").ArgsWithOptions<import("./eawo1.mjs").ArgsWithOptions<[], { recreate: (x: KeyT) => WrpT, extract?: NoInfer<(x: WrpT) => KeyT >, }>, { convToCacheKey ?: NoInfer<(x: KeyT) => (keyof any)> } >} args
   * 
   */
  function (...[{ recreate: constructFor, extract, }, opts = {} ])
  {

    const {
      convToCacheKey = (x) => JSON.stringify(x),
    } = opts;

    const {
      GET1,
    } = (

      /** the engine. */
      AKIOP({
        entype: (
          /** @type {(...x: [ReturnType<typeof convToCacheKey>, WrpT] ) => void } */ (...a) => {}
        ) ,
      })

    ) ;

    const GET = (
      /**
       * 
       * @param {[KeyT]} args
       */
      function (...[key])
      {

        const ck = (
          convToCacheKey(key)
        ) ;

        const throwAllocationFailureException = () => (
          throwTypeError(`allocation failed, for ${JSON.stringify({ key, ck, }) }`)
        ) ;

        return (
          GET1(ck, {
            construct: () => constructFor(key),
            throwAllocationFailureException,
          })
          ??
          throwAllocationFailureException()
        ) ;
      }
    ) ;

    return /** @type {const} */ ({
      GET,
    }) ;
  }
) ;

// TODO
const AKIOP = (
  /**
   * 
   * @template {keyof any } PayloadKey
   * @template {object} Payload
   * 
   * @param {import("./eawo1.mjs").ArgsWithOptions<[], { entype: (...x: [PayloadKey, Payload] ) => void, }>} args
   * 
   */
  function (...[])
  {

    /**
     * the storage for (`WeakReference`-proxied ) references to the deliverable `object`s
     * 
     * using {@link Record} is quite inefficent, yet
     * can't use {@link Map} since presently (May 2024) {@link Map} is not quite ergonomic for this.
     * hoping to get the Stage-2 Proposal `Map.prototype.emplace` promoted soon (see Tc39's GH page)
     * so I can avoid using {@link Record} here.
     * another reason is
     * using {@link Map} can lead programmers the wrong way as in ES/JS "array literal"s result in fresh different mutable objects so
     * leading to various hard-to-identify, typo-based bugs.
     * 
     */
    const refDict = /** @type {Record<PayloadKey , WeakRef<Payload > > } */ ({ } ) ;
    
    // TODO
    const refEntryFinalizer = new FinalizationRegistry(/** @type {(x: PayloadKey) => void} */ (ky) => {
      (refDict[ky]?.deref() ?? (delete refDict[ky] ) ) ;
    }) ;

    /** @typedef {(Required<Parameters<FinalizationRegistry<any>["register"] > >[0] ) & { isXTag ?: true }} */
    /** */
    const FinlzKey = {} ;

    const createAndRegFinlzTag = /** @type {(...x: [PayloadKey ]) => FinlzKey } */ (ck) => {
      ;
      const tag = Symbol() ;
      refEntryFinalizer.register(tag , ck, ) ;
      return tag ;
    } ;

    // TODO
    const tagMap = /** @type {WeakMap<Payload, FinlzKey > } */ (new WeakMap() ) ;

    const GET1 = (
      /**
       * 
       * @param {import("./eawo1.mjs").ArgsWithOptions<[key: PayloadKey, ], AkiopAllocativeMethods<Payload> > } args
       * 
       */
      function (...[ck, { construct: recreateValue, throwAllocationFailureException, }])
      {

        return (
          (
            refDict[ck ]?.deref()
            ??
            (
              refDict[ck]
              = (() => {
                const tag = createAndRegFinlzTag(ck) ;
                const value = recreateValue() ;
                tagMap.set(value, tag ) ;
                const ref = (new WeakRef(value ) ) ;
                return ref ;
              })()
            ).deref()
          )
          ??
          throwAllocationFailureException()
        ) ;
      }
    ) ;

    return {
      GET1,
    } ;
  }
) ;

/**
 * @typedef {{ construct: () => Payload, throwAllocationFailureException: () => never, } }
 * @template [Payload = any]
 */
/** */
const AkiopAllocativeMethods = {} ;



export {
  allocateKeyInternedObjectPool,
} ;



import "core-js/modules/es.array.to-sorted.js" ;

{
  /** TODO/WIP @deprecated */
  const IDict = (() => {
    ;
  
    const mmp = /** @type {Map<ReturnType<typeof JSON.stringify> , WeakRef<IDictReprImpl<String> > > } */ (new Map() ) ;
  
    return (
      /**
       * 
       * @template {string} k
       * @template {import("./eawo1.mjs").MapEntrySpec<k, {} | null> } [entryT=[k,any]]
       * 
       * @param {[props: object & import("./eawo1.mjs").RecordFromEntry<entryT> ]} args
       * 
       * @returns {IDictReprImpl<k, entryT> }
       * 
       */
      function (...[props])
      {
        const propKeysSorted = (
          Object.keys(props)
          .toSorted(getKeyingComparator(x => JSON.stringify(x) , defaultCompare, ) )
        ) ;
        ;
        return throwTypeError() ;
      }
    ) ;
  })() ;
  
  
  ;
  
  
  /**
   * 
   * 
   * @internal
   * 
   * @template {string} k
   * @template {import("./eawo1.mjs").MapEntrySpec<k, {} | null> } [entryT=[k,any]]
   * 
   */
  class IDictReprImpl extends Object
  {
    /**
     * @param {[props: object & import("./eawo1.mjs").RecordFromEntry<entryT> ]} args
     */
    constructor (...[props])
    {
      super() ;
      Object.assign(this, props) ;
      Object.freeze(this) ;
    }
  }
}














