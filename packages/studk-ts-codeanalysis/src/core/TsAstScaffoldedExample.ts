








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






import {
  parseTsSourceFileContent,
} from "studk-ts-codeanalysis/src/core/TsSourceCodeParsingFrontend.ts" ;

export const getSampleTsSourceFile = (
  function ()
  {
    const sf = (
      parseTsSourceFileContent((
        `
        import {
          CMath ,
          LinearAlgebra ,
          ElementaryCalculus ,
        } from "node:calculus" ;
        import {
          describeXyzLocation ,
        } from "node:three_dimensional" ;

        const x = 1 ;
        const z = 1.5 ;
        const loc = (
          <point x={x} y={0} z={z} />
        ) ;

        const d = <diameter>{ 1 }</diameter> ;

        export default (
          <cube origin={loc} diameter={d} />
        ) ;

        // {
        //   "unused string literal" ;
        //   if (1) {
        //     "unused string literal" ;
        //   }

        //   { 5; 6; 7; }
        //   [5, 6, 7] ;
          
        //   [5, 6, 7] as const ;
        // }

        `
      ) )
    ) ;
    return sf ;
  }
) ;

;











