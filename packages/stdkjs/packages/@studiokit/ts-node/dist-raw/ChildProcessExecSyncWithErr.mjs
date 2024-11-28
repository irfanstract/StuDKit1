
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

export { EnumStdOutId, };

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



const runChildProcess = (

  /** @satisfies {(...args: ArgsWithOptions<[cmd: string], { stderr ?: EnumStdOutId, env ?: NodeJS.ProcessEnv, }> ) => any } */ (
    (...cfg) => {
      const [cmd, { stderr = "inherit", env: optEnv = {}, } = {}] = cfg ;
      return (
        execSync(cmd, {
          stdio: ["pipe", "pipe", stderr] ,
          encoding: "utf-8" ,
          env: rcpConcatEnv(process.env ?? {}, optEnv) ,
        })
      ) ;
    }
  )
) ;

const runChildProcessWithStat = (

  /** @satisfies {(...args: ArgsWithOptions<[cmd: string], { env ?: NodeJS.ProcessEnv, }> ) => any } */ (
    (...[cmd, { env: optEnv = {}, } = {}]) => {
      return (
        spawnSync(cmd, {
          shell: true ,
          stdio: ["pipe", "pipe", "pipe"] ,
          encoding: "utf-8" ,
          env: rcpConcatEnv(process.env ?? {}, optEnv) ,
        })
      ) ;
    }
  )
) ;

const rcpConcatEnv = (

  /**
   * 
   * @satisfies {(d1: NodeJS.ProcessEnv, d2: NodeJS.ProcessEnv) => any }
   */
  (function (...[d1, d2]) {

    return { ...d1 , ...d2 } ;
  } )
) ;

/**
 * check that the process has exited with stat-code `0`, failing in caseof nonzero.
 * will also fail if the Process remains running.
 * 
 */
const checkChildProcessNoError = (

  /** @type {(o: SpawnSyncReturns<string> ) => void } */ (o) => {
    void (
      Number(String(o.status) || "???" ) === 0
      ||
      assert.fail(new TypeError(`process ${typeof o.status === "number" ? `returned with Error ${o.status }` : `might havent exited` }:` + "\r\n" + (o.stderr && posixBlockquotify(o.stderr ?? ``) ) ) )
    ) ;
  }
) ;

export {
  runChildProcess ,
  runChildProcessWithStat ,
  checkChildProcessNoError ,
} ;






