



/* https://mochajs.org/#configuring-mocha-nodejs */

/* see the top-level `CONTRIBUTING.md` page. */




;

/**
 * @import { MochaOptions, } from "mocha"
 * 
 */

const c1 = require("../../scripts/commonMochaConfig.cjs") ;

/**
 * 
 * @type {MochaOptions }
 */
module.exports = {
  //

  ...c1 ,

  // /* https://typestrong.org/ts-node/docs/recipes/mocha */
  // // Specify "loader" for native ESM
  // "loader": "ts-node/esm",
  // "extensions": ["ts", "tsx"],
} ;







