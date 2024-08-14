








import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'







import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;


export const getNodeTypeLabelTxt = (nd: TS.Node) => {

  const ndTypeNme = TS.SyntaxKind[nd.kind] ;

  return (
    `${ndTypeNme }` as const
  )
} ;

/**
 * check that all are terms (ie {@link TS.Statement}(s)).
 * 
 */
const checkAreAllStatements = (
  <E extends TS.Node , > (...[newls] : [TS.NodeArray<E>]) => (
    newls
    .map(e => (
      !TS.isStatement(e) ?
      util.throwTypeError()  : e
    ))
  )
);

/**
 * check that all are terms (ie {@link TS.Expression}(s)).
 * 
 */
const checkAreAllTerms = (
  <E extends TS.Node , > (...[newls] : [TS.NodeArray<E>]) => (
    newls
    .map(e => (
      !TS.isExpression(e) ?
      util.throwTypeError()  : e
    ))
  )
);



export abstract class Kcn<SpcficNd extends TS.Node = any, Rcvb extends TS.Node = TS.Node, PvefIdx extends keyof { [k: string]: 1 } = string, >
{

  /**
   * *a pre-built list of factories for individual constituental patch evt desc(s)*
   * 
   */
  abstract getConstituentalPatchEvtFactories(...x: [rcv: Rcvb, ] ) : (
    { [k in PvefIdx] : (
      Kcn.DistribRecvTypFnc<TS.Node | string , this["PatchEvt"][number] >
    ) ; }
  )

  readonly PatchEvt: { readonly newValue: SpcficNd, }[] = [] ;

}

export namespace Kcn {
  /* TS(1205) */ ;

  export type DistribRecvTypFnc<Arg, R> = (
    Arg extends infer T ?
    ((x: Arg) => R ) : never
  ) ;

}

export class KeywordAlikeKcn<SpcficNd extends TS.Node = any, Rcvb extends TS.Node = TS.Node >
extends Kcn<SpcficNd, Rcvb>
{

  static of<SpcficNd extends TS.Node >(...[compileLiteral] : [compileLiteral: (...x: [string ] ) => SpcficNd] )
  {
    return new KeywordAlikeKcn<SpcficNd>(compileLiteral) ;
  }

  private constructor(public compileLiteral: (x: string) => SpcficNd)
  { super() ; }

  getConstituentalPatchEvtFactories(...x: [rcv: Rcvb, ] )
  {
    return {
      ["0"]: (e: string) => {
        const newV = this.compileLiteral(e) ;
        return { newValue: newV, } satisfies this["PatchEvt"][number] ;
      },
    } ;
  }
  
}

export class NodeListKcn<SpcficNd extends TS.Node = any, Rcvb extends TS.Node = TS.Node>
extends Kcn<SpcficNd, Rcvb>
{

  static of<
    SpcficNd extends TS.Node ,
    Rcvb extends TS.Node = TS.Node ,
  >(...[withReplacedChildren] : [
    withReplacedChildren: (...x: [
      /* we prefer such specifity, but such specificity would prevent usage when instantiated to wildcard-type(s). */
      // SpcficNd
      Rcvb
      ,
      TS.NodeArray<TS.Node> ,
    ] ) => SpcficNd ,
  ] )
  {
    return new NodeListKcn<SpcficNd, Rcvb>(withReplacedChildren) ;
  }

  private constructor(
    public withReplacedChildren: (...x: (
      ArgsWithOptions<[
        /* we prefer such specifity, but such specificity would prevent usage when instantiated to wildcard-type(s). */
        // SpcficNd
        Rcvb
        ,
        TS.NodeArray<TS.Node> ,
      ] , {} >
    ) ) => SpcficNd
    ,
  )
  { super() ; }

}

export class ReassignmentAlikeKcn<SpcficNd extends TS.Node = any >
extends Kcn<SpcficNd>
{

  static of<SpcficNd extends TS.Node >(...[withReplacedChildren] : [
    withReplacedChildren: (...x: [
      /* we prefer such specifity, but such specificity would prevent usage when instantiated to wildcard-type(s). */
      // SpcficNd
      TS.Node
      ,
      { initializer: TS.Expression, } ,
    ] ) => SpcficNd ,
  ] )
  {
    return new ReassignmentAlikeKcn<SpcficNd>(withReplacedChildren) ;
  }

  private constructor(
    public withReplacedChildren: (...x: (
      ArgsWithOptions<[
        /* we prefer such specifity, but such specificity would prevent usage when instantiated to wildcard-type(s). */
        // SpcficNd
        TS.Node
        ,
        { initializer: TS.Expression, } ,
      ] , {} >
    ) ) => SpcficNd
    ,
  )
  { super() ; }

}

