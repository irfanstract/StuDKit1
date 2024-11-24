
// @ts-check


import assert from "assert";

/**
 * @import { ArgsWithOptions, } from "../src/util.ts"
 */
/**
 * 
 * @type {typeof import("../src/util.ts")}
 */
const {
  memoize,
  utilReiterated,
} = (await import("../dist/util.js")) ;

const posixBlockquotify = (

  /** @satisfies {(x: string) => string} */ ((x) => (

    x.replace(/(^|\r?\n)/g, "$1> ")
  ) )
) ;

/** @typedef {Extract<Extract<StdioOptions, readonly any[] >[2], `${"i" | "p" }${string}`> } */
const EnumStdOutId = {} ;

/** @import { StdioOptions, SpawnSyncReturns, SpawnOptions, } from "child_process" */
import {
  execFileSync,
  execSync,
  spawnSync,
} from "child_process";

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





{
//

const spclExpectedEnvVars = /** @satisfies {NodeJS.ProcessEnv  } */ ({
  STUDKTSNODE_GENERAL_SETUP_CONSOLEALWAYSSTDERR: "1",
}) ;

const spclMustTryProbSet = (

  utilReiterated(function* () {
    /**
     * note that we need `--transpileOnly` since
     * the app's path contains untyped compiled JS file(s)
     * 
     */
    for (const withNoNativeRunmain          of (/** @return {Boolean[]} */ () => [false,  true])() )
    for (const withAlwaysPreTranspile       of (/** @return {Boolean[]} */ () => [false,  true])() )
    for (const withTranspileOnly            of (/** @return {Boolean[]} */ () => [        true])() )
    for (const scanAndPrintDeps             of (/** @return {Boolean[]} */ () => [false,  true])() )
    for (const {  } of /** @satisfies {{ }[] } */ ([
      {} ,
    ]) )
    yield {
      flags: (
        utilReiterated(function* () {
          if (withNoNativeRunmain       ) { yield "--noNativeRunmain"       ; }
          if (withAlwaysPreTranspile    ) { yield "--alwaysPreTranspile"    ; }
          if (withTranspileOnly         ) { yield "--transpileOnly"         ; }
          if (scanAndPrintDeps          ) { yield "--scanAndPrintDeps"      ; }
        })
      ) ,
    } ;
  })
) ;

/**
 * path to the `<this-package-root>/dist/bin.js`,
 * assuming {@link https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html having successfully run emit}
 * 
 */
const binJsPath = (

  Path.join(provDir, "dist", "bin.js")
  .replaceAll("\\", "/")
) ;

const spcl1WithErr = (

  /** @satisfies {(...args: ArgsWithOptions<[cm: string], { flagsStr: string }>) => any } */ ((cm, { flagsStr, }) => {

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

  /** @satisfies {(...args: ArgsWithOptions<[cm: string], { flagsStr: string }>) => any } */ ((cm, { flagsStr, }) => (
    spcl1WithErr(`${binJsPath } ${cm}`, { flagsStr, })
  ))
) ;

describe(`running 'node studk-ts-node hello-world.ts' `, () => {
  ;

  for (const {
    flags,
  } of spclMustTryProbSet )
  {
    const flagsStr = flags.join(" ") ;

    it (`running 'node studk-ts-node hello-world.ts' with ${flags.length ? `flags '${flagsStr }'` : `no flags` } `, () => {

      const pE = (
        spcl1WithErr(`J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests/hello-world.ts`, { flagsStr, })
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
    const flagsStr = flags.join(" ") ;

    it (`running 'node studk-ts-node nofile-hello-world.ts' with ${flags.length ? `flags '${flagsStr }'` : `no flags` } `, () => {

      const pE = (
        spcl1WithErr(`J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests/nofile-hello-world.ts`, { flagsStr, })
      ) ;

      assert(pE.status) ;

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

    it (`running 'node studk-ts-node studk-ts-node --version' with ${flags.length ? `flags '${flagsStr }'` : `no flags` } `, () => {

      const pE = (
        spclMeta1WithErr(`--version`, { flagsStr, })
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

    it (`running 'node studk-ts-node studk-ts-node --help' with ${flags.length ? `flags '${flagsStr }'` : `no flags` } `, () => {

      const pE = (
        spclMeta1WithErr(`--help`, { flagsStr, })
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
    flags,
  } of spclMustTryProbSet )
  {
    const flagsStr = flags.join(" ") ;

    it (`running 'node studk-ts-node studk-ts-node hello-world.ts' with ${flags.length ? `flags '${flagsStr }'` : `no flags` } `, () => {

      const pE = (
        spclMeta1WithErr(`J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/tests/hello-world.ts`, { flagsStr, })
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












