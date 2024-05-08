




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import { Ordering, } from './util-all.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsWithOptions ,
} from "studk-ui/src/fwCore/ewo.js" ;

// const e = ({ ["\u00DF"]: "e" }) ;

const PHONORM = (s: string) => (
  s
  .toLowerCase()
  // 탟
  .replace(/\s+/g, " " )
  .replace(/([bp]h|n[cg]|n[eij]|ch|[sz](?:ch|k)|[sz]h|\S)/g, " $1" )
  // æäœö
  .replace(/ß/g, "ss")
  .replace(/æ|ä/g, "ae")
  .replace(/œ|ö/g, "oi")
  .replace(/ø/g, "ou")
  .replace(/ü/g, "ui")
  // .replace(/r/g, "tzz")
  // .replace(/a/g, "ozz")
  // .replace(/u/g, "oaa")
  // .replace(/b/g, "paa")
  // .replace(/s/g, "zaa")
  // .replace(/t/g, "dzz")
  // .replace(/d/g, "zzz")
  .replace(/[a-z]/g, (l) => {
    switch (l) {
      case "p":
      case "ph":
        return "p" ;
    }
    return l ;
  } )
  .replace(/[a-z]/g, (l) => {
    switch (l) {
      case "u":
      case "v":
      case "w":
        return "bzze" ;
      case "p":
      case "f":
        return "bzzk" ;
      case "m": return "bzzl" ;
      case "o": return "bzzz" ;
      case "a": return "hzzze" ;
      case "k": return "gzzz" ;
      case "x": return "rzze" ;
      case "r": return "rzzz" ;
      case "d": return "tzza" ;
      case "e": return "tzzd" ;
      case "n": return "tzze" ;
      case "s": return "tzzf" ;
      case "z": return "tzzg" ;
      case "i": return "tzzi" ;
      case "y": return "tzzj" ;
      case "j": return "tzzs" ;
    }
    return l ;
  } )
) ;

function getPhoneticalOrdering()
{
  return (
    Ordering.getKeyingComparator(([pkgNm] : [string, any] ) => PHONORM(pkgNm) , Ordering.defaultCompare)
  ) ;
}

export { getPhoneticalOrdering, } ;

export {
  /** @deprecated */
  PHONORM,
} ;






