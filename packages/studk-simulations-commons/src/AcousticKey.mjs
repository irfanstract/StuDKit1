
import { util, } from "typexpe-commons/src/common_sv.mjs" ;



import { normaliseAngDeg, } from "./Trigonometric1.mjs";






/**
 * @typedef {{ iFVObjFrand ?: any } & string }
 * 
 */
/**
 * @type {(...args: [x: number] ) => F }
 */
export function F(c)
{
  return `Frequency.InHertz(${c })` ;
}

export const getFrequencyInHertz = (
  /** @type {(x: F) => number } */
  (
    (() => {
      /** reference: {@link F} */
      {
        const firmware = `{ Frequency: { InHertz: (x) => x , } , }` ;
        return (
          (Function(`const { Frequency } = ${firmware } ; return x => eval(x) ;`) )
          ()
        ) ;
      }
    })()
  )
) ;




/**
 * @typedef {{ iChdObjBrand ?: any } & string }
 * 
 */
/* name duplication on `@typedef` omitted ; see `jsdocTreatAsExported` in `binder.ts` on https://github.com/Microsoft/TypeScript/tree/0a671aa393760957743e9081c1798d5acc23b2c7 */
/**
 * *key ignoring octave*
 * 
 * @namespace
 * 
 */
export const Chd = {

  /* needs hard-wiring via `@type`, due to the recursivity */

  /**
   * *key ignoring octave, by degrees from key C*
   * 
   * @type {(...args: [x: number] ) => Chd }
   * 
   * @see {@link Chd.ByDegreesFromA}
   * @see {@link Chd.ByDegreesFromC}
   * 
   */
  ByDegreesFromC: function Chd(aDArg)
  {
    const aDeg = normaliseAngDeg(aDArg) ;
    return `AcousticKey.ByDegreesFromKeyC(${aDeg })` ;
  } ,
  
  /**
   * 
   * @type {(...args: [x: Chd] ) => number }
   * 
   */
  getDegreesFromC: /** @type {any} */ (
    (() => {
      /** reference: {@link Chd.ByDegreesFromC} */
      {
        const firmware = `{ AcousticKey: { ByDegreesFromKeyC: (x) => x , } , }` ;
        return (
          (Function(`const { AcousticKey } = ${firmware } ; return x => eval(x) ;`) )
          ()
        ) ;
      }
    })()
  ) ,

  /**
   * *key ignoring octave, by degrees from key A*
   * 
   * @type {(...args: [x: number] ) => Chd }
   * 
   * @see {@link Chd.ByDegreesFromA}
   * @see {@link Chd.ByDegreesFromC}
   * 
   */
  ByDegreesFromA: function (aDArg)
  {
    return Chd.ByDegreesFromC(-90 + aDArg ) ;
  } ,

} ;






