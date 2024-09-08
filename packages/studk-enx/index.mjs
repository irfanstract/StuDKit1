

import { reiterable } from 'typexpe-commons/src/common_sv1.mjs';

import { fileURLToPath, pathToFileURL, } from 'node:url' ;

import { shUtilArgParse, getAppArgs, } from './src/shUtil.mjs';

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { execSync, spawnSync, } from 'node:child_process';
import {  } from 'node:os';






// TODO
if ((
  /* whether this is being run as the main module */
  isMainModuleByMeta(import.meta )
)) {
  ;
  console.warn(`'studk-enx' invoked as main module`) ;
  console.warn(`['studk-enx'] evaluating 'shMainImpl()'`) ;
  ;
  shMainImpl((
    getAppArgs()
  ) ) ;
}
else {
  ;
  console.info(`'studk-enx' imported as regular package`) ;
}

import { shMainImpl, } from "./src/cliIm.mjs" ;








