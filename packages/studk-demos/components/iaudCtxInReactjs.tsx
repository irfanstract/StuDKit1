





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






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  identity,
  random,
} from "lodash-es" ;





import * as React from "react" ;

import {
  closeResource ,
  useEventAwaitingResourceInitState,
  useResource ,
} from "studk-ui-fwcore/src/reactjs/helpers/UseResourceLikeStudkDemosHadDone" ;








/**
 * returns `[AudioContext | null, React.Dispatch<Event>]`
 * 
 * the callback/function returned as the second item of the returned tuple
 * {@link React.useState will be the same identity across renders}.
 * 
 */
export const useIAudCtxInit = () => (
  useEventAwaitingResourceInitState((e) => {
    return new AudioContext() ;
  })
) ;






export const iAudCreateAndConnect = (
  <T extends AudioNode ,>(...[nd0, GN, c ] : [dest: AudioNode | AudioParam, CN: new (ctx: BaseAudioContext) => T, ctx: BaseAudioContext ] ) => {
    const gn = new GN(c) ;
    identity<{ connect(x: AudioNode | AudioParam): any ; }>(gn).connect(nd0) ;
    return gn ;
  }
) ;





export const simuls = {
  //
  BEEP: (
    DWGN(({ ctx: c, dest: gn, t, }) => {
      ;

      {
        const o = new OscillatorNode(c, { frequency: 440, } ) ;
        o.connect(gn) ;
        o.start(t ) ;
        o.stop (t + 0.5 ) ;
      }
    } )
  ) ,
  BEATDROP: (() => {
    const {
      ampTCoef ,
      pitchTCoef ,
    } = {
      ampTCoef: 1.8 ,
      pitchTCoef: 2.3 ,
    } ;
    return (
      DWGN_DROPLIKESND(({ ctx: c, dest: gn, t, }) => {
        ;
  
        const o = iAudCreateAndConnect(gn, OscillatorNode, c ) ;
        o.start(t ) ;
        o.stop (t + 35.5 ) ;
    
        o.frequency.setValueAtTime((
          (x => ((2 ** (x / 12 ) ) * 55 ) )(7 )
        ) , 0 ) ;
    
        o.detune.setValueAtTime(0, 0 ) ;
        o.detune.setTargetAtTime(-12 * 100 , t, pitchTCoef ) ;
      } , { tCoef: ampTCoef, } )
    ) ;
  } )() ,
  BASSDRUM: (
    DWGN_DROPLIKESND(({ ctx: c, dest: gn, t, }) => {
      ;

      const o = iAudCreateAndConnect(gn, OscillatorNode, c ) ;
      0 && (o.type = "triangle" ) ;
      o.start(t ) ;
      o.stop (t + 35.5 ) ;
  
      o.frequency.setValueAtTime((
        (x => ((2 ** (x / 12 ) ) * 55 ) )(0 )
      ) , 0 ) ;
  
      o.detune.setValueAtTime(0, 0 ) ;
      o.detune.setTargetAtTime(-24 * 100 , t, 2 ) ;
    } , { tCoef: 0.06, } )
  ) ,
} ;

function DWGN<R>(cb: (...args: [{ dest: AudioNode, ctx: BaseAudioContext, t: number, }]) => R )
{
  return {
    run: (c) => {
      ;
      
      const nd0 = c.destination ;
  
      const t = c.currentTime ;
  
      const masterGn = new GainNode(c, { gain: 2 ** -3 } ) ;
      masterGn.connect(nd0) ;
      
      return cb({ ctx: c, dest: masterGn, t, }) ;
    } ,
  } satisfies { run: (...args: [BaseAudioContext]) => any, } ;
}

function DWGN_DROPLIKESND<R>(...[cb, { tCoef: tCoef = 0.5, } = {} ] : [
  (...args: [{ dest: AudioNode, ctx: BaseAudioContext, t: number, }]) => R
  ,
  { tCoef?: number, }?
] )
{
  ;
  return DWGN(({ ctx: c, dest: masterGn, t, }) => {
    ;
    
    const gn = iAudCreateAndConnect(masterGn, GainNode, c) ;
  
    gn.gain.setValueAtTime(3 ** 1, 0 ) ;
    gn.gain.setTargetAtTime(0, t, tCoef * 6 ) ;

    if (1) {
      gn.gain.setTargetAtTime(0, t + tCoef, 0.3 ) ;
    }

    return cb({ ctx: c, dest: gn, t, }) ;
  } ) ;
}








