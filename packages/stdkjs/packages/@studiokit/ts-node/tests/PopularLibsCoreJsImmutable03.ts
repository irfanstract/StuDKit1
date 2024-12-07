






import assert = require("assert") ;

function assertEqualAndPrint<EG, const E2 extends EG>(...[v1, v2]: [EG, E2] ) {
  stdoutConsole["info"](v1, "===", v2, `?`) ;
  assert(v1 === v2) ;
}

import Immutable = require("immutable") ;

import { stdoutConsole, } from "../dist-raw/StdOutConsole" ;





/**
 * Convenient Conversion Syntax For Generator
 * 
 * ```
 * return (
 *   reiterated(function* () {
 *     if (config.e1) { yield flag1 ; }
 *     if (config.e2) { yield flag2 ; }
 *     if (config.e3) { yield flag3 ; if (eModExt) { yield flag3Ext ; } }
 *   })
 * ) ;
 * 
 * ```
 * 
 */
export function reiterated<const E>(sg: () => Iterable<E> ) {
  return (
    Immutable.Seq(sg() )
  ) ;
}

/**
 * expand to {@link Immutable.OrderedMap `OrderedMap`}
 * 
 */
export function expandOrderedReg<const K, const V>(sg: () => Iterable<readonly [K, V]> ) {
  return (
    Immutable.OrderedMap((
      reiterated(sg)
      .map(pretendImmutablePair )
    ) )
  ) ;
}

/**
 * expand to {@link Immutable.Map `Map`}
 * 
 */
export function correlated<const K, const V>(sg: () => Iterable<readonly [K, V]> ) {
  return (
    Immutable.Map((
      reiterated(sg)
      .map(pretendImmutablePair )
    ) )
  ) ;
}

export const pretendImmutablePair: (
  <const K, const V>(x: readonly [K, V]) => [K, V]
) = (
  ([...vs]) => vs
) ;



export const main = (

  function ()
  {
    ;

    assertEqualAndPrint(reiterated(function* () { yield 1 ; yield 2 ; yield 3 ; }).join() , "1,2,3" ) ;

    assertEqualAndPrint(reiterated(function* () { if (0) { yield 1 ; } yield 2 ; yield 3 ; }).join() , "2,3" ) ;

    assertEqualAndPrint(expandOrderedReg(function* () { yield ["c", 1 ] ; yield ["d", 2 ] ; yield ["e", 3] ; }).entrySeq().map(([k, v]) => `${k}=${v}` ).join() , "c=1,d=2,e=3" ) ;

    return (
      console["log"](`done PopularLibsCoreJsImmutable03.main()`)
      ,
      void 0
    ) ;
  }
) ;



if (require.main === module) {
  main() ;
}





