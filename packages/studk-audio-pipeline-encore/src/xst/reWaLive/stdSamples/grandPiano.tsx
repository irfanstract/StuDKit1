





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






;

import {
  util ,
  random ,
  mkArray ,
  ArgsWithOptions ,
  ArgsGetOptions ,
  allocateKeyInternedObjectPool ,
  TIMEOUT, 
  OGPD,
  IGPD,
} from "../stdSampleDescription.tsx" ;

import {
  describeWpwBasedMuso ,
} from "../stdSampleDescription.tsx" ;

const CBZ = (
  (...[{ bse, vel, }, i] : [{ bse: number, vel: number, }, i: number]) => 2 ** (
    bse + (
      (OGPD(i) * vel)
      * -1
    )
  )
) ;







const gpCoefs = (() => {
  const d = (
    util.range(1, 512)
    .map((i): number => {
      ;
      
      if (IGPD(i) === 0 || IGPD(i) === 12 ) {
        if (IGPD(i) === 0 ) {
          return 2 ** 0.8 ;
        }
        if (IGPD(i) === 12 ) {
          return 2 ** 1.45 ;
        }
        return 2 ** 0 ;
      }

      if (IGPD(i) < 132 ) {
        if (OGPD(i ) % 1 == 0 ) {
          return CBZ({ bse: 0, vel: 0.35 }, i ) ;
        }
        
        if (OGPD(i ) % 1 == 0.5 ) {
          return CBZ({ bse: 0, vel: 0.195 }, i ) ;
        }
      }

      return 0 ;
    } )
    .map(v => ((2 ** -0.4) * v) )
  ) ;

  return [d, d] as const ;
})() ;

// TODO
export default (
  describeWpwBasedMuso(ctx => (
    new PeriodicWave(ctx, {
      disableNormalization: true,
      real: gpCoefs[0] ,
      imag: gpCoefs[1] ,
    } as const )
  ))
) ;









