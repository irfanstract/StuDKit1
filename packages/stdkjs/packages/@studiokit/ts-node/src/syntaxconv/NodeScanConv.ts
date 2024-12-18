




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
// import { findAndReadConfig, loadCompiler } from './configuration';
// import type { TSCommon, TSInternal } from './ts-compiler-types';
// import { createModuleTypeClassifier, ModuleTypeClassification, ModuleTypeClassifier } from './module-type-classifier';
// import { createResolverFunctions } from './resolver-functions';
// import type { createEsmHooks as createEsmHooksFn } from './esm';
// import { installCommonjsResolveHooksIfNecessary, ModuleConstructorWithInternals } from './cjs-resolve-hooks';
// import { classifyModule } from './node-module-type-classifier';
// import type * as _nodeInternalModulesEsmResolve from '../dist-raw/node-internal-modules-esm-resolve';
// import type * as _nodeInternalModulesEsmGetFormat from '../dist-raw/node-internal-modules-esm-get_format';
// import type * as _nodeInternalModulesCjsLoader from '../dist-raw/node-internal-modules-cjs-loader';
// import { Extensions, getExtensions } from './file-extensions';
// import { createTsTranspileModule } from './ts-transpile-module';
// import {
//   stripShebangIfPresent
// } from './module-transpiled-syntaxerrors';
// import { assertScriptCanLoadAsCJS } from '../dist-raw/node-internal-modules-cjs-loader';

// import {
//   isValidCjs,
//   isParseableAsCjs ,
//   checkParseableAsCjs,
//   isSyntaxErrorUnexpectedToken,
// } from './module-transpiled-syntaxerrors';





/**
 * Scan-And-Transform Contained Node(s).
 * Args When(Ever) To Run `substituteNode` Will Be Prepended With An {@link _ts.EmitHint `EmitHint`} As The 1st Arg.
 * 
 */
const scanTransformNodesEh = (

  (() => {
    ;
  
    /**
     * Utility
     * 
     */
    type DOOR<Xdc extends object, Skb extends boolean > = (
  
      Exclude<
      import("./util-recordtypes").AllOrNeither<Required<Xdc> > ,
      [Skb] extends [false] ? { skipReparse ?: never, } : never >
    ) ;
  
    type SctnEhArgsImpl<Skb extends boolean > = (
  
      ArgsWithOptions<[_ts.Node, substituteNode: _ts.PrintHandlers["substituteNode"] & {} ], (
        & { readonly eh: _ts.EmitHint  ; }
        & (
          DOOR<{
            /**
             * by default we'll return another `Node`;
             * if `true`, we'd instead immediately return the resulting `string` without any attempt of Reparsing.
             * 
             */
            readonly skipReparse: Skb ;
          }, Skb >
        )
      )>
    ) ;
  
    function scanTransformNodesEhImpl(...args: (SctnEhArgsImpl<false> ) ) : _ts.Node ;
    function scanTransformNodesEhImpl(...args: (SctnEhArgsImpl<true>  ) ) : string ;
    function scanTransformNodesEhImpl(...scArgs: (
      | SctnEhArgsImpl<false  >
      | SctnEhArgsImpl<true   >
    ) ): string | _ts.Node
    function scanTransformNodesEhImpl(...scArgs: (
      | SctnEhArgsImpl<false  >
      | SctnEhArgsImpl<true   >
    ) ): string | _ts.Node
    {
      const [nd, snImpl, { eh, skipReparse, }] = scArgs ;
  
      const ndOrignlSf = (
        nd.getSourceFile()
      ) ;
      
      const printer = (
        _ts.createPrinter({ newLine: _ts.NewLineKind.CarriageReturnLineFeed, }, {
          substituteNode: snImpl ,
        })
      ) ;
  
      const s1 = (
        (() => {
          ;
          if (_ts.isSourceFile(nd) ) {
            return printer.printFile(nd) ;
          }
          return printer.printNode(eh, nd, nd.getSourceFile() ) ;
        })()
      ) ;
  
      return (
        skipReparse ?
        s1 :
        (
          _ts.isSourceFile(nd) ?
          _ts.createSourceFile(s1, ndOrignlSf.text, {
            languageVersion: ndOrignlSf.languageVersion,

          }, true, ) :
          assert.fail(new TypeError(`unsupported. consider passing the whole 'SourceFile' or instead setting 'skipReparse: false'.`) )
        )
      ) ;
    }
  
    return scanTransformNodesEhImpl ;
  })()

) ;




export {
  scanTransformNodesEh ,
} ;
  






