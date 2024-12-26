
// @ts-check


/** @import { MochaOptions, } from "mocha" */



const { extension: exts, } = require("./.mocharc.main.cjs") ;


module.exports = /** @satisfies {MochaOptions } */ ({
  "renderer": true,
  "color": true,
  "window-config": "test/support/window.config.json",
  "script": [
    "test/support/preload.js"
  ],
  "url": "test/support/index.html",
  /* --- one work on `mocha` only,
   * the other work on `electron-mocha` only. ugh */
  extension : exts ,
  extensions: exts ,
  // --show-window --interactive
  showWindow: true ,
  interactive: true ,
})
