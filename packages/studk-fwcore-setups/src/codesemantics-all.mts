




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

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

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;






;

import {
  TS,
} from "./codesemantics-fw.mjs" ;

import {
  loadSrcFile,
} from './codesemantics-fw.mjs';

import {
  runSearch ,
  RS_DESCEND ,
  RS_AS_TERMINAL,
} from "./codesemantics-fw1.mjs" ;

import type {
  ArgsWithOptions ,
} from "studk-ui/src/fwCore/ewo.js" ;

export * from 'studk-fwcore-setups/src/codesemantics-dependography-all.mjs';

export {
  runSearch ,
} ;







