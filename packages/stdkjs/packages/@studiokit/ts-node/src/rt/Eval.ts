
/// <reference lib="ES2022" />
/// <reference lib="DOM" />



import { builtinModules as builtinModulesListed0, Module } from 'node:module';
import * as util from 'node:util';

import assert = require('node:assert');
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
  Immutable,
  type ArgsWithOptions, 
  AtLeastEitherProp,
} from './util';

import {
  MockBlob ,
} from "./EbMockBlob" ;

import {
  builtinModules ,
  builtinModulesListed ,
  // builtinModulesListed0 ,
} from "./BuiltinModules" ;

import { createRequire, } from 'node:module';

import * as VM from "node:vm" ;

import {
  newRealm ,
} from "./Realms" ;















