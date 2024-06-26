









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

import * as React from "react" ;






import {
  pagesConventions,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  describeHeadlinedArticle ,
  describeWorksheet ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  Span ,
  Button ,
} from 'studk-ui/src/xst/dbc.tsx'; ;

;




;

import {
  MspStackingC ,
  MspPhrasalBlockC ,
  MspPhrasalTextColC ,
  BackgroundedAdvBlockC ,
  PicturingAdvBlockC ,
  describeUrlIcoApplet, 
  describeSvgApplet,
  describeViewboxedSvgApplet ,
  XH,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-textblocks-b.tsx'; ;

import {
  BlockLvlSvgC ,
  InlineLvlSvgC ,
} from 'studk-ui/src/xst/svgd.tsx'; ;

import {
  describeByCssStringStyleProps,
  describeCallbackAssignedStyleProps, 
  withCssStringApplied,
  withPresentationalGoodiesApplied,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd-adv.tsx'; ;

import {
  getGsSharpenFltUrl,
  getSvgFilterAsCssFilterUrlFast ,
} from 'studk-ui/src/xst/cssFilterUrl.tsx'; ;

import {
  ImgListC ,
} from "studk-ui-encore/src/ShowBizUi/ImgListUi.tsx" ;


export namespace SPHMEA
{
  export function renderSpclResized(...[srcE]: [ React.ReactElement])
  {
    return (
      <div
      className='studk-sbzi-vinylgramdiv'
      style={(
        describeCallbackAssignedStyleProps(function (s) {
          // s.display = "table-cell" ;
          // s.display = "inline-block" ;
          // s.width = `39ex` ;
          // s.height = `39ex` ;
          // s.contain = "size";
          // s.contain = "content";
        })
      )}
      children={srcE}
      />
    ) ;
  }

  function describeSpcl(...[render]: [() => React.ReactElement])
  {
    const C = util.L.once(render) ;
    const renderedUnresizedApplet = (
      <C />
    ) ;
    const renderedResizedApplet = (
      renderSpclResized(renderedUnresizedApplet)
    ) ;
    const renderedFigure = (
      <figure
      >
        { renderedResizedApplet }
      </figure>
    ) ;
    return {
      renderedUnresizedApplet ,
      renderedResizedApplet,
      renderedFigure ,
    } as const ;
  }
  
  export const SUMMERDISCO = (
    describeSpcl(() => (
      <BackgroundedAdvBlockC
      ico={(
        describeViewboxedSvgApplet({ viewBox: `0 0 300 300`, }, (
          <g
          style={{
            filter: `contrast(57.25%) `,
            opacity: 0.95 ,
          }}
          >
          </g>
        ))
      )}
      children={(
        <MspPhrasalBlockC>
          <studk-spmea-phrasalblock className="" style={{}}>
            <div
            className=""
            style={(
              describeCallbackAssignedStyleProps(c => {
                c.fontFamily = `'Segoe Script', cursive, Times, serif` ;
                c.fontWeight = 400 ;
              })
            )}
            >
              <XH>
                Piero <br/>
                Pirupa <br/>
                Time
                🌺
              </XH>
            </div>
          </studk-spmea-phrasalblock>
        </MspPhrasalBlockC>
      )}
      />
    ))
  ) ;

  export const CHILLING_EUR_BIENVENUE = (
    describeSpcl(() => (
      <PicturingAdvBlockC
      ico={(
        describeViewboxedSvgApplet({ viewBox: `0 0 300 300`, }, (
          <g
          style={{
            filter: `url("${getGsSharpenFltUrl() }") `,
            transform: `translate(-2px, -2px) scale(1.01) `,
            ...({ ["--c"]: 5, }),
          }}
          >
            <image
            {...{ width: 300, height: 300 }}
            href={vbvImg.src }
            />
          </g>
        ))
      )}
      children={(
        <MspPhrasalBlockC>
          <studk-spmea-phrasalblock className="" style={{}}>
            <div
            className=""
            style={(
              describeCallbackAssignedStyleProps(c => {
                c.fontFamily = `Georgia, 'Times New Roman', Times, serif` ;
                c.fontWeight = 400 ;
                c.textTransform = "lowercase" ;
                c.textAlign = "start" ;
              })
            )}
            >
              <XH>
                <span style={{ fontSize: `95%`, }} >
                  Chill &amp; Deep
                </span>
                <br/>
                <span style={{ fontSize: `205%`, }}>
                  Bienvenue
                </span>
              </XH>
            </div>
          </studk-spmea-phrasalblock>
        </MspPhrasalBlockC>
      )}
      />
    ))
  ) ;
  
  export const MULTIGENRE1 = (
    describeSpcl(() => (
      <PicturingAdvBlockC
      ico={(
        <div
        style={{
          minHeight: `20em` ,
          maxHeight: `20em` ,
        }}
        >
        <ImgListC
        >
          <li>
            <img
            src={vbvImg.src }
            />
          </li>
          <li>
            <img
            src={kzwImg.src }
            />
          </li>
          <li>
            <img
            src={hryStsAsWsImg.src }
            />
          </li>
          <li>
            <img
            src={vbvImg.src }
            />
          </li>
          <li>
            <img
            src={kzwImg.src }
            />
          </li>
        </ImgListC>
        </div>
      )}
      children={(
        <MspPhrasalBlockC>
          <studk-spmea-phrasalblock className="" style={{}}>
            <div
            className=""
            style={(
              describeCallbackAssignedStyleProps(c => {
                // c.fontFamily = `Georgia, 'Times New Roman', Times, serif` ;
                // c.fontWeight = 400 ;
                // c.textTransform = "lowercase" ;
                // c.textAlign = "start" ;
              })
            )}
            >
              <XH>
                <span style={{ fontSize: `95%`, }} >
                  Chill &amp; Deep
                </span>
                <br/>
              </XH>
            </div>
          </studk-spmea-phrasalblock>
        </MspPhrasalBlockC>
      )}
      />
    ))
  ) ;
  
  export const DANCEANDRAPGENRECO = (
    describeSpcl(() => (
      <BackgroundedAdvBlockC
      ico={(
        describeViewboxedSvgApplet({ viewBox: `0 0 300 300`, }, (
          <g
          style={{
            filter: `contrast(57.25%) `,
            opacity: 0.95 ,
          }}
          >
            <image
            {...{ width: 300, height: 300 }}
            href={kzwImg.src }
            />
          </g>
        ))
      )}
      children={(
        <MspPhrasalBlockC>
          <studk-spmea-phrasalblock className="" style={{}}>
            { withPresentationalGoodiesApplied({ style: `font-family: 'Inter', sans-serif ; text-transform: uppercase; font-weight: 570;`, }, (
              //
              <XH>
              { withPresentationalGoodiesApplied({
                style: `
                  font-size: 85%;
                  font-family: 'Poppins', system-ui 
                ` ,
              }, (
              <span>
                <span>
                  EDM
                </span>
                <span>
                  Dance
                </span>
              </span>
              ) ) } {}
              <span>
                n'
              </span> {}
              { withPresentationalGoodiesApplied({
                //
                style: `
                font-family: 'Segoe Script', cursive , sans-serif ;
              ` ,
              }, (
              <span>
                Rap
              </span>
              )) } {}
              <span>
                Music
              </span> {}
            </XH>
            ) ) }
          </studk-spmea-phrasalblock>
        </MspPhrasalBlockC>
      )}
      />
    ))
  ) ;
}

import vbvImg from "studk-ui-encore/src/venicebienvenue.png" ;

import hryStsAsWsImg from "studk-ui-encore/src/hrystylesalbumasitwas.png" ;

import kzwImg from "studk-ui-encore/src/edmkreamzoharabetterwater.png" ;



