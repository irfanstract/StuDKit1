







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'; ;

import {
  ReadonlyURLSearchParams,
} from "next/navigation";

export {
  ReadonlyURLSearchParams ,
} ;






import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  ReactSetStateActionHelpers,
} from 'studk-ui-fwcore/src/util/ReactJsBased'; ;

export {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
} ;

// import dynamicComponent from "next/dynamic";
const dynamicComponent: (
  // | (typeof util.L.identity)
  | (typeof import("next/dynamic").default )
  | null
) = (
  null
) ;

export {
  dynamicComponent as dynamicComponent,
} ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

export {
  SingleChildDiv ,
} ;

import { MainAndNavAndFinaleC, } from "studk-ui/src/xst/prefabs/studkdem-semanticlayout-site-mnavf.tsx" ;

export {
  MainAndNavAndFinaleC ,
} ;

import {
  useSearchParams ,
  usePathname,
} from "next/navigation";

import AppLink from "next/link";

const useSearchParamState = (

  function () {

    const pathname = (
      usePathname()
    ) ;
    /**
     * {@link useSearchParams}.
     * 
     * due to the usage of {@link React.useMemo},
     * to avoid rerender-loop
     * we convert them to `String` first
     * 
     */
    const queryString = (
      useSearchParams().toString()
    ) ;

    const router = useRouter() ;

    return (

      React.useMemo(() => {

        const fmatAfterSearchParamReplace = (

          (v1: ReadonlyURLSearchParams | string): string => (
            [pathname, "?", v1.toString() ]
            .join("")
          )
        ) ;

        const pushSearchParamsState = (

          (...a : (
            ArgsWithOptions<[newValue: ReadonlyURLSearchParams | string] , {
              overwrite ?: boolean ,
            }>
          ) ) => {

            const [
              v1,
              optsArg,
            ] = a ;
            const {
              overwrite = false ,
            } = optsArg ?? {} ;

            return (
              router[overwrite ? "replace" : "push"]((
                fmatAfterSearchParamReplace(v1)
              ) )
            ) ;
          }
        ) ;
    
        return (
          [queryString, {
    
            queryString ,
            queryStringStructure: new ReadonlyURLSearchParams(queryString) ,
            pathname ,
    
            underlyingRouter: router ,
            pushSearchParamsState ,
            replaceSearchParamsState: (
              (v1: ReadonlyURLSearchParams | string) => (
                pushSearchParamsState(v1, {
                  overwrite: true ,
                })
              )
            ) ,
    
          } ] as const
        ) ;
      } , [
        pathname ,
        queryString ,
        router ,
      ])
    ) ;
  }
) ;

const useSearchParamDictItemState = (

  function (...[MAIN_ENTERED_QUERY] : [key: string] )
  {

    const [s, setS] = (

      useSearchParamState()
    ) ;

    const sv = (
      new ReadonlyURLSearchParams(s).get(MAIN_ENTERED_QUERY) ?? ""
    ) ;

    const setSValue = (

      React.useCallback((...a : (
        ArgsWithOptions<[newv: React.SetStateAction<string>] , {
          //
          overwrite ?: boolean ,
        }>
      )) => {

        const [newv0, optsARg] = a ;
        const {
          //
          overwrite: ovwArg ,
        } = optsARg ?? {} ;

        const newv = (

          ReactSetStateActionHelpers.asDigestFnc(newv0 )(sv)
        ) ;

        return (

          setS.pushSearchParamsState(
            (
              getQueryStringFromProps({
                [MAIN_ENTERED_QUERY]: newv ,
              })
            ) , {
              overwrite: ovwArg ,
            } )
        ) ;

        ;
      } , [
        // TODO
      ])
    ) ;

    return [sv, setSValue] as const ;
  }
) ;

import {
  useRouter ,
} from "next/navigation";

export {
  usePathname,
  useSearchParams,
  useSearchParamState,
  useSearchParamDictItemState,
  AppLink as AppLink,
  useRouter as useRouter, 
} ;

import {
  NavigateBackButton,
  NavigateForwardButton ,
} from "studk-ui/src/meta/react/uiNavigateBackForth.tsx"; ;

export {
  NavigateBackButton ,
  NavigateForwardButton ,
} ;

const getQueryStringFromProps = (

  function <const actualKeyT extends string> (...[vals] : [Record<actualKeyT, string>] )
  {

    const spC = new URLSearchParams() ;
    for (const [k, v] of Object.entries(((): Record<string, string> => vals )() ) ) {
      spC.set(k, v) ;
    }

    return (
      spC.toString()
    ) ;
  }
) ;

export {
  getQueryStringFromProps ,
  /** @deprecated alias of {@link getQueryStringFromProps}. */
  getQueryStringFromProps as MSP ,
} ;

// export {
//   NextRouter ,
// } from "next/router";

import NxImage from "next/image";

const Image: (
  | React.ElementType<JSX.IntrinsicElements["img"] >
  | (typeof import("next/image") )
) = "img" ;

export {
  Image as Image,
  NxImage ,
} ;





export { pagesConventions , } ;
/* ts(1205) */
namespace pagesConventions { ; }

namespace pagesConventions
{
  /*
   * 
   * TODO update this to
   * reflect the discussions
   * https://css-tricks.com/document-outline-dilemma/ and
   * https://github.com/whatwg/html/issues/83 and https://github.com/whatwg/html/pull/3499 
   * 
   */
  export function describeArticlePage(...[{ heading, children, ...prps }] : [{
    heading: React.ReactElement,
    children: React.ReactElement | React.ReactElement[] ,
  } & Pick<JSX.IntrinsicElements["div"] , "style" > ])
  {
    return (
      <div {...prps}>
        <h1>
          { heading }
        </h1>
        <div>
          { children }
        </div>
      </div>
    ) ;
  }
}

/**
 * {@link describeHeadlinedWidget }
 * 
 * bases on discussions
 * https://css-tricks.com/document-outline-dilemma/ and
 * https://github.com/whatwg/html/issues/83 and https://github.com/whatwg/html/pull/3499 
 * .
 * this forcing us to resort to regular `<p>` (this time with `<strong>`) or `<b>` ;
 * in future
 * we may eventually
 * acquire automatic means for *automatically assigning h-level(s) properly for these "heading"s* .
 * 
 */
export function describeHeadlinedWidget(...[{ heading, children, ...prps }] : [{
  heading: React.ReactElement,
  children: React.ReactElement | React.ReactElement[] ,
} & Pick<JSX.IntrinsicElements["div"] , "style" > ])
{
  return (
    <div {...prps}>
      <p>
        <b>
        { heading }
        </b>
      </p>
      <div>
        { children }
      </div>
    </div>
  ) ;
}





;









