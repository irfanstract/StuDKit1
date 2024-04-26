






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';







;

export type ArgsWithOptions<mainArgsT extends readonly any[], optsT extends object | null | undefined > = (
  readonly [...mainArgsT, ...(({} & object) extends optsT ? [options?: optsT] : [options: optsT ] ) ]
) ;

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
        etcCaseResultT extends AGO_ERROR_NOSUCHELEMENTEXCEPTION ?
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

type AGO_NOT_REDUCED = never ;

type AGO_ERROR_NOSUCHELEMENTEXCEPTION = undefined | never ;

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
  export type IAny = null | boolean | (number | bigint) | string | IArray | IDict ;
  export type IArray = readonly IAny[] ;
  export interface IDict { readonly [key: string]: IAny ; }

  export function isArray(x: IAny ): x is IArray {
    return Array.isArray(x) ;
  }
  export function isDictOrArray(x: IAny ): x is (IDict | IArray) {
    // TODO if had been standardised ES Records And Tuples would need alternative check
    return (x !== null) && (Object(x) === x ) ;
  }
}








