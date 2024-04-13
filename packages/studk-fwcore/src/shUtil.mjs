

import { util, } from 'typexpe-commons/src/common_sv.mjs';

import { fileURLToPath, pathToFileURL, } from 'node:url' ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { execSync, spawnSync, } from 'node:child_process';
import {  } from 'node:os';






// TODO
/**
 * computes
 * {@link process.argv `argv`} minus
 * the first two items `['nodeOrCode.exe', 'myApp.js']` (or three in case of extra intervening `--` like in `['nodeOrCode.exe', '--', 'myApp.js']` )
 * 
 */
export function getAppArgs()
{
  return (
    ((
      shUtilArgParse(process.argv.slice(1) )
      .main
    ))
    .slice(1)
  ) ;
}

/**
 * 
 * @type {(x: string) => boolean }
 */
export function isAcceptableHelpModeSwitch(s)
{
  return !!(
    s.toLowerCase().match(/^\-+(he?lp|h)$/)
  ) ;
}

/**
 * EXPERIMENTAL ; build {@link execSync `execSync`-compatible string } from given string-array
 * 
 * @type {(x: readonly (string | null )[]) => string }
 */
export function buildShRefFromStringArray(x)
{
  return (
    x
    .flatMap(/** @return {[String] | [] } */ (x) => {
      if ((typeof x === "string") && (x !== "") ) {
        ;
        // return [JSON.stringify(x) , ] ;
        return [x] ;
      }
      if (x === null || x === undefined ) {
        return [] ;
      }
      if (x === "")
      {
        /**
         * for empty-string we'd have to think hard whether to drop it or instead escape it in shell as `""` ;
         * the safest thing to do is to make user think of this thing
         * 
         */
        return util.throwTypeError(`unexpected empty string as element`) ;
      }
      {
        return util.throwAssertionError() ;
      }
    })
    .join(" ")
  ) ;
}

export { shUtilArgParse, } ;

/**
 * 
 * @type {(x: readonly String[]) => { readonly preConfig: readonly string[], readonly main: readonly string[], }}
 * 
 */ 
function shUtilArgParse(args)
{
  ;

  /**
   * if the next item is a token beginning with hyphen (`-`), [...]
   * 
   */
  if (args[0]?.match(/^\-/g) )
  {
    const currentArgItem = args[0] ;

    /**
     * if the next token is `--`,
     * mark the remainder as positional, app args
     * 
     */
    if (currentArgItem.match(/^\-\-\-*$/) )
    {
      return {
        preConfig: [] ,
        main: args.slice(1) ,
      } ;
    }

    {
      const { main, preConfig: remainingPreConfigFlags, } = shUtilArgParse(args.slice(1) ) ;
      return {
        preConfig: [currentArgItem, ...remainingPreConfigFlags ] ,
        main: main,
      } ;
    }
  }

  return {
    preConfig: [] ,
    main: args ,
  } ;
}






