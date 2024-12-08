
// @ts-check

"use strict" ;




/**
 * @import { ArgsWithOptions, } from "@studiokit/ts-node/dist/util"
 */
// const {
//   //
// } = require("@studiokit/ts-node/dist/util") ;


;

const Path = require("node:path");

const {
  execSync ,
  execFileSync ,
} = require("node:child_process") ;





// const runCmdSpcl = (

//   /** @satisfies {(...x: ArgsWithOptions<[], { pkgRootDir: string, }> ) => any } */ (function (...[{ pkgRootDir: baseDir, }]) {

//     const r = (

//       execFileSync("node", ["????"], {
//         shell: true ,
//         stdio: ["inherit", "inherit", "inherit"] ,
//         cwd: baseDir ,
//         encoding: "utf8",
//       })
//     ) ;
//     return ;
//   })
// ) ;

const runSpcl = (

  /** @satisfies {(...x: ArgsWithOptions<[mainTaskDesc: { baseDir: string, args: readonly string[], }], { }> ) => any } */ (function (...[{ baseDir: baseDir, args , }]) {

    const r = (

      execFileSync("node", [Path.resolve(__filename, "./bin/electron-mocha"), ...args ], {
        shell: true ,
        stdio: ["inherit", "inherit", "inherit"] ,
        cwd: baseDir ,
        encoding: "utf8",
      })
    ) ;
    return ;
  })
) ;

const runInCwd = (

  /** @satisfies {(...x: ArgsWithOptions<[mainTaskDesc?: { args?: readonly string[], }], { }> ) => any } */ (function (...[{ args = [], } = null ?? {} ,]) {
    return (

      runSpcl({ baseDir: process.cwd() , args, })
    ) ;
  })
) ;

exports.runInCwd = runInCwd ;
exports.runSpcl = runSpcl ;











