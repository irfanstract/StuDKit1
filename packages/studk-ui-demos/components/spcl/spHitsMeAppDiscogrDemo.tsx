









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
  dynamicComponent,
  AppLink,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  describeHeadlinedArticle ,
  describeWorksheet ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  Span ,
  Button ,
} from 'studk-ui/src/meta/react/dbc.tsx'; ;

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
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-textblocks-b.tsx'; ;

import {
  BlockLvlSvgC ,
  InlineLvlSvgC ,
} from 'studk-ui/src/xst/svgd.tsx'; ;

import {
  describeCallbackAssignedStyleProps ,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd.tsx'; ;

import {
  getGsSharpenFltUrl,
  getSvgFilterAsCssFilterUrlFast ,
} from 'studk-ui/src/xst/cssFilterUrl.tsx'; ;


export const DiscogrDemoC = (
  function DiscogrDemoCImpl() {
    return (
      describeHeadlinedArticle({
        heading: (
          <span>
            Discography
          </span>
        ) ,
        children: (
          <div>
            <p>Discography Really Matters</p>
            <p>Discography Really Matters</p>

            <figure>
              { SPHMEA.renderSpclResized((
                <BackgroundedAdvBlockC
                ico={(
                  describeSvgApplet({ viewBox: `0 0 300 300`, }, (
                    <g
                    style={{
                      filter: `contrast(57.25%) `,
                      opacity: 0.95 ,
                    }}
                    />
                  ))
                )}
                children={(
                  <MspPhrasalBlockC>
                    <p>
                      Phrasal
                    </p>
                  </MspPhrasalBlockC>
                )}
                />
              )) }
            </figure>

            <figure>
              { SPHMEA.renderSpclResized((
                <BackgroundedAdvBlockC
                ico={(
                  describeSvgApplet({ viewBox: `0 0 300 300`, }, (
                    <g
                    style={{
                      filter: `contrast(57.25%) `,
                      opacity: 0.95 ,
                    }}
                    />
                  ))
                )}
                children={(
                  <MspPhrasalBlockC>
                    <p>
                      <span
                      style={{
                        display: "table-cell" ,
                        inlineSize: `80em` ,
                      }}
                      >
                        &nbsp;
                      </span>
                    </p>
                  </MspPhrasalBlockC>
                )}
                />
              )) }
            </figure>
            
            { SPHMEA.SUMMERDISCO.renderedFigure }

            { SPHMEA.CHILLING_EUR_BIENVENUE.renderedFigure }

            { SPHMEA.CHILLING_EUR_BIENVENUE.renderedFigure }
            
            { SPHMEA.DANCEANDRAPGENRECO.renderedFigure }

          </div>
        ) ,
      })
    ) ;
  }
) ;

import {
  SPHMEA ,
} from "./spHitsMeAppDiscogrDemoItems.tsx" ;

import vbvImgUrl from "studk-ui-encore/src/venicebienvenue.png" ;




