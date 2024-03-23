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
  const [c, initC ] = React.useReducer<(...a: [any, Event]) => (AudioContext | null)>((...args) => new AudioContext() , null ) ;

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

function IAudStudioActiveComp({ c, } : { c: BaseAudioContext, } ) {
  ;

  function runBeepBtnAction()
  {
    const gn = new GainNode(c, { gain: 2 ** -3 } ) ;
    gn.connect(c.destination) ;

    {
      const o = new OscillatorNode(c, { frequency: 440, } ) ;
      o.connect(gn) ;
      o.start(c.currentTime ) ;
      o.stop(c.currentTime + 0.5 ) ;
    }
  }

  return (
    <div>
      <p>
      <button type="button" onClick={e => runBeepBtnAction() } >
        Beep
      </button>
      </p>
    </div>
  ) ;
}






