
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

import {
  once1 ,
  L ,
  inspect ,
  parseUrl ,
  Dispatch ,
} from "./util-alt" ;

import type {

  AllOrNeither,
  ConformOrNever, 
  EitherOneProp,

  // PartializeOptionsConditionally ,
  // PartializeOptionsConditionallyAndRequifyIfFalse ,

  // MayOptRecord ,
  // MayOptRecordRevalue ,

} from "../util-recordtypes" ;




;

import {
  TsNode ,
  allTscSupportedExtsLowercased ,
  TsNodeEb ,
} from "./util-ws" ;

import {
  React ,
  ReactDOM ,
  ReactDOMServer ,
} from "./util-ws" ;

import {
  fileURLToPath ,
  pathToFileURL ,
  Path ,
  NativeFs,
  readFileSync ,
  statSync ,
} from "./util-ws" ;

import {
  getMimeTypeFromShortName ,
  Express ,
  analyseRphrc ,
  getEnclosingUrlInfo ,
} from "./util-ws" ;

import {
  XMapperImpl ,
  XWhitelistOrBlacklistImpl ,
} from "./util-ws" ;

;

;




import {
} from 'node:fs';





;

// import {
//   XMapperImpl ,
//   XWhitelistOrBlacklistImpl ,
// } from "./generic-mapper" ;

;





;

interface INfFlagAndReturnVal<out value extends unknown = unknown, out nfT extends boolean = boolean >
{
  readonly nf: nfT,
  readonly returnVal: value,
}

import {
  RxEv ,
  tryRxRenderAsJsx ,
} from "./RxEv" ;

import {
  makeSpclEjsResponseStarter ,
} from "./base-ejs-reactdom" ;

import {
  makeSsrEssentialRx,
} from './SsrEssentialRx';

function IKNFEP()
{
  ;

  /**
   * whether the path ends with name-ext, and then
   * returns the analyses
   * 
   */
  const isFileNameExtensionedPath = (

    (path: string) => {

      const c = (
        (
          path
          .replace(/\/$/, () => "" )
          .match(/\.(\w+)$/)?.[1]
        )
        // TODO
        ?.match(/^(\w+)$/)
      ) || false ;

      if (c) {
        ;
        const fmtShortName = c[1]! ;
  
        const fmtMimeType = (
          getMimeTypeFromShortName(fmtShortName)
          // ?? "application/octet-stream"
        ) ;
  
        return (
          {
            fmtShortName ,
            fmtMimeType ,
          } as const
        ) ;
      } else {
        return false ;
      }
    }
  ) ;

  // TODO
  /**
   * whether it's a path we wld pretend as "referring to file having one of the known fmts"
   * 
   */
  const isKnownFmtFilePath = (

    (path: string) => {

      const beingNameExtensioned = isFileNameExtensionedPath(path) ;

      return (
        (
          (beingNameExtensioned && getMimeTypeFromShortName(beingNameExtensioned.fmtShortName ) )
        )
        || false
      ) ;
    }
  ) ;

  return {
    isFileNameExtensionedPath ,
    isKnownFmtFilePath ,
  } as const ;
}

const rxMustSpecialcaseExceptions = (

  (() => {

    class RxFileNotFoundException extends TypeError
    {
    }
    
    function isRxFileNotFoundException(z: unknown): z is RxFileNotFoundException
    {
    
      return (
        z instanceof RxFileNotFoundException
      ) ;
    }
    
    return {
      isFileNotFoundException: isRxFileNotFoundException,
      newFileNotFoundException: (...x: ConstructorParameters<typeof RxFileNotFoundException>) => new RxFileNotFoundException(...x ) ,
    } as const ;
  })()
) ;

export {

  rxMustSpecialcaseExceptions as rxMustSpecialcaseExceptions ,
} ;



class RxStyleApp<const I extends RxStyleApp.PeerItcMethods = any> {
  ;

  /**
   * proxy for {@link RxStyleApp.PeerItcMethods.rerunRelativePath `this.peer.rerunRelativePath`}.
   * 
   * Resolve {@link URL.pathname this app-specific relative path (ie rooted at `/`) (with the trailing `?<params>`) } to a Template File or Static File,
   * and
   * Rerun The Resolved File
   * 
   * ```sh
   * /
   * /index
   * /favicon.ico
   * /users/a123
   * /users/a456
   * /i/a789
   * /!static/index
   * /!static/MotorEngine/meng.wasm
   * /!static/MotorEngine/worker.mjs
   * ```
   * 
   */
  rerunRelativePath(...args: Parameters<RxStyleApp.PeerItcMethods["rerunRelativePath"]> )
  {
    return (
      this.peer.rerunRelativePath(...args)
    ) ;
  }

