




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  Ordering ,
} from "studk-fwcore-setups/src/util-all.mjs" ;

import { PHONORM, getPhoneticalOrdering, } from 'studk-fwcore-setups/src/phoneticalOrdering1.mjs';

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
  Glb,

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

import * as packageListing from "./packageListing.mjs" ;

export {
  projectActualPaths ,
  packageListing ,
} ;






