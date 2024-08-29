




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/* PLATFORM PATHS */
import {

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,

} from './util-all.mjs' ;

/* PLATFORM I/O */
import {
  IO,

} from './util-all.mjs' ;

/* PLATFORM SHELL */
import {

  execAsync,
  spawn,
  exec,
  execSync,
  spawnSync,

} from './util-all.mjs' ;

/* ETC */
import {
} from './util-all.mjs' ;







;

/**
 * @type {{ [k: string]: { run: (...args: import("./util-eawo.mjs").ArgsWithOptions<[import("./util-p.mjs").LocallyPackageRef, ], { }> ) => void, } } }
 */
const testFwDict = {
  mocha: {
    run: ({ pkgRealPath, }) => (
      execSync(`npx mocha`, { cwd: pkgRealPath, } )
    ) ,
  },
} ;

/**
 * 
 * @satisfies {(...args: [fwName: string ]) => any }
 */
const getTestFw = (fwPackage) => (
  testFwDict[fwPackage] ?? util.throwTypeError(`unsupported test fw ${`'${fwPackage }'` }` )
) ;

/**
 * 
 * @satisfies {(...args: [import("./util-p.mjs").LocallyPackageRef, ...import("./util-eawo.mjs").ArgsWithOptions<[], { fwPackage: string, }> ]) => any }
 * 
 * @deprecated
 */
const runPerPkgTest1 = /** */ function ({ pkgRealPath, }, { fwPackage, } ) {
  // TODO
  const o = (
    execSync(`npm run test`, {
      cwd: pkgRealPath,
      stdio: "inherit",
    } )
  ) ;
  return { o, } ;
} ;

export {
  getTestFw,
  runPerPkgTest1,
} ;

export {
  /** @deprecated */
  testFwDict,
} ;








