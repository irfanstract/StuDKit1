'use strict'

import assert = require('assert')

describe(`can use 'localStorage' in TS`, () => {
  it('can be accessed', () => {
    const [tnm, tval] = ['local-storage-test-ts', 'hello storage in local-storage-test-ts!'] as const
    window.localStorage.setItem(tnm, tval)
    assert.strictEqual(window.localStorage.getItem(tnm), tval)
  })

  // ;
  // it(`can evaluate 'undefined.length' `, () => {
  //   console["log"]((undefined as { length ?: unknown }).length)
  //   assert(3 === 3 ) ;
  // })

})

