


import { util, } from "typexpe-commons/src/common_sv.mjs" ;

import {
  range ,
} from "lodash-es" ;










/**
 * 
 * @template {null | {}} S
 * @param {[deriveState: (x: S) => S ] } args
 */
export function describeIterative(...[deriveState,])
{
  return {
    deriveState ,
  } ;
}

/**
 * 
 * @template {null | {}} S
 * @param {[deriveState: (x: S) => S, initialState: NoInfer<S> ] } args
 */
export function describeIterativeMachine(...[deriveState, initialState])
{
  return {
    deriveState ,
    initialState ,
  } ;
}






// TODO
/**
 * 
 * @typedef {ReturnType<typeof describeIterativeMachine<S>> }
 * @template {{} | null} S
 */
/** State Machine */
export const IterativeMachineDesc = {} ;













