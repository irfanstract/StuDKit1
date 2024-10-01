

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






import {
  React ,
  describeComponent ,
  mkClasses ,
  Button ,
  Span, 
  withExtraSemanticProperties,
  getSpaceSeparatedClassNameList,
} from '#ReactJsBased.ts'; ;

export const describeSvgComponent = (
  describeComponent
) ;

export function describeSvgContent(...[a] : [React.ReactElement] )
{
  return describeSvgContentImpl({}, a ) ;
}

function describeSvgContentImpl(...[{} = {}, c ] : (
  [...(ArgsWithOptions<[], {}>) , children: React.ReactElement]
) )
{
  return (
    <SvgFramedC
    children={c}
    />
  ) ;
}

/**
 * {@link describeSvgContentImpl}
 * 
 * @deprecated
 * 
 */
export const describeSvg = describeSvgContentImpl ;

export const VerbatimSvgC: "svg" = (
  "svg"
) ;

/**
 * an `<svg>` with its intrinsic size.
 * 
 */
export const AtomicSvgC: React.ElementType<JSX.IntrinsicElements["svg"]> = (
  "svg"
) ;

/**
 * an `<svg>` which can be flexibly resized without hassle.
 * 
 */
export const SizeFlexibleSvgC = ({
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

    children={(
      <StretchingSvgC

      children={c}

      // preserveAspectRatio='none'
      style={{
        // height: `100%`,
        // position: "absolute",
        // width: `100%`,
      }}

      {...remProps}

      />
    )}

    style={{
      //
      // display: `grid`,
      // display: "block",
      display: "block",
      position: "relative",
      borderRadius: `5%`,
      minWidth: `1em`,
      minHeight: `1em`,
      ...s
    }}
    />
  ) ;
} ;

/**
 * an `<svg>` which stretches to the parent Element's bounding box
 * 
 */
const StretchingSvgC = ({
  children: c ,
  style: {
    // width: w,
    // height: h,
    ...s
  } = {},
  ...remProps
} : JSX.IntrinsicElements["svg"] ) => {
  return (
    <svg
    // className='studk-ui-gec-sfc-d12'
    children={c}
    preserveAspectRatio='none'
    style={{
      height: `100%`,
      position: "absolute",
      width: `100%`,
      ...s ,
    }}
    {...remProps}
    />
  ) ;
} ;

import "./gec.scss" ;

export { SvgFramedC as Svg, } ;

/**
 * 
 * {@link SvgFramedC}
 * 
 * @deprecated
 * you likely meant {@link VerbatimSvgC} or {@link SizeFlexibleSvgC}.
 * 
 */
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

      withExtraSemanticProperties({
        classNames: ['studk-ui-gec-sfc-d12'] ,
      } , (

        <StretchingSvgC

        children={c}

        // preserveAspectRatio='none'
        style={{
          // height: `100%`,
          // position: "absolute",
          // width: `100%`,
        }}
        {...remProps}

        />
      ) )
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
















