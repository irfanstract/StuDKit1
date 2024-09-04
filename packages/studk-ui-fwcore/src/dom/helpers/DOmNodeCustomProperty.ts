








/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  RecordFromEntry,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;

import type {
  RecordValue,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






;

import {
  type MutableCSSProperties ,
  describeCallbackAssignedStyleProps ,
  describeByCssStringStyleProps ,
} from "studk-ui-fwcore/src/xt/summerhitsmedia-cssd.tsx" ;

/**
 * 
 */
const setDataProperty = (
  function (...[receiver, name, newVal ] : (
    ArgsWithOptions<[receiver: HTMLOrSVGElement["dataset"], key: string, newVal: string | null ] , {} >
  ) )
  {

    /**
     * although `setProperty` is idempotent
     * it caused increased CPU & RAM usage while DevTools remains open.
     * 
     */
    if ((
      receiver[name]
      === newVal
    )) {
      return ;
    }

    receiver[name] = newVal ;
  }
) ;

/**
 * 
 */
const setCustomCssPrp = (
  function (...[receiver, userspaceName, newVal ] : (
    ArgsWithOptions<[receiver: CSSStyleDeclaration, key: string, newVal: string | null ] , {} >
  ) )
  {

    /**
     * although `setProperty` is idempotent
     * it caused increased CPU & RAM usage while DevTools remains open.
     * 
     */
    if ((
      receiver.getPropertyValue(userspaceName, )
      === newVal
    )) {
      return ;
    }

    receiver.setProperty(userspaceName, newVal ) ;
  }
) ;

export {
  setDataProperty as setDataProperty ,
  setCustomCssPrp as setCustomCssPrp ,
} ;





;




