



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







import {
  React ,
  ReactDOM ,
  ReactDOMServer ,
} from "./util-ws" ;

[Object] ;

delete require.cache[require.resolve('./RxCss') ] ;

import {
  exportCss ,
  stringifyInlineCssInit ,
  stringifyInlineCssProps ,
} from "./RxCss" ;

const SemanticNbspC = (

  function ()
  {
    return (
      <span
      style={{
        userSelect: "none",
      }}
      children={"\u00A0"}
      />
    );
  }
) ;








export const CoreErrorBlockC = (

  function CoreErrorBlockCImpl({ title: title, body: bodyElem, } : (
    & { title: (React.ReactElement | string | number ) | null , }
    & { body: React.ReactNode & {} , }
  ))
  {

    const mainDiv = (
      <div
      style={{
        // color: `red` ,
      }}
      >
      {/*  */}
      <NoEntryBlockC
      />
      <div style={{
        float: "inline-start",
        position: "sticky",
        insetBlockStart: 0,
        insetInlineStart: 0,
        // blockSize: `100%`,
        blockSize: `100vh`,
        zIndex: 32000 ,
        backdropFilter: `blur(0.991ex)` ,
        backgroundColor: "canvas",
      }}>
      <p><span style={{ fontSize: `2em`, }} children={`🚫`}/>
      </p>
      </div>
      <div style={{
        position: "sticky",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: 2000 ,
        backdropFilter: `blur(0.991ex)` ,
        contain: `layout`,
      }}>
        { title && (
          <h1
          style={{
            fontSize: `1.6em`,
          }}
          children={title}
          />
        ) }
        <NoEntryBlockC
        />
      </div>
      <div>
        { bodyElem }
      </div>
      <div
      style={{
        //
        blockSize: `100vh`,
      }}
      children={"\u00A0"}
      />
      </div>
    ) ;

    return (

      <div
      className={`studk-xbo`}
      style={{
      }}
      children={(
        //
        <div
        style={{
          // flex: `0 1 32em`,
          // color: `red` ,
          position: "relative",
          border: `0.1ex solid red`,
        }}
        children={mainDiv }
        />
      )}
      />
    ) ;
  }
) ;

exportCss((
  `
  .studk-xbo {
    ${stringifyInlineCssProps({
      display: "flex",
      flexDirection: "row",
      justifyItems: "center",
    }) }

    & > * {
      flex: 0 1 32em ;
    }
  }
  `
)) ;

const NoEntryBlockC = (

  function ()
  {

    return (

      <div
      style={{
        background: `repeating-linear-gradient(129deg, #fad717 0ex, #fad717 1ex, black 1ex, black 2ex)` ,
        display: "block",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust      : "exact",
      }}
      children={(
        // SemanticNbspC
        <SemanticNbspC
        />
      )}
      />
    ) ;
  }
) ;

export const CoreFnfC = (

  function CoreFnfCImpl()
  {

    return (
      <CoreErrorBlockC
      title={<>Not a Public Page</>}
      body={(
        <>
        <p>This Page Is Not Available For You; Access Denied.</p>
        <p>Make Sure (1) The Path (In The Clicked Link) Is Properly Spelled, And (2) You Had Sufficient Permission To Access This Path.</p>
        </>
      )}
      />
    ) ;
  }
) ;














