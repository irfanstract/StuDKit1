
import { util, } from "typexpe-commons/src/common_sv.mjs";


import {
  bashExtractPreFlags ,
} from "studk-cli/i/CliStdFlagParsing" ;






describe(`pkg 'studk-cli' can import itself and use da resulting symbs`, function () {
  ;

  it (`pkg 'studk-cli' can import itself`, function () {

    util.assert(bashExtractPreFlags ) ;

    util.assert((bashExtractPreFlags || null ) !== null ) ;

  } ) ;

  ;
} ) ;





