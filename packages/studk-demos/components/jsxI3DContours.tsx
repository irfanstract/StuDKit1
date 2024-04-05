
"use client" ;




import { util, } from "typexpe-commons/src/common_sv.mjs";





import {
  Angle ,
  cosineAt,
  normaliseAngDeg, 
  sineAt,
} from "studk-video-fwcore/src/Angular1.mjs" ;

import {
  //
  LinTr3D ,
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
} from "../../studk-fwcore/src/LinearMap1.mjs";





namespace I3D
{
  ;

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
    constructor(public posAll: readonly (I3D.NodeUnitGraph | null)[] )
    { super() ; }
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
  }

  ;

  export function describeXConYRotationFwd(...[ang]: [ang: Angle] )
  { return linTrRotation3DForXConYMat(ang) ;
  }

  export function describeXConZRotationFwd(...[ang]: [ang: Angle] )
  { return linTrRotation3DForXConZMat(ang) ;
  }

  ;
}

// TODO get rid of these
export { I3D , } ;





export const I3DFullMeshPerspDisplay = function I3DFullMeshGraphPerspDisplayComp({ content: cont, perspective: finalPersp, } : {
  content: I3D.IndividuallyMarkedNodeList
  ,
  perspective: Matrix4,
})
{

  const describeNdUnitJsxContour = function (...[key, { zDepth: zDepthArg, }, gr]: [key: string, options: {
    zDepth ?: number ;
  }, content: React.ReactElement | null ] ) {
    ;
    return (
      //
      <React.Fragment key={key }>
        {gr }
      </React.Fragment>
    ) ;
  } ;

  const renderedContours = (
    cont.posAll
    .map((ndUnit, contourI) => {
      ;

      const itemKeyingPrefix = `e ${contourI}`;

      if (ndUnit === null ) {
        ;
        /* `null`. */
        return (
          <React.Fragment key={`${itemKeyingPrefix} (null)`} />
        ) ;
      }
      else {
        ;

        if (ndUnit instanceof I3D.PolygonallyMarkedNodeUnitGraph)
        {
          const pts = (
            util.asNonlocalReturnBasedRun<readonly { [k in keyof { x, y } ]: number ; }[] , false>(ctx => (
              ndUnit
              .points
              .map(pos => (
                linTrTransformedPosition3DMat(finalPersp, pos )
              ))
              .map(pos => ({
                x: pos.x / Math.max(0, pos.z ) ,
                y: pos.y / Math.max(0, pos.z ) ,
              }) )
              .map(pos => ({
                x: pos.x * 120 ,
                y: pos.y * 120 ,
              }) )
              .flatMap((e, i, seq): ([] | [{ [k in keyof { x, y } ]: number ; }] ) => {
                if (!(`${e.x} ${e.y}`.match(/Inf|NaN/g) ) )
                {
                  return [e] ;
                }
                if (0)
                {
                  {
                    const v = seq[i + 1] ;
                    if (v) { return [v] ; }
                  }
                  return [{ x: 0, y: 0, }]  ;
                }
                if (1) {
                  ctx.exit(false) ;
                }
                return [] ;
              } )
            ) )
          ) ;
          const keyImpl = (
            `${itemKeyingPrefix} (PolygonallyMarkedNodeUnitGraph)`
          ) ;
          return (
            describeNdUnitJsxContour((
              keyImpl
            ), {
              zDepth: ndUnit.points[0]?.z ,
            }, (
              <g>
              <title>{ keyImpl }</title>
              { pts ? (
                <path
                d={
                  pts.length ?
                  `M ${pts.map(pos => `${pos.x } ${pos.y }` ).join(" L ") } z`
                  : "M 0 0 z"
                }
                style={{ fill: ndUnit.fill ?? "yellow", }}
                />
              ) : null }
              </g>
            ) )
          ) ;
        }

        /* it's not supported. */
        return (
          <React.Fragment key={`${itemKeyingPrefix} (Unsupported Type )`} >
            <g />
          </React.Fragment>
        ) ;
      }
    } )
  ) ;

  const rc = (
    <g>
      { renderedContours }
    </g>
  ) ;

  return (
    <g>
      { rc } 
    </g>
  ) ;
} ;

export const I3DFullSceneFigureDisplay = function I3DFullSceneFigureDisplayComp({ content: cont, perspective: perspectiveArg, } : {
  content: I3D.IndividuallyMarkedNodeList
  ,
  perspective: Matrix4,
})
{
  const finalPersp = (() => {
    let persp: Matrix4 = (
      identityMat4()
    ) ;
    persp = (
      multipliedMat4(perspectiveArg, persp )
    ) ;
    persp = (
      multipliedMat4((
        matrixAssign(identityMat4(), {
          "m2,2": -1 ,
        } )
      ), persp )
    ) ;
    // persp = (
    //   ((scl: number) => (
    //     multipliedMat4((
    //       matrixAssign(identityMat4(), ((scl1: number) => ({
    //         "m1,1": scl1 ,
    //         "m2,2": scl1 ,
    //       }) )(scl ) )
    //     ), persp )
    //   ) )(200 )
    // ) ;
    return persp ;
  })() ;

  return (
    <svg viewBox="-200 -100 400 200">
      <path d={`M -8000 -8000 H 8000 V 8000 H -8000 z ` } fill="black" />
      <g>
        <I3DFullMeshPerspDisplay perspective={finalPersp} content={cont} />
      </g>
    </svg>
  ) ;
} ;





import * as React from "react" ;








