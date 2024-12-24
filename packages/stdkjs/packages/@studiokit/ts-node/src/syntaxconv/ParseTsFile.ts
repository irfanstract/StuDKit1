




import { relative, basename, extname, dirname, join } from 'path';
import { builtinModules, Module } from 'node:module';
import * as util from 'util';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';

import { BaseError } from 'make-error';
import * as _ts from 'typescript';

import assert = require('assert');
import {
  cachedLookup,
  createProjectLocalResolveHelper,
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  normalizeSlashes,
  once,
  parse,
  ProjectLocalResolveHelper,
  utilReiterated,
  split,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
} from './util';










// import type * as EB from "../eb" ;

// const parseTsFileEb = (

//   (...[code, { fileExt, assumedSrcPath = "<repl>", }] : Parameters<EB.EbTranslateInlineScriptIntoCjs>) => (
//     _ts.createSourceFile(assumedSrcPath, code , {
//       languageVersion: _ts.ScriptTarget.ESNext
//       ,
//     } , true , (
//       (() => {
//         const isJsxTagsEnab = fileExt.toLowerCase().endsWith("x") ;
//         const isTsFeatsEnab = fileExt.toLowerCase().includes("t") ;
//         const isEsFeatsEnab = fileExt.toLowerCase().includes("j") ;
//         return (
//           isTsFeatsEnab ?
//           (
//             isJsxTagsEnab ? _ts.ScriptKind.TSX :
//             _ts.ScriptKind.TS
//           )
//           :
//           isEsFeatsEnab ?
//           (
//             _ts.ScriptKind.JSX
//           )
//           :
//           undefined
//         ) ;
//       })()
//     ) )
//   )
// ) ;


// export {
//   parseTsFileEb ,
// } ;













