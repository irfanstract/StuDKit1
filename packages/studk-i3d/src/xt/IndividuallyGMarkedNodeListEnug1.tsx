







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
 * caveat:
 * {@link React.Key to avoid breaking the structure due to adding extra property like "key" },
 * we instead allow items each to be `null` to mean "null element"
 * 
 */
export class IndividuallyMarkedNodeList
extends Object
{
  //

  // /**
  //  * @deprecated
  //  */
  // static by1(...[graphs]: [graphs: readonly (NodeUnitGraph | null)[]] )
  // : IndividuallyMarkedNodeList
  // {
  //   return (
  //     new IndividuallyMarkedNodeList(graphs)
  //   ) ;
  // }

  /**
   * @deprecated
   */
  static byEachOptionalEnugBasedLayerGraph(...[graphs]: [graphs: readonly (NodeUnitGraph | null)[]] )
  : IndividuallyMarkedNodeList
  {
    return (
      new IndividuallyMarkedNodeList(graphs, true)
    ) ;
  }

  /**
   * @deprecated
   */
  private constructor(
    public posAll: readonly (NodeUnitGraph | null)[],
    unsafe: true = util.throwTypeError(`illegal constructor access`) )
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
  static byPointsAndFill(...[pts, fill]: (
    [points: readonly Point3D[], fill ?: string]
  ) )
  : PolygonallyMarkedNodeUnitGraph
  {
    return PolygonallyMarkedNodeUnitGraph.byContoursAndFill([{ points: pts, }], fill) ;
  }

  // TODO
  static byContoursAndFill(...args: (
    [readonly PmngPerContourDesc[], fill ?: string]
  ) )
  : PolygonallyMarkedNodeUnitGraph
  {
    const [ctours, fill] = args;
    return new PolygonallyMarkedNodeUnitGraph(ctours, fill) ;
  }

  /**
   * @deprecated
   */
  private readonly ctrs!: readonly PmngPerContourDesc[] ;

  /**
   * @deprecated
   */
  constructor(
    ctrsArg: readonly PmngPerContourDesc[] ,
    public readonly fill  ?: string ,
  )
  { super() ; this.ctrs = ctrsArg ; }

  getContours()
  : readonly PmngPerContourDesc[]
  {
    return this.ctrs ;
  }

  // TODO
  toDebugSnippet()
  {
    const { points, } = { points: this.ctrs.flatMap(ctour => ctour.points ) } ;
    return util.stringLinesConcat(function* () {
      yield `points:` ;
      for (const [i, p] of points.entries() ) {
        yield `${i}. ${JSON.stringify(p satisfies Point3D ) } ` ;
      }
      yield `end of points` ;
    } ) ;
  }
}

interface PmngPerContourDesc
{ readonly points: readonly Point3D[] ; }












