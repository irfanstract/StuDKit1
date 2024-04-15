

import { reiterable } from 'typexpe-commons/src/common_sv1.mjs';

import { pathToFileURL, } from 'node:url' ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { spclShMainImpl } from './src/cli-main.mjs';






// TODO
if ((
  /* whether this is being run as the main module */
  isMainModuleByMeta(import.meta )
)) {
  ;
  console.warn(`'typexpe-cli' invoked as main module`) ;
  0 && console.warn(`['typexpe-cli'] evaluating 'startReadEvalLoop()'`) ;
  ;
  spclShMainImpl(process.argv.slice(2) ) ;
}
else {
  ;
  console.info(`'typexpe-cli' imported as regular package`) ;
}








