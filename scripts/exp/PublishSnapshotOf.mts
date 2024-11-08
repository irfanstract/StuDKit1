






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

import {
  GitSnapshotNaming ,
} from 'studk-util/src/util/GitRefNameGen.ts';

import {
  execSync ,
} from "node:child_process" ;





const args = process.argv.slice(2) ;

const srcD = (
  args[0] ?? process.cwd()
) ;

// git   push    origin    HEAD:refs/tags/all-240805-0702-incomplete
{

  const t = Date.now() ;

  const nme = (
    `all-${ GitSnapshotNaming.formatGitRefUsableHyphenatedDateTimeStr(t) }-nightly`
    .replace(/\-+/g, " ")
    .match(/\S+/g)!
    .join("-")
  ) ;

  console["log"]({ nme, }) ;

  const { o, p, } = (
    (function ()
    : { o: string, p: string, }
    {
      return {
        o: "origin",
        p: `HEAD:refs/tags/${nme }` ,
      } ;
    })()
  ) ;

  console["log"]({ o, p, }) ;

  if (1) {
    ;
    execSync((
      `git push ${o } ${p }`
    ) , {
      cwd: srcD ,
      stdio: ["inherit", "inherit", "inherit"] ,
      encoding: "utf8",
    }) ;
  }

}










