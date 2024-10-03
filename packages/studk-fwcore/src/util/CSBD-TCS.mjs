




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/* `require` is not provided for ESM */
import {
  createRequire,
} from 'studk-fwcore/src/util/CSBD.mjs' ;

/* PLATFORM */

import {

  /* PLATFORM PATHS */

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,

  /* PLATFORM I/O */
  
  IO,

  /* PLATFORM SHELL */
  
  execAsync,
  exec,
  execSync,
  spawnSync,
} from 'studk-fwcore/src/util/CSBD.mjs' ;

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;






;

import TS from "typescript" ;

export { TS, } ;

/** @satisfies {(x: string) => TS.ScriptKind } */
const getScriptKindForFileName = function (x)
{
  if (x.match(/\.[cm]?tsx$/    ) ) { return TS.ScriptKind.TSX    ; }
  if (x.match(/\.[cm]?ts$/     ) ) { return TS.ScriptKind.TS     ; }
  if (x.match(/\.[cm]?jsx$/    ) ) { return TS.ScriptKind.JSX    ; }
  if (x.match(/\.[cm]?js$/     ) ) { return TS.ScriptKind.JS     ; }
  if (x.match(/\.json$/        ) ) { return TS.ScriptKind.JSON   ; }
  if (x.match(/\.jsonc$/       ) ) { return TS.ScriptKind.JSON   ; } // TODO
  return TS.ScriptKind.Unknown ;
} ;

const loadSrcFile = (
  /** @satisfies {(x: string, ) => any } */
  ((url, ) => (
    parseAcquiredSrcText(IO.readFileSync(url, { encoding: "utf-8" } ) , getScriptKindForFileName(url), { originalUrl: url, } )
  ) )
) ;

const parseSrcText = (
  /** @satisfies {(x: string, sk: TS.ScriptKind) => any } */
  ((x, sk) => (
    parseAcquiredSrcText(x, sk, { originalUrl: "<repl>", } )
  ) )
) ;

const parseAcquiredSrcText = (
  /** @satisfies {(...args: import("studk-fwcore-setups/src/util-eawo.mjs").ArgsWithOptions<[code: string, TS.ScriptKind, { originalUrl: string, }], {}> ) => any } */
  ((...[x, sk, { originalUrl, }] ) => (
    TS.createSourceFile(originalUrl, x , { languageVersion: TS.ScriptTarget.Latest, }, true, sk )
  ) )
) ;

export {
  loadSrcFile,
  parseAcquiredSrcText,
  parseSrcText,
} ;





