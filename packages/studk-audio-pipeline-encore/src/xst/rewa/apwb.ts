





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

export abstract class RewaicWaveTableDesc {
  protected constructor() {}
}

export namespace RewaicWaveTableDesc
{ {} }

export namespace RewaicWaveTableDesc
{

  export class ForWaveTable extends RewaicWaveTableDesc
  {
    constructor (protected d: PeriodicWave)
    { super() ; }
  }

  export class ForWaveSpan extends RewaicWaveTableDesc
  {
    constructor (protected d: AudioBuffer )
    { super() ; }
  }

}














