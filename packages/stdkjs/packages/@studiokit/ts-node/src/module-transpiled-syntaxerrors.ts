






import { relative, basename, extname, dirname, join } from 'node:path';
import { builtinModules, Module } from 'node:module';
import * as util from 'node:util';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';

import type * as _sourceMapSupport from '@cspotcode/source-map-support';
import { BaseError } from 'make-error';
import * as _ts from 'typescript';

import type { Transpiler, TranspilerFactory } from './transpilers/types';
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
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
} from './util';
import { findAndReadConfig, loadCompiler } from './configuration';
import type { TSCommon, TSInternal } from './ts-compiler-types';
import { createModuleTypeClassifier, ModuleTypeClassifier } from './module-type-classifier';
import { createResolverFunctions } from './resolver-functions';
import type { createEsmHooks as createEsmHooksFn } from './esm';
import { installCommonjsResolveHooksIfNecessary, ModuleConstructorWithInternals } from './cjs-resolve-hooks';
import { classifyModule } from './node-module-type-classifier';
import type * as _nodeInternalModulesEsmResolve from '../dist-raw/node-internal-modules-esm-resolve';
import type * as _nodeInternalModulesEsmGetFormat from '../dist-raw/node-internal-modules-esm-get_format';
import type * as _nodeInternalModulesCjsLoader from '../dist-raw/node-internal-modules-cjs-loader';
import { Extensions, getExtensions } from './file-extensions';
import { createTsTranspileModule } from './ts-transpile-module';
import { assertScriptCanLoadAsCJS } from '../dist-raw/node-internal-modules-cjs-loader';

const stripShebangIfPresent = (

  function (...[outCode]: [code: string])
  : string
  {
    return (
      outCode
      .split(/\r?\n/)
      .filter((ln, i) => {
        if (i === 0 && ln.startsWith("#!") ) {
          return false ;
        }
        return ln ;
      })
      .join("\r\n")
    ) ;
  }
) ;

export {
  stripShebangIfPresent ,
} ;

const isParseableAsCjs = (

  (...[code] : [code: string]): boolean => {
    C : {
      ;
      try {
        new Function(stripShebangIfPresent(code) ) ;
        return true ;
      } catch (z) {
        /* hopefully a SyntaxError */
        if ((z instanceof Error) && isSyntaxErrorUnexpectedToken(z) ) {
          break C ;
        }
        throw z ;
      }
    }

    {
      /** check CSP */
      new Function(` `) ;

      return false ;
    }
  }
) ;

const checkParseableAsCjs = (

  function (...[outCode, { assumedSrcPath, sfe, }]: (
    ArgsWithOptions<[outCode: string], {
      assumedSrcPath: string,
      sfe: string,
    }>
  ))
  {
    ;
    try {
      new Function(outCode) ;
    } catch (z) {
      const beingUnderCspRestriction = (
        isUnderCspNoEvalsPolicy()
      ) ;
      const dueToSyntaxError = !beingUnderCspRestriction ;
      throw (
        new TypeError((
          `failed to construct Function (${String(z) }) ${(
            beingUnderCspRestriction ? `due to CSP restriction` :
            dueToSyntaxError ? `due to syntax error` :
            ``
          ) }, check your config!! ${util.inspect({ assumedSrcPath, sfe, }, undefined, undefined, true ) }`
        ), z )
      ) ;
    }
  }
) ;

const isSyntaxErrorUnexpectedToken = (

  function (...[z] : [Error]) {
    ;
    /* hopefully a SyntaxError */
    if ((
      (z instanceof Error)
      && (z instanceof SyntaxError)
      &&
      String(z).match(/^SyntaxError\b/)
    )) {
      return true ;
    }
    return false ;
  }
) ;

export {

  isSyntaxErrorUnexpectedToken ,

  /** @deprecated alias of {@link isParseableAsCjs} */
  isParseableAsCjs as isValidCjs ,
  isParseableAsCjs ,
  checkParseableAsCjs ,

} ;

// import {
// } from "./esmToCjs" ;










