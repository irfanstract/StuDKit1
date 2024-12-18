









let tsc: typeof import("typescript") | null = (
  (() => {
    try {
      const tscImpl = ((require) )("typescript") ;
      console["log"](`[eb.js] good, we have TSC in hand`) ;
      return tscImpl ;
    } catch (z) {
      console["info"](String(z) ) ;
      console["debug"](z ) ;
      return null ;
    }
  })()
) ;





export = tsc ;