  /**
   * eventhough presently we only support Express,
   * there's open doors for future possible supports for additional FW(s), which share a lot of shared/common code (mostly `function`s)
   * 
   */
  protected readonly ejsSpawner = (
  //
  (() => {
  ;

  ;
  const this1 = this ;

  const {
    //
    isFileNameExtensionedPath ,
    isKnownFmtFilePath ,
  } = IKNFEP() ;

  ;
  /**
   * whether
   * it's
   * a path forwhich we're __permitted to__ simply send the resolved File Raw/Verbatim
   * 
   */
  const isCanBeTreatedAsStaticFilePath = (

    (path: string) => (

      isFileNameExtensionedPath(path)
    )
  ) ;

  /**
   * whether
   * it's
   * a path forwhich we're __necessitated to__ simply send the resolved File Raw/Verbatim
   * 
   */
  const isShallBeTreatedAsStaticFilePath = (

    (path: string): false | ReturnType<typeof isCanBeTreatedAsStaticFilePath> => {

      const st = (
        
        isCanBeTreatedAsStaticFilePath(path)
      ) ;

      const {
        finalAbsolPath: p4 ,
        p3v: p3 ,
      } = (

        isWouldResolve(path)
        ||
        {
          finalAbsolPath: null ,
          p3v: null ,
        }
      ) ;

      const {
        p3v: staticP3 ,
      } = (

        isWouldResolve(path, { extRewr: false, })
        ||
        {
          // finalAbsolPath: null ,
          p3v: null ,
        }
      ) ;

      // if (beingNameExtensioned) {
      //   ;
      //   if ((
      //     beingNameExtensioned.fmtShortName
      //     ?.match(/^(txt|csv|svg|[am]?e?ps\d+|[am]?(png|we?b[map]|tiff|(jp(eg|g|)2000|jpe?g))|gif|wa(sm|t)|[ot]tf)$/)
      //   )) {
      //     return beingNameExtensioned ;
      //   } else {
      //     return false ;
      //   }
      // } else {
      //   return beingNameExtensioned ;
      // }

      // return (
      //   (((p4 && p3 ) && p4 === p3 ) && NativeFs.existsSync(p4) ) ? 1 :
      //   v
      // ) ;

      if (1) {

        console.warn(`[isShallBeTreatedAsStaticFilePath]`, {
          st ,
          staticP3 ,
          p3 ,
          p4 ,
        }) ;
      }

      /**
       * The Path _Needs To_ Resolve
       * 
       */
      if (p4 && p3 && staticP3) {
        ;

        /**
         * If Ext-Rewriting Were Disabled,
         * The Path _Needs To_ Exist
         * 
         */
        if ((
          NativeFs.existsSync(staticP3)
        )) {

          /**
           * The Path _Shall Not_ Point To `/index` Or Thelikewise
           * 
           */
          if ((
            (p4 === p3 )
          )) {

            /**
             * The Path Shall Pass {@link isCanBeTreatedAsStaticFilePath},
             * Likely Correlated With The Path Having Name-Ext (Eg `.json`, `.svg`, `.jpg`, `.png`, etc)
             * 
             */
            if (st) {
              return st ;
            }

          }

        }

      }

      // return v ;

      return false ;
    }
  ) ;

  function renderFileNotFoundPageContent()
  : React.ReactElement
  {

    const { CoreFnfC, } = (
      delete require.cache[require.resolve('./corefnf') ]
      ,
      require('./corefnf') as typeof import('./corefnf')
    ) ;

    return (
      React.createElement(CoreFnfC )
    ) ;
  }

  const {
    renderArbitraryContentPage ,
    renderBoxedContentPage ,
  } = makeSsrEssentialRx() ;

  /**
   * whether one shall abort,
   * when `path` is taken as Static Asset Path and yet `exports` resolve to primitive value `undefined`
   * 
   */
  function shallFailForUndefinedValueAsStatiicAsset(): boolean
  {
    return true ;
  }

  const isWouldResolve = (

    function (...[path, { extRewr = undefined, with: iwith = undefined, } = {}]: (
      ArgsWithOptions<[inappPath: string], (
        RxStyleApp.PeerItcImportConfigProps
      )>
    ))
    {

      return (

        (() => {
          try {
            return (
        
              this1.peer.resolveOrRerunRelativePath(path, ({ finalAbsolPath: finalAbsolPath0, p3, }) => ({
                finalAbsolPath: finalAbsolPath0,
                p3v: p3 ,
              }) , {
                extRewr ,
                with: iwith,
              } )
            ) ;
          } catch (z) {
            if (rxMustSpecialcaseExceptions.isFileNotFoundException(z) ) {
              console.warn(`[isShallBeTreatedAsStaticFilePath] nf:` , path, String(z) ) ;
              return null ;
            }
            throw z ;
          }
        })()

      ) ;
    }
  ) ;

  /**
   * proxy for {@link RxStyleApp.PeerItcMethods.rerunRelativePath `this.peer.rerunRelativePath`}.
   * 
   * Resolve {@link URL.pathname this app-specific relative path (ie rooted at `/`) (with the trailing `?<params>`) } to a Template File or Static File,
   * and
   * Rerun The Resolved File
   * 
   * ```sh
   * /
   * /index
   * /favicon.ico
   * /users/a123
   * /users/a123/casts.json
   * /users/a456
   * /users/a456/casts.jsonc
   * /i/a789
   * /!static/index
   * /!static/MrDrSmartCtrlIntro.webm
   * /!static/MotorEngine/meng.wasm
   * /!static/MotorEngine/worker.mjs
   * ```
   * 
   */
  const rerunInappPath = (

    function (...[path, { impoAttribs, rewriteExt, }]: (
      ArgsWithOptions<[inappPath: string,], {

        /**
         * we'll pass, as {@link ImportMeta `importConfig`}, {@link impoAttribs `{ with: { type: opts.impoAttribs.type, }, }` }, so
         * you'll need to set `opts.impoAttribs.type`
         * 
         */
        impoAttribs: {
          type: string,
        },

        rewriteExt?: boolean ,

      } >
    ) )
    {

      return (
        
        this1.peer.resolveOrRerunRelativePath(
          path,
          c => c.rerun() ,
          { with: impoAttribs , extRewr: rewriteExt, } )
      ) ;
    }
  ) ;

  /**
   * Another Engine For Multi-Stage/Multi-Step Dispatch Of Given In-App Path.
   * the returned Ctx can only be used once, and only for the path(name) you pass for creation;
   * please create another if you want another run
   * 
   */
  const newUserRenderableInappPathRun = (

    function (...[{ path, onIllegalAccessException, }] : ArgsWithOptions<[], { path: string, onIllegalAccessException: () => never, }> ) {
      ;

      ;
      /**
       * the value to use as {@link ImportAttributes.type `with.type`} to run the main script (via {@link rerunInappPath})
       * 
       */
      let stta: string = (
        "unknown"
      ) ;

      /**
       * assign
       * the value to use as {@link ImportAttributes.type `with.type`} to run the main script (via {@link rerunInappPath})
       * 
       */
      function setStta<const v extends string>(newStta: v): void
      {
        stta = newStta ;
      }

      const evaluateMainOnceA = (

        once1((): INfFlagAndReturnVal => {

          if (0) {

            if (path === "/%20" ) {
              return (
                onIllegalAccessException()
              ) ;
            }
          }

          const appOrErrorPathTryArray = (

            utilReiterated(function* (): Iterable<{ iStta: string, xPath: string, }>
            {
              yield { iStta: stta, xPath: path, } ;
            })
          ) ;
          L1 :
          for (const { iStta: stta, xPath: path, } of appOrErrorPathTryArray ) {
            ;

            const vl0 = (() => {

              try {
                const v = (
                  rerunInappPath(path, {
                    impoAttribs: {
                      type: stta ,
                    } ,
                  })
                ) ;
                return { value: v, } ;
              } catch (z) {
                if (rxMustSpecialcaseExceptions.isFileNotFoundException(z) ) {
                  console.warn(String(z) ) ;
                  return null ;
                }
                throw z ;
              }
            })() ;
            if (!vl0) { continue L1 ; }

            const { value: vl, } = vl0 ;

            return (
              {
                nf: false ,
                returnVal: vl ,
              } satisfies INfFlagAndReturnVal
            ) ;

          }

          if (1) {
            ;

            if (1) {
              ;
              return (
                {
                  nf: true ,
                  returnVal: (
                    renderFileNotFoundPageContent()
                  ) ,
                } satisfies INfFlagAndReturnVal
              ) ;
            }

            return (
              {
                nf: true ,
                returnVal: (
                  React.createElement("div", {}, (
                    React.createElement("p", {}, `not found:`, ` `, (
                      React.createElement("code", {}, path )
                    ) )
                  ) )
                ) ,
              } satisfies INfFlagAndReturnVal
            ) ;
          }

          return (
            assert.fail(new TypeError() )
          ) ;
        })
      ) ;

      const evaluateMainOnce = (

        () => (
          evaluateMainOnceA()
          .returnVal
        )
      ) ;

      return {

        /**
         * PREREQUISITE.
         * the value to use as {@link ImportAttributes.type `with.type`} to run the main script (via {@link rerunInappPath})
         * 
         * 
         */
        setStta ,

        /** MAIN COMPLETION */
        completeA: evaluateMainOnceA ,
        /** MAIN COMPLETION */
        complete: evaluateMainOnce,

      } ;
    }
  ) ;

  /**
   * implementation for `this.ejsFrontend`
   * 
   */
  const respondToHttpRequest: Express.Handler = (

    /**
     * for the right way to do it
     * see https://18.react.dev/reference/react-dom/server/renderToPipeableStream ,
     * 
     */
    async (...[req, respo, inext]) => {
      ;

      const {
        //

        runModelledJsonResponse,
        startRawFileResponse,
    
        runHtmlTypedFileNotFoundErrorResponse ,
        runHtmlTypedInternalServerErrorResponse ,
        runHtmlTypedReactJsxResponse ,
    
        warnSpecialcasedFileNotFoundException ,
    
        setResponseNfOrDeniedStatusCode ,
        setResponseNfStatusCode ,
    
      } = makeSpclEjsResponseStarter(respo) ;

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

        const {
          //
          setStta ,
          completeA: evaluateMainOnceA ,
          complete: evaluateMainOnce,
        } = (

          newUserRenderableInappPathRun({
            path,
            onIllegalAccessException: () => {
              throw (
                rxMustSpecialcaseExceptions.newFileNotFoundException(`illegal access: ${inspect({ path, pathnameHref, }) }`)
              ) ;
            } ,
          })
        ) ;

        // const shallStatic = (
        //   isShallBeTreatedAsStaticFilePath((path /* `pathname` */ ) )
        // ) ;

        // console.warn({ shallStatic, }) ;

        if ((
          req.accepts("html")
          &&
          (
            1 ? (
              !isShallBeTreatedAsStaticFilePath((path /* `pathname` */ ) )
              &&
              (
                1 ?
                !isCanBeTreatedAsStaticFilePath((path /* `pathname` */ ) )
                : true
              )
            ) : 1
          )
        ) ) {
        ;

        // stta = "cjs" ;
        setStta("cjs");

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

                const {
                  returnVal: value,
                } = (
                  evaluateMainOnceA()
                ) ;

                if ((
                  isShallBeTreatedAsStaticFilePath(path )
                ) ) {
                  return (
                    React.createElement("div", {}, (
                      React.createElement(
                        "p", {},
                        `Unexpected React Rendition Of Static-Asset File`, ` `, (
                          React.createElement("code", {}, path )
                        ) )
                    ))
                  ) ;
                }
                return value ;
              })
            ) ;

            const titleElem = (
              0 ?
              (
                React.createElement(
                  "title", { },
                  /** `<title>`s doesn't support `<!-- ... -->`s */
                  [`this page have no title`, ` - `, inspect({ path, pathnameHref, }) ].join("") )
              )
              : null
            ) ;

            return (
              renderArbitraryContentPage(c, {
                basePathnameHref ,
                titleElem ,
              })
            ) ;
          })()
        ) ;

