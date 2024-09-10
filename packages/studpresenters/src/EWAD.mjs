


import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
  memoize,
  once,
} from "lodash-es" ;



import {
  describeIterativeMachine,
  IterativeMachineDesc ,
  describeIterative ,
} from "studk-fwcore/src/StateMachine.mjs";








import {
  describeEmissiveStateMachineMetronome,
  instantiateEmissiveStateMachineMetronome ,
  DessmEmitterBaseOps ,
} from "studk-fwcore/src/StateMachineMetronome.mjs";

import { LinearMetrostatus, } from "studk-fwcore/src/ixmw.mjs";






export default (
  /**
   * 
   * @param {[{ mtCtx: BaseAudioContext, initiallyStart: boolean, }, ...[dispatchMainVoice: (ctx: { metronStat: LinearMetrostatus ; }) => void ] ]} args
   */
  function (...[{ mtCtx, initiallyStart, }, cc])
  {
    ;
    // TODO
    {
      /** @typedef {number & { iStatObjBrand ?: any, } } St */
      ;
      const emitter = (
        describeEmissiveStateMachineMetronome.describeCallbackEmitter(/** @type {(x: { kind: 1, m: LinearMetrostatus, } ) => void} */ (e) => {
          ;
          // TODO
          cc({ metronStat: e.m, }) ;
        } )
      ) ;
      const d = (
        describeEmissiveStateMachineMetronome((
          describeIterativeMachine(/** @type {(x: St) => St } */ (x) => (x + 1) , 0 )
        ) , emitter , (s, t) => [{ kind: 1 , m: t, }] , { initiallyStart, } )
      ) ;
      const instantiated1 = once(() => instantiateEmissiveStateMachineMetronome(d) ) ;

      function highLevelClosedown() {
        instantiated1().close() ;
      }

      /** @type {(x: boolean) => void } */
      function setRunning(v) {
        instantiated1().setToWhetherRunning(v) ;
      }

      return {
        emitter ,
        setRunning ,
        close: highLevelClosedown ,
      } ;
    }
  }
) ;









