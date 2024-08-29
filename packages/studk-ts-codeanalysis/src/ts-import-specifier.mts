




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;







;

// import {
//   TS,
// } from "./codesemantics-fw.mjs" ;

class EsImportSpecifier {
  constructor(
    public readonly srcSpecifier: import("typescript").Expression ,
    public readonly execAttribs: StandardEsImportOptions = {} ,
  ) {}
}

interface StandardEsImportOptions {
  readonly ["type"] ?: import("typescript").Expression ;
}



export {

  EsImportSpecifier,
} ;










