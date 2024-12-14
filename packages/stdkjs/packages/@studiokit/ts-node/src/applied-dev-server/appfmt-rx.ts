
// /// <reference lib="ES2022" />
/// <reference lib="DOM" />





import {
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  assert ,
  once,
  parse,
  ProjectLocalResolveHelper,
  utilReiterated,
  split,
  resolveUrl ,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
  dropSearchParamAndHash,
  mutationallyTransformUrl,
} from '../util';

import type {

  AllOrNeither,
  ConformOrNever, 
  EitherOneProp,

  // PartializeOptionsConditionally ,
  // PartializeOptionsConditionallyAndRequifyIfFalse ,

  // MayOptRecord ,
  // MayOptRecordRevalue ,

} from "../util-recordtypes" ;

import { inspect, } from 'node:util';

const parseUrl = (

  function (...[x] : [x: string])
  : URL
  {

    return URL.canParse(x) ? Object.freeze(new URL(x) ) : assert.fail(new TypeError(`${inspect(x) }`) ) ;
  }
) ;

import type {
  Dispatch ,
} from "react" ;




import Path = require("node:path") ;

import { fileURLToPath, pathToFileURL, } from 'node:url';

import NativeFs = require("node:fs") ;

import Express = require("express") ;

import {
  analyseRphrc ,
} from "./base-ejs" ;

const getEnclosingUrlInfo = (

  function (...[e]: [e: Express.Request])
  {
    return analyseRphrc({ invokingRequestEvt: e, }) ;
  }
) ;

import {
  readFileSync,
  statSync,
} from 'node:fs';





import {
  XMapperImpl ,
  XWhitelistOrBlacklistImpl ,
} from "./generic-mapper" ;





import TsNode = require("../index") ;

import React = require('react');

import ReactDOMServer = require('react-dom/server');

const allTscSupportedExtsLowercased = (
  utilReiterated(function* () {
    for (const esmNess of ["", "C", "M"] )
    for (const allowJJsx of [false, true] )
    for (const dialectId of ["J", "T"] )
      yield (
        ("" + esmNess + ("" + dialectId + "S" ) + (allowJJsx ? "X" : "" ) )
        .toLowerCase()
      ) ;
  })
) ;

;
/**
 * since React 18 doesn't have native support for `Promise`s,
 * we need to simulate via rather unsemantic means eg {@link React.lazy `React.lazy`}
 * 
 */
namespace RxEv {
  ;

  export const evaluateSyncFunction = (

    function <const Value> (...[runCode] : [() => Value ])
    {
  
      return (
        evaluateAsyncFunction(async () => runCode() )
      ) ;
    }
  ) ;

  export const evaluateAsyncFunction = (

    function <const Value> (...[startCode] : [() => Promise<Value> ])
    : React.ReactElement
    {
  
      assert(React.lazy, new ReferenceError(`'React.lazy' is not available. make sure the React Version is 18 or later, and try again` ) )

      const C = (
        React.lazy(async () => {
          ;
          const codeReturnValue = (
            await (
              startCode()
            )
          ) ;

          // @ts-expect-error
          const CImpl: React.FC<{}> = (
            function CSpclRenderedContentDisplayC()
            {

              return (

                ((...[e]: [e: unknown]) => {
                  ;

                  if ((
                    (((typeof e === "object" || typeof e === "function" ) /** it didn't outrule `null` */ && e ) && Object.getOwnPropertyNames(e).length <= 0 )
                  ) ) {
                    return (
                      React.createElement("p", {}, `cannot render element:`, (
                        React.createElement("code", {}, (
                          `${String(e) }`
                        ) )
                      ) )
                    ) ;
                  }

                  return e;
                })
                (codeReturnValue)
              ) ;
            }
          );
  
          return { default: CImpl, } ;
        } )
      ) ;
  
      return (
        React.createElement(C, {} )
      ) ;
    }
  ) ;

  ;
}

class RxFileNotFoundException extends TypeError
{
}

;
import TsNodeEb = require("../eb") ;

class RxStyleApp<const I extends RxStyleApp.PeerItcMethods = any> {
  ;

