




import {
  hasOwnProperty,
  memoize,
  assert ,
  once,
  utilReiterated,
  split,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
  EitherOneProp,
} from '../util';

import type {

  AllOrNever,
  ConformOrNever ,

  // PartializeOptionsConditionally ,
  // PartializeOptionsConditionallyAndRequifyIfFalse ,

  // MayOptRecord ,
  // MayOptRecordRevalue ,

} from "./util-recordtypes" ;

import type {
  Dispatch ,
} from "react" ;






type XWhitelistOrBlacklistImpl<PV extends {} | null> = (
  (
    | ((x: PV) => (true | false) )
    | Immutable.Collection<any, PV >
  )
  & { asAppWhitelist ?: boolean, }
) ;

namespace XWhitelistOrBlacklistImpl {
  //

  export function toFnc<PV extends {} | null>(...[x]: [XWhitelistOrBlacklistImpl<PV> ] )
  : (x1: PV) => boolean
  {
    if (typeof x === "function") {
      return x ;
    }
    return (x1: PV) => x.contains(x1) ;
  }

}

type XMapperImpl<PV extends {} | null, V extends {} | null> = (
  (
    | ((x: PV) => V )
    | Immutable.Map<PV, V >
  )
  & { asMapperImpl ?: boolean, }
) ;

namespace XMapperImpl {
  //

  export function toFnc<PV extends {} | null, V extends {} | null>(...[x]: [XMapperImpl<PV, V> ] )
  : (x1: PV) => V | undefined
  {
    if (typeof x === "function") {
      return x ;
    }
    return (x1: PV) => x.get(x1) ;
  }

}


export {
  XWhitelistOrBlacklistImpl ,
  XMapperImpl ,
} ;

















