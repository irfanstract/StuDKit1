
// @ts-check


import * as Path from "path";
import { fileURLToPath } from "url";




export const getFilenameAndDirname = (

  /** @satisfies {(x: ImportMeta) => any } */ ((x) => {
    ;
    const __filename = fileURLToPath(x.url ) ;
    const __dirname = Path.join(__filename, ".." ) ;
    return (
      /** @type {const} */ ({ __filename, __dirname, })
    ) ;
  } )
) ;



