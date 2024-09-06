

import { util } from 'typexpe-commons/src/common_sv.mjs';

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
 * @param {[{ routingFw: "auto" | "nextjs" | false, }]} args
 * 
 */
function getCwdExpoModeAppShRef(...[{ routingFw: routingFwSpec, }])
{
  /**
   * remarks:
   * 
   * for portability we stick on `npx` to launch the platform
   * 
   * `npx` may require delimiter `--`
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
      `npx --yes ${platformPkgRef } -- ${Path.join(thisPackagePhysicalPath, "src", "expoModeMain.mjs" ) } --mounting-framework=${(routingFwSpec ?? "nextjs") || "none" }`
    ) ;
  }
}

export { runExpoMode, runExpoModeHelpDump, } ;

/**
 * 
 * @type {(x: string) => boolean }
 */
export function specifiesNoAppMode(a)
{
  ;
  return a === "--no-app" || a === "-z" ;
}

/**
 * 
 * synchronously run the expo-mode app ;
 * will not return until terminated ; always in separate PID, thanks to `execSync`.
 * 
 * @param {[appSrcRoot?: string, options?: { noAppMode?: boolean ; originalArgs ?: readonly string[], } ]} args
 * 
 */
function runExpoMode(...[...a1 ])
{
  const [clientAppSrcRootDir = process.cwd(), { noAppMode = false, originalArgs = null, } = {}, ] = a1 ;

  const cwdRunnerShRef = getCwdExpoModeAppShRef({ routingFw: "auto", }) ;

  /**
   * log the relevant details of the app
   */
  console["error"](`app:`, { userAppPath: clientAppSrcRootDir, platformPath: cwdRunnerShRef, } ) ;

  return (
    execSync(`${cwdRunnerShRef } ${originalArgs && `--original-args=${encodeURIComponent(JSON.stringify(originalArgs) ) }` } ${noAppMode ? "--no-app" : "" }` , {
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

function runExpoModeHelpDump()
{
  return (
    console["info"]((
      util.stringLinesConcat(function* () {
        yield `Run a web FW def server, and have a window (or more) open displaying it, at the same time` ;
        yield `Usage:` ;
        yield `  npx studk-enx` ;
        yield `    # run this script from` ;
        yield `    # (supposed to be the root directory of your Next(JS) app package)` ;
        yield `    # ` ;
        yield `    # before running this script` ;
        yield `    # make sure to set the *cwd* thru running 'cd <desired-path>'` ;
        yield `    # and` ;
        yield `    # make sure it's the root-directory of a Next(JS) app with 'package.json' right there` ;
        yield ` ` ;
        yield `  npx studk-enx <path-to-app-root-directory>` ;
        yield `    # run this script from` ;
        yield `    # the given directory assumed to be the root-dir of ur app src-tree` ;
        yield `    # ` ;
        yield `    # make sure it's the root-directory of a Next(JS) app with 'package.json' right there` ;
        yield ` ` ;
      } )
    ))
  ) ;
}





