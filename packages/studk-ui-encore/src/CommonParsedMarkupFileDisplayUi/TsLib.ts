



import type { ArgsWithOptions, } from "studk-fwcore-setups/src/util-eawo.mjs";

const NSA = (
  function <IntendedItc extends object>(...[ld] : [() => Promise<IntendedItc> ] )
  : IntendedItc
  {

    const intermItc = new Object ;

    void (async function () {
      const finalItc = await ld() ;
      Object.assign(intermItc, finalItc) ;
    })() ;

    return intermItc as IntendedItc ;
  }
) ;

const neverResolvingPromise = (
  new Promise<never>(R => {})
) ;




// import "studk-ts-codeanalysis/src/BrowserBundledTsLibs/built.ts-import.bundle.js" ;

// if (typeof window !== "undefined") {
//   console["log"](`after importing ${JSON.stringify("studk-ts-codeanalysis/src/BrowserBundledTsLibs/built.ts-import.bundle.js") } we got:` , (
//     //
//     (window as any).BrowserBundledTs
//   ) ) ;
// }

// // import TS from "typescript" ;
// const TsAlt = (
//   // NSA(async function () {
//   //   ;
//   //   const TS = (
//   //     await (async (): Promise<typeof import("typescript") > => {
    
//   //       if (typeof window !== "undefined") {

//   //         return (
//   //           await (async (): Promise<typeof import("typescript") > => {
//   //             const sfReq = await fetch("/BrowserBundledTsLibs/built.ts-import.bundle.js") ;
//   //             const sf = await sfReq.text() ;
//   //             void (Function(sf) )() ;
//   //             const v = (
//   //               (window as any).BrowserBundledTs
//   //             ) ;
//   //             console["log"](`resolving with:`, v ) ;
//   //             return v ;
//   //           })()
//   //         ) ;
//   //       }
    
//   //       // return (await import("typescript") ).default ;
//   //       // if (typeof window !== "undefined") {
//   //       //   return (
//   //       //     await neverResolvingPromise
//   //       //   ) ;
//   //       // }
//   //       return {} ;
//   //     } )()
//   //   ) ;
//   //   return TS ;
//   // })
//   (
//     /* note that we've `import`ed that one from `studk-ts-codeanalysis` */
//     (window as any).BrowserBundledTs as (typeof import("typescript") )
//   )
// ) ;


// export { TsAlt as TS, } ;




import TS from "studk-ts-codeanalysis/src/BrowserBundledTsLibs/built.ts-es-import.bundle.mjs" ;

export { TS, } ;




