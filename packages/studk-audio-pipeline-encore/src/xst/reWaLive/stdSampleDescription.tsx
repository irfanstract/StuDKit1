





/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






;

import {
  util ,
  random ,
  mkArray ,
  ArgsWithOptions ,
  ArgsGetOptions ,
  allocateKeyInternedObjectPool ,
  createInterningSubclass ,
  TIMEOUT ,
} from "studk-ui/src/fwCore/utility-functions-rewa.ts" ;

export {
  util ,
  random ,
  mkArray ,
  allocateKeyInternedObjectPool ,
  createInterningSubclass ,
  TIMEOUT ,
} from "studk-ui/src/fwCore/utility-functions-rewa.ts" ;

export type {
  ArgsWithOptions ,
  ArgsGetOptions ,
} from "studk-ui/src/fwCore/utility-functions-rewa.ts" ;

;







;

export type KWpWaveTable = (
  | PeriodicWave
  | AudioBuffer
  | Exclude<OscillatorType, "custom">
) ;

declare global {
  interface PeriodicWave {
    kNewAudioSampledlikeSrcNodeImplConsidersAsNominal : any ;
  }
}

export const kNewAudioSampledlikeSrcNode = (() => {
  interface KnaslsnOptions<T = any> { f ?: number | null , }
  function kNewAudioSampledlikeSrcNodeImpl(...args : ArgsWithOptions<[BaseAudioContext, KWpWaveTable, ], KnaslsnOptions > ): AudioScheduledSourceNode ;
  function kNewAudioSampledlikeSrcNodeImpl(...args : ArgsWithOptions<[BaseAudioContext, Extract<KWpWaveTable, string | PeriodicWave>, ], KnaslsnOptions > ): OscillatorNode ;
  function kNewAudioSampledlikeSrcNodeImpl(...args : ArgsWithOptions<[BaseAudioContext, Extract<KWpWaveTable, AudioBuffer>, ], KnaslsnOptions > ): AudioBufferSourceNode ;
  function kNewAudioSampledlikeSrcNodeImpl(...[context, s, { f: cf = null, } = {} ] : (
    ArgsWithOptions<[BaseAudioContext, KWpWaveTable, ], KnaslsnOptions >
  ))
  {
    ;

    if (s instanceof PeriodicWave || typeof s === "string")
    {
      const nd = (
        (typeof s === "string") ?
        new OscillatorNode(context, { type: s, } )
        :
        new OscillatorNode(context, { periodicWave: s, } )
      ) ;

      if (typeof cf === "number") { nd.frequency.setValueAtTime(cf, 0) ; }

      return nd ;
    }

    if ((s instanceof AudioBuffer))
    {
      const nd = new AudioBufferSourceNode(context, { buffer: s, } ) ;

      if (typeof cf === "number") { nd.playbackRate.setValueAtTime(cf, 0) ; }

      return nd ;
    }

    return util.throwTypeError() ;
  }
  return kNewAudioSampledlikeSrcNodeImpl ;
})() ;

// TODO
export const describeWpwBasedMuso = (
  function <const T extends KWpWaveTable, ctxT extends BaseAudioContext >
  (...[instantiateImpl] : [(ctx: ctxT) => T] )
  {

    const getSampleForCtx = (
      util.memoize(instantiateImpl, ctx => ctx )
    ) ;

    const playOn = (
      function (...[nd0, { amp = 2 ** -3, f: cf = 440 , }] : (
        ArgsWithOptions<[AudioNode & { readonly context: ctxT, }], { amp: number , f ?: number, } >
      ) )
      {
        const { context, } = nd0 ;

        const nd1 = new GainNode(context, { gain: amp, } ) ;
        nd1.connect(nd0) ;

        const nd2 = ((): AudioScheduledSourceNode => {
          const s = getSampleForCtx(context) ;
          return kNewAudioSampledlikeSrcNode(context, s, { f: cf, } ) ;
        })() ;
        nd2.connect(nd1) ;

        nd2.start(context.currentTime) ;
        nd2.stop(context.currentTime + 0.5 ) ;

        return nd2 ;
      }
    ) ;

    return {
      getSampleForCtx ,
      playOn ,
    } as const ;
  }
) ;

export const getLog2Of = Math.log2 ;

/**
 * the return-value of this code:
 * ```
 * // +------┳------------+--------+
 * // | x    ┃ lmRndedDn  | lm     |
 * // +------╂------------+--------+
 * // | 2^x  ┃ aY         | y      |
 * // +------┻------------+--------+
 * //
 * const lm = getLog2Of(y) ;
 * const lmRndedDn = Math.floor(lm) ;
 * const aY = 2 ** lmRndedDn ;
 * return (
 *   lmRndedDn + ((y / aY) - 1 )
 * ) ;
 * ```
 * 
 * a {@link Math.expm1 numerically } better alternative to {@link Math.log2 }.
 * 
 */
// ┳┻
export const OGPD = (() => {
  function OGPD_IMPL(...[x] : [  1] ): 0 ;
  function OGPD_IMPL(...[x] : [  2] ): 1 ;
  function OGPD_IMPL(...[x] : [  4] ): 2 ;
  function OGPD_IMPL(...[x] : [  8] ): 3 ;
  function OGPD_IMPL(...[x] : [ 16] ): 4 ;
  function OGPD_IMPL(...[x] : [ 32] ): 5 ;
  function OGPD_IMPL(...[x] : [ 64] ): 6 ;
  function OGPD_IMPL(...[x] : [128] ): 7 ;
  function OGPD_IMPL(...[x] : ArgsWithOptions<[y: number], {}> ): number ;
  function OGPD_IMPL(...[x] : ArgsWithOptions<[y: number], {}> )
  {
    const lm = getLog2Of(x) ;
    const lmRndedDn = Math.floor(lm) ;
    const aX = 2 ** lmRndedDn ;
    return (
      lmRndedDn + ((x / aX) - 1 )
    ) ;
  }
  return OGPD_IMPL ;
})() ;

/**
 * yields `OGPD(y) * 12`
 * 
 * using {@link OGPD}
 * is a {@link Math.expm1 numerically } better alternative to {@link Math.log2 }.
 * 
 * 
 */
export const IGPD = (() => {
  ;
  function IGPD_IMPL(...[x] : [  1] ):  0 ;
  function IGPD_IMPL(...[x] : [  2] ): 12 ;
  function IGPD_IMPL(...[x] : [  4] ): 24 ;
  function IGPD_IMPL(...[x] : [  8] ): 36 ;
  function IGPD_IMPL(...[x] : [ 16] ): 48 ;
  function IGPD_IMPL(...[x] : [ 32] ): 60 ;
  function IGPD_IMPL(...[x] : [ 64] ): 72 ;
  function IGPD_IMPL(...[x] : [128] ): 84 ;
  function IGPD_IMPL(...[x] : [  2] ): 12 ;
  function IGPD_IMPL(...[x] : [  3] ): 18 ;
  function IGPD_IMPL(...[x] : [  4] ): 24 ;
  function IGPD_IMPL(...[x] : [  5] ): 27 ;
  function IGPD_IMPL(...[x] : [  6] ): 30 ;
  function IGPD_IMPL(...[x] : [  7] ): 33 ;
  function IGPD_IMPL(...[x] : [  8] ): 36 ;
  function IGPD_IMPL(...[x] : ArgsWithOptions<[y: number], {}> ): number ;
  function IGPD_IMPL(...[x] : ArgsWithOptions<[y: number], {}> )
  {
    return (
      OGPD(x) * 12
    ) ;
  }
  return IGPD_IMPL ;
})() ;













