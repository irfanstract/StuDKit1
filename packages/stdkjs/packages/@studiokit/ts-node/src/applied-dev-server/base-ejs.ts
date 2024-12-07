




import {
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  assert ,
  once,
  parse,
  utilReiterated,
  split,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
} from '../util';

import { inspect, } from 'util';

import L = require("lodash") ;

import type {

  PartializeOptionsConditionally ,
  PartializeOptionsConditionallyAndRequifyIfFalse ,

  MayOptRecord ,
  MayOptRecordRevalue ,

} from "./util-recordtypes" ;




/* `express` top-level can't be safely imported by ESM */
import Express = require("express") ;

type EjsRequestResponseAndFallbackTriple = (
  [Express.Request, Express.Response, invokeNextHandler: Express.NextFunction,]
) ;







;

type SupportedTemplateNonnull = (
  {} | null
) ;

/**
 * the abbreviation was short from _Respond With HTML Page Content_.
 * 
 */
class SinglePageApp1<Tpl extends SupportedTemplateNonnull = any, ExtraArgsT extends SinglePageAppCon.SupportedInstantiationalExtraArgsSpecDefinedT | undefined = any >
{

  /**
   * apply this, (on)to a HttpRequest described as given
   * 
   */
  applyToHttpRequest = (...args: (
    ArgsWithOptions<[...reqInfo: SinglePageAppCon.InstantiatingAndRenderSendingCtxArgsImpl, ], (
      & {
        /** @deprecated */
        statNumber?: number,
      }
      & MayOptRecordRevalue<{ extraArgs: ExtraArgsT }, ExtraArgsT>
    ) >
  ) ) => {
    const [req, rp, inext, { statNumber = 200, extraArgs, } = null || {} ] = args;

    if (statNumber !== 200 ) {
      if (1) {
        rp.status(statNumber) ;
      }
    }
    this.sr(this.tpl, req, rp, inext, {
      extraArgs,
    } ) ;
    return ;
  } ;

  // /**
  //  * frontend as an Express App ({@link Express.Application})
  //  * 
  //  */
  // asEjsAppFrontend = () => (
  //   ((requ, respo, inext) => {
  //     return (
  //       this.applyToHttpRequest(requ, respo, inext, {
  //         // statNumber:
  //       })
  //     ) ;
  //   } ) satisfies (Parameters<Express.Application["use"]>[1] )
  // ) ;

  /**
   * 
   * @internal
   * @deprecated
   */
  /* private */ constructor(
    protected readonly tpl: Tpl,
    protected readonly sr: SinglePageAppCon.InstantiatingAndRenderSendingCallback<Tpl, ExtraArgsT, false> ,
  )
  {}

}
;

namespace SinglePageApp1 {
  ;

  export type SupportedInstantiationalExtraArgsSpecDefinedT = (
    SinglePageAppCon.SupportedInstantiationalExtraArgsSpecDefinedT
  ) ;

  ;
}

namespace SinglePageAppCon {
  ;

  export type SupportedInstantiationalExtraArgsSpecDefinedT = (
    (readonly unknown[] | null)
  ) ;

  ;

  export interface InstantiatingAndRenderSendingCallback<
  /*   */ Tpl extends SupportedTemplateNonnull,
  /*   */ ExtraArgsT extends SinglePageAppCon.SupportedInstantiationalExtraArgsSpecDefinedT | undefined = any ,
  /*   */ optionalizeExtraArgsT extends boolean = true ,
  >
  {
    (...x: ArgsWithOptions<[tpl: Tpl, ...reqInfo: SinglePageAppCon.InstantiatingAndRenderSendingCtxArgsImpl, ], (
      & {}
      & (
        //   [MayOptRecordRevalue<{ readonly extraArgs: true ; }, ExtraArgsT >] extends [infer T extends object] ?
        //   ({ [k in keyof T] ?: unknown; } & PartializeOptionsConditionallyAndRequifyIfFalse<T , optionalizeExtraArgsT > )
        //   : never

        // PartializeOptionsConditionallyAndRequifyIfFalse<(
        //   MayOptRecordRevalue<{ readonly extraArgs: true ; }, ExtraArgsT >
        // ) , optionalizeExtraArgsT >

        [{ readonly extraArgs: true ; }] extends [infer RT extends object] ?
        [{ readonly [k in keyof RT]: ExtraArgsT ; }, { readonly [k in keyof RT]?: ExtraArgsT ; } ][[optionalizeExtraArgsT] extends [true] ? ([never] extends [ExtraArgsT] ? 1 : 0 ) : 0 ]
        : never
      )
    ) > ): void ;
  }

