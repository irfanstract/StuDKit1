




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/**
 * 
 * @typedef {import("studk-ui/src/fwCore/ewo.ts").XJson.IDictFor<k, v> }
 * @template {string} [k=string]
 * @template {import("studk-ui/src/fwCore/ewo.ts").XJson.IAny} [v=any]
 * 
 */
/**
 * 
 */
const XDict = {};

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









;

import * as projectActualPaths from "./paths1.mjs" ;

const rerunNpmInstall = (
  /** @satisfies {(...a: import("studk-fwcore-setups/src/util-eawo.mts").ArgsWithOptions<[mode: NpmReinstallMode ], { } > ) => any } */
  ((...[mde]) => {
    ;
    const o = (
      execSync(`npm ${ (mde.lockfile === false) ? "install" : "ci" }`, {
        cwd: projectActualPaths.baseDirActualPath,
        stdio: "inherit",
      } )
    ) ;
  })
) ;

/** @typedef {ReturnType<typeof describeNpmInstallMode> } */
/**
 * 
 * @module
 */
const NpmReinstallMode = {} ;

/** @satisfies {(x: { lockfile : boolean, }) => object } */
const describeNpmInstallMode = (
  x => x
) ;




export {
  rerunNpmInstall,
  describeNpmInstallMode,
  NpmReinstallMode ,
} ;










