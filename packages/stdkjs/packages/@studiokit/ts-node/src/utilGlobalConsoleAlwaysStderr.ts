





import {
  Console,
} from "console" ;

if (1) {
  console["log"] = console["info"] = console["warn"] ;
} else {
  globalThis.console = (
    new Console({
      stdout: process.stderr,
      stderr: process.stderr,
    })
  ) ;
}





