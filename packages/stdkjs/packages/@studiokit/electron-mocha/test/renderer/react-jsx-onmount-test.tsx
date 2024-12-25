
// /* @jsxRuntime classic */

'use strict'

import assert = require('node:assert')

import React = require('react')

import ReactDOMClient = require('react-dom/client')



const OnmtC = (

  function ({ onMount: runOnMtCb = Object, children, } : React.PropsWithChildren<{ onMount?: React.DispatchWithoutAction }>) {

    React.useEffect(() => {
      runOnMtCb()
    }, [
      //
    ])

    return (
      <>{ children }</>
    )
  }
)

describe(`React JSX OnMount Test`, () => {

  it(`React JSX OnMount Test`, async () => {
    const targetDiv = document.createElement("div")
    const root = ReactDOMClient.createRoot(targetDiv )
    const { resolve, promise, } = Promise.withResolvers<void>()
    root.render(
      <React.StrictMode
      children={(
        <React.Suspense
        children={(
          <OnmtC
          onMount={() => resolve() }
          />
        )}
        />
      )}
      />
    )
    await promise
    console["log"](`done`)
  })

  it(`React JSX OnMount Test With Content`, async () => {
    const targetDiv = document.createElement("div")
    const root = ReactDOMClient.createRoot(targetDiv )
    const { resolve, promise, } = Promise.withResolvers<void>()
    root.render(
      <React.StrictMode
      children={(
        <React.Suspense
        children={(
          <OnmtC
          onMount={() => resolve() }
          children={(
            <div>
              hello, {}
              <q>React JSX OnMount Test With Content</q>
            </div>
          )}
          />
        )}
        />
      )}
      />
    )
    await promise
    assert(targetDiv.innerHTML.includes("JSX OnMount") )
    assert(targetDiv.innerHTML.includes("With Content") )
    console["log"](`done`)
  })

})


