









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
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  WithOvcLevelleRefGoodiesC,
  WithOverlaySupportC,
} from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;

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
          <p>
            The packages we're developing here in this monorepo
            are tried out in these demos.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
            The packages we're developing here in this monorepo
            are tried out in these demos.
          </p>
          <WithOvcLevelleRefGoodiesC
          children={({ ref, }) => (
            <button ref={ref}>
              paragraph
            </button>
          )}
          />
          <p>
            The packages we're developing here in this monorepo
            are tried out in these demos.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
            The packages we're developing here in this monorepo
            are tried out in these demos.
          </p>
          <p>
            The packages we're developing here in this monorepo
            are tried out in these demos.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
            The packages we're developing here in this monorepo
            are tried out in these demos.
          </p>
          <WithOvcLevelleRefGoodiesC
          children={({ ref, }) => (
            <button ref={ref}>
              paragraph
            </button>
          )}
          />
          <p>
            The packages we're developing here in this monorepo
            are tried out in these demos.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
            The packages we're developing here in this monorepo
            are tried out in these demos.
          </p>
          <iframe
          style={{
            blockSize: `75vh`,
          }}
          />
          <details>
            <p>
              The packages we're developing here in this monorepo
              are tried out in these demos.
              The packages we're developing here in this monorepo
              are brought into usage in these demos.
              The packages we're developing here in this monorepo
              are tried out in these demos.
            </p>
            <WithOvcLevelleRefGoodiesC
            children={({ ref, }) => (
              <button ref={ref}>
                paragraph
              </button>
            )}
            />
            <iframe
            style={{
              blockSize: `75vh`,
            }}
            />
          </details>
          <details>
            <p>
              The packages we're developing here in this monorepo
              are tried out in these demos.
              The packages we're developing here in this monorepo
              are brought into usage in these demos.
              The packages we're developing here in this monorepo
              are tried out in these demos.
            </p>
            <WithOvcLevelleRefGoodiesC
            children={({ ref, }) => (
              <button ref={ref}>
                paragraph
              </button>
            )}
            />
            <iframe
            style={{
              blockSize: `75vh`,
            }}
            />
          </details>
          <TbmcDemo
          />
          <iframe
          style={{
            blockSize: `75vh`,
          }}
          />
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
  // return (
  //   <WithOvcLevelleRefGoodiesC
  //   children={({ ref, }) => (
  //     <TbmcDemoImpl />
  //   )}
  //   />
  // ) ;
  return <div /> ;
}











