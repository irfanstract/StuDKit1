


import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
} from "lodash-es" ;



import {
  describeIterativeMachine,
  IterativeMachineDesc ,
  describeIterative ,
} from "./StateMachine.mjs";


import { newVoidCallbackMetronome, } from "./VoidCallbackMetronome.mjs";






import {
  isMainModuleByMeta ,
  sayThisNeedsToBeTheEntryPoint ,
} from 'typexpe-commons/src/isImportMetaObjForMainModule.mjs';




import {
  describeEmissiveStateMachineMetronome,
  instantiateEmissiveStateMachineMetronome ,
  DessmEmitterBaseOps ,
} from "./StateMachineMetronome.mjs";






if (isMainModuleByMeta(import.meta) || (sayThisNeedsToBeTheEntryPoint(import.meta), false ) )
{
  ;
  // TODO
  {
    const emitter = (
      describeEmissiveStateMachineMetronome.describeNoOpEmitter()
    ) ;
    const d = (
      describeEmissiveStateMachineMetronome((
        describeIterativeMachine(/** @type {(x: number) => Number } */ (x) => (x + 1) , 0 )
      ) , emitter , (s, t) => [/** @satisfies {any } */ ({ s, t, })] )
    ) ;
    const rn = instantiateEmissiveStateMachineMetronome(d) ;
    setTimeout(() => rn.close() , 20 * 1000 ) ;
  }
}









