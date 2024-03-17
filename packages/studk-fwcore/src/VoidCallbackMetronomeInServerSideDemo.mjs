


import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
} from "lodash-es" ;





import { newVoidCallbackMetronome, } from "./VoidCallbackMetronome.mjs";






import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';






if (isMainModuleByMeta(import.meta) )
{
  ;
  const mainHandle = (
    newVoidCallbackMetronome(() => {
      console["log"](Date() ) ;
    } , {
      initiallyConfiguredRefreshPeriodMillis: 1.5 * 1000
      ,
      initiallyStart: true ,
    } )
  ) ;
  setTimeout(() => {
    ;
    console["info"](`terminating the watch` ) ;
    mainHandle.close() ;
  } , 15 * 1000 ) ;
}









