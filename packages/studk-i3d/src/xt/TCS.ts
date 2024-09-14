






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;




export const toCyclicSliding = (
  (() => {
    function cyclicSlidingImpl<E, const N extends number>(...args : [readonly E[], n: N ]): readonly (
      //
      N extends 0 ? (readonly []) :
      N extends 1 ? (readonly [E,]) :
      N extends 2 ? (readonly [E, E,]) :
      N extends 3 ? (readonly [E, E, E,]) :
      //
      readonly E[]
    )[] ;
    function cyclicSlidingImpl<E>(...args : [readonly E[], n: number ]): readonly (readonly E[])[] ;
    function cyclicSlidingImpl<E>(...[s10, n] : [readonly E[], n: number ]) {
      return (
        ([...s10, ...s10])
        .map((_, i, ss): readonly E[] => (
          ss
          .slice(i).slice(0, n)
        ) )
        .slice(0, s10.length )
      ) ;
    }
    return cyclicSlidingImpl ;
  })()
) ;

export const toAdjacentPairs = (
  function <E>(...[d0] : [readonly E[] ])
  {
    const s11 = (
      toCyclicSliding(d0, 2)
    ) ;
    const s12 = (
      s11.slice(0, s11.length + -1 )
    ) ;
    return s12 ;
  }
) ;
















