
"use client" ;



import {
  util,
} from "typexpe-commons/src/common_sv.mjs";





import * as React from "react" ;

import {
  useResource,
} from "@/components/useEffectAlt";

import {
  NativeButton ,
  Button, 
  Span,
} from "studk-ui/src/xst/dbc.tsx" ;
console["log"]({ NativeButton, }) ;





import {
  pagesConventions,
  describeHeadlinedWidget ,
  dynamicComponent ,
  Link ,
  Image ,
} from "@/appInternalScripts/appPagesConvention"; ;

function SCDI() {
  return (
    <Image
    alt={`The StuDK UI Components Demo App`}
    src={iStUiDemoAppScreenshot }
    width={250}
    height={250}
    priority={false}
    />
  ) ;
}

export default function App() {
  ;
  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          The <code>studk-ui</code> Demo Page
        </span>
      ) ,
      children: (
        <div>
        <p>
          This is the <i>studk-ui</i> demo page.
          This is the demo-page for <i>studk-ui</i>.
        </p>
        <p>
          This is a test-page for <i>studk-ui</i>.
          the various elements defined there
          are put into exhibition here.
          This is the page meant to be the test-page for <i>studk-ui</i>.
          a wide range of elements defined in the package
          are put into usage here.
        </p>
        <studk-card>
          <SCDI />
        </studk-card>
        <p>
          This is the page meant to be the test-page for <code>studk-ui</code>.
          the various selection defined there
          are put into usage here.
          This is the page meant to be the test-page for <code>studk-ui</code>.
          the various selection defined there
          are put into usage here.
        </p>
        <div>
        <p>
          Some reasons to stick to <i>studk-ui</i>:
        </p>
        <ul>
          <li
          children={(
            <p>
              it
              is designed to
              allow
              content authors
              to put hands up away from directly dealing with CSS-styling-related complexities
              .
            </p>
          )}
          />
          <li
          children={(
            <p>
              it
              features elements like <code>Span</code> and <code>Button</code>
              to enable authors to write contents without worrying about presentation
              .
            </p>
          )}
          />
        </ul>
        <p>
          We'd do this sequence of things to implement it:
        </p>
        <ol>
          <li
          children={(
            <p>
              it
              features elements like <code>Span</code> and <code>Button</code>
              to enable authors to write contents without worrying about presentation
              .
            </p>
          )}
          />
          <li
          children={(
            <p>
              it
              features elements like <code>Span</code> and <code>Button</code>
              to enable authors to write contents without worrying about presentation
              .
            </p>
          )}
          />
          { (
            util.range(0, 10 )
            .map((i) => (
              <li
              key={`joe-${i}`}
              children={(
                <p>
                  Joe
                </p>
              )}
              />
            ) )
          ) }
        </ol>
        </div>
        <studk-card>
          <p>
            <Button onClick={e => alert(`hello!`) } >
              Hello
            </Button>
            <Button onClick={"falseprotocol:!" } >
              False Protocol
            </Button>
            <Button onClick={false } >
              Initialise
            </Button>
          </p>
          <p>
            you can {}
            <Span onClick={e => alert(`hello!`) } >
              send a hello
            </Span>, {}
            <Span onClick={"falseprotocol:!" } >
              try directing to False Protocol
            </Span>, {}
            <Span onClick={false } >
              bring it in into init
            </Span>, {}
            as you desire. {}
            you can {}
            <Span onClick={e => alert(`hello!`) } >
              send a hello
            </Span>, {}
            <Span onClick={"falseprotocol:!" } >
              try directing to False Protocol
            </Span>, {}
            <Span onClick={false } >
              bring it in into init
            </Span>, {}
            as you desire. {}
          </p>
          <p>
            This is a test-page for <i>studk-ui</i>.
            the various elements defined there
            are put into exhibition here.
            This is the page meant to be the test-page for <i>studk-ui</i>.
            a wide range of elements defined in the package
            are put into usage here.
          </p>
          <details>
            <p>
              <em>
                regarding why we need the "init" button:
              </em>
              according to the platform spec
              AudioContext(s) will be paused unless at-least a user gesture has taken place ;
              this means that
              we need an explicit user-done pointer-click to get the engine started.
              yeah
            </p>
            <p>
              <del>
                wrong
              </del>
            </p>
          </details>
        </studk-card>
        <studk-card>
          <TbmcDemo />
        </studk-card>
        <ul>
        <li
        children={(
          <studk-card>
          <SCDI />
          </studk-card>
        )}
        />
        <li
        children={(
          <studk-card>
          <SCDI />
          </studk-card>
        )}
        />
        </ul>
        <studk-card>
          <p>
            difference between {}
            managed button components and native/raw ones
            .
          </p>
          <p>
            you can {}
            <Span onClick={e => alert(`hello!`) } >
              send a hello
            </Span>, {}
            <Span onClick={"falseprotocol:!" } >
              try directing to False Protocol
            </Span>, {}
            <Span onClick={false } >
              bring it in into init
            </Span>, {}
            as you desire. {}
            you can {}
            <button onClick={e => alert(`hello!`) } >
              send a hello
            </button>, {}
            <a href={"falseprotocol:!" } >
              try directing to False Protocol
            </a>, {}
            <Span onClick={false } >
              bring it in into init
            </Span>, {}
            as you desire. {}
            <button disabled >
              Perform Action
            </button>
            <button disabled >
              Send Feedback
            </button>
            . {}
          </p>
          <p>
            This is a test-page for <i>studk-ui</i>.
            the various elements defined there
            are put into exhibition here.
            This is the page meant to be the test-page for <i>studk-ui</i>.
            a wide range of elements defined in the package
            are put into usage here.
          </p>
        </studk-card>
        <studk-card>
          <p>
            copy and paste text here
          </p>
          { (
            withState({ initialVal: `plain text here` , } , (e: string, ctx) => (
              <StudkPlainTextComp
              value={e}
              onChange={e => { ctx.setState(e.newValue ) ; } }
              />
            ))
          ) }
          <p>
            to test whether <code>user-select</code> works or not.
          </p>
        </studk-card>
      </div>
      ) ,
    })
  ) ;
} ;





import {
  withState ,
  WithStateC ,
} from "@/components/WithStateC.tsx" ;





;

import {
  StudkRichTextComp,
  StudkPlainTextComp ,
} from "studk-ui/src/xst/prefabs/studkdem-x-richtext-all.tsx"; ;




import {
  default as TbmcDemoImpl,
} from "studk-ui/src/tabularUi/reactjs/tbmcdemo.tsx" ;

function TbmcDemo()
{
  return <TbmcDemoImpl /> ;
  return <div /> ;
}

import iStUiDemoAppScreenshot from "@/components/spcl/StUiDemoScreenshot.png" ;








