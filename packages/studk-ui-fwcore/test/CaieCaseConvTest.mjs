




import { util, } from "typexpe-commons/src/common_sv.mjs";






import {
  ReactJsBasedCustomIntrinsicElement,
} from "studk-ui-fwcore/src/reactjs/helpers/AsCustomIntrinsicElement.js";



describe("ReactJsBasedCustomIntrinsicElement Case-Conversion test", function () {
  ;

  it (`for 'className'`, function () {

    const {
      userSpacePropKeyNames ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["className"]) ;

    util.assert.deepStrictEqual(userSpacePropKeyNames.join(",") , "class" ) ;

  } ) ;

  it (`for 'for'`, function () {

    const {
      userSpacePropKeyNames ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["htmlFor"]) ;

    util.assert.deepStrictEqual(userSpacePropKeyNames.join(",") , "for" ) ;

  } ) ;

  it (`for 'formAction'`, function () {

    const {
      userSpacePropKeyNames ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["formAction"]) ;

    util.assert.deepStrictEqual(userSpacePropKeyNames.join(",") , "formaction" ) ;

  } ) ;

  it (`for 'onBeforeInput' (an Evt Name)`, function () {

    const {
      userSpacePropKeyNames ,
    } = ReactJsBasedCustomIntrinsicElement.SpclPropNamesMapper.fromMdlSpacePropKeyNames(["onBeforeInput"]) ;

    util.assert.deepStrictEqual(userSpacePropKeyNames.join(",") , "onbeforeinput" ) ;

  } ) ;

  ;
} ) ;

describe("ReactJsBasedCustomIntrinsicElement test", function () {
  ;

  /* TBD */

  ;
} ) ;
















