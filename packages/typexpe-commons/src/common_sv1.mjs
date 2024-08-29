




import {
  assert ,
} from "./Assert.mjs";

export { assert } ;

import {
  throwTypeError ,
  throwAssertionError ,
} from "./ThrowTypeError1.mjs";

export {
  throwTypeError ,
  throwAssertionError ,
} ;

// import type {} from "typexpe-commons/src/ArrayPrototypeIncludes.mts" ;

/**
 * nonlocally-returning ev
 * 
 * @type {<R>(impl: (ctx: { exit: (value: NoInfer<R>) => never } ) => R ) => R }
 * 
 */
export function asNonlocalReturnBasedRun1(impl)
{
  return asNonlocalReturnBasedRun(impl) ;
}

/**
 * nonlocally-returning ev
 * 
 * @type {<R1, R2, const R1Spcl extends R1 = R1>(impl: (ctx: { exit: (value: R2) => never } ) => R1Spcl ) => (R1Spcl | R2) }
 * 
 */
export function asNonlocalReturnBasedRun(impl)
{
  class SpclReturn extends Error
  {
    /** @param {any} value */
    constructor(value)
    {
      super() ;
      
      /** the value submitted */
      this.value = value ;
    }
  }

  try {
    return impl({ exit: (value) => { throw new SpclReturn(value) ; } }) ;
  }
  catch (z) {
    if (z instanceof SpclReturn) { return z.value ; }
    throw z ;
  }
} ;

/**
 * lite variant of {@link asNonlocalReturnBasedRun} expecting *reference throwable* to be specified
 * 
 * @template {void} R
 * @param {[{ referenceEvtObj: Error, }, () => R, ]} args
 */
export function SINGLETNLR(...[{ referenceEvtObj, }, runMainThing,])
{
  ;
  C :
  try {
    ;
    return runMainThing() ;
  } catch (z) {
    if (z === referenceEvtObj) {
      break C ;
    }
    throw z ;
  }
}

/**
 * async version of {@link SINGLETNLR}
 * 
 * @template {void} R
 * @param {[{ referenceEvtObj: Error, }, () => Promise<R>, ]} args
 */
export async function SINGLETNLR_ASYNC(...[{ referenceEvtObj, }, iRMT,])
{
  ;
  C :
  try {
    ;
    return await iRMT() ;
  } catch (z) {
    if (z === referenceEvtObj) {
      break C ;
    }
    throw z ;
  }
}

/**
 * @typedef {[keyof O, O[keyof O] ] }
 * @template {{}} O
 */
/** */
export const EntryOfPlain = {} ;



import {
  isNonNull ,
} from "./IsNonNull.mjs" ;

const iterateNonNull = /** @type {<const A>(x: A) => ([A & {}] | []) } */ (x) => (
  isNonNull(x) ?
  [x] : []
) ;

const iteratePositives = (
  /** @type {<const A extends true | Object, actualFalseT extends false | null>(x: A | actualFalseT) => ([A & {}] | []) } */
  (x) => (
    (x) ?
    [x] : []
  )
) ;

export {
  iteratePositives ,
  iterateNonNull,
  isNonNull,
} ;




;

// import * as L from "./lodash-es-min.mjs" ;
import * as L from "lodash-es" ;

import * as Immutable from "immutable" ;

export {
  /** @deprecated */
  L as lodash,
  L ,
} ;

const unfoldPro = (
  /**
   * 
   * @template E
   * @template {E} ER
   * 
   * @template initialStateT
   * 
   * @param {[opts: { digest: ( (s: ER | initialStateT) => E ) , initialState: initialStateT , shallContWith: (state: E) => state is ER, } ] } args
   * 
   */
  (...[{
    digest,
    initialState,
    shallContWith ,
  }]) => (
    reiterable(function * ()
    {
      /** @type {ER | initialStateT } */
      let sv = initialState ;

      LOOP :
      for (;;) {
        ;

        const state0 = sv ;
        const state1 = digest(state0) ;
        if (shallContWith(state1) ) {

          const yv = state1 ;

          try {

            yield yv ;
  
          } finally {
            sv = state1 ;
          }
        } else {
          break LOOP ;
        }

      }
    })
  )
) ;

