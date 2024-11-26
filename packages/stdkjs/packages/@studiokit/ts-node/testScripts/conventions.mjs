


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

const stringAssert = (

  /** @satisfies {<const V extends string>(x: string, x1: (x: string) => any ) => any } */ (function (...[x, x1])
  {
    x1(x) || assert.fail(`assertion failed: ${posixBlockquotify(x) }`) ;
  })
) ;

import { posixBlockquotify ,} from "../scripts/commonMochaTestCaseInfra.mjs" ;

const {
  redBright : asRedBright ,
  green     : asGreen ,
} = (await import("chalk")).default ;

export {
  assert,
  memoize,
  stringAssert ,
  utilReiterated,
} ;

export {
  asRedBright ,
  asGreen ,
} ;



class OC
{

  /**
   * 
   * @param {[(x: string) => Boolean] } args
   * 
   */
  static byIsExpectedOutputStringChkFnc(...[isExpectedOutA])
  {
    return new this(isExpectedOutA)
  }

  /**
   * 
   * @protected
   * 
   * @param {[(x: string) => Boolean] } args
   * 
   */
  constructor(...[isExpectedOutA])
  {
    this.isExpectedOut = isExpectedOutA ;
  }

}

export {
  OC,
} ;

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

const FAIL_WITH_SPAWNSYNCOUTPUT = (

  /** @satisfies {(x: import("child_process").SpawnSyncReturns<string>) => any } */ ((oR) => (

    assert.fail(`ERROR(${oR.status }): ${"\n" + (oR.stderr).replace(/(^|\r?\n)/g, "$1> ") }`)
  ) )
) ;

import {
  //
  assertProcSyncExitCode,
} from "../scripts/commonMochaTestCaseInfra.mjs" ;

import * as Path from "path";
import { fileURLToPath } from "url";



import {
  provDir ,
  RUN_TSFILE ,
  RUN_TSFILE_DIAGNOSED ,
} from "../scripts/commonMochaTestCaseInfra.mjs" ;





export {
  provDir ,
} ;

import {
  spclMustTryProbSet ,
} from "../scripts/commonStTsNodeTestworthyPreBundlingFlags.mjs" ;

/**
 * path to the `<this-package-root>/dist/bin.js`,
 * assuming {@link https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html having successfully run emit}
 * 
 */
const binJsPath = (

  Path.join(provDir, "dist", "bin.js")
  .replaceAll("\\", "/")
) ;

const testsHelloWorldTsPath = (
  Path.join(provDir, "tests", "hello-world.ts")
  .replaceAll("\\", "/")
) ;

/** this file does not exist */
const testsNofileHelloWorldTsPath = (
  Path.join(provDir, "tests", "nofile-hello-world.ts")
  .replaceAll("\\", "/")
) ;

export {
  binJsPath ,
  testsHelloWorldTsPath ,
  testsNofileHelloWorldTsPath ,
} ;

/**
 * naming conventions
 * having been used by `test/unconfiguredJsxTform.mjs` and possibly more files
 * 
 */
const jsxTestsSpawnsyncPreDefs = (

  (() => {

    return /** @type {const} */ ({

      RUN_TSFILE,
      RUN_TSFILE_DIAGNOSED ,
      FAIL_WITH_SPAWNSYNCOUTPUT ,

    }) ;
  })()
) ;

export {
  jsxTestsSpawnsyncPreDefs ,
} ;

/**
 * depreciated naming conventions
 * having been used by `test/nodeTsNode.mjs` and possibly more files
 * 
 */
const spweDefs = (
  (() => {

    ;

    const spclExpectedEnvVars = /** @satisfies {NodeJS.ProcessEnv  } */ ({
      STUDKTSNODE_GENERAL_SETUP_CONSOLEALWAYSSTDERR: "1",
    }) ;
    
    const spclExecSync = (

      /** @satisfies {(...args: ArgsWithOptions<[cmd: string], { stderr ?: EnumStdOutId, env ?: NodeJS.ProcessEnv, }> ) => any } */ (
        (...cfg) => {
          const [cmd, { stderr = "inherit", env = {}, } = {}] = cfg ;
          return (
            runChildProcess(cmd, { stderr, env, })
          ) ;
        }
      )
    ) ;

    const spclExecSyncWithErr = (

      /** @satisfies {(...args: ArgsWithOptions<[cmd: string], { env ?: NodeJS.ProcessEnv, }> ) => any } */ (
        (...[cmd, { env = {}, } = {}]) => {
          return (
            runChildProcessWithStat(cmd, { env, })
          ) ;
        }
      )
    ) ;

    ;
    const spclPrettifyStdioBothOutput = (

      /** @type {(o: SpawnSyncReturns<string> ) => string } */ (pE) => (
        [
          `-- begin stderr --`,
          posixBlockquotify(pE.stderr ?? ` `),
          `-- end stderr, begin stdout --`,
          posixBlockquotify(pE.stdout ?? ` `),
          `-- end stdout --`,
        ].join("\r\n\r\n")
      )
    ) ;

    /**
     * check that the process has exited with stat-code `0`, failing in caseof nonzero.
     * will also fail if the Process remains running.
     * 
     */
    const checkNoError = (

      /** @type {(o: SpawnSyncReturns<string> ) => void } */ (o) => {
        void (
          Number(String(o.status) || "???" ) === 0
          ||
          assert.fail(new TypeError(`process ${typeof o.status === "number" ? `returned with Error ${o.status }` : `might havent exited` }:` + "\r\n" + posixBlockquotify(o.stderr ?? ``) ) )
        ) ;
      }
    ) ;

    const spcl1WithErr = (
        
      /** @satisfies {(...args: ArgsWithOptions<[cm: string], { vmflagsStr: string }>) => any } */ ((cm, { vmflagsStr: flagsStr, }) => {
    
        const finalCm = `node ${binJsPath } ${flagsStr } ${cm }` ;
    
        if (0) {
          ;
          console["log"]({
            cm,
            flagsStr,
            spclExpectedEnvVars,
            finalCm,
          }) ;
        }
    
        return (
          spclExecSyncWithErr(finalCm, {
            env: spclExpectedEnvVars ,
          })
        ) ;
      })
    ) ;
    
    const spclMeta1WithErr = (
    
      /** @satisfies {(...args: ArgsWithOptions<[cm: string], { firstLevelVmFlagsStr: string, secndLevelVmFlagsStr?: string }>) => any } */ ((cm, { firstLevelVmFlagsStr, secndLevelVmFlagsStr = ``, }) => (
        spcl1WithErr(`${binJsPath } ${secndLevelVmFlagsStr } ${cm}`, { vmflagsStr: firstLevelVmFlagsStr, })
      ))
    ) ;

    //
    
    return /** @type {const} */ ({

      //
      RUN_TSFILE ,
      RUN_TSFILE_DIAGNOSED ,
      FAIL_WITH_SPAWNSYNCOUTPUT,

      //
      spclExecSync ,
      spclExecSyncWithErr ,
      spclPrettifyStdioBothOutput,
      checkNoError ,

      binJsPath ,
      testsHelloWorldTsPath ,
      testsNofileHelloWorldTsPath,

      spclMustTryProbSet,
      spclExpectedEnvVars,
    
      //
      spcl1WithErr ,
      spclMeta1WithErr ,
    }) ;
    
    ;
  })()
) ;

export {
  spweDefs ,
} ;









