









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
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'; ;






;

import {
  FFmpeg as FFmp ,
} from "@ffmpeg/ffmpeg" ;

import ffmpCoreJsUrl from "studk-ui-iavcodecs/src/StudkFfConvCores/ffmpeg-core.js.url.mjs" ;
import ffmpCoreWmUrl from "studk-ui-iavcodecs/src/StudkFfConvCores/ffmpeg-core.wasm.url.mjs" ;







export const createFfConv = (
  function ()
  {
    const ap = new FFmp() ;
    const whenApLoaded = (
      ap.load({
        coreURL: ffmpCoreJsUrl ,
        wasmURL: ffmpCoreWmUrl ,
      })
    ) ;
    const whenApReady = (
      whenApLoaded
    ) ;
    return [ap, {
      ap ,
      whenApReady ,
      whenApLoaded ,
    }] as const ;
  }
) ;










