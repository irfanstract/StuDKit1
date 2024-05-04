



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

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from 'studk-ui/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-ui/src/fwCore/ewo.ts'; ;

import type {
  // ContinuousLinearRange ,
} from 'studk-ui/src/fwCore/linearValues.ts'; ;






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/meta/react/dbc.tsx'; ;

// import Link from "next/link" ;







const withState = (
  function <T extends null | {}>(...[{ initialVal, }, rf,] : [...ArgsWithOptions<[], { initialVal: NoInfer<T>, }> , XRF<T> ])
  {
    return (
      <WithStateC
      children={rf }
      initialVal={initialVal}
      />
    ) ;
  }
) ;

/**
 * the render callback type, shared
 * 
 */
type XRF<T> = (...args: [value: T, options: { setState: NoInfer<React.Dispatch<React.SetStateAction<T> > >, } ] ) => (Extract<React.ReactNode, string | object> | null) ;

const WithStateC = (
  function WithStateCImpl<T extends null | {}>({ children, initialVal, } : { initialVal: T, children: XRF<T>, })
  {
    const [s, setState,] = React.useState(initialVal) ;
    return (
      <React.Fragment
      children={children(s, { setState, } ) }
      />
    ) ;
  }
) ;

export {
  /** @deprecated */
  withState ,
  /** @deprecated */
  WithStateC ,
} ;










