/* a strange directive */
"use client" ;





import * as React from "react" ;





export default function App() {
  ;
  const c = (
    <div>
      <h1>
        IAud
      </h1>
      <p>
        IAud
      </p>
      <IAudStudioComp />
    </div>
  ) ;
  return (
    <div style={{ display: "block flow-root", paddingBlock: "2em 3em", paddingInline: "1em 3em", minBlockSize: "45em" }} >
        { c }
    </div>
  ) ;
} ;




import dynamicComponent from "next/dynamic";

import Link from "next/link";





function IAudStudioComp() {
  ;
  const [c, initC ] = useIAudCtxInit() ;

  return c ? (
    <div>
      <p>
      <button type="button" >Running</button>
      </p>
      <IAudStudioActiveComp c={c} />
    </div>
  ) : (
    <p>
      <button type="button" onClick={e => initC(e.nativeEvent) } >
        Initialise
      </button>
    </p>
  ) ;
}

const useIAudCtxInit = () => {
  ;
  const [c, initC ] = (
    /**
     * remarks:
     * - the way the overload is written - combined with how {@link React.ReducerState } is written -
     *   led to unexpected "type not assignable" issues
     * - coundn't use {@link InputEvent} ; used plain {@link Event} instead
     * 
     */
    (
      React.useReducer<(...a: [any, Event]) => (AudioContext | null)>((...args) => new AudioContext() , null )
    )
  ) ;
  return [c, initC ] satisfies [any, any] ;
} ;

const iAudCreateAndConnect = (
  <T extends AudioNode ,>(...[nd0, GN, c ] : [dest: AudioNode | AudioParam, CN: new (ctx: BaseAudioContext) => T, ctx: BaseAudioContext ] ) => {
    const gn = new GN(c) ;
    gn.connect(nd0) ;
    return gn ;
  }
) ;

function IAudStudioActiveComp({ c, } : { c: BaseAudioContext, } ) {
  ;

  function runBeepBtnAction()
  {
    const gn = new GainNode(c, { gain: 2 ** -3 } ) ;
    gn.connect(c.destination) ;

    const t = c.currentTime ;

    {
      const o = new OscillatorNode(c, { frequency: 440, } ) ;
      o.connect(gn) ;
      o.start(t ) ;
      o.stop (t + 0.5 ) ;
    }
  }

  function runBeatDropBtnAction()
  {
    const nd0 = c.destination ;

    const t = c.currentTime ;

    const masterGn = new GainNode(c, { gain: 2 ** -3 } ) ;
    masterGn.connect(nd0) ;
    
    const gn = iAudCreateAndConnect(masterGn, GainNode, c) ;

    gn.gain.setValueAtTime(3 ** 1, 0 ) ;
    gn.gain.setTargetAtTime(0, t, 3 ) ;

    const o = iAudCreateAndConnect(gn, OscillatorNode, c ) ;
    o.start(t ) ;
    o.stop (t + 35.5 ) ;

    o.frequency.setValueAtTime((
      (x => ((2 ** (x / 12 ) ) * 55 ) )(7 )
    ) , 0 ) ;

    o.detune.setValueAtTime(0, 0 ) ;
    o.detune.setTargetAtTime(-12 * 100 , t, 2 ) ;
  }

  return (
    <div>
      <p>
      <button type="button" onClick={e => runBeepBtnAction() } >
        Beep
      </button>
      <button type="button" onClick={e => runBeatDropBtnAction() } >
        Beat Drop
      </button>
      </p>
    </div>
  ) ;
}






