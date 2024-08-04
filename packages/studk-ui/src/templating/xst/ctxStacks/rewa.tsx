





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
} from "studk-ui-fwcore/src/util/ReWaPkgConvnt.ts" ;







const getLiveAudioNodeCtx = (
  util.L.once((x: InputEvent | PointerEvent ) => {
    const c = new AudioContext({  }) ;
    c.resume() ;
    if (0)
    {
      startProlongedAutomuteBugSensingBeep(c.destination) ;
    }
    return c ;
  } )
) ;

const startProlongedAutomuteBugSensingBeep = (
  function (nd0: AudioNode)
  {
    const ctx = nd0.context ;

    const nd1 = new GainNode(ctx, { gain: 2 ** -6 } ) ;
    nd1.connect(nd0) ;

    const nd2 = new OscillatorNode(ctx, { type: "triangle" } )
    nd2.connect(nd1) ;
    nd2.start() ;
  }
) ;

export {
  getLiveAudioNodeCtx ,
  getLiveAudioNodeCtx as getLiveAudioDocument ,
} ;











