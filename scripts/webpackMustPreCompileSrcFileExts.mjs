




/**
 * 
 * WIP/TBD
 * WIP/TBD
 * WIP/TBD
 * 
 * 
 */







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';





const describeBabelJsStyleAnalogousLanguageExtFamily = (
  /**
   * 
   * @satisfies {(
   * <const foundSubfamId extends string,
   *  const foundImpTSpT  extends string,
   *  const foundXtTSpT   extends string,
   * >
   * (opts: { langSubfamilyExtIds: readonly foundSubfamId[], moduleFormatDefiningExtSps: readonly foundImpTSpT[], xtSps: readonly foundXtTSpT[] } )
   * => object
   * )}
   */
  ((...[{ langSubfamilyExtIds , moduleFormatDefiningExtSps, xtSps, }]) => (
    util.reiterated(function * () {
      ;
      for (const langSubfamilyExtId of langSubfamilyExtIds )
      for (const impTSp of moduleFormatDefiningExtSps )
      for (const xtSp of xtSps )
        yield util.asConst(`${impTSp }${util.asConst(`${langSubfamilyExtId }${xtSp }`) }`);
    })
  ))
) ;






/**
 * {@link webpackMustPreCompileSrcFileExts}
 * 
 * dont't just be stuck reading abt `transpilePackages` since
 * you won't get what you want there;
 * instead, head to
 * https://nextjs.org/docs/app/api-reference/next-config-js/webpack (for Webpack) or
 * https://nextjs.org/docs/app/api-reference/next-config-js/turbo (for Turbopack)
 * 
 */
export const webpackMustPreCompileSrcFileExts = (
  util.reiterated(function * () {
    yield* [] ;

    /** MARKDOWN-LIKE */
    {
      for (const langSubfamilyExtId of util.SEQ(["md"]) )
        yield* util.SEQ([langSubfamilyExtId, `${langSubfamilyExtId }x`]) ;
    }

    /** JS-LIKE */
    {
      yield* (
        describeBabelJsStyleAnalogousLanguageExtFamily({
          langSubfamilyExtIds: ["json"],
          moduleFormatDefiningExtSps: [""] ,
          xtSps: ["", "c"] ,
        })
      ) ;

      yield* (
        describeBabelJsStyleAnalogousLanguageExtFamily({
          langSubfamilyExtIds: ["js", "ts", "cs"],
          moduleFormatDefiningExtSps: ["", "c", "m"] ,
          xtSps: ["", "x"] ,
        })
      ) ;
    }

    /** CSS-LIKE */
    {
      yield* (
        describeBabelJsStyleAnalogousLanguageExtFamily({
          langSubfamilyExtIds: ["css", "scss", "sass"],
          moduleFormatDefiningExtSps: ["", ] ,
          xtSps: ["", ] ,
        })
      ) ;
    }

    ;
  })
)









