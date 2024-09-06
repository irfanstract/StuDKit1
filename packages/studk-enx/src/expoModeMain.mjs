
import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
  once,
} from "lodash-es" ;

import { pathToFileURL, } from 'node:url' ;

import { shUtilArgParse, getAppArgs, } from './shUtil.mjs';

import { isMainModuleByMeta } from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';

import { exec, execSync, spawnSync, } from 'node:child_process';

import {
  app ,
  BrowserWindow ,
} from "electron" ;






console["log"]({ cwd: process.cwd(), }) ;

console["log"]({ argv: process.argv, }) ;

const argsParsed = shUtilArgParse(getAppArgs() ) ;

const effectiveAppRootDir = process.cwd() ;

console["log"]({ effectiveAppRootDir, }) ;

import {
  specifiesNoAppMode,
} from './launching1.mjs';

import {
  onPlatformReady,
} from './platformUtil.mjs';

import {
  startBackendOnPort,
} from './mainBackend.mjs';

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
    if (argsParsed.preConfig.some(x => specifiesNoAppMode(x) ) )
    {

      const win = initMainChildWindow() ;
      win.loadURL(`data:text/html,${encodeURIComponent((
        util.stringLinesConcat(function* () {
          yield `<title>not serving the client app</title>` ;
          yield `<style>` ;
          yield `body { font-family: system-ui, "Cambria", "DejaVu Serif", "Roboto Serif", serif ; }` ;
          yield `p, blockquote, pre { line-height: 1.5em ; }` ;
          yield `</style>` ;
          yield `` ;
          yield `<body>` ;
          yield `<h1>error, not serving the client app</h1>` ;
          yield `<p>you specified <code>--no-app</code>, meaning that we won't load the app.</p>` ;
          yield `<p>the config received by this <code>expoModeMain</code> passage is <code>${JSON.stringify({ argsParsed, effectiveAppRootDir, }) }</code>.` ;
          yield ` the working dir is <code>${process.cwd() }</code>.</p>` ;
          yield `<blockquote>And where a ton of gold reside, comes a lot of dreaming people. &#x2014; Gaussian Arthur</blockquote>` ;
        } )
      ))}`) ;

      return ;
    }

    {
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
    }
  } )() ;
}








