


// @ts-check


import assert from "assert";


export { assert, } ;

import * as Immutable from "immutable";

/**
 * 
 * @type {typeof import("../src/util.ts")}
 * @module
 * 
 */
const provUtilJs = (await import("../dist/util.js")) ;

const {
  memoize,
  utilReiterated,
} = provUtilJs ;

export {
  memoize ,
  utilReiterated ,
} ;

export {
  provUtilJs,
} ;

/**
 * indents the given block of txt with an MD-like blockquoting indent.
 * 
 * ```
 * process.stderr.println((
 *   posixBlockquotify(code )
 * )) ;
 * 
 * // Result:
 * > process.stderr.println((
 * >   posixBlockquotify(code )
 * > )) ;
 * ```
 * 
 */
const posixBlockquotify = (

  /** @satisfies {(x: string) => string} */ ((x) => (

    x.replace(/(^|\r?\n)/g, "$1> ")
  ) )
) ;
export { posixBlockquotify, } ;




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


export { Path, fileURLToPath, } ;

export const provDir = (
  Path.join(__dirname, "..", )
) ;

export { getFilenameAndDirname, } ;


export { execFileSync, execSync, spawnSync, } ;




/**
 * path to the `<this-package-root>/dist/bin.js`,
 * assuming {@link https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html having successfully run emit}
 * 
 */
const spclBinJsPath = (

  Path.join(provDir, "dist", "bin.js")
  .replaceAll("\\", "/")
) ;

export const RUN_TSFILE = (

  /** @satisfies {(...args: RtsfArgs<{}>) => any} */ ((filePath, { intendedWorkingDir, liftRunner = false, lrFlags = [], }) => (

    (
      execFileSync(...rtsfImplBuildPeerArgv(filePath, { liftRunner, lrFlags, } ) , {
        shell: true ,
        cwd: intendedWorkingDir ,
        stdio: ["pipe", "pipe", "inherit"],
        encoding: "utf8",
        env: {
          STUDKTSNODE_GENERAL_SETUP_CONSOLEALWAYSSTDERR: "1" ,
        },
      } )
    )
  ) )
) ;

export const RUN_TSFILE_DIAGNOSED = (

  /** @satisfies {(...args: RtsfArgs<{}>) => any} */ ((filePath, { intendedWorkingDir, liftRunner = false, lrFlags = [], }) => (

    (
      spawnSync(...rtsfImplBuildPeerArgv(filePath, { liftRunner, lrFlags, } ) , {
        shell: true ,
        cwd: intendedWorkingDir ,
        stdio: ["pipe", "pipe", "pipe"],
        encoding: "utf8",
      } )
    )
  ) )
) ;

/**
 * @typedef {Parameters<(filePath: string, options: ({ intendedWorkingDir: string, } & ({ liftRunner?: false, lrFlags?: readonly [], } | { liftRunner: true, lrFlags?: readonly string[] }) ) & XExtraOptions) => any > }
 * @template {{}} XExtraOptions={}
 * 
 */
const RtsfArgs = {} ;

const rtsfImplBuildPeerArgv = (

  /** @satisfies {(...args: [filePath: string, { liftRunner: boolean, lrFlags: readonly string[], } ]) => Parameters<typeof execFileSync>} */ ((...[filePath, { liftRunner, lrFlags, }]) => {
    if (liftRunner) {
      return (
        ["node", [spclBinJsPath, ...lrFlags, filePath ]]
      ) ;
    } else {
      ;
      return (
        ["node", ["-r", "@studiokit/ts-node/register", filePath ]]
      ) ;
    }
  })
) ;





