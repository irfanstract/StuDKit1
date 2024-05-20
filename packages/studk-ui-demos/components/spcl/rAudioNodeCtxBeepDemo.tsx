









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
} from 'studk-ui/src/meta/react/dbc.tsx'; ;

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

function emitBeep(...[aCtx]: [BaseAudioContext])
{
  const nd0 = aCtx.destination ;
  
  const nd1 = new GainNode(aCtx, { gain: 2 ** -3 } ) ;
  nd1.connect(nd0) ;

  const nd2 = new OscillatorNode(aCtx, { } ) ;
  nd2.start(aCtx.currentTime) ;
  nd2.stop(aCtx.currentTime + 0.5 ) ;
}

function emitGrandPianoDang(...[aCtx]: [BaseAudioContext])
{
  const nd0 = aCtx.destination ;
  
  grandPiano.playOn(nd0, { amp: 2 ** -3, } ) ;
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
        <Button onClick={(e) => { emitGrandPianoDang(aCtx) ; } }>
          Grand Piano Dang
        </Button>
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

















