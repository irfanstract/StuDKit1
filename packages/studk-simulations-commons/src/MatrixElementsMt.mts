




// type AsDeprecatedDirectPropertyAccess<O extends object> = (
//   {
//     /** @deprecated direct property access is deprecated. {@link Pick } */
//     [k in keyof O] : O[k] ;
//   }
// )


// void ((e: AsDeprecatedDirectPropertyAccess<{ x: number, y: number }> ) => (
//   e.x
// ))
// void ((e: AsDeprecatedDirectPropertyAccess<{
//   /** @deprecated direct string property access is deprecated. {@link Pick } */
//   [k: string] : string ,
// }> ) => (
//   e.x
// ))



type Base10Digit = (
  0 | 1 | 2 | 3 | 4
  | 5 | 6 | 7 | 8 | 9
)








export type Mt<I extends number, J extends number> = (
  { readonly [k in `m${I},${J}` ] : number ; }
)


export type SquareMt<I extends number> = Mt<I, I>













