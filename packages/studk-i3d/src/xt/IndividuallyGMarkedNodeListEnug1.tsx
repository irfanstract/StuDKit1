







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
  memoize ,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






import {
  Angle ,
  cosineAt,
  normaliseAngDeg, 
  sineAt,
} from "studk-video-fwcore/src/Angular1.mjs" ;

import {
  //
  LinTr3D ,
  linTrConcat3DMat,
  linTrFromTranslateCoord3Matr,
  linTrRotation3DForXConYMat,
  linTrRotation3DForXConZMat,
  linTrTransformedPosition3DMat ,
  matrixAsTr2D ,
  Point3D ,
} from "studk-video-fwcore/src/LinearTransforms.mjs" ;

import {
  identityMat4,
  Matrix3 ,
  Matrix4, 
  matrixAssign,
  multipliedMat4 ,
} from "studk-fwcore/src/LinearMap1.mjs";






/**
 * an array of {@link I3D.NodeUnitGraph} (each or `null` to avoid issues with DOM-diffing)
 * 
 */
export class IndividuallyMarkedNodeList
extends Object
{
  /**
   * caveat:
   * {@link React.Key to avoid breaking the structure due to adding extra property like "key" },
   * we instead allow items each to be `null` to mean "null element"
   * 
   */
  constructor(public posAll: readonly (NodeUnitGraph | null)[] )
  { super() ; }
  
  toDebugSnippet()
  {
    const { posAll, } = this ;
    return util.stringLinesConcat(function* () {
      yield `points:` ;
      for (const [i, p] of posAll.entries() ) {
        yield `${i}---  ` ;
        yield (
          util.indent((
            (() => {
              if (p instanceof PolygonallyMarkedNodeUnitGraph) {
                return p.toDebugSnippet() ;
              }
              return `???` ;
            })()
          ) , 2 )
        ) ;
      }
      yield `end of points` ;
    } ) ;
  }
}

export abstract class NodeUnitGraph
{}

/**
 * {@link NodeUnitGraph} being a polygonal graphic.
 * 
 */
export class PolygonallyMarkedNodeUnitGraph
extends NodeUnitGraph
{
  constructor(
    public readonly points: readonly Point3D[] ,
    public readonly fill  ?: string ,
  )
  { super() ; }

  toDebugSnippet()
  {
    const { points, } = this ;
    return util.stringLinesConcat(function* () {
      yield `points:` ;
      for (const [i, p] of points.entries() ) {
        yield `${i}. ${JSON.stringify(p satisfies Point3D ) } ` ;
      }
      yield `end of points` ;
    } ) ;
  }
}












