



/* https://mochajs.org/#configuring-mocha-nodejs */

/* see the top-level `CONTRIBUTING.md` page. */




const c1 = require("../../scripts/commonMochaConfig.cjs") ;

module.exports = {
  //

  ...c1 ,

  // /* https://typestrong.org/ts-node/docs/recipes/mocha */
  // // Specify "loader" for native ESM
  // "loader": "ts-node/esm",
  // "extensions": ["ts", "tsx"],
} ;







