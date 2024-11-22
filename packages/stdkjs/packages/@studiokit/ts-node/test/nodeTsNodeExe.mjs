
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

/** @typedef {Extract<Extract<StdioOptions, readonly any[] >[2], `${"i" | "p" }${string}`> } */
const EnumStdOutId = {} ;

/** @import { StdioOptions, SpawnSyncReturns, SpawnOptions, } from "child_process" */
import {
  execFileSync,
  execSync,
  spawnSync,
} from "child_process";

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



import {
  provDir ,
  RUN_TSFILE ,
  RUN_TSFILE_DIAGNOSED ,
} from "../scripts/commonMochaTestCaseInfra.mjs" ;

const spclExecSync = (

  /** @satisfies {(...args: ArgsWithOptions<[cmd: string], { stderr ?: EnumStdOutId, env ?: NodeJS.ProcessEnv, }> ) => any } */ (
    (...cfg) => {
      const [cmd, { stderr = "inherit", env = {}, } = {}] = cfg ;
      return (
        execSync(cmd, {
          stdio: ["pipe", "pipe", stderr] ,
          encoding: "utf-8" ,
          env ,
        })
      ) ;
    }
  )
) ;

const spclExecSyncWithErr = (

  /** @satisfies {(...args: ArgsWithOptions<[cmd: string], { env ?: NodeJS.ProcessEnv, }> ) => any } */ (
    (...[cmd, { env = {}, } = {}]) => {
      return (
        spawnSync(cmd, {
          shell: true ,
          stdio: ["pipe", "pipe", "pipe"] ,
          encoding: "utf-8" ,
          env ,
        })
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

const stringAssert = (

  /** @satisfies {<const V extends string>(x: string, x1: (x: string) => any ) => any } */ (function (...[x, x1])
  {
    x1(x) || assert.fail(`assertion failed: ${posixBlockquotify(x) }`) ;
  })
) ;





import {
  spclMustTryProbSet ,
} from "../scripts/commonStTsNodeTestworthyPreBundlingFlags.mjs" ;

{
//

const spclExpectedEnvVars = /** @satisfies {NodeJS.ProcessEnv  } */ ({
  STUDKTSNODE_GENERAL_SETUP_CONSOLEALWAYSSTDERR: "1",
}) ;

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
const testsNofileHelloWorldTsPath = (
  Path.join(provDir, "tests", "nofile-hello-world.ts")
  .replaceAll("\\", "/")
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












