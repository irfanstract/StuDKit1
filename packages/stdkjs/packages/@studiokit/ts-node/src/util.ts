import { dirname } from 'path';

import "./utilGlobalConsoleAlwaysStderr" ;

/**
 * @internal
 * Copied from https://unpkg.com/yn@3.1.1/index.js
 * Because people get weird when they see you have dependencies. /jk
 * This is a lazy way to make the dep number go down, we haven't touched this
 * dep in ages, and we didn't use all its features, so we stripped them.
 */
export function yn(input: string | undefined): boolean | undefined ;
export function yn(input: string | undefined) {
  input = String(input).trim();

  if (/^(?:y|yes|true|1)$/i.test(input)) {
    return true;
  }

  if (/^(?:n|no|false|0)$/i.test(input)) {
    return false;
  }
}

export const isUnderCspNoEvalsPolicy = (

  (): boolean => {
    try {
      new Function(``) ;
      return false ;
    } catch (z) {
      return true ;
    }
  }
) ;

/**
 * Like `Object.assign`, but ignores `undefined` properties.
 *
 * @internal
 */
export function assign(...args: never): unknown ;
// export function assign<dummy5 extends never, dummy6 extends never, dummy7 extends never, const T extends object = never, dummy8 extends never = never,  >(...args: never): unknown ;
// export function assign<dummy5 extends never, dummy6 extends never, dummy7 extends never, const T extends object = never, dummy8 extends never = never, DstT = NoInfer<{ /** supposed to be assignable, to prevent unintended mutability */ [k in {} & (keyof T)] ?: T[k] ; }> >(
//   initialValue: NoInfer<(DstT )>,
//   ...sources: (Array<T> )
// ): typeof initialValue ;
// /** @deprecated seems like there're properties not supposed to be reassigned, aren't there? check your objs' types. */
// export function assign<dummy5 extends never, dummy6 extends never, dummy7 extends never, const T extends object = never,  >(
//   initialValue: NoInfer<({ readonly [k in {} & (keyof T)] ?: T[k] ; } )>,
//   ...sources: (Array<T> )
// ): typeof initialValue ;
export function assign<const T extends object = never, >(
  initialValue: NoInfer<({ /** supposed to be assignable, to prevent unintended mutability */ [k in {} & (keyof T)] ?: T[k] ; } )>,
  ...sources: NoInfer<(Array<{ readonly [k in {} & (keyof T)] ?: T[k] ; }> )>
): typeof initialValue ;
// export function assign<const TSrc extends object, TDest extends { [k in keyof TSrc]: unknown ; }>(initialValue: TDest, ...sources: Array<TSrc>): TDest ;
export function assign<const TSrc extends object, TDest extends { [k in keyof TSrc]: unknown ; }>(initialValue: TDest, ...sources: Array<TSrc>): TDest {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const value = (source as any)[key];
      if (value !== undefined) (initialValue as any)[key] = value;
    }
  }
  return initialValue;
}

/**
 * Split a string array of values
 * and remove empty strings from the resulting array.
 * @internal
 */
export function split(value: string            ): string[]             ;
export function split(value: string | undefined): string[] | undefined ;
export function split(value: string | undefined) {
  return typeof value === 'string' ? value.split(/ *, */g).filter((v) => v !== '') : undefined;
}

/**
 * Parse a string as JSON.
 * @internal
 */
export function parse(value: string            ): object | null             ;
export function parse(value: string | undefined): object | null | undefined ;
export function parse(value: string | undefined): object | null | undefined {
  return typeof value === 'string' ? JSON.parse(value) : undefined;
}

const directorySeparator = '/';
const backslashRegExp = /\\/g;
/**
 * Replace backslashes with forward slashes.
 * @internal
 */
export function normalizeSlashes(value: string): string {
  return value.replace(backslashRegExp, directorySeparator);
}

/**
 * Safe `hasOwnProperty`
 * @internal
 */
export function hasOwnProperty(object: any, property: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, property);
}

/**
 * Cached fs operation wrapper.
 */
export function cachedLookup<T, R>(fn: (arg: T) => R): (arg: T) => R {
  const cache = new Map<T, R>();

  return (arg: T): R => {
    if (!cache.has(arg)) {
      const v = fn(arg);
      cache.set(arg, v);
      return v;
    }
    return cache.get(arg)!;
  };
}

/**
 * @internal
 * Require something with v8-compile-cache, which should make subsequent requires faster.
 * Do lots of error-handling so that, worst case, we require without the cache, and users are not blocked.
 */
