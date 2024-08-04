




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

import {
  projectActualPaths,
  packageListing,
} from './moduleListing.mjs'; ;

const {
  baseDirActualPath,
  getNamedPackagePaths,
} = projectActualPaths ;

import {
  getTestFw,
  runPerPkgTest,
} from './testingFws.mjs'; ;

runPerPkgTest("typexpe-commons", { fwPackage: "mocha", } ) ;

runPerPkgTest("studk-fwcore", { fwPackage: "mocha", } ) ;

runPerPkgTest("studk-video-fwcore", { fwPackage: "mocha", } ) ;

runPerPkgTest("studk-audio-fwcore", { fwPackage: "mocha", } ) ;
















