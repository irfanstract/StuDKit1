









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
  EitherPropertyOf, 
  Extend,
  OmitCase,
  OmitW,
  RequiredPartially,
} from 'studk-fwcore/src/util/C1.ts'



;

;

const parseDOmParseableCode = (
  (...[c, lang] : ArgsWithOptions<[mainCode: string, langAsMimeType: DOMParserSupportedType ], {} >) => (
    new DOMParser().parseFromString(c, lang)
  )
);

const parseHtml = (
  (c: string) => (
    parseDOmParseableCode(c, "text/html")
  )
);

export {
  parseDOmParseableCode ,
  parseHtml ,
} ;