export function attemptRequireWithV8CompileCache(requireFn: typeof require, specifier: string) {
  try {
    const v8CC = (require('v8-compile-cache-lib') as typeof import('v8-compile-cache-lib')).install();
    try {
      return requireFn(specifier);
    } finally {
      v8CC?.uninstall();
    }
  } catch (e) {
    return requireFn(specifier);
  }
}

/**
 * Helper to discover dependencies relative to a user's project, optionally
 * falling back to relative to ts-node.  This supports global installations of
 * ts-node, for example where someone does `#!/usr/bin/env -S ts-node --swc` and
 * we need to fallback to a global install of @swc/core
 * @internal
 */
export function createProjectLocalResolveHelper(localDirectory: string) {
  return function projectLocalResolveHelper(specifier: string, fallbackToTsNodeRelative: boolean) {
    return require.resolve(specifier, {
      paths: fallbackToTsNodeRelative ? [localDirectory, __dirname] : [localDirectory],
    });
  };
}
/** @internal */
export type ProjectLocalResolveHelper = ReturnType<typeof createProjectLocalResolveHelper>;

/**
 * Used as a reminder of all the factors we must consider when finding project-local dependencies and when a config file
 * on disk may or may not exist.
 * @internal
 */
export function getBasePathForProjectLocalDependencyResolution(
  configFilePath: string | undefined,
  projectSearchDirOption: string | undefined,
  projectOption: string | undefined,
  cwdOption: string
) {
  if (configFilePath != null) return dirname(configFilePath);
  return projectSearchDirOption ?? projectOption ?? cwdOption;
  // TODO technically breaks if projectOption is path to a file, not a directory,
  // and we attempt to resolve relative specifiers.  By the time we resolve relative specifiers,
  // should have configFilePath, so not reach this codepath.
}

import assert = require('assert');

function failMissingArgName<const RT = never>(nm: string): RT
{
  return (
    assert.fail(new TypeError(`unspecified argument '${nm}'`) )
  ) ;
}

export { assert, } ;

/** @internal */
export function once<Fn extends (...args: any[]) => any>(fn: Fn) {
  let value: ReturnType<Fn>;
  let ran = false;
  function onceFn(...args: Parameters<Fn>): ReturnType<Fn> {
    if (ran) return value;
    value = fn(...args);
    ran = true;
    return value;
  }
  return onceFn;
}

export { memoize, } from "lodash" ;

export import Immutable = require("immutable") ;

export function utilReiterated<const E>(src: () => Iterable<E> ) {
  return [...src() ] ;
}

/**
 * transform given URL String, thru localised in-place ops `applyMod`
 * 
 */
const mutationallyTransformUrl = (

  function (...[x0, applyMod]: [x0: string, applyMod: (x: URL) => (URL | undefined | void) ])
  : string
  {
    /**
     * unfntely,
     * {@link URL `class` `URL`} doesn't support relative URL(s), so
     * we'll need to
     * first convert into absolute URL, and then,
     * with our best-effort, try to do what we know to ensure that, if {@link x0} was Relative URL, the return-value is another Relative URL
     * 
     */
    {

      const isAsRelativeUrl1 = (
        isRelativeUrlString(x0)
      ) ;

      const o = (
        /** see {@link resolveUrl } */
        (new URL(x0, 'resolve://') )
      ) ;

      const o1 = (applyMod(o) ?? null ) ?? o ;

      return (
        isAsRelativeUrl1 ?
        /** see {@link resolveUrl } */
        (o1.pathname + o1.search + o1.hash )
        :
        o1.toString()
      ) ;
    }
  }
) ;

export {
  mutationallyTransformUrl,
} ;

const isRelativeUrlString = (

  (...[x0]: [x: string]) => {
    return (
      /** see {@link resolveUrl } */
      (
        (new URL(x0, 'protocolone://').protocol !== new URL(x0, 'protocoltwo://').protocol )
      )
    ) ;
  }
) ;

export {
  isRelativeUrlString,
} ;

import {
  resolve as resolveUrl ,
} from "node:url" ;

/**
 * joins {@link dropSearchParamAndHash `dropSearchParamAndHash(from)`} and `to`;
 * equivalent to this
 * 
 * ```
 *  resolveUrl(
 *    dropSearchParamAndHash(x0, ).replace(/(\/?)$/, () => "/index")
 *    ,
 *    x1)
 * ```
 * 
 */
const joinUrlNoBsp = (

  (...[x0, x1] : Parameters<typeof resolveUrl>) => (

    // TODO
    resolveUrl(
      dropSearchParamAndHash(x0, ).replace(/(\/?)$/, () => "/index")
      ,
      x1)
  )
) ;

