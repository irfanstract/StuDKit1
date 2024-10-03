





/**
 * 
 * extracted from `grandPiano.ts` (or `.tsx`).
 * 
 */
;






;

import {
  util ,
  random ,
  mkArray ,
  ArgsWithOptions ,
  ArgsGetOptions ,
  allocateKeyInternedObjectPool ,
  TIMEOUT,
  RecordValue, 
} from "../stdSampleDescription.tsx" ;

;








;

export const describePwCoefsBy = (
  function (...[resolve] : [resolve: () => (readonly [readonly number[], readonly number[]] ) ] )
  {
    return (
      resolve()
    ) ;
  }
) ;

export const CREATE_PW = (
  function (...[ctx, gpCoefs]: [BaseAudioContext, readonly [readonly number[], readonly number[]]])
  {
    return (
      new PeriodicWave(ctx, {
        real: [...gpCoefs[0] ] ,
        imag: [...gpCoefs[1] ] ,
        disableNormalization: true ,
      } )
    ) ;
  }
) ;

export const describePw1 = (
  function (...[resolve] : [resolve: (ctx: BaseAudioContext) => PeriodicWave ] )
  {
    return {
      getForCtx: (
        util.memoize(resolve, ctx => ctx )
      ) ,
    } ;
  }
) ;




;

export const SCHEDULED_CLOSEABLE = (x: { closeAt(t: number): void ; } ) => x ;

export const GRAPH_LOGICAL = function <const T, >(resolve: () => T) { return resolve() ; } ;

export {
  createReverbOnDestNode ,
} from "../stdSampleDescription.tsx" ;

/**
 * 
 * connects the two {@link AudioNode}(s) through
 * another {@link AudioNode } which is either newly created/allocated or instead obtained from elsewhere
 * .
 * 
 */
export const ANODECONNECTTWOWITHRESLVEDCREATED = (
  function <const actuallyCreatedT extends AudioNode, returnedT = Omit<actuallyCreatedT, "connect" | "disconnect"> >(...[{ src, dest, }, createIntre]: [{ src: AudioNode, dest: AudioNode, } , (ctx: BaseAudioContext) => actuallyCreatedT ] )
  {
    const intermedNd = createIntre(dest.context) ;

    src.connect(intermedNd) ;
    intermedNd.connect(dest) ;

    return intermedNd ;
  }
) ;

/**
 * 
 * plural version of {@link ANODECONNECTTWOWITHRESLVEDCREATED}
 * .
 * 
 */
export const ANODECONNECTTWOWITHRESLVEDCREATEDMULTI = (
  function <const actuallyCreatedT extends { readonly [k: string]: AudioNode ; }, returnedT = actuallyCreatedT >(...[{ src, dest, }, createIntreAll, finalSelectAll, ]: (
    [(
      | { src: AudioNode, dest: AudioNode, }
      | { src: null, dest: AudioNode, }
      | { src: AudioNode, dest: null, }
    ) , resolvePts: (ctx: BaseAudioContext) => (actuallyCreatedT), finalSelectResolvedPts: NoInfer<(s: actuallyCreatedT) => (readonly (RecordValue<typeof s> )[] ) > ]
  ) )
  {
    const newNdsDict = createIntreAll(dest ? dest.context : src.context) ;

    const allTheseNds: readonly AudioNode[] = (
      util.reiterated(function* () {
        src && (yield src) ;
        yield* (
          finalSelectAll(newNdsDict)
        ) ;
        dest && (yield dest) ;
      })
    ) ;

    void ((nds: readonly AudioNode[] ) => {
      ;
      for (const i of util.range(0, nds.length + -1 ) )
      {
        (nds[i]!).connect(nds[i + 1]! ) ;
      }
    })(allTheseNds ) ;

    return newNdsDict ;
  }
) ;

;




;
















