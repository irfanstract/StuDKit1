


import { range } from 'lodash-es'; ;








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






import {
  INTER,
  OUTFIT,
  POPPINS,
} from "@/appInternalScripts/fonts" ;

import {
  // Inter ,
  // Outfit ,
  // Poppins ,
} from 'next/font/google' ;

export { INTER, OUTFIT, POPPINS, } ;





const allFonts = {
  INTER ,
  OUTFIT,
  POPPINS ,
} ;

export { allFonts, } ;



export default allFonts ;






