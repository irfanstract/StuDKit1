




import assert from "assert";

export { assert } ;

export const throwTypeError = /** @satisfies {(...a: ConstructorParameters<typeof Error> ) => never } */ (...a) => { throw new TypeError(...a) ; } ;

export const throwAssertionError = /** @satisfies {(...a: ConstructorParameters<typeof Error> ) => never } */ (...a) => { throw new Error(...a) ; } ;

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



const iterateNonNull = /** @type {<const A>(x: A) => ([A & {}] | []) } */ (x) => (
  isNonNull(x) ?
  [x] : []
) ;

const isNonNull = /** @type {<const A>(x: A) => x is (A & {})} */ (x) => (
  (x ?? null) === null
) ;

export { iterateNonNull, isNonNull, } ;




/**
 * exports both {@link resolve} and {@link reject}.
 * 
 * @class
 * @template {{}} A
 * 
 */
function Deferred()
{
  this.out = (new Promise(/** @param {(x: A) => void } resolve */ (resolve, reject) => {
    this.resolve = resolve ;
    this.reject = reject ;
  }) ) ;

  /** @type {(x: A) => void } */
  this.resolve ;
}

export { Deferred, } ;

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
export const reiterated = /** @template E @param {() => Generator<E, void, void> } x @return {ReadonlyArray<E> } */ (x) => {
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
export const stringLinesConcatAsync = /** @template {String} E @param {() => AsyncGenerator<E> } x */ async (x) => (
  (await arrayFromAsync(x() ) )
  .join("\r\n")
) ;
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
export const stringLinesConcat = /** @template {String} E @param {() => Generator<E> } x */ (x) => (
  [...reiterable(x) ]
  .join("\r\n")
) ;

import * as L from "lodash-es" ;

export {
  /** @deprecated */
  L as lodash,
  L ,
} ;

/** @type {(...x: [string, number]) => string} */
export function indent(x, n) {
  return (
    x
    .split(/\r?\n/g)
    .map(x => ("".padStart(n) + x) )
    .join("\r\n")
  ) ;
}

const {
  debounce,
} = L ;

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

export {
  xMemoize as memoize ,
  debounce ,
  // throt
}  ;
export {
  range ,
  // memoize ,
  // debounce ,
  // throt
} from "lodash-es" ; ;

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








