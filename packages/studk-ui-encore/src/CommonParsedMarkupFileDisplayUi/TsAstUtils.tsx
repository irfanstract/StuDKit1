




/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






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









export const getSampleTsSourceFile = (
  function ()
  {
    const sf = (
      TS.createSourceFile("<repl>", (
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

        `
      ) , {
        languageVersion: TS.ScriptTarget.ES2022,
      }, (
        /**
         * things break when you set this to `false`.
         * we shall always set this to `true`.
         * 
         */
        true
      ), TS.ScriptKind.TS )
    ) ;
    return sf ;
  }
) ;













