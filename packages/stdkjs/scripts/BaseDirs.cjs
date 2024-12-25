
// @ts-check





const Path = require("node:path") ;






const stdkJsBaseDir = Path.join(__dirname, "..") ;


const stdkUniBaseDir = Path.join(stdkJsBaseDir, "..", "..", ) ;




module.exports = {
  stdkJsBaseDir ,
  stdkUniBaseDir ,
} ;






