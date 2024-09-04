
"use client" ;




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
} from "../../studk-fwcore/src/LinearMap1.mjs";






import * as React from "react" ;





export function IAngularSliderComp({ value: valueExisting, propagateEdit, }: {
  value: Angle,
  propagateEdit?: (evt: { newValue: Angle, }) => void ,
} ) {
  ;
  return (
    <span>
      <code>
        {valueExisting }
      </code>
      { propagateEdit && <IAngularSliderShiftComp value={valueExisting} propagateEdit={propagateEdit} /> }
    </span>
  ) ;
} ;

export function IAngularSliderShiftComp({ value: valueExisting, propagateEdit, }: {
  value: Angle,
  propagateEdit: (evt: { newValue: Angle, }) => void ,
} ) {
  ;
  function aincr(...[{ amt: incrAmt, }] : [{ amt: Angle, }] )
  {
    propagateEdit({
      newValue: Angle.ByDegrees(Angle.getDegrees(valueExisting) + Angle.getDegrees(incrAmt) )
      ,
    }) ;
  }
  return (
    <span>
      <span>
        <AngularIncrButton value={Angle.ByDegrees(   -15)} onClick={e => aincr({ amt: e.value, }) } />
        <AngularIncrButton value={Angle.ByDegrees(    15)} onClick={e => aincr({ amt: e.value, }) } />
      </span>
    </span>
  ) ;
} ;

function AngularIncrButton<A extends Angle> ({ value, onClick: passClick, } : { value: A ; onClick: (e: { value: Angle, }) => void ; }) {
  const valueDeg = Angle.getDegrees(value) ;
  return (
    <IncrButton
    value={valueDeg}
    onClick={e => passClick({ value: Angle.ByDegrees(e.value), }) }
    />
  ) ;
} ;

function IncrButton<A extends number> ({ value, onClick = Object, } : { value: A ; onClick?: (e: { value: A, }) => void ; }) {
  const cde = `${Math.sign(value) }${Math.abs(value) }` ;
  return (
    <button type="button" onClick={() => onClick({ value: value, }) } >
      <code>
        {cde}
      </code>
    </button>
  ) ;
} ;





