/* using `.d.ts` doesn't work, must use `.ts` instead */





/* otherwise whatever done here won't work at all */
export {} ;






import "./studk-card.css" ;



/**
 * private
 */
interface IntrinsifiedStudkCardElements {
  /**
   * `<studk-card>`
   * is desirable
   * to *semantically* mark piece of text(s) like news-or-blog link, glance links, all such being stand-alone
   * .
   * 
   * ```
   * <studk-card>
   *   <hea>What's New</hea>
   *   <picture ..... />
   *   <p>New things in this Friday: ... ...</p>
   * </studk-card>
   * ```
   * 
   */
  ["studk-card"]: JSX.IntrinsicElements["div"] ,
}

declare global {
  export namespace JSX {
    export interface IntrinsicElements extends IntrinsifiedStudkCardElements {
    }
  }
}