  /**
   * an {@link Express.Handler Express-based frontend } for this App.
   * 
   */
  ejsFrontend: Express.Handler = (
  (() => {
  ;

  return (

    /**
     * for the right way to do it
     * see https://18.react.dev/reference/react-dom/server/renderToPipeableStream ,
     * 
     */
    async (...[req, respo, inext]) => {
      const this1 = this ;
      ;

      try {
      ;

      if (1) {
        const {
          xPath: path ,
          pathnameHref,
          basePathnameHref ,
          originHref,
          hostnamev ,
        } = getEnclosingUrlInfo(req) ;

        console["warn"](Date(), {
          path ,
          pathnameHref,
          basePathnameHref ,
          originHref,
          hostnamev ,
        }) ;

        const stta = (

          (() => {
            if (req.accepts("text/html") ) {
              return "cjs" ;
            }
          })()
        ) ;

        const evaluateMainOnce = (

          once((): unknown => {

            if (path === "/%20" ) {
              throw new TypeError(`illegal access: ${inspect({ path, pathnameHref, }) }`) ;
            }

            return (
              this1.peer.rerunRelativePath(path, {
                with: {
                  type: stta ,
                } ,
              })
            ) ;
          })
        ) ;

        if ((
          req.accepts("html")
        ) ) {
        ;

        const finalCont = (

          (() => {

            ;
            const c = (

              /**
               * since React 18 doesn't have native support for `Promise`s,
               * we need to simulate via rather unsemantic means eg {@link React.lazy `React.lazy`}
               * 
               */
              RxEv.evaluateSyncFunction(() => {

                return (
                  evaluateMainOnce()
                ) ;
              })
            ) ;

            return (
              React.createElement("html", {}, (
                React.createElement("head", {}, ...[
                  React.createElement("meta", { charSet: "utf-8", } ) ,
                  React.createElement(
                    "title", { },
                    /** `<title>`s doesn't support `<!-- ... -->`s */
                    [`this page have no title`, ` - `, inspect({ path, pathnameHref, }) ].join("") ) ,
                  React.createElement("base", { href: basePathnameHref, } ) ,
                ] )
              ), (
                React.createElement("body", {}, c )
              ) )
            ) ;
          })()
        ) ;
        respo.status(200) ;
        /**
         * see https://18.react.dev/reference/react-dom/server/renderToPipeableStream#rendering-a-react-tree-as-html-to-a-nodejs-stream ,
         * 
         */
        const {
          renderInp,
        } = (
          runHtmlTypedReactJsxResponse(finalCont)
        ) ;
        // (await new ReadableStreamDefaultReader(renderInp)) ;
        // renderInp.pipe(respo) ;
        return ;
        } /* fmt: HTML */

      }

      } catch (z) {
        return (
          runHtmlTypedInternalServerErrorResponse(z)
          ,
          void 0
        ) ;
      }

      function warnSpecialcasedFileNotFoundException(...[error]: [error: any])
      {
        ;
        void ( console["warn"](`Special-Cased FIle-Not-Found-Exception:`, String(error) ) ) ;
      }

      function runHtmlTypedFileNotFoundErrorResponse(...[error]: [error: any])
      {
        ;
        respo.status(404);
        respo.setHeader('content-type', 'text/html');
        respo.send('<h1>Path Not Available</h1>' + `<pre> ${String(error) }`); 
      }

      function runHtmlTypedReactJsxResponse(...[finalCont]: [finalCont: React.ReactElement | React.ReactPortal ])
      {
        ;

        /**
         * have look at https://18.react.dev/reference/react-dom/server/renderToPipeableStream#rendering-a-react-tree-as-html-to-a-nodejs-stream ,
         * for full listing of `ReactDOMServer`
         * 
         */
        const renderInp = ((
          (
            ReactDOMServer.renderToPipeableStream(finalCont, {
              //
              onShellError: (error): void => {
                ;
                if (error instanceof RxFileNotFoundException) {
                  warnSpecialcasedFileNotFoundException(error) ;
                  runHtmlTypedFileNotFoundErrorResponse(error) ;
                  return ;
                }
                {
                ;
                void ( console["warn"](`Code Exception:`, (error) ) ) ;
                runHtmlTypedInternalServerErrorResponse(error) ;
                }
              } ,
              onShellReady: (...e) => {
                respo.setHeader("content-type", "text/html") ;
                respo.status(200) ;
                renderInp.pipe(respo) ;
              } ,
              onError(error, errorInfo) {
                /** we already sent this to client, so bypass full stacktrace */
                console.warn(String(error)) ;
              },
            } )
          )
        )) ;

        return {
          renderInp: renderInp as Pick<typeof renderInp, "abort" > ,
        } as const ;
      }

      function runHtmlTypedInternalServerErrorResponse(...[error]: [error: any])
      {
        ;
        respo.status(500);
        respo.setHeader('content-type', 'text/html');
        respo.send('<h1>Something went wrong</h1>' + `<pre> ${getStackOrMessage(error) }`); 
      }

      return inext() ;
    }
  ) ;
  })()
  ) ;

