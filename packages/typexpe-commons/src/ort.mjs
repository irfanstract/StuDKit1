








import { throwTypeError } from "typexpe-commons/src/common_sv1.mjs";;

import {
  defaultCompare,
  getKeyingComparator,
  SpecificComparator ,
} from "typexpe-commons/src/common-comparingfn-all.mjs"; ;






import "core-js/modules/es.array.to-sorted.js" ;

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














