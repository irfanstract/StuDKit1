
import { util, } from "typexpe-commons/src/common_sv.mjs";

import * as M from "studk-fwcore/src/LinearMap1.mjs" ;

import * as LT from "studk-fwcore/src/LinearTransform1.mjs" ;







describe("Linear Matrix Lib Test", function () {
  ;

  //
  const m = M.identityMat3() ;
  
  it (`identity matrix 3`, function () {
    util.assert.deepStrictEqual(m["m1,1"], 1 ) ;
    util.assert.deepStrictEqual(m["m1,2"], 0 ) ;
    util.assert.deepStrictEqual(m["m1,3"], 0 ) ;
    util.assert.deepStrictEqual(m["m2,1"], 0 ) ;
    util.assert.deepStrictEqual(m["m2,2"], 1 ) ;
    util.assert.deepStrictEqual(m["m2,3"], 0 ) ;
    util.assert.deepStrictEqual(m["m3,1"], 0 ) ;
    util.assert.deepStrictEqual(m["m3,2"], 0 ) ;
    util.assert.deepStrictEqual(m["m3,3"], 1 ) ;
    util.assert.deepStrictEqual(m["m3,4"]?.toFixed ?? null , null ) ;
  } ) ;

  it (`for 'M.multipliedMat3(m, m)'`, function () {
    const m2 = M.multipliedMat3(m, m) ;
    util.assert.deepStrictEqual(m2["m1,1"], 1 ) ;
    util.assert.deepStrictEqual(m2["m1,2"], 0 ) ;
    util.assert.deepStrictEqual(m2["m1,3"], 0 ) ;
    util.assert.deepStrictEqual(m2["m2,1"], 0 ) ;
    util.assert.deepStrictEqual(m2["m2,2"], 1 ) ;
    util.assert.deepStrictEqual(m2["m2,3"], 0 ) ;
    util.assert.deepStrictEqual(m2["m3,1"], 0 ) ;
    util.assert.deepStrictEqual(m2["m3,2"], 0 ) ;
    util.assert.deepStrictEqual(m2["m3,3"], 1 ) ;
    util.assert.deepStrictEqual(m2["m3,4"]?.toFixed ?? null , null ) ;
  } ) ;

  ;
} ) ;

describe("Linear Transforms Test", function () {
  ;

  //

  it (`test 001`, function () {
    ;
    
    const m = LT.identityTr2D() ;
    const mp = LT.linTrTransformedPosition2D(m, { x: 32, y: 5, } ) ;
    
    util.assert.deepStrictEqual(mp.x, 32 ) ;
    util.assert.deepStrictEqual(mp.y, 5 ) ;
  } ) ;
  
  it (`test 002`, function () {
    ;
    
    const m = LT.linTrFromScaleCoord2({ x: 2.5, y: 2 }) ;
    const mp = LT.linTrTransformedPosition2D(m, { x: 32, y: 5, } ) ;
    
    util.assert.deepStrictEqual(mp.x, 80 ) ;
    util.assert.deepStrictEqual(mp.y, 10 ) ;
  } ) ;

  ;
} ) ;








