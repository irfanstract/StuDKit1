




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



import {
  baseDirActualPath ,
  scriptsDirActualPath ,
  distDirActualPath ,
} from "./paths1.mjs" ;



const pbtDirActualPath = (
  Path.join(distDirActualPath, "pbt", )
) ;

IO.mkdirSync(pbtDirActualPath, { recursive: true, } ) ;

const pbtPackagesDirActualPath = (
  Path.join(pbtDirActualPath, "packages", )
) ;

IO.mkdirSync(pbtPackagesDirActualPath, { recursive: true, } ) ;

export {
  pbtDirActualPath ,
  pbtPackagesDirActualPath ,
} ;



/**
 * 
 * {@link getPbtNamedPackagePaths} - also runs `mkdir` for that!
 * 
 */
export const getPbtNamedPackagePaths = (
  util.L.memoize((
    /** @satisfies {(...x: [nm: string, ] ) => object } */
    ((nm => {
      const d = (
        Path.join(pbtPackagesDirActualPath, `${nm}` )
      ) ;
      console["log"](`mkdir(ing) :`, { d, } ) ;
      IO.mkdirSync(d, { recursive: true, } ) ;
      return {
        d,
      } ;
    }))
  ), pkgNm => pkgNm )
) ;

/**
 * 
 * @type {(...x: [nm: string, import("studk-fwcore-setups/src/util-p.mts").PackageManifest] ) => void }
 */
export const resetupPbtNamedPackage1 = (
  (nm, newManf) =>
  {
    const newManfJson = JSON.stringify(newManf, null, 2) ;

    const pRTA = `package (re)generated at ${Date() }` ;

    const { d, } = getPbtNamedPackagePaths(nm) ;

    console["log"](`writing to :`, { d, } ) ;
    IO.writeFileSync(Path.join(d, `README.md` ), (
      util.stringLinesConcat(function* () {
        yield* [] ;
        yield ;
        yield `# Package ${util.mdQuoteCode(nm) } ` ;
        yield ;
        yield `${pRTA}.` ;
        yield ;
        yield ;
        yield ;
      } )
    ), {
      // mode: "r+",
      encoding: "utf-8",
    } ) ;
    IO.writeFileSync(Path.join(d, `package.json` ), newManfJson , {
      // mode: "r+",
      encoding: "utf-8",
    } ) ;
    IO.writeFileSync(Path.join(d, `tsconfig.json` ), (
      util.stringLinesConcat(function* () {
        yield* [] ;
        yield ;
        yield `{` ;
        yield `  "compilerOptions": {` ;
        yield `    "moduleResolution": "node16",` ;
        yield `    "isolatedModules" : true    ,` ;
        yield `    "noEmit"          : true    ,` ;
        yield `    "module"          : "ESNext",` ;
        yield `    "allowImportingTsExtensions": true,` ;
        yield `    // "checkJS"         : true,` ;
        yield `    "strict"         : true,` ;
        yield `    "noUncheckedIndexedAccess": true,` ;
        yield `  },` ;
        yield `}` ;
        yield ;
        yield ;
        yield ;
      } )
    ), {
      // mode: "r+",
      encoding: "utf-8",
    } ) ;

  }
) ;

;












