



// /// <reference lib="ES2022" />
/// <reference lib="DOM" />





import {
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  assert ,
  once,
  parse,
  ProjectLocalResolveHelper,
  utilReiterated,
  split,
  resolveUrl ,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
  dropSearchParamAndHash,
  mutationallyTransformUrl,
} from '../util';

import {
  once1 ,
  L ,
  inspect ,
  parseUrl ,
  Dispatch ,
} from "./util-alt" ;

import type {

  AllOrNeither,
  ConformOrNever, 
  EitherOneProp,

  // PartializeOptionsConditionally ,
  // PartializeOptionsConditionallyAndRequifyIfFalse ,

  // MayOptRecord ,
  // MayOptRecordRevalue ,

} from "../util-recordtypes" ;




;

import {
  TsNode ,
  allTscSupportedExtsLowercased ,
  TsNodeEb ,
} from "./util-ws" ;

import {
  React ,
  ReactDOM ,
  ReactDOMServer ,
} from "./util-ws" ;

import {
  fileURLToPath ,
  pathToFileURL ,
  Path ,
  NativeFs,
  readFileSync ,
  statSync ,
} from "./util-ws" ;

import {
  getMimeTypeFromShortName ,
  Express ,
  analyseRphrc ,
  getEnclosingUrlInfo ,
} from "./util-ws" ;

import {
  XMapperImpl ,
  XWhitelistOrBlacklistImpl ,
} from "./util-ws" ;

;

;




import {
} from 'node:fs';





;

// import {
//   XMapperImpl ,
//   XWhitelistOrBlacklistImpl ,
// } from "./generic-mapper" ;

;





;

import {
  RxEv ,
  tryRxRenderAsJsx ,
} from "./RxEv" ;








function makeSsrEssentialRx()
{

  type AllowPriv<T extends object> = (

    { [k in keyof T]: T[k]; }
  ) ;
  
  /**
   * render a `<html>` containing
   * an arbitrary/uncontrolled content
   * 
   */
  function renderArbitraryContentPage(...[c, { basePathnameHref, titleElem = null, autoRefresh = true, }] : (
    ArgsWithOptions<[React.ReactElement | React.ReactPortal], (
      & AllowPriv<BasePathnameAndTitleProps>
      & AllowPriv<DevSvSpecificProps>
    )>
  ))
  {

    return (

      renderBoxedContentPage((
        React.createElement("body", {}, c )
      ) , {
        basePathnameHref ,
        titleElem ,
        autoRefresh ,
      } )
    ) ;
  }

  ;
  /**
   * render a `<html>` with given `<body>`
   * 
   */
  function renderBoxedContentPage(...[c, { basePathnameHref, titleElem = null, autoRefresh = true }] : (
    ArgsWithOptions<[React.DetailedReactHTMLElement<any, HTMLBodyElement >], (
      & AllowPriv<BasePathnameAndTitleProps>
      & AllowPriv<DevSvSpecificProps>
    )>
  ))
  : React.DetailedReactHTMLElement<any, HTMLHtmlElement >
  {

    return (
      React.createElement("html", {}, (
        React.createElement("head", {}, ...[
          React.createElement("meta", { charSet: "utf-8", } ) ,
          titleElem ,
          React.createElement("base", { href: basePathnameHref, } ) ,
          React.createElement("style", { }, `html { font-family: system-ui; font-weight: 510; }` ) ,
          (
            autoRefresh ?
            ((...[code]: [code: string]) => (

              React.createElement("script", { src: "data:text/javascript," + encodeURIComponent(code) , }, )
            ) )((
              `
              "use strict";
              void (
                setTimeout(() => window.location.reload(), (3 * 60 + 15 ) * 1000 )
                ,
                console.warn(${JSON.stringify(`autoreload scheduled`) })
              ) ;
              `
            ))
            : null
          ) ,
        ] )
      ), (
        c
      ) )
    ) ;
  }

  interface BasePathnameAndTitleProps extends Extract<(
    (
      & { basePathnameHref: string, }
      & { titleElem?: React.ReactElement | null, }
    )
  ), any> {}

  interface DevSvSpecificProps extends Extract<(
    (
      & { autoRefresh ?: boolean, }
    )
  ), any> {}

  return {
    renderArbitraryContentPage ,
    renderBoxedContentPage ,
  } as const ;
}





export {
  makeSsrEssentialRx ,
} ;














