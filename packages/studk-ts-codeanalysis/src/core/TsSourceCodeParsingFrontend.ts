








import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'




import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;



import {
  getNodeTypeLabelTxt ,
  getNodeChildren ,
} from "studk-ts-codeanalysis/src/core/TsAstInspectiveUtil.ts" ;






export const parseTsSourceFileContent = (
  function (...[c] : [code: string])
  : TS.SourceFile
  {
    const sf = (
      TS.createSourceFile("<repl>", (
        c
      ) , {
        languageVersion: TS.ScriptTarget.ES2022,
      }, (
        /**
         * things break when you set this to `false`.
         * we shall always set this to `true`.
         * 
         */
        true
      ), TS.ScriptKind.TSX )
    ) ;
    return sf ;
  }
) ;

export const parseTsStatement = (
  function (...[c] : [code: string])
  : TS.Statement
  {
    const sf = (
      parseTsSourceFileContent(c)
    ) ;
    return sf.statements[0] ?? util.throwAssertionError() ;
  }
) ;

export const parseTsTermQueryExpression = (
  function (...[c] : [code: string])
  : TS.Expression
  {
    {
      const s = (
        parseTsStatement(c)
      ) ;
      if (TS.isExpressionStatement(s) ) {
        return s.expression ;
      }
    }
    {
      const s = (
        parseTsStatement(`(${c })`)
      ) ;
      if (TS.isExpressionStatement(s) ) {
        return s.expression ;
      }
    }
    return util.throwTypeError() ;
  }
) ;

;











