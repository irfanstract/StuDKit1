









import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'

export const ADJACENT_PAIRS = (
  function <const E>(...[src]: [readonly E[] ] )
  {
    return (
      util.range(0, (src.length + -2 ) + 0.5 )
      .map(i => {
        ;
        const GET_AT = (i: number) => (src[i] as E )
        return [GET_AT(i), GET_AT(i + 1 )] as const
      } )
    )
  }
)

export const OR_TUPLE_TWO = (
  function <const V extends (boolean | (number | bigint) | symbol | string ) | null , > (...[strokeWidthArg] : [V | readonly [V, V] ] ) {
    if (!(strokeWidthArg !== null && typeof strokeWidthArg === "object")) {
      return [strokeWidthArg, strokeWidthArg] as const ;
    }
    return strokeWidthArg ;
  }
)







