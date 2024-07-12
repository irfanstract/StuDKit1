
"use client" ;

export {} ;





import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






// import "studk-ui/src/quick/studkCssPresets/iui.tsx" ;

// import "@/public/global.css" ;
import "@/public/global1.scss" ;

(async () => {

  if (typeof window !== "undefined")
  {
    console["info"](`importing 'autorefresh-main.mjs'`) ;
    await import("studk-fwcore-setups/src/nav/autorefresh-main.mjs") ;
  }
  else {
    /* on server */
    ;
  }
} )() ;

import {
  describeComponent,
} from 'studk-ui-componentdefinition/src/dec.tsx'; ;

console["log"](`env.tsx reloaded`) ;

export const EnvTsxMainDummyC = (
  describeComponent(function EnvTsxMainDummyCImpl () {
    return <></> ;
  })
) ;







