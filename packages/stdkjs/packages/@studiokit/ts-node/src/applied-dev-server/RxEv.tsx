
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

;





;



;
/**
 * Another Engine For Converting Arbitrary Value(s) Into JSX-ible Value(s) To Work-Around "cannot render objects as children"
 * 
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

                tryRxRenderAsJsx(codeReturnValue)
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

/**
 * Converting Arbitrary Value(s) Into JSX-ible Value(s) To Work-Around "cannot render objects as children"
 * 
 */
function tryRxRenderAsJsx<T>(...[e0]: [e: T])
: unknown
{

  let e: unknown = e0 ;

  if (e) {
    ;

    /**
     * beware the ordering implied by these sequence
     * 
     */
    void 0 ;

    if (e instanceof Map) {
      e = Immutable.Map(e.entries() ) ;
    }

    if (Immutable.isMap(e) ) {
      e = (
        e
        .map(v => tryRxRenderAsJsx(v) )
        .mapKeys(v => tryRxRenderAsJsx(v) )
      ) ;
    }

    if (Array.isArray(e) || Immutable.isList(e) || Immutable.isIndexed(e) ) {
      ;
      e = (
        Immutable.Seq([...e])
        .map((v, ) => (
          tryRxRenderAsJsx(v)
        ) )
      ) ;
    }

    ;
    if (Immutable.isCollection(e) ) {
      ;
      e = (
        e
        .map((v, k) => {

          return (
            <React.Fragment
            key={(typeof k === "number" || typeof k === "string") ? k : undefined}
            children={(
              <>{k } <code>=&gt;</code> {v}</>
            )}
            />
          ) ;
        })
        .valueSeq()
      ) ;
    }

  }

  e = (
    e
    ?? String(e)
  );

  if (!(Object(e) === e) || React.isValidElement(e) ) {
    return e ;
  } else {
    ;

    if (e === e0 ) {
      ;
  
      if ((
        e
        &&
        (Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype )
      ) ) {
        e = (
          JSON.stringify(e, null, 2 )
          // .replace(/\s+/g, () => " " )
        ) ;
      }
  
      ;
    }
  
    if ((
      // (
      //   ((typeof e === "object" || typeof e === "function" ) /** it didn't outrule `null` */ && e )
      //   &&
      //   (e === e0 )
      // )

      (
        (e === e0 )
      )
    ) ) {
      return (
        React.createElement("p", {}, `cannot render element:`, (
          React.createElement("code", {}, (
            `${String(e) }`
          ) )
        ) )
      ) ;
      //
    } else {
      return e ;
    }

  }

  return e ;
}



export {
  RxEv ,
  tryRxRenderAsJsx ,
} ;









