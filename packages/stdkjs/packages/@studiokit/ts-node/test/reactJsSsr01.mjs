

// @ts-check


import assert from "assert";

import { execFileSync, execSync, spawnSync, } from "child_process";

import * as Path from "path";
import { fileURLToPath } from "url";

import { getFilenameAndDirname, } from "../scripts/getFilenameAndDirname.mjs" ;
const {
  __filename ,
  __dirname ,
} = (
  getFilenameAndDirname(import.meta)
) ;



import {
  provDir ,
} from "../scripts/commonMochaTestCaseInfra.mjs" ;


const {

  jsxTestsSpawnsyncPreDefs: {
    //

    //
    RUN_TSFILE ,
    RUN_TSFILE_DIAGNOSED ,
    FAIL_WITH_SPAWNSYNCOUTPUT ,

  } ,

} = (await import("../testScripts/conventions.mjs") ) ;







;

import {
  spclMustTryProbSet ,
} from "../scripts/commonStTsNodeTestworthyPreBundlingFlags.mjs" ;





describe(`successfully compile and run 'with-jsx-render-to-string.tsx', `, () => {
  ;

  const SPCL_CHK = (

    /** @satisfies {(x: import("child_process").SpawnSyncReturns<string>) => any } */ ((oR) => {
      ;

      const FAILED = (
        () => FAIL_WITH_SPAWNSYNCOUTPUT(oR)
      ) ;
  
      const exitCodeShall = (oR.status) ?? assert.fail(`process not terminated yet`) ;
  
      true && (
        (-Math.abs(exitCodeShall ) < 0 )
        ?
        oR.stderr.match(/\bMODULE_NOT_FOUND\b/ui)
        :
        (oR.status === 0 )
      ) || FAILED() ;
      // true && oR.stderr.match(/\bReact is not defined\b/ui) || FAILED() ;
      // true && ( !oR.stderr.match(/\bMODULE_NOT_FOUND\b/ui)) || FAILED() ;
      // true && ( !oR.stderr.match(/UNKNOWN_FILE_EXTENSION\b/ui)) || FAILED() ;
      // true && ( !oR.stderr.match(/\bcannot use import\b/ui)) || FAILED() ;
      // true && ( !oR.stderr.match(/\bis a (CommonJS|CJS) module which\b/ui)) || FAILED() ;
      ;

    } )
  ) ;

  ;
  for (const {
    flags,
  } of spclMustTryProbSet )
  {
  ;

  it(`successfully compile and run 'with-jsx-render-to-string.tsx' with flags ${flags }`, () => {
    ;
    const intendedWorkingDir = "J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests" ;
    const oR = (
      RUN_TSFILE_DIAGNOSED("J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests/with-jsx-render-to-string.tsx", {
        intendedWorkingDir,
        liftRunner: true,
        lrFlags: flags,
      })
    ) ;

    SPCL_CHK(oR) ;

    console["info"](`output:`, oR.stdout ) ;
  }) ;

  }
  
}) ;















