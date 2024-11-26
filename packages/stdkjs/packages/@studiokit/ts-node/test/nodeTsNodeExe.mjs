
// @ts-check


import assert from "assert";

/**
 * @import { ArgsWithOptions, } from "../src/util.ts"
 */

import {
  //
  memoize,
  utilReiterated,
} from "../scripts/commonMochaTestCaseInfra.mjs" ;

import { posixBlockquotify ,} from "../scripts/commonMochaTestCaseInfra.mjs" ;

import {
  stringAssert ,
  asGreen,
  OC ,
} from "../testScripts/conventions.mjs" ;

/** @import { StdioOptions, SpawnSyncReturns, SpawnOptions, } from "child_process" */
import {
  execFileSync,
  execSync,
  spawnSync,
} from "child_process";

import {
  runChildProcess ,
  runChildProcessWithStat ,
  checkChildProcessNoError ,
  EnumStdOutId ,
} from "../dist-raw/ChildProcessExecSyncWithErr.mjs" ;

import {
  //
  assertProcSyncExitCode,
} from "../scripts/commonMochaTestCaseInfra.mjs" ;

import * as Path from "path";
import { fileURLToPath } from "url";

import { getFilenameAndDirname, } from "../scripts/getFilenameAndDirname.mjs" ;
const {
  __filename ,
  __dirname ,
} = (
  getFilenameAndDirname(import.meta)
) ;



const {

  jsxTestsSpawnsyncPreDefs: {
    //
    //
    RUN_TSFILE ,
    RUN_TSFILE_DIAGNOSED ,
    FAIL_WITH_SPAWNSYNCOUTPUT ,
  
  } ,

} = (await import("../testScripts/conventions.mjs") ) ;





import {
  provDir ,
} from "../testScripts/conventions.mjs";

