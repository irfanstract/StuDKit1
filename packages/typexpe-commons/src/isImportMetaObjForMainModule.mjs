


import { throwTypeError, throwAssertionError } from './common_sv.mjs';




import { pathToFileURL, } from 'node:url' ;



import { realpath, realpathSync, } from 'node:fs';

/** @satisfies {() => string } */
const getApparentMainScriptPath = () => (
  process.argv[1] ?? throwTypeError(JSON.stringify({ processArgv: process.argv }) )
) ;



export const isMainModuleByMeta = /** @type {(x: ImportMeta) => Boolean } */ (talkedAbtMdlMeta) => (
  console["log"]({ m: talkedAbtMdlMeta, }) ,
  pathToFileURL(realpathSync(getApparentMainScriptPath() ) ).href === talkedAbtMdlMeta.url
) ;
 
export const sayThisNeedsToBeTheEntryPoint = /** @type {(x: ImportMeta) => void } */ (m) => {
  console["error"](`error: cannot proceed, for having possibly been 'import'ed - needs to've been the entry-point (ie as CLI) in order to proceed. (this module is '${m.url }') `) ;
} ;
 

;





