



import {
  util ,
} from "typexpe-commons/src/common_sv.mjs" ;
import {
  Comparator ,
} from "typexpe-commons/src/common-comparingfn-all.mjs" ;



import * as L from "lodash-es" ;




;

/**
 * 
 * @type {(x: string) => boolean }
 */
function isAwfulLodashBuiltinName(k)
{
  if (k.match(/^assign(?=$|[A-Z])/u) ) { return true ; }
  if (k.match(/^entries$/u) ) { return true ; }
  return false ;
}

console["info"]((
  util.stringLinesConcat(function* () {
    yield 'export {' ;
    for (const [k, ] of (
      Object.entries(L)
      .filter(([k, v]) => (!isAwfulLodashBuiltinName(k) ) )
    ) ) {
      C :
      {
        yield `  ${k } as ${k } ,` ;
      }
    }
    yield '} from "lodash-es" ;' ;
  })
)) ;









