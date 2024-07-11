







const isNonNull = (
  /** @type {<const A>(x: A) => x is NonNullable<A>} */
  (x) => (
    (
      /* note -- if it's `undefined` the result 'd become `null` instead */
      x ?? null
    ) !== null
  )
) ;


export {
  isNonNull ,
} ;








