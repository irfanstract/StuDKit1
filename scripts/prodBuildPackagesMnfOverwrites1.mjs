




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






/**
 * 
 * this file is mockup at this point to avoid unexpected data loss;
 * during prod builds
 * this file would get replaced by a serious one
 * .
 * 
 */



import {
  baseDirActualPath ,
  scriptsDirActualPath ,
  distDirActualPath ,
} from "./paths1.mjs" ;

import {
  pbtPackagesDirActualPath,
  pbtDirActualPath ,
  resetupPbtNamedPackage1,
  getPbtNamedPackagePaths,
} from './packageProdBuildPbtDist.mjs'; ;

/**
 * 
 * @type {(...x: [nm: string, import("studk-fwcore-setups/src/util-p.mts").PackageManifest] ) => void }
 */
const FXPM = (nm, newManf) => (
  resetupPbtNamedPackage1(nm, {
    ...newManf,
    repository: { type: "git", url: "data:application/x-git-repository," },
  })
) ;

export { FXPM as fixupPackageManifest, } ;


;












