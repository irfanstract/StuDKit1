




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
} from './util-all.mjs' ;

/** @type {NodeRequire} */
const require = createRequire(import.meta.url) ;






;

import {
  TS,
} from "./codesemantics-fw.mjs" ;

import {
  loadSrcFile,
} from './codesemantics-fw.mjs';

// /**
//  * 
//  * @type {<T>(...a: [string, ] ) => T }
//  * 
//  * @deprecated
//  */
// const checkFile = (
//   (...[url,]) => {
//     console["warn"](loadSrcFile(url) ) ;
//   }
// ) ;

// /**
//  * 
//  * @type {<T>(...a: [TS.Node, { extractTopLevelAll: (...x: [TS.Node]) => T[] , chd: (...x: [TS.Node]) => readonly TS.Node[] } ] ) => T[] }
//  * 
//  */
// const runSearch = (
//   (...[root, { extractTopLevelAll, chd, }]) => {
//     ;
//     /** @type {readonly ((ReturnType<typeof extractTopLevelAll> )[number] )[] } */
//     let x = [] ;
//     // TS.visitNodes()
//     root.forEachChild(childNd => {
//       x = [...x, ...extractTopLevelAll(childNd) ] ;
//     } ) ;
//     TS.visitNodes ;
//     return x ;
//   }
// ) ;

// /**
//  * 
//  * @type {<T>(...a: [TS.Node, readonly RSMER<any, T>[] ] ) => T }
//  * 
//  */
// const runSearchAdv = (
//   (...[root, rsms]) => {
//     ;
//   }
// ) ;

// /**
//  * @typedef {{ matches: (x: TS.Node ) => x is SpecificNd, extract: (x: SpecificNd) => T } }
//  * @template {TS.Node} SpecificNd
//  * @template T
//  */
// /** */
// const RSMER = {} ;

// const rdc = (
//   /**
//    * 
//    * @type {<T>(...a: [{ getReducer: (x: TS.Node ) => { reduce: (x: readonly T[] ) => NoInfer<T> } , } ] ) => T }
//    * 
//    */
//   (...[{ getReducer, }]) => {
//     ;
//   }
// ) ;

// export {
//   /**
//    * @deprecated
//    */
//   checkFile,
// } ;

/**
 * 
 * 
 */
const runSearch: <T>(...a: [TS.Node, (x: TS.Node) => RS_PERNODEMODE<T, any> ]) => readonly T[] = (
  (...[e, getDescentMode]) => {
    ;
    const rspn = getDescentMode(e) ;
    if (rspn instanceof RS_DESCEND ) {
      return (
        (e.getChildren() )
        .flatMap(e => (
          runSearch(e, getDescentMode)
        ) )
        .slice(0)
      ) ; 
    }
    if (rspn instanceof RS_AS_TERMINAL ) {
      return (
        (rspn as ((typeof rspn) extends RS_PERNODEMODE<infer R, any> ? RS_AS_TERMINAL<R, any> : never ))
        .extract(e)
      ) ;
    }
    return util.throwTypeError(`unrecognised descend-mode ${rspn}`) ;
  }
) ;

class RS_PERNODEMODE<out R, in Nd> { constructor( ) {} }

class RS_DESCEND extends RS_PERNODEMODE<any, any> { constructor( ) { super() ; } }

class RS_AS_TERMINAL<out R, in Nd extends TS.Node> extends RS_PERNODEMODE<R, Nd>
{
  constructor(
    public extract: (...x: [Nd]) => readonly R[] ,
  )
  { super() ; }
}

export {
  runSearch ,
  RS_DESCEND ,
  RS_AS_TERMINAL ,
  RS_PERNODEMODE,
} ;







