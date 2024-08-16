




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







;

/**
 * 
 * @type {(...args: import("./util-eawo.mjs").ArgsWithOptions<import("./util-eawo.mjs").ArgsWithOptions<[import("studk-fwcore-setups/src/util-p.mts").PackageManifest, ], { includeDev?: boolean, } > , {} > ) => import("studk-fwcore-setups/src/util-p.mts").PrDependencyDict }
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









