




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

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

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;







;

import {
  getAllDependencies,
} from './gadp.mjs'; ;




import {
  projectActualPaths,
  packageListing,
} from './moduleListing.mjs'; ;

console["info"]((
  {
    packageListing ,
  }
)) ;

console["info"]((
  {
    projectActualPaths,
  }
)) ;

if (1)
{
  const pkgsSummary = (
    packageListing.pkgs
    .filter(e => {
      if (0) {
        return !(
          e.match(/\b(typexpe-commons)\b/g)
        ) ;
      }
      return true ;
    } )
    .filter(e => {
      if (0) {
        return (
          !(
            e.match(/\bencore\b/g)
            || e.match(/\b(fbreact|next|nextjs)\b/g)
          )
        ) ;
      }
      return true ;
    } )
    .map(nm => ({
      name: nm ,
    }) )
    .map(({ name, }) => {
      const pMan = projectActualPaths.getNamedPackageManifest(name) ;
      return {
        name: pMan.name ?? name ,
        version: pMan.version,
        exports: pMan.exports ?? pMan.main ,
        dependencies: (
          Object.keys(getAllDependencies(pMan , { includeDev: false, } ) )
        ) ,
        physicalPath: projectActualPaths.getNamedPackagePaths(name).pBasePath ,
      } ;
    } )
  ) ;

  console["info"]('pkgs summary:', (
    pkgsSummary
  )) ;
}









