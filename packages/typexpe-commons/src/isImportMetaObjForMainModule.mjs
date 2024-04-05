


import { throwTypeError, throwAssertionError } from './common_sv.mjs';




import { pathToFileURL, } from 'node:url' ;



export const isMainModuleByMeta = /** @type {(x: ImportMeta) => Boolean } */ (m) => (
  pathToFileURL(getProcessArgv1() ).href === m.url
) ;
 
export const sayThisNeedsToBeTheEntryPoint = /** @type {(x: ImportMeta) => void } */ (m) => {
  console["error"](`error: cannot proceed, for having possibly been 'import'ed - needs to've been the entry-point (ie as CLI) in order to proceed. (this module is '${m.url }') `) ;
} ;
 


/** @satisfies {() => string } */
const getProcessArgv1 = () => (
  process.argv[1] ?? throwTypeError(JSON.stringify({ processArgv: process.argv }) )
) ;






