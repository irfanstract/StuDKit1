
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

import type {

  AllOrNeither,
  ConformOrNever, 
  EitherOneProp,

  // PartializeOptionsConditionally ,
  // PartializeOptionsConditionallyAndRequifyIfFalse ,

  // MayOptRecord ,
  // MayOptRecordRevalue ,

} from "../util-recordtypes" ;

import {
  once1 ,
  L ,
  inspect ,
  parseUrl ,
  Dispatch ,
} from "./util-alt" ;




import Path = require("node:path") ;

import { fileURLToPath, pathToFileURL, } from 'node:url';

import {
  readFileSync,
  statSync,
} from 'node:fs';

import NativeFs = require("node:fs") ;

export {
  //
  fileURLToPath ,
  pathToFileURL ,
  Path ,
} ;

export {
  //
  readFileSync ,
  statSync ,
  NativeFs ,
} ;





import Express = require("express") ;

import {
  analyseRphrc ,
} from "./base-ejs" ;

const getEnclosingUrlInfo = (

  function (...[e]: [e: Express.Request])
  {
    return analyseRphrc({ invokingRequestEvt: e, }) ;
  }
) ;

export {
  Express ,
  analyseRphrc ,
  getEnclosingUrlInfo ,
} ;

import TsNode = require("../index") ;

const allTscSupportedExtsLowercased = (
  utilReiterated(function* () {
    for (const esmNess of ["", "C", "M"] )
    for (const allowJJsx of [false, true] )
    for (const dialectId of ["J", "T"] )
      yield (
        ("" + esmNess + ("" + dialectId + "S" ) + (allowJJsx ? "X" : "" ) )
        .toLowerCase()
      ) ;
  })
) ;

;
import TsNodeEb = require("../eb") ;

export {
  TsNode ,
  allTscSupportedExtsLowercased ,
  TsNodeEb ,
} ;

import {
  getMimeTypeFromShortName ,
} from "../../dist-raw/MimeTypeFromFileName.cjs" ;

export {
  getMimeTypeFromShortName ,
} ;



import React = require('react');
/**
 * `createPortal` only exist in `react-dom`, doesn't exist in `react`
 * 
 */
import ReactDOM = require('react-dom');

/**
 * `renderToPipeableStream` only exist in `ReactDOMServer` (`react-dom/server`).
 * 
 * sidenote: we can't import `react-dom/client` atthispoint
 * 
 */
import ReactDOMServer = require('react-dom/server');



export {
  React ,
  ReactDOM,
  ReactDOMServer ,
} ;

;





import {
  XMapperImpl ,
  XWhitelistOrBlacklistImpl ,
} from "./generic-mapper" ;

export {
  XMapperImpl ,
  XWhitelistOrBlacklistImpl ,
} ;





;
















