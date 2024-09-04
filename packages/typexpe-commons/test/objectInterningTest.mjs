

import assert from "assert";

import {
  allocateKeyInternedObjectPool,
} from "typexpe-commons/src/ort.mjs";;





describe("Object Interning Test", () => {
  ;

  const XGlobalScopeBuiltinWrapper1 = allocateKeyInternedObjectPool({ recreate: /** @type {(x: String) => { value: Function, } } */ (key) => ({ value: globalThis[key] }) , }) ;

  it(`shall behave as intended`, () => {
    ;

    assert(XGlobalScopeBuiltinWrapper1.GET("RegExp").value === RegExp ) ;
    assert(XGlobalScopeBuiltinWrapper1.GET("RegExp") === XGlobalScopeBuiltinWrapper1.GET("RegExp") ) ;
    assert(XGlobalScopeBuiltinWrapper1.GET("Function").value === Function ) ;
    assert(XGlobalScopeBuiltinWrapper1.GET("Function") === XGlobalScopeBuiltinWrapper1.GET("Function") ) ;
    assert(XGlobalScopeBuiltinWrapper1.GET("Function") === XGlobalScopeBuiltinWrapper1.GET("Functi" + "on" ) ) ;

    assert(XGlobalScopeBuiltinWrapper1.GET("Function") !== XGlobalScopeBuiltinWrapper1.GET("Symbol" ) ) ;

    ;
  } ) ;

  it(`shall behave as intended 03`, () => {
    ;

    assert(XGlobalScopeBuiltinWrapper1.GET("Reg Exp").value === undefined ) ;

    ;
  } ) ;

} ) ;




