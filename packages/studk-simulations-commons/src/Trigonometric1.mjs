



import { util, } from "typexpe-commons/src/common_sv.mjs" ;









/**
 * normalise degrees ; supports negatively-signed values
 * 
 * @type {(x: number) => number}
 * 
 */
export function normaliseAngDeg(aDArg)
{
  return (
    ((ac, divisor) => {
      const lowerMultiply = (Math.floor(ac / divisor ) * divisor ) ;
      return ac - lowerMultiply ;
    } )(aDArg, 360 )
  ) ;
}




/**
 * @typedef {{ iTrigAngularValueObjBrand : any } & string }
 * 
 */
/* name duplication on `@typedef` omitted ; see `jsdocTreatAsExported` in `binder.ts` on https://github.com/Microsoft/TypeScript/tree/0a671aa393760957743e9081c1798d5acc23b2c7 */
/**
 * *(trignometric) angle*
 * 
 * @namespace
 * 
 */
export const Angle = {

  /* needs hard-wiring via `@type`, due to the recursivity */

  /**
   * *(trigonometric) angle, in degrees, normalised*
   * 
   * @type {(...args: [x: number] ) => Angle }
   * 
   */
  ByDegrees: function (aDArg)
  {
    const aDeg = normaliseAngDeg(aDArg) ;
    return /** @type {Angle} */ (`Angle.ByDegrees(${aDeg })`) ;
  } ,
  
  /**
   * 
   * @type {(...args: [x: Angle] ) => number }
   * 
   */
  getDegrees: /** @type {any} */ (
    (() => {
      /** reference: {@link Angle.ByDegrees} */
      {
        const firmware = `{ Angle: { ByDegrees: (x) => x , } , }` ;
        return (
          (Function(`const { Angle, } = ${firmware } ; return x => eval(x) ;`) )
          ()
        ) ;
      }
    })()
  ) ,
  
  /**
   * 
   * @type {(...args: [Angle, Angle] ) => Angle }
   * 
   */
  sumOfTwo: (v1, v2) => (
    Angle.ByDegrees(Angle.getDegrees(v1) + Angle.getDegrees(v2) )
  ) ,

} ;

/** @type {TrigSnf } */
export function cosineAt(x)
{
  return sineAt(Angle.sumOfTwo(Angle.ByDegrees(90) , x ) ) ;
}

/** @type {TrigSnf } */
export function sineAt(x)
{
  // TODO
  {
    const xInDegrees = (
      Angle.getDegrees(x)
    ) ;
    switch (xInDegrees) {
      case 0 :
      case 180 :
      case -180 :
        return 0 ;
      case 90 :
      case -270 :
        return 1 ;
      case -90 :
      case 270 :
        return -1 ;
    }
    return Math.sin((2 * (xInDegrees / 360 ) ) * Math.PI ) ;
  }
}

/** @typedef {(x: Angle) => number } TrigSnf */









