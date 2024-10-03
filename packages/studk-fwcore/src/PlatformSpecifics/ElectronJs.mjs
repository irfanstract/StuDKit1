






import { throwTypeError, } from "typexpe-commons/src/ThrowTypeError1.mjs";







import * as Electron from "electron" ;

void (Electron && !(typeof Electron === "string" ) ) || (
  throwTypeError(`'import * from "electron" ;' returned an odd object -- please check if this is an Electron app!`)
) ;

export {
  Electron ,
} ;










