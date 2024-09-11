




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
  ArgsWithOptions, 
  RequiredPartially,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;

import type {
  // ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from '#currentPkg/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/meta/react/dbc.tsx'; ;

// import Link from "next/link" ;







;

export function describeSvgElement(...[a] : [e: React.ReactElement] )
{
  return a ;
}

export function describeBlockLvlSemanticSvgApp(...[{ viewBox, }, c, {} = {} ] : (
  ArgsWithOptions<(
    [...(ArgsWithOptions<[], (
      { viewBox: Required<IdealSvgProps>["viewBox"] }
    )>) , children: React.ReactElement]
  ), {}>
) )
{
  return (
    <BlockLvlSvgC
    {...{
      viewBox,
      children: c ,
      // preserveAspectRatio: "" ,
    }}
    />
  ) ;
}

export function describeInlineLvlSemanticSvgApp(...[{ viewBox, }, c, {} = {} ] : (
  ArgsWithOptions<(
    [...(ArgsWithOptions<[], (
      { viewBox: Required<IdealSvgProps>["viewBox"] }
    )>) , children: React.ReactElement]
  ), {}>
) )
{
  return (
    <InlineLvlSvgC
    {...{
      viewBox,
      children: c ,
      // preserveAspectRatio: "" ,
    }}
    />
  ) ;
}

interface IdealSvgProps extends RequiredPartially<JSX.IntrinsicElements["svg"], "viewBox" >
{}

export const BlockLvlSvgC = (
  describeComponent(function BlockLvlSvgCImpl ({ style, ...remProps } : IdealSvgProps ) {
    return (
      <InlineLvlSvgC
      style={{
        display: `block`,
        minWidth : `3em`,
        minHeight: `3em`,
        ...(style),
      }}
      {...remProps }
      />
    ) ;
  } )
) ;

export const InlineLvlSvgC = (
  describeComponent(function InlineLvlSvgCImpl ({
    children: c ,
    style: {
      // width: w,
      // height: h,
      ...s
    } = {},
    ...remProps
  } : IdealSvgProps ) {
    return (
      <span
      className=' '
      style={{
        //
        display: "inline grid",
        position: "relative",
        minWidth: `1em`,
        minHeight: `1em`,
        contain: `size`,
        ...s
      }}
      children={(
        <svg
        className=' '
        children={c}
        // preserveAspectRatio='none'
        style={{
          height: `100%`,
          // position: "absolute",
          width: `100%`,
        }}
        {...remProps}
        />
      )}
      />
    ) ;
  })
) ;












