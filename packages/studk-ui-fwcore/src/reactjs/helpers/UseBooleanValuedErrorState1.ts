









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
} from 'studk-fwcore/src/util/C1.ts'



;

;







;

import {
  React ,
  StudkReactJs,
  StudkReactJsOvcUtil,
} from '#ReactJsBased.ts'; ;

const useBooleanFalseOrErrorEvtValuedErrorState = (

  function ()
  {

    const [brokenAtThisPt, setAsBeingBroken] = (
      React.useState<false | Error>(false)
    ) ;

    const checkNotBrokenAtThisPt = (
      React.useCallback(() => {

        if (brokenAtThisPt) {
          throw brokenAtThisPt ;
        }

      } , [
        brokenAtThisPt ,
      ] )
    ) ;

    const checkNotBrokenOnRefreshed = (
      StudkReactJsOvcUtil.useRefreshedCallback(checkNotBrokenAtThisPt)
    ) ;

    return (
      React.useMemo(() => {

        return (
          //
          brokenAtThisPt ?
          [
            brokenAtThisPt ,
            {
              brokenAtThisPt ,
              setAsBeingBroken ,
              checkNotBrokenAtThisPt: checkNotBrokenAtThisPt as (() => never ) ,
              checkNotBrokenOnRefreshed ,
            } ,
          ] as const
          :
          [
            brokenAtThisPt ,
            {
              brokenAtThisPt ,
              setAsBeingBroken ,
              checkNotBrokenAtThisPt ,
              checkNotBrokenOnRefreshed ,
            } ,
          ] as const
        ) ;
      } , [
        //
        brokenAtThisPt ,
        setAsBeingBroken ,
        checkNotBrokenAtThisPt ,
        checkNotBrokenOnRefreshed ,
      ] )
    ) ;
  }
) ;

export {
  useBooleanFalseOrErrorEvtValuedErrorState ,
} ;




















