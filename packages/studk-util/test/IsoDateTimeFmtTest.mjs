




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import assert from 'node:assert';

import {
  random,
} from "lodash-es" ;

import {
  ISODateFieldValues,
} from 'studk-util/src/util/IsoDateFieldValues.ts';








;

/**
 * 
 * @satisfies {(x: number) => any }
 */
const doEpochMillisTests = function (...[ds0])
{

  const ds = (
    ISODateFieldValues.getFromEpochMillis(ds0)
  ) ;

  assert(ds.fullYearPadded04.length === 4) ;
  assert(ds.monthIdxPadded.match(/^[01][01-9]$/) ) ;
  assert(ds.dayInMonthIdxPadded.match(/^[01-9][01-9]$/) ) ;

  assert(!ds.monthIdxPadded.match(/^[0]+$/) ) ;

  assert((ds.hoursInDayPadded       ).match(     /^[012][01-9]$/) ) ;
  assert((ds.minutesPadded          ).match(    /^[01-5][01-9]$/) ) ;
  assert((ds.secondsInMinutePadded  ).match(    /^[01-5][01-9]$/) ) ;

  assert(!(ds.minutesPadded           ).match(    /^[6-9][01-9]$/) ) ;
  assert(!(ds.secondsInMinutePadded   ).match(    /^[6-9][01-9]$/) ) ;

} ;

describe(`ISO Date-Time Fmt`, () => {
  ;

  it(`this ISODateFieldValues's method shall behave as intended`, () => {
    ;

    doEpochMillisTests(0) ;

    doEpochMillisTests(Date.now() ) ;

    ;
  } ) ;

} ) ;









