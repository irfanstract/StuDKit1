










import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;

/**
 * padded numeric string fmt-ing
 * ```
 * assert(PADDEDNUMERIC(15, 3) === "015" ) ;
 * assert(PADDEDNUMERIC( 5, 3) === "005" ) ;
 * ```
 * 
 */
export const PADDEDNUMERIC = (
  function (...[v, nLd, {} = {} ] : (
    ArgsWithOptions<[number, ...[n: number] ], {}>
  ) )
  {
    return (
      String(v.toFixed() )
      .padStart(nLd, "0")
    ) ;
  }
) ;

/**
 * the amt of seconds to ellapse.
 * 
 */
export const T_BY_HMS = (
  function (...[hn, mn, sn] : [...values: [hours: Array<any>["length"], mnts: Array<any>["length"], secs: Array<any>["length"]] ])
  {
    let v: number = 0 ;
    v += hn ;
    v *= 60 ;
    v += mn ;
    v *= 60 ;
    v += sn ;
    return v ;
  }
) ;

/**
 * compute
 * *the _unit-based_ position/location(s) of the three arrows of a wall-clock showing given `t`*
 * .
 * 
 */
export const T_WALLC_PROTAC = (
  function (...[t] : [number])
  {
   return (
    (
      function (...[t] : [number])
      {
        const sPos = t % 1 ;
        const mntPPos = (t / 60) % 1 ;
        const hourPPos = (t / (24 * 60 ) ) % 1 ;
        return {
          sPos ,
          mntPPos ,
          hourPPos ,
        } as const ;
      }
    )(t / 60 )
   ) ;
  }
) ;

export const T_STRING: {
  (...args: (
    ArgsWithOptions<[value: number, upperUnit: "minutes" | "hours" | "days"], {} >
  ) ): string ;
  (...args: [number, never?] ): string ;
} = (
  function (t, md = "minutes") : string
  {
    const hps = T_WALLC_PROTAC(+t.toFixed(3) ) ;
    
    return (
      (
        util.reiterated(function* () {
          yield `${Math.floor(60 * hps.sPos) }` ;
    
          if (md === "minutes") {
            yield `${Math.floor(t / 60 ) }:`;
            return ;
          } else {
            yield `${Math.floor(60 * hps.mntPPos) }:` ;
          }
    
          if (md === "hours") {
            ;
            yield `${Math.floor(t / (60 * 60) ) } `;
            return ;
          } else {
            ;
            yield `${Math.floor(60 * hps.hourPPos) }hrs `;
          }
        })
        .toReversed()
      )
      .join("")
    ) ;
  }
) ;










