

import { util, } from 'typexpe-commons/src/common_sv.mjs';

import { fileURLToPath, pathToFileURL, } from 'node:url' ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { execSync, spawnSync, } from 'node:child_process';
import {  } from 'node:os';






import { runExpoMode, } from './launching1.mjs';;

export { shMainImpl, } ;

// TODO
/**
 * @type {(x: string[]) => void }
 */
function shMainImpl( args)
{
  const { main: a, config: configFlags, } = shUtilArgParse(args) ;
  if (configFlags.includes("--help") || configFlags.includes("-h") )
  {
    ;
    return (
      console["info"]((
        util.stringLinesConcat(function* () {
          yield `Expo For JS App` ;
          yield `Usage:` ;
          yield `  run from a directory assumed to be the root-dir of ur app src-tree.` ;
          yield ` ` ;
        } )
      ))
    ) ;
  }
  return runExpoMode(a[0]) ;
}

/** @type {(x: String[]) => { readonly main: string[], readonly config: string[] }} */ 
function shUtilArgParse(args)
{
  ;
  if (args[0]?.match(/^\-/g) )
  {
    const { main, config: remainingConfigFlags, } = shUtilArgParse(args.slice(1) ) ;
    return {
      main: main,
      config: [args[0], ...remainingConfigFlags ] ,
    } ;
  }
  return {
    main: args ,
    config: [] ,
  } ;
}







