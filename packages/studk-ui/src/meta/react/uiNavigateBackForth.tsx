
/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets just call for having `"use client"` placed everywhere possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

console["log"](`[uiNavigateBackForth.tsx] init`) ;


import {
  describeComponent ,
} from "#currentPkg/src/meta/react/dhc.tsx" ;






import * as React from "react" ;






export const NavigateBackButton = (
  describeComponent(function NavBackButtonC() {
    return (
      <button
      children="Back"
      onClick={() => history.back() }
      />
    ) ;
  })
) ;

export const NavigateForwardButton = (
  describeComponent(function NavFwdBtnC() {
    return (
      <button
      children="->>"
      onClick={() => history.forward() }
      />
    ) ;
  })
) ;






;










