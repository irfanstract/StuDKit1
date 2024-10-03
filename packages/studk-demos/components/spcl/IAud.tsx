
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
  Button, 
  SpanC,
} from "studk-ui/src/xst/dbc.tsx" ;
console["log"]({ NativeButton, }) ;

import dynamicComponent from "next/dynamic";

import Link from "next/link";





import {
  MustAttachToc,
  pagesConventions,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  ChildrenAndOutlineAndExploring ,
  SpclCurrentlyPathDisplay ,
  AsResettibleC, 
  ActivableStudkCard,
} from "@/appInternalScripts/layoutComponents" ;

export function IAudPage()
{
  ;

  const iascRef = (
    React.useRef<IascImperativeHandleOps>(null)
  ) ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          StuDK's Audio Pipeline Demo
        </span>
      ) ,
      children: (
        <div>
        <MustAttachToc children={(
          <span>
            `Sharing The Audio Samples`
          </span>
        )} />
        <MustAttachToc children={(
          <a
          href="#ShareSomeOfTheseSamples"
          >
            `Sharing The Audio Samples`
          </a>
        )} />
        <MustAttachToc children={(
          <SpanC
          children={`Playing The Audio Sample`}
          onClick={(
            (e) => {
              const c = iascRef.current ;
              if (c) {
                c.scrollIntoView() ;
                c.initC(e.nativeEvent) ;
              }
            }
          ) }
          />
        )} />
        <p>
          <i>
            this is StuDK's Audio Pipeline Demo.
            click on the <i>init</i> button to get it started!
          </i>
        </p>
        <ActivableStudkCard>
          { (
            (() => {
              const c = <IAudStudioComp iehRef={iascRef} /> ;
              return (
                <AsResettibleC children={c} />
              ) ;
            })()
          ) }
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
        </ActivableStudkCard>
        <p>
          this is StuDK's Audio Pipeline Demo.
          click on the <i>init</i> button to get it started!
          this is StuDK's Audio Pipeline Demo.
          click on the <i>init</i> button to get it started!
          <span>St.</span>
          this is StuDK's Audio Pipeline Demo.
          click on the <i>init</i> button to get it started!
        </p>
      </div>
      ) ,
    })
  ) ;
} ;




;




function IAudStudioComp({ iehRef, } : { iehRef ?: React.Ref<IascImperativeHandleOps> } )
{
  ;

  const divRef1 = React.useRef<HTMLDivElement | null>(null) ;

  const [c, initC ] = useIAudCtxInit() ;

  const spclHndle = (
    React.useMemo((): IascImperativeHandleOps => ({
      //
      initC: initC ,
      scrollIntoView: () => {
        const s = divRef1.current?.querySelectorAll("*") ?? [] ;
        (s[1] ?? s[0] )?.scrollIntoView() ;
      } ,
    }) , [
      initC,
      divRef1 ,
    ] )
  );

  React.useImperativeHandle(iehRef, () => spclHndle , [spclHndle] ) ;

  return c ? (
    <div
    ref={divRef1}
    >
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

interface IascImperativeHandleOps {
  readonly initC: React.Dispatch<Event> ,
  readonly scrollIntoView: () => void ,
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
        <Button
        children={`Share`}
        title={`Share Sound Clip '${k }'`}
        onClick={false}
        />
        <Button
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
    ) , [c,] )
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






