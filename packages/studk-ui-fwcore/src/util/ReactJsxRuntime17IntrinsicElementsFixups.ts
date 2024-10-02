












/**
 * without this
 * Type-Checking for the newer JSX RT from React 17 won't see what we've all defined in `import("react").JSX.IntrinsicElements`
 * 
 */
;





import * as React from "react" ;

import type {} from "react/jsx-runtime"        ;
import type {} from "react/jsx-dev-runtime"    ;





declare module "react/jsx-runtime" {

  export namespace JSX {

    export interface IntrinsicElements extends React.JSX.IntrinsicElements {}

  }

}

declare module "react/jsx-dev-runtime" {

  export namespace JSX {

    export interface IntrinsicElements extends React.JSX.IntrinsicElements {}

  }

}

