  /** @deprecated */
  constructor(readonly peer: I ) {}

  ;
}

namespace RxStyleApp {
  ;

  /**
   * a Rx app with src-root-dir being given path
   * 
   */
  export function describeSrcRootedIe(...pArgs : (

    ArgsWithOptions<[rootDir: string ], (
      & {}
      & { readonly pathSimpleNameToActual: PathSimpleNameTranslator , }
      & SrcRootedLinearRxApp.SrcDirWhitelistingProps
      & Partial<TsNodeServiceDependentProps>
    )>
  ) )
  {
    ;
    const [
      srcBaseDir ,
      pOpts ,
    ] = pArgs ;

    const {
      pathSimpleNameToActual ,
      tsNodeService: tsNodeServiceArg ,
      tsNodeServiceConfig: tsNodeServiceConfigArg ,
      ...otherProps
    } = pOpts;

    const tsNodeService = (
      getTsNodeServiceFromProps((
        tsNodeServiceArg ?
        {
          tsNodeService: tsNodeServiceArg ,
          tsNodeServiceConfig: tsNodeServiceConfigArg ,
        } :
        {
          tsNodeService: tsNodeServiceArg ,
          tsNodeServiceConfig: {
            /** needs to do good enough to ensure TS-Node doesn't fill this with `process.cwd()` */
            cwd: srcBaseDir ,
            /** needs to do good enough to ensure Studiokit-TS-Node doesn't fill all these with unexpected values */
            // alwaysPreTranspile: true ,
            ...(tsNodeServiceConfigArg ?? {}) ,
          } ,
        }
      ))
    ) ;

    return (
      describeSrcRootedIeImpl({
        ...otherProps ,
        srcBaseUrl: pathToFileURL(srcBaseDir ) ,
        pathSimpleNameToActual ,
        tsNodeService: tsNodeService ,
      })
    ) ;
  }

