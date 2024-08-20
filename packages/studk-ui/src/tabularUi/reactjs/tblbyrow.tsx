
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
/**
 * renderer.
 * 
 * use one of the provided factory-method(s) to obtain instance.
 * 
 */
class TableRowsetRendererOpsImpl <in argsT extends unknown[] = any, out eTr extends "thead" | "tbody" | "tr" = "thead" | "tbody" | "tr" >
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
  
  /**
   * {@link ofRenderer}. Internal Only.
   * 
   * @deprecated
   */
  static ofRenderer<argsT extends unknown[], const eTr extends TableRowsetRendererOpsImpl<any, "thead" | "tbody" | "tr">["C"] >(
    RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
    C: eTr,
    props?: (...args: argsT) => (JSX.IntrinsicElements[eTr] & { [k in  `data-${string}`] ?: string ; } ) ,
   )
  : TableRowsetRendererOpsImpl<argsT, eTr>
  {
    return new TableRowsetRendererOpsImpl<argsT, eTr>(RCO, C, props ?? (() => ({}))) ;
  }
}

// TODO
/**
 * renderer returning `<thead>` or `<tbody>`.
 * 
 */
class TableHeadOrBodyRendererMono <out T extends "thead" | "tbody" = "thead" | "tbody" > extends TableRowsetRendererOpsImpl<[], T >
{

  static asTHeadOrBodyRenderer1<argsT extends unknown[], const eTr extends TableHeadOrBodyRendererMono<"thead" | "tbody" >["C"] >(
    RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
    C: eTr,
    props?: (...args: argsT) => (JSX.IntrinsicElements[eTr] & { [k in  `data-${string}`] ?: string ; } ) ,
   )
  {
    return new TableHeadOrBodyRendererMono<eTr>(RCO, C, props ?? (() => ({}))) ;
  }

  static asTblHeadRowsRenderer = <argsT extends unknown[],  >(
    RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
    props?: (...args: argsT) => (JSX.IntrinsicElements["thead"] & { [k in  `data-${string}`] ?: string ; } ) ,
  ) =>
  {
    return this.asTHeadOrBodyRenderer1(RCO, "thead", props ?? (() => ({}))) ;
  }

  static asTblBodyRowsRenderer = <argsT extends unknown[],  >(
    RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
    props?: (...args: argsT) => (JSX.IntrinsicElements["tbody"] & { [k in  `data-${string}`] ?: string ; } ) ,
  ) =>
  {
    return this.asTHeadOrBodyRenderer1(RCO, "tbody", props ?? (() => ({}))) ;
  }

}

// TODO
/**
 * renderer returning `<thead>`.
 * 
 */
class TableHeadRendererMono <in T = any > extends TableHeadOrBodyRendererMono<"thead">
{
}

namespace TableHeadRendererMono {
  ;

  export type ForValueType<T> = (
    TableHeadRendererMono<T>
  ) ;

}

/**
 * renderer returning `<tr>`.
 * 
 */
// TODO
class TableRowRendererMono <T = any, ElT extends "tr" = "tr" > extends TableRowsetRendererOpsImpl<[data: T, i: number], ElT>
{

  static asTblRowRenderer = <T, argsT extends [ T, ...(unknown[] )], const eTr extends TableRowsetRendererOpsImpl<any, "tr">["C"] >(...args : (
    [
      RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
      // C: eTr,
      props?: (...args: argsT) => (JSX.IntrinsicElements[eTr] & { [k in  `data-${string}`] ?: string ; } ) ,
    ]
  ) )
  : TableRowRendererMono<T, "tr"> =>
  {
    const [RCO, P] = args;

    return this.asTblRowRendererAlt(RCO , "tr" , P ) ;
  }

  static asTblRowRendererAlt = <argsT extends unknown[], const eTr extends TableRowRendererMono<any, "tr">["C"] >(
    RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
    C: eTr,
    props?: (...args: argsT) => (JSX.IntrinsicElements[eTr] & { [k in  `data-${string}`] ?: string ; } ) ,
  )
  : TableRowRendererMono<argsT[0], eTr> =>
  {
    return new TableRowRendererMono(RCO, C, props ?? (() => ({}))) ;
  }

}

namespace TableRowRendererMono {
  ;

  export type ForValueType<T> = (
    TableRowRendererMono<T , "tr" >
  ) ;

}

namespace TableRowsetRendererOpsImpl {
  ;

