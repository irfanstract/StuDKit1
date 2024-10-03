










import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'

import { inspect, } from 'util';

import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;

import {
  getNodeTypeLabelTxt ,
} from "studk-ts-codeanalysis/src/core/TsAstInspectiveUtil.ts" ;

import {
  getNodeChildren, 
  getSampleTsSourceFile,
  getRepresentationallyReducedCopyOf,
} from "studk-ui-encore/src/CommonParsedMarkupFileDisplayUi/TsAstUtils.tsx"








;

const s = (
  getSampleTsSourceFile()
) ;

if (0) {
  ;
  console["log"]({ s, } ) ;
}

console["log"]( getNodeTypeLabelTxt(s) ) ;

const sRc = (
  getRepresentationallyReducedCopyOf(s)
) ;

console["log"]((
  inspect(sRc, undefined, (
    // 9
    // 5
    // 6
    5
  ) )
) ) ;

util.assert(TS.isSourceFile(sRc) ) ;

console["log"]((
  `TS.isSourceFile(sRc)`
) ) ;

console["log"]((
  sRc.getText()
) ) ;

console["log"]((
  sRc.statements[0]!.getText()
) ) ;

for (const nd of [sRc, sRc.statements[0]!]) {

  console["log"]({ nd, } ) ;
  console["log"]((
    nd.getText()
  ) ) ;
  const ndChildren = (
    nd.getChildren()
  ) ;
  console["log"]({ ndChildren, } ) ;

}












