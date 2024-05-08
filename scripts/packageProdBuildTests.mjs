




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




import * as projectActualPaths from "./paths1.mjs" ;

import * as packageListing from "./packageListing.mjs" ;

const {
  getRootPackageManifest ,
} = projectActualPaths ;

const rootPackageManifest = getRootPackageManifest() ;

console["info"]((
  {
    packageListing ,
  }
)) ;

/**
 * was once named `allRuntimePackages` but misleading
 * 
 */
const atp = (
  Object.fromEntries((
    [...Object.entries((
      util.L.pickBy({
        ...(getAllDependencies(rootPackageManifest, { includeDev: true, } ) ) ,
      }, (pkgSpcfiedVer, pkgName) => {
        if (isJsCompileTimeOnlyGoodie(pkgName) ) {
          return false ;
        }
        return true ;
      } )
    )) , ...(packageListing.pkgs.map(e => /** @satisfies {[any,any]} */ ([e, "latest" ]) ) ) ]
    .toSorted(getPhoneticalOrdering() )
  ) )
) ;

console["info"]((
  {
    allRuntimePackages: atp ,
  }
)) ;

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

// void (async () => (
//   console["log"](await (
//     import('studk-fwcore-setups/src/codesemantics-all.mts')
//     .catch(z => { debugger ; return Promise.reject(z) ; } )
//   ) )
// ) )() ;

if (1)
{
  const pkgsSummary = (
    packageListing.pkgs
    .filter(e => {
      if (!(packageListing.externallyImportiblePkgs.includes(e) ) ) { return false ; }
      return true ;
    } )
    .map(nm => ({
      name: nm ,
    }) )
    .map(({ name, }) => {
      const pMan = projectActualPaths.getPackageManifest(name) ;
      const { pBaseRealPath, } = projectActualPaths.getNamedPackagePaths(name) ;
      const actualDepies = (
        getPkgDirAllDependedPackages(pBaseRealPath)
      ) ;
      return /** */ ({
        name: pMan.name ?? name ,
        private: false ,
        description: `package '${name}'` ,
        ...(
          util.L.omit(pMan, ...[
            "name",
            "private",
            "description",
          ] , ...[
            "devDependencies",
            "eslint",
            "main",
          ] )
        ),
        version: pMan.version,
        exports: pMan.exports ?? ({
          "./src/*.mtsx": "./dist/*.mjsx",
          "./src/*.mts": "./dist/*.mjs",
          "./src/*.cts": "./dist/*.cjs",
          "./src/*.tsx": "./dist/*.jsx",
          "./src/*.ts": "./dist/*.js",
          "./src/*": "./dist/*",
          "./static/*": "./static/*",
          "./package.json": "./package.json" ,
        }) ,
        dependencies: (
          util.L.pickBy({
            ...(getAllDependencies(pMan, { includeDev: false, } ) ) ,
            ...(
              util.L.pickBy({
                ...(atp ) ,
              }, (pkgSpcfiedVer, pkgName) => (
                actualDepies.includes(pkgName )
              ) )
            ) ,
          }, (pkgSpcfiedVer, pkgName) => {
            if ((
              isJsCompileTimeOnlyGoodie(pkgName)
            ) ) {
              return false ;
            }
            return true ;
          } )
        ) ,
        license: 'LGPL-3.0-only',
        scripts: (
          util.L.omit(pMan.scripts, ...[
            "dev",
            "build",
            "test",
            "lint",
          ] )
        ) ,
        repository: {
          type: "git",
          url: (
            projectActualPaths.getRepoOriginGitUrl()
          ) ,
        } ,
        physicalPath: projectActualPaths.getNamedPackagePaths(name).pBasePath ,
      }) ;
    } )
  ) ;

  console["info"]('pkgs summary:', (
    pkgsSummary
  )) ;
}

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









