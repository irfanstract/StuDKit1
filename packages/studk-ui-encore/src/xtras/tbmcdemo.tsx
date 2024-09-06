
/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets just have `"use client"` wherever possible
 * 
 * */
"use client" ;




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
  describeWorksheet ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/meta/react/dbc.tsx'; ;





import { SpclCoreC, } from "studk-ui/src/tabularUi/reactjs/tbmc.tsx" ;

export default (
  describeComponent(function TimeTableMC() {
    ;
    const horizonConfig = React.useMemo(() => ({
      range: {
        startPos: -5 ,
        endPos: 5 ,
      } ,
    }) , [] ) ;
    return (
      <div>
        <p>
          Timeline
        </p>
        { describeWorksheet({
          children: (
            <div>
              <p>
                showing horizon in range <code>{ JSON.stringify(horizonConfig.range) }</code>
              </p>
              { describeWorksheet({
                children: (
                  <SpclCoreC
                  horizonConfig={horizonConfig}
                  />
                ) ,
              }) }
            </div>
          ),
        }) }
      </div>
    ) ;
  })
) ;

;












