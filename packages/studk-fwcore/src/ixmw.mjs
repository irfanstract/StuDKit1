

import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
} from "lodash-es" ;







/**
 * Metrostatus ops
 * 
 * @typedef {Object} MetrostaticNumericalShiftDeriver
 * @property {(t: number) => LinearMetrostatus } advancedByBars  see also {@link advancedByTicks}
 * @property {(t: number) => LinearMetrostatus } advancedByTicks see also {@link advancedByBars}
 */

/**
 * units of 4-tick metronomes
 * 
 * @enum {(typeof StudKQuarterMetronomicUnit) extends infer S ? S[keyof S] : never}
 * 
 */
export const StudKQuarterMetronomicUnit = /** @type {const} */ ({
  /** one tick */
  TICQUE: 1 ,
  /** two ticks ; a "bop" */
  BOPPE: 2 ,
  /** four ticks ; two "bop"s ; one bar */
  BAR: 4 ,
  /** 2 bars */
  TWO_BAR: 8,
  /** `4` bars */
  SLIDE: 16 ,
  /** `2 * 4` (= `8`) bars */
  SJUIVE: 32 ,
  /** `2 * 2 * 4` (= `16`) bars */
  CLEE: 64 ,
  /** (= `32`) bars */
  HALF_COURTUINE: 128 ,
  /** (= `64`) bars */
  ONE_COURTUINE: 256 ,
  /** (= `128`) 512 */
  TWO_COURTUINE: 512 ,
}) ;


/**
 * 
 * the momentary value which each metronome at a time points to,
 * represented as linear system between {@link ellapsedBars} and {@link ellapsedticks} and {@link perBarRateVal}.
 * 
 * ```
 * ellapsedBars * btm === ellapsedticks
 * ```
 * 
 * @implements MetrostaticNumericalShiftDeriver
 * 
 * @template {2 | 3 | 4 | 5} [btmv=(2 | 3 | 4 | 5)]
 * 
 */
export class LinearMetrostatus
{
  /**
   * {@link advancedByBars}
   * 
   * for convenience, there's also {@link advancedByTicks} ; however, the latter is prone to numerical errors.
   * 
   * @param {[t: number]} args
   */
  advancedByBars(...[advInBars])
  {
    return this.withResetEllapsedBars(this.ellapsedBars + advInBars, ) ;
  }

  /**
   * {@link advancedByTicks}
   * 
   * see also {@link advancedByBars}.
   * 
   * @param {[t: number]} args
   * 
   */
  advancedByTicks(...[advInTicks])
  {
    return this.advancedByBars((advInTicks / this.perBarRateVal) ) ;
  }
  
  /**
   * {@link advancedBy} ; see {@link StudKQuarterMetronomicUnit }
   * 
   * @param {[t: Exclude<StudKQuarterMetronomicUnit, 1 | 2 | 3> | number]} args
   * 
   */
  advancedBy(...[c])
  {
    return this.advancedByBars(c / 4 ) ;
  }
  
  /**
   * 
   * @param {[t: StudKQuarterMetronomicUnit ]} args
   * 
   */
  roundedBackBy(...[c])
  {
    const { ellapsedBars, } = this ;
    const existingV = ellapsedBars * 4 ;
    const rndedV = (
      (
        range(0, existingV + 1E-10 , c ).at(-1) ?? 0
      )
    ) ;
    return this.withResetEllapsedBars(rndedV / 4) ;
  }
  
  /**
   * 
   * @param {Parameters<this["roundedBackBy"]> } args
   * 
   */
  roundedForthBy(...[c])
  {
    const { ellapsedBars, } = this ;
    const existingV = ellapsedBars * 4 ;
    const rndedV = (
      (
        range(0 , existingV + (2 * c ) , c )
        .filter(x => (existingV <= x ) )
        .at(0)
        ?? util.throwTypeError()
      )
    ) ;
    ;
    return this.withResetEllapsedBars(rndedV / 4) ;
  }
  
  /**
   * 
   * the amt of bars left,
   * towards {@link roundedForthBy `roundedForthBy`-ed} subject to flag `boundaryExclusive`
   * 
   * @param {[...[t: StudKQuarterMetronomicUnit], { boundaryExclusive : boolean ; } ] } args
   * 
   */
  getBarsToRoundedForthBy(...[c, { boundaryExclusive = true, }, ])
  {
    ;
    const tht = (
      (boundaryExclusive ? this.advancedByTicks(1) : this )
      .roundedForthBy(c)
    ) ;
    return (tht.ellapsedBars - this.ellapsedBars ) ;
  }

  /**
   * 
   * @template {LinearMetrostatus["perBarRateVal"] } newBtmv
   * @param {[newBtmv]} args
   * 
   */
  withBtm(...[v])
  { return new LinearMetrostatus(this.ellapsedBars, v) ; }

  /**
   * 
   * @param {[number]} args
   * 
   */
  withResetEllapsedBars(...[v])
  { return new LinearMetrostatus(v, this.perBarRateVal) ; }

  /**
   * constructor for {@link LinearMetrostatus}.
   * 
   * the momentary value which each metronome at a time points to.
   * 
   * two choices comes to mind,
   * whether it should be {@link ellapsedBars} or {@link ellapsedticks}, to encode the ellapsed amt.
   * we want to allow variations of {@link perBarRateVal} over time ;
   * this means we're only left with {@link ellapsedBars} which is {@link perBarRateVal}-agnostic.
   * 
   * @param {[ellapsedBars: number, btm: btmv]} args
   * 
   * @protected
   * 
   */
  constructor(...[ellapsedBarsArg, btmArg])
  {
    /** @private @type {any} */ this.iMetrostatusObjBrand ;

    this.ellapsedBars = ellapsedBarsArg;
    /** per-bar number of ticks */
    this.perBarRateVal = btmArg ;
    /** computed as `ellapsedBars * btm` */
    this.ellapsedticks = this.ellapsedBars * this.perBarRateVal ;
  }

  /**
   * 
   * @template {LinearMetrostatus["perBarRateVal"] } [btmv=(2 | 3 | 4 | 5)]
   * @param {[ellapsedBars: number, btm: btmv]} args
   * 
   */
  static byEllapsedBarsValAndPerBarRate(...[ellapsedBarsArg, btmArg])
  { return new LinearMetrostatus(ellapsedBarsArg, btmArg) ; }
  
  /**
   * at `0` and with given {@link perBarRateVal}.
   * 
   * @template {LinearMetrostatus["perBarRateVal"] } [btmv=(2 | 3 | 4 | 5)]
   * @param {[btm: btmv]} args
   * 
   */
  static byPerBarRate(...[btmArg])
  { return this.byEllapsedBarsValAndPerBarRate(0, btmArg ) ; }

  /**
   * 
   * @param {[ellapsedBars: number, btm?: LinearMetrostatus["perBarRateVal"] ]} args
   * 
   */
  static byEllapsedBarsVal(...[ellapsedBarsArg, btmArg = 4])
  { return this.byEllapsedBarsValAndPerBarRate(ellapsedBarsArg, btmArg) ; }

  toString()
  {
    return `[M @ ${this.ellapsedticks} by ${this.perBarRateVal}]` ;
  }
}









