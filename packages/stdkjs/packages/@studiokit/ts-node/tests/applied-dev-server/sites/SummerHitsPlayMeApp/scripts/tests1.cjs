

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







const {
  appDesc ,
  appRootDir ,
} = require("./man.cjs") ;

SpclTests.describeRootedRxStyleAppPreToPolyTest1({
  metaDesc: appDesc ,
}, ({
  appPn ,
}) => {
  ;

  it(`shall render this for Dir '/EarlyMorningJpg'`, async () => {
    ;

    const oF = await fetch(("http://" + ("localhost:" + appPn ) ) + "/EarlyMorningJpg" )  ;
    const o = await oF.text() ;

    console.warn(`output: ${posixBlockquotify(o) } `) ;

    assertHttpOk(oF) ;
    // assertContainsItAndPrint(o, 'SummerHitsPlayMeApp') ;

    // resolve() ;
  }) ;

  it(`shall render this for Dir '/myicon.png'`, async () => {
    ;

    const oF = await fetch(("http://" + ("localhost:" + appPn ) ) + "/myicon.png" )  ;
    const o = await oF.text() ;

    // console.warn(`output: ${posixBlockquotify(o) } `) ;

    assertHttpOk(oF) ;
    // assertContainsItAndPrint(o, 'SummerHitsPlayMeApp') ;

    // resolve() ;
  }) ;

}) ;







