
import {
  util,
} from "typexpe-commons/src/common_sv.mjs" ;



import {
  normaliseAngDeg, 
} from "./Trigonometric1.mjs";










/**
 * *a key-indexable (ie items each referencible by key/tag) list of instruments*
 * 
 */
export class KeyedInstrumentList extends Object
{}

/**
 * {@link KeyedInstrumentList} impl - each instance carry an instrument dict.
 * 
 * @template {string  } [K=string]
 * @template {{}      } [Value=any]
 */
export class DictionalInstrumentListImpl extends KeyedInstrumentList
{
  /** @param {[{ [k in K]: Value } ]} args */
  constructor(...[dict])
  { super() ; this.items = dict ; }
}




// TODO

// /**
//  * {@link describeInstruFingeringSheetByDrawingCb}
//  * 
//  * @typedef {[util.EntryOfPlain<instrumentTable["items"]>[0] , { t: number, pow: number, } , ]}
//  * 
//  * @template {DictionalInstrumentListImpl} instrumentTable
//  */
// const KeyedInstruFingeringSchdEntry1 = {} ;

// /**
//  * {@link describeInstruFingeringSheetByDrawingCb}
//  * 
//  * @template {DictionalInstrumentListImpl} instrumentTable
//  * @param {[instrumentTable, (ctx: { instruTable: instrumentTable, play: (...args: [...KeyedInstruFingeringSchdEntry1<instrumentTable> ] ) => void } ) => void ]} args
//  */
// export function describeInstruFingeringSheetByDrawingCb(...[instumentTable, plotAll])
// {
//   ;
//   return (/** @return {DFSBC<instrumentTable> } */ () => (
//     {
//       instumentTable ,
//       plotAll: plotAll ,
//     }
//   ) )() ;
// }

// /**
//  * {@link describeInstruFingeringSheetByDrawingCb}
//  * 
//  * @template {DictionalInstrumentListImpl} instrumentTable
//  * @param {[instrumentTable, (ctx: { instruTable: instrumentTable, } ) => Iterable<KeyedInstruFingeringSchdEntry1<instrumentTable> > ]} args
//  */
// export function describeInstruFingeringSheetByGeneratorFnc(...[instumentTable, listAll])
// {
//   return (
//     describeInstruFingeringSheetByDrawingCb(instumentTable, (ctx) => {
//       for (const e of listAll({ instruTable: ctx.instruTable }) )
//       {
//         ctx.play(...e) ;
//       }
//     } )
//   ) ;
// }

// /**
//  * {@link describeInstruFingeringSheetByDrawingCb}
//  * 
//  * @template {DictionalInstrumentListImpl} instrumentTableImpl
//  * 
//  * @internal
//  * 
//  */
// class DFSBC extends Object {
//   constructor()
//   {
//     super() ;

//     /** @type {instrumentTableImpl } */
//     this.instrumentTable ;
    
//     /** @type {(ctx: { instruTable: instrumentTable, play: (...args: [...KeyedInstruFingeringSchdEntry1<instrumentTable> ] ) => void } ) => void } */
//     this.plotAll ;
//   }
// }










