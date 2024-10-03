







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












