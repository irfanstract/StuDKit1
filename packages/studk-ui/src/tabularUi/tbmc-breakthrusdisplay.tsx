






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
} from 'studk-fwcore/src/util/C1.ts'; ;

import type {
  ContinuousLinearRange ,
} from 'studk-ui-fwcore/src/util/ContinuousLinearRangeTs'; ;

export namespace XUtil { ; }






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  Button ,
  Span ,
} from 'studk-ui/src/meta/react/dbc.tsx'; ;

import {
  renderTableByRowDtListAndPresenter ,
  renderTableByRowDtListAndColumnList ,
  TableHeadRendererMono ,
  TableRowRendererMono ,
  TableRowsetRendererOpsImpl ,
} from 'studk-ui/src/tabularUi/reactjs/tblbyrow.tsx'; ;

import {
  AtomicSvgC,
  SizeFlexibleSvgC,
  Svg ,
  VerbatimSvgC,
  describeSvg ,
  describeSvgContent ,
} from 'studk-ui/src/meta/react/gec.tsx'; ;

import {
  describeByCssStringStyleProps,
  describeCallbackAssignedStyleProps, 
  withCssStringApplied,
  withPresentationalGoodiesApplied,
} from 'studk-ui/src/xst/prefabs/summerhitsmedia-cssd-adv.tsx'; ;

import {
  WithOverlayHighlightingC,
  WithOvcLevelleGoodiesC ,
  WithElementBoundingBoxHighlightingC ,
  NCPSR ,
} from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;









;

const renderAsSpeciallyHighlighted = (
  function (...[{} = {}, { body, tip, } ] : (
    ArgsWithOptions<(
      ArgsWithOptions<[], {}>
    ), {
      body: React.ReactElement ,
      tip?: React.ReactElement ,
    }>
  ))
  {
    return (
      <WithOvcLevelleGoodiesC
      children={({ asSpclFinalElement, renderNativeElemBoundingBoxSpc, utcs, }) => (
        //
        <>
        { asSpclFinalElement((body )) }
        { (utcs || null ) && (
          <>
          { (
            renderNativeElemBoundingBoxSpc({ s: NCPSR.Subject.BOUNDINGBOX, children: (
              (function () {
                return (
                  <></>
                ) ;
              } )()
            ) })
          ) }
          { (
            renderNativeElemBoundingBoxSpc({ s: NCPSR.Subject.BOTTOM, children: (
              (function () {
                const c = (
                  tip
                ) ;
  
                if (0)
                {
                  return (
                    <div
                    style={{
                      background: `black`,
                      color: `white`,
                    }}
                    >
                    { c }
                    </div>
                  ) ;
                }
                {
                  return (
                    <studk-spmea-phrasalblock
                    style={{
                    }}
                    children={c}
                    />
                  ) ;
                }
              } )()
            ) })
          ) }
          </>
        ) }
        </>
      ) }
      />
    ) ;
  }
) ;

const renderFromSpclUnitInlinePlot = (
  function (...[{} = {}, { body, tip, } ] : (
    ArgsWithOptions<(
      ArgsWithOptions<[], {}>
    ), {
      body: React.ReactElement ,
      tip?: React.ReactElement ,
    }>
  ))
  {
    return (
      renderAsSpeciallyHighlighted(undefined, {
        //
        tip: (
          tip
        ),
        body: (
          <span
          children={(
            body
          )}
          style={(
            describeCallbackAssignedStyleProps(function (s) {
              s.inlineSize = `7em` ;
              // s.blockSize = `100%` ;
              s.minBlockSize = `1.70em` ;
              s.display = "grid" ;
              // s.margin = `0.7ex` ;
              s.overflow = "hidden" ;
              s.overflow = "clip" ;
              s.paddingBlock = `0.66ex` ;
            })
          )}
          />
        ) ,
      })
    ) ;
  }
) ;




/* can't use `const TbmcModelState = ... ... ;` */
import TbmcModelState = TbmcKnsBasedModelState ;

export { TbmcModelState , } ;

import {
  TbmcKnsBasedModelState ,
} from 'studk-ui/src/tabularUi/tbmc-knsb.tsx' ;

;



;

namespace TbmcBreakthruColumnsRendering { ; }
namespace TbmcBreakthruColumnsRendering
{
  ;

