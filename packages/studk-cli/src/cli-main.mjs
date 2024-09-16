

import { util ,reiterable, iterateNonNull } from 'typexpe-commons/src/common_sv.mjs';

import {
  padEnd,
} from 'lodash-es'; ;

import { pathToFileURL, } from 'node:url' ;







const bashMainImpl = /** @satisfies {(args: String[] ) => any } */ (args ) => {
  ;
  
  1 && bashPrintSplashScreen() ;

  // const swcths = reiterable((/** @param {String[]} [args1] */ function* PARSE(args1 = args ) {
  //   for (let c = args; c.length; )
  //   {
  //     ;
  //     if (args1) {}
  //   }
  // }) ) ;

  const { mainTokens, configTokens, } = bashExtractPreFlags(args) ;

  if (mainTokens[0] === "help" )
  {
    return (
      bashPrintHelp(mainTokens.slice(1) )
    ) ;
  }
  else if ( (configTokens.includes("--help") || configTokens.includes("--h") || configTokens.includes("-h") ) )
  {
    return (
      bashPrintHelp(mainTokens )
    ) ;
  }

  if (mainTokens[0] === "repl")
  {
    ;
    // TODO
    // return (
    //   bashReplImpl(mainTokens.slice(1) )
    // ) ;
    return ;
  }

  {
    0 && bashPrintSplashScreen() ;
    console["error"](`Command Expected`) ;
    // console["warn"](`Usage: \n  repl [options]  \n  build-server start [options]  `) ;
    bashPrintHelp([AS_COMMAND_EXPECTED_FALLBACK ]) ;
    // console["warn"](`use 'iexpx-cli help' or 'iexpx-cli --help' to get full help, or, \n better yet, run 'man iexpx-cli'  `) ;
    process.exitCode = 5 ;
    return ;
  }
} ;

export { bashMainImpl, } ;

const AS_COMMAND_EXPECTED_FALLBACK = "--as-commandexpectedfallback" ;

const bashPrintSplashScreen = () => {
  ;
  console["warn"](util.stringLinesConcat(function* () {
    ;
    yield (`THE STUDK TOOLKIT `) ;
    yield (` `) ;
    yield (`     /+   `) ;
    yield (` +--+ |  XX  XX  XX  XX  XX   `) ;
    yield (` |    |   ||  ||  ||  ||  ||  `) ;
    yield (` |    |   ||  ||  ||  ||  ||  `) ;
    yield (` +--+ |  //  //  //  //  //   `) ;
    yield (`     X+  `) ;
    yield (` `) ;
  } )) ;
} ;

const bashPrintHelp = /** @satisfies {(args: String[] ) => any } */ (args ) => {
  ;
  
  const { configTokens, mainTokens, } = bashExtractPreFlags(args) ;

  if (mainTokens[0]?.match )
  {
    const c = mainTokens[0] ;
    console["info"](util.stringLinesConcat(function* () {
      yield `Usage for '${c }' :` ;
      yield `-  ${c } [...opts] [...args]` ;
      yield "" ;
      yield `for more help abt '${c }', type '${c } --help' ` ;
    } ) ) ;
    return ;
    ;
  }

  {
    const asCommandExpectedFallback = (
      configTokens.includes(AS_COMMAND_EXPECTED_FALLBACK )
    ) ;
  
    return bashPrintGeneralHelp({ asCommandExpectedFallback, }) ;
  }
} ;

import {
  ShListHelpTopicImpl,
  ShListHelpTopic ,
  ShModuleHelpTopicImpl ,
} from 'studk-fwcore/src/shModulesConvention.mjs';

