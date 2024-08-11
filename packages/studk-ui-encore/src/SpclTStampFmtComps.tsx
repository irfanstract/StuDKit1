






/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'; ;






import {
  React ,
  toComponentMountKey,
  describeComponent ,
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
  mkClasses ,
  withExtraSemanticProperties,
  Button ,
  Span ,
  SingleChildDiv ,
  describeCallbackAssignedStyleProps ,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  getFullDocBodySrcBasedSvgDataUrl,
} from "studk-dom-util/src/SvgDocUrlFmt1.tsx" ;



import {
  PADDEDNUMERIC ,
  T_BY_HMS ,
  T_STRING ,
  T_WALLC_PROTAC ,
} from "studk-ui-core/src/TByHms.tsx" ;

export const EllapsedTValueC = (
  describeComponent(function EllapsedTValueCImpl({
    value: t, maxUnit: md,
  } : (
    { value: number, maxUnit: "minutes" | "hours" | "days", }
  )) {
    ;
    const hps = T_WALLC_PROTAC(+t.toFixed(3) ) ;
    
    return <span style={{ fontFamily: `math, serif`, display: "inline-block", }}>{ (
      React.createElement(React.Fragment, null, ...(
        util.reiterated(function* () {
          yield `"` ;
          yield PADDEDNUMERIC(Math.floor(60 * hps.sPos), 2 ) ;
    
          yield `'` ;
          if (md === "minutes") {
            yield `${Math.floor(t / 60 ) }`;
            return ;
          } else {
            yield PADDEDNUMERIC(Math.floor(60 * hps.mntPPos), 2 ) ;
          }
    
          yield ` ` ;
          yield <span>hr</span> ;
          if (md === "hours") {
            ;
            yield PADDEDNUMERIC(Math.floor(t / (60 * 60) ), 1 );
            return ;
          } else {
            ;
            yield `${Math.floor(60 * hps.hourPPos) }`;
          }
        })
        .toReversed()
      ))
    ) }</span> ;
  })
) ;





;









