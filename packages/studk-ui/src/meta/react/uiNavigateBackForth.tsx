
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










