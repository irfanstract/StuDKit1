




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

/* `core-js` */
import "core-js/stage/4.js" ;
import "core-js/proposals/change-array-by-copy-stage-4.js" ;
import "core-js/proposals/change-array-by-copy.js" ;
import "core-js/proposals/decorators.js" ;
import "core-js/modules/es.map.group-by.js" ;

import {
  random,
} from "lodash-es" ;



/* DYNAMIC CODE LOADING */

/* `require` is not provided for ESM */
import { createRequire, } from 'node:module' ;



/* PLATFORM PATHS */

import {
  pathToFileURL,
  fileURLToPath,
} from 'node:url' ;
const pathFromFileURL = fileURLToPath ;
const fileURLFromPath = pathToFileURL ;

import * as Path from 'node:path' ;


/* PLATFORM I/O */

import * as FS from 'node:fs' ;


/* PLATFORM SHELL */

import {
  exec as execAsync,
  execSync,
  spawn,
  spawnSync,
} from 'node:child_process';
const exec = execSync ;








/*
 *
 *
 * 
 * EXPORTS
 * 
 * 
 * 
 */



/* UTILITY */

export { util, } ;

export { createRequire, } ;


/* PLATFORM PATHS */

export {
  pathToFileURL,
  fileURLFromPath,
  fileURLToPath,
  pathFromFileURL,
} ;
export { Path as Path, } ;

/* PLATFORM I/O */

export {
  FS as IO,
} ;

/* PLATFORM SHELL */

export {
  spawnSync,
  execSync,
  exec,
  spawn,
  execAsync,
} ;




/**
 * @typedef {(readonly string[]) & ({ isEPN ?: true ; } ) }
 */
/**
 * package name list
 * 
 * @module
 */
export const PackageNames = {} ;

;












