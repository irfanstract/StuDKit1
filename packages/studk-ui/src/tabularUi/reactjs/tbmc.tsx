




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









export { SpclCoreC, } ;

const SpclCoreC = (
  describeComponent(function TimeTableMC({
    horizonConfig ,
    value: valueArg ,
  } : { horizonConfig: {
    range: {
      startPos: number;
      endPos: number;
  } ,
  } , value?: readonly { readonly kind: "X" }[] , } ) {
    ;

    const hoSegmentDescs = (
      util.range(horizonConfig.range.startPos, horizonConfig.range.endPos + 0.01 )
      .map(i => ({
        i: i ,
      }) )
    ) ;

    const rowDataList = (
      valueArg ??
      mkArray(function* () {
        for (const i of util.range(0, 10) ) {
          yield { kind: "X", } ;
        }
      } )
    ) ;
    
    return (
      <div>
        { (
          renderTableByRowDtListAndColumnList(rowDataList , {
            renderItemKey: (v, i) => `item ${i}-th` ,
            perRowCellRenderers: renderTableByRowDtListAndColumnList.generateColumns(function* () {
              yield {
                renderHead: () => <span children={`kind`} /> ,
                renderContent: (v) => <span children={`${v.kind}`} /> ,
                id: `itemKind`,
              } ;
              for (const { i, } of hoSegmentDescs) {
                yield {
                  id: `Horizon Segment ${i}`,
                  classNames: ['studk-ui-tbmc-timewatchcolumncell'],
                  renderHead: () => (
                    <span>
                      { `(Hor ${i})` }
                    </span>
                  ) ,
                  renderContent: (v) => (
                    <span
                    children={(
                      <svg
                      style={{
                        background: `black`,
                      }}
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
                      />
                    )}
                    style={{
                      inlineSize: `7em`, blockSize: `1.0em`,
                      display: "grid",
                      // margin: `0.7ex` ,
                    }}
                    />
                  )
                  ,
                } ;
              }
            } ) ,
          } )
        ) }
      </div>
    ) ;
  })
) ;

export {
  /**
   * @deprecated
   */
  ThreeEmFigureC,
} ;

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

















