




import {
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  assert ,
  once,
  parse,
  utilReiterated,
  split,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
} from '../util';

import type {

  PartializeOptionsConditionally ,
  PartializeOptionsConditionallyAndRequifyIfFalse ,

  MayOptRecord ,
  MayOptRecordRevalue ,

} from "./util-recordtypes" ;




/* `express` top-level can't be safely imported by ESM */
import Express = require("express") ;

type EjsRequestResponseAndFallbackTriple = (
  [Express.Request, Express.Response, invokeNextHandler: Express.NextFunction,]
) ;
namespace EjsRequestResponseAndFallbackTriple { ; }






export {
  EjsRequestResponseAndFallbackTriple ,
} ;







