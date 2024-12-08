





type MyFunctionParams<MyFunction extends MpfBase > = (

  MyFunctionParamsAndReturnsTypes<MyFunction>["params"]
) ;

type MyFunctionReturnType<MyFunction extends MpfBase > = (

  MyFunctionParamsAndReturnsTypes<MyFunction>["returnType"]
) ;

type MyFunctionParamsAndReturnsTypes<MyFunction extends MpfBase > = (
    //

    MyFunction extends {
          //
          (...args: infer P1): infer R1;
          (...args: infer P2): infer R2;
          (...args: infer P3): infer R3;
          (...args: infer P4): infer R4;
          (...args: infer P5): infer R5;
      }
      ?
      (
        | MprtReturnTup<P1, R1>
        | MprtReturnTup<P2, R2>
        | MprtReturnTup<P3, R3>
        | MprtReturnTup<P4, R4>
        | MprtReturnTup<P5, R5>
      )
    :

    MyFunction extends {
          //
          (...args: infer P1): infer R1;
          (...args: infer P2): infer R2;
          (...args: infer P3): infer R3;
          (...args: infer P4): infer R4;
      }
      ?
      (
        | MprtReturnTup<P1, R1>
        | MprtReturnTup<P2, R2>
        | MprtReturnTup<P3, R3>
        | MprtReturnTup<P4, R4>
      )
    :

    MyFunction extends {
          //
          (...args: infer P1): infer R1;
          (...args: infer P2): infer R2;
          (...args: infer P3): infer R3;
      }
      ?
      (
        | MprtReturnTup<P1, R1>
        | MprtReturnTup<P2, R2>
        | MprtReturnTup<P3, R3>
      )
    :

    MyFunction extends {
      (...args: infer P1): infer R1;
      (...args: infer P2): infer R2;
    }
    ?
    (
      | MprtReturnTup<P1, R1>
      | MprtReturnTup<P2, R2>
    )
    :

    MyFunction extends {
      (...args: infer P1): infer R1;
    }
    ?
    (
      | MprtReturnTup<P1, R1>
    )
    :

    never
) ;

interface MprtReturnTup<Params extends readonly unknown[], ReturnType> extends Extract<(

  {
    readonly params    : Params,
    readonly returnType: ReturnType,
  }
), any > {}




type MpfBase = (
  (...args: never) => any
) ;








export type {
  MyFunctionParamsAndReturnsTypes as ParamsAndReturnsTypes ,
  /** @deprecated @see {Parameters} */
  MyFunctionParams as Paramseters,
  MyFunctionParams        as Parameters,
  MyFunctionReturnType    as ReturnType ,
} ;






