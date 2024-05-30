



/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;





import {
  describeComponent,
} from '#currentPkg/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from '#currentPkg/src/meta/react/dhc.tsx'; ;

import {
  SynchronousCallbackAction,
  UrlAction,
  NoOpActionReprImpl,
  DisabledBtnActionReprImpl,
  translateCommonJsxAction,
} from 'studk-ui/src/ui/dbcAc.tsx'; ;





export { NativeButton, } ;
const NativeButton: "button" = (
  "button"
) ;

import "./dbc.scss" ;

export {
  SpanC ,
  SpanC as Span,
  ButtonC,
  ButtonC as Button,
} ;

const SpanC = (
  describeComponent(function SpanC({ onClick: href, ...prp } : (Omit<EffectiveXButtonProps, "inline" > & { } ) ) {
    return (
      <ButtonC
      inline
      {...prp}
      onClick={href ?? null }
      />
    ) ;
  })
) ;

type EffectiveXButtonProps = (
  React.ComponentPropsWithoutRef<typeof ButtonC>
) ;

const useOrTranslateBtnCProps = (
  function ({ inline: asInline = false, children: headlineArg, onClick: hrefArg, className: cn = "", ...otherJsxProps } : (
    IXButtonProps
  ))
  {
    ;
    const headline = (
      headlineArg
    ) ;
    const inlinenessClassName = (
      asInline ? "studk-ui-dbc-subsntcspan" : "studk-ui-dbc-standalonespan"
    ) ;
    const hrefAc = (
      translateCommonJsxAction(hrefArg )
    ) ;
    ;
    const regularInlinePresentation = (
      (hrefAc instanceof UrlAction) ?
      (
        <a
        className={`studk-ui-dbca ${inlinenessClassName } ${cn}`}
        children={headline}
        href={hrefAc.href}
        // target='_blank'
        {...(function (): Partial<JSX.IntrinsicElements["a"] > {
          if (hrefAc.href.match(/^(data|blob|object):/u) ) {
            return { download: "attachment", target: '_blank', } ;
          }
          if (((typeof URL !== "undefined") && new URL(hrefAc.href).origin ) === location?.origin ) {
            return { } ;
          }
          return { target: '_blank' } ;
        })() }
        {...otherJsxProps}
        />
      )
      :
      (hrefAc instanceof SynchronousCallbackAction) ?
      (
        <button
        className={`studk-ui-dbcb ${inlinenessClassName } ${cn}`}
        children={headline}
        type='button'
        onClick={e => hrefAc.runMain(e) }
        {...otherJsxProps}
        />
      )
      :
      (hrefAc instanceof DisabledBtnActionReprImpl) ?
      (
        <button
        className={`studk-ui-dbcb ${inlinenessClassName } ${cn}`}
        children={headline}
        type='button'
        disabled
        {...otherJsxProps}
        />
      )
      :
      <span
      className={`studk-ui-dbca ${inlinenessClassName } ${cn}`}
      children={headline}
      {...otherJsxProps}
      />
    ) ;
    ;
    return {
      asInline ,
      headlineArg ,
      hrefArg ,
      cn ,
      otherJsxProps ,
      headline ,
      inlinenessClassName ,
      hrefAc,
      regularInlinePresentation ,
    } as const ;
  }
) ;

interface IXButtonProps extends Omit<(
  (Omit<React.ComponentPropsWithoutRef<"button">, `on${string}` > )
  &
  { inline ?: boolean ; onClick : Parameters<typeof translateCommonJsxAction>[0] ; }
), never>
{}

const ButtonC = (
  // ☺☘⚾❌☑⛲⚛⛰♏☐♐❣❤❇→♠
  describeComponent(function ButtonC(props : (
    IXButtonProps
  ) ) {
    const {
      regularInlinePresentation ,
    } = useOrTranslateBtnCProps(props) ;
    return regularInlinePresentation ;
  })
) ;









