









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
  useSearchParamState,
  getQueryStringFromProps, 
  ReadonlyURLSearchParams,
  useSearchParamDictItemState,
  StudkReactJs,
} from "@/appInternalScripts/appPagesConvention"; ;

const useXData = (
  function () {
    const [sv, setSV] = (

      useSearchParamDictItemState("q")
    ) ;

    const toggleBtn = (
      (() => {
        const newv = ("" + !(String(sv || false) !== "false" ) ) ;
        return (
          <StudkReactJs.ButtonC
          title={`toggle`}
          children={`toggle (-> '${newv }' )`}
          onClick={() => setSV(e => newv , { overwrite: true , } ) }
          />
        ) ;
      })()
    ) ;

    const clearoutBtn = (
      <StudkReactJs.ButtonC
      children="clear"
      onClick={() => setSV(e => ("" ) , { overwrite: true , } ) }
      />
    ) ;

    const smoBtn = (
      <StudkReactJs.ButtonC
      children="submit order"
      onClick={() => setSV(e => ("started" ) , { overwrite: false , } ) }
      />
    ) ;

    return {
      sv ,
      toggleBtn ,
      clearoutBtn ,
      smoBtn,
    } ;
  }
) ;


export default function App()
{
  ;

  const {
    sv ,
    toggleBtn ,
    clearoutBtn,
    smoBtn,
  } = (

    useXData()
  ) ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          The Workbook
        </span>
      ) ,
      children: (
        <div>
          {/* { (
            <EvrC />
            // (0 && <EvrC /> )
            // null
          ) } */}
          {/* <EvTceC /> */}
          { (
            <div>
            <p>
              Studio Kit {}
              <span>
              <code>{ sv || "(empty)" }</code>
              { smoBtn } {}
              { toggleBtn   } {}
              { clearoutBtn } {}
              </span>
            </p>
            <p>
              Studio Kit
            </p>
            </div>
          ) }
        </div>
      ) ,
    })
  ) ;
} ;

// import {
//   EvrC ,
// } from "@/components/EVR"; ;
/* https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading */
const EvrC = dynamicComponent(async () => {
  const { EvrC: C , } = await import("@/components/EVR") ;
  return C ;
} , { ssr: false, loading: function EvrCStillLoadingFallbackCompImpl() {
  return (
    <div>
      <p>
      <strong><code>EvrC</code> (<code>@/components/EVR</code>) is still loading...</strong>
      </p>
    </div>
  ) ;
} , } ) ;

import {
  EvTceC ,
} from "@/components/TCED" ;











