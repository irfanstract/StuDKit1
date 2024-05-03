




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import { pathToFileURL, fileURLToPath, } from 'node:url' ;

import * as FS from 'node:fs' ;
import * as Path from 'node:path' ;

import { exec, execSync, spawnSync, } from 'node:child_process';







export const scriptsDirActualPath = (
  Path.join(fileURLToPath(import.meta.url), ".." )
) ;

export const baseDirActualPath = (
  Path.join(scriptsDirActualPath, ".." )
) ;

export const pkgsDirActualPath = (
  Path.join(baseDirActualPath, "packages" )
) ;






