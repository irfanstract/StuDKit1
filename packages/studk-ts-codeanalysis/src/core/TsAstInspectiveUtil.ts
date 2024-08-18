






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



export const getNodeTypeLabelTxt = (
  (nd: TS.Node) => {
    const k = TS.SyntaxKind[nd.kind] as const ;
    if (k) {
      return String(k) ;
    } else {
      return `Node(kind=${k} )` ;
    }
  }
) ;







export const getNodeChildren = (
  function (...[nd] : [TS.Node])
  : readonly TS.Node[]
  {
    switch (1 as number) {
      default :
        return nd.getChildren() ;
    }
  }
) ;









