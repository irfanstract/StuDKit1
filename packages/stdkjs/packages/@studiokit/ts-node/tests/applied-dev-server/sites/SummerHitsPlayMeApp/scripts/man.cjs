

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
    psnta: RxStyleApp.PathSimpleNameTranslator.createTsInstance() ,
  } ,
}) ;



exports.appRootDir = appRootDir ;
exports.appDesc = appDesc ;