  /**
   * renderer returning `<thead>` or `<tbody>`.
   * 
   */
  export const {

    /**
     * renderer returning `<tbody>`.
     * 
     */
    asTblBodyRowsRenderer: describeTblBodyRowGroupRenderer1,

    /**
     * renderer returning `<thead>`.
     * 
     */
    asTblHeadRowsRenderer: describeTblHeadRowGroupRenderer1 ,

  } = TableHeadOrBodyRendererMono ;
  
  export const {

    /**
     * renderer returning `<tr>`.
     * 
     */
    asTblRowRenderer: describeTblRowRenderer1 ,

  } = TableRowRendererMono ;

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

interface SpclGetIsRowBelongToTheHeaderGroup {
  (v: number): boolean ;
}

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

function renderTableByRowDtListAndRowRenderer1<T extends object | true | false | null>(...args : ArgsWithOptions<[readonly T[] ] , (
  {
    perRowCellRenderers ?: never ;
    renderItemRow     : NoInfer<renderTableByRowDtListAndRowRenderer1.ItemRowRenderer<T> > ,
    doesRowBelongsToHeaderGroup?: SpclGetIsRowBelongToTheHeaderGroup ,
    renderHead  ?: NoInfer<renderTableByRowDtListAndRowRenderer1.HeadRowRenderer<T> > ,

  } & SpclClsNameProps
)> )
{

  const [
    dat,
    {
      renderItemRow,
      renderHead,
      className: mainClName,
      doesRowBelongsToHeaderGroup = () => false ,
      ...otherProps
    } ,
  ] = args ;

  const bodyDat = (
    dat
    .map((e, i) => [i, e] as const )
    .filter(([i, e]) => !doesRowBelongsToHeaderGroup(i) )
  ) ;
  const heaDat = (
    dat
    .map((e, i) => [i, e] as const )
    .filter(([i, e]) => doesRowBelongsToHeaderGroup(i) )
  ) ;

  const mainTable = (
    <EnhancedTableC className={`studk-ui-table ${mainClName}`} >
      <thead>
        { renderHead?.render.renderContent() }
        { (
          heaDat
          .map(([i, va]) => (
            // />
            withExtraSemanticProperties({
              key: renderItemRow.getHash(va, i),
            } , (
              renderItemRow.renderContent.renderStandalone(va, i)
              ?? <></>
            ) )
          ) )
        ) }
      </thead>
      <tbody>
        { (
          bodyDat
          .map(([i, va]) => (
            // />
            withExtraSemanticProperties({
              key: renderItemRow.getHash(va, i),
            } , (
              renderItemRow.renderContent.renderStandalone(va, i)
              ?? <></>
            ) )
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
    render: TableHeadRendererMono.ForValueType<T> ;
  }

  export interface ItemRowRenderer<in T> {
    getHash: { (data: T, i: number): React.Key ; } ,
    renderContent: TableRowRendererMono.ForValueType<T> ;
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

  //
  readonly doesRowBelongsToHeaderGroup?: SpclGetIsRowBelongToTheHeaderGroup ,

  /**
   * *list of columns, each interfaced as a {@link renderTableByRowDtListAndColumnList.PerColumnPrImpl }*
   * 
   */
  readonly perRowCellRenderers: NoInfer<(
    readonly renderTableByRowDtListAndColumnList.PerColumnPrImpl<T>[]
  )> ,

  readonly crcn ?: (
    (itemv: T , props: { rowIdx: number }) => { classNames : string[] }
  ) ,

}

export const TableByRowDtListAndColumnList1C = (
  describeComponent(function TableByRowDtListAndColumnList1CImpl<const T extends object | true | false | null>({ ...props } : (
    & { rowDataList: readonly T[], }
    & RchcProps<T>
    & { transpose ?: boolean }
  ))
  {

    const {
      transpose,
      rowDataList ,
      // getRowHash ,
      // perRowCellRenderers ,
      crcn,
      ...etProps
    } = props ;

    return (
      (transpose ? renderTableByRowDtListAndColumnList.renderAsTransposed : renderTableByRowDtListAndColumnList )(rowDataList, {
        // perRowCellRenderers ,
        // getRowHash ,
        ...(etProps),
      } )
    ) ;

  })
) ;

function renderTableByRowDtListAndColumnList<const T extends object | true | false | null>(...args : (
  ArgsWithOptions<[
    rowDataList: readonly T[] ,
  ] , (
    & RchcProps<T>
    & SpclClsNameProps
  )>
) )
{
  ;
  const [
    rowDataList ,
    {
      perRowCellRenderers,
      getRowHash: getRowHash ,
      className,
      doesRowBelongsToHeaderGroup = () => false ,
      crcn,
    } ,
  ] = args ;

  const rowValues = rowDataList ;

  const renderRowContents = (e0: { value: T } | 0 , rowIdx: number ) => {
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

      const tdUserSpaceContent = (
        isCurrentlyForTableBodyElemts ?
        cr.renderContent(e0.value , colI ) :
        cr.renderHead()
      ) ;

      const asUserSpaceTdRendt = (
        <td
        className={(
          getSpaceSeparatedClassNameList((
            util.reiterated(function * () {
              yield* (cr.classNames ?? [] ) ;
              if (typeof e0 === "object" && "value" in e0 ) {
                yield* (
                  (crcn?.(e0.value, { rowIdx: rowIdx , }) )
                  ?.classNames
                  ??
                  []
                ) ;
              }
            })
          ))
        )}

        /* mark with data abt which one of the src-block(s) */
        {...({ ["data-src-col-id"]: String(cr.id) , }) }

        children={(
          <div>
            { tdUserSpaceContent }
          </div>
        ) }

        style={{
        }}

        />
      ) ;

      return (

        withExtraSemanticProperties({
          key: keyv ,
        } , (

          withExtraSemanticProperties({
            classNames: [
              ...util.iterateNonNull((
                colI < 0 ?
                "studk-ui-tblbyrow-rtdcl-row-h" : null
              )) ,
            ] ,
          }, asUserSpaceTdRendt )
        ) )
      ) ;

    } )

  ) ;

  
  } ;

  return (

    renderTableByRowDtListAndRowRenderer1(rowValues, {
      //

      className ,

      renderHead: { render: TableRowsetRendererOpsImpl.describeTblHeadRowGroupRenderer1(() => (
        //
        <tr children={renderRowContents(0, 0) } />
      ) , ) , }
      ,

      doesRowBelongsToHeaderGroup: doesRowBelongsToHeaderGroup
      ,

      renderItemRow: {

        getHash: (e, i) => getRowHash(e, i)
        ,

        renderContent: (
          TableRowsetRendererOpsImpl.describeTblRowRenderer1((e, i: number) => (
            //
            <React.Fragment
            children={(
              renderRowContents({ value: e, } , i )
            )}
            />
          ) , (e, i) => ({
            ["data-src-row-id"]: String(getRowHash(e, i)) ,
            // className: (
            //   getSpaceSeparatedClassNameList(perRowCellRenderers[i]?.classNames ?? [] )
            // ),
          }) )
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
    readonly asRowHeader?: boolean ,
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

    function renderTableByRowDtListAndColumnListTransposedImpl<const T extends object | true | false | null>(...args : (
      Parameters<typeof renderTableByRowDtListAndColumnList<(
        T
      )> >
    ) )
    {
      const [
        dat ,
        {
          perRowCellRenderers: prcr,
          getRowHash: iRh ,
          className ,
          doesRowBelongsToHeaderGroup: drprArg = () => false ,
          crcn,
          ...otherProps
        } ,
      ] = args ;

      return (

        renderTableByRowDtListAndColumnList(prcr, {
          //
          
          getRowHash: (v, i) => (
            v.id
            ??
            `unnamed-field-${i}`
          )
          ,

          doesRowBelongsToHeaderGroup: (i) => (
            prcr[i]?.asRowHeader || false
          ) ,

          crcn: (...[value , { rowIdx: i, }]) => ({
            //
            classNames: (
              (prcr[i]?.classNames ?? [] )
            ),
          }) ,

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
                  <></>
                ) ,
              } ;

              for (const [aRowI, rv] of dat.entries() )
              {
                yield {
                  id: (
                    iRh(rv, aRowI) ?? `unnamed-layer-${aRowI}`
                  ),
                  asRowHeader: drprArg(aRowI) ,
                  renderContent: (colD, aColIdx) => (
                    colD.renderContent(rv, aColIdx)
                  ) ,
                  renderHead: () => (
                    <></>
                  ) ,
                  classNames: (
                    crcn?.(rv, { rowIdx: aRowI })
                    ?.classNames
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
 












