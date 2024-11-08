





/// <reference lib="ES2023" />
// /// <reference lib="ESNext.Array" />




// @ts-check
"use strict" ;

import {
  execSync,
  execFileSync,
  spawnSync,
} from "node:child_process" ;

import * as Path from "node:path";

import { fileURLToPath, } from "node:url";

import {
  readdirSync,
  unlinkSync,
  // ,
  writeFileSync ,
  writeSync ,
} from "node:fs" ;

import { pathToFileURL, } from "node:url";

import {
  // ,
} from "node:os" ;





const callingCwd = (
  process.cwd()
) ;





const calleeBaseDir = (
  Path.join(import.meta.dirname, "..", "..")
) ;

console["log"]({
  calleeBaseDir ,
}) ;



void (
  execFileSync("node", ["--import", (
    pathToFileURL(Path.join(calleeBaseDir, "scripts", "AllNeededPreRunSetups.mjs") ).href
    // Path.join(calleeBaseDir, "scripts", "AllNeededPreRunSetups.mjs")
  ), Path.join(calleeBaseDir, "dist", "PublishSnapshot.mts") ], {
    shell: true,
    stdio: ["inherit", "inherit", "inherit"],
    encoding: "utf8",
    cwd: callingCwd ,
  } )
) ;









