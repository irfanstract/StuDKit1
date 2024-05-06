
"use client" ;

export {} ;





import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import "studk-ui/src/quick/studkCssPresets/iui.tsx" ;

import "@/public/global.css" ;

import "@/components/jsxStudkCard" ;

/** "the development server has disconnected. refresh the page if necessary." */
{
  const sPeriodInSecs = 0.5 * 60 * 60 ;

  /** note: the timing will be `Date.now()`, not `p.now()` */
  {
    console["warn"](`page will automatically refresh in ${`${sPeriodInSecs } secs` }`) ;

    (async () => {
      await (
        util.startTimeout(sPeriodInSecs * 1000 )
      ) ;

      /**
       * in addition to the delay by {@link sPeriodInSecs} above,
       * an additional delay will be necessary
       * to ensure that
       * client device wake-ups
       * don't get suddenly thrashed by 'reload's which can be CPU-consuming and thereby risking system stability issues
       * .
       * 
       */
      {
        await (
          util.startTimeout(2 * 1000 )
        ) ;
        await (
          util.startTimeout(20 * 1000 )
        ) ;
      }
      location.reload() ;
    })() ;
  }
}







