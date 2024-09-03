





import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';






;

const PRD = (
  Date.now()
) ;

import * as React from "react" ;

import * as RDC from "react-dom/client" ;







;

import cntnt from "./m1" ;

void (
  RDC.createRoot(document.querySelector(`#root`)! , {} )
  .render((
    <div>
      <h1>
        <code>studk-audio-tpg</code>
      </h1>
      <pre>
        { cntnt }
      </pre>
      <p>
        good, the setup is 70% complete, {}
        <code>studk-audio-tpg</code> {}
      </p>
      <aside>
        <p>
          page loaded at {}
          <i>{ new Date(PRD).toLocaleString() }</i>. {}
        </p>
      </aside>
    </div>
  ))
) ;










