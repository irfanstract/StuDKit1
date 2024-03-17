


import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
} from "lodash-es" ;




import {
  IterativeMachineDesc,
} from "./StateMachine.mjs";





;

import {
  LinearMetrostatus ,
  StudKQuarterMetronomicUnit ,
} from "studk-fwcore/src/ixmw.mjs" ;

// TODO
/**
 * 
 * describe
 * some metronome, which starts at `t = 0`, and emits via `destinedEmitter`
 * 
 * @template {{} } S
 * @param {[IterativeMachineDesc<S>, ...[destinedEmitter: destinedEmitterI, expandTickIntoAttacks: NoInfer<(...x: [s: S, t: LinearMetrostatus] ) => DessmEmission<S, destinedEmitterI> >,], ...[{ initiallyStart?: boolean }? ] ] } args
 * 
 * @template {DessmEmitterBaseOps } destinedEmitterI
 * 
 */
export function describeEmissiveStateMachineMetronome(...[seedingSeq, destinedEmitter, expandTickIntoAttack, { initiallyStart = true, } = {} ])
{
  ;

  function usrInstantiate()
  {
    /** @type {[s: S, t: LinearMetrostatus] } */
    let metrState = [seedingSeq.initialState, LinearMetrostatus.byPerBarRate(4) ] ;
  
    function switchToNextTickWithoutEmitting()
    {
      metrState = [seedingSeq.deriveState(metrState[0]) , metrState[1].advancedByTicks(1) ] ;
    }
  
    function emitAgain()
    {
      const es = expandTickIntoAttack(metrState[0], metrState[1]) ;
      for (const e of es ) {
        destinedEmitter.emitAtkEvent(e) ;
      }
    }
  
    function runTickShiftAction()
    {
      // TODO
      {
        switchToNextTickWithoutEmitting() ;
        emitAgain() ;
      }
    }
  
    const tickMachine = (
      // TODO
      newVoidCallbackMetronome(() => {
        runTickShiftAction() ;
      } , {
        initiallyConfiguredRefreshPeriodMillis: 0.5 * 1000
        ,
        initiallyStart: initiallyStart
        ,
      } )
    ) ;
  
    const {
      setToWhetherRunning ,
    } = tickMachine ;
  
    function usrClose() {
      tickMachine.close() ;
    }
  
    return /** @type {const} */ ({
      //
      // 
      emitAgain ,
      setToWhetherRunning ,
      close: usrClose ,
    }) ;
  }

  return /** @type {const} */ ({
    //
    describeEmissiveStateMachineMetronomeBrand: {} ,
    destinedEmitter,
    usrInstantiate ,
  }) ;
}

/**
 * part of definition of {@link describeEmissiveStateMachineMetronome}
 * 
 * @class
 * 
 * @private
 * 
 */
export class DessmEmitterBaseOps {
  constructor() {
    /** @type {{}[] } */
    this.AtkEvent;
    /** @type {(x: this["AtkEvent"][number] ) => void } */
    this.emitAtkEvent;
  }
}

describeEmissiveStateMachineMetronome.describeCallbackEmitter = (
  /**
   * @template {{}} AtkEvent
   * 
   * @param {[(x: AtkEvent) => void ]} args
   */
  function (...[mainCallbck,])
  {
    ;
    return new (class extends DessmEmitterBaseOps {
      //
      constructor()
      {
        super() ;
  
        /** @type {AtkEvent[] } */
        this.AtkEvent;
  
        this.emitAtkEvent ??= (...[e]) => mainCallbck(e) ;
      }
    } ) ;
  }
) ;

describeEmissiveStateMachineMetronome.describeNoOpEmitter = function () {
  class DNPEM {
    constructor() {
      // @ts-ignore
      this.iDnpeEmObjBrand ;
    }
  }
  return (
    describeEmissiveStateMachineMetronome.describeCallbackEmitter(/** @type {(x: DNPEM) => void} */ (e) => {
      ;
      console["log"](`'emitAtkEvent' received by this no-op emitter, at ${Date() } (details: ${JSON.stringify(e) } )`) ;
    })
  ) ;
} ;

/**
 * 
 * part of definition of {@link describeEmissiveStateMachineMetronome}
 * 
 * @typedef {readonly (destinedEmitterI["AtkEvent"][number] )[] }
 * 
 * @template S
 * 
 * @template {DessmEmitterBaseOps } destinedEmitterI
 * 
 */
/** */
export const DessmEmission = {} ;

// TODO
/**
 * 
 * @template {{} } S
 * @param {[ReturnType<typeof describeEmissiveStateMachineMetronome<S, destinedEmitterI>> ] } args
 * 
 * @template {DessmEmitterBaseOps } destinedEmitterI
 * 
 */
export function instantiateEmissiveStateMachineMetronome(...[{ usrInstantiate, }])
{
  return (
    usrInstantiate()
  ) ;
}

import { newVoidCallbackMetronome, } from "./VoidCallbackMetronome.mjs";













