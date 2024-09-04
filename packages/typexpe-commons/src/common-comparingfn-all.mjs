











/* work-around the so-called "not a function" errors */
import "core-js/modules/es.array.to-sorted.js" ;


/**
 * @typedef {SpecificComparator<any> }
 */
/** @module */
const Comparator = {} ;

/**
 * @typedef {<const E>(a: E, b: E) => number }
 * 
 * @deprecated
 */
/** @module */
const GenericComparator = {} ;

/**
 * @typedef {SpecificComparator<unknown> }
 */
/** @module */
const PlainComparator = {} ;

/**
 * @typedef {(a: E, b: E) => number }
 * @template E
 */
/** @module */
const SpecificComparator = {} ;

/**
 * a {@link Comparator}
 * to behave equivalent to {@link Array.prototype.toSorted}'s default
 * 
 */
const defaultCompare = (
  /**
   * 
   * @type {PlainComparator }
   */
  (...[a, b]) => {
    const r = [a, b].toSorted() ;
    return r.indexOf(a) - r.indexOf(b) ;
  }
) ;

/**
 * 
 * arithmetic {@link Comparator}
 * 
 * @type {SpecificComparator<number> | SpecificComparator<bigint> }
 * 
 */
const numericCompare = (
  // @ts-ignore
  (...[a, b]) => (a - b)
) ;

/**
 * 
 * 
 */
const getReverseComparator = (
  /**
   * 
   * @type {<E>(impl: SpecificComparator<E>) => SpecificComparator<E> }
   */
  (...[c]) => (
    (...actualArgs) => -c(...actualArgs)
  )
) ;

/**
 * 
 * [utility] a {@link Comparator} to first run `_1(item)` and then compare the return-value(s) as usual
 * 
 */
const getKeyingComparator = (
  /**
   * 
   * a {@link Comparator} to first run `_1(item)` and then compare the return-value(s) as usual
   * 
   * @type {<SrcE, E>(...a: [_1: (x: SrcE) => E, _2: SpecificComparator<E>]) => SpecificComparator<SrcE> }
   * 
   */
  (...[emap, c]) => (
    (...[a0, a1]) => c(...[emap(a0), emap(a1) ])
  )
) ;

/**
 * 
 * 
 */
const fromLessthanPredicate = (
  /**
   * 
   * @type {<SrcE,>(...a: [(...x: [SrcE, SrcE]) => boolean, ]) => SpecificComparator<SrcE> }
   */
  (...[isLt, ]) => (
    (...[a0, a1]) => {
      const wasLt = isLt(a0, a1) ;
      const wasGt = isLt(a1, a0) ;
      if (wasLt && wasGt ) { throw new TypeError(`inconsistent 'fromLessthanPredicate' callback resulting in both 'wasGt' and 'wasLt' at once`) ; }
      if (wasLt ) { return -1 ; }
      if (wasGt ) { return 1 ; }
      return 0 ;
    }
  )
) ;


const getItemDeduplicatedArray = (
  /**
   * 
   * @type {<E>(x: readonly E[] ) => readonly E[] }
   */
  (x0) => {
    const b = new Set(x0) ;
    const x1 = Array.from(b) ;
    return x1 ;
  }
) ;


export {
  numericCompare,
  defaultCompare,
  fromLessthanPredicate,
  getReverseComparator,
  getKeyingComparator,
} ;

export {
  Comparator,
  GenericComparator,
  PlainComparator,
  SpecificComparator ,
} ;


export {
  getItemDeduplicatedArray ,
} ;











