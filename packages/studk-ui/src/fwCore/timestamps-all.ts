






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';







export interface TRange extends NonNullable<{ readonly start: TStamp, readonly end: TStamp }>
{}

export type TStamp = NonNullable<number & { isTStamp ?: true ; }>
{}