  export function describeSuggestedConfig1(...[
    {
      horizonConfig,
      primaryStreamSegmtPlotter ,
    } ,
  ] : ArgsWithOptions<[], (
    {

      horizonConfig: {
        range: ContinuousLinearRange ,
      } ,

      primaryStreamSegmtPlotter ?: (
        SccMastPlotter.RegularAppletifyingInstance
      ) ,

    }
  ) >)
  {
    return (
      describeSuggestedConfig11Impl({

        horizonConfig: {
          range: horizonConfig.range
          ,
          samplingConfig: {
            perWindowSpan: 2,
          } ,
        },

        primaryStreamSegmtPlotter ,

      })
    ) ;
  }

  function describeSuggestedConfig11Impl(...[
    opts ,
  ] : ArgsWithOptions<[], ( 
    {

      horizonConfig: {
        range: ContinuousLinearRange
        ,
        samplingConfig: describeSuggestedConfig11Impl.PartitionedSamplingConfigOps ,
      } ,

      primaryStreamSegmtPlotter ?: (
        SccMastPlotter.RegularAppletifyingInstance
      ) ,

    }
  ) >)
  {
    const {
      horizonConfig,
      primaryStreamSegmtPlotter : mastPlotter = (
        getSuggestedSccMastPlotter()
      ) ,
    } = opts ;
    ;

    const segmenterConfig = (() => {
      ;
      const effectiveWindowSeq = (
        util.range(0, horizonConfig.range.endPos + 0.01, horizonConfig.samplingConfig.perWindowSpan )
        .map(p => ({
          id: (
            // TODO
            Math.floor(p)
          ) ,
          srcSpan: { startPos: p, endPos: p + horizonConfig.samplingConfig.perWindowSpan, } satisfies ContinuousLinearRange
          ,
        }) satisfies describeSuggestedConfig11Impl.EWindowSpan )
        .filter(e => (
          (horizonConfig.range.startPos < e.srcSpan.endPos)
          ||
          (e.srcSpan.startPos < horizonConfig.range.endPos)
        ))
      ) ;
      return {
        effectiveWindowSeq ,
      } ;
    })() ;

    const {
      renderPerChannelPlotAsUnitApplet ,
      renderPerChannelPlotAsWrInlineContent ,
    } = mastPlotter ;

    return {
      //

      segmenterConfig ,
      /** {@link segmenterConfig.effectiveWindowSeq}. */
      effectiveWindowSeq: segmenterConfig.effectiveWindowSeq ,

      renderPerChannelPlotAsUnitApplet ,
      renderPerChannelPlotAsWrInlineContent ,

    } as const ;
  }

  namespace describeSuggestedConfig11Impl { ; }
  
  namespace describeSuggestedConfig11Impl
  {
    export interface PartitionedSamplingConfigOps
    {
      perWindowSpan: number ,
    }

    export interface EWindowSpan extends NonNullable<(EWS[number])>
    {}
      
  }

  export import describeSuggestedConfig11 = describeSuggestedConfig11Impl ;

  export type EWS = (
    ReadonlyArray<{
      readonly id: Extract<React.Key, string | number | bigint> ,
      readonly srcSpan: ContinuousLinearRange ,
    }>
  ) ;

}

/**
 * {@link getSuggestedSccMastPlotter} - TBD/WIP
 * 
 */
function getSuggestedSccMastPlotter()
{
  ;

  const pua = (
    SccMastPlotter.SpclSizelessInst.getInstance()
  ) ;

  return (
    SccMastPlotter.fromSizelessInstance(pua)
  ) ;
}

namespace SccMastPlotter {
  ;

  // [(TbmcModelState["layerStates"] )[number], TbmcBreakthruColumnsRendering.EWS[number] & {}, ]

  export const byRpcpu = (

    function (...[renderPerChannelPlotAsUnitApplet,] : [(...args: (
      ArgsWithOptions<[
        chnlDesc: (TbmcModelState["layerStates"] )[number],
        directionalLocDesc: TbmcBreakthruColumnsRendering.EWS[number] & {},
      ], {}>
    ) ) => React.ReactElement ] )
    {

      return {
        renderPerChannelPlotAsUnitApplet ,
      } as const ;
    }
  ) ;

  export type MinimalAppletifyingInstance = ReturnType<typeof byRpcpu> ;

  export type RegularAppletifyingInstance = ReturnType<typeof fromMinimalInstance> ;

