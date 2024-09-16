
import { util, } from "typexpe-commons/src/common_sv.mjs";


import {
  LinearMetrostatus ,
  StudKQuarterMetronomicUnit ,
} from "studk-audio-fwcore/src/ixmw.mjs";







describe("IXMW well-behavingness", function () {
  ;

  it (`consistency of 'roundedBackBy'`, function () {
    util.assert.deepStrictEqual((
      LinearMetrostatus.byEllapsedBarsValAndPerBarRate(22.5, 4)
      .roundedBackBy(StudKQuarterMetronomicUnit.TWO_BAR)
      .ellapsedticks
    ) , 88 ) ;
    util.assert.deepStrictEqual((
      LinearMetrostatus.byEllapsedBarsValAndPerBarRate(23.75, 4)
      .roundedBackBy(StudKQuarterMetronomicUnit.TWO_BAR)
      .ellapsedticks
    ) , 88 ) ;
    util.assert.deepStrictEqual((
      LinearMetrostatus.byEllapsedBarsValAndPerBarRate(23.75, 4)
      .roundedBackBy(StudKQuarterMetronomicUnit.BAR)
      .ellapsedticks
    ) , 92 ) ;
  } ) ;

  it (`consistency of 'roundedForthBy'`, function () {
    util.assert.deepStrictEqual((
      LinearMetrostatus.byEllapsedBarsValAndPerBarRate(22.5, 4)
      .roundedForthBy(StudKQuarterMetronomicUnit.TWO_BAR)
      .ellapsedticks
    ) , 96 ) ;
    util.assert.deepStrictEqual((
      LinearMetrostatus.byEllapsedBarsValAndPerBarRate(23.75, 4)
      .roundedForthBy(StudKQuarterMetronomicUnit.TWO_BAR)
      .ellapsedticks
    ) , 96 ) ;
    util.assert.deepStrictEqual((
      LinearMetrostatus.byEllapsedBarsValAndPerBarRate(23.75, 4)
      .roundedForthBy(StudKQuarterMetronomicUnit.TWO_BAR)
      .ellapsedticks
    ) , 96 ) ;
    util.assert.deepStrictEqual((
      LinearMetrostatus.byEllapsedBarsValAndPerBarRate(24, 4)
      .roundedForthBy(StudKQuarterMetronomicUnit.TWO_BAR)
      .ellapsedticks
    ) , 96 ) ;
    util.assert.deepStrictEqual((
      LinearMetrostatus.byEllapsedBarsValAndPerBarRate(24.1, 4)
      .roundedForthBy(StudKQuarterMetronomicUnit.TWO_BAR)
      .ellapsedticks
    ) , 104 ) ;
  } ) ;

  ;
} ) ;












