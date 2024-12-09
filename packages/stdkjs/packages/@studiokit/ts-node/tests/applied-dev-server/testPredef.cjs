

// @ts-check

"use strict" ;





/** @import { ArgsWithOptions, } from "../../dist/util" */
/** @import { ConformOrNever, } from "../../src/util-recordtypes" */
const {
  assert ,
} = require("../../dist/util") ;

const {
  random ,
} = require("lodash") ;

;
const posixBlockquotify = (

  /** @satisfies {(x: string) => string} */ ((x) => (

    x.replace(/(^|\r?\n)/g, "$1> ")
  ) )
) ;





;

const Path = require("node:path") ;
const { pathToFileURL, } = require("node:url") ;

;






const Express = require("express") ;


/**
 * starts given {@link Express.Application}
 * 
 * 
 * @param {ArgsWithOptions<[app: Express.Application ], { pn: number, }> } args
 */
function startEjsApp(...[app, { pn, }] )
{

  const s = (
    app.listen(pn, () => {
      console["info"](`app started listening on http://localhost:${pn} please check browse the URL`) ;
    })
  ) ;

  function close() {
    s.close() ;
  }

  return (
    /** @type {const} */ ({
      s ,
      close ,
    })
  ) ;
}

/**
 * 
 * @module
 * 
 */
const ExpressJsApp = (

  (() => {

    return { start: startEjsApp, } ;
  })()
) ;

/**
 * 
 * starts given {@link Express.Application} as a test-App
 * 
 */
const startTestEjsApp = (

  /**
   * 
   * @param {ArgsWithOptions<[app: Express.Application ], { }> } args
   */
  function (...[app, ] )
  {
    const pn = random(50700, 65500) ;
    const {
      close ,
    } = (
      startEjsApp(app, { pn, } )
    ) ;
    return (
      /** @type {const} */ ({
        appPn: pn,
        close: close,
      })
    ) ;
  }
) ;






;

const {
  createApp: createSpclApp ,
} = require("../../dist/applied-dev-server") ;

const {
  RxStyleApp ,
} = require("../../dist/applied-dev-server/appfmt-rx") ;

;







// const PWR = (

//   function () {
//     let resolve, reject ;
//     new Promise((r1, r2) => {
//       resolve = r1 ;
//     } ) ;
//     return { resolve, reject } ;
//   }
// ) ;

const EPWR = (

  /**
   * 
   * @param {[x: (resolve: () => void ) => void ]} args
   */
  function (...[m1]) {
    const p = new Promise((/** @type {() => void} */ r) => m1(r) ) ;
    return {
      p,
    } ;
  }
) ;

const assertContainsItAndPrint = (

  /** @param {[String, what: String]} args */
  function (...[x0, x1])
  {
    console.warn(`assertContainsItAndPrint`, { x0, x1 }) ;
    return assert(x0.includes(x1) ) ;
  }
) ;

const assertMatchesItAndPrint = (

  /** @param {[String, what: RegExp]} args */
  function (...[x0, x1])
  {
    console.warn(`assertMatchesItAndPrint:`, { x0, x1 }) ;
    return assert(x0.match(x1) ) ;
  }
) ;

module.exports = {

  EPWR,
  assertContainsItAndPrint ,
  assertMatchesItAndPrint ,
  posixBlockquotify ,
  Path ,
  pathToFileURL ,
  ExpressJsApp ,
  startEjsApp ,
  startTestEjsApp,

  createSpclApp ,
  RxStyleApp ,

} ;










