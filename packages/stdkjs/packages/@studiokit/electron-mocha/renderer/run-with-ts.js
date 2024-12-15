

console["warn"](`[run-with-ts.js]`) ;


const Path = require('node:path')




const runFnm = Path.resolve(__dirname, "./run.js") ;

console["warn"]({ runFnm, }) ;



if (0) {
  ;
  const r = require("./run") ;
  
  module.exports = r ;
  
} else {
  ;

  const StTsNode = require("../lib/stTsNode") ;

  const s = (
    StTsNode.create({
      alwaysPreTranspile: true ,
    })
  ) ;

  console["warn"](`starting`, { runFnm, }) ;

  void (
    ((/** @return {(c: () => any ) => any } */ () => async (c) => (await require("node:timers/promises").setTimeout(2.5 * 1000 ) , c() ) )() )(() => {
      ;

      if ((
        (typeof process !== "undefined")
        &&
        Number(process.env["STUDK_ELECTRONMOCHA_RENDERER_RUNWITHTS_PRERUN_TROUBLESHOOT"])
      )) {
        debugger ;
      }

      return (
        s.dispatchSrcFile(runFnm , {
          alwaysAvoidNativeImport: true ,
          alwaysPreTranspile: true ,
        } )
      ) ;
    })
  ) ;

}

