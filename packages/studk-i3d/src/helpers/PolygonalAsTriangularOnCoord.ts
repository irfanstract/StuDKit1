



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

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'




const POLYGON_AS_TRIANGLES = (
  function <const perPtT extends (
    | (readonly [number, number, number])
    // | import("studk-video-fwcore/src/LinearTransforms.mjs").Point3D
  )>(...[
    pts, { close: shallClose, } ,
  ] : (
    ArgsWithOptions<[pts: readonly perPtT[]], { close: boolean, }>
  ) )
  {
    if (pts[0]) {

      if (1) {
        const idxs = (
          util.reiterated(function* () {
            for (let i0 = 1; (i0 + 1) <= (pts.length + (shallClose ? 0 : -1 ) ); i0 += 1 ) {
              yield 0 ;
              yield (i0 + 0 ) % pts.length ;
              yield (i0 + 1 ) % pts.length ;
            }
          })
        )
  
        return (
          idxs
          .map((i) => (
            pts[i % pts.length] ?? pts[0] ?? util.throwAssertionError()
          ))
          .map(([x, y, z]) => (
            [
              x + (Math.random() * 1E-7 ) ,
              y + (Math.random() * 1E-7 ) ,
              z + (Math.random() * 1E-7 ) ,
            ] as const
          ) )
        )
      }

      {

        return util.throwAssertionError()
      }
    } else {
      return [] as const
    }
  }
)

export {
  POLYGON_AS_TRIANGLES ,
  /** @deprecated alias of {@link POLYGON_AS_TRIANGLES} */
  POLYGON_AS_TRIANGLES as POLYLINE_AS_TRIANGLES ,
}







