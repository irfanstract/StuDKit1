





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
} from "studk-ui/src/fwCore/utility-functions-rewa.ts" ;







const getLiveAudioNodeCtx = (
  util.L.once((x: InputEvent | PointerEvent ) => {
    const c = new AudioContext({  }) ;
    c.resume() ;
    return c ;
  } )
) ;

export {
  getLiveAudioNodeCtx ,
  getLiveAudioNodeCtx as getLiveAudioDocument ,
} ;











