
import * as React from "react" ;







export default function App() {
  ;
  const c = (
    <div>
      <h1>
        This is StuDK!
      </h1>
      <p>
        This is StuDK!
      </p>
      <figure>
        <JsxLivingroomCornerBallFigure />
      </figure>
      <figure>
        <I3DDemo />
      </figure>
      <p>
        This is StuDK!
      </p>
    </div>
  ) ;
  return (
    <div style={{ display: "block flow-root", paddingBlock: "2em 3em", paddingInline: "1em 3em", minBlockSize: "45em" }} >
        { c }
    </div>
  ) ;
} ;




import dynamicComponent from "next/dynamic";

import Link from "next/link";




// import mainOtfUrl from "otf-export/otfDemo.mjs" ;

// console.log({ mainOtfUrl, }) ;

import JsxLivingroomCornerBallFigure from "@/components/jsxLivingroomCornerBallFigure" ;

import { I3DDemo, } from "@/components/jsxI3DDemo";

// const KIFF = (() => {
//   ;

//   const l = () => {
//     ;
    
//     const {
//       font ,
//       fontFamilyName ,
//       intendedFName ,
//     } = generateMainOtf({ dts: Date.now() }) ;

//   }
// })() ;







