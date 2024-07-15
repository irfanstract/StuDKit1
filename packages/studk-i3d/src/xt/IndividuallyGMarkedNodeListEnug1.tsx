







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
export class IndividuallyMarkedPointList
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
  static byEachOptionalEnugBasedLayerGraph: {
    (graphs: readonly (NodeWithUnitGraph | null)[]): IndividuallyMarkedPointList ;
    /** @deprecated */
    (graphs: readonly ((NodeWithUnitGraph | NodeUnitGraph) | null)[]): IndividuallyMarkedPointList ;

  } = function (...[graphs] )
  : IndividuallyMarkedPointList
  {
    return (
      new IndividuallyMarkedPointList(graphs, true)
    ) ;
  } ;

  /**
   * @deprecated
   */
  private constructor(
    posAll: readonly ((NodeWithUnitGraph | NodeUnitGraph) | null)[],
    unsafe: true = util.throwTypeError(`illegal constructor access`) )
  { super() ; this.posAll = posAll ; }

  /** @deprecated */
  posAll!: readonly ((NodeWithUnitGraph | NodeUnitGraph) | null)[] ;

  toPmnugArray()
  {
    return (
      this.posAll
      .map((e): (NodeUnitGraph | null) => {
        if (e instanceof NodeWithUnitGraph) {
          if (e instanceof PolygonallyMarkedPointWithUnitGraph) {
            return e.toPmnug() ;
          }
          return util.throwTypeError(`unsupported ${(NodeWithUnitGraph.name ?? "NWUG")}: ${e } `) ;
        }
        return e ;
      })
    ) ;
  }
  
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
              if (p instanceof PolygonallyMarkedPointWithUnitGraph) {
                // return p.toDebugSnippet() ;
                return `{ ... ... }` ;
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

export {
  /** @deprecated alias of {@link IndividuallyMarkedPointList} */
  IndividuallyMarkedPointList as IndividuallyMarkedNodeList,
} ;



export abstract class NodeWithUnitGraph
{
  protected was(it: NodeWithUnitGraph) {}
  
  public abstract readonly pos : Point3D ;
  public abstract readonly nodeUnitGraph : NodeUnitGraph ;
  
  protected expectPmnug() : PolygonallyMarkedNodeUnitGraph
  {
    const { nodeUnitGraph, } = this ;
    if (nodeUnitGraph instanceof PolygonallyMarkedNodeUnitGraph)
    {
      return nodeUnitGraph ;
    }
    return util.throwTypeError(`unsupported nodeUnitGraph: ${nodeUnitGraph }`) ;
  }

} 

/**
 * {@link NodeWithUnitGraph} being a polygonal graphic.
 * 
 * 
 */
export class PolygonallyMarkedPointWithUnitGraph
extends NodeWithUnitGraph
{

  static ["by"](...[pos, ndUnitGraph] : [pos: Point3D, nodeUnitGraph: PolygonallyMarkedPointWithUnitGraph["nodeUnitGraph"]])
  {
    return (
      new PolygonallyMarkedPointWithUnitGraph(pos, ndUnitGraph)
    ) ;
  }
  
  /**
   * 
   */
  private constructor(
    public readonly pos : Point3D ,
    public readonly nodeUnitGraph : PolygonallyMarkedNodeUnitGraph ,
  )
  { super() ; }

  protected expectPmnug() : PolygonallyMarkedNodeUnitGraph
  {
    return this.nodeUnitGraph ;
  }

  toPmnug()
  {
    return (
      this.expectPmnug()
      .toTranslated(this.pos )
    ) ;
  }

  getContours()
  : readonly PmngPerContourDesc[]
  {
    return (
      this.toPmnug()
      .getContours()
    ) ;
  }

  // TODO
  // toDebugSnippet()
  // {
  //   const { points, } = { points: this.ctrs.flatMap(ctour => ctour.points ) } ;
  //   return util.stringLinesConcat(function* () {
  //     yield `points:` ;
  //     for (const [i, p] of points.entries() ) {
  //       yield `${i}. ${JSON.stringify(p satisfies Point3D ) } ` ;
  //     }
  //     yield `end of points` ;
  //   } ) ;
  // }
}

// interface PmngPerContourDesc
// { readonly points: readonly Point3D[] ; }



export abstract class NodeUnitGraph
{
  protected was(it: NodeUnitGraph) {}
}

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
    return PolygonallyMarkedNodeUnitGraph.byContoursAndFill([PmngPerContourDesc.byPointArray(pts)], fill) ;
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
   * 
   */
  constructor(
    ctrsArg: readonly PmngPerContourDesc[] ,
    public readonly fill  ?: string ,
  )
  { super() ; this.ctrs = ctrsArg ; }
  
  // TODO
  toLinearTransformed(...[tvec] : [Matrix4])
  {
    return (
      PolygonallyMarkedNodeUnitGraph.byContoursAndFill((
        this.getContours()
        .map(c => (
          c.toLinearTransformed(tvec)
        ) )
      ) , this.fill )
    ) ;
  }
  
  toTranslated(...[mvVec1] : [Point3D])
  // : ReturnType<this["toLinearTransformed"]>
  {
    return (
      this.toLinearTransformed((
        linTrFromTranslateCoord3Matr(mvVec1)
      ))
    ) ;
  }

  /**
   * @deprecated
   */
  private readonly ctrs!: readonly PmngPerContourDesc[] ;

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

// interface PmngPerContourDesc
// { readonly points: readonly Point3D[] ; }

class PmngPerContourDesc
{
  protected was (x: PmngPerContourDesc) {}

  static byPointArray(...[pts]: [points: readonly Point3D[] ] )
  {
    return (
      new PmngPerContourDesc(pts)
    ) ;
  }

  private constructor(public readonly points: readonly Point3D[] )
  {}

  toTranslated(...[mvVec1] : [Point3D])
  // : ReturnType<this["toLinearTransformed"]>
  {
    return (
      this.toLinearTransformed((
        linTrFromTranslateCoord3Matr(mvVec1)
      ))
    ) ;
  }
  
  toLinearTransformed(...[tvec] : [Matrix4])
  {
    return (
      PmngPerContourDesc.byPointArray((
        this.points
        .map((pt) => (
          linTrTransformedPosition3DMat((
            tvec
          ), pt)
        ))
      ))
    ) ;
  }
}

export {
  /** @deprecated this is a WIP/TBD. */
  PmngPerContourDesc ,
} ;












