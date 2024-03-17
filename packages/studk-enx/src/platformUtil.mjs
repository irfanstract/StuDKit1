
import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import { pathToFileURL, } from 'node:url' ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { exec, execSync, spawnSync, } from 'node:child_process';

import {
  app ,
  BrowserWindow ,
} from "electron" ;




/**
 * 
 * @returns {Promise<void> }
 */
function onPlatformReady()
{
  return (
    app.whenReady()
  ) ;
}

export { onPlatformReady, } ;











