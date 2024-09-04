




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

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;







;

import {
  getAllDependencies,
} from './gadp.mjs'; ;

import {
  isJsCompileTimeOnlyGoodie,
  isBuildToolJs,
  isDefinitelyTypedOrgPackage, 
  isJsCompileTimeGoodie,
} from 'studk-fwcore-setups/src/popular-js-fws.mjs';

import {
  parseSrcText,
  loadSrcFile, 
} from 'studk-fwcore-setups/src/codesemantics-fw.mjs';

import {
  // checkFile, 
  runSearch ,
  findAllImportNodes, 
  findAllImports,
  findAllDependedUponPackages,
  getDirAllDependedPackages,
  getPkgDirAllDependedPackages,
} from 'studk-fwcore-setups/src/codesemantics-all.mts';

import {
  phoneticalNpmOrd,
} from 'studk-fwcore-setups/src/codesemantics-dependography-all.mts';




import {
  SEMVER_SAMEREPO,
  projectActualPaths,
  packageListing,
  getRootPackageManifest,
  rootPackageManifest,
  atp0,
  atp,
  prodBuildFixups ,
} from "./packageProdBuildFixtures1.mts" ;

import "./packageProdBuildFixtures1.mts" ;









