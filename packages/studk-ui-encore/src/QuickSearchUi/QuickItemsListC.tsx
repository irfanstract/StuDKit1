




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
            <span
            style={{
              display: "flex" ,
              flexDirection: "row",
            }}
            >
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
            </span>
          </p>
          <p>
            { beingTyped ? (
              <span>Typing</span>
            ) : (
              <span>Idle (<code>{ sv }</code>)</span>
            ) }
          </p>
          <div>
            { beingTyped ? (
              <p>Being Typed</p>
            ) : (
              KSR(transitionalSv).renderFullResultListSec()
            ) }
          </div>
        </div>
      )
    }
  ))
) ;

function KSR(...[qw] : [q: string] )
{

  const searchResults = (

    //
    (
      (
        util.Immutable.Seq(util.range(2033, 2111) )
        .sortBy(v => (3 / Math.max(1 , (v ** 1.25 ) << (v * 5) ) ) )
      )
      .slice(0, 30 )
      .toOrderedMap()
      .mapKeys((_, id) => id )
    )
    .map((id, ) => {

      const o = id + 8 ;

      const fw = (
        <span>
          { `${o}th time, ${qw}` }
        </span>
      ) ;

      const searchq = fw ;

      const sp = (
        <div>
        <p>
          <b>{ fw }</b>
        </p>
        <p>
          { fw }.
          { fw }.
          { fw }.
        </p>
        </div>
      ) ;

      return { id, fw, searchq, sp, } as const ;
    } )
  ) ;

  return {

    renderFullResultListSec: () => {
      return (
        <div>
          <p>Results for <q>{ qw }</q>:</p>
          <ol>
            { (
              searchResults
              .map(({ id, fw, searchq, sp, }) => {

                return (
                  <div>
                  <p>
                    <q>{ searchq }</q>
                  </p>
                  <blockquote>
                    { sp }
                  </blockquote>
                  <p>
                    Src ID: <code>{ id }</code>
                  </p>
                  </div>
                ) ;
              } )
              .map((v, id) => (
                <li key={id}>
                  { v }
                </li>
              ))
              .toIndexedSeq()
            ) }
          </ol>
        </div>
      ) ;
    } ,
  } as const ;
}

export {
  useTextSearch,
  QuickSearchTransition ,
  /** @deprecated WIP */
  useKeyTypedownTransitionState ,
  QckSearchC,
  /** @deprecated WIP */
  QckC ,
} ;
























