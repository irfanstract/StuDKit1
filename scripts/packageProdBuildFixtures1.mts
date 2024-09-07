




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

/**
 * special value for `version`
 * to signify that
 * the affected ident
 * refers to a deliverable (with)in the current repo's `packages` (hence the term "monorepo")
 * 
 */
const SEMVER_SAMEREPO = "devel" ;

export {
  SEMVER_SAMEREPO ,
} ;




import {
  projectActualPaths,
  packageListing,
} from './moduleListing.mjs'; ;

const {
  getRootPackageManifest ,
} = projectActualPaths ;

const rootPackageManifest = getRootPackageManifest() ;

console["info"]((
  {
    packageListing ,
  }
)) ;

export {
  projectActualPaths,
  packageListing,
  getRootPackageManifest,
  rootPackageManifest,
} ;


const atp0 = (
  Object.fromEntries((
    [
      ...(
        Object.entries((
          getAllDependencies(rootPackageManifest, { includeDev: true, } )
        ))
      ) ,
      ...(
        packageListing.pkgs
        .map(e => ([e, SEMVER_SAMEREPO ] satisfies [any,any]) )
      ) ,
    ]
    .toSorted(Ordering.getKeyingComparator(e => e[0] , phoneticalNpmOrd ) )
  ) )
) ;

const atp = (
  Object.fromEntries((
    Object.entries(atp0)
    .filter(([pkgName, pkgSpcfiedVer]) => {
      ;
      if ((
        isJsCompileTimeOnlyGoodie(pkgName)
      ) ) {
        return false ;
      }
      return true ;
    })
    .toSorted(Ordering.getKeyingComparator(e => e[0] , phoneticalNpmOrd ) )
  ) )
) ;

console["info"]((
  {
    atp0,
    atp ,
  }
)) ;

// prodBuildFixups
namespace prodBuildFixups { ; }

namespace prodBuildFixups
{
  ;

  export namespace perPackageManifestFixups
  {
    ;
  
    export function getRepairedForNamedPackage(...[name]: [name: string] )
    : object
    {
      ;
      const pMan = projectActualPaths.getNamedPackageManifest(name) ;
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
        version: pMan.version ?? "0.0.1" ,
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
          /* note: later-occuring tuples will dominate their key(s); https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map-constructor . */
          Object.fromEntries((
            util.reiterated(function* () {
  
              yield* (
                Object.entries((
                  atp
                ))
                .filter(([pkgName, pkgSpcfiedVer]) => (
                  actualDepies.includes(pkgName )
                ) )
              ) ;
  
              yield* (
                Object.entries((
                  getAllDependencies(pMan, { includeDev: false, } )
                ))
              ) ;
              
            } )
            /**
             * close the doors from breakages by
             * pinning all these packages to their exact version(s), the version(s) we've been living with
             * .
             * 
             */
            .map(([pkgName, pkgSpcfiedVer]) => (
              /** @satisfies {[any, any]} */ ([pkgName, (
                (projectActualPaths.getNamedPackageActualVersion(pkgName) ?? pkgSpcfiedVer)
                .replace(/^(\^|\~)(?=[01-9])/g, "" )
              ) ])
            ))
          ))
        ) ,
        license: 'LGPL-3.0-only',
        scripts: (
          perPackageManScriptsFixups.getDerived(pMan.scripts ?? {} )
        ) ,
        repository: {
          type: "git",
          url: (
            projectActualPaths.getRepoOriginGitUrl()
          ) ,
        } ,
        physicalPath: projectActualPaths.getNamedPackagePaths(name).pBasePath ,
      } as const ) ;
    }
  }
  
  export namespace perPackageManScriptsFixups
  {
    export function getDerived(...[s] : [ReturnType<typeof projectActualPaths.getNamedPackageManifest >["scripts"] & {} ] )
    {
      return (
        util.L.omit(s, ...[
          "dev",
          "build",
          "test",
          "lint",
        ] )
      ) ;
    }
  }

}

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
    .map(({ name, }) => prodBuildFixups.perPackageManifestFixups.getRepairedForNamedPackage(name) )
  ) ;

  console["info"]('pkgs summary:', (
    pkgsSummary
  )) ;
}

export {
  atp0,
  atp,
  prodBuildFixups,
} ;











