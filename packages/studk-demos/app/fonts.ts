


import { range } from 'lodash-es'; ;







/**
 * 
 * for now
 * we use direct CSS import from `fonts.google.com`, rather than `import`s of from here,
 * due to the implied maintainability issue
 * 
 */








// import * as fonts from 'next/font/google' ;
//  
// 
// 
// const inter = fonts.Inter({
//   variable: '--font-inter',
// }) ;
// 
// 
// 
/* "font loaders cannot have namespace imports" */






// import * as allOfferedFonts from "@/appInternalScripts/fonts" ;

import {
  // Inter ,
  // Outfit ,
  // Poppins ,
} from 'next/font/google' ;

// export { INTER, OUTFIT, POPPINS, } ;





const allBeholdFonts = {
} ;

export { allBeholdFonts, } ;



export default allBeholdFonts ;






