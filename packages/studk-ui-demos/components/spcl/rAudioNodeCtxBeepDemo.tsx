









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
  random,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






;

import * as React from "react" ;






import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  describeHeadlinedArticle ,
  describeWorksheet ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  Span ,
  Button ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui/src/meta/react-dom/ovc-util.tsx" ;

import {
  WithElementBoundingBoxHighlightingC,
  WithOvcLevelleGoodiesC ,
} from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;

import {
  useLiveAudioNodeCtxRefState ,
  getLiveAudioNodeCtx ,
} from "studk-ui/src/templating/xst/ctxStacks/rewaInReactJs.tsx" ;

import grandPiano from "studk-audio-pipeline-encore/src/xst/reWaLive/stdSamples/grandPiano.tsx" ;

function createPreferredDest(...[ctx]: [BaseAudioContext])
: AudioNode
{
  ;
  const nd0 = ctx.destination ;

  const nd1 = new GainNode(ctx) ;
  nd1.connect(nd0);

  const nd2 = new DelayNode(ctx, { delayTime: 0.05 } ) ;
  const nd3 = new GainNode(ctx, { gain: 2 ** -3 } ) ;
  nd2.connect(nd3) ;

  nd1.connect(nd2) ;
  nd3.connect(nd1) ;

  return nd1 ;
}

function emitBeep(...[aCtx]: [BaseAudioContext])
{
  const nd0 = createPreferredDest(aCtx) ;
  
  const nd1 = new GainNode(aCtx, { gain: 2 ** -3 } ) ;
  nd1.connect(nd0) ;

  const nd2 = new OscillatorNode(aCtx, { } ) ;
  nd2.start(aCtx.currentTime) ;
  nd2.stop(aCtx.currentTime + 0.5 ) ;
}

function emitGrandPianoDang(...[aCtx, i]: [BaseAudioContext, i: number])
{
  const nd0 = createPreferredDest(aCtx) ;
  
  grandPiano.playOn(nd0, { amp: 2 ** -3, f: ((i: number) => ((2 ** (i / 12) ) * 220 ))(i), duration: 20, } ) ;
}

function renderASec(...[aCtx]: [BaseAudioContext])
{

  return (
    <div>
      <p>
        Audio Activated!
      </p>
      <p>
        <Button onClick={(e) => { emitBeep(aCtx) ; } }>
          Beep
        </Button>
      </p>
      <p>
        <Span onClick={(e) => { emitGrandPianoDang(aCtx, 12) ; } }>
          Grand Piano Dang
        </Span>
        <span
        style={{
          display: "grid",
          gridTemplate: `"a s d f g h z x c v b n" ` ,
        }}
        >
          { (
            util.range(-12, 69)
            .map(i => (
              <React.Fragment
              key={`key ${i}` }
              children={(
                <Button onClick={(e) => { emitGrandPianoDang(aCtx, -24 + i) ; } }>
                  {i} {}
                  (<code>{(["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab"] as const)[(120000 + i) % 12 ] }</code>)
                </Button>
              )}
              />
            ))
          ) }
        </span>
      </p>
    </div>
  ) ;
}

export default function RAudioNodeCtxBeepDemoAppImpl()
{
  ;

  const [aCtx, initACtx, ] = useLiveAudioNodeCtxRefState() ;

  const aSec = (
    aCtx ?
    renderASec(aCtx)
    : (
      <p>
      <Button onClick={(e) => initACtx(e.nativeEvent) }>
        Activate Ctx
      </Button>
      </p>
    )
  ) ;

  return (
    describeHeadlinedArticle({
      heading: (
        <span>
          Demos Of `studk-ui`
        </span>
      ) ,
      children: (
        <div>
          <p>
            The packages we're developing here in this monorepo
            are tried out in these demos.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
            The packages we're developing here in this monorepo
            are tried out in these demos.
          </p>
          <p>
            The packages we're developing here in this monorepo
            are tried out in these demos.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
            The packages we're developing here in this monorepo
            are tried out in these demos.
          </p>
          { aSec }
        </div>
      ) ,
    })
  ) ;
} ;

