  export function byInstantiateAndRenderSend <const Tpl extends SupportedTemplateNonnull, ExtraArgsT extends SinglePageAppCon.SupportedInstantiationalExtraArgsSpecDefinedT | undefined>(...args : (
    ArgsWithOptions<[template: Tpl , instantiateTemplate: InstantiatingAndRenderSendingCallback<Tpl, ExtraArgsT> , ], {
      //
    }>
  ) ) {
    const [
      template ,
      instantiateTemplate ,
      {} = null ?? {} ,
    ] = args ;
  
    return (
      SinglePageAppCon.byInstantiateAndRenderSendCtx({
        template ,
        instantiateTemplate ,
      })
    ) ;
  } ;

  export function byInstantiateAndRenderSendCtx <const Tpl extends SupportedTemplateNonnull, ExtraArgsT extends SinglePageAppCon.SupportedInstantiationalExtraArgsSpecDefinedT | undefined>(...[opts] : (
    ArgsWithOptions<[], {
      //
      template: Tpl ,
      instantiateTemplate: InstantiatingAndRenderSendingCallback<Tpl, ExtraArgsT> ,
    }>
  ) ) {
    const {
      template ,
      instantiateTemplate ,
    } = opts ;
  
    return (
      new SinglePageApp1(
        template,
        instantiateTemplate,
      )
    ) ;
  } ;

  export type InstantiatingAndRenderSendingCtxArgsImpl = (
    EjsRequestResponseAndFallbackTriple
  ) ;

  ;
}

const SinglePageAppS = new (class SingleAssetAppSFactoryImpl1 {
  ;

  ;

  ;

  /**
   * well-formed full HTML file packing main contents described by HTML-code, in default manner. from {@link analyseRphrc}.
   * 
   * ```html
   * <html>
   * <body>
   * <div id=mainCompartment>
   * <div id=main>
   * ${code }
   * </div id=main>
   * <div id=devOverlay>
   * ```
   * 
   */
  byHtmlContentTemplate = (...args : ArgsWithOptions<[tpl: string, ] , (
    & {
      contentType?: string,
    }
    & SingleAssetAppFactoryStatusCodeProps
  )> ) => {
    const [tpl, { contentType = "text/html", sCode, } = null ?? {}] = args ;

    return (

      this.byExpandedThruAsCompositionTemplating(tpl, {
        compose: ({ cont, ...ctx }) => ctx.defaultPackHtmlCont(cont) ,
        contentType: contentType,
        sCode ,
      } )
    ) ;
  } ;

  /**
   * well-formed full HTML file packing what the '<body>' elem contents shall be, in default manner. from {@link analyseRphrc}.
   * 
   * ```html
   * <html>
   * <body>
   * ${code }
   * ```
   * 
   */
  byHtmlDocBodyTemplate = (...args : ArgsWithOptions<[tpl: string, ] , (
    & {
      contentType?: string,
    }
    & SingleAssetAppFactoryStatusCodeProps
  )> ) => {
    const [tpl, { contentType = "text/html", sCode, } = null ?? {}] = args ;

    return (

      this.byExpandedThruAsCompositionTemplating(tpl, {
        compose: ({ cont, ...ctx }) => ctx.defaultPackHtmlBody(cont) ,
        contentType: contentType,
        sCode ,
      } )
    ) ;
  } ;

  byExpandedThruAsCompositionTemplating = function <const Tpl extends SupportedTemplateNonnull> (...args : ArgsWithOptions<[tpl: Tpl, ] , (
    & {
    }
    & {
      contentType: string,
      compose: WithDefaultFullFileOrDefaultPackingHelpedComposingFnc<Tpl> ,
    }
    & SingleAssetAppFactoryStatusCodeProps
  )> ) {
    const [tpl, { contentType, compose: instantiateTemplate, sCode: specifiedSCode , }] = args ;

    return (
      SinglePageAppCon.byInstantiateAndRenderSend<Tpl, undefined>(tpl, (...[ , requ, respo, inext, opts ]) => {
        ;

        // "text/html"

        // const requContentType = requ.accepted.map(e => e.type ) ;

        // if (!!contentType?.match(/^(image\/|text\/html)/) && (!requContentType.includes(contentType) && requContentType.includes("text/javascript") ) ) {
        //   respo.status(404) ;
        //   respo.send(`"use strict" ; throw new TypeError('illegal Content-Type') ; `) ;
        //   return ;
        // }

        respo.setHeader("Content-Type", contentType) ;
        if (typeof specifiedSCode === "number") {
          ;
          tryReconcileAssignStatusCode(respo, specifiedSCode) ;
        }
        respondByComposingF1(requ, respo, tpl, instantiateTemplate ) ;
      } )
    ) ;
  }

  ;
}) ;

