







/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * https://react.dev/reference/rsc/server-components#adding-interactivity-to-server-components 
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

// import type {
//   AllOrNever1,
//   ArgsGetOptions ,
//   ArgsWithOptions, 
//   Extend,
// } from 'studk-fwcore-setups/src/util-eawo.mjs'









describe("String Lines Concat API Test", () => {
  ;

  it(`shall behave as intended`, () => {
    const l = (
      util.stringLinesConcat(function* ()
      {
        yield ;
        yield "v   0  -3   0" ;
        yield "v   0   3   0" ;
        yield "v   3   3   0" ;
        yield "v   3   0   0" ;
        yield ;
        yield `# https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L54` ;
        yield `o oa9b30aa816d19270 `;
        yield ;
        yield "f  1  2  3" ;
        yield "f  3  4  1" ;

        ;
      } )
    ) ;
    const lL = l.split(/\r?\n/) ;
    util.assert(lL.length > 3 ) ;
    util.assert(lL[0]?.match(/^\s*$/g) ) ;
    util.assert(lL[1] === "v   0  -3   0" ) ;
    util.assert(lL[5]?.match(/^\s*$/g) ) ;
  } ) ;

} ) ;









