






import assert from "assert";

import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';




import {
  toCyclicSliding ,
  toAdjacentPairs ,
} from "studk-i3d/src/xt/TCS.ts" ;





;





describe("Array Cyclic Sliding Test", () => {
  ;

  it(`shall behave as intended`, () => {
    {
      assert.deepStrictEqual((
        toCyclicSliding([1, 2, 3, 4, 5], 2 )
      ), [
        [1, 2],
        [2, 3],
        [3, 4] ,
        [4, 5] ,
        [5, 1] ,
      ]) ;
    }
  } ) ;

} ) ;




















