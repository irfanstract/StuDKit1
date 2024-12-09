

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
  posixBlockquotify ,
  Path ,
  pathToFileURL ,
  startTestEjsApp ,
  createSpclApp ,
  RxStyleApp ,
} = require("../../../testPredef.cjs") ;







const appRootDir = Path.resolve(__filename, "..", ".." ) ;

const appPagesDir = Path.resolve(appRootDir, "pages") ;

console.warn({
  appRootDir ,
  appPagesDir ,
}) ;


describe(`[sttsn-devserver-tests] testing Site S1`, () => {
  ;

  ;
  const appE = (
    createSpclApp((
      RxStyleApp.describeSrcRootedIe(appPagesDir , {
        //
        pathSimpleNameToActual: RxStyleApp.PathSimpleNameTranslator.createNoOpInstance()
        ,
      } )
    ))
  ) ;

  const {
    appPn ,
    close ,
  } = startTestEjsApp(appE ) ;

  it(`shall render this for Dir '/'`, async () => {
    ;

    const oF = await fetch("http://" + ("localhost:" + appPn ) )  ;
    const o = await oF.text() ;

    console.warn(`output: ${posixBlockquotify(o) } `) ;

    assertContainsItAndPrint(o, '<p>date: <input type="datetime-local"/></p>') ;
    assertContainsItAndPrint(o, '<p>status: <input type="text"/></p>') ;

    // resolve() ;
  }) ;

  ;
  it(`shall close it after all these tests`, async () => {
    ;

    close() ;
  }) ;

  ;
} ) ;







