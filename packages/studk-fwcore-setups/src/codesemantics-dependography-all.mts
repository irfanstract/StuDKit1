




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

import { PHONORM, getPhoneticalOrdering, } from 'studk-fwcore-setups/src/phoneticalOrdering1.mjs';




/* PLATFORM */

import {

  /* PLATFORM PATHS */

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,
  Glb,

  /* PLATFORM I/O */
  
  IO,

  /* PLATFORM SHELL */
  
  execAsync,
  exec,
  execSync,
  spawnSync,
} from './util-all.mjs' ;






;

import {
  TS,
} from "./codesemantics-fw.mjs" ;

import {
  loadSrcFile,
} from './codesemantics-fw.mjs';

import {
  runSearch ,
  RS_DESCEND ,
  RS_AS_TERMINAL,
} from "./codesemantics-fw1.mjs" ;

import {
  EsImportSpecifier,
} from 'studk-ts-codeanalysis/src/ts-import-specifier.mjs'; ;

import {
  findAllImportNodes ,
  findAllImports,
  findAllDependedUponPackages,
  FADP,
  isRunTimeImport,
} from 'studk-fwcore-setups/src/codesemantics-dependography-ast.mjs';

import { phoneticalNpmOrd, } from 'studk-fwcore-setups/src/popular-js-package-sorting-1.mjs'; ;

const listJslikeSrcFiles = (
  (...[bp] : [rootDir: string]) => (
    Array.from((
      Glb.globIterateSync("./**/*" , {
        cwd: bp,
        ignore: ["**/dist/**/*", "**/bin/**/*"],
        nodir: true,
        absolute: true,
      } )
    ))
    .filter(e => e.match(/\.[cm]?[jt]sh?x?$/) )
  )
) ;

import {
  loadPackageJson ,
  loadPackageJsonEtc ,
} from "studk-fwcore-setups/src/packagejson-loading-all.mjs" ;

/**
 * gather/get
 * as many {@link NodeRequire bare-specified package ref(s)} as appropriate
 * within the directory
 * 
 */
const getDirAllDependedPackages = (
  (...[bp] : [rootDir: string]) => (
    util.asMentioned(function* () {
      ;

      for (const p of (
        listJslikeSrcFiles(bp)
      ) )
      {
        0 && console["log"](`sc file ${JSON.stringify(p) }`) ;
        yield* (
          findAllDependedUponPackages(loadSrcFile(p ) )
        ) ;
      }
    })
    .toSorted(phoneticalNpmOrd)
  )
) ;

/**
 * gather/get
 * as many {@link NodeRequire bare-specified package ref(s)} as appropriate
 * within the directory expected to be a JS package dir (ie with `package.json`)
 * hence, in addition to processing the src-file(s), also consulting the file `package.json`
 * 
 */
const getPkgDirAllDependedPackages = (
  (...[bp] : [rootDir: string]) => (
    util.asMentioned(function* () {
      ;

      {
        const pMan = loadPackageJson(Path.join(bp, "package.json") ) ;
        yield* (Object.keys(pMan.dependencies || {}) ) ;
        yield* (Object.keys(pMan.peerDependencies || {}) ) ;
        0 && (yield* (Object.keys(pMan.optionalDependencies || {}) ) ) ;
        0 && (yield* (Object.keys(pMan.peerDependencies || {}) ) ) ;
      }

      yield* getDirAllDependedPackages(bp) ;
    })
    .toSorted(phoneticalNpmOrd )
  )
) ;

export {
  findAllImportNodes ,
  findAllImports,
  findAllDependedUponPackages,
  FADP,
} ;
export {
  isRunTimeImport,
} ;

export {
  getDirAllDependedPackages,
  getPkgDirAllDependedPackages,
} ;

export {
  phoneticalNpmOrd,
} ;







