











/* work-around the so-called "not a function" errors */
import "core-js/modules/es.array.to-sorted.js" ;


/**
 * @typedef {<const E>(a: E, b: E) => number }
 * 
 * @deprecated
 */
/** @module */
const GenericComparator = {} ;

/**
 * @typedef {(a: E, b: E) => number }
 * @template E
 */
/** @module */
const SpecificComparator = {} ;

const defaultCompare = (
  /**
   * 
   * @type {SpecificComparator<any> }
   */
  (...[a, b]) => {
    const r = [a, b].toSorted() ;
    return r.indexOf(a) - r.indexOf(b) ;
  }
) ;

/**
 * 
 * @type {SpecificComparator<number> | SpecificComparator<bigint> }
 */
const numericCompare = (
  // @ts-ignore
  (...[a, b]) => (a - b)
) ;

const getReverseComparator = (
  /**
   * 
   * @type {<E>(impl: SpecificComparator<E>) => SpecificComparator<E> }
   */
  (...[c]) => (
    (...actualArgs) => -c(...actualArgs)
  )
) ;

const getKeyingComparator = (
  /**
   * 
   * @type {<SrcE, E>(...a: [(x: SrcE) => E, SpecificComparator<E>]) => SpecificComparator<SrcE> }
   */
  (...[emap, c]) => (
    (...[a0, a1]) => c(...[emap(a0), emap(a1) ])
  )
) ;


export {
  numericCompare,
  defaultCompare,
  getReverseComparator,
  getKeyingComparator,
} ;

export {
  GenericComparator,
  SpecificComparator ,
} ;











