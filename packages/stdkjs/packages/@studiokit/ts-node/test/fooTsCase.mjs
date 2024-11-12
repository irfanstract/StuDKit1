
// @ts-check


import assert from "assert";

import { execFileSync, execSync, } from "child_process";

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



describe(`running 'foo.ts' under 'execSync'`, () => {
  ;

  it(`successfully run 'foo.ts', with stdout not emitting anythiing meaningful`, () => {
    ;
    const intendedWorkingDir = Path.join(provDir, "..", "..", ) ;
    const oR = (
      RUN_TSFILE("J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests/esm/foo.ts", {
        intendedWorkingDir,
      })
    ) ;

    assert(oR.match(/^\s*$/) ) ;
  }) ;

})





