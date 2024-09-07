





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

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
  ObjectFromEntry, 
  RecordValue,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;

import type {
  ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;






import * as React from "react" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;





;

import {
  getLiveAudioNodeCtx ,
} from "./rewa.tsx" ;

function useLiveAudioNodeCtxRefState()
: (
  /* discourage calling it more than once */
  (
    | (readonly [null, React.Dispatch<InputEvent | PointerEvent>] )
    | (readonly [AudioContext, (...s: never) => unknown ] )
  )
)
{
  const [s, activate] = (
    React.useReducer<React.Reducer<ReturnType<typeof getLiveAudioNodeCtx> | null , InputEvent | PointerEvent > >((...[x, e] ) => (
      /* be prepared being called more than once */
      x
      ?? getLiveAudioNodeCtx(e)
    ), null )
  ) ;
  return [s, activate] as const ;
}

export {
  useLiveAudioNodeCtxRefState ,
  getLiveAudioNodeCtx ,
} ;











