







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import { Ordering, } from 'studk-fwcore-setups/src/util-all.mjs';

// import {
//   random,
// } from "lodash-es" ;

import {
  ArgsWithOptions ,
} from "studk-fwcore/src/util/C1.ts" ;





import {

  /* PLATFORM PATHS */

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,
  Glb,

  /* PLATFORM I/O */
  
  IO,

  /* PLATFORM SHELL */
  
  execAsync,
  exec,
  execSync,
  spawnSync,

} from 'studk-fwcore-setups/src/util-all.mjs' ;







/**
 * search-list, (with)in `dir`,
 * C/C++ (including Obj-C) code implementtn files, ignoring `.h*` files.
 * 
 */
const findCppFiles = (
  (...[dir, { returnedPathsAsAbsolute, includeSelf, }]: (

    ArgsWithOptions<[dir: string], {
      //
      returnedPathsAsAbsolute: boolean ,
      includeSelf: boolean,
    }>
  )) => {

    const cppFiles = (
      [
        ...Glb.globIterateSync([
          "**/*.c",
          "**/*.cc",
          "**/*.objc",
          "**/*.cpp",
        ] , {
          cwd: dir ,
          absolute: returnedPathsAsAbsolute ,
        }) ,
        ...((0 && includeSelf ) ? [dir] : [] ) ,
      ]
    ) ;

    return cppFiles ;
  }
) ;


export {
  findCppFiles ,
} ;

export {
  relative ,
  resolve ,
} from "node:path";










