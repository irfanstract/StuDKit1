






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

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from 'studk-ui/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from 'studk-ui/src/fwCore/ewo.ts'; ;

import type {
  ContinuousLinearRange ,
} from 'studk-ui/src/fwCore/linearValues.ts'; ;

export namespace XUtil { ; }






import * as React from "react" ;





import {
  describeComponent,
} from 'studk-ui/src/meta/react/dec.tsx'; ;

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
  Svg ,
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
    } ,
  ] : ArgsWithOptions<[], (
    {
      horizonConfig: {
        range: ContinuousLinearRange ,
      } ,
    }
  ) >)
  {
    return describeSuggestedConfig11Impl({
      horizonConfig: {
        range: horizonConfig.range
        ,
        samplingConfig: {
          perWindowSpan: 2,
        } ,
      },
    })
  }

  function describeSuggestedConfig11Impl(...[
    {
      horizonConfig,
    } ,
  ] : ArgsWithOptions<[], ( 
    {
      horizonConfig: {
        range: ContinuousLinearRange
        ,
        samplingConfig: describeSuggestedConfig11Impl.PartitionedSamplingConfigOps ,
      } ,
    }
  ) >)
  {
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
    } = (
      getSuggestedSccMastPlotter()
    ) ;

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
      segmenterConfig ,
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
  function renderPerChannelPlotAsUnitApplet(...[v, ispan]: [(TbmcModelState["layerStates"] )[number], TbmcBreakthruColumnsRendering.EWS[number] & {}, ] )
  {
    return (
      <Svg
      viewBox={`0 0 30 10 `}
      children={(
        <rect
        width={10}
        height={6}
        y={2}
        x={0}
        style={{
          fill: `rgba(192 192 192 / 0.5 )`,
        }}
        />
      )}
      style={{
        background: `black`,
        // height: `100%`,
      }}
      />
    ) ;
  }
  return {
    renderPerChannelPlotAsUnitApplet ,
  } ;
}

export {
  TbmcBreakthruColumnsRendering ,
  /** @deprecated this is a WIP/TBD. */
  getSuggestedSccMastPlotter ,
} ;

;











