





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
} from "studk-ui-fwcore/src/util/ReWaPkgConvnt.ts" ;
import type {
  AllOrNever1 ,
} from 'studk-fwcore-setups/src/util-eawo.mts'; ;






;


// export type KWpWaveTable = (
//   | PeriodicWave
//   | AudioBuffer
//   | Exclude<OscillatorType, "custom">
// ) ;

// declare global {
//   interface PeriodicWave {
//     kNewAudioSampledlikeSrcNodeImplConsidersAsNominal : any ;
//   }
// }

// // @ts-ignore
// export const kNewAudioSampledlikeSrcNode = (() => {
//   interface KnaslsnOptions<T = any> { f ?: number | null , }
//   function kNewAudioSampledlikeSrcNodeImpl(...args : ArgsWithOptions<[BaseAudioContext, KWpWaveTable, ], KnaslsnOptions > ): AudioScheduledSourceNode ;
//   function kNewAudioSampledlikeSrcNodeImpl(...args : ArgsWithOptions<[BaseAudioContext, Extract<KWpWaveTable, string | PeriodicWave>, ], KnaslsnOptions > ): OscillatorNode ;
//   function kNewAudioSampledlikeSrcNodeImpl(...args : ArgsWithOptions<[BaseAudioContext, Extract<KWpWaveTable, AudioBuffer>, ], KnaslsnOptions > ): AudioBufferSourceNode ;
//   function kNewAudioSampledlikeSrcNodeImpl(...[context, s, { f: cf = null, } = {} ] : (
//     ArgsWithOptions<[BaseAudioContext, KWpWaveTable, ], KnaslsnOptions >
//   ))
//   {
//     ;

//     if (s instanceof PeriodicWave || typeof s === "string")
//     {
//       const nd = (
//         (typeof s === "string") ?
//         new OscillatorNode(context, { type: s, } )
//         :
//         new OscillatorNode(context, { periodicWave: s, } )
//       ) ;

//       if (typeof cf === "number") { nd.frequency.setValueAtTime(cf, 0) ; }

//       return nd ;
//     }

//     if ((s instanceof AudioBuffer))
//     {
//       const nd = new AudioBufferSourceNode(context, { buffer: s, } ) ;

//       if (typeof cf === "number") { nd.playbackRate.setValueAtTime(cf, 0) ; }

//       return nd ;
//     }

//     return util.throwTypeError() ;
//   }
//   return kNewAudioSampledlikeSrcNodeImpl ;
// })() ;

















