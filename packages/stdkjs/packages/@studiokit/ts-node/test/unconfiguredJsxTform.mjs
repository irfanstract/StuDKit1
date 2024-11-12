
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
  RUN_TSFILE ,
  RUN_TSFILE_DIAGNOSED ,
} from "../scripts/commonMochaTestCaseInfra.mjs" ;


const FAIL_WITH_SPAWNSYNCOUTPUT = (

  /** @satisfies {(x: import("child_process").SpawnSyncReturns<string>) => any } */ ((oR) => (

    assert.fail(`ERROR(${oR.status }): ${"\n" + (oR.stderr).replace(/(^|\r?\n)/g, "$1> ") }`)
  ) )
) ;



/**
 * currently we simply resort to naïve S&R for `Unexpected token '<'`;
 * there's always possibility in future V8 and JSC adding dedicated diagnostic "unexpected JSX literal",
 * which means we'd need to update these test-cases.
 * 
 */
void 0 ;


describe(`running 'biff.jsx' and 'jsxreact.tsx' under 'execSync' would fail, saying "unexpected JSX syntax"`, () => {
  ;

  const SPCL_CHK = (

    /** @satisfies {(x: import("child_process").SpawnSyncReturns<string>) => any } */ ((oR) => {
      ;

      const FAILED = (
        () => FAIL_WITH_SPAWNSYNCOUTPUT(oR)
      ) ;

      const exitCodeShall = (oR.status) ?? assert.fail(`process not terminated yet`) ;
  
      true && (-Math.abs(exitCodeShall ) < 0 ) || FAILED() ;
      true && oR.stderr.match(/\bSyntaxError\b/ui) || FAILED() ;
      true && oR.stderr.match(/\bUnexpected token '<'/ui) || FAILED() ;
      true && ( !oR.stderr.match(/\bMODULE_NOT_FOUND\b/ui)) || FAILED() ;
      true && ( !oR.stderr.match(/UNKNOWN_FILE_EXTENSION\b/ui)) || FAILED() ;
      true && ( !oR.stderr.match(/\bcannot use import\b/ui)) || FAILED() ;
      true && ( !oR.stderr.match(/\bis a (CommonJS|CJS) module which\b/ui)) || FAILED() ;
      ;

    } )
  ) ;
  
  it(`failed to run 'biff.jsx', saying SyntazError unexpected such token `, () => {
    ;
    const intendedWorkingDir = Path.join(provDir, "..", "..", ) ;
    const oR = (
      RUN_TSFILE_DIAGNOSED("J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests/esm/biff.jsx", {
        intendedWorkingDir ,
      })
    ) ;

    SPCL_CHK(oR) ;
  }) ;

  it(`failed to run 'jsxreact.jsx', saying SyntazError unexpected such token `, () => {
    ;
    const intendedWorkingDir = Path.join(provDir, "..", "..", ) ;
    const oR = (
      RUN_TSFILE_DIAGNOSED("J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests/jsx-react.tsx", {
        intendedWorkingDir,
      })
    ) ;

    SPCL_CHK(oR) ;
  }) ;

}) ;




describe(`successfully compile 'with-jsx.tsx', `, () => {
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
  
  it(`successfully compile 'with-jsx.tsx', `, () => {
    ;
    const intendedWorkingDir = "J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests" ;
    const oR = (
      RUN_TSFILE_DIAGNOSED("J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests/with-jsx.tsx", {
        intendedWorkingDir,
      })
    ) ;

    SPCL_CHK(oR) ;
  }) ;

}) ;






