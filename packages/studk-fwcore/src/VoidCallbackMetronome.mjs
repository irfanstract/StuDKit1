


import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
} from "lodash-es" ;








/**
 * immediately start a void-callback metronome.
 * 
 * @param {[...[baseCallback?: () => void,], ...[{ initiallyConfiguredRefreshPeriodMillis: number ; initiallyStart: boolean ; }] ]} args
 */
export function newVoidCallbackMetronome(...[baseCallback = Object, { initiallyConfiguredRefreshPeriodMillis, initiallyStart: shallInitialState, } ])
{
  /** @type {() => Promise<void> } */ let startNextAwaitIfExpected ;
  /** @type {() => void} */ let resumeImpl;
  setToWhetherRunning(shallInitialState) ;
  /** @type {(x: boolean ) => void } */
  function setToWhetherRunning(x) {
    ;
    ({ startNextAwaitIfExpected, resumeImpl, } = (
      x ? (resumeImpl?.(), {
        startNextAwaitIfExpected: () => new Promise(reslv => setTimeout(reslv, initiallyConfiguredRefreshPeriodMillis, ) )
        ,
        resumeImpl: () => {}
        ,
      }) : (() => {
        const c = new util.Deferred() ;
        return {
          startNextAwaitIfExpected: () => c.out.then(_ => {}) ,
          resumeImpl: () => void c.resolve({}) ,
        } ;
      })()
    ) ) ;
  }

  const referenceEvtObj = new TypeError(`externaly-requested termination`) ;

  (async () => {
    return await util.SINGLETNLR_ASYNC({ referenceEvtObj, }, async () => {
      ;
      LOOP:
      for (;;)
      {
        await (
          // @ts-ignore
          startNextAwaitIfExpected
        )() ;
  
        baseCallback() ;
      }
    } ) ;
  })() ;

  function resume() { resumeImpl() ; }

  function terminate()
  {
    startNextAwaitIfExpected = () => { throw referenceEvtObj ; } ;
  }

  return /** @type {const} */ ({
    resume ,
    setToWhetherRunning ,
    terminate ,
    close: terminate ,
  }) ;
}
