  function describeSrcRootedIeImpl(...pArgs : (

    ArgsWithOptions<[], (
      & {}
      & SrcRootedLinearRxApp.SrcBaseDirProps
      & { readonly pathSimpleNameToActual: PathSimpleNameTranslator , }
      & SrcRootedLinearRxApp.SrcDirWhitelistingProps
      & { readonly tsNodeService: import("../index").Service }
    )>
  ) )
  {
    const [
      pOpts ,
    ] = pArgs ;

    const {
      srcBaseDirUrl ,
      srcBaseDirPath ,

    } = SrcRootedLinearRxApp.expandSrcBaseDirProps(pOpts) ;

    const {
      isWhitelistedSrcUrl ,

    } = (
      SrcRootedLinearRxApp.expandSrcDirWhitelistingProps((
        pOpts
      ))
    ) ;

    const {
      pathSimpleNameToActual ,
    } = pOpts ;

    const {
      tsNodeService: rtService ,
    } = pOpts ;

    ;

    /**
     * parse {@link URL.path relative path (ie rooted at `/`) (with the trailing `?&lt;params>`) }
     * 
     */
    function parseRelativePath(...[rUrl]: [x: string] )
    {
      const rUrlO = (
        ((...[x]: [x: string]) => {
          const  { pathname, searchParams, hash, } = parseUrl("http://127.0.0.1" + x.replace(/^\/(?!\/)/ , "/" ) ) ;
          return { pathname, searchParams, hash, } as const ;
        })
        (rUrl)
      ) ;

      return {
        md: {
          rUrl ,
          rUrlO ,
        },
      } as const ;
    }

    const xCheckPathExists = (

      /** `throw`s {@link RxFileNotFoundException} if it doesn't strict exist as Regular File */
      function (...[finalPath]: [path: string])
      {

      /** `throw`s if it doesn't strict exist as Regular File */
      if (!NativeFs.existsSync(finalPath,) ) {
        throw new RxFileNotFoundException(`for: ${inspect({ finalPath, }) }`) ;
      }

      }
    ) ;

    /**
     * rerun {@link URL.path relative path (ie rooted at `/`) (with the trailing `?&lt;params>`) }
     * 
     */
    function rerunRelativePath(...rerArgs: Parameters<PeerItcMethods["rerunRelativePath"] > )
    {
      const [rUrl, { with: { type: typeAttribv0 = "???" } = { }, } = {}] = rerArgs ;
      const {
        md: {
          rUrlO ,
        } ,
      } = parseRelativePath(rUrl) ;

      const qpVerbatim = rUrlO.pathname ;

      const qp1 = dropSearchParamAndHash(qpVerbatim) ;

      if (!(qpVerbatim.startsWith(qp1) ) ) {
        return assert.fail(`assertion failed: ${inspect({ qpVerbatim, qp1, }) }` ) ;
      }

      const pr2 = (
        qp1.endsWith("/") ?
        qp1
        :
        pathSimpleNameToActual.translateInAppFullName(qp1, {
          srcBasePath: srcBaseDirPath ,
        } )
      ) ;

      const p3 = (
        Path.join(srcBaseDirPath , pr2 )
      ) ;

      if (shallVerboseResol) {
        ;
        console.warn({
          srcBaseDirPath ,
          qp1,
          pr2 ,
          p3 ,
        }) ;
      }

      /** `throw` {@link RxFileNotFoundException} if it doesn't strict exist as Regular File */
      xCheckPathExists(p3 ) ;

      /** `throw`s if it doesn't exist */
      statSync(p3) ;

      const finalPath = (
        statSync(p3).isDirectory() ?
        Path.join(p3, "index.ts") :
        p3
      ) ;

      /** `throw` {@link RxFileNotFoundException} if it doesn't strict exist as Regular File */
      xCheckPathExists(finalPath ) ;

      /** `throw`s native Node Exception if it doesn't strict exist as Regular File */
      readFileSync(finalPath, ) ;

      const typeAttribvFinal = (

        /** TODO Content Sniffing */
        (
          (typeAttribv0 === "???") ? TsNodeEb.SupportedEsmImportAttribProps.cjsTypeString :
          typeAttribv0
        )
      ) satisfies string ;

      if ((
        shallVerboseResol
        || 1
      )) {
        ;
        console["warn"](Date(), {
          rUrl,
          rUrlO,
          pr2 ,
          p3,
          finalPath,
        }) ;
      }

      const returnVal = (
        rtService.dispatchSrcFile((
          finalPath
        ), {
          rerun: true ,
          esmImportAttribs: { type: typeAttribvFinal, } ,
        })
      ) ;

      return returnVal ;
    }

    ;

    return (

      new RxStyleApp((

        (
          /**
           * implementing `peer`.
           * 
           * if we _straight passed this directly as options_ rather than holding on and applying this idiom,
           * we risk breaking existing code when renaming any members of {@link PeerItcMethods}, because presently Ver of `tsserver` doesn't properly make the link in that case
           * 
           */
          function <T0, const T1 extends NoInfer<T0> & Record<string, unknown>>(c0: import("react").Dispatch<T0>, x: T1): T0 & T1
          { return x ; }
        )((x: PeerItcMethods) => {} , {
          //
    
          isWhitelistedSrcUrl ,
    
          rerunRelativePath: rerunRelativePath ,
    
        })
      ))
    ) ;
  }

  /**
   * WIP
   * 
   * @deprecated
   */
  export interface PeerItcMethods {

    /**
     * 
     * 
     */
    readonly rerunRelativePath: (...[rUrl]: (
      ArgsWithOptions<[x: string], { with?: ImportAttributes, }>
    ) ) => any ,

  }

  export namespace SrcRootedLinearRxApp {
    ;

    export type SrcBaseDirProps = (
      & {

        /**
         * the URL specifying The Src Base-Dir.
         * needs to be an Absolute File URL.
         * 
         */
        readonly srcBaseUrl: URL | string,

      }
    ) ;

    export const expandSrcBaseDirProps = (

      (({ srcBaseUrl: srcBaseDirUrl, }) => {

        const srcBaseDirPath = (
          fileURLToPath(srcBaseDirUrl )
        ) ;

        srcBaseDirUrl ;

        return {
          /** hosting-platform-dependent path to the src base-dir */
          srcBaseDirPath ,
          /** URL to the src base-dir */
          srcBaseDirUrl ,
        } as const ;
      }) satisfies ((x: SrcBaseDirProps) => any )
    ) ;

