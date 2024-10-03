






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
  normaliseAngDeg ,
} from "studk-video-fwcore/src/Angular1.mjs" ;

import {
  //
  LinTr3D ,
  linTrTransformedPosition3DMat ,
  matrixAsTr2D ,
  Point3D ,
} from "studk-video-fwcore/src/LinearTransforms.mjs" ;

import {
  identityMat4,
  Matrix3 ,
  Matrix4 ,
} from "studk-fwcore/src/LinearMap1.mjs";






import * as React from "react" ;


import {
  describeComponent,
} from '#UiFwCore/ReactComponentDef.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;







export const IAngularSliderComp = (
  describeComponent((
    function IAngularSliderCompImpl({ value: valueExisting, propagateEdit, }: {
      value: Angle,
      propagateEdit?: (evt: { newValue: Angle, }) => void ,
    } ) {
      ;
      return (
        <span
        className='studk-i3ddemo-iangularslidercomp'
        style={{
          // display: "grid",
          // gridTemplateAreas: `"a" "b" `,
          // gridTemplateColumns: `5em 5em `,
        }}
        >
          <span
          style={{
            // contain: `inline-size layout` ,
            contain: `inline-size` ,
            inlineSize: `10ex`,
            display: `inline-block`,
          }}
          >
            <code>
              {`${Angle.getDegrees(valueExisting) }deg` }
            </code>
          </span>
          { propagateEdit && (
            <span
            style={{
              inlineSize: `10ex`,
              display: `inline-block`,
              contain: `inline-size layout` ,
            }}
            >
              <IAngularSliderShiftComp value={valueExisting} propagateEdit={propagateEdit} />
            </span>
          ) }
        </span>
      ) ;
    }
  ))
) ;

// function IAngularSliderShiftComp
export const IAngularSliderShiftComp = (
  describeComponent((
    function IAngularSliderShiftCImpl({ value: valueExisting, propagateEdit, }: {
      value: Angle,
      propagateEdit: (evt: { newValue: Angle, }) => void ,
    } ) {
      ;
      function runIncrAction(...[{ amt: incrAmt, }] : [{ amt: Angle, }] )
      {
        propagateEdit({
          newValue: Angle.ByDegrees(Angle.getDegrees(valueExisting) + Angle.getDegrees(incrAmt) )
          ,
        }) ;
      }
      return (
        <span
        className='studk-i3ddemo-iangularslidershiftcomp'
        >
          <span
          style={{
            //
            display: "grid",
            gridTemplateAreas: `"a b" `,
            gridTemplateColumns: `10ex 10ex `,
          }}
          >
            <AngularIncrButtonC value={Angle.ByDegrees(   -15)} onClick={e => runIncrAction({ amt: e.value, }) } />
            <AngularIncrButtonC value={Angle.ByDegrees(    15)} onClick={e => runIncrAction({ amt: e.value, }) } />
          </span>
        </span>
      ) ;
    }
  ))
) ;

function AngularIncrButtonC<A extends Angle> ({ value, onClick: passClick, } : { value: A ; onClick: (e: { value: Angle, }) => void ; }) {
  const valueDeg = Angle.getDegrees(value) ;
  const displayValDegs = (180 < valueDeg) ? (-360 + valueDeg) : valueDeg;
  return (
    <IncrButtonC
    value={displayValDegs }
    onClick={e => passClick({ value: Angle.ByDegrees(e.value), }) }
    />
  ) ;
} ;

export {
  /** @deprecated alias of {@link AngularIncrButtonC} */
  AngularIncrButtonC as AngularIncrButton ,
};

function IncrButtonC<A extends number> ({ value, onClick: runOnClickAction1 = Object, } : { value: A ; onClick?: (e: { value: A, }) => void ; })
{
  const signStr = (
    String(Math.sign(value)).replace(/\w+$/g, () => "") 
  ) ;
  const cde = `${signStr }${Math.abs(value) }` ;

  const runOnClickAction = function () {
    runOnClickAction1({ value: value, }) ;
  } ;

  return (
    <Button
    className='studk-i3ddemo-incrementingbuttoncomp'
    title={`incr by ${cde}` }
    onClick={() => runOnClickAction() }
    children={(
      <>
      <code>
        {cde}
      </code>
      </>
    )}
    style={{
      minInlineSize: `5ex` ,
      contain: `inline-size`,
      textAlign: "end",
      overflow: "clip",
    }}
    />
  ) ;
} ;

export {
  /** @deprecated alias of {@link IncrButtonC} */
  IncrButtonC as IncrButton ,
};












