



declare module "electron-window" {


  import type {
    BrowserWindow,
    BrowserWindowConstructorOptions,
  } from "electron";



  declare function createWindow(x: BrowserWindowConstructorOptions ): BrowserWindow ;

  declare function parseArgs(): unknown ;

  declare module "electron" {
    ;

    export interface BrowserWindow 
    {
      /** Undocumented call in `electron-window` */
      _loadURLWithArgs(...args: [url: string, etc: any, cb: (error ?: unknown) => void ]): any
    }
  }

}





