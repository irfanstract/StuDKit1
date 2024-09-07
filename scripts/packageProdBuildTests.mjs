




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  Ordering ,
} from "studk-fwcore-setups/src/util-all.mjs" ;

import { PHONORM, getPhoneticalOrdering, } from 'studk-fwcore-setups/src/phoneticalOrdering1.mjs';

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
  Glb,

  /* PLATFORM I/O */
  
  IO,

  /* PLATFORM SHELL */
  
  execAsync,
  exec,
  execSync,
  spawnSync,
} from './util-all.mjs' ;

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;







;

import {
  getAllDependencies,
} from './gadp.mjs'; ;

import {
  isJsCompileTimeOnlyGoodie,
  isBuildToolJs,
  isDefinitelyTypedOrgPackage, 
  isJsCompileTimeGoodie,
} from 'studk-fwcore-setups/src/popular-js-fws.mjs';

import {
  parseSrcText,
  loadSrcFile, 
} from 'studk-fwcore-setups/src/codesemantics-fw.mjs';

import {
  // checkFile, 
  runSearch ,
  findAllImportNodes, 
  findAllImports,
  findAllDependedUponPackages,
  getDirAllDependedPackages,
  getPkgDirAllDependedPackages,
} from 'studk-fwcore-setups/src/codesemantics-all.mts';

import {
  phoneticalNpmOrd,
} from 'studk-fwcore-setups/src/codesemantics-dependography-all.mts';




import {
  SEMVER_SAMEREPO,
  projectActualPaths,
  packageListing,
  getRootPackageManifest,
  rootPackageManifest,
  atp0,
  atp,
  prodBuildFixups ,
} from "./packageProdBuildFixtures1.mts" ;

// import {
//   projectActualPaths,
//   packageListing,
// } from './moduleListing.mjs'; ;

// const {
//   getRootPackageManifest ,
// } = projectActualPaths ;

// const rootPackageManifest = getRootPackageManifest() ;

// console["info"]((
//   {
//     packageListing ,
//   }
// )) ;

// /**
//  * special value for `version`
//  * to signify that
//  * the affected ident
//  * refers to a deliverable (with)in the current repo's `packages` (hence the term "monorepo")
//  * 
//  */
// const SEMVER_SAMEREPO = "devel" ;

// const atp0 = (
//   Object.fromEntries((
//     [
//       ...(
//         Object.entries((
//           getAllDependencies(rootPackageManifest, { includeDev: true, } )
//         ))
//       ) ,
//       ...(
//         packageListing.pkgs
//         .map(e => /** @satisfies {[any,any]} */ ([e, SEMVER_SAMEREPO ]) )
//       ) ,
//     ]
//     .toSorted(Ordering.getKeyingComparator(e => e[0] , phoneticalNpmOrd ) )
//   ) )
// ) ;

// const atp = (
//   Object.fromEntries((
//     Object.entries(atp0)
//     .filter(([pkgName, pkgSpcfiedVer]) => {
//       ;
//       if ((
//         isJsCompileTimeOnlyGoodie(pkgName)
//       ) ) {
//         return false ;
//       }
//       return true ;
//     })
//     .toSorted(Ordering.getKeyingComparator(e => e[0] , phoneticalNpmOrd ) )
//   ) )
// ) ;

// console["info"]((
//   {
//     atp0,
//     atp ,
//   }
// )) ;

// // void (async () => (
// //   console["log"](await (
// //     import('studk-fwcore-setups/src/codesemantics-all.mts')
// //     .catch(z => { debugger ; return Promise.reject(z) ; } )
// //   ) )
// // ) )() ;

// if (1)
// {
//   const pkgsSummary = (
//     packageListing.pkgs
//     .filter(e => {
//       if (!(packageListing.externallyImportiblePkgs.includes(e) ) ) { return false ; }
//       return true ;
//     } )
//     .map(nm => ({
//       name: nm ,
//     }) )
//     .map(({ name, }) => {
//       const pMan = projectActualPaths.getPackageManifest(name) ;
//       const { pBaseRealPath, } = projectActualPaths.getNamedPackagePaths(name) ;
//       const actualDepies = (
//         getPkgDirAllDependedPackages(pBaseRealPath)
//       ) ;
//       return /** */ ({
//         name: pMan.name ?? name ,
//         private: false ,
//         description: `package '${name}'` ,
//         ...(
//           util.L.omit(pMan, ...[
//             "name",
//             "private",
//             "description",
//           ] , ...[
//             "devDependencies",
//             "eslint",
//             "main",
//           ] )
//         ),
//         version: pMan.version ?? "0.0.1" ,
//         exports: pMan.exports ?? ({
//           "./src/*.mtsx": "./dist/*.mjsx",
//           "./src/*.mts": "./dist/*.mjs",
//           "./src/*.cts": "./dist/*.cjs",
//           "./src/*.tsx": "./dist/*.jsx",
//           "./src/*.ts": "./dist/*.js",
//           "./src/*": "./dist/*",
//           "./static/*": "./static/*",
//           "./package.json": "./package.json" ,
//         }) ,
//         dependencies: (
//           /* note: later-occuring tuples will dominate their key(s); https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map-constructor . */
//           Object.fromEntries((
//             util.reiterated(function* () {

//               yield* (
//                 Object.entries((
//                   atp
//                 ))
//                 .filter(([pkgName, pkgSpcfiedVer]) => (
//                   actualDepies.includes(pkgName )
//                 ) )
//               ) ;

//               yield* (
//                 Object.entries((
//                   getAllDependencies(pMan, { includeDev: false, } )
//                 ))
//               ) ;
              
//             } )
//           ))
//         ) ,
//         license: 'LGPL-3.0-only',
//         scripts: (
//           util.L.omit(pMan.scripts, ...[
//             "dev",
//             "build",
//             "test",
//             "lint",
//           ] )
//         ) ,
//         repository: {
//           type: "git",
//           url: (
//             projectActualPaths.getRepoOriginGitUrl()
//           ) ,
//         } ,
//         physicalPath: projectActualPaths.getNamedPackagePaths(name).pBasePath ,
//       }) ;
//     } )
//   ) ;

//   console["info"]('pkgs summary:', (
//     pkgsSummary
//   )) ;
// }

// checkFile(pathFromFileURL(import.meta.url ) ) ;
if (0) {
  const fle = loadSrcFile(pathFromFileURL(import.meta.url ) ) ;
  console["log"]({
    importNodes: findAllImportNodes(fle, ).map(e => e.getText() ) ,
    imports: findAllImports(fle, ) ,
    importedPkgs: findAllDependedUponPackages(fle, ) ,
  }) ;
}

if (0) {
  const bp = Path.join(pathFromFileURL(import.meta.url ), ".." ) ;
  for (const p of (
    Glb.globIterateSync("./**/*" , {
      cwd: bp,
      nodir: true,
      absolute: true,
    } )
  ) )
  {
    console["log"](`sc file ${JSON.stringify(p) }`) ;
  }

  for (const p of packageListing.pkgs) {
    console["log"](`dependencies of pkg '${p}':`, (
      getPkgDirAllDependedPackages((
        projectActualPaths.getNamedPackagePaths(p)
        .pBaseRealPath
      ) )
    )) ;
  }
}









