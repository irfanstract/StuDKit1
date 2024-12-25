



import { relative, basename, extname, dirname, join } from 'path';
import { builtinModules, Module } from 'node:module';
import * as util from 'util';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';

import { BaseError } from 'make-error';
import type * as _ts from 'typescript';

import type { Transpiler, TranspilerFactory } from './transpilers/types';
import assert = require('assert');
import {
  cachedLookup,
  createProjectLocalResolveHelper,
  getStackOrMessage,
  hasOwnProperty,
  memoize,
  normalizeSlashes,
  once,
  parse,
  ProjectLocalResolveHelper,
  utilReiterated,
  split,
  versionGteLt,
  yn,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
} from './util';






abstract class EntryPtPathAndDispatchSchedule {
  // @ts-ignore
  #iEntryPointModeBrand = true ;
  protected constructor(
    protected readonly lsMode: EntryPtPathAndDispatchSchedule.Ls,
  )
  {
    this.live   = lsMode === EntryPtPathAndDispatchSchedule.LIVE ;
    this.toSave = lsMode === EntryPtPathAndDispatchSchedule.SAVE ;
  }
  readonly   live !: boolean ;
  readonly toSave !: boolean ;
}

namespace EntryPtPathAndDispatchSchedule {
  /** REPL        -      */ export           class      PROMPT extends EntryPtPathAndDispatchSchedule { protected constructor(lsMode: Ls) { super(lsMode) ; } }
  /** REPL        - live */ export           class LIVE_PROMPT extends PROMPT { constructor() { super(LIVE) ; } }
  /** REPL        - save */ export           class SAVE_PROMPT extends PROMPT { constructor() { super(SAVE) ; } }
  /** READFILE    -      */ export           class      FILE   extends EntryPtPathAndDispatchSchedule { protected constructor(readonly srcFileUrl: string, lsMode: Ls) { super(lsMode) ; } }
  /** READFILE    - live */ export           class LIVE_FILE   extends FILE { constructor(srcFilePath: string) { super(srcFilePath, LIVE) ; } }
  /** READFILE    - save */ export           class SAVE_FILE   extends FILE { constructor(srcFilePath: string) { super(srcFilePath, SAVE) ; } }

  export type Ls = typeof LIVE | typeof SAVE ;
  export const LIVE = Symbol("LIVE") ;
  export const SAVE = Symbol("SAVE") ;
}

export { EntryPtPathAndDispatchSchedule, } ;








