







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
} from 'studk-fwcore-setups/src/util-eawo.mjs'



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

export const G_VEF_OBJFILE = (
  function G_VEF_OBJFILE_IMPL<const vtxDIctT extends { [k in string]: perVtxDescD }, const perVtxDescD>(...[
    vertDict ,
    { mapVtxDataToString, } ,
    describeFces ,
  ] : (
    ArgsWithOptions<[
      ...(
        ArgsWithOptions<[idKeyedVertexDataStringValuedDict: vtxDIctT], (
          & { mapVtxDataToString: (value: (
            // perVtxDescD /* the type widens unexpectedly */
            RecordValue<vtxDIctT>
          )) => string , }
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
          yield `v  ${mapVtxDataToString(vd ) satisfies string }`
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







