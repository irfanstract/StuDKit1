


// @ts-check


import assert from "assert";


export { assert, } ;




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




export const RUN_TSFILE = (

  /** @satisfies {(filePath: string, options: { intendedWorkingDir: string, }) => any} */ ((filePath, { intendedWorkingDir, }) => (

    (
      execFileSync("node", ["-r", "@studiokit/ts-node/register", filePath ] , {
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

  /** @satisfies {(filePath: string, options: { intendedWorkingDir: string, }) => any} */ ((filePath, { intendedWorkingDir, }) => (

    (
      spawnSync("node", ["-r", "@studiokit/ts-node/register", filePath ] , {
        shell: true ,
        cwd: intendedWorkingDir ,
        stdio: ["pipe", "pipe", "pipe"],
        encoding: "utf8",
      } )
    )
  ) )
) ;





