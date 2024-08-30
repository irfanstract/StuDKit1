




/*
 * 
 * moved to `studk-fwcore-setups/src/util-all.mjs`.
 * 
 */






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

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

import * as Path from 'node:path' ;


/* PLATFORM I/O */

import * as FS from 'node:fs' ;


/* PLATFORM SHELL */

import {
  exec,
  execSync,
  spawn,
  spawnSync,
} from 'node:child_process';








/*
 *
 *
 * 
 * EXPORTS
 * 
 * 
 * 
 */



// /* UTILITY */
// 
// export { util, } ;
// 
// export { createRequire, } ;
// 
// 
// /* PLATFORM PATHS */
// 
// export {
//   pathToFileURL,
//   fileURLToPath,
// } ;
// export { Path as Path, } ;
// 
// /* PLATFORM SHELL */
// 
// export {
//   spawnSync,
//   execSync,
// } ;
// 
// 
// 
// 
// /**
//  * @typedef {(readonly string[]) & ({ isEPN ?: true ; } ) }
//  */
// /**
//  * package name list
//  * 
//  * @module
//  */
// export const PackageNames = {} ;
// 
// ;
// 
// 
// 
// 
// 

export * from "studk-fwcore-setups/src/util-all.mjs" ;







