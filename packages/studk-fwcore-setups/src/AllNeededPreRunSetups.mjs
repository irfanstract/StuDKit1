








console["info"](`with AllNeededPreRunSetups (from package 'studk-fwcore-setups') `) ;







/* `core-js` */

// import "core-js/stable" ;
import "core-js/stage/4.js" ;
/* */
import "core-js/proposals/change-array-by-copy-stage-4.js" ;
import "core-js/proposals/change-array-by-copy.js" ;
import "core-js/proposals/decorators.js" ;
import "core-js/modules/es.map.group-by.js" ;






/* Implied Necessary Loaders */

/** https://github.com/TypeStrong/ts-node/issues/2100  */
await import("studk-fwcore-setups/src/SrcFileLoaders/nodeesm-tsnode.mjs").catch(e => console.error(e) ) ;











