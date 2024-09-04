
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;






export function describeComponent(...[a] : [(...args: [] ) => React.ReactElement] ): React.FC ;
export function describeComponent<Props extends {}>(...[a] : [(...args: [props?: Props] ) => React.ReactElement] ): React.FunctionComponent<Props | {} > ;
export function describeComponent<Props extends {}>(...[a] : [(...args: [props: Props] ) => React.ReactElement] ): React.FC<Props> ;
export function describeComponent<
  Props extends {},
  const C extends (
    | React.ElementType<Props, keyof React.JSX.IntrinsicElements>
    | React.JSXElementConstructor<Props>
  )
  ,
>(...[a] : [C ] ): C ;
export function describeComponent<Props extends {}>(...[a] : [(...args: [props?: Props] ) => React.ReactElement] )
{
  return a ;
}




export function getSpaceSeparatedClassNameList(s: SSCN_OR_FUNCTION<Iterable<string> > ) : string ;
export function getSpaceSeparatedClassNameList(s: SSCN_OR_FUNCTION<Iterable<string> > )
{
  const s1 = (
    [...(typeof s === "function" ? s : (() => s ) )() ]
  ) ;
  return (
    s1
    // .filter(e => (
    //   true
    // ))
    .join(" ")
  ) ;
}

export {
  /** @deprecated this is alias of {@link getSpaceSeparatedClassNameList}. */
  getSpaceSeparatedClassNameList as mkClasses ,
} ;

type SSCN_OR_FUNCTION<R> = R | (() => R) ;









