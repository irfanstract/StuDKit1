
import { util, } from "typexpe-commons/src/common_sv.mjs";


import {
  Chd,
  F,
  getFrequencyInHertz,
} from "studk-fwcore/src/AcousticKey.mjs";







describe("AcousticKey 'F'", function () {
  ;

  it (`consistency`, function () {
    util.assert.deepStrictEqual(getFrequencyInHertz(F(440 ) ) , (440) ) ;
    util.assert.deepStrictEqual(getFrequencyInHertz(F(222.5 ) ) , (222.5) ) ;
  } ) ;

  ;
} ) ;




describe("AcousticKey 'Chd'", function () {
  ;

  it (`consistency 'ByDegreesFromC'`, function () {
    util.assert.deepStrictEqual(Chd.getDegreesFromC(Chd.ByDegreesFromC(144.0  ) ) , (144.0) ) ;
    util.assert.deepStrictEqual(Chd.getDegreesFromC(Chd.ByDegreesFromC( 22.25 ) ) , ( 22.25) ) ;
  } ) ;

  it (`consistency 'ByDegreesFromA'`, function () {
    util.assert.deepStrictEqual(Chd.getDegreesFromC(Chd.ByDegreesFromA(234.0  ) ) , (144.0) ) ;
    util.assert.deepStrictEqual(Chd.getDegreesFromC(Chd.ByDegreesFromA(112.25 ) ) , ( 22.25) ) ;
  } ) ;

  ;
} ) ;





