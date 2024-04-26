
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
} from "studk-ui/src/meta/react/dbc.tsx" ;
console["log"]({ NativeButton, }) ;

import dynamicComponent from "next/dynamic";

import Link from "next/link";

import Image from "next/image";





import {
  pagesConventions,
  describeHeadlinedWidget ,
} from "@/appInternalScripts/appPagesConvention"; ;

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
          This is the <code>studk-ui</code> demo page
        </p>
        <p>
          This is the page meant to be the test-page for <code>studk-ui</code>.
          the various selection defined there
          are put into usage here.
          This is the page meant to be the test-page for <code>studk-ui</code>.
          the various selection defined there
          are put into usage here.
        </p>
        <studk-card>
          <Image
          alt={`The StuDK UI Components Demo App`}
          src={iStUiDemoAppScreenshot }
          width={250}
          height={250}
          priority={false}
          />
        </studk-card>
        <p>
          This is the page meant to be the test-page for <code>studk-ui</code>.
          the various selection defined there
          are put into usage here.
          This is the page meant to be the test-page for <code>studk-ui</code>.
          the various selection defined there
          are put into usage here.
        </p>
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
            </Span>,
            <Span onClick={"falseprotocol:!" } >
              try directing to False Protocol
            </Span>,
            <Span onClick={false } >
              bring it in into init
            </Span>,
            .
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
          </details>
        </studk-card>
        <studk-card>
          <TbmcDemo />
        </studk-card>
      </div>
      ) ,
    })
  ) ;
} ;





import {
  default as TbmcDemoImpl,
} from "studk-ui/src/tabularUi/reactjs/tbmcdemo.tsx" ;

function TbmcDemo()
{
  return <TbmcDemoImpl /> ;
  return <div /> ;
}

import iStUiDemoAppScreenshot from "@/components/spcl/StUiDemoScreenshot.png" ;








