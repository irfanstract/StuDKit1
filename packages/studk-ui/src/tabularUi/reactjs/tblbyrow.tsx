
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
} from '#currentPkg/src/fwCore/ewo.ts'; ;

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
} from '#currentPkg/src/fwCore/ewo.ts'; ;

import {
  random,
} from "lodash-es" ;






import * as React from "react" ;





import {
  describeComponent,
  mkClasses,
} from '#currentPkg/src/meta/react/dec.tsx'; ;

import {
  describeHeadlinedArticle ,
} from '#currentPkg/src/meta/react/dhc.tsx'; ;

import {
  Button ,
  Span ,
} from '#currentPkg/src/meta/react/dbc.tsx'; ;

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
    public readonly C: "thead" | "tbody" | "tr",
   )
  {}
  
  static ofRenderer<argsT extends unknown[], const eTr extends TableRowsetRendererOpsImpl<any, any>["C"] >(
    RCO: { (...args: argsT): ReturnType<TableRowsetRendererOpsImpl<any, any>["renderContent"] > ; },
    C: eTr,
   )
  {
    return new TableRowsetRendererOpsImpl<argsT, eTr>(RCO, C) ;
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
  { renderItemRow, renderHead, },
] : ArgsWithOptions<[readonly T[] ] , {
  renderItemRow: NoInfer<renderTableByRowDtListAndRowRenderer1.ItemRowRenderer<T> > ,
  renderHead  ?: NoInfer<renderTableByRowDtListAndRowRenderer1.HeadRowRenderer<T> > ,
  perRowCellRenderers ?: never ;
}> )
{
  const mainTable = (
    <table className='studk-ui-table' >
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
    </table>
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

function renderTableByRowDtListAndColumnList<const T extends object | true | false | null>(...[
  dat ,
  { perRowCellRenderers, getRowHash: getRowHash , } ,
] : ArgsWithOptions<[readonly T[] ] , {
  perRowCellRenderers: NoInfer<(
    readonly renderTableByRowDtListAndColumnList.PerColumnPrImpl<T>[]
  )> ,
  readonly getRowHash: (...a: NoInfer<[data: T, i: number]>) => Exclude<React.Key, symbol >
  ,
}> )
{
  ;

  const rowValues = dat ;

  const renderRowContents = (e0: { value: T } | 0 ) => (
    perRowCellRenderers
    .map((cr, colI) => {
      return (
        <React.Fragment
        key={cr.id ?? `Col ${colI}` }
        children={(
          <td
          className={(
            mkClasses(function* () {
              if (colI === 0) {
                yield "studk-ui-tblbyrow-rtdcl-row-h" ;
              }
              yield* (cr.classNames ?? [] ) ;
            } )
          )}
          children={(
            !(typeof e0 === "number") ?
            cr.renderContent(e0.value , colI ) :
            cr.renderHead()
          ) }
          style={{
          }}
          />
        )}
        />
      ) ;
    } )
  ) ;

  return (
    renderTableByRowDtListAndRowRenderer1(rowValues, {
      //
      renderHead: { render: TableRowsetRendererOpsImpl.ofRenderer(() => (
        //
        <tr children={renderRowContents(0) } />
      ) , "thead" ) , }
      ,
      renderItemRow: {
        getHash: (e, i) => getRowHash(e, i) ,
        renderContent: TableRowsetRendererOpsImpl.ofRenderer((e, i) => (
          //
          <React.Fragment
          children={(
            renderRowContents({ value: e, })
          )}
          />
        ) , "tr" ) ,
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
}

// #currentPkg/src/fwCore/ewo.ts
import "./tbl-default.css" ;
 












