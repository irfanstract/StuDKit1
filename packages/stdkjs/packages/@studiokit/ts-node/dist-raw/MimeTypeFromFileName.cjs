
// @ts-check





const Express = require("express") ;







const getMimeTypeFromShortName = (

  /** @satisfies {(x: string) => (string | null )} */
  (function(x) {

    try {
      const v = Express.static.mime.lookup(x,) ;
      if (v === Express.static.mime.default_type ) {
        return null ;
      }
      return v ;
    } catch (z) {
      console["error"](String(z)) ;
      return null ;
    }
  } )
) ;





module.exports = {
  getMimeTypeFromShortName ,
} ;







