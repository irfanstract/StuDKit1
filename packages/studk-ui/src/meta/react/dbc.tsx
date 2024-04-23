
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





export { NativeButton, } ;
const NativeButton: "button" = (
  "button"
) ;

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
  describeComponent(function ButtonC({ inline: asInline = false, children: headlineArg, onClick: href, className: cn = "", ...prp } : (
    (Omit<React.ComponentPropsWithoutRef<"button">, `on${string}` > )
    &
    { inline ?: boolean ; onClick : (Required<JSX.IntrinsicElements["a"]>["href"] ) | ((e: React.SyntheticEvent) => void ) | null | false ; }
  ) ) {
    const headline = (
      headlineArg
    ) ;
    const inlinenessClassName = (
      asInline ? "studk-ui-dbci" : "studk-ui-dbcj"
    ) ;
    return (
      (typeof href === "string") ?
      (
        <a
        className={`studk-ui-dbca ${inlinenessClassName } ${cn}`}
        children={headline}
        href={href}
        target='_blank'
        {...prp}
        />
      )
      :
      (typeof href === "function") ?
      (
        <button
        className={`studk-ui-dbcb ${inlinenessClassName } ${cn}`}
        children={headline}
        type='button'
        onClick={e => href(e) }
        {...prp}
        />
      )
      :
      (href === false) ?
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

import "./dbc.css" ;









