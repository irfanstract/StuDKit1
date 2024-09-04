






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
  ArgsWithOptions ,
} from 'studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs'; ;


import {
  Point2D ,
} from "studk-util/src/math/point-all.mjs" ;






import * as React from "react" ;
import { Component, } from "react" ;






class CFa extends Component<React.PropsWithChildren<{ onException ?: (evt: Error) => void }> , { } >
{

  // constructor(...s) {}

  render() {
    return (
      this.props.children
    ) ;
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const { onException: onExceptionArg, } = this.props ;
    if (onExceptionArg) {
      return onExceptionArg(error) ;
    }
    throw error ;
  }

}

/**
 * 
 * @deprecated
 * 
 */
class CFaBku extends Component<React.PropsWithChildren<{ }> , { errs ?: readonly Error[] } >
{

  // constructor(...s) {}

  render() {
    if (((this.state ?? {}).errs ?? [] ).length <= 0 ) {
      ;
      return (
        this.props.children
      ) ;
    } else {
      return (
        <div
        style={{
          background: `rgb(192 0 0)` ,
          color: "black",
        }}
        >
          <p>
            <strong>
            (<span>!! Component Rendering Broken!!</span>: <code>{ String((this.state ?? {} ).errs ?? [] ) }</code> )
            </strong>
          </p>
          <p>
            <button
            type='button'
            onClick={() => this.setState(() => ({ errs: [], }) )}
            >
              Clear Error
            </button>
          </p>
        </div>
      ) ;
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState(s => ({ ...(s ?? {} ) }) ) ;
    this.setState(({ errs: errs0 = [] , }) => ({
      errs: [error] ,
    }) ) ;
  }

}

export {
  CFa as CFa ,
  CFaBku as CFaBku ,
} ;


















