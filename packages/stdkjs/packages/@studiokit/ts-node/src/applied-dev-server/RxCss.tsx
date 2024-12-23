



// /* @jsxRuntime classic */
// /* @jsx classic */




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







type MutableCSSProps<dmmy1=never, dmmy2=never, C = React.CSSProperties> = (

  { [k in keyof C]?: C[k]; }
) ;

import {
  React ,
  ReactDOM ,
  ReactDOMServer ,
} from "./util-ws" ;



const exportCss = (

  function (...[code]: [code: string])
  {

    if (typeof window !== "undefined") {
      if (typeof document !== "undefined") {
        document.head.appendChild(document.createElement("style") ).textContent = code ;
      }
    }

  }
) ;

const describeInitEdInlineCssProps = (

  function (...[x]: [x: (x: MutableCSSProps ) => void])
  {

    const props = (

      ((): React.CSSProperties => {
        const c = (new Object) as MutableCSSProps ;
        x(c) ;
        return { ...c } ;
      })()
    ) ;

    return props ;
  }
) ;

const stringifyInlineCssInit = (

  function (...[x]: [x: (x: MutableCSSProps ) => void])
  {

    const props = (
      
      describeInitEdInlineCssProps(x)
    ) ;

    return (
      stringifyInlineCssProps(props)
    ) ;
  }
) ;

const stringifyInlineCssProps = (

  function (...[x]: [x: React.CSSProperties])
  : string
  {

    if (typeof window !== "undefined" || typeof document !== "undefined") {

      if (typeof document !== "undefined") {

        const d = document.createElement("div") ;
        Object.assign(d.style, x ) ;
        return (
          d.getAttribute("style") ?? ""
        ) ;
      }
    }

    {

      return (

        /** use `renderToStaticMarkup`, not `renderToString` */
        ReactDOMServer.renderToStaticMarkup((
          <div
          style={x}
          />
        ))
  
        .match(/^<div\s+style="(.*?)"/)![1]!
  
      ) ;
    }
  }
) ;


export {
  exportCss ,
  describeInitEdInlineCssProps ,
  stringifyInlineCssInit  ,
  stringifyInlineCssProps ,
} ;





















