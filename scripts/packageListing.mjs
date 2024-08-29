




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







import {
  baseDirActualPath ,
  pkgsDirActualPath ,
} from "./paths1.mjs" ;


import { PackageNames, } from './util-all.mjs';


/** @type {PackageNames} */
export const pkgs = (
  // TODO
  IO.readdirSync(pkgsDirActualPath)
) ;

export {
  describeExpectedPkgNames,
} ;

/**
 * {@link describeExpectedPkgNames} .
 * 
 * @type {(...x: import("./util-eawo.mts").ArgsWithOptions<[PackageNames ], import("./util-eawo.mts").AllOrNever1<({ sort: boolean ; deduplicate: boolean })>> ) => PackageNames }
 * 
 */
function describeExpectedPkgNames(...[xPkgs, xpo = {}])
{
  xpo ;
  return (
    util.L.intersection(pkgs, xPkgs)
    .toSorted()
  ) ;
}

/* `toSorted` */
import "core-js/proposals/change-array-by-copy.js" ;


/**
 * *__library__ packages which cannot be directly used in Node since it'd require extra (pre)compilation step* ;
 * for example,
 * packages whose src-code are TypeScript and CoffeeScript files, or
 * those which "imports" `.css` files (typically React-specific) ;
 * 
 * __only the library packages__.
 * `studk-demos` is excluded, as the name suggests ;
 * 
 */
export const nonPlainJsPkgs = (
  // TODO
  describeExpectedPkgNames((
    util.reiterated(function* () {

      /* helper packages each for using the corresponding library */

      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-nextjs') )
      ) ;
      
      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-fbreact') )
      ) ;

      /* our official reusable packages */

      yield 'studk-ui' ;

      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-ui') )
      ) ;

      yield 'studk-uieditmgmt' ;

      {
        yield* (
          pkgs
          .filter(nm => nm.startsWith('studk-i3d') )
        ) ;
        yield* (
          pkgs
          .filter(nm => nm.match(/\bencore\b/g ) )
        ) ;
      }
    })
  ))
) ;

export const internalFwPackages = (
  describeExpectedPkgNames((
    util.reiterated(function* ()
    {
      for (const pnm of pkgs) {
        if (pnm.match(/\bfwcore\b/g) ) { yield pnm ; }
      }
    } )
  ))
) ;

/**
 * packages which are
 * __application__(s) built on "yyy dev server" (eg `next`, `vite`, `webpack-dev-server`, etc)
 * 
 */
export const webFwkDevServedAppPkgs = (
  describeExpectedPkgNames([
    'studk-demos' ,
  ])
) ;

export const internallyNonImportiblePkgs = (
  describeExpectedPkgNames([
    ...webFwkDevServedAppPkgs ,
  ])
) ;

export const internallImportiblePkgs = (
  describeExpectedPkgNames((
    util.L.without(pkgs, ...internallyNonImportiblePkgs )
  ))
) ;


/**
 * {@link nextJsMustPreCompilePackageList}.
 * see https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages .
 * 
 */
export const nextJsMustPreCompilePackageList = (
  describeExpectedPkgNames((
    util.L.intersection(internallImportiblePkgs, nonPlainJsPkgs )
  ))
) ;


export const externallyNonReusablePkgs = (
  describeExpectedPkgNames([
    ...internalFwPackages ,
    ...internallyNonImportiblePkgs ,
    ...webFwkDevServedAppPkgs ,
  ])
) ;

export const externallyImportiblePkgs = (
  describeExpectedPkgNames((
    util.L.without(pkgs, ...externallyNonReusablePkgs )
  ))
) ;








