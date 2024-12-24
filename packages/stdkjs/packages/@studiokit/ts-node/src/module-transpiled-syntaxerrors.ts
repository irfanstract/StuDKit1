






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
      // new Function(` `) ;
      checkCspOk1({ errCon: ReferenceError, }) ;  

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

    return (

      checkParseableAsCjsAlt(outCode, {
        assumedSrcPath ,
        sfe ,

        ifFailing: (z) => {
          ;

          const dueToSyntaxError = (
            (z instanceof Error)
            &&
            isDueToSyntaxError(z)
          ) ;
    
          throw (
            newCpcErrorException({
              assumedSrcPath ,
              sfe,
              dueToSyntaxError,
              originalE: z,
            })
          ) ;
        } ,

      })
    ) ;
  }
) ;

const checkParseableAsCjsAlt = (

  function <const FailRetV>(...cArgs: (
    ArgsWithOptions<[outCode: string], {
      assumedSrcPath: string,
      sfe: string,
      ifFailing: (x: Error) => FailRetV ,
    }>
  ))
  {
    const [outCode, { assumedSrcPath, sfe, ifFailing: icatch, }] = cArgs ;

    checkCspOk1({ errCon: ReferenceError, }) ;

    try {

      /**
       * and immediately return it.
       * can't doo anything else afterwards
       * as that might cause another Exception
       * 
       */
      return (
        new Function(outCode)
      ) ;
    } catch (z) {

      const dueToSyntaxError = (
        (z instanceof Error)
        &&
        isDueToSyntaxError(z)
      ) ;

      if (dueToSyntaxError) {
        return (
          icatch(z)
        ) ;
      }

      throw (
        newCpcErrorException({
          assumedSrcPath ,
          sfe,
          dueToSyntaxError,
          originalE: z,
        })
      ) ;
    }
  }
) ;

const newCpcErrorException = (

    function (...[{ assumedSrcPath, sfe, dueToSyntaxError, originalE: z, }]: (
      ArgsWithOptions<[], (
        & {
          dueToSyntaxError: boolean,
          assumedSrcPath: string,
          sfe: string,
        }
        & ({ originalE: Error , } | { /** @deprecated */ originalE: unknown , } )
      )>
    ))
    {
      ;

      return (
        new TypeError((
          `failed to construct Function (${String(z) }) ${(
            dueToSyntaxError ? `due to syntax error` :
            ``
          ) }; chances are you did some misconfig(s) (eg 'module'? 'jsx'? using wrong file-extension? 'moduleResolution'? 'target'? 'include' and 'exclude'? 'noEmit' or 'emitDeclarationOnly'? 'references'? others maybe?), you need to check/review your config-file for potential issues; or there's something one needs to report up. ${util.inspect({ assumedSrcPath, sfe, }, undefined, undefined, true ) }`
        ), ...(z instanceof Error ? [{ cause: z, }] : []) )
      ) ;
    }
) ;

const isDueToSyntaxError = (

  function (...[z] : [Error]) {
    ;
    /* hopefully a SyntaxError */
    if ((
      ((typeof SyntaxError !== "undefined") && (z instanceof SyntaxError))
      &&
      !(String(z).match(/commonjs\s+module/gui ) )
    )) {
      return true ;
    }
    return false ;
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

const checkCspOk1: (
  (...args: ArgsWithOptions<[], { errCon?: ErrorConstructor, }> ) =>
    void
) = function checkCspOkImpl(...[{ errCon: XError = TypeError, } = {}] )
{

  if (isUnderCspNoEvalsPolicy()) {
    throw new XError(`CSP No-Eval`) ;
  }

}

export {

  isSyntaxErrorUnexpectedToken ,

  /** @deprecated alias of {@link isParseableAsCjs} */
  isParseableAsCjs as isValidCjs ,
  isParseableAsCjs ,
  checkParseableAsCjs ,

} ;

// import {
// } from "./esmToCjs" ;










