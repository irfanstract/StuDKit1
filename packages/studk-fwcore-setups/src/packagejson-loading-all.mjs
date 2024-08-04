




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

/** @type {(x: string) => import("studk-fwcore-setups/src/util-p.mts").PackageManifest } */
const loadPackageJson = (pJsonPath) => {
  const { pJson, } = loadPackageJsonEtc(pJsonPath) ;
  return pJson ;
} ;

/** @satisfies {(x: string) => object } */
const loadPackageJsonEtc = (pJsonPath) => {
  const pJsonFileRaw = IO.readFileSync(pJsonPath, { encoding: "utf-8", } ) ;
  const pJson = /** @type {import("studk-fwcore-setups/src/util-p.mts").PackageManifest } */ (JSON.parse(pJsonFileRaw) ) ;
  return {
    pJsonPath,
    pJsonFileRaw,
    pJson,
  } ;
} ;


export {
  loadPackageJson ,
  loadPackageJsonEtc ,
} ;








