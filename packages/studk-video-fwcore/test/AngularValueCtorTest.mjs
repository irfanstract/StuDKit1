
import { util, } from "typexpe-commons/src/common_sv.mjs";


import {
  Angle ,
  normaliseAngDeg ,
} from "studk-video-fwcore/src/Angular1.mjs";







describe("Angular Value Utils Test", function () {
  ;

  it (`consistency of constructor 'Angle.ByDegrees'`, function () {
    util.assert.deepStrictEqual(Angle.getDegrees(Angle.ByDegrees(  440    ) ) , (   80  ) ) ;
    util.assert.deepStrictEqual(Angle.getDegrees(Angle.ByDegrees( -440    ) ) , (  280  ) ) ;
    util.assert.deepStrictEqual(Angle.getDegrees(Angle.ByDegrees(  222.5  ) ) , (  222.5) ) ;
    util.assert.deepStrictEqual(Angle.getDegrees(Angle.ByDegrees(  123.5  ) ) , (  123.5) ) ;
    util.assert.deepStrictEqual(Angle.getDegrees(Angle.ByDegrees( -123.5  ) ) , (  236.5) ) ;
  } ) ;

  it (`consistency of static-method 'normaliseAngDeg'`, function () {
    util.assert.deepStrictEqual((normaliseAngDeg(440   ) ) , ( 80  ) ) ;
    util.assert.deepStrictEqual((normaliseAngDeg(222.5 ) ) , (222.5) ) ;
    util.assert.deepStrictEqual((normaliseAngDeg(123.5 ) ) , (123.5) ) ;
    util.assert.deepStrictEqual((normaliseAngDeg(900   ) ) , (180  ) ) ;
  } ) ;

  ;
} ) ;







