
/// <reference lib="ES2022" />
/// <reference lib="DOM" />



import { builtinModules as builtinModulesListed0, Module } from 'node:module';
import * as util from 'node:util';

import assert = require('node:assert');
import {
  cachedLookup,
  createProjectLocalResolveHelper,
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  normalizeSlashes,
  once,
  parse,
  ProjectLocalResolveHelper,
  utilReiterated,
  split,
  versionGteLt,
  yn,
  Immutable,
  type ArgsWithOptions, 
  AtLeastEitherProp,
} from './util';

;
/**
 * verbatim what's reported by {@link builtinModulesListed0 `require("node:module").builtinModules`}
 * 
 */
const builtinModulesListed = builtinModulesListed0 ;

/**
 * {@link builtinModules}
 * 
 * - return verbatim
 *   what's reported by {@link builtinModulesListed0 `require("node:module").builtinModules`}
 * 
 * - the harder case of
 *   `electron`, Electron's official "module"
 *   whose `require(...)`ing gives different results depending on whether the running platform ({@link process.execPath}) is Electron (inwhichcase it ends with `namespace` or, possibly, Function) or Node (including `electron --as-regular-nodejs`) (inwhichcase it returns `string` Path ).
 *   assuming that `require` refers to {@link Module.createRequire the native `require`},
 *   `require("node:electron")`, unlike values listed in {@link builtinModulesListed0 `builtinModules`}, will fail (with `ERR_MODULE_NOT_FOUND: cannot find module 'node:electron'`),
 *   raising debate astowhether `electron` deserves to be in this list.
 * 
 */
const builtinModules = (

  utilReiterated(function* () {

    /**
     * return verbatim
     * what's reported by {@link builtinModulesListed0 `require("node:module").builtinModules`}
     * 
     */
    yield* builtinModulesListed ;

    /**
     * the harder case of
     * `electron`, Electron's official "module"
     * whose `nativeRequire(...)`ing gives different results depending on whether the running platform ({@link process.execPath}) is Electron (inwhichcase it ends with `namespace` or, possibly, Function) or Node (including `electron --as-regular-nodejs`) (inwhichcase it returns `string` Path ).
     * `nativeRequire("node:electron")`, unlike values listed in {@link builtinModulesListed0 `builtinModules`}, will fail (with `ERR_MODULE_NOT_FOUND: cannot find module 'node:electron'`),
     * raising debate astowhether `electron` deserves to be in this list.
     * 
     */
    {
    ;
    try {
      ;
      if (isWithinElectronJsInTermsOfRequireElectronPackage() ) {
        yield "electron" ;
      }
    } catch (z) {
      console["warn"](`[EbJs Enumerate BuiltinModules] cannot find module 'electron' `, String(z) ) ;
    }
    }

  })
) ;

/* avoid using `const isSomeDoSome = function () { ... ... }` since we use forward reference! */

/**
 * whether
 * the running platform is Electron rather than Regular NodeJS,
 * intermsa {@link hasAlivatedElectronJsPackageLoadTreatment}
 * 
 */
function isWithinElectronJsInTermsOfRequireElectronPackage()
{

    return (
      hasAlivatedElectronJsPackageLoadTreatment()
    ) ;
}
/**
 * whether
 * `require("electron")` (or {@link ImportMeta the default-import of it })
 * will end with "alivated" `namespace` `ElectronApp`, instead of ending with String Path,
 * which will vary depending on whether being run on Electron or Regular NodeJS
 * 
 */
function hasAlivatedElectronJsPackageLoadTreatment()
{

  /**
   * {@link happensProperElectronJsNamespace};
   * it'd be
   * `object` or `function` if the underlying platform is run as Electron (see also "run Electron as regular Node process"!), or
   * `string` (`path/to/electron.exe`) otherwise
   * 
   * to anticipate future possibility of it yielding object with different `typeof` result
   * we may deserve to handle additional value/result eg `"function"`
   * 
   */
  const happensProperElectronJsNamespace = (
    (typeof require("electron") === "object" )
    || (typeof require("electron") === "function" )
  ) ;

  return happensProperElectronJsNamespace ;
}

import { createRequire, } from 'node:module';

import * as VM from "node:vm" ;








export {

  builtinModules ,
  builtinModulesListed ,
  /** @deprecated */
  builtinModulesListed0 ,

  createRequire ,

} ;








