





/**
 * 
 * extracted from `grandPiano.ts` (or `.tsx`).
 * 
 */
;






;

import {
  util ,
  random ,
  mkArray ,
  ArgsWithOptions ,
  ArgsGetOptions ,
  allocateKeyInternedObjectPool ,
  TIMEOUT, 
} from "../stdSampleDescription.tsx" ;

export {
  // util ,
  // random ,
  // mkArray ,
  // ArgsWithOptions ,
  // ArgsGetOptions ,
  // allocateKeyInternedObjectPool ,
  // TIMEOUT, 
} from "../stdSampleDescription.tsx" ;

import {
  OGPD,
  IGPD,
} from "../stdSampleDescription.tsx" ;

export {
  OGPD ,
  IGPD ,
} ;

/**
 * returns `2 ** (i / 12 )`
 * 
 */
export const ST_EXP = (i: number) => (
  (2 ** (i / 12 ) )
) ;

/**
 * for use in freq-domain processing,
 * to {@link PeriodicWave define per-domain octave-dependent amp/gain(s) }
 * .
 * computes:
 * ```
 * bse + (
 *    (Math.log2(i) * vel )
 *    * -1
 * )
 * ```
 */
export const CBZ = (
  (...[{ bse, vel, }, i] : [{ bse: number, vel: number, }, i: number]) => 2 ** (
    bse + (
      (Math.log2(i) * vel)
      * -1
    )
  )
) ;

/**
 * the `f`/wavedens of,
 * a key which's `Key.atF(55) :+ 3 semitones `
 * ```
 * const BEXPON = ((i: number) => (ST_EXP(i) * 55 ) ) ;
 * ```
 * 
 */
export const BEXPON = (
  (i: number) => (
    ST_EXP(i) * 55 
  )
) ;








;

;




;

;




;
















