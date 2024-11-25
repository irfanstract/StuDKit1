






import * as util from 'node:util';

import type * as _sourceMapSupport from '@cspotcode/source-map-support';
import { BaseError } from 'make-error';
import * as _ts from 'typescript';

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
  type ArgsWithOptions ,
} from './util';
import type {  } from './ts-compiler-types';
import type {  } from './module-type-classifier';
import type {  } from './esm';
import type { } from './node-module-type-classifier';
import type { } from './file-extensions';







export const getStaticGlobalBuiltinQuery = (

  //
  function (...[idArg]: [id: string])
  : _ts.Expression
  {
    return (
      _ts.factory.createPropertyAccessExpression(getGlobalThisObjQuery() , idArg )
    ) ;
  }
) ;

export const getDynamicGlobalNamedBuiltinQuery = (

  //
  function (...[idArg]: [idQuery: _ts.Expression])
  : _ts.Expression
  {
    return (
      _ts.factory.createElementAccessExpression(getGlobalThisObjQuery() , idArg )
    ) ;
  }
) ;

export const getGlobalThisObjQuery = (

  //
  function (...[]: [ ])
  : _ts.Expression
  {
    return (
      (_ts.factory.createIdentifier("globalThis")  )
    ) ;
  }
) ;



export const translateEsmImportClauseIntoBindingName = (

  function (...[clause]: [_ts.ImportClause ])
  : _ts.BindingName
  {
    return (
      translateEsmImportClauseIntoObjectDictPattern(clause)
    ) ;
  }
) ;

export const translateEsmImportClauseIntoObjectDictPattern = (

  function (...[clause]: [_ts.ImportClause ])
  : _ts.ObjectBindingPattern
  {
    return (

      _ts.factory.createObjectBindingPattern((
        utilReiterated(function* () {
          if (clause.name) {
            yield _ts.factory.createBindingElement(undefined, "default", clause.name, ) ;
          }
          if (clause.namedBindings) {
            if (_ts.isNamedImports(clause.namedBindings) || _ts.isNamedExports(clause.namedBindings) ) {
              for (const sp of clause.namedBindings.elements ) {
                yield _ts.factory.createBindingElement(undefined, sp.propertyName, sp.name, ) ;
              }
            }
            if (_ts.isNamespaceImport(clause.namedBindings) || _ts.isNamedExports(clause.namedBindings) ) {
              yield _ts.factory.createBindingElement(_ts.factory.createToken(_ts.SyntaxKind.DotDotDotToken), undefined, clause.namedBindings.name, ) ;
            }
          }
        })
      ))
    ) ;
  }
) ;


export const translateEsmImportAttribsIntoObjectDictLiteral = (

  //
  function (...[clause]: [_ts.ImportAttributes ])
  : _ts.ObjectLiteralExpression
  {

    return (

      _ts.factory.createObjectLiteralExpression((
        clause.elements.slice(0)
        .map(e => (
          _ts.factory.createPropertyAssignment(e.name, e.value )
        ))
      ))
    ) ;
  }
) ;








