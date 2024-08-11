




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/**
 * 
 * @typedef {import("studk-ui-fwcore/src/util/EWithOpt.ts").XJson.IDictFor<k, v> }
 * @template {string} [k=string]
 * @template {import("studk-ui-fwcore/src/util/EWithOpt.ts").XJson.IAny} [v=any]
 * 
 */
/**
 * 
 */
const XDict = {};

/* `require` is not provided for ESM */
import {
  createRequire,
} from './util-all.mjs' ;

/* PLATFORM */

import {

  /* PLATFORM PATHS */

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,

  /* PLATFORM I/O */
  
  IO,

  /* PLATFORM SHELL */
  
  execAsync,
  exec,
  execSync,
  spawnSync,
} from './util-all.mjs' ;









;

import * as projectActualPaths from "./paths1.mjs" ;

import {
  rerunNpmInstall,
} from './setup-nodemodules.mjs'; ;




export { projectActualPaths, } ;

export * from './setup-nodemodules.mjs'; ;