    export type SrcDirWhitelistingProps = (

      & ConformOrNever<(
        & EitherOneProp<{
          //
          readonly srcDirWhitelist: XWhitelistOrBlacklistImpl<string> ,
          readonly srcDirBlacklist: XWhitelistOrBlacklistImpl<string> ,
          readonly srcUrlWhitelist: XWhitelistOrBlacklistImpl<string | URL> ,
        }>
        & EitherOneProp<{
          readonly onBlacklistedSrcUrlAccess: Dispatch<Event > ,
          readonly resolveExtraApp          : Extract<XMapperImpl<string | URL, RxStyleApp>, any> ,
        }>
      )>

    ) ;

    export const expandSrcDirWhitelistingProps = (

      (({
        //
        srcDirWhitelist: sdArg ,
        srcUrlWhitelist: suArg ,
        srcDirBlacklist: noSdArg ,
        onBlacklistedSrcUrlAccess: obscuaArg,
      }) => {
        ;

        function isWhitelistedSrcUrl(...[s]: [url: string & { isUrl ?: true, }] )
        {
          if (noSdArg && XWhitelistOrBlacklistImpl.toFnc(noSdArg     )(       fileURLToPath(s)     ) ) { return    false ; }
          if (sdArg   && XWhitelistOrBlacklistImpl.toFnc(sdArg       )(       fileURLToPath(s)     ) ) { return     true ; }
          if (suArg   && XWhitelistOrBlacklistImpl.toFnc(suArg       )( /* already URL */  (s)     ) ) { return     true ; }
          return false ;
        }
    
        return {
          isWhitelistedSrcUrl ,
        } as const;
      }) satisfies (x: SrcDirWhitelistingProps) => any
    ) ;

    ;
  }

  /**
   * {@link ConformOrNever `ConformOrNever<TsNodeServiceDependentProps>`} -
   * additionally allowing to specify neither of them.
   * 
   */
  export type OptionalTsNodeServiceDependentProps = (
    ConformOrNever<TsNodeServiceDependentProps>
  ) ;

  export type TsNodeServiceDependentProps = (
    EitherOneProp<{
      readonly tsNodeService: TsNode.Service,
      readonly tsNodeServiceConfig: TsNode.CreateOptions,
    }>
  ) ;

  /**
   * altered version of {@link getTsNodeServiceFromProps} which
   * expects {@link OptionalTsNodeServiceDependentProps} instead of {@link TsNodeServiceDependentProps}.
   * helper to instantiate `TSNode.Service`, in lieu of the possibility of neither of those props having been set.
   * 
   */
  export const getTsNodeServiceFromOptionalizedProps = (

    ((...[{
      tsNodeService: tsNodeServiceArg ,
      tsNodeServiceConfig: tsNodeServiceConfigArg ,
    } , { warn: shallWarn = false, } =  {}] ) => {

      const tsNodeService =  (
        TsNode.create(
          tsNodeServiceArg ??
          {
            /** needs to do good enough to ensure Studiokit-TS-Node doesn't fill all these with unexpected values */
            alwaysPreTranspile: true,
            ...(
              tsNodeServiceConfigArg ??
              (shallWarn && console["warn"](`deprecated passing of neither (tsNodeServiceArg ?? tsNodeServiceConfigArg)`) , {
              } )
            ) ,
          },
        )
      );

      return tsNodeService ;
    }) satisfies ((...x: ArgsWithOptions<[OptionalTsNodeServiceDependentProps], { warn ?: boolean, }>) => any )
  ) ;

  /**
   * helper to instantiate `TSNode.Service`, in lieu of the possibility of neither of those props having been set.
   * 
   */
  export const getTsNodeServiceFromProps = (

    (({
      tsNodeService: tsNodeServiceArg ,
      tsNodeServiceConfig: tsNodeServiceConfigArg ,
    }) => (

      getTsNodeServiceFromOptionalizedProps({
        ...(tsNodeServiceArg ? {
          tsNodeService: tsNodeServiceArg ,
          tsNodeServiceConfig: tsNodeServiceConfigArg ,
        } : {
          tsNodeService: tsNodeServiceArg ,
          tsNodeServiceConfig: tsNodeServiceConfigArg ,
        }) ,
      } , {
        warn: true,
      })
    )) satisfies ((x: TsNodeServiceDependentProps) => any )
  ) ;

