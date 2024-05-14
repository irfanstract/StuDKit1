









/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






;

import * as React from "react" ;

import {
  NativeButton ,
  Button, 
  Span,
} from "studk-ui/src/meta/react/dbc.tsx" ;
console["log"]({ NativeButton, }) ;






import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;

export default function App()
{
  ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          Demos Of `studk-ui`
        </span>
      ) ,
      children: (
        <div>
          <p>
            The packages we're developing here in this monorepo
            are tried out in these demos.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
            The packages we're developing here in this monorepo
            are tried out in these demos.
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
          </studk-card>
        </div>
      ) ,
    })
  ) ;
} ;











