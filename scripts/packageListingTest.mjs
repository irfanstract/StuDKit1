




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/**
 * 
 * @typedef {import("studk-ui/src/fwCore/ewo.ts").XJson.IDictFor<k, v> }
 * @template {string} [k=string]
 * @template {import("studk-ui/src/fwCore/ewo.ts").XJson.IAny} [v=any]
 * 
 */
/**
 * 
 */
const XDict = {};

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

/**
 * 
 * @type {(x: import("studk-fwcore-setups/src/util-p.mts").PackageManifest ) => import("studk-fwcore-setups/src/util-p.mts").PrDependencyDict }
 */
function getAllDependencies(pMan)
{
  // TODO
  return {
    ...pMan.dependencies        ,
    ...pMan.peerDependencies    ,
    ...(0 ? pMan.optionalDependencies : {}),
    ...(0 ? pMan.devDependencies      : {}),
  } ;
}




import * as projectActualPaths from "./paths1.mjs" ;

import * as packageListing from "./packageListing.mjs" ;

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
      const pMan = projectActualPaths.getPackageManifest(name) ;
      return {
        name: pMan.name ?? name ,
        version: pMan.version,
        exports: pMan.exports ?? pMan.main ,
        dependencies: (
          Object.keys(getAllDependencies(pMan) )
        ) ,
        physicalPath: projectActualPaths.getNamedPackagePaths(name).pBasePath ,
      } ;
    } )
  ) ;

  console["info"]('pkgs summary:', (
    pkgsSummary
  )) ;
}









