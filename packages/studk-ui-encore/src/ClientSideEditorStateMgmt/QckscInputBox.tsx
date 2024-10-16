













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

// import {
//   QuickSearchTransition ,
//   useKeyTypedownTransitionState ,
// } from "studk-ui-encore/src/QuickSearchUi/QuickItemsListTransition1.tsx" ;







interface QckscInputBoxInputEvent extends Extract<{
  readonly newValue: string,
  readonly asFromHighFrequencyEditSeq: boolean,
}, any >
{}

namespace QckscInputBoxInputEvent { ; }

export {
  QckscInputBoxInputEvent ,
} ;


const useQckscQueryStrRenderedEditorState = (
  //
  
  function (props : (
    {
      //
      q: string ,
      processInputValueChgEvent: (
        (evt: QckscInputBoxInputEvent ) =>
          void
      ) ,
      offeredQs?: (
        | null
        | (readonly string[])
      ),
    }
  ) )
  {

    const {
      q: sv ,
      processInputValueChgEvent: PIVCE ,
      offeredQs = null ,
    } = props ;

    const {
      transitionalValue: transitionalSv ,
      setTransitionalValue: setTransitionalSv ,
      isIntendedTransitionState: beingTyped ,
    } = (
      useDeferredAndTransitionalValue(sv, {
        fallbackValue: sv ,
      })
    ) ;

    const coreInputElem = (
      //
      <input
      value={(
        // sv
        transitionalSv
      )}
      onChange={e => {
        const newv = e.target.value ;
        PIVCE({
          newValue: newv,
          asFromHighFrequencyEditSeq: true ,
        }) ;
        setTransitionalSv(newv ) ;
      } }
      style={{
      }}
      />
    ) ;

    const autocompletionItemListElem = (
      //
      offeredQs && (
        <menu>
          { (
            util.Immutable.Seq(offeredQs)
            .toOrderedMap().mapKeys((_, v) => v )
            .map(newv => (
              <StudkReactJs.ButtonC
              children={(
                <span>
                  💡 {}
                  <q>{ newv }</q>
                </span>
              ) }
              title={(
                // `chg to ${JSON.stringify(newv) }`
                "💡 " + newv
              ) }
              onClick={() => {
                ;
                PIVCE({
                  newValue: newv,
                  asFromHighFrequencyEditSeq: false ,
                }) ;
              }}
              />
            ) )
            .map((v, id) => (
              <li key={id} children={v} />
            ))
            .toIndexedSeq()
          ) }
        </menu>
      )
    ) ;

    const inputSecCont = (
      //
      <div>
      <p>
        <span
        style={{
          display: "flex" ,
          flexDirection: "row",
        }}
        >
        { (
          StudkReactJs.withExtraSemanticProperties({
            //
            style: {
              //
              inlineSize: `75%` ,
            }
          } , (
            coreInputElem
          ))
        ) }
        </span>
      </p>
      { autocompletionItemListElem }
      </div>
    ) ;

    ;

    return {
      sv ,
      PIVCE ,
      offeredQs ,
      transitionalSv,
      beingTyped,
      inputSecCont ,
      unsafe: {
        //
        setTransitionalSv,
      } ,
    } as const ;

  }
) ;

export {
  useQckscQueryStrRenderedEditorState ,
} ;
















