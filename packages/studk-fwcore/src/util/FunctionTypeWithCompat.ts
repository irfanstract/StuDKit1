









import type {
  ArgsWithOptions ,
} from "studk-util/src/utilityTypeDefs/ArgsWithOptions.mjs" ;





/**
 * *augments function-type {@link T1} with additional, compat overload*
 * 
 */
export type WithOverload<T0 extends (...args: any) => any , T2 > = (
  & T0
  & (
    [T0, T2] extends [
      (...args: infer ArgsT0) => (infer Retn0),
      (...args: infer ArgsT2) => (infer Retn2),
    ] ?
    {

      (...args: (ArgsT2) ): Retn2 ;

      (...args: (ArgsT0 | ArgsT2) ): (Retn0 | Retn2) ;

    }
    : unknown
  )
) ;

/**
 * *augments function-type {@link T1} with additional, compat overload*
 * 
 */
export type WithCompatOverload<T0 extends (...args: any) => any , T2 > = (
  & T0
  & (
    [T0, T2] extends [
      (...args: infer ArgsT0) => (infer Retn0),
      (...args: infer ArgsT2) => (infer Retn2),
    ] ?
    {

      /**
       * 
       * @deprecated
       * *this overload is deprecated.
       * consider pursuing use of the earlier overloads.*
       */
      (...args: (ArgsT2) ): Retn2 ;

      /**
       * 
       * @deprecated
       * *this overload is deprecated.
       * consider pursuing use of the earlier overloads.*
       */
      (...args: (ArgsT0 | ArgsT2) ): (Retn0 | Retn2) ;

    }
    : unknown
  )
) ;

void (
  (function () {

    interface SpclAnalysed {
      blockLength: number | null ,
    }

    return (

      function (f1: (
    
        WithCompatOverload<(
    
          /**
           * process the block with given ID,
           * with given constraints.
           * 
           */
          (...args: ArgsWithOptions<[blockId: string], { mode: "read", } > ) => SpclAnalysed
    
        ) , (
          (...args: ArgsWithOptions<[blockId: string], { mode?: string, } > ) => (SpclAnalysed | null)
        )>
      ) )
      {
    
        void [
          f1("block-1") ,
          f1("block-1", { mode: "read", }) ,
          f1("block-1", { mode: "read", }) ,
          f1("block-1", { mode: "write", }) ,
          f1("block-1") ,
        ] ;
      }
    ) ;
  })()
) ;
















