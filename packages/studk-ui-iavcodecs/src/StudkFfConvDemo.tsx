




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

        const [s0, setS] = (
          React.useState<{ taskId: number, whenResultAsUrl: Promise<string>, loggedFileRef: React.MutableRefObject<string>, } | null>(null )
        ) ;

        StudkReactJsEventTargets1.useEventEmitterListener(coreEngn, ["log", ({ message } ) => {
          if (s0) {
            const lr = s0.loggedFileRef ;
            lr.current = lr.current.replace(/\r?\n$/, () => "\r\n") ;
            lr.current += message.replace(/\r?\n$/, () => "\r\n") ;
          }
        }] , [
          coreEngn,
          s0 ,
        ] , {
          //
        } ) ;

        const logMsg1 = (
          StudkReactJsOvcUtil.useIntervalScan(() => (s0?.loggedFileRef.current || "" ) , {
            latencyMillis: 0.87 * 1000 ,
            getFallbackValue: () => null ,
          } )
        ) ;

        const [s, ] = (
          (
            StudkReactJs.useAsyncInterlacing<(
              | { readonly done: true, readonly previewVideoUrl: string, }
              | { readonly done: false, readonly error ?: never, }
              | { readonly done: false, readonly error : Error, }
              | 0
            )>(async function* () {
              C : {
                ;
                if (s0) {} else { break C ; }
                {
                  try {
                    ;
                    yield { done: false , } ;
                    ;
                    const url = (
                      await (
                        s0.whenResultAsUrl
                        .catch(z => {
                          if (z instanceof Error ) {
                            throw z ;
                          } else {
                            throw new TypeError(`Fatal Error ; Exception which is not an Error occured: ${String(z) }`) ;
                          }
                        })
                        .catch(z => (
                          1 ? throwException(z) :
                          throwNoResultBcuzExceptionOccuredException(z)
                        ))
                      )
                    ) ;
                    console["log"]({ url, }) ;
                    return { previewVideoUrl: url, done: true, } ;
                  } catch (z) {
                    return {
                      done: false,
                      error: (z instanceof Error ? z : util.throwTypeError() ) ,
                    } ;
                  }
                }
              }
              return 0 ;
            } , [s0] , {
              onResolverError: e => (
                console["error"](String(e) )
              ) ,
            } )
            ??
            { done: false, }
          )
          ||
          false
        ) ;
        const gpvHasStarted = !!s ;

        const { fmt, } = (() : { fmt: "mp4" | "webm" } => ({ fmt: "webm" }) )() ;

        const resetToLavfiRendering = (
          React.useCallback((...[mainCode = `testsrc2=duration=5.1` ]: [code: string] | [code ?: never]) => {
            const id1 = (
              util.L.random(20000, 1E6, false )
            ) ;
            const r0 = (
              (async () => {
                console["log"](`(taskid=${id1 }) beginning` ) ;
                await (
                  s0
                  &&
                  s0.whenResultAsUrl
                  .catch(e => console["info"](`(taskid=${id1 }) prior task (id=???) failed with:` , e ) )
                ) ;
                console["log"](`(taskid=${id1 }) starting core-pipeline run immediately` ) ;
                const fnm = "main" + ("." + fmt) ;
                await coreEngn.exec(["-loglevel", "verbose", "--help"] as const, 50 * 1000 , { } ) ;
                await (
                  coreEngn.exec([
                    "-loglevel", "verbose",
                    "-f", "lavfi", "-i", mainCode ,
                    ...([
                      //
                      /**
                       * if we insist on MKV/WEBM
                       * we shall avoid the autodetection because it'd crash for unidentified reasons
                       * (this doesn't happen for MP4)
                       * 
                       * see https://github.com/ffmpegwasm/ffmpeg.wasm/issues/679
                       * 
                       */
                      "-c:v", "libvpx",
                      "-c:a", "libvorbis",
                      fnm ,
                    ] as const ) ,
                  ] as const, 50 * 1000 , { } )
                ) ;
                console["log"](`(taskid=${id1 }) successful conv` ) ;
                const fO = await coreEngn.readFile(fnm, ) ;
                console["log"](`(taskid=${id1 }) successful readback` ) ;
                if (typeof fO === "string") { return util.throwTypeError() ; }
                const fOAsUrl = (
                  toBlockDataUrl({
                    contentType: "video/" + fmt ,
                    dataInBytes: fO ,
                  })
                ) ;
                console["log"](`(taskid=${id1 }) successful` ) ;
                // TODO
                // setS(() => ({ whenResultAsUrl: Promise , })) ;
                return util.asConst({ fOAsUrl }) ;
              })()
            ) ;
            setS(() => ({
              taskId: id1,
              loggedFileRef: { current: "", } as React.MutableRefObject<string> ,
              whenResultAsUrl: r0.then(e => e.fOAsUrl ) ,
            })) ;
          } , [
            coreEngn ,
          ] )
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

          previewE: (
            <video
            {...(
              s ?
              (
                s.done ?
                { title: `preview`, src: s.previewVideoUrl , controls: true, }
                : { title: `preview (${!!s.error ? `failed` : `still loading` })`, controls: true, }
              )
              :
              { title: `preview (none yet)`, controls: false, }
            )}
            loop
            style={{
              /* we deliberately */
              minWidth   : `20ex`,
              minHeight  : `10ex`,
            }}
            />
          ) ,

          regen ,

          gpvHasStarted ,

          error: (s && (!s.done && (s.error && String(s.error) ) ) ) || null ,
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
            error,
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






















