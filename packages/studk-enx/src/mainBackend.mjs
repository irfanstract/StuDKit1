
import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import { pathToFileURL, } from 'node:url' ;

import { exec, execSync, spawnSync, } from 'node:child_process';

import { buildShRefFromStringArray, } from './shUtil.mjs' ;





let shallRunNpxNextJsHelpAfterSubplatformAndEtcConfig = false ;

export { startBackendOnPort, } ;

async function startBackendOnPort(/** @type {Number} */ port)
{
  ;

  const subplatformAndEtcConfig = (() => {
    if (0) {
      const subplatformSpec = "next@13.5.6" ;
      return {
        subplatformSpec ,
      } ;
    }
    return null ;
  })() ;

  const { cm, } = (() => {
    if (subplatformAndEtcConfig)
    {
      const {
        subplatformSpec ,
      } = subplatformAndEtcConfig ;
    
      shallRunNpxNextJsHelpAfterSubplatformAndEtcConfig &&
      execSync(`npx ${subplatformSpec} --help`, {
        stdio: "inherit",
      } ) ;
    
      return {
        cm: `npx ${subplatformSpec} dev --port ${port}`
        ,
      } ;
    }
    {
      let dropNpxPrefix = true ;

      shallRunNpxNextJsHelpAfterSubplatformAndEtcConfig &&
      execSync(`npx next --help`, {
        stdio: "inherit",
      } ) ;
    
      return {
        cm: (
          // `npx next dev --port ${port}`
          buildShRefFromStringArray([dropNpxPrefix ? null : "npx", "next", "dev", "--port", String(port), ])
        )
        ,
      } ;
    }
  })() ;

  const pc = exec(cm, { }, (...[erc, , stderrC]) => (
    /* only taking over logging `erc` here ; `stderr` piping cannot be done here */
    console["error"](erc) ,
    void 0
  ) ) ;
  pc.stdout?.pipe(process.stderr) ;
  pc.stderr?.pipe(process.stderr) ;

  await new Promise((/** @type {() => void } */ resolve) => {
    ;
    // TODO
    pc.once("spawn", () => resolve() ) ;
  } ) ;
  console["info"](`backend process spawned`) ;

  const url = (
    `http://localhost:${port}`
  ) ;

  return {
    urlP: port ,
    url ,
    pc: pc ,
  } ;
}







