






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';







;

/**
 * 
 * returns array-type {@link mainArgsT} with added parameter `options` ;
 * if `options` is conformed by empty-object-literal `{}` then `options` become optional,
 * otherwise it stays required ;
 * 
 * ```
 * ArgsWithOptions<[dataset: any[] ], { size: number, } >
 * // becomes [dataset: any[], options: { size: number } ]
 * 
 * ArgsWithOptions<[dataset: any[] ], { size?: number, } >
 * // becomes [dataset: any[], options?: { size?: number } ]
 * 
 * ArgsWithOptions<[dataset: any[] ], { size?: number, disposition: Disposition, } >
 * // becomes [dataset: any[], options: { disposition: Disposition, size?: number, } ]
 * 
 * ArgsWithOptions<[dataset: any[] ], { size?: number, disposition: Disposition, } | { preset ?: string ; } >
 * // becomes [dataset: any[], options?: { disposition: ..., size?: ..., } | { preset?: ..., } ]
 * ```
 * 
 */
export type ArgsWithOptions<mainArgsT extends readonly any[], optsT extends object | null | undefined > = (
  readonly [...mainArgsT, ...(({} & object) extends optsT ? [options?: optsT] : [options: optsT ] ) ]
) ;

/**
 * 
 * coloquially the inverse of {@link ArgsWithOptions} -
 * __assuming that `options` were the last parameter__, restores `options`'s type
 * 
 */
export type ArgsGetOptions<argsT extends readonly any[]> = (
  /**
   * note:
   * if {@link argsT} were plain `readonly T[]` then
   * this method would immediately exit with {@link AGO_NOT_REDUCED}.
   * 
   * note:
   * to avoid distributivity,
   * needs to wrap both sides each as one-item tuple-type
   * 
   */
  (
    [argsT] extends [ /* don't forget `readonly`!!! */ readonly [infer arg0T, ...(infer etcArgsT extends readonly any[])] ] ?
    (
      ArgsGetOptions<etcArgsT> extends infer etcCaseResultT ?
      (
        AGO_INVARIANTTYPEPACK<etcCaseResultT> extends AGO_INVARIANTTYPEPACK<AGO_ERROR_NOSUCHELEMENTEXCEPTION> ?
        /* stop here. */
        Required<{ readonly value?: arg0T }>["value"]
        : etcCaseResultT
      )
      : /* shall never happen. */ never
    )
    :
    [argsT] extends [AGO_EEMPTYARRAY]  ?
    AGO_ERROR_NOSUCHELEMENTEXCEPTION
    :
    AGO_NOT_REDUCED
  )
) ;

type AGO_NOT_REDUCED = unknown ;

type AGO_ERROR_NOSUCHELEMENTEXCEPTION = undefined | never ;

interface AGO_INVARIANTTYPEPACK<T> { (x: T): T ; }

type AGO_EEMPTYARRAY = (
  | (readonly [])
  | (readonly never[] )

  /* an edge-case: `readonly undefined[]` */
  | (readonly undefined[] )
) ;






// TODO move into new file
export function MNI_CTXTUALONLY<E0, E2>(src: readonly E0[], mp: (item: NoInfer<E0>, i: number ) => NoInfer<E2> )
: readonly E2[]
{
  return src.map(mp) ;
}

// TODO move into new file
export function mkArray<E>(s: () => (Iterable<E> ) )
{
  return [...s() ] ;
}

// TODO move into new file
export { XJson } ;
namespace XJson { ; }
namespace XJson
{
  export type IAny = null | boolean | IDecimal | string | IArray | IDict ;

  export type IArray = readonly IAny[] ;
  export interface IDict { readonly [key: string]: IAny ; }

  export function isArray(x: IAny ): x is IArray {
    return Array.isArray(x) ;
  }
  export function isDictOrArray(x: IAny ): x is (IDict | IArray) {
    // TODO if had been standardised ES Records And Tuples would need alternative check
    return (x !== null) && (Object(x) === x ) ;
  }

  export type IDecimal = (number | bigint) & { isXJsonIDecimal ?: true } ;

  type KVLE<in k extends string, out vle> = { readonly [key in k]: vle ; }
  
  export type IDictFor<k extends string, v extends IAny = IAny> = IDict & KVLE<k, v>

}








