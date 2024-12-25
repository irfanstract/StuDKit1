


/// <reference lib="ES2022" />



declare global {
  interface ImportAttributes {
    /**
     * 
     * {@link SupportedEsmImportAttribProps.cjsTypeString} for both CJS and ESM,
     * - `"json"` for JSON File,
     * - `"string"` if u want it raw as {@link string},
     * - `"raw"` or `"blob"` if u want it raw as {@link Blob},
     * - `"url"` if u want it raw as {@link URL.href URL-String} (may be Remote URL, or Blob-URL, or Data-URL, depending on config or platform),
     * 
     * ```
     * const RecordType =
     * evaluateModule("./util-recordtypes", {
     *   with: {
     *     type: SupportedEsmImportAttribProps.cjsTypeString,
     *   }
     * })
     * ```
     * 
     * ```
     * const img =
     * evaluateModule("./MainBackground.svg", {
     *   with: {
     *     type: "blob",
     *   }
     * })
     * ```
     * 
     */
    type: string ,
  }
}

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
 * supported subset of known attribs
 * 
 */
interface SupportedEsmImportAttribProps extends Extract<(
  & ImportAttributes
), any > {}

namespace SupportedEsmImportAttribProps {

  /**
   * "dummy" value implied by use of `require(...)` or ESM `import * as L` or `await import(...)`
   * 
   */
  export const cjsTypeString: "cjs" | "commonjs" | "js-module" | "jsm" = (
    "cjs"
  ) ;

  /**
   * the CharSet assumed by `translateInlineScriptIntoCjs` for given value of `esmImportAttribs.type`
   * 
   */
  export function getCharsetNameForTypev(x: string ): NodeJS.BufferEncoding
  {

    if ((
      ["raw", "blob", "bytes", ].includes(x)
    )) {
      return "latin1" ;
    }

    return "utf8" ;
  }

}

const compactStringifyImportAttribs = (

  function (...[attribs]: [attribs: ImportAttributes ])
  {
    return (
      JSON.stringify(Immutable.Map(attribs).toObject(), null )
    ) ;
  }
) ;



type SupportedImportConfig<SpclExtraProps extends object = {}> = (

  /**
   * we made misassumption thinking that the 2nd arg of ES `import(...)` expr (which returns Promise) is exactly {@link ImportAttributes}, but
   * this is wrong, in-fact {@link ImportAttributes the "import attributes"} is {@link ImportAttributes the value of the property `with` of it}
   * 
   */
  & {
    /**
     * we made misassumption thinking that the 2nd arg of ES `import(...)` expr (which returns Promise) is exactly {@link ImportAttributes}, but
     * this is wrong, in-fact {@link ImportAttributes the "import attributes"} is {@link ImportAttributes the value of the property `with` of it}.
     * so we're moving it into `with`, but
     * we'll need to add this constraint sothat callers shall immediately fix up
     * 
     * leave this unset.
     * 
     * @deprecated
     * 
     */
    readonly type ?: never
  }
  
  & {
    /**
     * obligatory;
     * set its `type` to a value iterated in {@link ImportAttributes.type}
     * 
     */
    readonly with: SupportedEsmImportAttribProps,
  }
  & SpclExtraProps
) ;





export {

  SupportedEsmImportAttribProps ,
  compactStringifyImportAttribs ,

  type SupportedImportConfig ,

} ;


















