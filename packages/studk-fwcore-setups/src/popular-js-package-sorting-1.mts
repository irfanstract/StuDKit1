




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import { Ordering, } from './util-all.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsWithOptions ,
} from "studk-fwcore/src/util/C1.ts" ;

// const e = ({ ["\u00DF"]: "e" }) ;

import { PHONORM, getPhoneticalOrdering, } from 'studk-fwcore-setups/src/phoneticalOrdering1.mjs';




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

} from './util-all.mjs' ;






;

import {
  EsImportSpecifier,
} from 'studk-ts-codeanalysis/src/ts-import-specifier.mjs'; ;

import {
  loadPackageJson ,
  loadPackageJsonEtc ,
} from "studk-fwcore-setups/src/packagejson-loading-all.mjs" ;

const npyOrd = (
  Ordering.getKeyingComparator((e2: string) => {
    const e1 = e2.replace(/^\@types\/(.+)$/, "$1+!");
    const e = PHONORM(e1);
    return e ;
  } , Ordering.defaultCompare )
) ;





export { npyOrd as phoneticalNpmOrd } ;