        const {
          nf: wasNf,
        } = evaluateMainOnceA() ;

        respo.status(200) ;

        /**
         * see https://18.react.dev/reference/react-dom/server/renderToPipeableStream#rendering-a-react-tree-as-html-to-a-nodejs-stream ,
         * 
         */
        const {
          renderInp,
        } = (
          runHtmlTypedReactJsxResponse(finalCont, wasNf ? 404 : 200 )
        ) ;
        // (await new ReadableStreamDefaultReader(renderInp)) ;
        // renderInp.pipe(respo) ;

        return ;
        } /* fmt: HTML */

        if ((
          0
          &&
          req.accepts(["json", "application/jsonc"])
        )) {
          ;
          // stta = "json" ;
          setStta("json") ;

          const {
            nf: wasNf ,
            returnVal: returnObj,
          } = (
            evaluateMainOnceA()
          ) ;

          if (returnObj === undefined) {
            return (
              assert.fail(new TypeError(`cannot translate 'undefined' into JSON Response, check your src-file. (${path })`) )
            ) ;
          }

          runModelledJsonResponse(returnObj, {
            wasNf,
          } ) ;

          return (
            void 0
          ) ;
        }

        if ((
          1
        )) {
          ;

          // TODO
          setStta((
            isShallBeTreatedAsStaticFilePath(path) ?
            "raw"
            :
            "cjs"
          )) ;

          const {
            returnVal: returnVal ,
            nf: wasNf ,
          } = (
            evaluateMainOnceA()
          ) ;

          if ((

            (
              /**
               * cannot convert `symbol` into `string` regardless what we've been doing, so
               * we'd better bail out
               * 
               */
              (
                (typeof returnVal === "symbol")
              ) && assert.fail(new TypeError(`cannot convert Symbol into String. ${inspect({ returnVal, }) }`) )
              ?
              false :
              /**
               * these primitive-value(s) cannot be meaningfully translated into string response, so
               * we'd better skip
               * 
               */
              (
                (returnVal === undefined)
              ) && (
                shallFailForUndefinedValueAsStatiicAsset() &&
                assert.fail(new TypeError(`cannot meaningfully translate: ${inspect({ returnVal, }) }` ) )
                ,
                false
              )
              ?
              false :

              true
            )

          )) {
            ;

            const mimeTypeV = (
              (isCanBeTreatedAsStaticFilePath((path /* `pathname` */ ) ) || null)?.fmtMimeType
              ?? "application/octet-stream"
            ) ;

            void (
              await
              (async (...[v0] : [{}] ) => {

                if ((
                  !(
                    (v0 instanceof Blob )
                    || (v0 instanceof Buffer )
                    || ((v0 instanceof (globalThis.ArrayBuffer || Uint8Array ) ) )
                    || (v0 instanceof Uint8Array )
                  )
                )) {
                  console["warn"](`unsupported return-value ${(v0 as Record<string, unknown>).constructor?.toString }`) ;
                }
            
                return (

                  startRawFileResponse(v0, {
                    mTypeV: mimeTypeV,
                    wasNf,
                  })
                ) ;
              })
              (returnVal ?? "null")
            ) ;

            return ;
          }

          ;
        }

      }

      } catch (z) {
        return (
          runHtmlTypedInternalServerErrorResponse(z)
          ,
          void 0
        ) ;
      }

      return inext() ;
    }
  ) ;

  return {
    respondToHttpRequest ,
  } as const ;
  })()
  ) ;

  /**
   * an {@link Express.Handler Express-based frontend } for this App.
   * 
   */
  ejsFrontend: Express.Handler = (
  (() => {
  ;

  const {
    respondToHttpRequest: eH ,
  } = this.ejsSpawner ;

  return eH ;
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
     * parse {@link URL.pathname relative path (ie rooted at `/`) (with the trailing `?&lt;params>`) }
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

      /** `throw`s {@link rxMustSpecialcaseExceptions.newFileNotFoundException `RxFileNotFoundException`} if it doesn't strict exist as Regular File */
      function (...[finalPath]: [path: string])
      {

      /** `throw`s if it doesn't strict exist as Regular File */
      if (!NativeFs.existsSync(finalPath,) ) {
        throw rxMustSpecialcaseExceptions.newFileNotFoundException(`for: ${inspect({ finalPath, }) }`) ;
      }

      }
    ) ;

    /**
     * resolve-or-rerun {@link URL.pathname relative path (ie rooted at `/`) (with the trailing `?&lt;params>`) }
     * 
     */
    function resolveOrRerunRelativePath<const R>(...rerArgs: Parameters<ReturnType<(x: PeerItcMethods) => typeof x.resolveOrRerunRelativePath<R>> > )
    {
      const [
        rUrl,
        pproc,
        {
          extRewr: extRewrOpt = true,
          with: { type: typeAttribv0 = "???" } = { },
        } = {},
      ] = rerArgs ;

      const { errorIfNf: errorIfNfOpt = false, } : { errorIfNf?: boolean, } = { };

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
          extRewr: extRewrOpt ,
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

      if (errorIfNfOpt) {
        ;
        /** `throw` {@link rxMustSpecialcaseExceptions.newFileNotFoundException `RxFileNotFoundException`} if it doesn't strict exist as Regular File */
        xCheckPathExists(p3 ) ;

        ;
        /** `throw`s if it doesn't exist */
        statSync(p3) ;
  
      }

      const finalPath = (
        (
          (errorIfNfOpt || NativeFs.existsSync(p3)) &&
          statSync(p3).isDirectory()
        ) ?
        Path.join(p3, "index.ts") :
        p3
      ) ;

      if (errorIfNfOpt) {
        ;
        /** `throw` {@link rxMustSpecialcaseExceptions.newFileNotFoundException `RxFileNotFoundException`} if it doesn't strict exist as Regular File */
        xCheckPathExists(finalPath ) ;

        ;
        /** `throw`s native Node Exception if it doesn't strict exist as Regular File */
        readFileSync(finalPath, ) ;
  
      }

      const typeAttribvFinal = (

        /** TODO Content Sniffing */
        (
          (typeAttribv0 === "???") ? TsNodeEb.SupportedEsmImportAttribProps.cjsTypeString :
          typeAttribv0
        )
      ) satisfies string ;

      return (

        pproc({

          finalAbsolPath: finalPath ,
          p3 ,

          rerun: () => {
            ;

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
      
            if (1) {
              ;
              /** `throw` {@link rxMustSpecialcaseExceptions.newFileNotFoundException `RxFileNotFoundException`} if it doesn't strict exist as Regular File */
              xCheckPathExists(finalPath ) ;

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
          } ,

        })
      ) ;
    }

    ;
    /**
     * rerun {@link URL.pathname relative path (ie rooted at `/`) (with the trailing `?&lt;params>`) }
     * 
     */
    function rerunRelativePath(...[c, { ...opts }]: Parameters<PeerItcMethods["rerunRelativePath"] > )
    {

      return (
        resolveOrRerunRelativePath(c, ({ rerun, }) => rerun(), opts )
      ) ;
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

          resolveOrRerunRelativePath: resolveOrRerunRelativePath,
    
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
     * Resolve {@link URL.pathname this app-specific relative path (ie rooted at `/`) (with the trailing `?<params>`) } to a Template File or Static File,
     * and
     * Rerun The Resolved File
     * 
     * ```sh
     * /
     * /index
     * /favicon.ico
     * /users/a123
     * /users/a123/casts.json
     * /users/a456
     * /users/a456/casts.jsonc
     * /i/a789
     * /!static/index
     * /!static/MrDrSmartCtrlIntro.webm
     * /!static/MotorEngine/meng.wasm
     * /!static/MotorEngine/worker.mjs
     * ```
     * 
     * {@link resolveOrRerunRelativePath}
     * 
     */
    readonly rerunRelativePath: (...[rUrl]: (
      ArgsWithOptions<[x: string], PeerItcImportConfigProps>
    ) ) => any ,

    /**
     * Resolve {@link URL.pathname this app-specific relative path (ie rooted at `/`) (with the trailing `?<params>`) } to a Template File or Static File,
     * and/or
     * Rerun The Resolved File
     * 
     * ```sh
     * /
     * /favicon.ico
     * /users/a123
     * /users/a123/casts.json
     * /users/a456/casts.jsonc
     * /!static/MotorEngine/index
     * /!static/MrDrSmartCtrlIntro.webm
     * /!static/MotorEngine/meng.wasm
     * /!static/MotorEngine/worker.mjs
     * ```
     * 
     * {@link rerunRelativePath}
     * 
     */
    readonly resolveOrRerunRelativePath: <const R>(...[rUrl]: (
      ArgsWithOptions<[
        x: string,
        (...x: ArgsWithOptions<[], { p3: string, finalAbsolPath: string, rerun(): unknown, } >) => R ,
      ], PeerItcImportConfigProps>
    ) ) => R ,

  }

  export interface PeerItcImportConfigProps extends Extract<{ with?: ImportAttributes, extRewr?: false | true, }, any> {}

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

    readonly translateInAppFullName!: (
      (...x: ArgsWithOptions<[x: string, ], (
        & { srcBasePath: string, }
        & { extRewr?: false | true | 1, }
      )>) => string
    ) ;

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
        return new PathSimpleNameTranslatorRea((...[e, { srcBasePath: sbp0, extRewr = 1, }]) => {
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

            if (extRewr) {
            ;

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












