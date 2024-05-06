




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/**
 * note:
 * since we're not using `tsc` but instead a scanning transpiler, and
 * the import specifier is not exact path, and
 * we're only using it for their `type`s,
 * we need to avoid run-time actual importing, so
 * please don't remove the keywd `type`
 * 
 */
import type {
  TRange,
  TStamp ,
} from '#currentPkg/src/fwCore/timestamps-all.ts'; ;






;

export { describeChronography, } ;

function describeChronography() {}





export {
  describeMspeEvtListChronography,
  Mspe,
} ;

function describeMspeEvtListChronography(...[evts] : [readonly Mspe.Event[] ])
{
  ;
}

/**
 * 
 * each event
 * is one of two kinds - {@link InstantEvent "instant"} and {@link SpanningEvent "spanning"} .
 * {@link SignificanceLevel significance}
 * depends on whether its "instant" or "spanning" and, {@link SpanningEvtSignificanceLevel in case of "spanning", its *length*}.
 * 
 */
namespace Mspe
{
  export class Event extends Object {
    protected constructor(public readonly significance : SignificanceLevel )
    { super() ; }
  }

  /**
   * Instant Event ; always *significant*
   */
  export class InstantEvent extends Event
  {
    constructor(public readonly t: TStamp )
    { super(new InstantEvtSignificanceLevel() ) ; }
  }

  /**
   * Spanning Event ; *significance* depends on duration
   */
  export class SpanningEvent extends Event
  {
    constructor(public readonly tRange: TRange )
    { super(new SpanningEvtSignificanceLevel(tRange.end - tRange.start ) ) ; }
  }

  export class SignificanceLevel extends Object
  {
    protected constructor( )
    { super() ; }
  }

  export class InstantEvtSignificanceLevel extends SignificanceLevel
  {
    constructor( )
    { super() ; }
  }

  export class SpanningEvtSignificanceLevel extends SignificanceLevel
  {
    constructor(public readonly value: TStamp )
    { super() ; }
  }

}








