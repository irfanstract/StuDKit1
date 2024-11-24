



// @ts-check


import assert from "assert";

/**
 * @import { ArgsWithOptions, } from "../src/util.ts"
 */
/**
 * 
 * @type {typeof import("../src/util.ts")}
 */
const {
  memoize,
  utilReiterated,
} = (await import("../dist/util.js")) ;






const spclMustTryProbSet = (

  utilReiterated(function* () {
    /**
     * note that we need `--transpileOnly` since
     * the app's path contains untyped compiled JS file(s)
     * 
     */
    for (const withNoNativeRunmain          of (/** @return {(readonly [unknown, ...unknown[] ] ) & Boolean[]} */ () => [false,  true])() )
    for (const withAlwaysPreTranspile       of (/** @return {(readonly [unknown, ...unknown[] ] ) & Boolean[]} */ () => [false,  true])() )
    for (const withTranspileOnly            of (/** @return {(readonly [unknown, ...unknown[] ] ) & Boolean[]} */ () => [        true])() )
    for (const scanAndPrintDeps             of (/** @return {(readonly [unknown, ...unknown[] ] ) & Boolean[]} */ () => [
      false,
      true,
    ])() )
    for (const {  } of /** @satisfies {{ }[] } */ ([
      {} ,
    ]) )
    yield {
      flags: (
        utilReiterated(function* () {
          if (withNoNativeRunmain       ) { yield "--noNativeRunmain"       ; }
          if (withAlwaysPreTranspile    ) { yield "--alwaysPreTranspile"    ; }
          if (withTranspileOnly         ) { yield "--transpileOnly"         ; }
          if (scanAndPrintDeps          ) { yield "--scanAndPrintDeps"      ; }
        })
      ) ,
    } ;
  })
) ;


export {
  spclMustTryProbSet,
} ;







