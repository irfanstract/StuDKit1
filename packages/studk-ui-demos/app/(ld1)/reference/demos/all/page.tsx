









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

import {
  random,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






;

import {
  React ,
  StudkReactJs ,
  toComponentMountKey, 
  getSpaceSeparatedClassNameList,
  Button ,
  Span ,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;

export default function App()
{
  ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          Demos Of `studk-ui`
        </span>
      ) ,
      children: (
        <div>
          <p>
            Long Text Doc With Graphical Overlays
          </p>
          <nav>
            <Button onClick={() => {}}>
              some things
            </Button>
            <Button onClick={"data:text/javascript,void"}>
              some JS
            </Button>
            <Button onClick={null}>
              no-op
            </Button>
            <Button onClick={false}>
              whoop
            </Button>
          </nav>
          <p>
            <span>
              <Span onClick={"data:text/javascript,text"}>Short Text Doc</Span>
              and
              <Span onClick={() => {} }>Long Text Doc</Span>
            </span> {}
            With {}
            <Span onClick={false}>
            Graphical Overlays
            </Span>
          </p>
          { null && <LDCWGOC /> }
          { null && (
            <AudioNodeBeepDemo />
          ) }
          { true && (
            <DiscogrDemoC />
          ) }
          { true && (
            <ThreeReactJsDemoC />
          ) }
          { true && (
            <TArmsDemoC />
          ) }
          { true && (
            <ThreeReactJsNavigaDemoC />
          ) }
          { ((e: React.ReactElement) => {
            return null ;
          } )((
            <I3DDemoC />
          )) }
          { ((e: React.ReactElement) => {
            e = (
              <AsResettibleBlockC
              children={e}
              />
            ) ;
            return e ;
          } )(
            <TimeDomainedMultiChnlInspectiveFigureC
            />
          ) }
          <div>
            <div style={{ blockSize: `50vh`, border: `1px solid blue`, }} >
              &nbsp;
            </div>
            <div style={{ blockSize: `50vh`, border: `1px solid black`, }} >
              &nbsp;
            </div>
          </div>
        </div>
      ) ,
    })
  ) ;
} ;

const AsResettibleBlockC = (
  function AsResettibleBlockCImpl({ children, } : React.PropsWithChildren)
  {
    const [c, setC] = (
      React.useState<number>(1)
    ) ;
    const runIncrButtonAction = (
      function () {
        setC(c => c + 1) ;
      }
    ) ;
    const resetBtn = (
      <button
      type="button"
      children={`Reset`}
      onClick={e => runIncrButtonAction() }
      />
    ) ;
    return (
      <React.Fragment
      key={c}
      children={(
        <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
        }}
        >
          <div>
          { children }
          </div>
          <div>
          <p>
            { resetBtn }
          </p>
          </div>
        </div>
      )}
      />
    ) ;
  }
) ;

import LDCWGOC from "@/components/spcl/longTextDocWithGraphicalOverlaysDemo"; ;

import TbmcDemoImpl from "studk-ui-encore/src/xtras/tbmcdemo.tsx" ;

function TbmcDemo()
{
  return <TbmcDemoImpl /> ;
  return <div /> ;
}

import {
  I3DDemoC ,
} from "studk-ui-encore/src/StI3dPresenters/I3DDemoC.tsx" ;

import {
  ThreeReactJsDemoC,
} from "studk-ui-encore/src/ThreeReactJsUi/trdemo.tsx" ;

import {
  ThreeReactJsNavigaDemoC,
} from "studk-ui-encore/src/ThreeReactJsUi/trnavigade" ;

import {
  TArmsDemoC ,
} from "studk-ui-encore/src/ThreeReactJsUi/tarm.tsx" ;

import AudioNodeBeepDemiImpl from "@/components/spcl/rAudioNodeCtxBeepDemo"; ;

function AudioNodeBeepDemo()
{
  return <AudioNodeBeepDemiImpl /> ;
  return <div /> ;
}

import { DiscogrDemoC as DiscogrDemoImpl, } from "@/components/spcl/spHitsMeAppDiscogrDemo"; ;

function DiscogrDemoC() {
  return (
    <DiscogrDemoImpl />
  ) ;
}

import {
  TimeDomainedMultiChnlInspectiveFigureC ,
} from "studk-ui-encore/src/SequencedMediaUi/TimeDomainBreakthruUi.tsx" ;











