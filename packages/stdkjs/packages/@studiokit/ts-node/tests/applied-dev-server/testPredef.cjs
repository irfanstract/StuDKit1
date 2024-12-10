

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
  createApp: createApdsEjsApp ,
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
    return assert(x0.includes(x1), `failed: ${require("node:util").inspect({ x0, x1 }) }` ) ;
  }
) ;

const assertMatchesItAndPrint = (

  /** @param {[String, what: RegExp]} args */
  function (...[x0, x1])
  {
    console.warn(`assertMatchesItAndPrint:`, { x0, x1 }) ;
    return assert(x0.match(x1), `failed: ${require("node:util").inspect({ x0, x1 }) }` ) ;
  }
) ;

const assertHttpOk = (

  /**
   * 
   * @param {[XMLHttpRequest | Response]} args
   */
  function (...[oF])
  {

    const statusCode = (

      (/** @type {(...x: [XMLHttpRequest | Response]) => Number } */ (oF) => {
        ;
        if (globalThis.XMLHttpRequest && (oF instanceof XMLHttpRequest ) ) {
          ;
          return oF.status ;
        } else {
          ;
          return oF.status ;
        }
      })
      (oF)
    ) ;

    assertMatchesItAndPrint(String(statusCode ), /\b2\d\d\b/ ) ;

  }
) ;

/**
 * 
 * @typedef {Object}
 * 
 * @property {string } [title] 
 * @property {Object } srcs srcs options
 * @property {string } srcs.basePath the base-dir path
 * @property {string } srcs.mainPagesRelativeFromBasePath the relative, from `basePath/.`, path to/of the `pages` dir
 * @property {RxStyleApp.PathSimpleNameTranslator } srcs.psnta 
 * 
 */
/**
 * {@link describeRootedRxStyleAppPreToPolyTest1}.
 * 
 * @module
 * 
 */
const RxstaPreToPolyDesc = {} ;

const SpclApps = (

  (() => {

    const startRootedRxStyleSv = (

      /** @param {Parameters<typeof createApdsEjsApp>} args */
      function (...args)
      {
        return (
          startTestEjsApp((
            createApdsEjsApp(...args)
          ))
        ) ;
      }
    ) ;

    return {
      startRootedRxStyleSv ,
    } ;
  })()
) ;

const SpclTests = (

  (() => {

    /**
     * 
     * @typedef {Object}
     * 
     * @property {number } appPn
     * 
     */
    const MainInstantiatedProps = {} ;

    const describeRootedRxStyleAppPreToPolyTest1 = (

      /**
       * 
       * @param {[...ArgsWithOptions<[], { readonly metaDesc: RxstaPreToPolyDesc, }>, describeMain1: (ctx: MainInstantiatedProps ) => void ]} args
       * 
       */
      function (...[...pArgs ] )
      {
        const [pOpts, describeMain1] = pArgs ;
        const {
          metaDesc: appDesc ,
        } = pOpts ;

        const {

          //
          srcs: {
            basePath: appRootDir ,
            mainPagesRelativeFromBasePath: appPagesRelativeDir ,
            psnta,
          } ,

          title = `a random app based at '${appRootDir }', with srcs, pages relative at '${appPagesRelativeDir}'` ,

        } = appDesc ;

        const appPagesDir = Path.resolve(appRootDir , appPagesRelativeDir ) ;

        console.warn(`[sttsn-devserver-tests] describing test app '${title }'`, {
          appRootDir ,
          appPagesDir ,
        }) ;

        describe(`[sttsn-devserver-tests] testing Site '${title }'`, () => {
          ;
        
          const {
            appPn ,
            close ,
          } = (
        
            SpclApps.startRootedRxStyleSv((
        
              RxStyleApp.describeSrcRootedIe(appPagesDir , {
                //
                pathSimpleNameToActual: psnta
                ,
              } )
            ))
          ) ;

          describeMain1({
            appPn ,
          }) ;
        
          ;
          it(`shall stop the server and let associated resources go after all these tests`, async () => {
            ;
        
            close() ;
          }) ;
        
          ;
        } ) ;
        
        return {} ;
      }
    ) ;

    return {
      describeRootedRxStyleAppPreToPolyTest1 ,
    } ;
  })()
) ;

exports.EPWR = EPWR ;
exports.assertContainsItAndPrint = assertContainsItAndPrint ;
exports.assertMatchesItAndPrint = assertMatchesItAndPrint ;
exports.posixBlockquotify = posixBlockquotify ;
exports.Path = Path ;
exports.pathToFileURL = pathToFileURL ;
exports.assertHttpOk = assertHttpOk ;
exports.ExpressJsApp = ExpressJsApp ;
exports.startEjsApp = startEjsApp ;
exports.startTestEjsApp = startTestEjsApp ;

exports.createApdsEjsApp = createApdsEjsApp ;
/** alias of {@link createApdsEjsApp}. @deprecated */
exports.createSpclApp = createApdsEjsApp ;
exports.RxStyleApp = RxStyleApp ;
exports.RxstaPreToPolyDesc = RxstaPreToPolyDesc ;

exports.SpclApps = SpclApps ;
exports.SpclTests = SpclTests ;










