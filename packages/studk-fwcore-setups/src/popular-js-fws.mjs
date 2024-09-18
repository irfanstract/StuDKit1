




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/* `require` is not provided for ESM */
import {
  createRequire,
} from './util-all.mjs' ;









/**
 * 
 * @type {(pkgName: string) => pkgName is `@types/${string}` }
 */
const isDefinitelyTypedOrgPackage = (pkgName) => {
  ;
  if (pkgName.startsWith("@types/") ) {
    return true ;
  }
  return false ;
} ;

/**
 * 
 * @type {(x: string) => boolean }
 */
const isJsVmPackage = (pkgName) => {
  ;
  if ((
    ("ts-node|electron".split("|") ).includes(pkgName)
  ) ) {
    return true ;
  }
  return false ;
} ;

/**
 * 
 * @type {(x: string) => boolean }
 */
const isBuildToolJs = (pkgName) => {
  ;
  if ((
    ("hereby|gulp|grunt|mocha|jest".split("|") ).includes(pkgName)
  ) ) {
    return true ;
  }
  if ((
    isJsVmPackage(pkgName)
  ) ) {
    return true ;
  }
  return false ;
} ;

/**
 * 
 * @type {(pkgName: string) => pkgName is ( (`eslint-plugin-${string}` | `@typescript-eslint/${string}`) ) }
 */
const isEsLintPlugin = (pkgName) => {
  ;
  if ((
    (
      (
        pkgName.match(/^\@typescript-eslint\//)
        || pkgName.match(/^eslint(?:-plugin\b)/)
      )
    )
  ) ) {
    return true ;
  }
  return false ;
} ;

/**
 * 
 * @type {(pkgName: string) => pkgName is (("eslint" | "@typescript-eslint") | (`eslint-plugin-${string}` | `@typescript-eslint/${string}`) ) }
 */
const isEsLintBased = (pkgName) => {
  ;
  if ((
    (
      (
        pkgName.match(/^\@typescript-eslint(?:$|\/)/)
        || (pkgName === "eslint")
        ||
        isEsLintPlugin(pkgName)
      )
    )
  ) ) {
    return true ;
  }
  return false ;
} ;

/**
 * 
 * @type {(x: string) => boolean }
 */
const isJsTranspilerOrLinter = (pkgName) => {
  ;
  if ((
    ("swc|babel|typescript".split("|") ).includes(pkgName)
    ||
    (pkgName === "eslint")
    ||
    isEsLintBased(pkgName)
  ) ) {
    return true ;
  }
  return false ;
} ;

/**
 * 
 * @type {(x: string) => boolean }
 */
const isJsCompileTimeOnlyGoodie = (pkgName) => {
  ;
  if (isDefinitelyTypedOrgPackage(pkgName) ) {
    return true ;
  }
  if ((
    isBuildToolJs(pkgName)
  ) ) {
    return true ;
  }
  return false ;
} ;

/**
 * 
 * @type {(x: string) => boolean }
 */
const isJsCompileTimeGoodie = (pkgName) => {
  ;
  if (isJsCompileTimeOnlyGoodie(pkgName) ) {
    return true ;
  }
  if ((
    isJsTranspilerOrLinter(pkgName)
    ||
    isBuildToolJs(pkgName)
  ) ) {
    return true ;
  }
  if ((
    isJsVmPackage(pkgName)
  ) ) {
    return true ;
  }
  return false ;
} ;

export {
  isJsCompileTimeGoodie,
  isJsCompileTimeOnlyGoodie,
  isJsVmPackage,
  isBuildToolJs,
  isJsTranspilerOrLinter,
  isDefinitelyTypedOrgPackage,
} ;








