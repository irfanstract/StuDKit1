#!/usr/bin/env node





import {
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  assert ,
  once,
  parse,
  ProjectLocalResolveHelper,
  utilReiterated,
  split,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
  joinUrlNoBsp,
} from './util';

import {
  EitherOneProp,
} from "./util-recordtypes" ;




/* `express` top-level can't be safely imported by ESM */
import Express = require("express") ;




import * as baseApps from "./applied-dev-server/base-app" ;

import {
  RHPC ,
} from "./applied-dev-server/base-ejs" ;

import {
  RxStyleApp ,
} from "./applied-dev-server/appfmt-rx" ;

/**
 * {@link createApp} .
 * 
 * ```
 * const app = createApp(.....);
 * 
 * // EXPRESSJS
 * 
 * app.listen(pn, () => {
 *   console["info"](`please check http://localhost:${pn}`) ;
 * }) ;
 * 
 * // NODEHTTP
 * 
 * require("node:http").createServer(app, certs, ).listen(pn, () => {
 *   ...
 * }) ;
 * 
 * require("node:https").createSecureServer(app, certs, ).listen(pn, () => {
 *   ...
 * }) ;
 * 
 * ```
 * 
 * doesn't automatically start;
 * please manually run `listen` or `serve` or
 * pass it to custom backend of choice (eg `https` etc).
 * 
 */
export const createApp = (

  function (...iArgs : (
    Parameters<typeof createApps>
  ) )
  {
    const [app , ] = createApps(...iArgs) ;
    return app ;
  }
) ;

const createApps = (

  function (...iArgs : (
    ArgsWithOptions<[coreApp: RxStyleApp], (
      & {  }
    )>
  ) )
  {
    const [core, opts] = iArgs ;

    const metaBaseDirPath = (
      joinUrlNoBsp("/", "%20%20internal/" )
    ) ;

    const entrySiteApp = (
      (() => {
        // const baseApp = baseApps.createBaseAppMiddleware() ;
        const ap = Express() ;
        ap.use(core.ejsFrontend ) ;
        return ap ;
      })()
    ) ;

    const codeSvcApp = (
      (() => {
        const ap = Express() ;
        // ap.use(baseApp) ;
        return ap ;
      })()
    ) ;

    const codeDirPath = (
      joinUrlNoBsp(metaBaseDirPath , "code" )
    ) ;

    console["warn"](Date(), {
      metaBaseDirPath ,
      codeDirPath ,
    }) ;

    const app = Express() ;
    // const respondWithHtmlPageCont = (
    //
    //   (...[requ, respo, code]: [Express.Request<any>, Express.Response<any>, code: string] ) => {
    //     ;
    //     const dt = Date() ;
    //     const origin = requ.header("host") ?? "???" ;
    //     const originHref = "http://" + origin ;
    //     const pathnameHref = originHref.replace(/\/?$/, () => requ.path )  ;
    //     const visibleTrailer = (
    //       `<p> <code>${pathnameHref }</code> <code>${dt}</code> - <code>${origin }</code> </p>`
    //     ) ;
    //     respo.send((
    //       `<!doctype html>
    //       <html>
    //       <head>
    //       <meta charset="utf-8" >
    //       <base href="${originHref.replace(/\/?$/, () => "/" ) }">
    //       </head>
    //       <body>
    //       <x-econtentdivshallnotoverflowoff>
    //       ${code }
    //       </x-econtentdivshallnotoverflowoff>
    //       <div>
    //       <script>
    //         "use strict";
    //         { setTimeout(() => location.reload() , 90 * 1000 ); console["info"](${JSON.stringify(`autoreload activated`) }); }
    //       </script>
    //       ${visibleTrailer } 
    //       `
    //     )) ;
    //   }
    // ) ;
    app.use(function (requ, respo, inext) {
      try {
        /**
         * note: while browsers still respect `no-store`,
         * some browsers has started ignoring `no-cache`
         * 
         */
        respo.setHeader("Cache-Control", "no-store") ;
      } finally {
        ;
        inext() ;
      }
      ;
    } ) ;
    // app.get("/", function (requ, respo) {
    //   respo.setHeader("Content-Type", "text/html") ;
    //   respo.status(200);
    //   respondWithHtmlPageCont(requ, respo, `<h1> Welcome </h1> <p> powered by <code>@studiokit/ts-node</code> </p>` ) ;
    //   ;
    // } ) ;
    app.use("/", entrySiteApp ) ;
    app.use(codeDirPath , codeSvcApp ) ;
    // app.use(function (requ, respo, inext) {
    //   if (((requ.accepted ?? [] ).map(e => e.type ) ).includes("text/html") ) {
    //     ;
    //     respo.setHeader("Content-Type", "text/html") ;
    //     respo.status(404);
    //     respondWithHtmlPageCont(requ, respo, `<h1> Sorry... Forbidden </h1>` ) ;
    //   } else {
    //     inext() ;
    //   }
    //   ;
    // } ) ;
    // app.use(function (requ, respo, inext) {
    //   {
    //     ;
    //     respo.status(404);
    //     respo.send() ;
    //   }
    //   ;
    // } ) ;
    return [
      // baseApps.createFriendlisedApp(app)
      app
      ,
    ] as const ;
  }
) ;




// TODO
if (require.main === module) {
  //
  // const HTTP = require("http") ;
  // ;

  function L(...[app, { pn, }]: ArgsWithOptions<[app: Express.Application ], { pn: number, }>)
  {
    app.listen(pn, () => {
      console["info"](`app started listening on http://localhost:${pn} please check browse the URL`) ;
    }) ;
  }

  {
    const pn = 3020 ;
    L((
      createApp((
        (() => {
          ;
          const app = (
            RxStyleApp.describeSrcRootedIe('J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/dist-raw/sttsn-devserver/demos/S1/pages', {
              //
              pathSimpleNameToActual: RxStyleApp.PathSimpleNameTranslator.createNoOpInstance()
              ,
            } )
          ) ;
          if (0) {
            const returnValue = (
              app.peer.rerunRelativePath("/")
            ) ;
            console["warn"]({ returnValue, }) ;
          }
          return app ;        
        })()
      ))
    ) , { pn, } ) ;
  }
}



