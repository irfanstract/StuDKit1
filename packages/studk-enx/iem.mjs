
import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import { pathToFileURL, } from 'node:url' ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { exec, execSync, spawnSync, } from 'node:child_process';

import {
  app ,
  BrowserWindow ,
} from "electron" ;




// console["error"](`nothing to run.`) ;

// {
//   /** exit the app via {@link process.exit}, which needs to be delayed for security reasons */
//   setTimeout(() => {
//     process.exit(1) ;
//   } , 0 ) ;
// }

const pn = random(3000, 57851, false ) ;

(async () => {
  ;
  await new Promise((/** @type {() => void } */ resolve) => {
    ;
    // TODO
    app.once("ready", () => resolve() ) ;
  } ) ;
  console["log"](`app ready`) ;
  
  console["log"]({ cwd: process.cwd, argv: process.argv, }) ;
  
  const pc = exec(`npx next@13.5.6 dev --port ${pn}`, (...[erc, , stderrC]) => (
    /* only taking over logging `erc` here ; `stderr` piping cannot be done here */
    console["error"](erc) ,
    void 0
  ) ) ;
  pc.stderr?.pipe(process.stderr) ;
  
  await new Promise((/** @type {() => void } */ resolve) => {
    ;
    // TODO
    pc.once("spawn", () => resolve() ) ;
  } ) ;
  console["info"](`backend process spawned`) ;
  
  pc.on("exit", () => {
    console["error"](`the server have shut down; running 'app.quit()'`) ;
    app.quit() ;
  }) ;
  
  app.on("will-quit", () => {
    console["error"](`all windows have been closed; shutting down the server`) ;
    pc.kill() ;
  } ) ;
  
  await new Promise((/** @type {() => void } */ resolve) => {
    ;
    // TODO
    setTimeout(resolve, 25 * 1000 ) ;
  } ) ;
  
  const win = new BrowserWindow() ;

  win.loadURL(`http://localhost:${pn}`);
} )() ;





