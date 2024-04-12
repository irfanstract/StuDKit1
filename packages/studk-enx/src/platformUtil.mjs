
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




function onPlatformReady()
{
  return (
    new Promise((/** @type {() => void } */ resolve) => {
      ;
      // TODO
      app.once("ready", () => resolve() ) ;
    } )
  ) ;
}

export { onPlatformReady, } ;











