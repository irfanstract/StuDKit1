




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import {
  MNI_CTXTUALONLY ,
  mkArray ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions ,
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import type {
  ContinuousLinearRange ,
} from '#currentPkg/src/fwCore/linearValues.ts'; ;

export namespace XUtil { ; }






import * as React from "react" ;





import {
  describeComponent,
} from '#currentPkg/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from '#currentPkg/src/meta/react/dhc.tsx'; ;

import {
  Button ,
  Span ,
} from '#currentPkg/src/meta/react/dbc.tsx'; ;

import {
  renderTableByRowDtListAndPresenter ,
  renderTableByRowDtListAndColumnList ,
  TableHeadRendererMono ,
  TableRowRendererMono ,
  TableRowsetRendererOpsImpl ,
} from '#currentPkg/src/tabularUi/reactjs/tblbyrow.tsx'; ;

import {
  Svg ,
  describeSvg ,
  describeSvgContent ,
} from '#currentPkg/src/meta/react/gec.tsx'; ;

/**
 * 
 * @deprecated
 */
const ThreeEmFigureC = (
  describeComponent(function ThreeEmFigureCImpl() {
    return (
      <canvas
      style={{
        width: `3em`,
        height: `3em`,
      }}
      />
    ) ;
  } )
) ;

export {
  /**
   * @deprecated
   */
  ThreeEmFigureC,
} ;









class TbmcModelState extends Object
{
  readonly layerStates!: (
    ReadonlyArray<TbmcModelState.LayerStateOps >
  ) ;

  protected constructor()
  { super() ; }
}
namespace TbmcModelState { ; }

namespace TbmcModelState
{
  export class LayerStateOps
  {
    declare readonly kind: string ;
    declare readonly id: string ;
    protected constructor() {}
  }

  export class KnLayerStateOpsImpl extends LayerStateOps
  {
    declare readonly kind: "X" ;
    protected constructor() { super() ; }
  }

}

export { TbmcModelState , } ;




export { SCC as SpclCoreC, } ;

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
    return describeSuggestedConfig11({
      horizonConfig: {
        range: horizonConfig.range
        ,
        samplingConfig: {
          perWindowSpan: 2,
        } ,
      },
    })
  }

  function describeSuggestedConfig11(...[
    {
      horizonConfig,
    } ,
  ] : ArgsWithOptions<[], ( 
    {
      horizonConfig: {
        range: ContinuousLinearRange
        ,
        samplingConfig: describeSuggestedConfig11.PartitionedSamplingConfigOps ,
      } ,
    }
  ) >)
  {
    ;
    
    const partitioningConfig = (() => {
      ;
      const effectiveWindowSeq = (
        util.range(horizonConfig.range.startPos, horizonConfig.range.endPos + 0.01, horizonConfig.samplingConfig.perWindowSpan )
        .map(p => ({
          id: (
            // TODO
            Math.floor(p)
          ) ,
          srcSpan: { startPos: p, endPos: p + horizonConfig.samplingConfig.perWindowSpan, } satisfies ContinuousLinearRange
          ,
        }) satisfies describeSuggestedConfig11.EWindowSpan )
      ) ;
      return {
        effectiveWindowSeq ,
      } ;
    })() ;

    const {
      renderChPlotIframe ,
    } = (
      getSuggestedSccMastPlotter()
    ) ;

    return {
      partitioningConfig ,
      effectiveWindowSeq: partitioningConfig.effectiveWindowSeq ,
      renderChPlotIframe ,
    } as const ;
  }

  namespace describeSuggestedConfig11 { ; }
  
  namespace describeSuggestedConfig11
  {
    export interface PartitionedSamplingConfigOps
    {
      perWindowSpan: number ,
    }

    export interface EWindowSpan extends NonNullable<(EWS[number])>
    {}
      
  }

  export type EWS = (
    ReadonlyArray<{
      readonly id: Extract<React.Key, string | number | bigint> ,
      readonly srcSpan: ContinuousLinearRange ,
    }>
  ) ;

}

export {} ;

interface ScCProps {
  horizonConfig: {
    range: ContinuousLinearRange ,
  } ,
  value?: TbmcModelState ,
}

const SCC = (
  describeComponent(function TimeTableMC({
    horizonConfig ,
    value: valueArg ,
  } : ScCProps ) {
    ;

    const {
      effectiveWindowSeq: hoSegmentDescs ,
      renderChPlotIframe ,
    } = (
      TbmcBreakthruColumnsRendering.describeSuggestedConfig1({ horizonConfig, })
    ) ;

    const chnlDataList = (
      valueArg?.layerStates ??
      mkArray(function* () {
        for (const i of util.range(0, 10) ) {
          yield { kind: "X", id: `chnl-${i}`, } satisfies TbmcModelState.KnLayerStateOpsImpl ;
        }
      } )
    ) satisfies TbmcModelState["layerStates"] ;

    {
        ;
        
        const mainTable = (
          renderTableByRowDtListAndColumnList(chnlDataList , {

            getRowHash: (v, i) => `item ${i}-th`
            ,

            perRowCellRenderers: renderTableByRowDtListAndColumnList.generateColumns(function* () {
              yield {
                renderHead: () => <i children={`name`} /> ,
                renderContent: (v) => <code children={`${v.id}`} /> ,
                id: `itemKind`,
              } ;

              yield {
                renderHead: () => <i children={`kind letter`} /> ,
                renderContent: (v) => <code children={`${v.kind}`} /> ,
                id: `itemKind`,
              } ;

              for (const msd of hoSegmentDescs)
              {
                const { srcSpan, id: colId, } = msd ;
                yield {
                  id: `Horizon Segment ${colId}`,
                  classNames: ['studk-ui-tbmc-timewatchcolumncell'],
                  renderHead: () => (
                    <span>
                      { `(Hor ${`${srcSpan.startPos} to ${srcSpan.endPos}` })` }
                    </span>
                  ) ,
                  renderContent: (v) => (
                    <span
                    children={(
                      renderChPlotIframe(v, msd )
                    )}
                    style={{
                      inlineSize: `7em`,
                      blockSize: `1.70em`,
                      // blockSize: `100%`,
                      display: "grid",
                      // margin: `0.7ex` ,
                      overflow: "hidden",
                    }}
                    />
                  )
                  ,
                } ;
              }
            } )
            ,

          } )
        ) ;

        return (
          mainTable
        ) ;
    }
  })
) ;

function getSuggestedSccMastPlotter()
{
  ;
  function renderChPlotIframe(...[v, ispan]: [(TbmcModelState["layerStates"] )[number], TbmcBreakthruColumnsRendering.EWS[number] & {}, ] )
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
    renderChPlotIframe ,
  } ;
}




import '#currentPkg/src/tabularUi/reactjs/tbmc-defaults.scss' ;

















