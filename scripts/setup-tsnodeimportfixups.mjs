



// @ts-nocheck



/**
 * see https://github.com/TypeStrong/ts-node/issues/2100 
 * 
 */
;



import { pathToFileURL } from "node:url";
import { register } from "node:module";

/* https://github.com/TypeStrong/ts-node/issues/2100#issuecomment-2039564225 */
register(
  "ts-node/esm",
  pathToFileURL("./"),
);






