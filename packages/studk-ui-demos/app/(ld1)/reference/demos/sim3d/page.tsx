









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
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx'; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;






import {
  ThreeReactJsDemoC,
} from "studk-ui-encore/src/ThreeReactJsUi/trdemo.tsx" ;

import {
  ThreeReactJsNavigaDemoC,
} from "studk-ui-encore/src/ThreeReactJsUi/trnavigade" ;

import {
  TArmsDemoC ,
} from "studk-ui-encore/src/ThreeReactJsUi/tarm.tsx" ;





;

export default function App()
{
  ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          Simulation Of 3D
        </span>
      ) ,
      children: (
        <div>
          <p>
            Simulation Of 3D
          </p>
          <nav>
            <Button onClick={() => {}}>
              some things
            </Button>
            <Button onClick={"data:text/javascript,void"}>
              some JS
            </Button>
            <Button onClick={null}>
              no-op
            </Button>
            <Button onClick={false}>
              whoop
            </Button>
          </nav>
          { true && (
            <ThreeReactJsDemoC />
          ) }
          { true && (
            <TArmsDemoC />
          ) }
          { true && (
            <ThreeReactJsNavigaDemoC />
          ) }
          <div>
            <div style={{ blockSize: `50vh`, border: `1px solid blue`, }} >
              &nbsp;
            </div>
            <div style={{ blockSize: `50vh`, border: `1px solid black`, }} >
              &nbsp;
            </div>
          </div>
        </div>
      ) ,
    })
  ) ;
} ;















