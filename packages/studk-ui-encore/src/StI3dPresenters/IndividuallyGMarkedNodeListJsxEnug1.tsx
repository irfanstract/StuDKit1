






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






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  once ,
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





;






import * as React from "react" ;

import {
  describeComponent,
} from 'studk-ui-componentdefinition/src/dec.tsx'; ;

import {
  describeSvgComponent ,
} from 'studk-ui/src/meta/react/gec.tsx'; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;

// `${-1 * asp * r} ${-1 * 1 * r} ${2 * asp * r} ${2 * r } `
class UnivoAspectRectBox
{
  static fromRAndAsp(...[r, asp]: ArgsWithOptions<[r: number, asp: number], {} >) : UnivoAspectRectBox
  {
    return new UnivoAspectRectBox(r, asp)
  }
  private constructor(public readonly r: number, public readonly asp: number)
  {
    this.leftPos = -1 * asp * r ;
    this.top = -1 * 1 * r ;
    this.width = 2 * asp * r ;
    this.height = 2 * r ;
  }
  readonly leftPos!: number ;
  readonly top!: number ;
  readonly width!: number ;
  readonly height: number ;

  toSvgViewBoxAttrValueString()
  {
    return `${this.leftPos} ${this.top} ${this.width} ${this.height } ` ;
  }

  toSvgPathDSpec()
  {
    return (
      `M ${this.leftPos} ${this.top} H ${this.leftPos + this.width} V ${this.top + this.height} H ${this.leftPos} z `
    ) ;
  }

}

const UnivoComp = (
  describeComponent((
    function UnivoCompImpl({
      viewPickRect1 ,
      children: contents ,
      style: styleProp,
      ...etProps
    } : (
      & React.SVGAttributes<SVGSVGElement>
      & React.PropsWithChildren
      & { viewPickRect1 : UnivoAspectRectBox }
    ) )
    {
      return (
        <svg
        viewBox={(
          viewPickRect1
          .toSvgViewBoxAttrValueString()
        )}
        style={{
          background: "black",
          ...(styleProp)
        }}
        {...etProps}
        >
          { null && (
          <path
          d={(
            UnivoAspectRectBox.fromRAndAsp(1.5 * viewPickRect1.r, viewPickRect1.asp )
            .toSvgPathDSpec()
          ) }
          fill="black"
          />
          ) }
          <g
          children={(
            <React.Suspense
            fallback={<></> }
            children={(
              contents
            )}
            />
          )}
          />
        </svg>
      ) ;
    }
  ))
) ;

;







;

import {
  IndividuallyMarkedNodeList ,
  NodeUnitGraph ,
  NodeWithUnitGraph,
  PolygonallyMarkedNodeUnitGraph, 
  PolygonallyMarkedPointWithUnitGraph,
} from "studk-i3d/src/xt/IndividuallyGMarkedNodeListEnug1.tsx" ;

// I3DFullSceneFigureDisplay --> IndividuallyMarkedNodeListEnugFullMeshPerspChartC
export const IndividuallyMarkedNodeListEnugFullSceneUnitAppletC = (
  /* HTML Component */
  describeComponent((
    function IndividuallyMarkedNodeListEnugFullSceneUnitAppletCImpl({ content: cont, perspective: perspectiveArg, } : {
      content: IndividuallyMarkedNodeList
      ,
      perspective: Matrix4,
    })
    {
      ;

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

      const contDfrd = (
        (React.useDeferredValue as (<T extends {} | null>(x: T, x0 ?: T) => T ) )(cont, null)
      ) ;

      return (() => {
        ;
        const viewPickRect1 = (
          ((...[{ scsc }]: ArgsWithOptions<[], { scsc: number, } > ) => {
            const r = (50 / 17) * scsc ;
            const asp = 2.25 ;
            return (
              UnivoAspectRectBox.fromRAndAsp(r, asp)
            ) ;
          } )({ scsc: 13.5, })
        ) ;
      
        return (
          <UnivoComp
          viewPickRect1={viewPickRect1}
          children={(
            contDfrd && (
              <g>
              <IndividuallyMarkedNodeListEnugFullMeshPerspG
              perspective={finalPersp}
              content={contDfrd}
              sc={17}
              />
              </g>
            )
          )}
          />
        ) ;
      })() ;
    }
  ))
) ;

