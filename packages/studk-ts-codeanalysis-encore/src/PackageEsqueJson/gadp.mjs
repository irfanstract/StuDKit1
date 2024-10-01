




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/**
 * @import { ArgsWithOptions, } from "studk-fwcore/src/util/C1.ts"
 * 
 */







;

/**
 * @import { PackageManifest, } from "studk-fwcore-setups/src/util-p.mts"
 * 
 */

/**
 * 
 * @type {(...args: ArgsWithOptions<ArgsWithOptions<[PackageManifest, ], { includeDev?: boolean, } > , {} > ) => import("studk-fwcore-setups/src/util-p.mts").PrDependencyDict }
 */
function getAllDependencies(...[pMan, { includeDev = false, } = {}])
{
  // TODO
  return {
    ...pMan.dependencies        ,
    ...pMan.peerDependencies    ,
    ...(includeDev ? pMan.optionalDependencies : {}),
    ...(includeDev ? pMan.devDependencies      : {}),
  } ;
}


export { getAllDependencies, } ;









