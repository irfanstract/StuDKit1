



import {
  memoize,
  once,
} from "lodash";


import {
  Console,
} from "console" ;



const setupGlobalConsoleAlwaysStderr = (

  once(function setupGlobalConsoleAlwaysStderrImpl() {
    ;

    MAIN: {
      ;
      if (1) {
        console["log"] = console["info"] = console["warn"] ;
        break MAIN ;;
      }
  
      {
        globalThis.console = (
          new Console({
            stdout: process.stderr,
            stderr: process.stderr,
          })
        ) ;
        break MAIN ;;
      }
    }

    console["info"](`done 'setupGlobalConsoleAlwaysStderr()'`) ;

  })
) ;

export {
  setupGlobalConsoleAlwaysStderr ,
} ;



if ((
  ((typeof require !== "undefined") && (require.main?.filename?.match(/\bts-node\b/) ) )
  ||
  ((typeof process !== "undefined") && Number(process.env["STUDKTSNODE_GENERAL_SETUP_CONSOLEALWAYSSTDERR"] ) )
)) {
  console["warn"](`automatically running 'setupGlobalConsoleAlwaysStderr()'`) ;
  setupGlobalConsoleAlwaysStderr() ;
}





