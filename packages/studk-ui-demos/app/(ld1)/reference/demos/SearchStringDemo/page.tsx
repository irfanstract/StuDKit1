









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

import {
  React ,
  StudkReactJs ,
  toComponentMountKey, 
  getSpaceSeparatedClassNameList,
  Button ,
  Span ,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
  useSearchParamState,
  getQueryStringFromProps, 
  ReadonlyURLSearchParams,
} from "@/appInternalScripts/appPagesConvention"; ;








const MAIN_ENTERED_QUERY = "q" ;

import {
  useTextSearch ,
} from "studk-ui-encore/src/QuickSearchUi/QuickItemsListC" ;

import {
  useDeferredAndTransitionalValue,
} from 'studk-ui-fwcore/src/reactjs/helpers/UseUncontrolledInputsAsControlledComponents1.tsx';

export default function App()
{

  const [s, setS] = (

    useSearchParamState()
  ) ;

  const sv = (
    new ReadonlyURLSearchParams(s).get(MAIN_ENTERED_QUERY) ?? ""
  ) ;

  const {
    transitionalValue: transitionalSv ,
    setTransitionalValue: setTransitionalSv ,
  } = (
    useDeferredAndTransitionalValue(sv, {
      fallbackValue: sv ,
    })
  ) ;

  const {
    beingTyped ,
  } = (

    useTextSearch(transitionalSv)
  ) ;

  return (
    <div>
      <p>
        Search:
      </p>
      <p>
        <input
        value={(
          // sv
          transitionalSv
        )}
        onChange={e => {
          const newv = e.target.value ;
          setS.replaceSearchParamsState((
            getQueryStringFromProps({
              [MAIN_ENTERED_QUERY]: newv ,
            })
          )) ;
          setTransitionalSv(newv ) ;
        } }
        />
      </p>
      <p>
        { beingTyped ? (
          <span>Typing</span>
        ) : (
          <span>Idle (<code>{ sv }</code>)</span>
        ) }
      </p>
      <p>
        <code>{ JSON.stringify([{ sv, transitionalSv, }, { s, }], null, 2 ) }</code>
      </p>
    </div>
  )
}
















