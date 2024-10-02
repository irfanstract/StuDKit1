




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/* `require` is not provided for ESM */
import {
  createRequire,
} from 'studk-fwcore/src/util/CSBD.mjs' ;

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
} from 'studk-fwcore/src/util/CSBD.mjs' ;

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;






;

import {
  TS,
} from "studk-fwcore-setups/src/codesemantics-fw.mjs" ;

import {
  loadSrcFile,
} from 'studk-fwcore-setups/src/codesemantics-fw.mjs';

import {
  runSearch ,
  RS_DESCEND ,
  RS_AS_TERMINAL,
} from "studk-fwcore-setups/src/codesemantics-fw1.mjs" ;

import type {
  ArgsWithOptions ,
} from "studk-fwcore/src/util/C1.ts" ;

export * from 'studk-fwcore-setups/src/codesemantics-dependography-all.mjs';

export {
  runSearch ,
} ;







