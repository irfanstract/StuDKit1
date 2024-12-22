




import React = require("react");

import ReactDOM = require("react-dom");

import ReactDOMServer = require("react-dom/server");






export = (

  ReactDOMServer.renderToStaticMarkup((

    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    >
      <rect
      fill="yellow"
      x={80}
      y={80}
      width={180}
      height={80}
      />
    </svg>
  ))
) ;