/**
 * omitting `from`'s `search` and `hash`
 * 
 */
const dropSearchParamAndHash = (

  (...[x0]: [x: string]) => (

    mutationallyTransformUrl(x0, e => { e.hash = "" ; e.search = "" ; } )
  )
) ;

export {
  resolveUrl ,
  dropSearchParamAndHash,
  joinUrlNoBsp ,
  /** implemented as {@link joinUrlNoBsp}. @deprecated */
  joinUrlNoBsp as joinUrl ,
} ;

/** @internal */
export function versionGteLt(version: string, gteRequirement: string, ltRequirement?: string) {
  const [major = failMissingArgName("major"), minor, patch, extra] = parse(version);
  const [gteMajor, gteMinor, gtePatch] = parse(gteRequirement);
  const isGte =
    // @ts-ignore
    major > gteMajor || (major === gteMajor && (minor > gteMinor || (minor === gteMinor && patch >= gtePatch)));
  let isLt = true;
  if (ltRequirement) {
    const [ltMajor, ltMinor, ltPatch] = parse(ltRequirement);
    // @ts-ignore
    isLt = major < ltMajor || (major === ltMajor && (minor < ltMinor || (minor === ltMinor && patch < ltPatch)));
  }
  return isGte && isLt;

  function parse(requirement: string) {
    return requirement.split(/[\.-]/).map((s) => parseInt(s, 10));
  }
}

export function getStackOrMessage(value: Error    ): string ;
export function getStackOrMessage(value: unknown  ): string ;
export function getStackOrMessage(...[o] : [unknown])
{
  if (o instanceof Error) {
    const stack = o.stack ;
    if (stack) {
      return stack ;
    }
  }
  return String(o) ;
}

export type ArgsWithOptions<P extends readonly unknown[], opt extends object > = (
  [...P , ...(
    [{}] extends [opt] ?
    [options ?: opt]
    : [opts : opt]
  ) ]
) ;

export type AllOrNever1<Props extends object> = (
  (
    Props extends any ?
    AnevImplEach<Props>
    : never
  )
  |
  { [k in PossibleKeyOf<Props>] ?: never ; }
) ;

type AnevImplEach<Props extends object> = (
  Required<Props>
) ;

export type PossibleKeyOf<Props extends object> = (
  Props extends any ?
  PossibleKeyOfOneAlt<Props>
  : never
) ;

export type KeyOf<Props extends object> = (
  PossibleKeyOfOneAlt<Props>
) ;

type PossibleKeyOfOneAlt<Props extends object> = (
  keyof Required<Props>
) ;

{
  {
    const ADPE = (x: AtLeastEitherProp<{
      //
      onNewKnownPath : (value: string) => void ,
      onNewDynamicPathExpr : (expr: NodeRequire) => void ,
    }>) => { x.onNewDynamicPathExpr ; } ;
    ADPE({ onNewDynamicPathExpr: () => {} , }) ;
    ADPE({ onNewKnownPath: () => {} , }) ;
    ADPE({
      onNewKnownPath: () => {} ,
      onNewDynamicPathExpr: () => {} ,
    }) ;
    // @ts-expect-error
    ADPE({
    }) ;
  }
}

export type AtLeastEitherProp<Props extends object> = (
  Partial<Props>
  & Required<PickEitherProp1<Props > >
) ;

export type { EitherOneProp, } ;

/**
 * 
 * @deprecated
 */
export type EitherOneProp1<Props extends object> = (
  OnlySelectEitherProp<Props, keyof Props>
) ;

/**
 * 
 * @deprecated
 */
type PickEitherProp1<D extends object, kChosen extends keyof D = keyof D > = (
  kChosen extends any ?
  Pick<D, kChosen>
  : never
) ;

type OnlySelectEitherProp<D extends object, kChosen extends keyof D = keyof D> = (
  kChosen extends any ?
  OnlySelectProps<D, kChosen>
  : never
) ;

type OnlySelectProps<D extends object, kChosen extends keyof D> = (
  { [k1 in keyof D]?: ([k1] extends [kChosen] ? D[k1] : never ) ; }
  &
  Required<{ [k1 in kChosen]?: unknown ; }>
) ;

export type {
  PickEitherProp1 as PickEitherProp ,
  OnlySelectEitherProp ,
  OnlySelectProps ,
} ;

type EipSingleProp<k extends keyof any, val> = (
  k extends any ?
  { [k1 in k]: val ; }
  : never
) ;

import type {
  EitherOneProp,
  PickGivenAndDenyOthers ,
} from "./util-recordtypes" ;






