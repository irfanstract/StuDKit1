



import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import assert from 'node:assert';

import {
  random,
} from "lodash-es" ;

import {
  allocateKeyInternedObjectPool,
} from "typexpe-commons/src/ort.mjs";;

import {
  Point2D,
} from 'studk-util/src/math/point-all.mjs';





describe("Object Interning Test", () => {
  ;

  it(`identity-sharing of 'Point2D's shall behave as intended`, () => {
    ;

    assert(Point2D({ x: 5, y: (1.0      ), }) === Point2D({ x: 5, y: (1.0      ), }) ) ;
    assert(Point2D({ x: 5, y: (0.2 + 0.1), }) === Point2D({ x: 5, y: (0.2 + 0.1), }) ) ;

    assert(Point2D({ x: 5, y: (0.2 + 0.1), }) !== Point2D({ x: 5, y: 0, }) ) ;

    ;
  } ) ;

  it(`constructor of 'Point2D' shall behave as intended`, () => {
    ;
    {
      const p = Point2D({ x: 5, y: (0.2 + 0.1), }) ;
      assert(p.x === 5 )
      assert(p.y === (0.2 + 0.1) )
    }

    ;
  } ) ;

} ) ;