export const getRlKcn = (
  //
  function <const Knd extends TS.SyntaxKind >(...[nd]: [TS.Node] )
  : Kcn<TS.Node> | null
  {

    return (
      getKcn(nd.kind)
    ) ;
  }
) ;

export const getKcn = (
  function <const Knd extends TS.SyntaxKind >(...[sk]: [Knd] )
  : Kcn<TS.Node> | null
  {

    if (sk === TS.SyntaxKind.Block) {
      return (
        NodeListKcn.of((rcv0, newls ) => (
          TS.factory.createBlock((
            checkAreAllStatements(newls)
          ), true )
        ))
      ) ;
    }
    if (sk === TS.SyntaxKind.SourceFile) {
      /**
       * NOTE --
       * DO NOT CONFUSE between {@link TS.factory.createSourceFile} snd {@link TS.createSourceFile}.
       * 
       */
      return (
        NodeListKcn.of((rcv0, newls ) => (
          TS.factory.createSourceFile((
            checkAreAllStatements(newls)
          ), (
            TS.factory.createToken(TS.SyntaxKind.EndOfFileToken)
          ) , 0  )
        ))
      ) ;
    }
    
    if (sk === TS.SyntaxKind.ExpressionStatement) {
      return (
        NodeListKcn.of((rcv0, [newNd1, ...excess] ) => {
          if (newNd1) {
            return (
              // TODO
              TS.factory.createExpressionStatement(newNd1 as TS.Expression )
            ) ;
          }
          return rcv0 ;
        })
      ) ;
    }

    if (sk === TS.SyntaxKind.ImportDeclaration) {
      return (
        KeywordAlikeKcn.of((spcifier) => {
          return (
            TS.factory.createImportDeclaration([] , (
              TS.factory.createImportClause(false, undefined, (
                TS.factory.createNamedImports([])
              ))
            ), (
              TS.factory.createStringLiteral(spcifier)
            ) )
          ) ;
        })
      ) ;
    }
    
    if (sk === TS.SyntaxKind.VariableStatement) {
      return (
        ReassignmentAlikeKcn.of((rcv0, { initializer, } ) => {

          if (TS.isVariableStatement(rcv0) ) {
            ;

            const existingDeclList = rcv0.declarationList ;

            return (
              TS.factory.createVariableStatement([
                TS.factory.createToken(TS.SyntaxKind.ConstKeyword) ,
              ] , [
                TS.factory.createVariableDeclaration("newVariable" , undefined , undefined , initializer ) ,
              ] )
            ) ;
          }

          return rcv0 ;
        })
      ) ;
    }

    if (sk === TS.SyntaxKind.ArrayLiteralExpression) {
      return (
        NodeListKcn.of((rcv0, newls ) => (
          TS.factory.createArrayLiteralExpression((
            checkAreAllTerms(newls)
          ), true )
        ))
      ) ;
    }
    if (sk === TS.SyntaxKind.CallExpression) {
      return (
        NodeListKcn.of((rcv0, newls ) => {
          if (TS.isCallExpression(rcv0) ) {
            return (
              TS.factory.createCallExpression(rcv0.expression , undefined , (
                checkAreAllTerms(newls)
              ), )
            ) ;
          }
          return rcv0 ;
        })
      ) ;
    }

    if (sk === TS.SyntaxKind.Identifier) {
      return (
        KeywordAlikeKcn.of((spcifier) => {
          return (
            TS.factory.createIdentifier(spcifier)
          ) ;
        })
      ) ;
    }
    if (sk === TS.SyntaxKind.NumericLiteral) {
      return (
        KeywordAlikeKcn.of((spcifier) => {
          return (
            TS.factory.createNumericLiteral(spcifier)
          ) ;
        })
      ) ;
    }
    
    return null ;
  }
) ;

;






;










