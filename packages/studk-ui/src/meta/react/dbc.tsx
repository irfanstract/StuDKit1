



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

export { Span, Button, } ;

const Span = (
  describeComponent(function SpanC({ onClick: href, ...prp } : (Omit<EffectiveXButtonProps, "inline" > & { } ) ) {
    return (
      <Button
      inline
      {...prp}
      onClick={href ?? null }
      />
    ) ;
  })
) ;

type EffectiveXButtonProps = (
  React.ComponentPropsWithoutRef<typeof Button>
) ;

const Button = (
  // ☺☘⚾❌☑⛲⚛⛰♏☐♐❣❤❇→♠
  describeComponent(function ButtonC({ inline: asInline = false, children: headlineArg, onClick: hrefArg, className: cn = "", ...prp } : (
    (Omit<React.ComponentPropsWithoutRef<"button">, `on${string}` > )
    &
    { inline ?: boolean ; onClick : Parameters<typeof translateCommonJsxAction>[0] ; }
  ) ) {
    const headline = (
      headlineArg
    ) ;
    const inlinenessClassName = (
      asInline ? "studk-ui-dbc-subsntcspan" : "studk-ui-dbc-standalonespan"
    ) ;
    const hrefAc = (
      translateCommonJsxAction(hrefArg )
    ) ;
    return (
      (hrefAc instanceof UrlAction) ?
      (
        <a
        className={`studk-ui-dbca ${inlinenessClassName } ${cn}`}
        children={headline}
        href={hrefAc.href}
        target='_blank'
        {...prp}
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
        {...prp}
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
        {...prp}
        />
      )
      :
      <span
      className={`studk-ui-dbca ${inlinenessClassName } ${cn}`}
      children={headline}
      {...prp}
      />
    ) ;
  })
) ;









