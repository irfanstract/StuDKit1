
// @ts-check


const Path = require( "path");
const { pathToFileURL, } = require("node:url") ;

const provDir = (
  Path.join(__dirname, "..", )
) ;


require('../').register();
require("node:module").register(
  (
    // "@studiokit/ts-node/esm"
    pathToFileURL(Path.join(provDir, "esm.mjs" ) )
  ),
  /**
   * would've otherwise default to `data:`,
   * preventing relative imports from ever working.
   */
  pathToFileURL("./"),
) ;
