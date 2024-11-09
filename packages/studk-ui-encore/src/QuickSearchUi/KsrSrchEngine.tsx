














import {
  util,
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
  OmitW,
  PartializedPartially,
  PickW,
} from 'studk-fwcore/src/util/C1.ts'

import {

  // TODO
  getQueryStringFromProps ,

} from "studk-ui-fwcore/src/util/NextJsSpecificRoutedGoodies1.ts" ;






;

import {
  React ,
  StudkReactJs,
  getSpaceSeparatedClassNameList,
  Button ,
  Span ,
  describeCallbackAssignedStyleProps, 
} from '#UiFwCore/util/ReactJsBased.ts'; ;

import {
  describeHeadlinedArticle ,
} from 'studk-ui/src/meta/react/dhc.tsx'; ;







const generateKsrSchEngnDataSet = (

  ((...[qw] : [qw: string]) => (

    //
    //
    (
      (
        util.Immutable.Seq(util.range(2033, 2111) )
      )
      .toOrderedMap()
      .mapKeys((_, id) => id )
    )
    .map((id, ) => {

      const o = id + 8 ;

      const forewordPlain = (
        `${o}th time, ${qw}`
      ) ;

      const foreword = (
        <span>
          { forewordPlain }
        </span>
      ) ;

      const sp = (
        <div>
        <p>
          <b>{ foreword }</b>
        </p>
        <p>
          { foreword }. {}
          { foreword }. {}
          { foreword }. {}
        </p>
        </div>
      ) ;

      const sdcId = (
        "" + id + "::" + getQueryStringFromProps({ q: forewordPlain, }).slice(2)
      ) ;

      const sItemUrl = (
        `https://localhost:61915/searchdotcom/${sdcId}` 
      ) ;

      return (
        ((): KsrSearchableArticleSummaryD => (
          {
            id,
            sItemUrl,
            forewordPlain,
            foreword,
            sp,
          } as const
        ))()
      ) ;
    } )

  ))
) ;

interface KsrSearchableArticleSummaryD {
  readonly id: number;
  readonly sItemUrl: string;
  readonly forewordPlain: string;
  readonly foreword: React.JSX.Element;
  readonly sp: React.JSX.Element;
}

namespace KsrSearchableArticleSummaryD { ; }

export {
  generateKsrSchEngnDataSet ,
  KsrSearchableArticleSummaryD ,
} ;














