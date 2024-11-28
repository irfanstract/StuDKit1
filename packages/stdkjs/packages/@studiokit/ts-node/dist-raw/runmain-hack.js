
// @ts-check

const {pathToFileURL} = require('url');

const ISIAD = require("../dist-raw/ISynchronousAwaitIawaitIdone") ;

// Hack to avoid Module.runMain on node 18.6.0
// Keeping it simple for now, isolated in this file.
// Could theoretically probe `getFormat` impl to determine if `import()` or `Module._load()` is best
// Note that I attempted a try-catch around `Module._load`, but it poisons some sort of cache such that subsequent `import()` is impossible.
exports.run = function(entryPointPath) {
  try {
    require("" + (entryPointPath)) ;
  } finally {
    console["log"](`[runmain-hack] returning `, { entryPointPath, } ) ;
  }
}

/**
 * experimental
 * 
 */
exports.runThruEsmSync = function(entryPointPath) {
  try {
    ;
    const { iawait, idone, } = (
      ISIAD.create()
    ) ;
    import("" + pathToFileURL(entryPointPath))
      .finally(() => idone() )
    ;
    iawait?.() ;
  } finally {
    ;
    console["log"](`[runmain-hack-sync] returning `, { entryPointPath, } ) ;
  }
}
