
// @ts-check

/** @import { MochaOptions, } from "mocha" */

const Immutable = require("immutable") ;


const exts = (
  Immutable.OrderedSet([
    "mjs", "mjsx", "js", "jsx", "cjs", "cjsx",
    "mts", "mtsx", "ts", "tsx", "cts", "ctsx",
  ])
  .remove("mts")
  .toArray()
);





module.exports = /** @satisfies {MochaOptions } */ ({
  "color": true,
  "require": [
    "test/support/requireES.mjs"
  ],
  /* --- one work on `mocha` only,
   * the other work on `electron-mocha` only. ugh */
  extension : exts ,
  extensions: exts ,
})