const unfoldConjPro = (
  /**
   * 
   * @template {object | true} E
   * @template {E} E1
   * @template {E} ER
   * 
   * @template {false | null} usedFalseT
   * 
   * @template initialStateT
   * 
   * @param {[opts: { digest: ( (s: ER | initialStateT) => E1 ) , initialState: initialStateT , shallContWith: (state: E1) => (ER | usedFalseT), } ] } args
   * 
   */
  (...[{
    digest,
    initialState,
    shallContWith ,
  }]) => (
    reiterable(function * ()
    {
      /** @type {ER | initialStateT } */
      let sv = initialState ;

      LOOP :
      for (;;) {
        ;

        const state0 = sv ;
        const state01 = digest(state0) ;
        yield state01 ;

        const state1 = shallContWith(state01) ;

        if (state1 ) {

          const yv = state1 ;

          try {

            yield yv ;
  
          } finally {
            sv = state1 ;
          }
        } else {
          break LOOP ;
        }

      }
    })
  )
) ;

const unfoldWhileTruePro = (
  //
  /**
   * 
   * @template {object | `${number | boolean | null | undefined}${string }` | symbol | true} E
   * @template {E} ER
   * 
   * @template {false | null} usedFalseT
   * 
   * @param {[opts: { digest: ( (s: E) => (E | usedFalseT) ) , initialState: NoInfer<E> , } ]} args
   * 
   */
  (...[{
    digest,
    initialState,
  }]) => {
    /** @typedef {E } AsE */
    ;
    return (
      unfoldPro({
        digest: /** @type {(x: AsE) => (AsE | usedFalseT) } */ (e) => digest(e) ,
        initialState ,
        shallContWith: /** @type {(x: AsE | usedFalseT) => x is AsE } */ ((e) => !!e) ,
      })
    )
  }
);

export {
  unfoldPro ,
  unfoldWhileTruePro ,
  unfoldConjPro ,
} ;

/**
 * Array from async-generator.
 * supposed to be equivalent of the yet-to-be-standardised built-in `Array.fromAsync`.
 * 
 * consider the more-convenient variant {@link arrayFromAsyncFac} .
 * 
 */
export const arrayFromAsync = /** @template E @param {AsyncIterable<E> } x */ async (x) => {
  /** @type {readonly E[] } */ let v = [] ;
  for await (const e of x) {
    v = [...v, e ] ;
  }
  return v ;
} ;

/**
 * Array from async-generator-function -
 * Array-producing version of {@link asyncReiterable `asyncReiterable` }
 * 
 */
export const arrayFromAsyncFac = /** @template E @param {() => AsyncIterable<E> } x */ (x) => arrayFromAsync(x() ) ;

/**
 * by a generator-function, render a readonly array.
 * equivalent to `Array.from(reiterable(x) )`, except possibly additionally `freeze`ed .
 * 
 */
export const reiterated = /** @type {<const E>(...args: [() => Generator<E, void, void> ] ) => ReadonlyArray<E> } */ (x) => {
  return (
    Object.freeze((
      Array.from(reiterable(x) )
    ) )
  ) ;
} ;
/**
 * by a generator-function, describe a {@link Iterable re-iterable}:
 * ```
 * return reiterable(function* () {
 *   for (let i=5; i<15; i+=0.5) { yield i ; }
 * } ) ;
 * ```
 * 
 * when regular arrays are needed:
 * ```
 * const indices = [...reiterable(function* () {
 *  // '5' _must_ be emitted
 *  yield 5 ;
 *  if (shallEmit6And7() ) { yield* [6, 7] ; }
 *  if (shallEmit8And9() ) { yield* [8, 9] ; }
 *  // '10' and '11' _must_ be emitted
 *  yield* [10, 11] ;
 * 
 * 
 * } )] ;
 * ```
 * 
 */
export const reiterable = /** @template E @param {() => Generator<E, void, void> } x @return {Iterable<E> } */ (x) => {
  return {
    [Symbol.iterator]: x ,
  } ;
} ;
/**
 * by a generator-function, describe a {@link Iterable re-iterable}:
 * ```
 * return asyncReiterable(function* () {
 *  for (const i of range(5, 15) )
 *  {
 *    yield await renderForI(i, { ... } ) ;
 *  }
 * } ) ;
 * ```
 * 
 */
export const asyncReiterable = /** @template E @param {() => AsyncGenerator<E> } x @return {AsyncIterable<E> } */ (x) => {
  return {
    [Symbol.asyncIterator]: x ,
  } ;
} ;

/**
 * build string by concatenating, with CRLF, lines from `x`.
 * 
 * async version of {@link stringLinesConcat }
 * 
 */
export const stringLinesConcatAsync = /** @template {String} E @param {() => AsyncGenerator<SlcSpecifiedItem<E>, void, void> } x */ async (x) => {
  const x1 = (await arrayFromAsync(x() ) ) ;
  return stringLinesConcat(function* () { yield* x1 ; }) ;
} ;
/**
 * build string by concatenating, with CRLF, lines from `x`.
 * 
 * ```
 * return stringLinesConcat(function* () {
 *  // the header is optional
 *  if (headerSpec) {
 *   yield* stringifyHeader(headerSpec) ;
 *  }
 *  // this separator is a _must_
 *  yield "===================" ;
 * 
 *  // the body is a _must_
 *  yield* stringifyBody(b) ;
 * 
 * 
 * } ) ;
 * ```
 * 
 */
