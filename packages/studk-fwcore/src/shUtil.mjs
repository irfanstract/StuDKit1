

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
      shUtilArgParseHyphenPrefixed(process.argv.slice(1) )
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
 * @typedef {{ readonly preConfig: readonly string[], readonly main: readonly string[], }}
 * 
 */
export const ShUtilArgParsedTwo = {} ;

export { shUtilArgParseHyphenPrefixed, } ;

/**
 * 
 * @type {(x: readonly String[]) => ShUtilArgParsedTwo }
 * 
 */ 
function shUtilArgParse(args)
{
  return shUtilArgParseHyphenPrefixed(args) ;
}

/**
 * 
 * classify the __leading__ __consecutive sequence__ of {@link String.match hyphen-prefixed} items, as `configTokens`, and
 * classify the rest, as `mainTokens` ;
 * parsing
 * stops when encountering the first "nonprefixed items",
 * treating further "prefixed items" as {@link MainTokensAndConfigTokens.mainTokens "part of regular args"}
 * 
 * this way:
 * ```
 * > ["--debug", "repl", "--linesep=LF" ]
 * {
 *   configTokens: ["--debug" ],
 *   mainTokens: ["repl", "--linesep=LF", ],
 * }
 * 
 * > ["--directory", "USERPROFILE", ]
 * {
 *   configTokens: ["--directory" ],
 *   mainTokens: ["USERPROFILE", ],
 * }
 * 
 * > ["--directory=USERPROFILE", ]
 * {
 *   configTokens: ["--directory=USERPROFILE" ],
 *   mainTokens: [ ],
 * }
 * 
 * > ["repl", "--linesep=LF", "--suppress-ansibellchars" ]
 * {
 *   configTokens: [],
 *   mainTokens: ["repl", "--linesep=LF", "--suppress-ansibellchars", ],
 * }
 * 
 * > ["--debug=1", "run", "--linesep=LF", "--suppress-ansibellchars", "graphical-notebook", "--contents-autoplay" ]
 * {
 *   configTokens: ["--debug=1", ],
 *   mainTokens: ["run", "--linesep=LF", "--suppress-ansibellchars", "graphical-notebook", "--contents-autoplay", ],
 * }
 * 
 * > ["--debug", "--verbose=2", "repl", "--linesep=LF", "--suppress-ansibellchars" ]
 * {
 *   configTokens: ["--debug", "--verbose=2", ],
 *   mainTokens: ["repl", "--linesep=LF", "--suppress-ansibellchars", ],
 * }
 * 
 * > ["--debug=3", "--", "repl", "--verbose", ]
 * {
 *   configTokens: ["--debug=3", ],
 *   mainTokens: ["repl", "--verbose", ],
 * }
 * 
 * > ["--", "repl", "--verbose", ]
 * {
 *   configTokens: [ ],
 *   mainTokens: ["repl", "--verbose", ],
 * }
 * 
 * > ["--", "--", "--verbose", "repl", ]
 * FAILS WITH "duplicate no-more-flags mark"
 * 
 * > ["--", "--verbose", "repl", ]
 * FAILS WITH "found flags after no-more-flags mark"
 * 
 * ```
 * 
 * the delimiting hyphen-sequences (eg `--`, `---`) occuring in array `x`
 * will not be included either way in the returned dict.
 * it is an error if two such sequences occur consecutively (eg in `my-cmd --verbose=1 -- -- subcmd --flag1=where args`),
 * since there are two plausible interpretations for that ((a) treat as one, (b) treat the second ones as positional arg )
 * 
 * @type {(x: readonly String[], options?: { assumedSrcIndex?: number ; } ) => ShUtilArgParsedTwo }
 * 
 */ 
function shUtilArgParseHyphenPrefixed(...[args, { assumedSrcIndex = 0, } = {} ])
{
  ;

  /** @type {(x: string) => boolean} */
  function shallBeConsideredEndOfFlagsMark(x)
  { return !!(x.match(HYPHEN_ONLY_STRINGS) || x === NOMOREARGS ) ; }

  /**
   * if the next item is a token beginning with hyphen (`-`), [...]
   * 
   */
  if (args[0]?.match(/^\-/g) )
  {
    const currentArgItem = args[0] ;

    /**
     * if the next token {@link shallBeConsideredEndOfFlagsMark},
     * mark the remainder as positional, app args
     * 
     */
    if (shallBeConsideredEndOfFlagsMark(currentArgItem) )
    {
      ;

      if (shallBeConsideredEndOfFlagsMark(args[1] ?? "" ) )
      { return util.throwTypeError(`ambiguous consecutive end-of-flags mark, ${shFormatArgsFaultWhereout({ whereI: assumedSrcIndex + 1, fullSrcTokens: args, }) } `) ; }

      const m = args.slice(1) ;
      if (shUtilArgParseHyphenPrefixed(m , { assumedSrcIndex: assumedSrcIndex + 1 , } ).preConfig.length )
      { return util.throwTypeError(`found config flags immediately after end-of-flags mark, ${shFormatArgsFaultWhereout({ whereI: assumedSrcIndex + 1, fullSrcTokens: args, }) } `) ; }

      return {
        preConfig: [] ,
        main: m ,
      } ;
    }

    {
      const { main, preConfig: remainingPreConfigFlags, } = (
        shUtilArgParseHyphenPrefixed(args.slice(1) , { assumedSrcIndex: assumedSrcIndex + 1 , } )
      ) ;
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

/**
 * 
 * @type {(options: { whereI: number , fullSrcTokens: readonly string[] } ) => string }
 */
function shFormatArgsFaultWhereout({ whereI: assumedSrcIndex, fullSrcTokens: assumedSrcTokens, })
{
  return `at ${`pos ${assumedSrcIndex}` } of ${JSON.stringify(assumedSrcTokens) }` ;
}

export const HYPHEN_ONLY_STRINGS = /^\-\-+$/ ;

const NOMOREARGS = ("--no-more-args") ;






