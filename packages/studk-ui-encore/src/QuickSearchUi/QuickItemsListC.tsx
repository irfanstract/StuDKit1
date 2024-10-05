




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
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'






;

import {
  React ,
  StudkReactJs,
  getSpaceSeparatedClassNameList,
  Button ,
  Span ,
  describeCallbackAssignedStyleProps, 
} from '#UiFwCore/util/ReactJsBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;







import {
  useDeferredAndTransitionalValue,
} from 'studk-ui-fwcore/src/reactjs/helpers/UseUncontrolledInputsAsControlledComponents1.tsx';

import {
  QuickSearchTransition ,
  useKeyTypedownTransitionState ,
} from "studk-ui-encore/src/QuickSearchUi/QuickItemsListTransition1.tsx" ;

const useTextSearch = (

  function (...[queryString] : (
    ArgsWithOptions< [query: string] , {} >
  ))
  {
    
    const [beingTyped, , ] = (

      StudkReactJs.useTimeBoundedDependencyChangeTransition({

        timeoutMillis: 750 ,
        dependencies: [
          queryString ,
        ] ,
      })
    ) ;

    return {
      queryString ,
      beingTyped ,
    } as const ;
  }
) ;

/**
 * 
 * @deprecated
 */
const QckC = (
  StudkReactJs.describeHtmlComponent((
    function QckCImpl({
      xRef,
    } : (
      & { xRef: React.Ref<{ pretendAnotherClickHappens: () => void ; } > }
    ) )
    {

      const [isTyping, cbt] = (
        useKeyTypedownTransitionState()
      ) ;

      React.useImperativeHandle(xRef , () => (
        { pretendAnotherClickHappens: () => cbt() }
      ) , [
        cbt ,
      ] ) ;

      return (
        <p>
          { isTyping ? `typing` : `at rest` }
        </p>
      )
    }
  ))
) ;

const QckSearchC = (

  // true
  StudkReactJs.describeHtmlComponent((
    function QckSearchCImpl(props : (
      {
        //
        q: string ,
        processInputValueChgEvent: (
          (evt: { newValue: string, }) =>
            void
        ) ,
      }
    ) )
    {

      const {
        q: sv ,
        processInputValueChgEvent: PIVCE ,
      } = props ;

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
    
      // TODO
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
              PIVCE({
                newValue: newv,
              }) ;
              setTransitionalSv(newv ) ;
            } }
            style={{
              inlineSize: `75%` ,
            }}
            />
          </p>
          <p>
            { beingTyped ? (
              <span>Typing</span>
            ) : (
              <span>Idle (<code>{ sv }</code>)</span>
            ) }
          </p>
        </div>
      )
    }
  ))
) ;

export {
  useTextSearch,
  QuickSearchTransition ,
  /** @deprecated WIP */
  useKeyTypedownTransitionState ,
  QckSearchC,
  /** @deprecated WIP */
  QckC ,
} ;
























