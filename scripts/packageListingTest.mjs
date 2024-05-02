




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import { pathToFileURL, } from 'node:url' ;

import * as FS from 'node:fs' ;
import * as Path from 'node:path' ;

/* `require` is not provided for ESM */
import { createRequire, } from 'node:module' ;

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;

import { exec, execSync, spawnSync, } from 'node:child_process';







import * as ief from "./packageListing.mjs" ;

console["info"](ief ) ;

if (1)
{
  console["info"]((
    ief.pkgs
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
        deps: { ...pMan.dependencies, ...pMan.peerDependencies, } ,
        pjsLoc,
      } ;
    } )
  ) ) ;
}









