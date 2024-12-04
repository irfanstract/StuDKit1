



// export {} ;



// import "node" ;

// import {} from "node:child_process" ;



declare module "node" {
  // module "process" {
  //   global {
  //     namespace NodeJS {
  //       export interface Process extends ProcessWhetherNoDeprecation {}
  //     }
  //   }
  // }
  global {
    namespace NodeJS {
      export interface Process extends ProcessWhetherNoDeprecation {}
    }
  }
  declare global {}
}

/**
 * 
 * 
 * @see {@link NodeJS.Process}
 * 
 */
interface ProcessWhetherNoDeprecation {
  noDeprecation ?: object | true | false ;
}




