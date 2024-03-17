/* using `.d.ts` doesn't work, must use `.ts` instead */





/* otherwise whatever done here won't work at all */
export {} ;






/**
 * private
 */
interface IntrinsicElementsExtsSpcl {
  //
}

/* assigning to `@types/react` nor `@types/react/jsx-runtime` nor `react` doesn't work, must use `react/jsx-runtime` instead */
declare module "react/jsx-runtime" {
  export namespace JSX {
    export interface IntrinsicElements extends IntrinsicElementsExtsSpcl {
    }
  }
}

declare global {
  export namespace JSX {
    export interface IntrinsicElements extends IntrinsicElementsExtsSpcl {
    }
  }
}






