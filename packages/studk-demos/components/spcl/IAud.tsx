
/* a strange directive */
"use client" ;




import {
  util,
} from "typexpe-commons/src/common_sv.mjs";





import * as React from "react" ;

import {
  useResource,
} from "@/components/useEffectAlt";

import {
  NativeButton ,
  Button ,
} from "studk-ui/src/meta/react/dbc.tsx" ;
console["log"]({ NativeButton, }) ;

import dynamicComponent from "next/dynamic";

import Link from "next/link";





import {
  pagesConventions,
} from "@/appInternalScripts/appPagesConvention"; ;

export function IAudPage()
{
  ;
  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          StuDK's Audio Pipeline Demo
        </span>
      ) ,
      children: (
        <div>
        <p>
          <i>
            this is StuDK's Audio Pipeline Demo.
            click on the <i>init</i> button to get it started!
          </i>
        </p>
        <studk-card>
          <IAudStudioComp />
          <details>
            <p>
              <em>
                regarding why we need the "init" button:
              </em>
              according to the platform spec
              AudioContext(s) will be paused unless at-least a user gesture has taken place ;
              this means that
              we need an explicit user-done pointer-click to get the engine started.
              yeah
            </p>
          </details>
        </studk-card>
        <p>
          This is
          a demo app
          developed to demonstrate various applets building on StuDK.
          The packages carried by this monorepo
          are put into usage in these demos.
          This is
          a demo app
          developed to demonstrate various applets building on StuDK.
          The packages carried by this monorepo
          are put into usage in these demos.
        </p>
      </div>
      ) ,
    })
  ) ;
} ;




;




function IAudStudioComp()
{
  ;
  const [c, initC ] = useIAudCtxInit() ;

  return c ? (
    <div>
      <p>
      <Button onClick={false} >
        Running
      </Button>
      </p>
      <IAudStudioActiveComp c={c} />
    </div>
  ) : (
    <p>
      <Button onClick={e => initC(e.nativeEvent) } >
        Initialise
      </Button>
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