export const IndividuallyMarkedNodeListEnugFullMeshPerspG = (
  /* SVG Component */
  describeSvgComponent((
    /**
     * given that this Component takes *exactly* this set of props,
     * we can meaningfully avoid significant overhead, thanks to {@link React.memo}
     * 
     */
    (React.memo(function IndividuallyMarkedNodeListPlotCImpl(pr : (
      & {
        content: IndividuallyMarkedNodeList
        ,
        perspective: Matrix4,
        sc: number,
      }
      & {
        abortContourOnNanError ?: boolean ,
      }
    ))
    {
      const {
        content: cont,
        perspective: finalPersp,
        sc = 16,
        abortContourOnNanError = true ,
      } = pr ;
    
      const describeJsxNdUnitContour = function (...a: [...(
        ArgsWithOptions<[key: string, ], {
          zDepth ?: number ;
        }>
      ), content: React.ReactElement | null ] ) {
        ;
        const [key, { zDepth: zDepthArg = null, } = {}, gr] = a ;
        return (
          //
          <React.Fragment key={key }>
            {gr }
          </React.Fragment>
        ) ;
      } ;

      // TODO
      function describeJsxRenderedContour(...[itemKey, ndUnit] : (
        ArgsWithOptions<[key: string, v: NodeUnitGraph | NodeWithUnitGraph ], {}>
      ) )
      {
        ;
        
        if ((
          ndUnit instanceof PolygonallyMarkedNodeUnitGraph
          ||
          ndUnit instanceof PolygonallyMarkedPointWithUnitGraph
        ))
        {
          return (
            describeJsxRenderedPmng(itemKey, ndUnit)
          ) ;
        }

        /* it's not supported. */
        return (
          <React.Fragment key={itemKey} >
            <g />
          </React.Fragment>
        ) ;
      }
    
      // TODO
      function describeJsxRenderedPmng(...[ikArg, ndUnit] : (
        ArgsWithOptions<[key: string, v: (
          | PolygonallyMarkedNodeUnitGraph
          | PolygonallyMarkedPointWithUnitGraph
        ) ], {}>
      ) )
      {
        ;

        ;
        const s31 = (
          ndUnit
          .getContours()
          .map((contour, contourIdx) => {
          ;

          ;
          const pts = (
            contour
            .points
          ) ;
  
          return {
            contourIdx ,
            contour ,
            pts ,
          } as const ;
          })
        ) ;

        const s30 = (
          s31
          .map(({ contour, contourIdx, pts, }) => {
          ;

          ;
          const s20 = (
            pts
            .map(pos => (
              linTrTransformedPosition3DMat(finalPersp, pos )
            ))
          ) ;
          const perspectedPts01 = (
            s20
            .map(pos => ({
              x: pos.x / Math.max(0, pos.z ) ,
              y: pos.y / Math.max(0, pos.z ) ,
            }) )
            .map(pos => ({
              x: pos.x * (sc * 10) ,
              y: pos.y * (sc * 10) ,
            }) )
          ) ;
  
          const perspectedPts = (
            util.asNonlocalReturnBasedRun<readonly { [k in KXY ]: number ; }[] , false>(ctx => {
              return (
                perspectedPts01
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
                  if (abortContourOnNanError) {
                    ctx.exit(false) ;
                  }
                  return [] ;
                } )
              ) ;
            } )
          ) ;
          return {
            contourIdx ,
            contour ,
            perspectedPts: perspectedPts ,
          } as const ;
          })
        ) ;
    
        return (
        <React.Fragment
        key={`CG-${ikArg}` }
        children={(
          //
          s30
          .map(({ contour, contourIdx, perspectedPts: pts, }) => {
            ;

            const ctgr = (
              pts ? (
                // <path
                // d={
                //   pts.length ?
                //   `M ${pts.map(pos => `${pos.x } ${pos.y }` ).join(" L ") } z`
                //   : "M 0 0 z"
                // }
                // style={{ fill: ndUnit.fill ?? "yellow", }}
                // />
                <SimplePtListBasedPolygonC
                pts={pts}
                fill={(() => {
                  if (ndUnit instanceof NodeUnitGraph) {
                    return ndUnit.fill ;
                  }
                  if (ndUnit instanceof NodeWithUnitGraph) {
                    return ndUnit.nodeUnitGraph.fill ;
                  }
                  return ;
                })() }
                />
              ) : null
            ) ;
            return (
              describeJsxNdUnitContour((
                `C${contourIdx}`
              ), {
                // zDepth: ndUnit.points[0]?.z ,
              }, (
                <g>
                <title>{ (function () {
                  const ident = `${ikArg}-${contourIdx}` ;
                  if (ndUnit instanceof NodeWithUnitGraph) {
                    return `${ident} (pos: ${(
                      ((...[{ x, y, z, }] : [x: Point3D]) => `{ ${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)} }` )
                      (ndUnit.pos)
                    )} )` ;
                  }
                  return ident ;
                })() }</title>
                { ctgr }
                </g>
              ) )
            ) ;
          })
        )}
        />
        ) ;
      }
    
      if (cont instanceof IndividuallyMarkedNodeList )
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
      
              return (
                describeJsxRenderedContour(itemKey, ndUnit )
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
    }))
  ))
) ;

type KXY = (
  // @ts-ignore
  keyof { x, y }
) ;

const SimplePtListBasedPolygonC = (
  describeSvgComponent((
    function SimplePtListBasedPolygonCImpl({ pts, fill: fillArg, } : { pts: readonly Pick<Point3D, "x" | "y">[], fill?: string, })
    {
      return (
        <path
        d={
          pts.length ?
          `M ${pts.map(pos => `${pos.x } ${pos.y }` ).join(" L ") } z`
          : "M 0 0 z"
        }
        style={{
          fill: fillArg ?? "yellow",
        }}
        />
      ) ;
    }
  ))
) ;












