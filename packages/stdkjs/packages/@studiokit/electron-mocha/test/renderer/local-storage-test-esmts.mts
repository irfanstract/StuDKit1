'use strict'

import assert = require('node:assert')

describe(`can run ESM-TS test-file which uses 'localStorage' `, () => {
  it('can be accessed', () => {
    const [tnm, tval] = ['local-storage-test-esmts', 'hello storage in local-storage-test-esmts!'] as const
    window.localStorage.setItem(tnm, tval)
    assert.strictEqual(window.localStorage.getItem(tnm), tval)
  })
})

