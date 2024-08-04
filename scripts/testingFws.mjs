




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/* PLATFORM PATHS */
import {

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,

} from './util-all.mjs' ;

/* PLATFORM I/O */
import {
  IO,

} from './util-all.mjs' ;

/* PLATFORM SHELL */
import {

  execAsync,
  spawn,
  exec,
  execSync,
  spawnSync,

} from './util-all.mjs' ;

/* ETC */
import {
} from './util-all.mjs' ;







;

import * as projectActualPaths from "./paths1.mjs" ;

const {
  baseDirActualPath,
  getNamedPackagePaths,
} = projectActualPaths ;

import {
  testFwDict,
  getTestFw,
  runPerPkgTest1,
} from "studk-fwcore-setups/src/testingFws.mjs" ;

/**
 * 
 * @satisfies {(...args: [string, { fwPackage: string, } ]) => any }
 */
const runPerPkgTest = /** */ function (p, { fwPackage, } ) {
  return (
    runPerPkgTest1({ pkgRealPath: getNamedPackagePaths(p).pBaseRealPath , } , { fwPackage, } )
  ) ;
} ;

export { getTestFw, runPerPkgTest, } ;








