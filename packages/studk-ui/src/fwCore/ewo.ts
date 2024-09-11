







export * from "studk-ui-fwcore/src/util/EWithOpt" ;




// import {
//   util,
// } from 'typexpe-commons/src/common_sv.mjs';







// ;

// export type * from "studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs" ;





// // TODO move into new file
// export function MNI_CTXTUALONLY<E0, E2>(src: readonly E0[], mp: (item: NoInfer<E0>, i: number ) => NoInfer<E2> )
// : readonly E2[]
// {
//   return src.map(mp) ;
// }

// // TODO move into new file
// export function mkArray<E>(s: () => (Iterable<E> ) )
// {
//   return [...s() ] ;
// }

// // TODO move into new file
// export { XJson } ;
// namespace XJson { ; }
// namespace XJson
// {
//   export type IAny = null | boolean | IDecimal | string | IArray | IDict ;

//   export type IArray = readonly IAny[] ;
//   export interface IDict { readonly [key: string]: IAny ; }

//   export function isArray(x: IAny ): x is IArray {
//     return Array.isArray(x) ;
//   }
//   export function isDictOrArray(x: IAny ): x is (IDict | IArray) {
//     // TODO if had been standardised ES Records And Tuples would need alternative check
//     return (x !== null) && (Object(x) === x ) ;
//   }

//   export type IDecimal = (number | bigint) & { isXJsonIDecimal ?: true } ;

//   type KVLE<in k extends string, out vle> = { readonly [key in k]: vle ; }
  
//   export type IDictFor<k extends string, v extends IAny = IAny> = IDict & KVLE<k, v>

// }








