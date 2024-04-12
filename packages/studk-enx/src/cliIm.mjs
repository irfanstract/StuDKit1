

import { reiterable } from 'typexpe-commons/src/common_sv1.mjs';

import { fileURLToPath, pathToFileURL, } from 'node:url' ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { execSync, spawnSync, } from 'node:child_process';
import {  } from 'node:os';






import { runExpoMode, } from './launching1.mjs';;

export { shMainImpl, } ;

// TODO
function shMainImpl(/** @type {String[]} */ args)
{
  return runExpoMode(args[0]) ;
}







