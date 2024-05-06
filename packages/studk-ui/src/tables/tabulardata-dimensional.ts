




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;






export {
  TableScheme2D,
} ;
export type {
  TableScheme2DFld,
  TableScheme2DK,
  TableScheme2DAny,
} ;

export {
  TableSchemeVara,
} ;
export type {
  TableSchemeVaraFlds ,
} ;

export type { TableKeyBase, } ;

export type {
  TableKeySetTl,
} ;


type TableScheme2DK<l1 extends TableKeyBase, k2 extends TableKeyBase > = (
  TableScheme2DFld<TableKeySetTl<l1>, TableKeySetTl<k2> >
) ;

type TableScheme2DFld<out field1 extends TableKeySetTl<any>, out field2 extends TableKeySetTl<any> > = (
  TableSchemeVaraFlds<readonly [field1, field2 ]>
) ;

// TODO
/**
 * 
 * *arbitrary-D generalisation* of all the above.
 * 
 */
interface TableSchemeVaraFlds<out fields extends readonly TableKeySetTl<any>[] >
{
  readonly flds: fields ;
}

namespace TableSchemeVara { ; }
namespace TableSchemeVara
{
  
  export type AllAxesAsVector<T extends TableSchemeVaraFlds<any> > = (
    T extends TableSchemeVaraFlds<readonly [...(infer flds extends readonly any[] ) ] > ?
    flds :
    never
  ) ;

  export type CellIdentAsVector<T extends TableSchemeVaraFlds<any> > = (
    util.AxisLabelsAsVector<(
      AllAxesAsVector<T>
    )>
  ) ;
  
  export namespace util {

    export type AxisLabelsAsVector<T extends readonly TableKeySetTl<any>[] > = (
      T extends readonly [TableKeySetTl<infer fld1>, ...(infer rest extends readonly TableKeySetTl<any>[]) ] ?
      [fld1, ...(AxisLabelsAsVector<rest> ) ] :
      T extends (readonly []) ?
      [] :
      /* edge-case relaxation */ T extends (readonly never[] ) ?
      [] :
      never
    ) ;

  } ;

}

namespace TableScheme2D
{
  export function fromTwoKeySets<const field1 extends TableKeySetTl<any>, const field2 extends TableKeySetTl<any> >(...[f1, f2]: [
    field1 ,
    field2 ,
  ] ) : TableScheme2DFld<field1, field2>
  {
    return { flds: [f1, f2], } ;
  }

  export type CellIdentAsVector<T extends TableScheme2DAny> = (
    TableSchemeVara.CellIdentAsVector<T>
  ) ;

}

type TableScheme2DAny = TableScheme2DFld<any, any>

namespace TableScheme2DAny { ; }

namespace TableScheme2DAny {}


interface TableKeySetTl<out k extends TableKeyBase >
{
  readonly values: readonly k[] ;
}

namespace TableKeySetTl { ; }

namespace TableKeySetTl
{
  export function of<const k extends TableKeyBase>(...values: k[] )
  { return from(values) ; }

  export function from<const k extends TableKeyBase>(values: readonly k[] ) : TableKeySetTl<k>
  { return { values: values, } ; }

}

type TableKeyBase = (string | number) & { isKey ?: true } ;

export type TableKeyByTl<field1 extends TableKeySetTl<any> > = (
  field1 extends TableKeySetTl<infer k> ?
  k :
  never
) ;


export { describeTableData2D, } ;


function describeTableData2D<
  //
  const sch extends TableScheme2DFld<any, any> ,
  const vale ,

  /* unused ; they're only for debugging */
  DBG_CELLIDENTSTRUCT = NoInfer<describeTableData2D.CellIdentAsPair<sch >>,
  DBG_CELLIDENT = NoInfer<describeTableData2D.CellIdent<sch >>,
>(...[scheme , valuesArg]: [
  scheme: sch ,
  values: { readonly [cellIdx in NoInfer<describeTableData2D.CellIdent<sch >> ] ?: vale } ,
] )
{
  return {
    values: valuesArg ,
    scheme ,
  } as const ;
}

namespace describeTableData2D
{
  export type CellIdentAsPair<T extends TableScheme2DAny> = (
    TableScheme2D.CellIdentAsVector<T>
  ) ;

  export type CellIdent<T extends TableScheme2DAny> = (
    CellIdentAsPair<T> extends readonly [infer fld1 extends TableKeyBase, infer fld2 extends TableKeyBase] ?
    (
      `${fld1},${fld2}`
    ) :
    never
  ) ;

  ;
}

(() => {
  const values = (
    describeTableData2D((
      TableScheme2D.fromTwoKeySets(TableKeySetTl.of("row1", "row2"), TableKeySetTl.of("col1", "col2") )
    ) , {
      // ["row1e"]: 5 ,
      "row1,col2": 5 ,
      "row2,col1": 5 ,
    } )
  ) ;
  return values ;
} ) ;











