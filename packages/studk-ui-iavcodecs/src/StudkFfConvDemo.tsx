




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

const throwException = (
  (z: Error) => { throw z ; }
) ;

const throwNoResultBcuzExceptionOccuredException = (
  (z: Error) => (
    util.throwTypeError(`no result, exec failed: ${String(z) }` , { cause: z , })
  )
) ;






;

import {
  React ,
  toComponentMountKey,
  describeComponent ,
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
  mkClasses ,
  withExtraSemanticProperties,
  Button ,
  Span, 
  StudkReactJs,
  StudkReactJsEventTargets1,
  StudkReactJsOvcUtil,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;



const toBlockDataUrl = (

  function <const mmt extends string>(...[{ contentType, dataInBytes: fO, }] : (
    ArgsWithOptions<[], {
      readonly contentType: mmt ,
      readonly dataInBytes: (
        // [mmt] extends [`text/${infer subTT extends string}`] ?
        // string
        // :
        (Uint8Array | Uint8ClampedArray)
      ) ,
    }>
  ))
  {
    ;

    return (
      `data:${contentType };base64,${btoa([...fO].map(b => String.fromCharCode(b) ).join("") ) }`
    ) ;
  }
) ;

import { createFfConv , } from "./StudkFfConv.tsx" ;
import { FFmpeg } from '@ffmpeg/ffmpeg';








import {
  useFfAvConvGpv ,
  useFfAvConvGpvExt ,
} from "studk-ui-iavcodecs/src/StudkFfConvGpv.tsx";

const StudkFfConvDemoC = (
  StudkReactJs.describeHtmlComponent((

    function StudkFfConvDemoCImpl()
    {

      const res = (
        (
          StudkReactJs.useAsyncResolution(async () => {
            ;
            if (typeof window !== "undefined") {
              ;
              const [ , { ap, whenApReady, } ] = createFfConv() ;
              return (
                await (
                  (async () => (await whenApReady, ap ) )()
                )
              ) ;
            } else {
              return ""
            }
          } , [] , {
            onResolverError: e => (
              console["error"]("" + e)
            ) ,
          } )
        )
        ||
        null
      ) ;

      return (
        res ?
        <div>
          <p>
            StudkFfConvDemoC
          </p>
          <StudkFfConvDemoInnerC
          res={res}
          />
        </div>
        :
        <></>
      ) ;
    }
  ))
) ;

const StudkFfConvDemoInnerC = (
  (() => {

    const useSpclRec = (

      function (...[coreEngn] : [coreEngn: FFmpeg] )
      {

        const {
          logMsg1 ,
          gpvHasStarted ,
          errorsInfo,
          previewE ,
          resetToLavfiRendering ,
        } = (
          useFfAvConvGpvExt(coreEngn)
        ) ;

        const regen = (
          React.useCallback(() => (
            resetToLavfiRendering(`testsrc2=duration=5.1` )
          ) , [
            coreEngn ,
          ] )
        ) ;

        return {
          //
          logMsg1,

          previewE ,

          regen ,

          gpvHasStarted ,

          ...errorsInfo ,
        } as const ;
      }
    ) ;

    return (
      StudkReactJs.describeHtmlComponent((
    
        function StudkFfConvDemoInnerCImpl(props : (
          { res: FFmpeg, }
        ))
        {
          const { res, } = props ;

          const {
            //
            logMsg1,
            previewE ,
            regen ,
            gpvHasStarted ,
            errorMsg: error,
          } = (
            useSpclRec(res)
          ) ;
    
          return (
            <div>
              <p>
                Using The StudkFfConvDemoC
              </p>
              { error && (
                <div
                style={{
                  maxBlockSize: `7em`,
                  overflow: "auto" ,
                  background: "yellow",
                  color: "red",
                  border: `0.1ex solid red`,
                }}
                >
                <p>
                  <b>
                  Error Occured In The Way: {}
                  { <code children={error } /> }
                  </b>
                </p>
                <pre>
                  { logMsg1 }
                </pre>
                </div>
              ) }
              { gpvHasStarted ? (
                <figure children={previewE} />
              ) : null }
              <StudkReactJs.ButtonC
              children={`Regenerate Preview`}
              onClick={() => regen() }
              />
            </div>
          ) ;
        }
      ))
    ) ;
  })()
) ;



export {
  StudkFfConvDemoC ,
} ;






















