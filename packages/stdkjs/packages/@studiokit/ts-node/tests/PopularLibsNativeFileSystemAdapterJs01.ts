



import { inspect, } from "util";

import { stdoutConsole, } from "../dist-raw/StdOutConsole" ;












import * as NativeFileSystemAdapterLib from "native-file-system-adapter" ;

// import "native-file-system-adapter/src/adapters/indexeddb" ;

stdoutConsole["info"](inspect(NativeFileSystemAdapterLib) ) ;

// NativeFileSystemAdapterLib.getOriginPrivateDirectory() ;

if (typeof window !== "undefined") {
  ;
  // NativeFileSystemAdapterLib.getOriginPrivateDirectory() ;

  stdoutConsole["info"](navigator.storage ) ;
} else {
  console["warn"](`[StTsNodetests] [NativeFileSystemAdapter] Not In Web Env; Cannot Initialise`) ;
}







