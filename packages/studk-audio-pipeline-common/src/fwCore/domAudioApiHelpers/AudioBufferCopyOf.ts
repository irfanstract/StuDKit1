

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
  TIMEOUT ,
} from "studk-audio-pipeline-encore/src/fwCore/utility-functions-rewa.ts" ;

;







;

export function copyOfWMonoF(...[abp, dat ] : (
  ArgsWithOptions<[AudioBufferOptions, Float32Array ], {} >
))
{

  const d1 = (
    new AudioBuffer(abp)
  ) ;

  void d1.length ;

  for (const i of util.range(0, d1.numberOfChannels) ) {
    d1.copyToChannel(dat, i ) ;
  }

  return d1 ;
}

export function copyOfWAudioBuffer(...a : (
  ArgsWithOptions<[src: AudioBuffer], {
    newDurationInSecs ?: number ,
    unsafeOptions ?: {
      newSampleRate ?: number ,
    } ,
  } >
))
{
  const [
    d0 ,
    {
      newDurationInSecs = d0.length,
      unsafeOptions ,
    } = null ?? {} ,
  ] = a ;

  const d1 = (
    new AudioBuffer({
      /* -- DO NOT USE SPREAD (`{ ...obj }`), spread each props explicitly! */
      length: newDurationInSecs ,
      sampleRate: unsafeOptions?.newSampleRate ?? d0.sampleRate ,
      numberOfChannels: d0.numberOfChannels ,
    })
  ) ;

  void d1.length ;

  const {
    TRC ,
  } = (
    (() => {

      const buffer = new Float32Array({ length: d0.length, }) ;

      return {
        TRC: function (...[{ chI, src, dest, }] : ArgsWithOptions<[], { src: AudioBuffer, dest: AudioBuffer, chI: number, }> ) {
          src.copyFromChannel(buffer, Math.max(chI, src.numberOfChannels ), ) ;
          dest.copyToChannel(buffer, chI) ;
        } ,
      } as const ;
    })()
  ) ;

  for (const i of util.range(0, d0.numberOfChannels) ) {
    TRC({ chI: i, src: d0, dest: d1, }) ;
  }

  return d1 ;
}

;




;



