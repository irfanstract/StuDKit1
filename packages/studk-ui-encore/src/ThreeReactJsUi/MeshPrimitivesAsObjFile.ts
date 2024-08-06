







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  RecordEntry,
  RecordValue,
} from 'studk-fwcore/src/util/C1.ts'



const KEYS = (
  function <Dict extends { readonly [k in keyof any]: unknown ; }>(...[dct0]: [dct: Dict] )
  {
    return (
      util.L.mapValues(dct0, (...[vlue, key]) => (
        key
      ) )
    )
  }
)

const UNIQUES = (
  KEYS
)

export { UNIQUES, }

;



import * as THREE from 'three'
import {
  Canvas,
  useFrame,
  ThreeElements, 
  useThree,
} from '@react-three/fiber'

import {
  POLYLINE_AS_TRIANGLES ,
} from "studk-ui-encore/src/ThreeReactJsUi/MeshPrimitives.ts"

interface MVDTS<Dta>
{
  /**
   * {@link mapVtxDataToString} .
   * 
   * not using {@link NoInfer} here as
   * someone might want to base the inferred type-arg(s) here.
   * 
   */
  mapVtxDataToString: (value: Dta) => string ,

}

/**
 * `Args` of
 * {@link formatByKeyedPointDictMeshObjFile1}
 * 
 */
interface FbkpdmofProto<vtxDIctT extends { [k in string | number]: unknown }>
{
  (...args: (
    ArgsWithOptions<[
      ...(
        ArgsWithOptions<[idKeyedVertexDataStringValuedDict: vtxDIctT], (
          & MVDTS<(
            // perVtxDescD /* the type widens unexpectedly */
            RecordValue<vtxDIctT>
          )>
        )>
      ) ,
      describeFces: (
        NoInfer<(
          (ctx: {
            cornerPtIds: { [k in RecordEntry<vtxDIctT>[0]]: RecordEntry<vtxDIctT>[0] ; },
          } ) => readonly ({ readonly ptIds: readonly (RecordEntry<vtxDIctT>[0] )[], })[]
        )>
      ) ,
    ], {}>
  ) ) : void
}

// TODO
export const formatByPreSymbsKeyedPointDictMeshObjFile1 = (function ()
{
  const sharedCtxImpl = {
    newSpclUniqueKey: () => String(util.L.random(0, 1E9) ) ,
  } as const ;

  return (
    function <const vtxDIctT extends { [k in string | number]: unknown }>(...[resolve]: [(ctx: typeof sharedCtxImpl) => (
      Parameters<FbkpdmofProto<vtxDIctT> >
    )] )
    {
      return (
        formatByKeyedPointDictMeshObjFile1(...(resolve(sharedCtxImpl) ))
      )
    }
  )
})()

export const formatByKeyedPointDictMeshObjFile1 = (
  function G_VEF_OBJFILE_IMPL<const vtxDIctT extends { [k in string | number]: perVtxDescD }, const perVtxDescD>(...[
    vertDict ,
    { mapVtxDataToString, } ,
    describeFces ,
  ] : (
    Parameters<FbkpdmofProto<vtxDIctT> >
  ))
  {
    type perVtxDescDAlt = (
      RecordValue<vtxDIctT>
    )
    type actualVtxIdT = keyof vtxDIctT
    const vertEnts = (
      Object.entries<perVtxDescD>(vertDict) as [actualVtxIdT, perVtxDescD][]
    ) ;
    const vertIds = (
      vertEnts
      .map(([ident]) => ident )
    ) ;
    const fcs = (
      describeFces({
        cornerPtIds: (
          Object.fromEntries((
            vertEnts
            .map(([key]) => [key, key] as const )
          ))
        ) as { [k in actualVtxIdT]: actualVtxIdT ; } ,
      })
    ) ;
    return (
      util.stringLinesConcat(function* ()
      {
        yield ;
        yield `# ThreeJS's ObjLoader (apparently) always assign MeshPhongMaterial irrespective of what's in the OBJ file; ` ;
        yield `# .` ;
        yield `# in ThreeJS, coord 4 to 6 effectively (as effect of the chosen Material) dictates the annotated vertex's diffuse color ; ` ;
        yield `# a caveat is that the values are not the usual 0...25, but instead 'p'(s) (ie 0...1) .` ;
        yield `# https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L534 ` ;
        yield ;
        yield `# at least ThreeJS refuses to Add Object(s) unless we've begin with Directive(s) 'g' or 'o'. `;
        yield `# https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L54` ;
        yield `# ThreeJS refuses to display faces whose dir-ity is opposite to expected, so `;
        yield `# we need to work-around it by Double Definition With Opposite Direction. `
        yield ;
        yield ;
        yield ;
        yield ;
        for (const [vkey, vd] of vertEnts ) {
          yield `v  ${(
            // @ts-ignore
            mapVtxDataToString(vd )
          ) satisfies string }`
        }
        yield ;
        yield `# at least ThreeJS refuses to Add Object(s) unless we've begin with any these Directive. `;
        yield `# https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L54` ;
        yield `# ThreeJS refuses to display faces whose dir-ity is opposite to expected, so `;
        yield `# we need to work-around it by Double Definition With Opposite Direction. `;
        yield `o oa9b30aa816d19270 `;
        for (const fceDat of fcs ) {
          /**
           * at least ThreeJS refuses to Add Object(s) unless we've begin with any these Directive.
           * https://github.com/mrdoob/three.js/blob/134ff886792734a75c0a9b30aa816d19270f8526/examples/jsm/loaders/OBJLoader.js#L54
           * ThreeJS refuses to display faces whose dir-ity is opposite to expected, so
           * we need to work-around it by Double Definition With Opposite Direction.
           */
          for (const ptIds1 of [fceDat.ptIds, fceDat.ptIds.toReversed() ]) {
            ;
            yield `f  ${(
              ptIds1
              .map(ident => (1 + vertIds.indexOf(ident) ) )
              .join("  ")
            ) }` ;
          }
        }
        yield ;

        ;
      } )
    ) ;
  }
)







