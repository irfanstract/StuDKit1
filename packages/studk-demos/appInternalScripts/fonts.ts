


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
  Inter ,
  Outfit ,
  Poppins ,
} from 'next/font/google' ;

export const INTER = Inter({
  variable: '--font-inter',
  subsets: [
    'latin',
    'latin-ext',
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'vietnamese',
  ] ,
}) ;

export const OUTFIT = Outfit({
  variable: '--font-outfittt',
  subsets: [
    'latin',
    'latin-ext',
    // 'cyrillic',
    // 'cyrillic-ext',
  ] ,
}) ;

/* "values must be explicitly written literals", can't use ranges */
export const POPPINS = Poppins({
  variable: '--font-poppins',
  subsets: [
    "latin",
    "latin-ext",
  ] ,
  weight: ['200','300','400','500','600','700','800','900' ] ,
}) ;





const allFonts = {
  INTER ,
  OUTFIT,
  POPPINS ,
} ;

export { allFonts, } ;


export default allFonts ;






