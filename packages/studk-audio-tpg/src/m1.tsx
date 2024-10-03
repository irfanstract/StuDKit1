


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





export default (
  (() => {

    const {
      asConst ,
      assert ,
      iterateNonNull,
      iteratePositives,
      reiterated ,
    } = util ;

    return (
      [
        //
        asConst ,
        assert ,
        iterateNonNull,
        iteratePositives,
        reiterated ,
      ]
      .map(v => String(v) )
      .join("\r\n\r\n")
    ) ;
  })()
) ;







