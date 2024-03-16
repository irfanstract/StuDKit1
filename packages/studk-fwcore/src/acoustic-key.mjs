
import { util, } from "typexpe-commons/src/common_sv.mjs" ;







/**
 * @typedef {{ is_F ?: any } & string } F
 * 
 */
/**
 * @type {(...args: [x: number] ) => F }
 */
export function F(c)
{
  return `F:${c }` ;
}




/** @type {(x: number) => number} */
export function normaliseAngDeg(aDArg)
{
  return (
    ((0 <= aDArg) || util.throwTypeError(JSON.stringify({ f: aDArg, }) ) )
    ,
    aDArg % 360
  ) ;
}




/**
 * *key ignoring octave*
 * 
 */
/**
 * @typedef {{ is_F ?: any } & string } Chd
 * 
 */
/**
 * @type {(...args: [x: number] ) => Chd }
 */
export function Chd(aDArg)
{
  const aDeg = normaliseAngDeg(aDArg) ;
  return `MKeyDeg:${aDeg }` ;
}






