
// @ts-check

const assert = require('node:assert')

const fs = require('node:fs')

void (async () => {
  ;
  // Wait some amount of time to try to ensure Electron has fully quit.
  await require("node:timers/promises").setTimeout(1000)
  if (0) {
    removeTmpdir()
  }
})()

/**
 * {@link removeTmpdir}
 * 
 * @deprecated
 */
function removeTmpdir () {
  const tmpdir = process.argv[2] || assert.fail(new Error(`fatal error`) )
  fs.rm(tmpdir, { recursive: true, maxRetries: 3 })
  // Electron builds with disabled ELECTRON_RUN_AS_NODE needs to explicitly exit.
  process.exit(0)
}
