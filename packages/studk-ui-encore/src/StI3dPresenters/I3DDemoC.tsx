






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

import type {
  AllOrNever1,
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
  LinTr3DMat,
  linTrFromTranslateCoord3Matr,
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

import {
  IndividuallyMarkedNodeList ,
  NodeUnitGraph ,
  PolygonallyMarkedNodeUnitGraph ,
} from "studk-i3d/src/xt/IndividuallyGMarkedNodeListEnug1.tsx" ;

import {
  CartesOrthoFaceAngle ,
  describeCartesOrthoRotationFwd ,
  describeXConYRotationFwd ,
  describeXConZRotationFwd ,
} from "studk-i3d/src/xt/MatrixBasedRotationsXConYZFcea.ts" ;


// import {
//   I3D,
//   I3DFullMeshPerspDisplay,
//   I3DFullSceneFigureDisplay ,
// } from "@/components/jsxI3DContours";

import {
  IndividuallyMarkedNodeListEnugFullMeshPerspG ,
  IndividuallyMarkedNodeListEnugFullSceneUnitAppletC ,
} from "studk-ui-encore/src/StI3dPresenters/IndividuallyGMarkedNodeListJsxEnug1.tsx" ;

export {
  // I3DFullMeshPerspDisplay,
  // I3DFullSceneFigureDisplay ,
} ;




import * as React from "react" ;

import {
  describeComponent,
} from '#UiFwCore/ReactComponentDef.tsx'; ;

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



import {
  IAngularSliderComp,
} from "studk-ui-encore/src/StI3dPresenters/IAngularSlider4Mat.tsx";




;

import {
  xTransformedly ,
  xBall ,
  xEquilateralPolygon ,
  xEquilateralTriangle ,
  xI3dExtendedYardStarFieldGraphDemo ,
} from "studk-i3d/src/xt/I3dExtendedYardFieldDemos1.tsx" ;

/**
 * `true` only-if
 * your code is client-side
 * .
 * 
 */
const useClientOnlyFeature = (
  function useClientOnlyFeatureB() : (
    // globalThis is Window
    boolean
  )
  {
    return (
      React.useSyncExternalStore((
        React.useCallback(function () {
          return () => {} ;
        }, [] )
      ) , () => (
        true
      ), () => (
        false
      ) )
    ) ;
  }
) ;

export const I3DDemoC: typeof I3DDemoTrueC = (
  /**
   * NOTE --
   * this branching is here because
   * we needed it to debug spurious/unexpected, extended durations of high CPU usage by the server (the Dev Server)
   * .
   * 
   */

  (() => {
    return (
      /* HTML Component */
      describeComponent((
        function I3DDemoCompImpl(props : React.ComponentProps<typeof I3DDemoTrueC> )
        {
          const beingOnClientSide = (
            useClientOnlyFeature()
          ) ;

          if (0) {
            return (
              <I3DDemoFakeC
              { ...props }
              />
            ) ;
          }

          if (1) {
            // TODO
            {
              return (
                (
                  beingOnClientSide
                ) ? (
                  <I3DDemoTrueC
                  { ...props }
                  />
                ) : (
                  <></>
                )
              ) ;
            }
          }

          {
            return (
              <I3DDemoTrueC
              { ...props }
              />
            ) ;
          }
        }
      ))
    ) ;
  })()
) ;

const I3DDemoFakeC = (
  /* HTML Component */
  describeComponent((
    function I3DDemoFakeCompImpl(props : React.ComponentProps<typeof I3DDemoTrueC> )
    {
        ;
        // const posAll = React.useMemo(() => (
        //   xI3dExtendedYardStarFieldGraphDemo()
        // ) , [xI3dExtendedYardStarFieldGraphDemo,] ) ;
        const [ang, setPersp] = React.useState<Angle>(Angle.ByDegrees(0) ) ;
        const persp = React.useMemo(() => (
          describeXConZRotationFwd(ang)
        ) , [ang] ) ;
        return (
          <div>
            <div>
              { (
                <div>
                  <p>
                    <code>I3DDemoFakeCompImpl</code>
                  </p>
                </div>
              ) }
            </div>
            <p>
              <IAngularSliderComp
              value={ang}
              /* needa be `async` to avoid "violation, handler took t" issues */
              propagateEdit={(e) => setTimeout(() => setPersp(e.newValue) , 0 ) }
              />
            </p>
            <details key="details">
              <section style={{ position: "relative", overflow: "auto", }}>
                <p>no stuff to debug for now.</p>
              </section>
            </details>
          </div>
        ) ;
    }
  ))
) ;
const I3DDemoTrueC = (
  /* HTML Component */
  describeComponent((
    function I3DDemoTrueCompImpl({} : {}) {
      const posAll = React.useMemo(() => (
        xI3dExtendedYardStarFieldGraphDemo()
      ) , [xI3dExtendedYardStarFieldGraphDemo,] ) ;
      // const [tr, setPersp] = React.useState<LinTr3DMat>(identityMat4() ) ;
      const [ang, setPersp] = React.useState<Angle>(Angle.ByDegrees(0) ) ;
      const persp = React.useMemo(() => (
        describeXConZRotationFwd(ang)
      ) , [ang] ) ;
      return (
        <div>
          <div>
            { true ? (
            <IndividuallyMarkedNodeListEnugFullSceneUnitAppletC
            content={posAll }
            perspective={persp}
            />
            ) : (
              <div>
                <p>
                  hidden for debugging
                </p>
              </div>
            ) }
          </div>
          <p>
            <IAngularSliderComp
            value={ang}
            /* needa be `async` to avoid "violation, handler took t" issues */
            propagateEdit={(e) => setTimeout(() => setPersp(e.newValue) , 0 ) }
            />
          </p>
          <details key="details">
            <div style={{ position: "relative", overflow: "auto", }}>
            <pre style={{ whiteSpace: "pre-wrap" }} >
              { JSON.stringify({ persp, ang, }, null, 2) }
            </pre>
            </div>
          </details>
        </div>
      ) ;
    }
  ))
) ;

export {
  /** @deprecated a prone-to-ambiguity alias of {@link I3DDemoC} */
  I3DDemoC as I3DDemo ,
} ;










