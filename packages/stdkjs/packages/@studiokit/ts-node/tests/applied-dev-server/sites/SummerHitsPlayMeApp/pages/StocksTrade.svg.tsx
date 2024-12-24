





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
} from '@studiokit/ts-node/dist/util';

// import {
//   once1 ,
//   L ,
//   inspect ,
//   parseUrl ,
//   Dispatch ,
// } from "./util-alt" ;






import React = require("react");

import ReactDOM = require("react-dom");

import ReactDOMServer = require("react-dom/server");






const gPlot = (
  //
  <g>
    { (
      Immutable.Seq(utilReiterated(function* (): Iterable<{ x: number, y: number, gsz: number }> {
        ;
        yield { x: 0, y: 1.000, gsz: 0.345, } ;
        yield { x: 1, y: 2.000, gsz: 0.345, } ;
        yield { x: 2, y: 3.000, gsz: 0.345, } ;
        yield { x: 3, y: 2.333, gsz: 0.345, } ;
        yield { x: 4, y: 1.666, gsz: 0.345, } ;
        yield { x: 5, y: 1.000, gsz: 0.345, } ;
        yield { x: 6, y: 2.000, gsz: 0.345, } ;
        yield { x: 7, y: 3.000, gsz: 0.345, } ;
        yield { x: 8, y: 4.000, gsz: 0.345, } ;
      } ))
      .toOrderedMap()
      .map(({ x, y, ...dat }) => ({
        x, y,
        gsz: dat.gsz ,
      }) )
      .map(({ x, y, gsz, } , k ) => {

        return (
          <circle
          fill={"#606060"}
          cx={x}
          cy={y}
          r={gsz}
          />
        ) ;
      } )
      .map((e , k ) => {

        return (
          <React.Fragment
          key={k}
          children={e}
          />
        ) ;
      } )
      .toArray()
    ) }
  </g>
) ;

export = (

  ReactDOMServer.renderToStaticMarkup((

    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    >

      <g
        transform={`translate(80, 160) scale(1, -1) `}
      >
        <g>
          <rect
          fill="yellow"
          x={0}
          y={0}
          width={180}
          height={80}
          />
        </g>

        <g
        transform={`scale(15, 15) `}
        >
          { gPlot }
        </g>
      </g>

    </svg>
  ))
) ;





