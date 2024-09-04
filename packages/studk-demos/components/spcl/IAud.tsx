
/* a strange directive */
"use client" ;





import * as React from "react" ;

import {
  useResource,
} from "@/components/useEffectAlt";





export function IAudPage()
{
  ;
  const c = (
    <div>
      <h1>
      StuDK's Audio Pipeline Demo
      </h1>
      <p>
        <q>
          This is StuDK's Audio Pipeline Demo.
          Click on the <i>init</i> button to start it play!
        </q>
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





function IAudStudioComp()
{
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
      { 0 && <CEWADComp c={c} /> }
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

function CAudioBeepSamplesComp({ c, } : { c: BaseAudioContext, } )
{
  ;

  function renderSpclClipCard(...[cl, k]: [((typeof simuls) extends infer S ? S[keyof S] : never ) , string ] )
  {
    return (
      //
      <span className="card" title={`Sound '${k }'`} >
        <code>{k}</code> {}
        <button
        children={`Share`}
        title={`Share Sound Clip '${k }'`}
        disabled
        />
        <button
        children={`Play`}
        title={`Play '${k }'`}
        onClick={() => cl.run(c)}
        />
    </span>
    ) ;
  }

  return (
    <div>
      <p>
      <span>
        { Object.entries(simuls).map(([k, cl]) => (
          <React.Fragment key={k}>
            { renderSpclClipCard(cl, k ) }
          </React.Fragment>
        )) }
      </span>
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






