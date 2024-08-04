





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

import {
  copyOfWMonoF ,
  copyOfWAudioBuffer ,
} from "studk-audio-pipeline-common/src/fwCore/domAudioApiHelpers/AudioBufferCopyOf" ;

;




;

/**
 * immutable representation of audio data.
 * 
 */
abstract class RewaicWaveTableDesc {
  protected constructor() {}
}

namespace RewaicWaveTableDesc
{ {} }

namespace RewaicWaveTableDesc
{

  /**
   * immutable representation of PCM audio data.
   * 
   * and yay, we can construct {@link AudioBuffer}s without a {@link BaseAudioContext }
   * 
   */
  export class ForPcmStart extends
  RewaicWaveTableDesc
  {

    /**
     * a {@link ForPcmStart } with sample taken from given source.
     * 
     * to achieve infinite-length sample,
     * leave {@link durationInSecs} unset, or set to  {@link Number.POSITIVE_INFINITY}.
     * 
     */
    static fromAudioSample(...a : (
      ArgsWithOptions<[
        d: (
          | AudioBuffer
          | (AudioBufferOptions & { readonly data: Float32Array, } )
        ),
      ], {
        durationInSecs?: number ,
      }>
    ) )
    : RewaicWaveTableDesc.ForPcmStart
    {
      const [
        d,
        { durationInSecs = Number.POSITIVE_INFINITY, } = {} ,
      ] = a ;

      if (!(d instanceof AudioBuffer ) ) {
        return (
          this.fromWAudioBuffer((
            copyOfWMonoF(d, d.data, )
          ) , {
            durationInSecs,
          } )
        ) ;
      }

      return (
        this.fromWAudioBuffer(d, {
          durationInSecs,
        } )
      ) ;
    }

    /**
     * a {@link ForPcmStart } which
     * is a copy of the specified {@link AudioBuffer }
     * 
     * by default {@link durationInSecs} will be set to the given src's `duration` ;
     * to achieve infinite-length instance
     * set {@link durationInSecs} to  {@link Number.POSITIVE_INFINITY}.
     * 
     */
    static fromWAudioBuffer (...[d, { durationInSecs = d.duration, } = {} ] : (
      ArgsWithOptions<[d: AudioBuffer, ], {
        durationInSecs?: number ,
      }>
    ) )
    {

      return (
        new RewaicWaveTableDesc.ForPcmStart((
          copyOfWAudioBuffer(d)
        ) , durationInSecs )
      ) ;
    }

    /**
     * private constructor.
     * does not independentise storage, so
     * changes to the given buffer will be visible for all resulting instances.
     * 
     */
    private constructor (
      protected readonly bufr : AudioBuffer ,
      public    readonly durationInSecs : number ,
    )
    {
      super() ;

    }

  }

}

export {
  RewaicWaveTableDesc ,
} ;














