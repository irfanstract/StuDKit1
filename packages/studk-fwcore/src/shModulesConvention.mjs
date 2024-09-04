

import { util ,reiterable, iterateNonNull } from 'typexpe-commons/src/common_sv.mjs';

import { pathToFileURL, } from 'node:url' ;






;

/** @param {[contents: ShListHelpTopicImpl["contents"] ]} args */
export function ShListHelpTopic(...[c])
{
  return new ShListHelpTopicImpl(c) ;
}

export class ShListHelpTopicImpl
{
  /** @param {[contents: ShListHelpTopicImpl["contents"] ]} args */
  constructor (...[c])
  {
    /** @type {readonly (readonly [fmt: string, fmtDesc: string, ])[] } */
    this.contents = c ;
  }
}

export class ShModuleHelpTopicImpl
{
  /** @param {[c: Omit<ShModuleHelpTopicImpl, never> ]} args */
  constructor (...[c])
  {
    /** @type {string} */
    this.title = c.title ;

    /** @type {ShListHelpTopicImpl["contents"] } */
    this.functions = c.functions ;
  }
}