  export const fromMinimalInstance = (

    function (...[{ renderPerChannelPlotAsUnitApplet, },] : [MinimalAppletifyingInstance ] )
    {

      const renderPerChannelPlotAsWrInlineContent = (...args: Parameters<typeof renderPerChannelPlotAsUnitApplet>) => {
        ;

        return renderFromSpclUnitInlinePlot(undefined, {
          //
          tip: (
            <div>
            <p>
              Segmentual Stream Slice
            </p>
            </div>
          ),
          body: (
            renderPerChannelPlotAsUnitApplet(...args )
          ) ,
        }) ;
      } ;
  
      return {
        renderPerChannelPlotAsUnitApplet ,
        renderPerChannelPlotAsWrInlineContent,
      } as const ;
    }
  ) ;

  // TODO
  export function fromSizelessInstance(...[pua]: [SpclSizelessInst])
  {
    ;

    const renderPerChannelPlotAsUnitApplet = function (...[v, ispan]: [(TbmcModelState["layerStates"] )[number], TbmcBreakthruColumnsRendering.EWS[number] & {}, ] )
    {
  
      return (
        SccMastPlotter.renderPua({
          startT  : (ispan.srcSpan.startPos   ) ,
          endT    : (ispan.srcSpan.endPos     ) ,
        } , pua )
      ) ;
    }
  
    return (
      SccMastPlotter.fromMinimalInstance((
        SccMastPlotter.byRpcpu(renderPerChannelPlotAsUnitApplet )
      ))
    ) ;
  }

  // TODO
  export class SpclSizelessInst
  {

    toJsxSvg(): React.ReactElement
    {
      ;

      const plG = (
        <rect
        width={(
          // 1
          687
        )}
        height={0.6}
        // y={2}
        x={0}
        style={{
          fill: `rgba(192 192 192 / 0.5 )`,
        }}
        />
      ) ;

      return (
        plG
      ) ;
    }

    static getInstance()
    : SpclSizelessInst
    {

      return new SpclSizelessInst() ;
    }

    private constructor()
    {}

  }

  export const renderPua = (
    function (...[{ startT: glblStartT = 0 , endT: glbEndT = glblStartT + 3, } , pua = SpclSizelessInst.getInstance() ] : (
      ArgsWithOptions<[...(
        ArgsWithOptions<[], {
          startT : number,
          endT : number,
          o ?: never,
        }>
      ) , pua: SpclSizelessInst ] , {} >
    ) ) {

      const plG = ( 
        pua.toJsxSvg()
      ) ;

      const plotSpans = (
        (
          util.range(glblStartT, glbEndT + 0.5 , (
            util.L.clamp(
              Math.floor(Math.sqrt(glbEndT - glblStartT ) ) ,
              2, 22 )
          ) )
        )
        .map(t => ({ t, x: (t * 10 ) }) )
        .flatMap((v , i, c) => (
          util.iterateNonNull((
            (i + 1) < c.length ?
            ({
              startX: c[i]!.x,
              startT: c[i]!.t,
              endX: c[i+1]!.x,
              endT: c[i+1]!.t,
            } as const )
            : null
          ))
        ))
        .map(({ startX, startT, endX, endT, }, i) => (
          <React.Fragment
          key={startX }
          >
          <SizeFlexibleSvgC
          viewBox={`${startX} 0 ${endX - startX} 10 `}
          children={(
            <g
            style={{ transform: `translate(0, 2px) scale(10)` }}
            >
              <title>
                { `from ${startT} to ${endT} ` }
              </title>
              { plG }
            </g>
          )}
          style={{
            background: `black`,
            // height: `100%`,
            blockSize: `1.8em`,
            inlineSize: `calc((${endT - startT }) * 0.7ex) `,
            // border: `0.1ex solid blue`,
            marginInline: `0.051ex`,
          }}
          />
          </React.Fragment>
        ) )
      ) ;

      // if (1) {
      //   ;
      //   return (
      //     <div
      //     style={{
      //       display: "grid",
      //       flexDirection: "row",
      //       flexWrap: "nowrap",
      //     }}
      //     >
      //       { plotSpans }
      //     </div>
      //   ) ;
      // }

      return (
        <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyItems: "stretch",
          border: `0.1ex solid blue`,
        }}
        >
          { plotSpans }
        </div>
      ) ;
    }
  ) ;

}

export {
  TbmcBreakthruColumnsRendering ,

  /** @deprecated this is a WIP/TBD. */
  getSuggestedSccMastPlotter ,
  /** @deprecated this is a WIP/TBD. */
  SccMastPlotter ,

} ;

;











