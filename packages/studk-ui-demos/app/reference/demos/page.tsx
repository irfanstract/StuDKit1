









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
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  useIntervalEffect ,
  useIntervalScan ,
  useMutableRefObjState ,
  useRefState ,
} from "studk-ui/src/meta/react-dom/ovc-util.tsx" ;

import {
  WithElementBoundingBoxHighlightingC,
  WithOvcLevelleRefGoodiesC,
  WithOverlaySupportC,
} from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;

export default function App()
{
  ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          Demos Of `studk-ui`
        </span>
      ) ,
      children: (
        <div>
          <p>
            Long Text Doc With Graphical Overlays
          </p>
          { 0 && <LDCWGOC /> }
          { 0 && (
            <AudioNodeBeepDemo />
          ) }
          { (
            <DiscogrDemoC />
          ) }
        </div>
      ) ,
    })
  ) ;
} ;

import LDCWGOC from "@/components/spcl/longTextDocWithGraphicalOverlaysDemo"; ;

import TbmcDemoImpl from "studk-ui/src/tabularUi/reactjs/tbmcdemo.tsx" ;

function TbmcDemo()
{
  return <TbmcDemoImpl /> ;
  return <div /> ;
}

import AudioNodeBeepDemiImpl from "@/components/spcl/rAudioNodeCtxBeepDemo"; ;

function AudioNodeBeepDemo()
{
  return <AudioNodeBeepDemiImpl /> ;
  return <div /> ;
}

import { DiscogrDemoC as DiscogrDemoImpl, } from "@/components/spcl/spHitsMeAppDiscogrDemo"; ;

function DiscogrDemoC() {
  return (
    <DiscogrDemoImpl />
  ) ;
}











