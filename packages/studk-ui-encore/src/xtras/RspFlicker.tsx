










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
  EitherPropertyOf, 
  Extend,
  RequiredPartially,
} from 'studk-fwcore/src/util/C1.ts'



;

;

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  useDeferredAndTransitionalValue,
} from 'studk-ui-fwcore/src/reactjs/helpers/UseUncontrolledInputsAsControlledComponents1.tsx';

import * as ReactSpringsDom from "@react-spring/web" ;











export const RspFlickerC = (

  StudkReactJs.describeHtmlComponent((
    function RspFlickerCImpl({ xRef, } : { xRef: React.Ref<{ start(): void, } > } )
    {

      const [A, _ ] = (
        React.useState(() => (
          new ReactSpringsDom.SpringValue<number>(0)
        ))
      ) ;

      React.useImperativeHandle(xRef , () => ({
        // 
        start: () => {
          A.start(1) ;
          A.start(0) ;
        } ,
      }) , [
        A ,
      ] ) ;

      return (
        <ReactSpringsDom.animated.p
        // ref={A }
        children="animating"
        style={{
          background: "black" ,
          color : "wheat",
          opacity: A ,
        }}
        />
      ) ;
    }
  ))
) ;