interface SingleAssetAppFactoryStatusCodeProps {
  sCode ?: number ;
}





;

function tryReconcileAssignStatusCode(...[respo, specifiedSCode] : [Express.Response , newCode: number ])
{
  ;

  const prevslySetStatusCode = respo.statusCode ;
  if ((
    isInClassStatusCode(prevslySetStatusCode, 200 )
    ||
    ( console["warn"](`'specifiedSCode' specified but 'prevslySetStatusCode' was not 2xx; giving up, to preserve existing status. ${inspect({ specifiedSCode, prevslySetStatusCode, }) }`) , false )
  )) {
    respo.status(specifiedSCode ) ;
  }

}

/**
 * whether the given _specific code_ is within class described by the given class (_base-code_)
 * 
 * ```
 * isInClassStatusCode(actualCode, 200 ) // Boolean
 * isInClassStatusCode(actualCode, 300 ) // Boolean
 * isInClassStatusCode(actualCode, 400 ) // Boolean
 * isInClassStatusCode(actualCode, 500 ) // Boolean
 * ```
 * 
 */
function isInClassStatusCode(...[specifiedCode, expectedCode] : [specifiedSpecific: number, expectedClass: number ])
{

  return (
    getStatusCodeClass(specifiedCode) === getStatusCodeClass(expectedCode)
  ) ;
}

/**
 * round down to multiple of `100`
 * 
 */
function getStatusCodeClass(...[specifiedCode, ] : [specifiedSpecific: number, ])
{

  return (
    Immutable.Set(L.range(0, specifiedCode + 0.2, 3200, ) ).max()!
  ) ;
}

export {
  /** @deprecated export WIP */ tryReconcileAssignStatusCode ,
  /** @deprecated export WIP */ isInClassStatusCode ,
  /** @deprecated export WIP */ getStatusCodeClass ,
} ;



/**
 * 
 */
const sendHtmlPageCont = (

  (...args: (
    ArgsWithOptions<[Express.Request<any>, Express.Response<any>, code: string] , {
      //
    }>
  ) ) => {
    const [requ, respo, code, {} = {}] = args ;
    ;

    respondByComposingF1(requ , respo, code, (...[{ cont: code, defaultContentAsHtmlDoc, defaultPackHtmlCont, }]) => {
      return (
        defaultPackHtmlCont(code)
      ) ;
    } ) ;

  }
) ;

