

import assert from "assert";

import {
  allocateKeyInternedObjectPool,
} from "typexpe-commons/src/ort.mjs";;





describe("Object Interning Test", () => {
  ;

  const XGlobalScopeBuiltin = (() => {
    ;

    const getNamedItem = /** @type {(x: String) => Function } */ (key) => (
      // @ts-ignore
      globalThis[key]
    ) ;

    const {
      GET: getNamedItemAsBoxed,
    } = allocateKeyInternedObjectPool({ recreate: /** @type {(x: String) => { value: Function, } } */ (key) => ({ value: getNamedItem(key) , }) , }, {
      convToCacheKey: e => e ,
    } ) ;

    return {
      getNamedItemAsBoxed,
      getNamedItem,
    } ;
  })() ;

  it(`interning shall behave as intended`, () => {
    ;

    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("RegExp") === XGlobalScopeBuiltin.getNamedItemAsBoxed("RegExp") ) ;
    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("Function") === XGlobalScopeBuiltin.getNamedItemAsBoxed("Function") ) ;
    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("Function") === XGlobalScopeBuiltin.getNamedItemAsBoxed("Functi" + "on" ) ) ;

    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("Function") !== XGlobalScopeBuiltin.getNamedItemAsBoxed("Symbol" ) ) ;

    ;
  } ) ;

  it(`constructor shall behave as intended`, () => {
    ;

    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("RegExp").value === RegExp ) ;
    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("Function").value === Function ) ;

    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("Reg Exp").value === undefined ) ;

    ;
  } ) ;

  it(`'XGlobalScopeBuiltin' shall behave as intended`, () => {
    ;

    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("RegExp").value   === XGlobalScopeBuiltin.getNamedItem("RegExp") ) ;
    assert(XGlobalScopeBuiltin.getNamedItemAsBoxed("Function").value === XGlobalScopeBuiltin.getNamedItem("Function") ) ;

    ;
  } ) ;

} ) ;




