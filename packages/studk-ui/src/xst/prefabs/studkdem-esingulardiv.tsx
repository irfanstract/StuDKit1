
/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets just call for having `"use client"` placed everywhere possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  once ,
} from "lodash-es" ;






import * as React from "react" ;





// import Link from "next/link" ;







export { SingleChildDiv, } from "studk-ui/src/meta/react/d1cd-dscd.tsx" ;






