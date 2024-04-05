


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






export default (
  /**
   * 
   * @param {[{ mtCtx: BaseAudioContext, initiallyStart: boolean, }, ...[dispatchMainVoice: () => void ] ]} args
   */
  function (...[{ mtCtx, initiallyStart, }, cc])
  {
    ;
    // TODO
    {
      const emitter = (
        describeEmissiveStateMachineMetronome.describeCallbackEmitter(/** @type {(x: { kind: 1 } ) => void} */ (e) => {
          ;
          // TODO
          cc() ;
        } )
      ) ;
      const d = (
        describeEmissiveStateMachineMetronome((
          describeIterativeMachine(/** @type {(x: number) => Number } */ (x) => (x + 1) , 0 )
        ) , emitter , (s, t) => [{ kind: 1 , }] , { initiallyStart, } )
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









