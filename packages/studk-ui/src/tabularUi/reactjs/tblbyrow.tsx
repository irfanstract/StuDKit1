
/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets just have `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  mkArray ,
} from 'studk-ui-fwcore/src/util/EWithOpt.ts'; ;

/**
 * note:
 * since we're not using `tsc` but instead a scanning transpiler, and
 * the import specifier is not exact path, and
 * we're only using it for their `type`s,
 * we need to avoid run-time actual importing, so
 * please don't remove the keywd `type`
 * 
 */
import type {
  ArgsWithOptions ,
  ArgsGetOptions ,
} from 'studk-ui-fwcore/src/util/EWithOpt.ts'; ;

import {
  random,
} from "lodash-es" ;






import {
  React ,
  describeComponent ,
  mkClasses ,
  Button ,
  Span, 
  withExtraSemanticProperties,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/util/ReactJsBased'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;

import {
  EnhancedTableC ,
} from "studk-ui/src/tabularUi/reactjs/tblenh.tsx" ;

import {
  WithOvcLevelleRefGoodiesC,
  WithOverlayHighlightingC,
  WithOverlaySupportC,
} from "studk-ui/src/templating/xst/ctxStacks/ovc.tsx" ;

// TODO
class TableRowsetRendererOpsImpl <in argsT extends unknown[], out eTr extends "thead" | "tbody" | "tr" >
{
  renderContent   (...args: argsT): (React.ReactElement | null) ;
  renderContent   (...args: argsT)
  { return this.RCO(...args) ; }

  renderStandalone(...args: argsT): (React.ReactElement | null) ;
  renderStandalone(...args: argsT)
  {
    const { C } = this ;
    return (
      <C
      children={this.renderContent(...args) }
      {...this.getRcProps(...args) }
      />
    ) ;
  }

  protected nomBrand !: [(e: argsT) => void, eTr ] ;

  /**
   * 
   * @param RCO impl for {@link renderContent} ; renders the (`<tr>`'s) children only
   * 
   */
  protected constructor(
    public readonly RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
    public readonly C: eTr,
    public readonly getRcProps: (...args: argsT) => JSX.IntrinsicElements[eTr] ,
   )
  {}
  
  static ofRenderer<argsT extends unknown[], const eTr extends TableRowsetRendererOpsImpl<any, "thead" | "tbody" | "tr">["C"] >(
    RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
    C: eTr,
    props?: (...args: argsT) => (JSX.IntrinsicElements[eTr] & { [k in  `data-${string}`] ?: string ; } ) ,
   )
  {
    return new TableRowsetRendererOpsImpl<argsT, eTr>(RCO, C, props ?? (() => ({}))) ;
  }
}

// TODO
class TableHeadRendererMono <in T> extends TableRowsetRendererOpsImpl<[], "thead">
{
}

// TODO
class TableRowRendererMono <in T> extends TableRowsetRendererOpsImpl<[data: T, i: number], "tr">
{
}





export {
  TableHeadRendererMono,
  TableRowRendererMono,
  /** @deprecated */
  TableRowsetRendererOpsImpl ,
} ;






export {
  /**
   * 
   * @deprecated
   * avoid using this API.
   * the design of this API
   * makes it rather easy to have the table-cells misaligned with the header cells
   * 
   */
  renderTableByRowDtListAndPresenter,
  renderTableByRowDtListAndColumnList ,
} ;

interface SpclClsNameProps extends Pick<JSX.IntrinsicElements["div"], "className"> {}

function renderTableByRowDtListAndPresenter<T extends object | true | false | null>(...[
  dat,
  presenter,
] : (
  | Parameters<typeof renderTableByRowDtListAndRowRenderer1<T> >
) )
{
  return (
    renderTableByRowDtListAndRowRenderer1(dat, presenter )
  ) ;
}

function renderTableByRowDtListAndRowRenderer1<T extends object | true | false | null>(...[
  dat,
  { renderItemRow, renderHead, ...otherProps },
] : ArgsWithOptions<[readonly T[] ] , (
  {
    renderItemRow: NoInfer<renderTableByRowDtListAndRowRenderer1.ItemRowRenderer<T> > ,
    renderHead  ?: NoInfer<renderTableByRowDtListAndRowRenderer1.HeadRowRenderer<T> > ,
    perRowCellRenderers ?: never ;
  } & SpclClsNameProps
)> )
{
  const { className: mainClName } = otherProps ;
  const mainTable = (
    <EnhancedTableC className={`studk-ui-table ${mainClName}`} >
      <thead>
        { renderHead?.render.renderContent() }
      </thead>
      <tbody>
        { (
          dat
          .map((va, i) => (
            <React.Fragment
            key={renderItemRow.getHash(va, i) }
            children={(
              renderItemRow.renderContent.renderStandalone(va, i)
            )}
            />
          ) )
        ) }
      </tbody>
    </EnhancedTableC>
  ) ;
  return (
  <WithOverlayHighlightingC
  children={mainTable}
  />
  ) ;
}

namespace renderTableByRowDtListAndRowRenderer1
{
  /* bugs arise with `namespace`s which don't have anything but `interface`s, hence this extra no-op statement */
  {}

  export interface HeadRowRenderer<in T> {
    render: TableHeadRendererMono<T> ;
  }

  export interface ItemRowRenderer<in T> {
    getHash: { (data: T, i: number): React.Key ; } ,
    renderContent: TableRowRendererMono<T> ;
  }

}

interface RchcProps <T extends object | true | false | null>
{
  // ;

  /**
   * *the {@link renderTableByRowDtListAndColumnList.RowHashingCallback } to use as the hasn-fnc for each of the rows*.
   * 
   */
  readonly getRowHash: renderTableByRowDtListAndColumnList.RowHashingCallback<T>
  ,

  /**
   * *list of columns, each interfaced as a {@link renderTableByRowDtListAndColumnList.PerColumnPrImpl }*
   * 
   */
  readonly perRowCellRenderers: NoInfer<(
    readonly renderTableByRowDtListAndColumnList.PerColumnPrImpl<T>[]
  )> ,

}

export const TableByRowDtListAndColumnList1C = (
  describeComponent(function TableByRowDtListAndColumnList1CImpl<const T extends object | true | false | null>({ transpose, ...props } : (
    & { rowDataList: readonly T[], }
    & RchcProps<T>
    & { transpose ?: boolean }
  ))
  {
    const {
      rowDataList ,
      getRowHash ,
      perRowCellRenderers ,
    } = props ;

    return (
      (transpose ? renderTableByRowDtListAndColumnList.renderAsTransposed : renderTableByRowDtListAndColumnList )(rowDataList, {
        perRowCellRenderers ,
        getRowHash ,
      } )
    ) ;

  })
) ;

function renderTableByRowDtListAndColumnList<const T extends object | true | false | null>(...[
  rowDataList ,
  { perRowCellRenderers, getRowHash: getRowHash , className, } ,
] : (
  ArgsWithOptions<[
    rowDataList: readonly T[] ,
  ] , (
    & RchcProps<T>
    & SpclClsNameProps
  )>
) )
{
  ;

  const rowValues = rowDataList ;

  const renderRowContents = (e0: { value: T } | 0 ) => {
  ;

  /**
   * would be `true` if-and-only-if
   * the cell is part of the body (rather than the head)
   * 
   */
  const isCurrentlyForTableBodyElemts = (
    !(typeof e0 === "number")
  );

  return (

    perRowCellRenderers

    .map((cr, colI) => {
      ;

      const keyv = (
        cr.id ?? `Col ${colI}`
      ) ;

      const asTd = (
        withExtraSemanticProperties({
          classNames: cr.classNames ?? [] ,
        }, (
          <td
          key={keyv }
          className={(
            getSpaceSeparatedClassNameList(["studk-ui-tblbyrow-rtdcl-row-h"])
          )}
          {...({ ["data-src-col-id"]: String(cr.id) , }) }
          children={(
            isCurrentlyForTableBodyElemts ?
            cr.renderContent(e0.value , colI ) :
            cr.renderHead()
          ) }
          style={{
          }}
          />
        ) )
      ) ;

      return (
        // <React.Fragment
        // key={keyv }
        // children={(
        //   asTd
        // )}
        // />
        withExtraSemanticProperties({
          key: keyv ,
        } , asTd )
      ) ;

    } )

  ) ;

  
  } ;

  return (

    renderTableByRowDtListAndRowRenderer1(rowValues, {
      //

      className ,

      renderHead: { render: TableRowsetRendererOpsImpl.ofRenderer(() => (
        //
        <tr children={renderRowContents(0) } />
      ) , "thead" ) , }
      ,

      renderItemRow: {

        getHash: (e, i) => getRowHash(e, i)
        ,

        renderContent: (
          TableRowsetRendererOpsImpl.ofRenderer((e, i) => (
            //
            <React.Fragment
            children={(
              renderRowContents({ value: e, })
            )}
            />
          ) , "tr", (e, i) => ({ ["data-src-row-id"]: String(getRowHash(e, i)) , }) )
        ) ,

      }
      ,

    } )
  ) ;
}

namespace renderTableByRowDtListAndColumnList { ; }

namespace renderTableByRowDtListAndColumnList
{
  export type BaseColT = (
    (Required<Parameters<typeof renderTableByRowDtListAndColumnList > >[0])[number]
  ) ;

  export type XArgs<T > = (
    ArgsGetOptions<(
      Parameters<typeof renderTableByRowDtListAndColumnList<T & BaseColT> >
    )>
  ) ;

  export interface PerColumnPrImpl<T> {
    readonly renderContent: (data: T, i: number) => (React.ReactElement | null) ,
    readonly renderHead: () => (React.ReactElement) ,
    readonly id: React.Key,
    readonly classNames?: string[] ,
  }

  export type PerColumnProps<T> = (
    XArgs<T>["perRowCellRenderers"][number]
  ) ;

  export function generateColumns<T>(...[d] : [NoInfer<() => Iterable<PerColumnProps<T> > >] )
  : readonly PerColumnProps<T>[]
  {
    return [...d() ] ;
  }

  export interface RowHashingCallback<T> extends Extract<(
    (...a: NoInfer<[data: T, i: number]>) => Exclude<React.Key, symbol >
  ), any>
  {}
}

namespace renderTableByRowDtListAndColumnList
{
  /**
   * 
   * @deprecated this is a WIP/TODO.
   */
  export const renderAsTransposed = (
    function renderTableByRowDtListAndColumnListTransposedImpl<const T extends object | true | false | null>(...[
      dat ,
      { perRowCellRenderers: prcr, getRowHash: iRh , className , ...otherProps } ,
    ] : (
      Parameters<typeof renderTableByRowDtListAndColumnList<(
        T
      )> >
    ) )
    {
      return (
        renderTableByRowDtListAndColumnList(prcr, {
          //
          
          getRowHash: (v, i) => (
            v.id
            ??
            `unnamed-field-${i}`
          )
          ,

          perRowCellRenderers: (
            renderTableByRowDtListAndColumnList.generateColumns(function* () {
              yield {
                id: (
                  `SPH`
                ),
                renderContent: (colD, aColIdx) => (
                  colD.renderHead()
                ) ,
                renderHead: () => (
                  <span></span>
                ) ,
              } ;

              for (const [aRowI, rv] of dat.entries() )
              {
                yield {
                  id: (
                    iRh(rv, aRowI) ?? `unnamed-layer-${aRowI}`
                  ),
                  renderContent: (colD, aColIdx) => (
                    colD.renderContent(rv, aColIdx)
                  ) ,
                  renderHead: () => (
                    <code>{ String(rv) }</code>
                  ) ,
                } ;
              }
            } )
          ) ,

          className: `${className } studk-ui-table-is-as-transposed `,

          ...(otherProps)
        } )
      ) ;
    }
  ) ;
}

// studk-ui-fwcore/src/util/EWithOpt.ts
import "./tbl-default1.scss" ;
 












