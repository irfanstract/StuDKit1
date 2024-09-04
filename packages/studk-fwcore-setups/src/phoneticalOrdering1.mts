




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import { Ordering, } from './util-all.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsWithOptions ,
} from "studk-fwcore/src/util/C1.ts" ;

// const e = ({ ["\u00DF"]: "e" }) ;

const PHONORM = (s: string) => (
  s
  .toLowerCase()
  .replace(/[^\s\w]/g, "")
  // 탟
  .replace(/\s+/g, " " )
  // æäœö
  .replace(/i(?=[kcg]|[ao]|[dt]|[resz])/g, "ai")
  .replace(/æ|ä/g, "ae")
  .replace(/œ|ö/g, "oi")
  .replace(/ø/g, "ou")
  .replace(/ü/g, "ui")
  .replace(/([bp]h|c[aou]|cha|n[cg]|n[eij]|[sz](?:ch|k|h)|[sz]h|[\S\s])/g, ".$1" ).split(".")
  .map((l) => {
    switch (l) {
      case "u":
      case "v":
      case "w":
      case "bh":
        return "bzze" ;
      case "p":
      case "ph":
      case "f":
        return "bzpk" ;
      case "g":
      case "cu":
        return "bztc" ;
      case "k":
      case "co":
      case "ca":
        return "bztk" ;
      case "c":
        return "bzwk" ;
      case "m": return "bzzl" ;
      case "o": return "bzzz" ;
      case "a": return "hzzze" ;
      case "k": return "gzzz" ;
      case "x": return "rzze" ;
      case "r": return "rzzz" ;
      case "d": return "tzpa" ;
      case "e": return "tzpd" ;
      case "n":
        return "tzpe" ;
      case "cha":
        return "tzpq" ;
      case "sch":
      case "sh":
        return "tzps" ;
      case "s": return "tzzf" ;
      case "z": return "tzzg" ;
      case "i": return "tzzi" ;
      case "y": return "tzzj" ;
      case "j": return "tzzs" ;
    }
    return l ;
  } ).join(" ")
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






