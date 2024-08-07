








/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  RecordFromEntry,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;

import type {
  RecordValue,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;






import * as React from "react" ;

import {
  describeComponent,
} from 'studk-ui-componentdefinition/src/dec.tsx'; ;

import {
  type MutableCSSProperties ,
  describeCallbackAssignedStyleProps ,
  describeByCssStringStyleProps ,
} from "studk-ui-fwcore/src/xt/summerhitsmedia-cssd.tsx" ;

import * as ReactDOM from "studk-fbreact-all/src/react-dom-min-1.ts" ;

import {
  setDataProperty ,
  setCustomCssPrp ,
} from "studk-ui-fwcore/src/dom/helpers/DOmNodeCustomProperty" ;





;

export interface CsvaIbleElement extends Extract<ElementCSSInlineStyle & Element, any>
{}

export enum ARel {
  SELF = 1 << 1 ,
  PARENT = 1 << 3 ,
}

interface ARelProps { readonly aRel: ARel, }

/**
 * {@link captureStyleValuesOf},
 * with `mappings` supposed to be `RecordFromEntry<[newName: string, existingName: string ]>`
 * 
 */
export const captureStyleValuesAs = (
  function (...[receiver, sMppg, opts] : (
    ArgsWithOptions<[receiver: CsvaIbleElement, mappings: (
      & RecordFromEntry<[newName: string, existingName: string ]>
    ) ], ARelProps >
  ) )
  {
    return (
      captureStyleValuesAOf(receiver, (
        Object.entries(sMppg)
        .map(([newName, existingName]) => ({ existingName, newName }) )
      ) , opts )
    ) ;
  }
) ;

/**
 * {@link captureStyleValuesOf},
 * with `mappings` supposed to be `RecordFromEntry<[existingName: string, newName: string, ]>`
 * 
 */
export const captureStyleValuesOf = (
  function (...[receiver, sMppg, opts] : (
    ArgsWithOptions<[receiver: CsvaIbleElement, mappings: (
      & RecordFromEntry<[existingName: string, newName: string, ]>
    ) ], ARelProps >
  ) )
  {
    return (
      captureStyleValuesAOf(receiver, (
        Object.entries(sMppg)
        .map(([existingName, newName]) => ({ existingName, newName }) )
      ) , opts )
    ) ;
  }
) ;


/**
 * {@link captureStyleValuesOf}.
 * 
 */
export const captureStyleValuesAOf = (
  function (...[receiver, mappingList, { aRel, } ] : (
    ArgsWithOptions<[receiver: CsvaIbleElement, which: readonly ({ newName: string, existingName: string, })[] ], ARelProps >
  ) )
  {
    const anchor = (() => {
      switch (aRel) {
        case ARel.SELF: return receiver ;
        case ARel.PARENT: return receiver.parentElement ;
        default: return util.throwTypeError() ;
      }
    })() ;
    
    const aS = anchor && getComputedStyle(anchor) ;

    for (const { newName, existingName, } of mappingList ) {
      const capturedVal = (
        (() => {
          if (anchor && aS) {
            const value = (
              existingName.match(/^--/) ?
              aS.getPropertyValue(existingName )
              :
              (Number.isNaN(+existingName) === false ) ?
              util.throwTypeError(`invalid name (numeric) '${existingName }'`)
              :
              ((aS as object as { [k: string]: string, })[existingName] )
            ) ;
            return value ;
          }
        })()
        ?? null
      ) ;
      RSSP(receiver, newName, capturedVal ) ;
    }
  }
) ;

/**
 * {@link RSSP}
 * 
 * currently impl-ed as
 * `receiver.style.setProperty("--ovcbxassigned-" + newName, capturedVal )`.
 * 
 */
const RSSP = (
  function (...[receiver, mdlspaceName, newValue ] : (
    ArgsWithOptions<[CsvaIbleElement, newName: string, string | null ] , {} >
  ) )
  {

    const userspaceName = (
      "--ovcbxassigned-" + mdlspaceName
    ) ;

    void (
      setCustomCssPrp(receiver.style, userspaceName, newValue )
    ) ;

  }
) ;

export {
  /** @deprecated this is a WIP. */
  RSSP ,
} ;

;