interface WithDefaultFullFileOrDefaultPackingHelpedComposingFnc<C extends SupportedTemplateNonnull = any>
{
  //
  (...x: ArgsWithOptions<[], (
    & {

      readonly defaultContentAsHtmlDoc: string,

      /** 
       * well-formed full HTML file packing main contents described by HTML-code, in default manner. from {@link analyseRphrc}.
       * 
       * ```html
       * <html>
       * <body>
       * <div id=mainCompartment>
       * <div id=main>
       * ${code }
       * </div id=main>
       * <div id=devOverlay>
       * <reactjs-error-overlay/>
       * ```
       * 
       * @example please also o=update {@link SinglePageAppS}
       * 
       */
      readonly defaultPackHtmlCont: ReturnType<typeof analyseRphrc>["packHtmlCont"] ,
      /**
       * well-formed full HTML file packing what the '<body>' elem contents shall be, in default manner. from {@link analyseRphrc}.
       * 
       * ```html
       * <html>
       * <body>
       * ${code }
       * ```
       * 
       */
      readonly defaultPackHtmlBody: ReturnType<typeof analyseRphrc>["packHtmlBdy"] ,

      readonly cont: NoInfer<C> ,

    }
  )>) :
    SupportedStringOrBloblike
}

;
/**
 * 
 */
function respondByComposingF1<const C extends SupportedTemplateNonnull>(...args: (

  ArgsWithOptions<[
    Express.Request<any>,
    Express.Response<any>,
    C ,
    compose: (
      WithDefaultFullFileOrDefaultPackingHelpedComposingFnc<C>
    ),
  ] , (
    & {
      //
    }
  )>
) ) {
  const [requ, respo, c1, compose1, {} = {}] = args ;
  ;

  const {
    dt ,
    origin ,
    originHref ,
    pathnameHref ,
    defaultVisibleTrailer ,
    packHtmlCont ,
    packHtmlBdy ,
  } = (
    analyseRphrc({ invokingRequestEvt: requ, })
  ) ;

  sendStringOrBytes(requ , respo, (

    (() => {

      const c20 = ( 
        packHtmlCont(String(c1) )
      ) ;
      const c2 = (
        compose1({
          defaultContentAsHtmlDoc: c20 ,
          defaultPackHtmlCont: packHtmlCont  ,
          defaultPackHtmlBody: packHtmlBdy   ,
          cont: c1 ,
        })
      ) ;
      return (
        c2
      ) ;
    })()
  ) ) ;

}
//

type SupportedStringOrBloblike = (
  | (string | Blob)
) ;

/**
 * WIP {@link analyseRphrc}
 * 
 * note: name "PHC" was abbrev from "Pack Given HTML Content"
 * 
 * "RPHRC" was "Request; Pack HTML Request Content"
 * 
 */