  let shallVerboseResol: boolean = true ;

  export class PathSimpleNameTranslator
  {

    readonly translateInAppFullName!: (...x: ArgsWithOptions<[x: string, ], { srcBasePath: string, }>) => string ;

    // readonly translate?: (...x: ArgsWithOptions<[x: string, ], { base: string, }>) => string ;

    constructor(
       )
    {}

  }

  export namespace PathSimpleNameTranslator {
    ;

    /**
     * create an no-op instance.
     * 
     */
    export const createNoOpInstance = (
      function createNoOpPathSimpleNameTranslator()
      {
        return new PathSimpleNameTranslatorSimp((e) => e ) ;
      }
    ) ;

  }

  export class PathSimpleNameTranslatorSimp
  extends PathSimpleNameTranslator
  {
    isPathSimpleNameTranslatorSimp = true as const ;

    /** @deprecated */
    constructor(
      readonly translateInAppFullName: (x: string) => string, )
    { super() ; }

  }

  export namespace PathSimpleNameTranslator {
    ;

    export const createTsInstance = (
      function createTsInstanceImpl()
      {
        return new PathSimpleNameTranslatorRea((...[e, { srcBasePath: sbp0, }]) => {
          {

            const sbu1WithoutTrailingSlash = (
              pathToFileURL(sbp0).href
            ) ;
            const sbu1 = (
              mutationallyTransformUrl(sbu1WithoutTrailingSlash , e => {
                e.hash = "" ;
                e.search = "" ;
                e.pathname = e.pathname.replace(/\/?$/, () => "/index" )
              } )
            ) ;

            const resolveP = (

              function (...[e]: [e: string])
              {
                return fileURLToPath(resolveUrl(sbu1, "." + e ) ) ;
              }
            ) ;

            const shallVerbose = shallVerboseResol ;

            ;
            shallVerbose && console.warn({
              e,
              sbp0,
              sbu1WithoutTrailingSlash,
              sbu1,
            }) ;

            const xExistsSync = NativeFs.existsSync ;

            ;
            // const p1 = resolveP(e) ;

            const extfMatch = (
              // e.match(/\.([cm]?[jt]sx?)$/)
              e.match(/\.\w+$/)
            ) ;
            if (extfMatch ) {
              const ffnl = resolveP(e) ;
              shallVerbose && console.warn({ ffnl, }) ;
              if (xExistsSync(ffnl ) ) {
                return e ;
              }
            }
            
            if (e.match(/\/$/) ) {
              ;
            } else {
              for (const extnm of (
                allTscSupportedExtsLowercased
              ) )
              {
                const pToAdd = ("." + extnm ) ;
                const ffnl = resolveP(e) + pToAdd ;
                const efnl =           e + pToAdd ;
                shallVerbose && console.warn({ pToAdd, ffnl, efnl, }) ;
                if (xExistsSync(ffnl) ) {
                  return efnl ;
                }
              }
            }
          }
          return e ;
        } ) ;
      }
    ) ;

  }

  class PathSimpleNameTranslatorRea
  extends PathSimpleNameTranslator
  {
    isPathSimpleNameTranslatorRea = true as const ;

    /** @deprecated */
    constructor(
      readonly translateInAppFullName: (...x: Parameters<PathSimpleNameTranslator["translateInAppFullName"]> ) => string, )
    { super() ; }

  }

  ;
}

export {
  RxStyleApp ,
  /** alias of {@link RxStyleApp}. @deprecated */
  RxStyleApp as LinearRxApp ,
} ;





if (require.main === module ) {
  ;

  const app = (
    RxStyleApp.describeSrcRootedIe('J:/Dev/NStdkSrc/packages/stdkjs/packages/@studiokit/ts-node/dist-raw/sttsn-devserver/demos/S1/pages', {
      //
      pathSimpleNameToActual: RxStyleApp.PathSimpleNameTranslator.createNoOpInstance()
      ,
    } )
  ) ;

  {
    const returnValue = (
      app.peer.rerunRelativePath("/")
    ) ;
    console["warn"]({ returnValue, }) ;
  }

  throw new TypeError() ;
}












