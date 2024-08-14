








import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1'; ;






import * as React from "react" ;



/**
 * invoke the code on `@/appInternalScripts/env` .
 * needs to make the module define-and-export a Client Component and put the exported Component into display ;
 * otherwise the setup-code will never run in Client Side
 * 
 */
import { EnvTsxMainDummyC, } from "@/appInternalScripts/env" ;


import {
  pagesConventions,
  describeHeadlinedWidget ,
} from "@/appInternalScripts/appPagesConvention"; ;




import {
  WithOverlaySupportC,
} from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;

const WOSC : React.JSXElementConstructor<React.PropsWithChildren> = (
  function WOSComp({ children, })
  {
    return (
      <WithOverlaySupportC>
        { children }
      </WithOverlaySupportC>
    ) ;
  }
) ;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="en" style={{ }}>
      { /** see the `import ... from "@/appInternalScripts/env"` LOC above */ <EnvTsxMainDummyC /> }
      <body
      className={(
        [
        ]
        .join(" ")
      )}
      style={{
        padding: 0,
        margin: 0,
        maxWidth: `100vw`,
        overflowX: "clip",
      }}
      >
        <WOSC>
          
          <div>
          { children }
          </div>
        </WOSC>
      </body>
    </html>
  ) ;
}






