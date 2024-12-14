#!/usr/bin/env node



/* `express` top-level can't be safely imported by ESM */
import Express = require("express") ;




import * as baseApps from "./applied-dev-server/base-app" ;

/**
 * {@link createApp} .
 * doesn't automatically start;
 * please manually run `listen` or `serve` or
 * pass it to custom backend of choice (eg `https` etc).
 * 
 */
export const createApp = (

  function ()
  {
    const app = baseApps.createApp() ;
    // app.use(function (requ, respo, inext) {
    //   try {
    //     /**
    //      * note: while browsers still respect `no-store`,
    //      * some browsers has started ignoring `no-cache`
    //      * 
    //      */
    //     respo.setHeader("Cache-Control", "no-store") ;
    //   } finally {
    //     ;
    //     inext() ;
    //   }
    //   ;
    // } ) ;
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
    // app.get("/", function (requ, respo) {
    //   respo.setHeader("Content-Type", "text/html") ;
    //   respo.status(200);
    //   respondWithHtmlPageCont(requ, respo, `<h1> Welcome </h1> <p> powered by <code>@studiokit/ts-node</code> </p>` ) ;
    //   ;
    // } ) ;
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
    return app ;
  }
) ;




// TODO
if (require.main === module) {
  //
  // const HTTP = require("http") ;
  // ;
  const pn = 3020 ;
  createApp().listen(pn, () => {
    console["info"](`please check http://localhost:${pn}`) ;
  }) ;
}



