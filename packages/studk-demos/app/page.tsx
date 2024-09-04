
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
      <p>
        <Link href="/i3d" >I3D</Link>
      </p>
      <p>
        <Link href="/iaud" >IAud</Link>
      </p>
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




import JsxLivingroomCornerBallFigure from "@/components/jsxLivingroomCornerBallFigure" ;








