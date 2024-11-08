







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import { Ordering, } from 'studk-fwcore-setups/src/util-all.mjs';

// import {
//   random,
// } from "lodash-es" ;

import {
  AllOrNever1,
  ArgsWithOptions ,
} from "studk-fwcore/src/util/C1.ts" ;







/**
 * this stand-alone JS file "CPP Glob App" is here since
 * the corresponding JS file (within)in `/scripts/` needs to resort to `execSync()` wrapper.
 * 
 */







import {
  bashExtractPreFlags ,
  MainTokensAndConfigTokens ,
} from "studk-cli/i/CliStdFlagParsing";

import {
  findCppFiles,
  relative,
} from "studk-cli/i/CppGlob";








{
  const {
    mainTokens: mt ,
    configTokens ,
  } = (
    bashExtractPreFlags((
      /* index `1` already used to convey the dispatched script-file-path. */
      process.argv
      .slice(2)
    ) )
  ) ;

  const opts = (
    configTokens
    .reduce<(
      & AllOrNever1<{ baseDir : string , }>
    )>((...[s0 , cm]) => {

      for (const [ , , bdFlagSuffix = util.throwAssertionError(`!bdFlagSuffix (input: '${cm }')`) ] of util.iterateNonNull(cm.match(/^--(base-?(?:directory|dir|path|wd))(.*)$/) ) ) {
        ;

        for (const [ , , bdVal0 ] of util.iterateNonNull(bdFlagSuffix.match(/^=()([\S]*)$/) ) )
        {
          const bdVal = (
            bdVal0 ??
            util.throwTypeError(`failed to extract for 'bdVal' (NF) from token '${cm }'`)
          );
  
          return {
            ...s0 ,
            baseDir: bdVal ,
          } ;
        }

        return (
          util.throwTypeError(`invalid '${cm }' flag usage, must be given argument (properly-written path-spec) `)
        ) ;
      }

      return (
        util.throwTypeError(`unrecognized switch '${cm }'`)
      ) ;
    } , {})
  ) ;

  const searchPaths = (
    util.Immutable.Seq(mt)
    .reduce<util.Immutable.Seq.Indexed<{ path: string, eOpts: string[] } > >((...[s0 , path]) => {
      // TODO
      for (const swtch of bashExtractPreFlags([path]).configTokens ) {
        const e0 = s0.last()! ;
        return s0.skipLast(1).concat([{ ...e0 , eOpts: [...e0.eOpts , swtch ] , } ]) ;
      }
      return s0.concat([ { path: path, eOpts: [], } ]) ;
    } , util.Immutable.Seq([]) )
    .map((e) => e.path )
    .toArray()
  ) ;

  if ((searchPaths.length ?? util.throwAssertionError(`'searchPaths.length'`) ) <= 0 ) {
    console["warn"](`no path(s) were specified. please specify one. `)
  }

  const results = (
    util.reiterated(function* () {

      for (const dir of searchPaths ) {

        yield* (
          findCppFiles(dir , {
            returnedPathsAsAbsolute: true ,
            includeSelf: true ,
          } )
          .map(e => (
            opts.baseDir ?
            relative(opts.baseDir, e)
            :
            e
          ))

        ) ;
      }

    })
  ) ;

  /**
   * format the results as JSON onto {@link process.stdout} .
   * avoid {@link console } since console logs of arbitrary severity could instead go to `err` .
   * 
   */
  void (process.stdout.write(JSON.stringify(results, null, 2 ) + "\r\n\r\n" , "ascii" )) ;
}















