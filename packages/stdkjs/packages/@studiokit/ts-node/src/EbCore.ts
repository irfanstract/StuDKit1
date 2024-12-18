




/// <reference lib="ES2022" />
/// <reference lib="DOM" />



import { builtinModules as builtinModulesListed0, Module } from 'node:module';
import * as util from 'node:util';

import assert = require('node:assert');
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
  Immutable,
  type ArgsWithOptions, 
  AtLeastEitherProp,
} from './util';

import {
  MockBlob ,
} from "./rt/EbMockBlob" ;

import {
  builtinModules ,
  builtinModulesListed ,
  // builtinModulesListed0 ,
} from "./rt/BuiltinModules" ;

import { createRequire, } from 'node:module';

import * as VM from "node:vm" ;

import {
  newRealm ,
} from "./rt/Realms" ;

import type * as _sourceMapSupport from '@cspotcode/source-map-support';
import { BaseError } from 'make-error';
import type * as _ts from 'typescript';

import type { Transpiler, TranspilerFactory } from './transpilers/types';

interface WhenImportantAssumedActualFileNameExtProps
{
  readonly fileExt: string ;
}

interface WhenImportantAssumedActualSrcFilePathInfoProps
{
  readonly assumedSrcPath : string,
}

interface WhenImportantEsmImportAttribsProps
{
  readonly esmImportAttribs: ImportAttributes ;
}

import {
  SupportedEsmImportAttribProps ,
  compactStringifyImportAttribs ,
  SupportedImportConfig ,
} from "./rt/EbSupportedEsmImportAttribProps" ;

export {

  //
  type WhenImportantAssumedActualFileNameExtProps ,
  type WhenImportantAssumedActualSrcFilePathInfoProps ,

  type WhenImportantEsmImportAttribsProps ,
  SupportedEsmImportAttribProps ,
  compactStringifyImportAttribs ,
  SupportedImportConfig ,

};

import { relative, basename, extname, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync, statSync, } from 'node:fs';

const getFileNameExt = (

  // assumedSrcPath.match(/(\.(\w+))$/)?.[1]
  (...[assumedSrcPath]: [path: string]) => (
    assumedSrcPath.match(/(\.(\w+))$/)?.[1]
  )
) ;

export {

  getFileNameExt ,

  fileURLToPath,
  pathToFileURL ,
  readFileSync ,
  statSync,

} ;






interface ExportedValueHandler<out ReturnVal = any> {

  /**
   * select
   * which - of those -
   * to be the final return-value
   * 
   */
  (vexport: any, originalExports: object, module: NodeJS.Module): ReturnVal ;

}

interface EbPickFromExportedProps<out ReturnVal = unknown> extends Extract<{

  /**
   * specify
   * which - of those -
   * to return
   * 
   */
  pickFromExporteds ?: ExportedValueHandler<ReturnVal> | null,

} , any > {}

/**
 * these two methods
 * handle found {@link _ts.Expression Expr(s) }
 * 
 */
interface OndpeRProps<out R>
{

  //
  onNewKnownPath : (value: string) => R ,
  onNewDynamicPathExpr : (expr: _ts.Expression) => R ,

}

interface OndpeProps extends OndpeRProps<void> {}

interface EbAaniAptProps extends Extract<{

  /**
   * if `true`, then
   * we'll unconditionally avoid the native `require`-or-`import`, irrespective of these confnding props,
   * which may be essential to avoid "bugs" (quirks) with the native support and to implement our config-dictated behvs
   * 
   */
  alwaysAvoidNativeImport?: boolean | null,

  //
  /**
   * try to
   * pre-list and pre-bundle as much 'import'-ed module(s) as trivial,
   * possibly extended by additional config(s)
   * 
   */
  alwaysPreTranspile?: boolean | null,

} , any > {}

/**
 * 
 * 
 * 
 */
interface OAlwaysPreTranspileOptProps
{

  //
  readonly oAlwaysPreTranspile: boolean,

}

export {

  type ExportedValueHandler ,
  type EbPickFromExportedProps ,

  type OndpeRProps ,
  /** @deprecated please Dealias. */
  type OndpeProps ,

  type EbAaniAptProps ,
  type OAlwaysPreTranspileOptProps ,

} ;

;












