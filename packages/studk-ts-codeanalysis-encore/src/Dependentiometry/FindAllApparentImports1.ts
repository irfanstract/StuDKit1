




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsWithOptions ,
} from "studk-fwcore/src/util/C1.ts" ;




/* PLATFORM */

;






;

import {
  TS,
} from "studk-fwcore-setups/src/codesemantics-fw.mjs" ;

import {
  loadSrcFile,
} from 'studk-fwcore-setups/src/codesemantics-fw.mjs';

import {
  runSearch ,
  RS_DESCEND ,
  RS_AS_TERMINAL,
} from "studk-fwcore-setups/src/codesemantics-fw1.mjs" ;

import {
  EsImportSpecifier,
} from 'studk-ts-codeanalysis/src/ts-import-specifier.mjs'; ;

/**
 * gather/get
 * as many {@link TS.ImportDeclaration `import`} as appropriate
 * 
 */
const findAllImportNodes: {
  (...x: ArgsWithOptions<[TS.Node,] , { includeTypeOnlyOnes?: boolean, } > ): (
    readonly (TS.Statement | TS.Expression)[]
  ) ;
} = (
  function (root, { includeTypeOnlyOnes = false, } = {})
  {
    let onv = (() => {
      let c: number = 0 ;
      return (e: any) => {
        ++c ;
        if (32 < c) { return util.throwTypeError() ; }
        console["log"]({ e }) ;
      } ;
    })() ;
    return (
      runSearch<TS.Statement | TS.Expression >(root, (e) => {
        ;

        if (TS.isStatement(e) || TS.isExpression(e) )
        {

          if (TS.isImportDeclaration(e) )
          {
            return new RS_AS_TERMINAL<TS.Statement | TS.Expression, typeof e >((e) => {

              if (includeTypeOnlyOnes || isRunTimeImport(e) ) {
                // TODO
                return [e] ;
              }

              return [] ;
            } ) ;
          }
        }

        return new RS_DESCEND() ;
      } )
      // TODO
      .filter(e => {
        ;
        return (
          ((TS.isStatement(e) || TS.isExpression(e) ) )
        ) ;
      })
    ) ;
  }
) ;

/**
 * gather/get
 * as many {@link EsImportSpecifier import(s) } as appropriate
 * 
 */
const findAllImports: {
  (...x: Parameters<typeof findAllImportNodes> ): (
    readonly EsImportSpecifier[]
  ) ;
} = (...a) => (
  findAllImportNodes(...a)
  .map(e => {
    ;
    if (TS.isImportDeclaration(e) ) {
      return new EsImportSpecifier(e.moduleSpecifier, {} ) ;
    }
    return (
      util.throwTypeError(`is: '${e.getFullText() }' `)
    ) ;
  })
) ;

/**
 * gather/get
 * as many {@link NodeRequire bare-specified package ref(s)} as appropriate
 * 
 */
const findAllDependedUponPackages: {
  (...x: Parameters<typeof findAllImportNodes> ): (
    readonly string[]
  ) ;
} = (...a) => (
  FADP(...a)
  .map(e => e.pkNm )
  .toSorted()
) ;

/**
 * 
 */
const FADP = (...a: Parameters<typeof findAllImportNodes> ) => (
  findAllImports(...a)
  .flatMap((e) => {
    ;
    const { srcSpecifier, } = e ;
    if (TS.isStringLiteral(srcSpecifier) ) {
      const { text } = srcSpecifier ;
      const tm = text.match(/^((\@[\w\-]+\/)??[\w\-]+)(?=$|\/)/) ;
      if (tm ) {
        return [{ pkNm: tm[1]! } ] ;
      }
    }
    return [] ;
  })
) ;

// TODO
function isRunTimeImport(...[e] : [TS.ImportDeclaration | TS.CallExpression])
{
  if (TS.isImportDeclaration(e)) {
    return !(e.importClause?.isTypeOnly ) ;
  }
  if (TS.isCallExpression(e)) {
    return (e.expression.kind === TS.SyntaxKind.ImportKeyword ) ;
  }
  // if (isImportExpression(e)) {
  //   return !(e ) ;
  // }
  return false ;
}

// function isImportExpression(e: TS.Expression): e is TS.ImportExpression ;
// function isImportExpression(...[e] : [TS.Expression])
// {
//   if (e.kind === TS.SyntaxKind.ImportKeyword ) {
//     return true ;
//   }
//   return false ;
// }

export {
  findAllImportNodes ,
  findAllImports,
  findAllDependedUponPackages,
  FADP,
} ;
export {
  isRunTimeImport,
} ;