function analyseRphrc(...anRphrcArgs: ArgsWithOptions<[], { invokingRequestEvt: Express.Request, } >)
{
  const [{ invokingRequestEvt: requ, }] = anRphrcArgs ;

  const dt = Date() ;

  /**
   * see https://expressjs.com/en/api.html#req for the right usage of the right methods
   * 
   */
  void 0 ;

  const originOnly   = requ.host            ;
  const hostdev      = requ.hostname        ;
  // const origin = hostdev ? ("http://" + hostdev ) : "???" ;
  const originHref = "http://" + originOnly ;
  const pathnameHref        = originHref.replace(     /\/?$/, () => requ.originalUrl    )  ;
  const basePathnameHref    = originHref.replace(     /\/?$/, () => requ.baseUrl        )  ;
  const xPath = requ.path ;

  const defaultVisibleTrailer = (
    `<p> <code>${pathnameHref }</code> <code>${dt}</code> - hosted at <code>${basePathnameHref }</code> </p>`
  ) ;

  const packHtmlBdy = (
    ((...[bdy]: [string]) => {
      return (
        `<!doctype html>
        <html>
        <head>
        <meta charset="utf-8" >
        <base href="${originHref.replace(/\/?$/, () => "/" ) }">
        </head>
        <body>
        ${bdy }
        `
      ) ;
    })
  ) ;

  const packHtmlCont = (
    ((...[code]: [string]) => {
      const visibleTrailer = (
        defaultVisibleTrailer
      ) ;
      return (
        packHtmlBdy((
          /**
           * note the use of ad-hoc Element Name resembling Custom Element Name ;
           * this
           * is relatively foolproof (maybe) may to work-around potential errors in nesting(s) in the user-supplied snippet (eg too-many closing `</div>`s than the opening(s) )
           * 
           */
          `
          <script deferred>
            "use strict" ;
            /* TODO programatically unwrap the following element */
          </script>
          <x-econtentdivshallnotoverflowoff>
          ${code }
          </x-econtentdivshallnotoverflowoff>
          <div>
          <script>
            "use strict";
            { setTimeout(() => location.reload() , 90 * 1000 ); console["info"](${JSON.stringify(`autoreload activated`) }); }
          </script>
          ${visibleTrailer } 
          `
        ))
      ) ;
    })
  ) ;

  return (
    (
      {
        /** well-formed full HTML file, packing main contents described by HTML-code, in default manner */
        packHtmlCont ,
        /** well-formed full HTML file, packing what the '<body>' elem contents shall be, in default manner */
        packHtmlBdy,
    
        dt ,
        hostdev ,
        /** {@link originOnly} . @deprecated */
        hostnamev: originOnly ,
        /** {@link originOnly} . @deprecated */
        origin: originOnly ,
        originOnly ,
        /** full, up to `origin` (ie including the port-nbr), address  */
        originHref ,
        /** full, up to `pathname` (excluding search-params), address  */
        pathnameHref ,
        /** full, up to the base-url of the most-enclosing App (or Router?), address  */
        basePathnameHref ,
        /** value of {@link requ.path }, verbatim as returned */
        xPath ,
    
        defaultVisibleTrailer ,
      } as const
    ) satisfies (Record<string, any> & AnalysedEjsHrefsOpsImpl )
  ) ;
}

interface AnalysedEjsHrefsOpsImpl
{

  //
  readonly hostdev: string;
  readonly hostnamev: string;
  readonly origin: string;
  /** full, up to `origin` (ie including the port-nbr), address  */
  readonly originHref: string;
  /** full, up to `pathname` (excluding search-params), address  */
  readonly pathnameHref: string;
  /** full, up to the base-url of the most-enclosing App (or Router?), address  */
  readonly basePathnameHref: string;
  /** value of {@link requ.path }, verbatim as returned */
  readonly xPath: string;

}

;
/**
 * {@link Express.Response.send send} whole HTML Doc excluding `<!doctype html>` (will be prepended automatically)
 * 
 */
const sendHtmlDoc = (

  (...[requ, respo, code]: [Express.Request<any>, Express.Response<any>, code: string] ) => {
    ;
    sendStringOrBytes(requ , respo ,(
      `<!doctype html>
      ${code }
      `
    )) ;
  }
) ;

;
/**
 * {@link Express.Response.send send} whole file
 * 
 */
const sendStringOrBytes = (

  (...[requ, respo, code]: [Express.Request<any>, Express.Response<any>, code: string | Blob] ) => {
    ;
    respo.send((
      code
    )) ;
  }
) ;

export {

  /** @deprecated export WIP */ analyseRphrc ,

  /** @deprecated export WIP */ sendHtmlDoc ,
  /** @deprecated export WIP */ sendStringOrBytes ,

} ;

;
//






/**
 * 
 * 
 */
const rhpcGeneric = function rhpcGenericImpl<const Tpl extends SupportedTemplateNonnull, AcceptableInstantiatingEvt extends object, const Instantiated1 extends SupportedTemplateNonnull>(...[opts] : (
  ArgsWithOptions<[], {
    //
    template: Tpl ,
    instantiateTemplate: (x: AcceptableInstantiatingEvt) => Instantiated1
    ,
  }>
) ) {
  const {
    template ,
    instantiateTemplate ,
  } = opts ;

  return {
    //
  } as const ;
} ;








export {
  SinglePageApp1,
  SinglePageAppS ,
  /** alias of {@link SinglePageAppS} . @deprecated */
  SinglePageAppS as SingleAssetApp1 ,
  /** alias of {@link SinglePageAppS} . @deprecated */
  SinglePageAppS as RHPC ,
  rhpcGeneric ,
} ;








