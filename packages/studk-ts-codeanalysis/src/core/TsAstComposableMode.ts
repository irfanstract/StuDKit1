






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  RecordEntry,
  RecordFromEntry,
} from 'studk-fwcore/src/util/C1.ts'

type Tg<T0, T2 extends T0> = (
  (x: T0) => x is T2
) ;

type TgOrReg<T0, T2 extends T0> = (
  (x: T0) => boolean
) ;

// import type {} from "typexpe-commons/src/ArrayPrototypeIncludes.mts" ;

// import { inspect, } from 'util';
function inspect(object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string
{ return JSON.stringify(object) ; }




import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;



import {
  getNodeTypeLabelTxt ,
  getNodeChildren ,
} from "studk-ts-codeanalysis/src/core/TsAstInspectiveUtil.ts" ;




// TODO

// interface AsRepresentationallyReduced<T extends TS.Node > extends Omit<T, "parent">
// {}
type AsRepresentationallyReduced<T extends TS.Node > = Omit<T, "parent"> ;

/**
 * {@link getRepresentationallyReducedCopyOf } - WIP
 * 
 * @deprecated this is a WIP.
 * 
 */
const getRepresentationallyReducedCopyOf = (
  function <const T extends TS.Node>(...[nd0] : [T])
  : AsRepresentationallyReduced<T>
  {

    const {
      getHashForNode: getHashForSrcNode ,
      getInsofarHashedNodes: getInsofarHashedSrcNodes ,
      hashAllNodesInTree: hashAllSrcNodesInTree ,
    } = (
      GRRCO_TS_NDTABLE()
    ) ;

    hashAllSrcNodesInTree(nd0) ;

    const spclKey : string = (
      "asHashedId"
    ) ;
    const childrenIdsKey = (
      "childrenIds"
    ) ;

    const onSpclEnser = (
      function <T1 extends TS.Node>(...[o0] : [T1] )
      : object
      {
        const id = (
          getHashForSrcNode(o0)
        ) ;

        const o1 = util.L.omit(o0, "parent") ;
        const o2 = util.L.omit(o1 , "modifierFlagsCache", "transformFlags" ) ;
        const o3 = (
          {
            ...o2,
            [spclKey]: id ,
            [childrenIdsKey]: (
              (
                (() => {
                  if ("getChildren" in o0) {
                    if (TS.isToken(o0) ) {
                      return false ;
                    }
                    return (
                      o0.getChildren()
                    ) ;
                  }
                  return false ;
                })()
                || undefined
              )?.map((e : object) => getHashForSrcNode(e) )
            ) ,
          } as const
        ) ;
        return (
          o3
        ) ;
      }
    ) ;

    const s = (
      JSON.stringify(nd0, (
        function (key, vlue: null | {})
        {

          if (key === "parent") {
            return undefined ;
          }

          {
            C :
            {
              if (Array.isArray(vlue) ) {
                break C ;
              }
              if (vlue !== null && (typeof vlue === "object") ) {
                ;
                if (getInsofarHashedSrcNodes().includes(vlue) ) {
                  ;
                  return (
                    onSpclEnser(vlue)
                  ) ;
                }
              }
            }
            return vlue ;
          }
        }
      ) , 0 )
    ) ;

    console["log"](`Hashed Nodes:`, getInsofarHashedSrcNodes().length ) ;

    return (() => {

      const onSpclDeser = (
        function (...[vlue] : [object])
        {
          return (
            new XTsNode(vlue)
          ) ;
        }
      ) ;

      class XTsNode implements
      Pick<TS.Node , "getText" | "getChildren">
      {
        constructor (props) {
          Object.assign(this, props) ;

          // this.kindStr = getNodeTypeLabelTxt(this) ;

        }

        get [Symbol.toStringTag]() {
          return getNodeTypeLabelTxt(this) ;
        }

        getText() : string
        {

          if ("text" in this ) { return this.text ; }
          if ("fullText" in this ) { return this.fullText ; }
          if ("sourceText" in this ) { return this.sourceText ; }

          if (1) {
            return (
              nd0.getSourceFile().text
              .slice(this.pos, this.end )
            ) ;
          }

          if (TS.isToken(this) ) {
            const c0 = (
              getNodeTypeLabelTxt(this)
              .match(/^(\w+)Keyword$/ , )
            ) ;
            if (c0) {
              ;
              const c1 = (
                util.L.kebabCase(c0[1]!)
                .replace(/[\-_]/g, " ")
              ) ;
              return c1 ;
            }
          }

          if (1 ) {
            const getChildren1 = this.getChildrenAlt() ;
            if (getChildren1) {
              return (
                getChildren1
                .flatMap(nd => [nd.getText() ] )
                .join((
                  " "
                ))
              ) ;
            }
          }

          return "(???)" ;
        }

        getChildren()
        { return [...(this.getChildrenAlt() ?? [])] ; }

        getChildrenAlt() : readonly XTsNode[] | null
        {

          if ("_children" in this ) {
            return this._children as readonly XTsNode[] ;
          }

          if (childrenIdsKey in this ) {
            return (
              (this[childrenIdsKey] as readonly (string | number)[] )
              .map(id => deserEdBackNdHash[id]! )
            ) ;
          }

          return null ;
        }

      }

      const deserEdBackNdHash = (
        new Object() as { [k: string | number] : XTsNode, }
      ) ;

      return (
        // TODO
        JSON.parse(s, (
          function (key, vlue0: null | {})
          {

            if (vlue0 !== null && (typeof vlue0 === "object") ) {

              if (spclKey in vlue0) {
                const vlue = (
                  onSpclDeser(vlue0)
                ) ;
                void (() => {
                  const vAlready1 = (
                    (deserEdBackNdHash[vlue0[spclKey] ] ??= vlue )
                  ) ;
                  void (
                    (vAlready1[spclKey] && (vAlready1[spclKey] === vlue[spclKey]) )
                    ||
                    util.throwAssertionError((
                      `assertion failed: ${inspect(vlue[spclKey] ) } ${inspect(vlue, undefined, 2) } vs ${inspect(vAlready1, undefined, 2) }  `
                    ))
                  )
                })() ;
                return vlue ;
              }

            }

            return vlue0 ;
          }
        ))
      ) ;
    })() ;
  }
) ;

const GRRCO_TS_NDTABLE = (
  function () {
    ;

    const {
      getHashForNode ,
      getInsofarHashedNodes ,
    } = (() => {
      var gNdId: number = 3005 ;
      return (
        GRRCO_NDTABLE({ generateId: () => (gNdId++ ) })
      ) ;
    })() ;

    function hashAllNodesInTree(...[nd] : [TS.Node]) : void
    {
      getHashForNode(nd) ;
      for (const ndChild of nd.getChildren() ) {
        hashAllNodesInTree(ndChild) ;
      }
    }

    return {
      getHashForNode ,
      getInsofarHashedNodes ,
      hashAllNodesInTree ,
    } as const ;
  }
) ;

const GRRCO_NDTABLE = (
  function <NdId extends number | string, NdObj extends object = TS.Node>(...[{ generateId, }] : (
    ArgsWithOptions<[], { generateId: () => NdId , }>
  )) {

    const nodeIdTable = (
      // new Object() as { [k: string]: NdObj }
      (() => {
        const XMap = (
          Map
          // WeakMap
        ) ;
        return new XMap<NdObj, NdId>() ;
      })()
    ) ;

    const getHashForNode = (
      function (...[nd] : [NdObj])
      {
        !nodeIdTable.has(nd) && nodeIdTable.set(nd, generateId() ) ;
        return (
          nodeIdTable.get(nd, )
        ) ;
      }
    ) ;

    const getInsofarHashedNodes = (
      function () {
        return [...nodeIdTable.keys() ] ;
      }
    ) ;

    return {
      getHashForNode ,
      getInsofarHashedNodes ,
    } as const ;
  }
) ;

const representationallyReducedNodeTypeCon = (
  (() => {

    type TSR = RecordEntry<typeof TS> ;

    type AdaptTg<T extends TgOrReg<any, any>> = (
      T extends Tg<any, infer T2 extends TS.Node> ?
      Tg<AsRepresentationallyReduced<TS.Node>, AsRepresentationallyReduced<T2> >
      : T
    ) ;

    type TATG01 = (
      Extract<TSR, readonly [`is${string }`, (...args: any ) => boolean]>
    ) ;
    
    type TATG011<T1 extends TATG01 = TATG01> = (
      T1 extends readonly [infer k, infer VF extends Tg<any, infer V extends TS.Node> ] ?
      readonly [k, AdaptTg<VF> ]
      : T1
    ) ;
    type TATG011Dbg<T1 extends TATG01 = TATG01> = (
      T1 extends readonly [infer k, infer VF extends Tg<any, infer V extends TS.Node> ] ?
      readonly [k, true, VF, V ]
      : (readonly [T1[0], false, T1[1] ])
    ) ;
    type TATG011R0<E0 extends TATG011Dbg = TATG011Dbg > = (
      RecordFromEntry<(
        E0 extends readonly [infer k0 extends string, infer k1 extends boolean, ...(infer v1 extends readonly any[] )] ?
        readonly [`${k0}${k1}`, v1 ]
        : never
      )>
    ) ;
    void ((e: TATG011R0) => {
      e.isWhiteSpaceLikefalse ;
    }) ;

    type TATG = (
      RecordFromEntry<TATG011 >
    ) ;
    void ((e: TATG) => {
      e.isExpression ;
    }) ;

    return (
      TS as TATG
    ) ;
  })()
) ;

export {
  getRepresentationallyReducedCopyOf as getRepresentationallyReducedCopyOf ,
  representationallyReducedNodeTypeCon as representationallyReducedNodeTypeCon ,
} ;






;






;








