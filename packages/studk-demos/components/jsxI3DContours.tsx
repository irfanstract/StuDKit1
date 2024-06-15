
"use client" ;




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  once ,
} from "lodash-es" ;





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





// import {
//   IndividuallyMarkedNodeList ,
//   NodeUnitGraph ,
//   PolygonallyMarkedNodeUnitGraph ,
// } from "studk-i3d/src/xt/IndividuallyGMarkedNodeListEnug1.tsx" ;

import * as I3D from "./jsxI3DContoursData.tsx" ;

// TODO get rid of these
export { I3D , } ;





export const I3DFullMeshPerspDisplay = function I3DFullMeshGraphPerspDisplayComp({ content: cont, perspective: finalPersp, } : {
  content: I3D.SpclDisplayable
  ,
  perspective: Matrix4,
})
{

  const describeJsxNdUnitContour = function (...[key, { zDepth: zDepthArg, }, gr]: [key: string, options: {
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

  // TODO
  function describeJsxRenderedContour(...[itemKey, ndUnit] : [key: string, v: I3D.PolygonallyMarkedNodeUnitGraph ] )
  {
    ;

    type KXY = (
      // @ts-ignore
      keyof { x, y }
    ) ;

    const pts = (
      util.asNonlocalReturnBasedRun<readonly { [k in KXY ]: number ; }[] , false>(ctx => (
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
        .flatMap((e, i, seq): ([] | [{ [k in KXY ]: number ; }] ) => {
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
    const ctgr = (
      pts ? (
        <path
        d={
          pts.length ?
          `M ${pts.map(pos => `${pos.x } ${pos.y }` ).join(" L ") } z`
          : "M 0 0 z"
        }
        style={{ fill: ndUnit.fill ?? "yellow", }}
        />
      ) : null
    ) ;
    const keyImpl = (
      itemKey
    ) ;
    return (
      describeJsxNdUnitContour((
        keyImpl
      ), {
        zDepth: ndUnit.points[0]?.z ,
      }, (
        <g>
        <title>{ keyImpl }</title>
        { ctgr }
        </g>
      ) )
    ) ;
  }

  if (cont instanceof I3D.IndividuallyMarkedNodeList )
  {
    const renderedContours = (
      cont.posAll
      .map((ndUnit, contourI) => {
        ;
  
        const itemKey = `e ${contourI}`;
  
        if (ndUnit === null ) {
          ;
          /* `null`. */
          return (
            <React.Fragment key={itemKey} />
          ) ;
        }
        else {
          ;
  
          if (ndUnit instanceof I3D.PolygonallyMarkedNodeUnitGraph)
          {
            return (
              describeJsxRenderedContour(itemKey, ndUnit)
            ) ;
          }
  
          /* it's not supported. */
          return (
            <React.Fragment key={itemKey} >
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
  }

  return (
    <g>
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
    <svg
    viewBox={(
      (() => {
        const r = 50 ;
        const asp = 2.25 ;
        return `${-1 * asp * r} ${-1 * 1 * r} ${2 * asp * r} ${2 * r } ` ;
      } )()
    )}
    >
      <path d={`M -8000 -8000 H 8000 V 8000 H -8000 z ` } fill="black" />
      <g>
        <I3DFullMeshPerspDisplay perspective={finalPersp} content={cont} />
      </g>
    </svg>
  ) ;
} ;





import * as React from "react" ;








