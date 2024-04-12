
import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
  once,
} from "lodash-es" ;

import { pathToFileURL, } from 'node:url' ;

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { exec, execSync, spawnSync, } from 'node:child_process';

import {
  app ,
  BrowserWindow ,
} from "electron" ;






console["log"]({ cwd: process.cwd(), argv: process.argv, }) ;

import {
  onPlatformReady,
} from './src/platformUtil.mjs';

import {
  startBackendOnPort,
} from './src/mainBackend.mjs';

{
  const pn = random(3000, 57851, false ) ;
  
  (async () => {
    ;

    await onPlatformReady() ;

    console["log"](`platform ready`) ;

    const initMainChildWindow = once(() => (
      new BrowserWindow({
        //
        autoHideMenuBar: true ,
      })
    )) ;

    // TODO
    if (0) {
      const win = initMainChildWindow() ;
      win.loadURL(`data:text/html,<title>not serving the client app</title><body><h1>error, not serving the client app</h1>`) ;
      return ;
    }

    const {
      pc ,
      url ,
    } = await startBackendOnPort(pn) ;

    console["log"]({ url, }) ;
    
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
      setTimeout(resolve, (
        // (25 * 1000)
        // (75 * 1000)
        // (45 * 1000)
        (75 * 1000)
      ) ) ;
    } ) ;
    
    const win = initMainChildWindow() ;
  
    win.loadURL(url);
  } )() ;
}








