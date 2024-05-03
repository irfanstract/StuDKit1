




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

import { pathToFileURL, } from 'node:url' ;

import * as FS from 'node:fs' ;
import * as Path from 'node:path' ;

/* `require` is not provided for ESM */
import { createRequire, } from 'node:module' ;

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;

import { exec, execSync, spawnSync, } from 'node:child_process';







;

/**
 * 
 * @type {(x: XDict<"dependencies" | "peerDependencies", XDict<string, string>>) => XDict }
 */
function getAllDependencies(pMan)
{
  // TODO
  return { ...pMan.dependencies, ...pMan.peerDependencies, } ;
}




import * as projectActualPaths from "./paths1.mjs" ;

import * as packageListing from "./packageListing.mjs" ;

console["info"]((
  {
    packageListing ,
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
      pjsLoc: `${nm }/package.json` ,
      name: nm ,
    }) )
    .map(({ pjsLoc, name, }) => {
      const pMan = require(pjsLoc) ;
      return {
        name: pMan.name ?? name ,
        dependencies: getAllDependencies(pMan) ,
        pjsLoc,
      } ;
    } )
  ) ;

  console["info"]({
    pkgsSummary,
  }) ;
}









