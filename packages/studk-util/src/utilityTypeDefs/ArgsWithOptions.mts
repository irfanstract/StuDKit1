









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
type ArgsWithOptions<mainArgsT extends readonly any[], optsT extends object | null | undefined > = (
  readonly [...mainArgsT, ...(({} & object) extends optsT ? [options?: optsT] : [options: optsT ] ) ]
) ;

namespace ArgsWithOptions { ; }

export { ArgsWithOptions, }

namespace ArgsGetOptions { ; }

/**
 * 
 * coloquially the inverse of {@link ArgsWithOptions} -
 * __assuming that `options` were the last parameter__, restores `options`'s type
 * 
 */
type ArgsGetOptions<argsT extends readonly any[]> = (
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

export { ArgsGetOptions , } ;

type AGO_NOT_REDUCED = unknown ;

type AGO_ERROR_NOSUCHELEMENTEXCEPTION = undefined | never ;

interface AGO_INVARIANTTYPEPACK<T> { (x: T): T ; }

type AGO_EEMPTYARRAY = (
  | (readonly [])
  | (readonly never[] )

  /* an edge-case: `readonly undefined[]` */
  | (readonly undefined[] )
) ;









