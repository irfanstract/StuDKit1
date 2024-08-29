

/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets just have `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

/**
 * note:
 * since we're not using `tsc` but instead a scanning transpiler, and
 * the import specifier is not exact path, and
 * we're only using it for their `type`s,
 * we need to avoid run-time actual importing, so
 * please don't remove the keywd `type`
 * 
 */
import type {
  ArgsWithOptions ,
  ArgsGetOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;





import {
  describeComponent,
  mkClasses,
} from '#currentPkg/src/meta/react/dec.tsx'; ;

export function describeSvgContent(...[a] : [React.ReactElement] )
{
  return describeSvg({}, a ) ;
}

export function describeSvg(...[{} = {}, c ] : (
  [...(ArgsWithOptions<[], {}>) , children: React.ReactElement]
) )
{
  return (
    <SvgFramedC
    children={c}
    />
  ) ;
}

import "./gec.scss" ;

export { SvgFramedC as Svg, } ;

const SvgFramedC = ({
  children: c ,
  style: {
    // width: w,
    // height: h,
    ...s
  } = {},
  ...remProps
} : JSX.IntrinsicElements["svg"] ) => {
  return (
    <span
    className='studk-ui-gec-sfc-d11'
    children={(
      <svg
      className='studk-ui-gec-sfc-d12'
      children={c}
      preserveAspectRatio='none'
      style={{
        height: `100%`,
        position: "absolute",
        width: `100%`,
      }}
      {...remProps}
      />
    )}
    style={{
      //
      // display: `grid`,
      // display: "block",
      display: "inline-block",
      position: "relative",
      borderRadius: `5%`,
      minWidth: `1em`,
      minHeight: `1em`,
      ...s
    }}
    />
  ) ;
} ;
















