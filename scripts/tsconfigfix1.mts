




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'

/* `require` is not provided for ESM */
import {
  createRequire,
} from './util-all.mjs' ;

/* PLATFORM */

import {

  /* PLATFORM PATHS */

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,

  /* PLATFORM I/O */
  
  IO,

  /* PLATFORM SHELL */
  
  execAsync,
  exec,
  execSync,
  spawnSync,
} from './util-all.mjs' ;

const require = createRequire(import.meta.url) ;







;

import {
  getAllDependencies,
} from './gadp.mjs'; ;




import {
  projectActualPaths,
  packageListing,
  getNamedPackagePaths,
} from './moduleListing.mjs'; ;

// console["info"]((
//   {
//     packageListing ,
//   }
// )) ;

console["info"]((
  {
    projectActualPaths,
  }
)) ;

const allPkgPaths = (
  (() => {
    const internallyImportiblePkgs = (
      packageListing.internallImportiblePkgs
    ) ;
    ;
    const x2 = Object.fromEntries((
      internallyImportiblePkgs
      .map((pkgName) => (
        [pkgName, getNamedPackagePaths(pkgName) ] as const
      ))
    )) ;
    return x2 ;
  })()
) ;

console["info"]((
  { allPkgPaths , }
)) ;

// if (1)
// {
//   const pkgsSummary = (
//     packageListing.pkgs
//     .filter(e => {
//       if (0) {
//         return !(
//           e.match(/\b(typexpe-commons)\b/g)
//         ) ;
//       }
//       return true ;
//     } )
//     .filter(e => {
//       if (0) {
//         return (
//           !(
//             e.match(/\bencore\b/g)
//             || e.match(/\b(fbreact|next|nextjs)\b/g)
//           )
//         ) ;
//       }
//       return true ;
//     } )
//     .map(nm => ({
//       name: nm ,
//     }) )
//     .map(({ name, }) => {
//       const pMan = projectActualPaths.getNamedPackageManifest(name) ;
//       return {
//         name: pMan.name ?? name ,
//         version: pMan.version,
//         exports: pMan.exports ?? pMan.main ,
//         dependencies: (
//           Object.keys(getAllDependencies(pMan , { includeDev: false, } ) )
//         ) ,
//         physicalPath: projectActualPaths.getNamedPackagePaths(name).pBasePath ,
//       } ;
//     } )
//   ) ;

//   console["info"]('pkgs summary:', (
//     pkgsSummary
//   )) ;
// }









