





/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;

type FullDocHref = `${Location["origin"]}${Location["pathname"]}` ;

type BrowsibleHref = Location["href"] ;

type LinkableHref = HTMLAnchorElement["href"] & {} ;






;

class UrlAction
{
  constructor (
    public readonly method  : Request["method"] ,
    public readonly href    : LinkableHref ,
  ) {}
}

class SynchronousCallbackAction
{
  constructor (
    public readonly runMain : SynchronousCallbackAction.CbImpl
    ,
  ) {}
}

namespace SynchronousCallbackAction { ; }
namespace SynchronousCallbackAction
{
  export interface CbImpl {
    (e: (
      // | Event
      | React.SyntheticEvent
    ) ): void ;
  }
}

class DisabledBtnActionReprImpl {}

class NoOpActionReprImpl {}

const disabledButtonAction = (new DisabledBtnActionReprImpl ) ;

const noOpAction = (new NoOpActionReprImpl ) ;

export {
  UrlAction ,
  SynchronousCallbackAction,

  disabledButtonAction ,
  noOpAction,
  /** @deprecated */
  DisabledBtnActionReprImpl ,
  /** @deprecated */
  NoOpActionReprImpl ,
} ;




function getAction1(href: LinkableHref | SynchronousCallbackAction.CbImpl | null | false )
{
  return (
    (typeof href === "string") ?
    (
      new UrlAction("GET", href)
    )
    :
    (typeof href === "function") ?
    (
      new SynchronousCallbackAction(href)
    )
    :
    (href === false) ?
    (
      disabledButtonAction
    )
    :
    noOpAction
  ) ;
}

export { getAction1 as translateCommonJsxAction, } ;











