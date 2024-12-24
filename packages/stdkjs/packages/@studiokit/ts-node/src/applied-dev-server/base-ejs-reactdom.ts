
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







import {
  rxMustSpecialcaseExceptions ,
} from "./appfmt-rx" ;






function makeSpclEjsResponseStarter(...[respo, ]: ArgsWithOptions<[respo: Express.Response,], { }>)
{

  function setResponseNfStatusCode()
  : void
  {
    respo.status(404 ) ;
  }

  function setResponseNfOrDeniedStatusCode()
  : void
  {
    respo.status(404 ) ;
    respo.statusMessage = `Denied` ;
  }

  function warnSpecialcasedFileNotFoundException(...[error]: [error: any])
  {
    ;
    void ( console["warn"](`Special-Cased FIle-Not-Found-Exception:`, String(error) ) ) ;
  }

  function runHtmlTypedFileNotFoundErrorResponse(...[error]: [error: any])
  {
    ;
    setResponseNfOrDeniedStatusCode() ;
    respo.setHeader('content-type', 'text/html');
    respo.send(
      `<div style="
        float: inline-start;
        position: sticky;
        inset-block-start: 0;
        inset-inline-start: 0;
        block-size: 100%;
        z-index: 32000 ;
        backdrop-filter: blur(0.1ex) ;
      ">
      <p><span style="font-size: 2em ;">🚫</span>
      </p>
      </div>
      <div style="
        position: sticky;
        inset-block-start: 0;
        inset-inline-start: 0;
        z-index: 2000 ;
        backdrop-filter: blur(0.1ex) ;
      ">
      <h1>Not a Public Page</h1>
      </div>
      `
      +
      `<p><u>this path does not name a public page. <br/> please make sure the path is properly-spelled.</u></p> <pre>${String(error) }`); 
  }

  async function startRawFileResponse(...[v0, { ...opts }]: ArgsWithOptions<[finalCont: {},  ], (Parameters<typeof runRawFileResponse01>[1] & {} ) >)
  {

    let v1: {} = v0;

    v1 = (
      (v1 instanceof Blob || v1 instanceof (globalThis.Response) ) ?
      /** Express can't directly handle {@link Blob}; convert to Buffer first */
      (await v1.arrayBuffer() ) :
      v1
    ) ;

    return (
      runRawFileResponse01(v1, { ...opts, })
    ) ;
  }
  ;

  function runRawFileResponse01(...[v0, { mTypeV: mimeTypeV = "application/octet-stream", wasNf = false, }]: ArgsWithOptions<[finalCont: {},  ], { mTypeV: string, wasNf?: boolean, }>)
  {

    let v1: {} = v0;

    v1 = (
      (typeof v1 === "boolean" || typeof v1 === "number") ?
      String(Number(v1) ) :
      v1
    ) ;

    /**
     * disabled for now since
     * we should generally leave it to Express (ie implied assigmt of `Content-Encoding`, etc)
     * 
     */
    if (0) {

      v1 = (
        (typeof v1 === "string") ?
        Buffer.from(v1 , "utf8") :
        v1
      ) ;

    }

    ;
    v1 = (
      (v1 instanceof ArrayBuffer ) ?
      new Uint8Array(v1) :
      v1
    ) ;

    ;
    v1 = (
      (v1 instanceof Uint8Array || v1 instanceof Uint8ClampedArray ) ?
      Buffer.copyBytesFrom(v1) :
      v1
    ) ;

    // v1 = (
    //   (typeof v1 === "boolean" || typeof v1 === "number") ?
    //   String(Number(v1) ) :
    //   (v1 instanceof ArrayBuffer ) ?
    //   /** Express can't directly handle {@link Blob}; convert to Buffer first */
    //   (((e: ArrayBuffer) => (Buffer.copyBytesFrom(new Uint8Array(e ) ) ) )(await v1.arrayBuffer() ) ) :
    //   v0
    // ) ;

    respo.status(200);
    if (0 && wasNf) {
      setResponseNfOrDeniedStatusCode() ;
    }

    respo.setHeader("content-type", (
      mimeTypeV
    )) ;

    respo.send((
      v1
    )) ;
  }
  ;

  function runModelledJsonResponse(...[returnObj, { wasNf = false, } = {}]: ArgsWithOptions<[finalCont: {} | null,  ], { wasNf?: boolean, }>)
  {

    respo.status(200);
    if (0 && wasNf) {
      setResponseNfOrDeniedStatusCode() ;
    }

    return (
      /**
       * unftntely, this will omit the commts in
       * 
       */
      respo.send((
        JSON.stringify(returnObj)
      ))
      ,
      void 0
    ) ;
  }
  {}

  function runHtmlTypedReactJsxResponse(...[finalCont, cde = 200]: [finalCont: React.ReactElement | React.ReactPortal, cde: number ])
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
            if (rxMustSpecialcaseExceptions.isFileNotFoundException(error) ) {
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
            if (cde === 404) {
              ;
              setResponseNfOrDeniedStatusCode() ;
            } else {
              ;
              respo.status(cde) ;
            }
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
    respo.send('<h1>Unexpected Failure</h1>' + `<p>Unexpected Failure</p> <pre>${getStackOrMessage(error) }`); 
  }

  return {
    //

    /** Raw JSON (not HTML-ized!) */
    runModelledJsonResponse,
    /** `async` */
    startRawFileResponse ,
    runRawFileResponse01,

    runHtmlTypedInternalServerErrorResponse ,
    runHtmlTypedFileNotFoundErrorResponse ,
    runHtmlTypedReactJsxResponse ,

    warnSpecialcasedFileNotFoundException ,

    setResponseNfOrDeniedStatusCode ,
    setResponseNfStatusCode ,

  } as const ;
}

export {
  makeSpclEjsResponseStarter ,
} ;













