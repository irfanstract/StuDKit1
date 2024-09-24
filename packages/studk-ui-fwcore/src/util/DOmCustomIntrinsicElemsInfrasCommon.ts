






/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components
 * https://stackoverflow.com/q/77592173
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  EitherPropertyOf, 
  Extend,
  OmitCase,
  OmitW,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'

function assertAndPrintEquality<T>(actual: unknown, expected: T, message?: string | Error): asserts actual is T
{
  util.assert.deepStrictEqual(actual, expected, message) ;
  console["info"](`${actual } = ${expected }`) ;
}

const nextUInt32 = () => (
  ((): number => {
    const d = new ArrayBuffer(0x100) ;
    new Float64Array(d)[0] = Math.random() ;
    return new Uint32Array(d)[0]! ;
  })()
) ;

export {
  assertAndPrintEquality ,
  nextUInt32 ,
} ;

declare global {
  export interface String {
    startsWith <const testv extends string, const thisT extends string >(this: thisT , expectedPrefix: testv) : this is (thisT & `${typeof expectedPrefix }${string }` )
    endsWith   <const testv extends string, const thisT extends string >(this: thisT , expectedPrefix: testv) : this is (thisT & `${string }${typeof expectedPrefix }` )
  }
}


;






;



/**
 * 
 * {@link generateCustomIntrinsicElementName} -
 * generate a custom UUID which {@link customElements.define can be used as `tagName` arg for `customElements.define` }
 * 
 * AVOID USING THIS API IN SSR-BASED FW(s) LIKE NEXTJS OR SVELTE.
 * this API doesn't play well with SSR.
 * 
 */
export const generateCustomIntrinsicElementName = (
  function () {

    const idt = (
      nextUInt32()
    ) ;

    const pf = (
      ("elementdef" + idt )
    ) ;

    return (
      [pf, "main"].join("-")
    ) ;

  }
) ;



;
