const bashPrintGeneralHelp = /** @satisfies {(options: { asCommandExpectedFallback: Boolean } ) => any } */ ({ asCommandExpectedFallback, } ) => {
  ;

  const tag = (() => "iex-cli" )() ;

  const dest = /** @satisfies {keyof Console } */ (asCommandExpectedFallback ? "warn" : "info") ;

  const iGenerateModuleGroupTopic = (
    /** @type {(x: Readonly<{ title: string, contents: readonly ShModuleHelpTopicImpl[], }> ) => Iterable<string> } */
    function* (t)
    {
      yield (`${t.title }: `) ;
      yield (` `) ;
      for (const csm of t.contents )
      { yield* iGenerateModuleTopic(csm) ; }
    }
  ) ;
  
  const iGenerateModuleTopic = (
    /** @type {(x: ShModuleHelpTopicImpl ) => Iterable<string> } */
    function* (csm)
    {
      ;
      yield `${csm.title }: ` ;
      for (const clItem of csm.functions )
      {
        const [appFmt, desc ] = clItem ;
        yield `-  ${`${tag} ${appFmt} `.padEnd(60, " ") } - ${desc } ` ;
      }
      yield ` ` ;
    }
  ) ;
  
  if (asCommandExpectedFallback === false )
  {
    console[dest](util.stringLinesConcat(function* () {
      ;
      yield* iGenerateModuleGroupTopic({
        title: `Usage` ,
        contents: [
          //
          new ShModuleHelpTopicImpl({
            title: `More Help Topics` ,
            functions: [
              [`[...opts] help `, `help-page`] ,
              [`[...opts] help [...opts] <what> [...args]`, `relevant help-page`] ,
              [`[...opts] version`, `the toolkit version info`] ,
            ] ,
          })
          ,
          new ShModuleHelpTopicImpl({
            title: `App Portability And Dependency-Hardwiring` ,
            functions: [
              [`[...opts] [...opts] app-bundle [...opts] [...args] `, `code-bundling-related functl`] ,
              [`[...opts] [...opts] app-bundle [...opts] compile [...args] `, `generates app-bundle as given`] ,
            ] ,
          })
          ,
        ] ,
      }) ;
      // yield (`More Help Topics: `) ;
      // yield (`-  ${tag } [...opts] help                                     : help-page `) ;
      // yield (`-  ${tag } [...opts] help [...opts] <what> [...args]          : relevant help-page `) ;
      // yield (`-  ${tag } [...opts] --help [...opts] <what> [...args]        : relevant help-page `) ;
      // yield (`-  ${tag } [...opts] --version                                : the platform version info `) ;
      // yield (`-  ${tag } [...opts] version                                  : the platform version info `) ;
      // yield (` `) ;
      // yield (`REPL (Read-Eval-Print Loop Session) : `) ;
      // yield (`-  ${tag } [...opts] repl [...opts] start [...args]           : starts an REPL `) ;
      // yield (`-  ${tag } [...opts] repl [...opts] [...args]                 : REPL-related functl `) ;
      // yield (` `) ;
      // yield (`App Portability And Dependency-Hardwiring : `) ;
      // yield (`-  ${tag } [...opts] app-bundle [...opts] [...args]           : code-bundling-related functl `) ;
      // yield (`-  ${tag } [...opts] app-bundle [...opts] compile [...args]   : generates app-bundle as given `) ;
      // yield (` `) ;
      // yield (`IDE LSP-BSP infrastructure : `) ;
      // yield (`-  ${tag } [...opts] build-server [...opts] [...args]         : BSP-related functl `) ;
      // yield (`-  ${tag } [...opts] build-server [...opts] start [...args]   : ensure that the BSP is running `)  ;
      // yield (` `) ;
      yield (` `) ;
    } )) ;
  }
  else
  {
    console[dest](util.stringLinesConcat(function* () {
      ;
      yield* iGenerateModuleTopic((
        new ShModuleHelpTopicImpl({
          title: `Usage` ,
          functions: [...(util.reiterable(/** @return {Generator<[String, String]> } */ function* () {
            ;
            yield [`[...options] help                   `, `help-page `              ] ;
            yield [`[...options] help <what> [...args]  `, `tool-specific help-page `] ;
            yield [`[...options] version                `, `platform version `] ;
            yield [`[...options] repl start [...args]   `, `starts an REPL `] ;
            yield [`[...options] build-server [...args] `, `BSP-related functl `] ;
            0 && (yield [`[...options] app-bundle [...args]   `, `code-bundling functl `]) ;
          } ) )] ,
        })
      )) ;
    } ) ) ;
  }
  ;
  if (asCommandExpectedFallback === false )
  {
    console[dest](util.stringLinesConcat(function* () {
      ;
      yield* iGenerateModuleTopic((
        new ShModuleHelpTopicImpl({
          title: `Config` ,
          functions: [...(util.reiterable(/** @return {Generator<[String, String]> } */ function* () {
            ;
            yield* [] ;
          } ) )] ,
        })
      )) ;
      yield* iGenerateModuleTopic((
        new ShModuleHelpTopicImpl({
          title: `Logging` ,
          functions: [...(util.reiterable(/** @return {Generator<[String, String]> } */ function* () {
            ;
            yield [`--verbose-topic=<what>`, ` more debug-logging for the specified tool `] ;
            yield [`--verbose             `, ` more debug-logging all  `] ;
            yield [`--verbose-topic=<what>`, ` can be passed multiple times with different 'what's `] ;
            yield [`--lglvc=<what>=<lvl>  `, ` fine-grained debug-level-config for given tool `] ;
          } ) )] ,
        })
      )) ;
      yield* iGenerateModuleTopic((
        new ShModuleHelpTopicImpl({
          title: `Sandboxing` ,
          functions: [...(util.reiterable(/** @return {Generator<[String, String]> } */ function* () {
            ;
            yield [`--dry-run`, `make it take place on a sandbox`] ;
          } ) )] ,
        })
      )) ;
      yield "" ;
      yield "" ;
    } ) ) ;
  }
  (asCommandExpectedFallback === false ) ? (
    console[dest ](`For class-specific help, type ${JSON.stringify(`${tag} <what> help`) } or ${JSON.stringify(`${tag} help <what>`) } ; \n better yet, run ${JSON.stringify(`man ${tag} <what>`) } `)
  ) : (
    console[dest](`use ${JSON.stringify(`${tag} help`) } or ${JSON.stringify(`${tag} --help`) } to get full help, or, \n better yet, run ${JSON.stringify(`man ${tag}`) }  `)
  ) ;
} ;

export { bashPrintHelp, } ;




import { bashExtractPreFlags, } from './cli-std-flag-parsing.mjs';

export { bashExtractPreFlags, } ;







