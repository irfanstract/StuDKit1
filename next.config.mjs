


// @ts-check





import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;




import { pathToFileURL, } from 'node:url' ;

import { exec, execSync, spawnSync, } from 'node:child_process';







import {
  describeExpectedPkgNames,
  pkgs ,
  nonPlainJsPkgs,
  reactDevServerAppPkgs ,
  internallyNonImportiblePkgs ,
  internallImportiblePkgs, 
  nextJsMustPreCompilePackageList,
} from "./scripts/packageListing.mjs" ;



export default (() => {
  //

  /**
   * @type {import("next").NextConfig }
   */
  const cfg = {
    //

    /* https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages */
    transpilePackages: (
      [...nextJsMustPreCompilePackageList]
    ) ,

  } ;

  return cfg ;
})() ;






