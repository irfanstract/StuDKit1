
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
export function describeComponent<Props extends {}, const C extends React.ElementType<Props, any> >(...[a] : [C ] ): C ;
export function describeComponent<Props extends {}>(...[a] : [(...args: [props?: Props] ) => React.ReactElement] )
{
  return a ;
}




export function mkClasses(s: () => Iterable<string> ) : string ;
export function mkClasses(s: () => Iterable<string> )
{
  return [...s() ].join(" ")
}









