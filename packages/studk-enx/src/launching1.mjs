

import { reiterable } from 'typexpe-commons/src/common_sv1.mjs';

import { fileURLToPath, pathToFileURL, } from 'node:url' ;

import * as Path from "node:path" ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { execSync, spawnSync, } from 'node:child_process';
import {  } from 'node:os';
import { realpathSync } from 'node:fs';

const thisPackagePhysicalPath = (
  realpathSync((
    (
      Path.join((
        Path.join(fileURLToPath(`${import.meta.url }`) , "..", )
      ), "..")
    )
  ))
) ;




/**
 * 
 * the app to
 * do the Expo Mode for source-tree rooted at directory pointed by {@link process.cwd `cwd` }.
 * 
 * currently only Next(JS) is supported ;
 * we're hoping to add more in the future.
 * 
 * @param {[{ routingFw: "nextjs", }]} args
 * 
 */
function getCwdExpoModeAppShRef(...[{ routingFw: routingFwSpec, }])
{
  /**
   * remarks:
   * 
   * for portability we stick on `npx` to launch the platform
   * 
   * for the `npx` call, we need to pass `--yes`, otherwise
   * `npx` may bail out early
   * 
   * due to the 150MB+ size of the package Electron,
   * we need to pin/hardwire the version num
   * to avoid second-time download
   * 
   */
  {
    ;
  
    const platformPkgRef = "electron@29.2.0" ;
  
    return (
      `npx --yes ${platformPkgRef } ${Path.join(thisPackagePhysicalPath, "iem.mjs" ) }`
    ) ;
  }
}

/**
 * 
 * synchronously run the expo-mode app ;
 * will not return until terminated ; always in separate PID, thanks to `execSync`.
 * 
 * @param {[appSrcRoot?: string]} args
 * 
 */
function runExpoMode(...[clientAppSrcRootDir = process.cwd(), ])
{
  ;

  const cwdRunnerShRef = getCwdExpoModeAppShRef({ routingFw: "nextjs", }) ;

  /**
   * log the relevant details of the app
   */
  console["error"](`app:`, { userAppPath: clientAppSrcRootDir, platformPath: cwdRunnerShRef, } ) ;

  return (
    execSync(`${cwdRunnerShRef }` , {
      /** set this to {@link clientAppSrcRootDir}. */
      cwd: clientAppSrcRootDir
      ,
      /** without this, nothing else would make the run's error logs show up. */
      stdio: "inherit"
      ,
    } )
    , void 0
  ) ;
}

export { runExpoMode, } ;





