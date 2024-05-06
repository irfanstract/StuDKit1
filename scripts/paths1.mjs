




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



export const scriptsDirActualPath = (
  Path.join(fileURLToPath(import.meta.url), ".." )
) ;

export const baseDirActualPath = (
  Path.join(scriptsDirActualPath, ".." )
) ;

export const pkgsDirActualPath = (
  Path.join(baseDirActualPath, "packages" )
) ;

export const nodeModulesDirActualPath = (
  Path.join(baseDirActualPath, "node_modules" )
) ;

/** @satisfies {() => import("studk-fwcore-setups/src/util-p.mts").PackageManifest } */
export const getRootPackageManifest = () => {
  return loadPackageJson(baseDirActualPath) ;
} ;

/** @satisfies {(x: string) => import("studk-fwcore-setups/src/util-p.mts").PackageManifest } */
export const getPackageManifest = (p) => {
  const { pJsonPath, } = getNamedPackagePaths(p) ;
  return loadPackageJson(pJsonPath) ;
} ;

/** @satisfies {(x: string) => object } */
export const getNamedPackagePaths = (p) => {
  const pBasePath = Path.join(nodeModulesDirActualPath, p, ) ;
  const pBaseRealPath = IO.realpathSync(pBasePath) ;
  const pJsonPath = Path.join(pBasePath, "package.json") ;
  return {
    p ,
    pBasePath,
    pBaseRealPath ,
    pJsonPath ,
  } ;
} ;






