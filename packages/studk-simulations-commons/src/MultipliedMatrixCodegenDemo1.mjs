



import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
} from "lodash-es" ;






import { getMultipliedMatrCtor, } from "./LinearMap1.mjs";





import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';



if ((
  /* whether this is being run as the main module */
  isMainModuleByMeta(import.meta )
))
{
  console["info"]((
    getMultipliedMatrCtor([1, 2, 3, 4])
    .toString()
  )) ;
}









