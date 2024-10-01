









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
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'







;

import * as React from "react" ;


import {
  describeComponent,
} from '#UiFwCore/ReactComponentDef.tsx'; ;

import {
  CFaBku ,
} from "#UiFwCore/reactjs/helpers/CFa.tsx" ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from '#UiFwCore/ReactHtmComponentDef.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  SingleChildDiv,
} from "studk-ui/src/xst/prefabs/studkdem-esingulardiv.tsx"; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

// import Link from "next/link" ;

import {
  describeCallbackAssignedStyleProps,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;

;






;

export const AccrdListC = (
  describeHtmlComponent((
    function AccordionCImpl({ children, } : React.PropsWithChildren)
    {
      ;
      
      return (
        <div>
          <ul
          className='studk-ui-accrdnlc'
          >
            { (
              React.Children.toArray(children)
              .map((e, i) => (
                <CFaBku
                key={i}
                children={e }
                />
              ))
            ) }
          </ul>
        </div>
      ) ;
    }
  ))
) ;

;







import "studk-ui-encore/src/PaginatedUi/wl.scss" ;








