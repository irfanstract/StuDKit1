
// @ts-check

"use strict" ;




const mainDefs = {
  //
  SafeMap: Map,
  SafeSet: Set,
  SafeWeakMap: WeakMap,
} ;

module.exports = mainDefs ;

Object.assign(globalThis, mainDefs ) ;




