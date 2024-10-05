







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
} from "next/navigation.js";

export {
  ReadonlyURLSearchParams ,
} ;






import {
  usePathname,
  useSearchParams ,
} from "next/navigation.js";

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
} from "next/navigation.js";

export {
  usePathname,
  useSearchParams,
  useSearchParamState,
  useSearchParamDictItemState,
  useRouter as useRouter, 
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




import AppLink from "next/link.js";

export {
  //
  AppLink as AppLink,
} ;

import {
  NavigateBackButton,
  NavigateForwardButton ,
} from "studk-ui/src/meta/react/uiNavigateBackForth.tsx"; ;

export {
  NavigateBackButton ,
  NavigateForwardButton ,
} ;




import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  ReactSetStateActionHelpers,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

export {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  ReactSetStateActionHelpers,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

// import dynamicComponent from "next/dynamic";
const dynamicComponent: (
  // | (typeof util.L.identity)
  | (typeof import("next/dynamic.js").default )
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




import NxImage from "next/image.js";

// const Image: (
//   | React.ElementType<JSX.IntrinsicElements["img"] >
//   | (typeof import("next/image.js") )
// ) = "img" ;

export {
  NxImage ,
} ;



















