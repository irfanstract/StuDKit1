












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
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'






;

import {
  React ,
  StudkReactJs,
  getSpaceSeparatedClassNameList,
  describeCallbackAssignedStyleProps, 
} from '#UiFwCore/util/ReactJsBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;










const withAddedReadmoreHrefAnnotation = (

  function (...[{ href, }, payload] : (
    [...(
      ArgsWithOptions<[], {
        href: string ,
      }>
    ), React.JSX.IntrinsicElements["div"]["children"] ]
  ) )
  {

    return (
      <a
      href={href}
      children={payload}
      />
    ) ;
  }
) ;

export {
  withAddedReadmoreHrefAnnotation ,
} ;


const WithAddedReadmoreHrefAnnotationC = (

  StudkReactJs.describeHtmlComponent((

    function CompWithAddedReadmoreHrefAnnotationC({
      children ,
      href ,
    } : (
      React.PropsWithChildren<{ href: string, }>
    ))
    {

      return (
        withAddedReadmoreHrefAnnotation({ href, } , children, )
      ) ;
    }
  ))
) ;

export {
  /** @deprecated */
  WithAddedReadmoreHrefAnnotationC ,
} ;

