{
//

const {

  spweDefs: {
    //
    //
  
    spclExecSync ,
    spclExecSyncWithErr ,
    spclPrettifyStdioBothOutput,
    checkNoError ,
  
    binJsPath,
    testsHelloWorldTsPath,
    testsNofileHelloWorldTsPath,
  
    spclMustTryProbSet,
    spclExpectedEnvVars,
  
    spcl1WithErr ,
    spclMeta1WithErr ,
  
  } ,

} = (await import("../testScripts/conventions.mjs") ) ;

describe(`running 'node studk-ts-node hello-world.ts' `, () => {
  ;

  for (const {
    flags,
  } of spclMustTryProbSet )
  {

    it (`running 'node studk-ts-node ${flags.join(" ") } hello-world.ts'  `, () => {

      const pE = (
        spcl1WithErr(testsHelloWorldTsPath, { vmflagsStr: flags.join(" "), })
      ) ;

      checkNoError(pE) ;

      const o = (
        spclPrettifyStdioBothOutput(pE)
      );

      {
        ;
        stringAssert(o, o => o.includes(`Hello, world!`) ) ;;
      }

    }) ;
  
    ;
  }

  for (const {
    flags,
  } of spclMustTryProbSet )
  {

    it (`running 'node studk-ts-node ${flags.join(" ") } nofile-hello-world.ts' `, () => {

      const pE = (
        spcl1WithErr(testsNofileHelloWorldTsPath, { vmflagsStr: flags.join(" "), })
      ) ;

      assertProcSyncExitCode(pE, c => !!c ) ;

      process.stderr.write(`exit code: ${pE.status }` + "\r\n") ;

      const o = (
        spclPrettifyStdioBothOutput(pE)
      );

    }) ;
  
    ;
  }

}) ;

describe(`running 'node studk-ts-node <library-example-ts>' `, () => {
  ;

  for (const {
    //
    fullNm: testsPjiTsPath ,
    simpleNm: testsPjiTsName,
    isExpectedOutTxt,
    skipNativeRuntimeMode: shallSkipNativeRuntimeMode,
  } of (

    utilReiterated(/** @return {Iterable<{ readonly simpleNm: String, readonly ieo: OC, readonly skipNativeRuntimeMode?: Boolean, }>} */ function* () {

      yield {
        simpleNm: "PopularLibsCoreJsImmutable03.ts" ,
        ieo: (
          OC.byIsExpectedOutputStringChkFnc((o) => (
            true
            && o.includes("c=1,d=2,e=3 ===")
          ) )
        )
        ,
      } ;

      yield {
        simpleNm: "PopularLibsNativeFileSystemAdapterJs01.ts" ,
        ieo: (
          OC.byIsExpectedOutputStringChkFnc((o) => (
            true
            && o.includes("Not In Web Env")
          ) )
        )
        ,
        skipNativeRuntimeMode: true,
      } ;

    })

    .map(({ simpleNm, ieo, skipNativeRuntimeMode, }) => /** @type {const} */ ({
      simpleNm,
      fullNm: (
        Path.join(provDir, "tests", simpleNm)
        .replaceAll("\\", "/")
      ) ,
      isExpectedOutTxt: ieo.isExpectedOut,
      skipNativeRuntimeMode ,
    }))

  ) )

  for (const {
    flags,
  } of (
    spclMustTryProbSet

    .filter(e => {
      if ((
        shallSkipNativeRuntimeMode &&
        !(e.flags.includes("--noNativeRunmain") || e.flags.includes("--alwaysPreTranspile") )
      ) ) {
        return false
      }

      return true ;
    })

  ) )
  for (const { title, runMain, } of /** @satisfies {{ title: String, runMain: () => SpawnSyncReturns<String>, }[] } */ ([
    {
      title: `running 'node @studiokit/ts-node ${flags.join(" ") } ${testsPjiTsName}'  ` ,
      runMain: () => (
        spcl1WithErr(testsPjiTsPath, { vmflagsStr: flags.join(" "), lft: true, })
      ),
    } ,
    {
      title: `running 'node -r "@studiokit/ts-node/register ${flags.join(" ") }" ${testsPjiTsName}'  ` ,
      runMain: () => (
        spcl1WithErr(testsPjiTsPath, { vmflagsStr: flags.join(" "), lft: false, })
      ),
    } ,
  ]))
  {

    it (title, () => {

      const pE = (
        runMain()
      ) ;

      checkNoError(pE) ;

      const o = (
        spclPrettifyStdioBothOutput(pE)
      );

      stringAssert(o, o => isExpectedOutTxt(o) ) ;

    }) ;
  
    ;
  }

  ;;

}) ; /* running 'node studk-ts-node <library-example-ts>' */

describe(`running 'node studk-ts-node studk-ts-node' `, () => {

  for (const {
    flags,
  } of spclMustTryProbSet )
  {
    const flagsStr = flags.join(" ") ;

    it (`running 'node studk-ts-node ${flags.join(" ") } studk-ts-node --version' `, () => {

      const pE = (
        spclMeta1WithErr(`--version`, { firstLevelVmFlagsStr: flagsStr, })
      ) ;

      checkNoError(pE) ;

      const o = (
        spclPrettifyStdioBothOutput(pE)
      );

      {
        ;
        stringAssert(o, o => o.match(/\bv\d+\.\d+/g ) ) ;;
      }

    }) ;
  
    ;
  }

  for (const {
    flags,
  } of spclMustTryProbSet )
  {
    const flagsStr = flags.join(" ") ;

    it (`running 'node studk-ts-node ${flags.join(" ") } studk-ts-node --help'  `, () => {

      const pE = (
        spclMeta1WithErr(`--help`, { firstLevelVmFlagsStr: flagsStr, })
      ) ;

      checkNoError(pE) ;

      const o = (
        spclPrettifyStdioBothOutput(pE)
      );

      {
        ;
        stringAssert(o, o => o.includes(`Opens the REPL even if stdin does not appear to be a terminal`) ) ;;
        stringAssert(o, o => o.includes(`Bootstrap with the ESM loader, enabling full ESM support`) ) ;;
        stringAssert(o, o => o.includes(`Logs TypeScript errors to stderr instead of throwing exceptions`) ) ;;
      }

      if (flags.includes("--scanAndPrintDeps") ) {
        ;
        stringAssert(o, o => o.toLowerCase().includes(`verbose-print the dependency graph`) ) ;;
      }

    }) ;
  
    ;
  }

  for (const {
    flags: firstLevelVmFlags,
  } of (
    spclMustTryProbSet
  ) )
  for (const {
    flags: secndLevelVmFlags,
  } of (
    spclMustTryProbSet
    .filter(e => {
      /** skip cases of double-level `--alwaysPreTranspile`, to save device resource */
      if (e.flags.includes("--alwaysPreTranspile") ) { return false ; }
      return true ;
    } )
  ) )
  {

    it (`running 'node studk-ts-node ${firstLevelVmFlags.join(" ") } studk-ts-node ${secndLevelVmFlags.join(" ") } hello-world.ts' `, () => {

      const pE = (
        spclMeta1WithErr(testsHelloWorldTsPath, {
          firstLevelVmFlagsStr: firstLevelVmFlags.join(" "),
          secndLevelVmFlagsStr: secndLevelVmFlags.join(" "),
        })
      ) ;

      checkNoError(pE) ;

      const o = (
        spclPrettifyStdioBothOutput(pE)
      );

      {
        ;
        stringAssert(o, o => o.includes(`Hello, world!`) ) ;;
      }

    }) ;
  
    ;
  }

}) ;

}












