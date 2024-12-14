




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
} from '../util';




/* `express` top-level can't be safely imported by ESM */
import Express = require("express") ;




/**
 * {@link createBaseAppMiddleware} .
 * doesn't automatically start;
 * please manually run `listen` or `serve` or
 * pass it to custom backend of choice (eg `https` etc).
 * 
 */
const createBaseAppMiddleware = (

  function ()
  {

    const app = Express() ;

    /**
     * ensures that browsers avoid using stale, cached versions,
     * by making sure the necessary Header(s) get set on each Response
     * 
     */
    app.use(createCacheControlNoStoreMiddleware() ) ;

    const homePageApp = (
      RHPC.byHtmlContentTemplate(`<h1> Welcome </h1> <p> this Middleware powered by <code>@studiokit/ts-node</code> in terms of Express. </p>`, { })
    ) ;

    /**
     * install handler for `/`
     * 
     */
    app.get("/", (requ, respo, inext) => (
      homePageApp.applyToHttpRequest(requ, respo, inext)
    ) ) ;

    return app ;
  }
) ;

export {

  createBaseAppMiddleware ,

  // /** @deprecated this is WIP */
  // createBaseApp ,
  // /** {@link createBaseApp}. @deprecated this might be not what u want */
  // createBaseApp as createApp ,

} ;

import {
  RHPC ,
} from "./base-ejs" ;




/**
 * {@link createFriendlisedApp} .
 * doesn't automatically start;
 * please manually run `listen` or `serve` or
 * pass it to custom backend of choice (eg `https` etc).
 * 
 */
const createFriendlisedApp = (

  function (...[mainCoreM]: (
    ArgsWithOptions<[Express.Handler], {} >
  ))
  {

    const app = Express() ;

    const homePageApp = (
      RHPC.byHtmlContentTemplate(`<h1> Welcome </h1> <p> powered by <code>@studiokit/ts-node</code> </p>`, { })
    ) ;

    const forbiddenPathPageApp = (
      RHPC.byHtmlContentTemplate(`<h1> Sorry... Forbidden </h1>`, { })
    ) ;

    /**
     * ensures that browsers avoid using stale, cached versions,
     * by making sure the necessary Header(s) get set on each Response
     * 
     */
    app.use(createCacheControlNoStoreMiddleware() ) ;

    /**
     * install handler for `/`
     * 
     */
    app.get("/", (requ, respo, inext) => (
      homePageApp.applyToHttpRequest(requ, respo, inext)
    ) ) ;

    app.use(mainCoreM ) ;

    if (1) {
      ;
      app.use(function (requ, respo, inext) {
        if (((requ.accepted ?? [] ).map(e => ("" + e.type + "/" + e.subtype ) ) ).includes("text/html") ) {
          ;
          forbiddenPathPageApp.applyToHttpRequest(requ, respo, inext, { statNumber: 404, } ) ;
        } else {
          inext() ;
        }
        ;
      } ) ;
      app.use(function (requ, respo, inext) {
        {
          ;
          respo.status(404);
          respo.send() ;
        }
        ;
      } ) ;
    }

    return app ;
  }
) ;

export {
  //
  createFriendlisedApp,
} ;




/**
 * setting `Cache-Control: no-store`
 * ensures that browsers avoid using stale, cached versions,
 * by making sure the necessary Header(s) get set on each Response
 * 
 * note:
 * while browsers still respect `no-store`,
 * some browsers has started ignoring `no-cache` including recent Edge and likely others,
 * (note, however, that `no-store` tends to degrade SEO)
 * 
 */
export const createCacheControlNoStoreMiddleware = (

  () => (
    (
      function (requ, respo, inext) {
        try {
  
          /**
           * ensures that browsers avoid using stale, cached versions,
           * by setting the relevant Header(s)
           * 
           * note:
           * while browsers still respect `no-store`,
           * some browsers has started ignoring `no-cache` including recent Edge and likely others,
           * (note, however, that `no-store` tends to degrade SEO)
           * 
           */
          respo.setHeader("Cache-Control", "no-store") ;
  
        } finally {
          ;
          inext() ;
        }
        ;
      }
    ) satisfies Express.Handler
  )
) ;

import {
  rhpcGeneric ,
} from "./base-ejs" ;





