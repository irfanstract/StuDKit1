

import { util, } from 'typexpe-commons/src/common_sv.mjs';

import { fileURLToPath, pathToFileURL, } from 'node:url' ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { execSync, spawnSync, } from 'node:child_process';
import {  } from 'node:os';






import {
  runExpoMode,
  runExpoModeHelpDump,
  specifiesNoAppMode ,
} from './launching1.mjs';;

export { shMainImpl, } ;

// TODO
/**
 * @type {(x: string[]) => void }
 */
function shMainImpl( args)
{
  const parsedArgs = shUtilArgParse(args) ;
  console["log"]({ parsedArgs, }) ;

  if (parsedArgs.preConfig.some(s => isAcceptableHelpModeSwitch(s) ) )
  {
    ;
    return (
      runExpoModeHelpDump()
    ) ;
  }
  return (
    runExpoMode(parsedArgs.main[0] , {
      noAppMode: parsedArgs.preConfig.some(x => specifiesNoAppMode(x) )
      ,
      originalArgs: parsedArgs.main
      ,
    } )
  ) ;
}

import { shUtilArgParse, isAcceptableHelpModeSwitch, } from './shUtil.mjs';







