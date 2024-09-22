




import { util, } from "typexpe-commons/src/common_sv.mjs";

import {
  assertAndPrintEquality,
} from "studk-ui-fwcore/src/reactjs/helpers/AsCustomIntrinsicElement.js";






import {
  ReactJsBasedCustomIntrinsicElement,
} from "studk-ui-fwcore/src/reactjs/helpers/AsCustomIntrinsicElement.js";



describe("ReactJsBasedCustomIntrinsicElement Case-Conversion test", function () {
  ;

  it (`for 'className'`, function () {

    const {
      userSpacePropKeyNames ,
      userSpacePropKnmp ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["className"]) ;

    util.assert.deepStrictEqual(userSpacePropKnmp.map(e => e.mdlSpaceStedKey ).join(";") , "(OnUserspaceKey)class" ) ;

    util.assert.deepStrictEqual(userSpacePropKeyNames.join(";") , "class" ) ;

  } ) ;

  it (`for 'for'`, function () {

    const {
      userSpacePropKeyNames ,
      userSpacePropKnmp ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["htmlFor"]) ;

    util.assert.deepStrictEqual(userSpacePropKnmp.map(e => e.mdlSpaceStedKey ).join(";") , "(OnUserspaceKey)for" ) ;

    util.assert.deepStrictEqual(userSpacePropKeyNames.join(";") , "for" ) ;

  } ) ;

  it (`for 'spellCheck'`, function () {

    const {
      userSpacePropKeyNames ,
      userSpacePropKnmp ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["spellCheck"]) ;

    util.assert.deepStrictEqual(userSpacePropKnmp.map(e => e.mdlSpaceStedKey ).join(";") , "(OnProgrammaticItcSpaceKey)spellCheck" ) ;

    util.assert.deepStrictEqual(userSpacePropKeyNames.join(";") , "spellcheck" ) ;

  } ) ;

  it (`for 'formAction'`, function () {

    const {
      userSpacePropKeyNames ,
      userSpacePropKnmp ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["formAction"]) ;

    assertAndPrintEquality(userSpacePropKnmp.map(e => e.mdlSpaceStedKey ).join(";") , "(OnProgrammaticItcSpaceKey)formAction" ) ;

    assertAndPrintEquality(userSpacePropKeyNames.join(";") , "formaction" ) ;

  } ) ;

  it (`for 'onBeforeInput' (an Evt Name)`, function () {

    const {
      userSpacePropKeyNames ,
      userSpacePropKnmp ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["onBeforeInput"]) ;

    assertAndPrintEquality(userSpacePropKeyNames.join(",") , "onbeforeinput" ) ;

    assertAndPrintEquality(userSpacePropKnmp.map(e => e.mdlSpaceStedKey ).join(",") , "(AsEventKey)BeforeInput" ) ;

    assertAndPrintEquality(userSpacePropKnmp.map(e => e.camelCasedEName ).join(",") , "BeforeInput" ) ;

  } ) ;

  it (`for 'onKeyDown' and 'onKeyUp' (an Evt Name)`, function () {

    const {
      userSpacePropKeyNames ,
      userSpacePropKnmp ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["onKeyDown", "onKeyUp" ]) ;

    assertAndPrintEquality(userSpacePropKeyNames.join(",") , "onkeydown,onkeyup" ) ;

    assertAndPrintEquality(userSpacePropKnmp.map(e => e.mdlSpaceStedKey ).join(";") , "(AsEventKey)KeyDown;(AsEventKey)KeyUp" ) ;

    assertAndPrintEquality(userSpacePropKnmp.map(e => e.camelCasedEName ).join(";") , "KeyDown;KeyUp" ) ;

  } ) ;

  ;
} ) ;

describe("ReactJsBasedCustomIntrinsicElement test", function () {
  ;

  /* TBD */

  ;
} ) ;
