export const stringLinesConcat = /** @template {String} E @param {() => Generator<SlcSpecifiedItem<E>, void, void> } x */ (x) => (
  [...reiterable(x) ]
  .map(lne => (lne ?? "" ))
  .join("\r\n")
) ;

/**
 * @typedef {E | void }
 * @template {string} [E = string]
 * 
 */
/** @module */
const SlcSpecifiedItem = {} ;

export const asMentioned = /** @template E @param {() => Generator<E, void, void> } x @return {ReadonlyArray<E> } */ (x) => {
  return (
    reiterated(function* () {
      yield* (
        new Map((
          reiterated(x)
          .map(e => [e, true] )
        ))
        .keys()
      ) ;
    })
  ) ;
} ;

/**
 * Constant Array
 * 
 */
const SEQ = (
  /**
   * @type {<const IA extends readonly unknown[]>(values: IA) => typeof values }
   * 
   */
  function (vs) {
    // TODO
    Object.freeze(vs) ;
    return vs ;
  }
) ;

export { SEQ , } ;

/**
 * Constant
 * 
 */
export const asConst = (
  /**
   * @type {<const IA >(values: IA) => typeof values }
   * 
   */
  function (vs) {
    // TODO
    Object.freeze(vs) ;
    return vs ;
  }
) ;

export {
  range ,
  // memoize ,
  // debounce ,
  // throt
} from "lodash-es" ; ;

export {
  Immutable ,
} ;

const TRY_CHECK_FROM_ARRAY = (
  /**
   * 
   * @template {object | symbol | true} E
   * 
   * @template {false | null} actualFalseT
   * 
   * @param {[src: readonly (E | actualFalseT)[] ]} args
   * 
   */
  function (...[a0]) {
    if (a0[0] ) {
      const aNext = a0[0]
      return /** @type {const} */ ([aNext, a0.slice(1) ]) ;
    } else {
      return false ;
    }
  }
) ;

export {
  TRY_CHECK_FROM_ARRAY ,
} ;

;

/* `allocateKeyInternedObjectPool` */
export {
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';

/* `createInterningSubclass` */
export {
  createInterningSubclass ,
} from 'typexpe-commons/src/ortEdConstructors.mjs';

/** @type {{ <T extends (...args: [...argsT]) => any, const argsT extends any[]>(func: T, resolver: ((...args: Parameters<T>) => any) | undefined): ReturnType<(typeof L.memoize<T>)>; } } */
export const xMemoize = (
  function (...[f, r])
  {
    const newF = (
      L.memoize(f, r ?? throwTypeError(`missing 'resolver'.`) )
    ) ;
    return newF ;
  }
) ;

const {
  debounce,
  throttle: asThrottled ,
} = L ;

export {
  xMemoize as memoize ,
  debounce ,
  asThrottled ,
}  ;

/**
 * exports both {@link resolve} and {@link reject}.
 * 
 * @class
 * @template {{}} A
 * 
 */
function Resolvable()
{
  this.out = (new Promise(/** @param {(x: A) => void } resolve */ (resolve, reject) => {
    this.resolve = resolve ;
    this.reject = reject ;
  }) ) ;

  /** @type {(x: A) => void } */
  this.resolve ;
}

export {
  Resolvable ,
  /** @deprecated alias of {@link Resolvable }. */
  Resolvable as Deferred,
} ;

if (typeof setImmediate === "undefined") {
  globalThis.setImmediate ??= queueMicrotask ;
}

export { startTimeout, } ;

/**
 * 
 * starts a new timeout in terms of {@link setTimeout }
 * 
 * @param {[delayMillis: number, ]} args
 * 
 */
function startTimeout(...[delayMillis]) {
  return (
    new Promise((/** @type {(x: () => void ) => void } */ resolve) => (
      setTimeout(resolve, delayMillis )
    ) )
  ) ;
}

/** @type {(...x: [string, number]) => string} */
export function indent(x, n) {
  return (
    x
    .split(/\r?\n/g)
    .map(x => ("".padStart(n) + x) )
    .join("\r\n")
  ) ;
}

/**
 * 
 * quote given string as `code` for MD.
 * 
 * @satisfies {(x: string) => string}
 * 
 */
export const mdQuoteCode = (
  x => (
    ["", x, ""].join("`")
  )
) ;








