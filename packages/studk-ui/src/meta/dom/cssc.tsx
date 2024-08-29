





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
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
  MapEntrySpec,
  ObjectFromEntry, 
  RecordValue,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;

import type {
  ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;

type OptionalSingleLineWhiteSpace = (
  OLSW
) ;
type OLSW = (
  | ""
  | " "
  | "  "
  | "   "
  | "    "
  | "     "
  // | `      ${OptionalSingleLineWhiteSpace }`
) ;
type RequiredSingleLineWhiteSpace = (
  Exclude<OptionalSingleLineWhiteSpace, "" >
) ;

type CSSFILElINEFMT<k extends string | number | bigint | boolean | null | undefined, v extends string | number | bigint | boolean | null | undefined> = (
  //
  `${k}${FAST_OLSW }:${FAST_OLSW }${v}${FAST_OLSW };`
) ;

type CSSFILElINEFROMENTRY<e extends MapEntrySpec<any, any>> = (
  //
  CSSFILElINEFMT<e[0], e[1]>
) ;






;

type CSSP = import("react").CSSProperties ;



;

type FAST_OLSW = (
  // | ""
  | " "
  // | "  "
  // | "   "
  // | "    "
  // | "     "
  // | `      ${OptionalSingleLineWhiteSpace }`
) ;

type CSSKEYVALUEPAIRFOR<k extends keyof CSSP = keyof CSSP> = (
  //
  Exclude<(
    MapEntrySpec<k, (
      Extract<CSSP[k], string | number | bigint | boolean | null | undefined>
    )>
  ), (
    /* prevent usage of 'undefined' and 'null' here */
    MapEntrySpec< any , undefined | null>
  ) | (
    MapEntrySpec< any , "unset">
  ) >
) ;

type CSSFILElINE<k extends keyof CSSP = keyof CSSP> = (
  //
  CSSFILElINEFROMENTRY<(
    CSSKEYVALUEPAIRFOR<k>
  )>
) ;

type CSSKEYVALUEPAIR = (
  RecordValue<{
    readonly [k in keyof CSSP] -?: (
      CSSKEYVALUEPAIRFOR<k>
    ) ;
  }>
) ;

const cssStringLinesConcat = (
  function (...[src] : ArgsWithOptions<[() => (
    Iterable<(
      CSSFILElINEFROMENTRY<(
        CSSKEYVALUEPAIR
      )>
    )>
  ) ], {} > )
  {
    return (
      util.stringLinesConcat(function* () {
        yield* src() ;
      })
    ) ;
  }
) ;

export {
  cssStringLinesConcat ,
} ;














