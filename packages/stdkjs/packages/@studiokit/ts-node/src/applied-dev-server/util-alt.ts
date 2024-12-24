
// /// <reference lib="ES2022" />
/// <reference lib="DOM" />





import {
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  assert ,
  once,
  parse,
  ProjectLocalResolveHelper,
  utilReiterated,
  split,
  resolveUrl ,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
  dropSearchParamAndHash,
  mutationallyTransformUrl,
} from '../util';

const once1 = (

  function <const R>(...[runImpl]: [() => R] )
  {

    const runW = (

      once(() => {
        try {
          const v = runImpl() ;
          return { v, } ;
        }
        catch (z: unknown) {
          return { error: (z && (typeof z === "object")) ? z : new Error(getStackOrMessage(z) ), } ;
        }
      })
    ) ;

    const run = () => {
      const { error, v, } = runW() ;
      if (error) { throw error ; }
      return v ;
    } ;

    return run ;
  }
) ;

import L = require("lodash") ;

import type {

  AllOrNeither,
  ConformOrNever, 
  EitherOneProp,

  // PartializeOptionsConditionally ,
  // PartializeOptionsConditionallyAndRequifyIfFalse ,

  // MayOptRecord ,
  // MayOptRecordRevalue ,

} from "../util-recordtypes" ;

import { inspect, } from 'node:util';

const parseUrl = (

  function (...[x] : [x: string])
  : URL
  {

    return URL.canParse(x) ? Object.freeze(new URL(x) ) : assert.fail(new TypeError(`${inspect(x) }`) ) ;
  }
) ;

import type {
  Dispatch ,
} from "react" ;

export {
  once1 ,
  L ,
  inspect ,
  parseUrl ,
  type Dispatch ,
} ;



















