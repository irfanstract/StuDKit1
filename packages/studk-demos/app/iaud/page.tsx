/* a strange directive */
"use client" ;





import * as React from "react" ;

import {
  useResource,
} from "@/components/useEffectAlt";





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

function IAudStudioActiveComp({ c, } : { c: BaseAudioContext, } )
{
  return (
    <div>
      <p>Beep Samples:</p>
      <CAudioBeepSamplesComp c={c} />
      <p>Beep Samples:</p>
      <CAudioBeepSamplesComp c={c} />
      <p>:</p>
      <CEWADComp c={c} />
    </div>
  ) ;
}

import {
  useIAudCtxInit,
} from "@/components/iaudCtxInReactjs";

import {
  iAudCreateAndConnect,
  simuls ,
} from "@/components/iaudCtxInReactjs";

import {
  LinearMetrostatus,
  StudKQuarterMetronomicUnit ,
} from "studk-fwcore/src/ixmw.mjs";

function CAudioBeepSamplesComp({ c, } : { c: BaseAudioContext, } ) {
  ;

  function runBeepBtnAction()
  {
    simuls.BEEP.run(c) ;
  }

  function runBeatDropBtnAction()
  {
    simuls.BEATDROP.run(c) ;
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

import EWAD from "studpresenters/src/EWAD.mjs" ;

function CEWADComp({ c, } : { c: BaseAudioContext, } )
{
  const iewd = (
    useResource(() => (
      console["log"](`initialised`)
      ,
      EWAD({ mtCtx: c, initiallyStart: false, } , ({ metronStat, }) => {
        // TODO
        {
          C :
          {
            if (metronStat.getBarsToRoundedForthBy(StudKQuarterMetronomicUnit.SJUIVE , { boundaryExclusive: true, } ) < 1.05 )
            { break C ; }
            simuls.BASSDRUM.run(c) ;
          }
        }
      } )
    ) , [c] )
  ) ;

  return (
    !!iewd && 
    <div>
      <p>
        <span><code>iewd</code> present.</span>
      </p>
      <button type="button" onClick={() => iewd.setRunning(true) } >
        Resume
      </button>
      <button type="button" onClick={() => iewd.setRunning(false) } >
        Suspend
      </button>
    </div>
  ) ;
}






