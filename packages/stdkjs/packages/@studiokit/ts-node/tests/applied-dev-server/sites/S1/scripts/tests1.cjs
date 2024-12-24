

// @ts-check

/// <reference lib="ES2023" />
// /// <reference lib="DOM" />

"use strict" ;





/** @import { ArgsWithOptions, } from "../../../../../dist/util" */
/** @import { ConformOrNever,  } from "../../../../../src/util-recordtypes" */
const { assert } = require("../../../../../dist/util") ;

const {
  random ,
} = require("lodash") ;






const {
  EPWR,
  assertContainsItAndPrint ,
  assertMatchesItAndPrint ,
  posixBlockquotify ,
  Path ,
  pathToFileURL ,
  assertHttpOk ,
  startTestEjsApp ,
  createSpclApp ,
  RxStyleApp ,
  SpclApps, 
  SpclTests,
  RxstaPreToPolyDesc ,
} = require("../../../testPredef.cjs") ;







const appRootDir = Path.resolve(__filename, "..", ".." ) ;

const appDesc = /** @satisfies {RxstaPreToPolyDesc } */ ({
  srcs: {
    basePath: appRootDir ,
    mainPagesRelativeFromBasePath: Path.join(".", "pages") ,
    psnta: RxStyleApp.PathSimpleNameTranslator.createNoOpInstance() ,
  } ,
}) ;

SpclTests.describeRootedRxStyleAppPreToPolyTest1({
  metaDesc: appDesc ,
}, ({
  appPn ,
}) => {
  ;

  it(`shall render this for Dir '/'`, async () => {
    ;

    const oF = await fetch("http://" + ("localhost:" + appPn ) )  ;
    const o = await oF.text() ;

    console.warn(`output: ${posixBlockquotify(o) } `) ;

    assertHttpOk(oF) ;
    // assertContainsItAndPrint(o, 'this page have no title') ;
    // assertContainsItAndPrint(o, 'path: &#x27;/&#x27;') ;
    assertContainsItAndPrint(o, '<p>date: <input type="datetime-local"/></p>') ;
    assertContainsItAndPrint(o, '<p>status: <input type="text"/></p>') ;

    // resolve() ;
  }) ;

}) ;







