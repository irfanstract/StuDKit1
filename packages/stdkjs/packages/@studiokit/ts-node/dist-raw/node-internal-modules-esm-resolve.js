// Copied from https://raw.githubusercontent.com/nodejs/node/v15.3.0/lib/internal/modules/esm/resolve.js witth chgs

// @ts-check

'use strict';

const { fail } = require('node:assert');

const {versionGteLt} = require('../dist/util');

// Test for node >14.13.1 || (>=12.20.0 && <13)
const builtinModuleProtocol =
  versionGteLt(process.versions.node, '14.13.1') ||
  versionGteLt(process.versions.node, '12.20.0', '13.0.0')
    ? 'node:'
    : 'nodejs:';

const {
  ArrayIsArray,
  ArrayPrototypeJoin,
  ArrayPrototypeShift,
  ArrayPrototypeMap,
  JSONParse,
  JSONStringify,
  ObjectFreeze,
  ObjectGetOwnPropertyNames,
  ObjectPrototypeHasOwnProperty,
  RegExpPrototypeExec,
  RegExpPrototypeTest,
  RegExpPrototypeSymbolReplace,
  SafeMap,
  SafeSet,
  // String,
  StringPrototypeEndsWith,
  StringPrototypeIncludes,
  StringPrototypeIndexOf,
  StringPrototypeLastIndexOf,
  StringPrototypeReplace,
  StringPrototypeSlice,
  StringPrototypeSplit,
  StringPrototypeStartsWith,
  StringPrototypeSubstr,
  // encodeURIComponent,
  URLCanParse,
} = require('./node-primordials');

// const internalFS = require('internal/fs/utils');
const Module = require('module');
const { NativeModule } = require('./node-nativemodule');
const {
  realpathSync,
  statSync,
  Stats,
} = require('fs');
// const { URL, pathToFileURL, fileURLToPath } = require('internal/url');
const { URL, pathToFileURL, fileURLToPath } = require('url');
const URLParse = (
  require("node:url").parse
) ;
const { getCWDURL, setOwnProperty } = require('./node-internal-util');



/**
 * @typedef {object} DefgfCtx
 * 
 * @property {string  } [parentURL] - The URL of the parent module.
 * @property {string[]} [conditions] - The conditions for resolving the specifier.
 * 
 */

/**
 * @param {{
 *  extensions: import('../src/file-extensions').Extensions,
 *  preferTsExts: boolean | undefined;
 *  tsNodeExperimentalSpecifierResolution: import('../src/index').ExperimentalSpecifierResolution | undefined;
 *  defaultGetFormatWithoutErrors: (...x: [href: URL, ctx?: DefgfCtx]) => any ;
 * }} opts
 */
function createResolve(opts) {
;

// const { getOptionValue } = require('internal/options');
// TODO
const { getOptionValue } = require('./node-options');
// // Do not eagerly grab .manifest, it may be in TDZ
// const policy = getOptionValue('--experimental-policy') ?
//   require('internal/process/policy') :
//   null;
// disabled for now.  I am not sure if/how we should support this
const policy = null;
const { sep, posix: { relative: relativePosixPath }, resolve } = require('path');
const preserveSymlinks = getOptionValue('--preserve-symlinks');
const preserveSymlinksMain = getOptionValue('--preserve-symlinks-main');
const inputTypeFlag = getOptionValue('--input-type');
/** @deprecated alias of {@link inputTypeFlag} */
const typeFlag = inputTypeFlag ;
const experimentalNetworkImports =
  getOptionValue('--experimental-network-imports');
// const { getCWDURL, setOwnProperty } = require('internal/util');
// const { canParse: URLCanParse } = internalBinding('url');
// const { legacyMainResolve: FSLegacyMainResolve } = internalBinding('fs');
const {
  ERR_INPUT_TYPE_NOT_ALLOWED,
  ERR_INVALID_ARG_TYPE,
  ERR_INVALID_ARG_VALUE,
  ERR_INVALID_MODULE_SPECIFIER,
  ERR_INVALID_PACKAGE_CONFIG,
  ERR_INVALID_PACKAGE_TARGET,
  ERR_MANIFEST_DEPENDENCY_MISSING,
  ERR_MODULE_NOT_FOUND,
  ERR_PACKAGE_IMPORT_NOT_DEFINED,
  ERR_PACKAGE_PATH_NOT_EXPORTED,
  ERR_UNSUPPORTED_DIR_IMPORT,
  ERR_UNSUPPORTED_ESM_URL_SCHEME,
  ERR_UNSUPPORTED_RESOLVE_REQUEST,
  ERR_NETWORK_IMPORT_DISALLOWED,
// } = require('internal/errors').codes;
} = require('./node-internal-errors').codes;

// const { Module: CJSModule } = require('internal/modules/cjs/loader');
const CJSModule = Module;

// const packageJsonReader = require('internal/modules/package_json_reader');
const packageJsonReader = require('./node-internal-modules-package_json_reader');
const { any } = require('expect');
const userConditions = getOptionValue('--conditions');
const DEFAULT_CONDITIONS = ObjectFreeze(['node', 'import', ...userConditions]);
const DEFAULT_CONDITIONS_SET = new SafeSet(DEFAULT_CONDITIONS);

// const { internalModuleStat } = internalBinding('fs');

const pendingDeprecation = getOptionValue('--pending-deprecation');

/**
 * @typedef {import('@studiokit/ts-node').LoadedNodePackageConfig } PackageConfig
 */

/**
 * @typedef {import('@studiokit/ts-node').NodePackageJsonExports} PackageJsonExports
 */


// TODO receive cached fs implementations here
const {preferTsExts, tsNodeExperimentalSpecifierResolution, extensions} = opts;
const esrnExtensions = extensions.experimentalSpecifierResolutionAddsIfOmitted;
const {legacyMainResolveAddsIfOmitted, replacementsForCjs, replacementsForJs, replacementsForMjs, replacementsForJsx} = extensions;
// const experimentalSpecifierResolution = tsNodeExperimentalSpecifierResolution ?? getOptionValue('--experimental-specifier-resolution');
const experimentalSpecifierResolution = tsNodeExperimentalSpecifierResolution != null ? tsNodeExperimentalSpecifierResolution : getOptionValue('--experimental-specifier-resolution');

const emittedPackageWarnings = new SafeSet();

/**
 * Emits a deprecation warning for the use of a deprecated trailing slash pattern mapping in the "exports" field
 * module resolution of a package.
 * @param {string | URL} pjsonUrl - The URL of the package.json file.
 * @param {string} match - The deprecated trailing slash pattern mapping.
 * @param {string | URL} [base] - The URL of the module that imported the package.
 */
function emitTrailingSlashPatternDeprecation(match, pjsonUrl, base) {
  if (process.noDeprecation) {
    return;
  }
  const pjsonPath = fileURLToPath(pjsonUrl);
  if (emittedPackageWarnings.has(pjsonPath + '|' + match)) { return; }
  emittedPackageWarnings.add(pjsonPath + '|' + match);
  process.emitWarning(
    `Use of deprecated trailing slash pattern mapping "${match}" in the ` +
    `"exports" field module resolution of the package at ${pjsonPath}${
      base ? ` imported from ${fileURLToPath(base)}` :
        ''}. Mapping specifiers ending in "/" is no longer supported.`,
    'DeprecationWarning',
    'DEP0155',
  );
}

const doubleSlashRegEx = /[/\\][/\\]/;

/**
 * Emits a deprecation warning for invalid segment in module resolution.
 * @param {string} target - The target module.
 * @param {string} request - The requested module.
 * @param {string} match - The matched module.
 * @param {string | URL} pjsonUrl - The package.json URL.
 * @param {boolean} internal - Whether the module is in the "imports" or "exports" field.
 * @param {string | URL} base - The base URL.
 * @param {boolean} isTarget - Whether the target is a module.
 */
function emitInvalidSegmentDeprecation(target, request, match, pjsonUrl, internal, base, isTarget) {
  if (process.noDeprecation) {
    return;
  }
  const pjsonPath = fileURLToPath(pjsonUrl);
  const double = RegExpPrototypeExec(doubleSlashRegEx, isTarget ? target : request) !== null;
  process.emitWarning(
    `Use of deprecated ${double ? 'double slash' :
      'leading or trailing slash matching'} resolving "${target}" for module ` +
      `request "${request}" ${request !== match ? `matched to "${match}" ` : ''
      }in the "${internal ? 'imports' : 'exports'}" field module resolution of the package at ${
        pjsonPath}${base ? ` imported from ${fileURLToPath(base)}` : ''}.`,
    'DeprecationWarning',
    'DEP0166',
  );
}

/**
 * Emits a deprecation warning if the given URL is a module and
 * the package.json file does not define a "main" or "exports" field.
 * 
 * - {URL} url - The URL of the module being resolved.
 * - {URL} packageJSONUrl - The URL of the package.json file for the module.
 * - {string | URL} base - The base URL for the module being resolved.
 * - {string} [main] - The "main" field from the package.json file.
 * 
 * @param {(
 * | readonly [url: URL, ...([path: string, pkgPath: string,] | [packageJSONUrl: URL  ] ) , base: string | URL, ...([main?: string] ) ]
 * )} args0
 * 
 * @summary
 * in v20 this is 4-arg, yet in v22 this is 5-arg;
 * we need this to handle both
 */
function emitLegacyIndexDeprecation(...args0 ) {
  const args = (
    (() => {
      ;
      /** @typedef {O extends any ? ({ readonly [key in K ] : O[key & keyof O] ; } & { l: O["length"], baseTyp: ([O[1]] extends [string] ? "string" : "URL" ) }) : never} PickX @template {readonly unknown[]} O @template {(keyof any) & (string | number)} K */
      return (/** @type {PickX<typeof args0, 0 | 1 | 2 | 3 | 4 > } */ ({ ...args0,  l: args0.length, baseTyp: (typeof args0[1] === "string") ? "string" : "URL" , })) ;
    })()
  ) ;
  const { 0: url, } = args ;
  if (process.noDeprecation) {
    return;
  }
  const format = defaultGetFormatWithoutErrors(url);
  if (format !== 'module') { return; }
  /**
   * 
   * 
   */
  const {
    path ,
    pkgPath ,
    base ,
    main ,
  } = (
    (/** @return {{
      packageJSONUrl?: URL ,
      path: string ,
      pkgPath: string,
      base: string | URL,
      main ?: string,
    }} */ () => {
      ;
      const { 1: pathOrPjp, baseTyp, } = args ;
      if (baseTyp === "URL") {
        const {  1: packageJSONUrl, 2: base, 3: main  } = args ;
        const path = fileURLToPath(url);
        const pkgPath = fileURLToPath(new URL('.', packageJSONUrl));
        return {
          packageJSONUrl ,
          path ,
          pkgPath ,
          base ,
          main ,
        } ;
      }
      if (baseTyp === "string") {
        void [pathOrPjp, args] ;
        const {     1: path, 2: pkgPath, 3: base, 4: main  } = args ;
        return {
          path ,
          pkgPath ,
          base ,
          main ,
        } ;
      }
      throw ERR_INVALID_ARG_TYPE(`expecting 4 or 5`, args0 ) ;
    })()
  );
  const basePath = fileURLToPath(base);
  if (!main) {
    process.emitWarning(
      `No "main" or "exports" field defined in the package.json for ${pkgPath
      } resolving the main entry point "${
        StringPrototypeSlice(path, pkgPath.length)}", imported from ${basePath
      }.\nDefault "index" lookups for the main are deprecated for ES modules.`,
      'DeprecationWarning',
      'DEP0151',
    );
  } else if (resolve(pkgPath, main) !== path) {
    process.emitWarning(
      `Package ${pkgPath} has a "main" field set to "${main}", ` +
      `excluding the full filename and extension to the resolved file at "${
        StringPrototypeSlice(path, pkgPath.length)}", imported from ${
        basePath}.\n Automatic extension resolution of the "main" field is ` +
      'deprecated for ES modules.',
      'DeprecationWarning',
      'DEP0151',
    );
  }
}

/**
 * 
 * @param {string} match match
 * @param {URL | string} pjsonUrl assumed pjson url
 * @param {boolean} isExports is as exports
 * @param {string} base base
 * 
 */
function emitFolderMapDeprecation(match, pjsonUrl, isExports, base) {
  const pjsonPath = fileURLToPath(pjsonUrl);
  if (!pendingDeprecation) {
    const nodeModulesIndex = StringPrototypeLastIndexOf(pjsonPath,
                                                        '/node_modules/');
    if (nodeModulesIndex !== -1) {
      const afterNodeModulesPath = StringPrototypeSlice(pjsonPath,
                                                        nodeModulesIndex + 14,
                                                        -13);
      try {
        /** @example TODO we should pass {@link base} as second arg, shouldn't we? */
        const { packageSubpath } = parsePackageName(afterNodeModulesPath);
        if (packageSubpath === '.')
          return;
      } catch {}
    }
  }
  if (emittedPackageWarnings.has(pjsonPath + '|' + match))
    return;
  emittedPackageWarnings.add(pjsonPath + '|' + match);
  process.emitWarning(
    `Use of deprecated folder mapping "${match}" in the ${isExports ?
      '"exports"' : '"imports"'} field module resolution of the package at ${
      pjsonPath}${base ? ` imported from ${fileURLToPath(base)}` : ''}.\n` +
      `Update this package.json to use a subpath pattern like "${match}*".`,
    'DeprecationWarning',
    'DEP0148'
  );
}

/**
 * 
 * @param {readonly string[]} conditions 
 * @returns {Set<String> | Immutable.Set<string> }
 */
function getConditionsSet(conditions) {
  if (conditions !== undefined && conditions !== DEFAULT_CONDITIONS) {
    if (!ArrayIsArray(conditions)) {
      throw new ERR_INVALID_ARG_VALUE('conditions', conditions,
                                      'expected an array');
    }
    return new SafeSet(conditions);
  }
  return DEFAULT_CONDITIONS_SET;
}

// const realpathCache = new SafeMap();

const realpathCache = new SafeMap();

const legacyMainResolveExtensions = [
  '',
  '.js',
  '.json',
  '.node',
  '/index.js',
  '/index.json',
  '/index.node',
  './index.js',
  './index.json',
  './index.node',
];

const legacyMainResolveExtensionsIndexes = {
  // 0-6: when packageConfig.main is defined
  kResolvedByMain: 0,
  kResolvedByMainJs: 1,
  kResolvedByMainJson: 2,
  kResolvedByMainNode: 3,
  kResolvedByMainIndexJs: 4,
  kResolvedByMainIndexJson: 5,
  kResolvedByMainIndexNode: 6,
  // 7-9: when packageConfig.main is NOT defined,
  //      or when the previous case didn't found the file
  kResolvedByPackageAndJs: 7,
  kResolvedByPackageAndJson: 8,
  kResolvedByPackageAndNode: 9,
};

/** suppress "unused symbol" warnings */
void {
  legacyMainResolveExtensions ,
  legacyMainResolveExtensionsIndexes ,
} ;

/**
 * 
 * @type {Map<string, PackageConfig> }
 */
const packageJSONCache = new SafeMap();  /* string -> PackageConfig */

const statSupportsThrowIfNoEntry = versionGteLt(process.versions.node, '15.3.0') ||
  versionGteLt(process.versions.node, '14.17.0', '15.0.0');
const tryStatSync = statSupportsThrowIfNoEntry ? tryStatSyncWithoutErrors : tryStatSyncWithErrors;
const statsIfNotFound = new Stats();
/**
 * 
 * @param {import("node:fs").PathLike } path
 */
function tryStatSyncWithoutErrors(path) {
  const stats = statSync(path, { throwIfNoEntry: false });
  if(stats != null) return stats;
  return statsIfNotFound;
}
/**
 * 
 * @param {import("node:fs").PathLike } path
 */
function tryStatSyncWithErrors(path) {
  try {
    return statSync(path);
  } catch {
    return statsIfNotFound;
  }
}

/**
 * 
 * @param {string | URL} specifier the main specifier
 * @param {string} path 
 * @param {string} [base] base path
 */
function getPackageConfig(path, specifier, base) {
  const existing = packageJSONCache.get(path);
  if (existing !== undefined) {
    return existing;
  }
  const source = packageJsonReader.read(path).string;
  if (source === undefined) {
    /** @type {PackageConfig} */
    const packageConfig = {
      pjsonPath: path,
      exists: false,
      main: undefined,
      name: undefined,
      type: 'none',
      exports: undefined,
      imports: undefined,
    };
    packageJSONCache.set(path, packageConfig);
    return packageConfig;
  }

  let packageJSON;
  try {
    packageJSON = JSONParse(source);
  } catch (error) {
    throw new ERR_INVALID_PACKAGE_CONFIG(
      path,
      (base ? `"${specifier}" from ` : '') + fileURLToPath(base || specifier),
      error.message
    );
  }

  let { imports, main, name, type } = packageJSON;
  const { exports } = packageJSON;
  if (typeof imports !== 'object' || imports === null) imports = undefined;
  if (typeof main !== 'string') main = undefined;
  if (typeof name !== 'string') name = undefined;
  // Ignore unknown types for forwards compatibility
  if (type !== 'module' && type !== 'commonjs') type = 'none';

  /** @type {PackageConfig} */
  const packageConfig = {
    pjsonPath: path,
    exists: true,
    main,
    name,
    type,
    exports,
    imports,
  };
  packageJSONCache.set(path, packageConfig);
  return packageConfig;
}

/**
 * 
 * @param {string | URL} resolved resolved
 * 
 * @returns {PackageConfig}
 */
function getPackageScopeConfig(resolved) {
  let packageJSONUrl = new URL('./package.json', resolved);
  while (true) {
    const packageJSONPath = packageJSONUrl.pathname;
    if (StringPrototypeEndsWith(packageJSONPath, 'node_modules/package.json'))
      break;
    const packageConfig = getPackageConfig(fileURLToPath(packageJSONUrl),
                                           resolved);
    if (packageConfig.exists) return packageConfig;

    const lastPackageJSONUrl = packageJSONUrl;
    packageJSONUrl = new URL('../package.json', packageJSONUrl);

    // Terminates at root where ../package.json equals ../../package.json
    // (can't just check "/package.json" for Windows support).
    if (packageJSONUrl.pathname === lastPackageJSONUrl.pathname) break;
  }
  const packageJSONPath = fileURLToPath(packageJSONUrl);
  const packageConfig = /** @satisfies {PackageConfig } */ ({
    pjsonPath: packageJSONPath,
    exists: false,
    main: undefined,
    name: undefined,
    type: 'none',
    exports: undefined,
    imports: undefined,
  });
  packageJSONCache.set(packageJSONPath, packageConfig);
  return packageConfig;
}

/*
 * Legacy CommonJS main resolution:
 * 1. let M = pkg_url + (json main field)
 * 2. TRY(M, M.js, M.json, M.node)
 * 3. TRY(M/index.js, M/index.json, M/index.node)
 * 4. TRY(pkg_url/index.js, pkg_url/index.json, pkg_url/index.node)
 * 5. NOT_FOUND
 */

/** @type {(url: URL | string) => boolean} */
function fileExists(url) {
  return tryStatSync(fileURLToPath(url)).isFile();
}

/**
 * Legacy CommonJS main resolution:
 * 1. let M = pkg_url + (json main field)
 * 2. TRY(M, M.js, M.json, M.node)
 * 3. TRY(M/index.js, M/index.json, M/index.node)
 * 4. TRY(pkg_url/index.js, pkg_url/index.json, pkg_url/index.node)
 * 5. NOT_FOUND
 * 
 * see above for more
 * 
 * @param {URL} packageJSONUrl
 * @param {PackageConfig} packageConfig
 * @param {string | URL} base
 * @returns {URL}
 */
function legacyMainResolve(packageJSONUrl, packageConfig, base) {
  let guess;
  if (packageConfig.main !== undefined) {
    // Note: fs check redundances will be handled by Descriptor cache here.
    if(guess = resolveReplacementExtensions(new URL(`./${packageConfig.main}`, packageJSONUrl))) {
      return guess;
    }
    if (fileExists(guess = new URL(`./${packageConfig.main}`,
                                   packageJSONUrl))) {
      return guess;
    }
    for(const extension of legacyMainResolveAddsIfOmitted) {
      if (fileExists(guess = new URL(`./${packageConfig.main}${extension}`,
                                    packageJSONUrl))) {
        return guess;
      }
    }
    for(const extension of legacyMainResolveAddsIfOmitted) {
      if (fileExists(guess = new URL(`./${packageConfig.main}/index${extension}`,
                                    packageJSONUrl))) {
        return guess;
      }
    }
    // Fallthrough.
  }
  for(const extension of legacyMainResolveAddsIfOmitted) {
    if (fileExists(guess = new URL(`./index${extension}`, packageJSONUrl))) {
      return guess;
    }
  }
  // Not found.
  throw new ERR_MODULE_NOT_FOUND(
    fileURLToPath(new URL('.', packageJSONUrl)), fileURLToPath(base));
}

/** attempts replacement extensions, then tries exact name, then attempts appending extensions */
/**
 * attempts replacement extensions, then
 * tries exact name, then attempts appending extensions
 * 
 * @param {URL} search query
 * 
 *  */
function resolveExtensionsWithTryExactName(search) {
  const resolvedReplacementExtension = resolveReplacementExtensions(search);
  if(resolvedReplacementExtension) return resolvedReplacementExtension;
  if (fileExists(search)) return search;
  return resolveExtensions(search);
}

// This appends missing extensions
/**
 * this appends missing extensions.
 * restriction applies per the spec (eg it not happen on ESM).
 * 
 * @param {URL} search query
 */
function resolveExtensions(search) {
  for (let i = 0; i < esrnExtensions.length; i++) {
    const extension = esrnExtensions[i];
    const guess = new URL(`${search.pathname}${extension}`, search);
    if (fileExists(guess)) return guess;
  }
  return undefined;
}

/** This replaces JS with TS extensions */
/**
 * This replaces JS with TS extensions
 * 
 * @param {URL} search
 * 
 */
function resolveReplacementExtensions(search) {
  const lastDotIndex = search.pathname.lastIndexOf('.');
  if(lastDotIndex >= 0) {
    const ext = search.pathname.slice(lastDotIndex);
    if (ext === '.js' || ext === '.jsx' || ext === '.mjs' || ext === '.cjs') {
      const pathnameWithoutExtension = search.pathname.slice(0, lastDotIndex);
      const replacementExts =
        ext === '.js' ? replacementsForJs
        : ext === '.jsx' ? replacementsForJsx
        : ext === '.mjs' ? replacementsForMjs
        : replacementsForCjs;
      const guess = new URL(search.toString());
      for (let i = 0; i < replacementExts.length; i++) {
        const extension = replacementExts[i];
        guess.pathname = `${pathnameWithoutExtension}${extension}`;
        if (fileExists(guess)) return guess;
      }
    }
  }
  return undefined;
}

/**
 * 
 * @param {URL | string} search query
 */
function resolveIndex(search) {
  return resolveExtensions(new URL('index', search));
}

const encodedSepRegEx = /%2F|%2C/i;
/**
 * Finalizes the resolution of a module specifier by checking if the resolved pathname contains encoded "/" or "\\"
 * characters, checking if the resolved pathname is a directory or file, and resolving any symlinks if necessary.
 * @param {URL} resolved - The resolved URL object.
 * @param {string | URL } base - The base URL object.
 * @param {boolean} preserveSymlinks - Whether to preserve symlinks or not.
 * @returns {URL} - The finalized URL object.
 * @throws {ERR_INVALID_MODULE_SPECIFIER} - If the resolved pathname contains encoded "/" or "\\" characters.
 * @throws {ERR_UNSUPPORTED_DIR_IMPORT} - If the resolved pathname is a directory.
 * @throws {ERR_MODULE_NOT_FOUND} - If the resolved pathname is not a file.
 */
function finalizeResolution(resolved, base, preserveSymlinks) {
  if (RegExpPrototypeExec(encodedSepRegEx, resolved.pathname) !== null) {
    throw new ERR_INVALID_MODULE_SPECIFIER(
      resolved.pathname, 'must not include encoded "/" or "\\" characters',
      fileURLToPath(base));
  }

  let path;
  try {
    path = fileURLToPath(resolved);
  } catch (err) {
    setOwnProperty(err, 'input', `${resolved}`);
    setOwnProperty(err, 'module', `${base}`);
    throw err;
  }

  const stats = (
    /**
     * TODO
     * 
     * https://nodejs.org/api/fs.html#statsmode ;
     * 
     *  */
    statSync(
      StringPrototypeEndsWith(path, '/') ? StringPrototypeSlice(path, -1) : path ,
    )
    .mode
  );

  // Check for stats.isDirectory()
  if (stats === 1) {
    throw new ERR_UNSUPPORTED_DIR_IMPORT(path, fileURLToPath(base), String(resolved));
  } else if (stats !== 0) {
    // Check for !stats.isFile()
    if (process.env.WATCH_REPORT_DEPENDENCIES && process.send) {
      process.send({ 'watch:require': [path || resolved.pathname] });
    }
    throw new ERR_MODULE_NOT_FOUND(
      path || resolved.pathname, base && fileURLToPath(base), resolved);
  }

  if (!preserveSymlinks) {
    const real = realpathSync(path, {
    });
    const { search, hash } = resolved;
    resolved =
        pathToFileURL(real + (StringPrototypeEndsWith(path, sep) ? '/' : ''));
    resolved.search = search;
    resolved.hash = hash;
  }

  return resolved;
}

/**
 * @typedef {(keyof PackageJsonExports) | import('@studiokit/ts-node').NodePackageJsonExportsOrImportsValueCommon | PackageTargetIBeingArray} PackageTargetI
 * 
 * @typedef {(readonly unknown[] ) & { asPackageTargetIBeingArray ?: true, } } PackageTargetIBeingArray
 * @deprecated
 * 
 * @typedef {((string | URL) | RegExpMatchArray ) & { isSubpa ?: true, }} PackageSubpathI
 * 
 * @typedef {(ReadonlyArray<string> | Set<string>) & { isImportConditionI ?: true, } } PackageImportCondListI
 * 
 */

/**
 * Returns an error object indicating that the specified import is not defined.
 * @param {string} specifier - The import specifier that is not defined.
 * @param {URL} packageJSONUrl - The URL of the package.json file, or null if not available.
 * @param {string | URL | undefined} base - The base URL to use for resolving relative URLs.
 * @returns - {ERR_PACKAGE_IMPORT_NOT_DEFINED} - The error object.
 */
function importNotDefined(specifier, packageJSONUrl, base) {
  return new ERR_PACKAGE_IMPORT_NOT_DEFINED(
    specifier, packageJSONUrl && fileURLToPath(new URL('.', packageJSONUrl)),
    base && fileURLToPath(base));
}

/**
 * Returns an error object indicating that the specified subpath was not exported by the package.
 * @param {string} subpath - The subpath that was not exported.
 * @param {URL | string} packageJSONUrl - The URL of the package.json file.
 * @param {string | URL | undefined} [base] - The base URL to use for resolving the subpath.
 * @returns - {ERR_PACKAGE_PATH_NOT_EXPORTED} - The error object.
 */
function exportsNotFound(subpath, packageJSONUrl, base) {
  return new ERR_PACKAGE_PATH_NOT_EXPORTED(
    fileURLToPath(new URL('.', packageJSONUrl)), subpath,
    base && fileURLToPath(base));
}

/**
 * Throws an error indicating that the given request is not a valid subpath match for the specified pattern.
 * @param {string} request - The request that failed to match the pattern.
 * @param {string} match - The pattern that the request was compared against.
 * @param {URL | string} packageJSONUrl - The URL of the package.json file being resolved.
 * @param {boolean} internal - Whether the resolution is for an "imports" or "exports" field in package.json.
 * @param {string | URL | undefined} base - The base URL for the resolution.
 * @throws {ERR_INVALID_MODULE_SPECIFIER} When the request is not a valid match for the pattern.
 * @returns {never}
 */
function throwInvalidSubpath(request, match, packageJSONUrl, internal, base) {
  const reason = `request is not a valid match in pattern "${match}" for the "${
    internal ? 'imports' : 'exports'}" resolution of ${
    fileURLToPath(packageJSONUrl)}`;
  throw new ERR_INVALID_MODULE_SPECIFIER(request, reason,
                                         base && fileURLToPath(base));
}

/**
 * Creates an error object for an invalid package target.
 * @param {string} subpath - The subpath.
 * @param {PackageTargetI} target - The target.
 * @param {URL | string} packageJSONUrl - The URL of the package.json file.
 * @param {boolean} internal - Whether the package is internal.
 * @param {string | URL | undefined} base - The base URL.
 * @returns - {ERR_INVALID_PACKAGE_TARGET} - The error object.
 */
function invalidPackageTarget(
  subpath, target, packageJSONUrl, internal, base) {
  if (typeof target === 'object' && target !== null) {
    target = JSONStringify(target, null, '');
  } else {
    target = `${target}`;
  }
  return new ERR_INVALID_PACKAGE_TARGET(
    fileURLToPath(new URL('.', packageJSONUrl)), subpath, target,
    internal, base && fileURLToPath(base));
}

const invalidSegmentRegEx = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))?(\\|\/|$)/i;
const deprecatedInvalidSegmentRegEx = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))(\\|\/|$)/i;
const invalidPackageNameRegEx = /^\.|%|\\/;
const patternRegEx = /\*/g;

/**
 * in upstream src of these several methods, the `pattern` param is typed `RegExp`;
 * however,
 * in practice the actual usage of the param (again, `pattern`) is being passed `boolean`, which is insane.
 * for now, we implement this as `boolean, reflecting the actual usage;
 * hopefully later, we can`make appropriate edits to these several methods, for clarification
 * 
 * @typedef {(boolean ) & { asPackageTargetResolvePatternParamSpec ?: true , }} PackageTargetResolvePatternParamSpec
 * 
 */

/**
 * Resolves the package target string to a URL object.
 * @param {string} target - The target string to resolve.
 * @param {string} subpath - The subpath to append to the resolved URL.
 * @param {string}  match - The matched string array from the import statement.
 * @param {URL | string} packageJSONUrl - The URL of the package.json file.
 * @param {URL | string} base - The base URL to resolve the target against.
 * @param {PackageTargetResolvePatternParamSpec} pattern - The pattern to replace in the target string.
 * @param {boolean} internal - Whether the target is internal to the package.
 * @param {boolean} isPathMap - Whether the target is a path map.
 * @param {PackageImportCondListI} conditions - The import conditions.
 * @returns {URL} - The resolved URL object.
 * @throws {ERR_INVALID_PACKAGE_TARGET} - If the target is invalid.
 * @throws {ERR_INVALID_SUBPATH} - If the subpath is invalid.
 */
function resolvePackageTargetString(
  target,
  subpath,
  match,
  packageJSONUrl,
  base,
  pattern,
  internal,
  isPathMap,
  conditions,
) {

  if (subpath !== '' && !pattern && target[target.length - 1] !== '/') {
    throw invalidPackageTarget(match, target, packageJSONUrl, internal, base);
  }

  if (!StringPrototypeStartsWith(target, './')) {
    if (internal && !StringPrototypeStartsWith(target, '../') &&
        !StringPrototypeStartsWith(target, '/')) {
      // No need to convert target to string, since it's already presumed to be
      if (!URLCanParse(target)) {
        const exportTarget = pattern ?
          RegExpPrototypeSymbolReplace(patternRegEx, target, () => subpath) :
          target + subpath;
        return packageResolve(
          exportTarget, packageJSONUrl, conditions);
      }
    }
    throw invalidPackageTarget(match, target, packageJSONUrl, internal, base);
  }

  if (RegExpPrototypeExec(invalidSegmentRegEx, StringPrototypeSlice(target, 2)) !== null) {
    if (RegExpPrototypeExec(deprecatedInvalidSegmentRegEx, StringPrototypeSlice(target, 2)) === null) {
      if (!isPathMap) {
        const request = pattern ?
          StringPrototypeReplace(match, '*', () => subpath) :
          match + subpath;
        const resolvedTarget = pattern ?
          RegExpPrototypeSymbolReplace(patternRegEx, target, () => subpath) :
          target;
        emitInvalidSegmentDeprecation(resolvedTarget, request, match, packageJSONUrl, internal, base, true);
      }
    } else {
      throw invalidPackageTarget(match, target, packageJSONUrl, internal, base);
    }
  }

  const resolved = new URL(target, packageJSONUrl);
  const resolvedPath = resolved.pathname;
  const packagePath = new URL('.', packageJSONUrl).pathname;

  if (!StringPrototypeStartsWith(resolvedPath, packagePath)) {
    throw invalidPackageTarget(match, target, packageJSONUrl, internal, base);
  }

  if (subpath === '') { return resolved; }

  if (RegExpPrototypeExec(invalidSegmentRegEx, subpath) !== null) {
    const request = pattern ? StringPrototypeReplace(match, '*', () => subpath) : match + subpath;
    if (RegExpPrototypeExec(deprecatedInvalidSegmentRegEx, subpath) === null) {
      if (!isPathMap) {
        const resolvedTarget = pattern ?
          RegExpPrototypeSymbolReplace(patternRegEx, target, () => subpath) :
          target;
        emitInvalidSegmentDeprecation(resolvedTarget, request, match, packageJSONUrl, internal, base, false);
      }
    } else {
      return throwInvalidSubpath(request, match, packageJSONUrl, internal, base);
    }
  }

  if (pattern) {
    return new URL(
      RegExpPrototypeSymbolReplace(patternRegEx, resolved.href, () => subpath),
    );
  }

  return new URL(subpath, resolved);
}

/**
 * Checks if the given key is a valid array index.
 * @param {string} key - The key to check.
 * @returns {boolean} - Returns `true` if the key is a valid array index, else `false`.
 */
function isArrayIndex(key) {
  const keyNum = +key;
  if (`${keyNum}` !== key) return false;
  return keyNum >= 0 && keyNum < 0xFFFF_FFFF;
}

/** @typedef {{resolved: URL, exact?: boolean}} PackageExportsOrImportsResolvedDesc1 */

/**
 * Resolves the target of a package based on the provided parameters.
 * @param {URL | string} packageJSONUrl - The URL of the package.json file.
 * @param {PackageTargetI} target - The target to resolve.
 * @param {string} subpath - The subpath to resolve.
 * @param {string} packageSubpath - The subpath of the package to resolve.
 * @param {string | URL} base - The base path to resolve.
 * @param {PackageTargetResolvePatternParamSpec} pattern - The pattern to match.
 * @param {boolean} internal - Whether the package is internal.
 * @param {[...([isPathMap: boolean] | []) , ...[conditions: PackageImportCondListI]]} ipmAndCond - overloaded:
 *  - {boolean} isPathMap - Whether the package is a path map.
 *  - {PackageImportCondListI} conditions - The conditions to match.
 * @returns {URL | null | undefined} - The resolved target, or null if not found, or undefined if not resolvable.
 */
function resolvePackageTarget(packageJSONUrl, target, subpath, packageSubpath,
                              base, pattern, internal, ...ipmAndCond) {
  ;
  const { isPathMap = false, conditions, } = (/** @return {{ isPathMap?: Boolean, conditions: PackageImportCondListI, }} */ () => {
    if (ipmAndCond.length === 2 ) {
      const [isPathMap, conditions] = ipmAndCond ;
      return {isPathMap, conditions} ;
    }
    if (ipmAndCond.length === 1 ) {
      const [conditions] = ipmAndCond ;
      return { conditions} ;
    }
    return fail() ;
  })() ;
  if (typeof target === 'string') {
    return resolvePackageTargetString(
      target, subpath, packageSubpath, packageJSONUrl, base, pattern, internal,
      isPathMap, conditions);
  } else if (ArrayIsArray(target)) {
    if (target.length === 0) {
      return null;
    }

    let lastException;
    for (let i = 0; i < target.length; i++) {
      const targetItem = target[i];
      let resolveResult;
      try {
        resolveResult = resolvePackageTarget(
          packageJSONUrl, targetItem, subpath, packageSubpath, base, pattern,
          internal, isPathMap, conditions);
      } catch (e) {
        lastException = e;
        if (e.code === 'ERR_INVALID_PACKAGE_TARGET') {
          continue;
        }
        throw e;
      }
      if (resolveResult === undefined) {
        continue;
      }
      if (resolveResult === null) {
        lastException = null;
        continue;
      }
      return resolveResult;
    }
    if (lastException == null) {
      return lastException;
    }
    throw lastException;
  } else if (typeof target === 'object' && target !== null) {
    if ("length" in target) { return fail(`user-defined 'exports' or 'imports' may not use key 'length'. currently, 'length' is reserved internally as work-around to distinguish between types`) ; }
    const keys = ObjectGetOwnPropertyNames(target);
    for (const key of keys ) {
      // 
      if (isArrayIndex(key)) {
        throw new ERR_INVALID_PACKAGE_CONFIG(
          fileURLToPath(packageJSONUrl), base,
          '"exports" cannot contain numeric property keys.');
      }
    }
    for (const key of keys) {
      // const key = keys[i];
      if (key === 'default' || new Set(conditions).has(key)) {
        const conditionalTarget = target[key] ?? fail() ;
        const resolved = resolvePackageTarget(
          packageJSONUrl, conditionalTarget, subpath, packageSubpath, base,
          pattern, internal, conditions);
        if (resolved === undefined)
          continue;
        return resolved;
      }
    }
    return undefined;
  } else if (target === null) {
    return null;
  }
  throw invalidPackageTarget(packageSubpath, target, packageJSONUrl, internal,
                             base);
}

/**
 * Is the given exports object using the shorthand syntax?
 * 
 * @param {PackageJsonExports} exports exports dict
 * @param {URL | string} packageJSONUrl URL
 * @param {URL | string} base base url
 * @returns whether
 */
function isConditionalExportsMainSugar(exports, packageJSONUrl, base) {
  if (typeof exports === 'string' || ArrayIsArray(exports)) { return true; }
  if (typeof exports !== 'object' || exports === null) { return false; }

  const keys = ObjectGetOwnPropertyNames(exports);
  let isConditionalSugar = false;
  let i = 0;
  for (const [j, key] of keys.entries() ) {
    // const key = keys[j];
    const curIsConditionalSugar = key === '' || key[0] !== '.';
    if (i++ === 0) {
      isConditionalSugar = curIsConditionalSugar;
    } else if (isConditionalSugar !== curIsConditionalSugar) {
      throw new ERR_INVALID_PACKAGE_CONFIG(
        fileURLToPath(packageJSONUrl), base,
        '"exports" cannot contain some keys starting with \'.\' and some not.' +
        ' The exports object must either be an object of package subpath keys' +
        ' or an object of main entry condition name keys only.');
    }
  }
  return isConditionalSugar;
}

const failPerImplNullPostCheck = fail ;
const failingPerImplInspect = require("node:util").inspect ;

/**
 * Resolves the exports of a package.
 * @param {URL | string} packageJSONUrl - The URL of the package.json file.
 * @param {string} packageSubpath - The subpath of the package to resolve.
 * @param {PackageConfig} packageConfig
 * @param {string | URL } base - The base path to resolve from.
 * @param {PackageImportCondListI} conditions - An array of conditions to match.
 */
function packageExportsResolve(
  packageJSONUrl, packageSubpath, packageConfig, base, conditions) {
  return (
    packageExportsResolve1(packageJSONUrl, packageSubpath, packageConfig, base, conditions )
    .resolved
  ) ;
}

/**
 * 
 * @param {Parameters<typeof packageExportsResolve>} args
 * @returns {PackageExportsOrImportsResolvedDesc1}
 */
function packageExportsResolve1(...[
  packageJSONUrl,
  packageSubpath,
  packageConfig,
  base,
  conditions,
]) {
  let exports = packageConfig.exports ?? {} ;
  if (isConditionalExportsMainSugar(exports, packageJSONUrl, base)) {
    exports = { '.': exports };
  }

  if (ObjectPrototypeHasOwnProperty(exports, packageSubpath) &&
      !StringPrototypeIncludes(packageSubpath, '*') &&
      !StringPrototypeEndsWith(packageSubpath, '/')) {
    const { [packageSubpath]: target = fail() } = exports;
    const resolveResult = resolvePackageTarget(
      packageJSONUrl, target, '', packageSubpath, base, false, false, false,
      conditions,
    );

    if (resolveResult == null) {
      throw exportsNotFound(packageSubpath, packageJSONUrl, base);
    }

    return { resolved: resolveResult, exact: true };
  }

  let bestMatch = '';
  let bestMatchSubpath;
  const keys = ObjectGetOwnPropertyNames(exports);
  for (const [i, key] of keys.entries() ) {
    // const key = keys[i];
    const patternIndex = StringPrototypeIndexOf(key, '*');
    if (patternIndex !== -1 &&
        StringPrototypeStartsWith(packageSubpath,
                                  StringPrototypeSlice(key, 0, patternIndex))) {
      // When this reaches EOL, this can throw at the top of the whole function:
      //
      // if (StringPrototypeEndsWith(packageSubpath, '/'))
      //   throwInvalidSubpath(packageSubpath)
      //
      // To match "imports" and the spec.
      if (StringPrototypeEndsWith(packageSubpath, '/')) {
        emitTrailingSlashPatternDeprecation(packageSubpath, packageJSONUrl,
                                            base);
      }
      const patternTrailer = StringPrototypeSlice(key, patternIndex + 1);
      if (packageSubpath.length >= key.length &&
          StringPrototypeEndsWith(packageSubpath, patternTrailer) &&
          patternKeyCompare(bestMatch, key) === 1 &&
          StringPrototypeLastIndexOf(key, '*') === patternIndex) {
        bestMatch = key;
        bestMatchSubpath = StringPrototypeSlice(
          packageSubpath, patternIndex,
          packageSubpath.length - patternTrailer.length);
      }
    }
  }

  if (bestMatch) {
    const target = exports[bestMatch] ;
    if (!(target && bestMatchSubpath)) {
      return failPerImplNullPostCheck(`failed. please file a bugreport. ${failingPerImplInspect({ target, bestMatchSubpath, }) }` ) ;
    }
    const resolveResult = resolvePackageTarget(
      packageJSONUrl,
      target,
      bestMatchSubpath,
      bestMatch,
      base,
      true,
      false,
      StringPrototypeEndsWith(packageSubpath, '/'),
      conditions);

    if (resolveResult == null) {
      throw exportsNotFound(packageSubpath, packageJSONUrl, base);
    }
    return { resolved: resolveResult,  };
  }

  throw exportsNotFound(packageSubpath, packageJSONUrl, base);
}

/**
 * Compares two strings that may contain a wildcard character ('*') and returns a value indicating their order.
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @returns {number} - A negative number if `a` should come before `b`, a positive number if `a` should come after `b`,
 * or 0 if they are equal.
 */
function patternKeyCompare(a, b) {
  const aPatternIndex = StringPrototypeIndexOf(a, '*');
  const bPatternIndex = StringPrototypeIndexOf(b, '*');
  const baseLenA = aPatternIndex === -1 ? a.length : aPatternIndex + 1;
  const baseLenB = bPatternIndex === -1 ? b.length : bPatternIndex + 1;
  if (baseLenA > baseLenB) { return -1; }
  if (baseLenB > baseLenA) { return 1; }
  if (aPatternIndex === -1) { return 1; }
  if (bPatternIndex === -1) { return -1; }
  if (a.length > b.length) { return -1; }
  if (b.length > a.length) { return 1; }
  return 0;
}

/**
 * Resolves the given import name for a package.
 * @param {string} name - The name of the import to resolve.
 * @param {string | URL } base - The base URL to resolve the import from.
 * @param {Set<string>} conditions - An object containing the import conditions.
 * @throws {ERR_INVALID_MODULE_SPECIFIER} If the import name is not valid.
 * @throws {ERR_PACKAGE_IMPORT_NOT_DEFINED} If the import name cannot be resolved.
 * @returns {URL} The resolved import URL.
 */
function packageImportsResolve(name, base, conditions) {
  return (
    packageImportsResolve1(name, base, conditions )
    .resolved
  ) ;
}

/**
 * 
 * @param {Parameters<typeof packageImportsResolve>} args
 * @returns {PackageExportsOrImportsResolvedDesc1}
 */
function packageImportsResolve1(...[name, base, conditions]) {
  if (name === '#' || StringPrototypeStartsWith(name, '#/') ||
      StringPrototypeEndsWith(name, '/')) {
    const reason = 'is not a valid internal imports specifier name';
    throw new ERR_INVALID_MODULE_SPECIFIER(name, reason, fileURLToPath(base));
  }
  let packageJSONUrl;
  const packageConfig = getPackageScopeConfig(base);
  if (packageConfig.exists) {
    packageJSONUrl = pathToFileURL(packageConfig.pjsonPath);
    const imports = packageConfig.imports;
    if (imports) {
      if (ObjectPrototypeHasOwnProperty(imports, name) &&
          !StringPrototypeIncludes(name, '*')) {
        const resolveResult = resolvePackageTarget(
          packageJSONUrl, imports[name] ?? failPerImplNullPostCheck(`error. please file a bugreport.`), '', name, base, false, true, false,
          conditions,
        );
        if (resolveResult != null) {
          return { resolved: resolveResult, exact: true };
        }
      } else {
        let bestMatch = '';
        let bestMatchSubpath;
        const keys = ObjectGetOwnPropertyNames(imports);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i] ?? failPerImplNullPostCheck(`error. please file a bugreport.`);
          const patternIndex = StringPrototypeIndexOf(key, '*');
          if (patternIndex !== -1 &&
              StringPrototypeStartsWith(name,
                                        StringPrototypeSlice(key, 0,
                                                             patternIndex))) {
            const patternTrailer = StringPrototypeSlice(key, patternIndex + 1);
            if (name.length >= key.length &&
                StringPrototypeEndsWith(name, patternTrailer) &&
                patternKeyCompare(bestMatch, key) === 1 &&
                StringPrototypeLastIndexOf(key, '*') === patternIndex) {
              bestMatch = key;
              bestMatchSubpath = StringPrototypeSlice(
                name, patternIndex, name.length - patternTrailer.length);
            }
          }
        }

        if (bestMatch) {
          bestMatchSubpath = bestMatchSubpath ?? failPerImplNullPostCheck(`error. please file a bugreport. ${failingPerImplInspect({ bestMatchSubpath, }) }`) ;
          const target = imports[bestMatch] ?? failPerImplNullPostCheck(`error. please file a bugreport. ${failingPerImplInspect({ imports, }) }`) ;
          const resolveResult = resolvePackageTarget(packageJSONUrl, target,
                                                     bestMatchSubpath,
                                                     bestMatch, base, true,
                                                     true, false, conditions);
          if (resolveResult != null) {
            return { resolved: resolveResult,  };
          }
        }
      }
    }
  }
  if (!packageJSONUrl) {
    return failPerImplNullPostCheck(`error. please file a bugreport. ${failingPerImplInspect({ packageJSONUrl }) }`)
  }
  throw importNotDefined(name, packageJSONUrl, base);
}

/**
 * Returns the package type for a given URL.
 * @param {URL} url - The URL to get the package type for.
 */
function getPackageType(url) {
  const packageConfig = getPackageScopeConfig(url);
  return packageConfig.type;
}

/**
 * Parse a package name from a specifier.
 * @param {string} specifier - The import specifier.
 * @param {string | URL } [base] - The parent URL.
 */
function parsePackageName(specifier, base) {
  let separatorIndex = StringPrototypeIndexOf(specifier, '/');
  let validPackageName = true;
  let isScoped = false;
  if (specifier[0] === '@') {
    isScoped = true;
    if (separatorIndex === -1 || specifier.length === 0) {
      validPackageName = false;
    } else {
      separatorIndex = StringPrototypeIndexOf(
        specifier, '/', separatorIndex + 1);
    }
  }

  const packageName = separatorIndex === -1 ?
    specifier : StringPrototypeSlice(specifier, 0, separatorIndex);

  // Package name cannot have leading . and cannot have percent-encoding or
  // \\ separators.
  if (RegExpPrototypeExec(invalidPackageNameRegEx, packageName) !== null) {
    validPackageName = false;
  }

  if (!validPackageName) {
    throw new ERR_INVALID_MODULE_SPECIFIER(
      specifier, 'is not a valid package name', base && fileURLToPath(base));
  }

  const packageSubpath = '.' + (separatorIndex === -1 ? '' :
    StringPrototypeSlice(specifier, separatorIndex));

  return { packageName, packageSubpath, isScoped };
}

/**
 * Resolves a package specifier to a URL.
 * @param {string} specifier - The package specifier to resolve.
 * @param {string | URL } base - The base URL to use for resolution.
 * @param {PackageImportCondListI} conditions - An object containing the conditions for resolution.
 * @returns {URL} - The resolved URL.
 */
function packageResolve(specifier, base, conditions) {
  if (BuiltinModule.canBeRequiredWithoutScheme(specifier)) {
    return new URL('node:' + specifier);
  }

  const { packageName, packageSubpath, isScoped } =
    parsePackageName(specifier, base);

  // ResolveSelf
  const packageConfig = getPackageScopeConfig(base);
  if (packageConfig.exists) {
    const packageJSONUrl = pathToFileURL(packageConfig.pjsonPath);
    if (packageConfig.exports != null && packageConfig.name === packageName) {
      return packageExportsResolve(
        packageJSONUrl, packageSubpath, packageConfig, base, conditions);
    }
  }

  let packageJSONUrl =
    new URL('./node_modules/' + packageName + '/package.json', base);
  let packageJSONPath = fileURLToPath(packageJSONUrl);
  let lastPath;
  do {
    const stat = internalModuleStat(toNamespacedPath(StringPrototypeSlice(packageJSONPath, 0,
                                                                          packageJSONPath.length - 13)));
    // Check for !stat.isDirectory()
    if (stat !== 1) {
      lastPath = packageJSONPath;
      packageJSONUrl = new URL((isScoped ?
        '../../../../node_modules/' : '../../../node_modules/') +
        packageName + '/package.json', packageJSONUrl);
      packageJSONPath = fileURLToPath(packageJSONUrl);
      continue;
    }

    // Package match.
    const packageConfig = packageJsonReader.read(packageJSONPath, { __proto__: null, specifier, base, isESM: true });
    if (packageConfig.exports != null) {
      return packageExportsResolve(
        packageJSONUrl, packageSubpath, packageConfig, base, conditions);
    }
    if (packageSubpath === '.') {
      return legacyMainResolve(
        packageJSONUrl,
        packageConfig,
        base,
      );
    }

    return new URL(packageSubpath, packageJSONUrl);
    // Cross-platform root check.
  } while (packageJSONPath.length !== lastPath.length);

  // eslint can't handle the above code.
  // eslint-disable-next-line no-unreachable
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
}

/**
 * Checks if a specifier is a bare specifier.
 * @param {string} specifier - The specifier to check.
 */
function isBareSpecifier(specifier) {
  return specifier[0] && specifier[0] !== '/' && specifier[0] !== '.';
}

/**
 * Determines whether a specifier is a relative path.
 * @param {string} specifier - The specifier to check.
 */
function isRelativeSpecifier(specifier) {
  if (specifier[0] === '.') {
    if (specifier.length === 1 || specifier[1] === '/') { return true; }
    if (specifier[1] === '.') {
      if (specifier.length === 2 || specifier[2] === '/') { return true; }
    }
  }
  return false;
}

/**
 * Determines whether a specifier should be treated as a relative or absolute path.
 * @param {string} specifier - The specifier to check.
 */
function shouldBeTreatedAsRelativeOrAbsolutePath(specifier) {
  if (specifier === '') { return false; }
  if (specifier[0] === '/') { return true; }
  return isRelativeSpecifier(specifier);
}

/**
 * Resolves a module specifier to a URL.
 * @param {string} specifier - The module specifier to resolve.
 * @param {string | URL } base - The base URL to resolve against.
 * @param {Set<string>} conditions - An object containing environment conditions.
 * @param {boolean} preserveSymlinks - Whether to preserve symlinks in the resolved URL.
 */
function moduleResolve(specifier, base, conditions, preserveSymlinks) {
  const protocol = typeof base === 'string' ?
    StringPrototypeSlice(base, 0, StringPrototypeIndexOf(base, ':') + 1) :
    base.protocol;
  const isData = protocol === 'data:';
  const isRemote =
    isData ||
    protocol === 'http:' ||
    protocol === 'https:';
  // Order swapped from spec for minor perf gain.
  // Ok since relative URLs cannot parse as URLs.
  let resolved;
  if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
    try {
      resolved = new URL(specifier, base);
    } catch (cause) {
      const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base);
      setOwnProperty(error, 'cause', cause);
      throw error;
    }
  } else if (protocol === 'file:' && specifier[0] === '#') {
    resolved = packageImportsResolve(specifier, base, conditions);
  } else {
    try {
      resolved = new URL(specifier);
    } catch (cause) {
      if (isData && !BuiltinModule.canBeRequiredWithoutScheme(specifier)) {
        const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base);
        setOwnProperty(error, 'cause', cause);
        throw error;
      }
      resolved = packageResolve(specifier, base, conditions);
    }
  }
  if (resolved.protocol !== 'file:') {
    return resolved;
  }
  return finalizeResolution(resolved, base, preserveSymlinks);
}

/**
 * Try to resolve an import as a CommonJS module.
 * @param {string} specifier - The specifier to resolve.
 * @param {string} parentURL - The base URL.
 * @returns {string | Buffer | false}
 */
function resolveAsCommonJS(specifier, parentURL) {
  try {
    const parent = fileURLToPath(parentURL);
    const tmpModule = new CJSModule(parent, null);
    tmpModule.paths = CJSModule._nodeModulePaths(parent);

    let found = CJSModule._resolveFilename(specifier, tmpModule, false);

    // If it is a relative specifier return the relative path
    // to the parent
    if (isRelativeSpecifier(specifier)) {
      const foundURL = pathToFileURL(found).pathname;
      found = relativePosixPath(
        StringPrototypeSlice(parentURL, 'file://'.length, StringPrototypeLastIndexOf(parentURL, '/')),
        foundURL);

      // Add './' if the path does not start with '../'
      // This should be a safe assumption because when loading
      // esm modules there should be always a file specified so
      // there should not be a specifier like '..' or '.'
      if (!StringPrototypeStartsWith(found, '../')) {
        found = `./${found}`;
      }
    } else if (isBareSpecifier(specifier)) {
      // If it is a bare specifier return the relative path within the
      // module
      const i = StringPrototypeIndexOf(specifier, '/');
      const pkg = i === -1 ? specifier : StringPrototypeSlice(specifier, 0, i);
      const needle = `${sep}node_modules${sep}${pkg}${sep}`;
      const index = StringPrototypeLastIndexOf(found, needle);
      if (index !== -1) {
        found = pkg + '/' + ArrayPrototypeJoin(
          ArrayPrototypeMap(
            StringPrototypeSplit(StringPrototypeSlice(found, index + needle.length), sep),
            // Escape URL-special characters to avoid generating a incorrect suggestion
            encodeURIComponent,
          ),
          '/',
        );
      } else {
        found = `${pathToFileURL(found)}`;
      }
    }
    // // Normalize the path separator to give a valid suggestion
    // // on Windows
    // if (process.platform === 'win32') {
    //   found = StringPrototypeReplace(found, new RegExp(`\\${sep}`, 'g'), '/');
    // }
    return found;
  } catch {
    return false;
  }
}

/**
 * Throw an error if an import is not allowed.
 * TODO(@JakobJingleheimer): de-dupe `specifier` & `parsed`
 * @param {string} specifier - The import specifier.
 * @param {URL} parsed - The parsed URL of the import specifier.
 * @param {URL} parsedParentURL - The parsed URL of the parent module.
 * @throws {ERR_NETWORK_IMPORT_DISALLOWED} - If the import is disallowed.
 */
function checkIfDisallowedImport(specifier, parsed, parsedParentURL) {
  if (parsedParentURL) {
    // Avoid accessing the `protocol` property due to the lazy getters.
    const parentProtocol = parsedParentURL.protocol;
    if (
      parentProtocol === 'http:' ||
      parentProtocol === 'https:'
    ) {
      if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
        // Avoid accessing the `protocol` property due to the lazy getters.
        const parsedProtocol = parsed?.protocol;
        // data: and blob: disallowed due to allowing file: access via
        // indirection
        if (parsedProtocol &&
          parsedProtocol !== 'https:' &&
          parsedProtocol !== 'http:'
        ) {
          throw new ERR_NETWORK_IMPORT_DISALLOWED(
            specifier,
            parsedParentURL,
            'remote imports cannot import from a local location.',
          );
        }

        return { url: parsed.href };
      }
      if (BuiltinModule.canBeRequiredWithoutScheme(specifier)) {
        throw new ERR_NETWORK_IMPORT_DISALLOWED(
          specifier,
          parsedParentURL,
          'remote imports cannot import from a local location.',
        );
      }

      throw new ERR_NETWORK_IMPORT_DISALLOWED(
        specifier,
        parsedParentURL,
        'only relative and absolute specifiers are supported.',
      );
    }
  }
}

/**
 * Validate user-input in `context` supplied by a custom loader.
 * @param {string | URL | undefined} parentURL - The parent URL.
 */
function throwIfInvalidParentURL(parentURL) {
  if (parentURL === undefined) {
    return; // Main entry point, so no parent
  }
  if (typeof parentURL !== 'string' && !isURL(parentURL)) {
    throw new ERR_INVALID_ARG_TYPE('parentURL', ['string', 'URL'], parentURL);
  }
}

/**
 * Resolves the given specifier using the provided context, which includes the parent URL and conditions.
 * Attempts to resolve the specifier and returns the resulting URL and format.
 * Throws an error if the parent URL is invalid or if the resolution is disallowed by the policy manifest.
 * Otherwise, attempts to resolve the specifier and returns the resulting URL and format.
 * @param {string} specifier - The specifier to resolve.
 * @param {DefgfCtx} [context={}] - The context object containing the parent URL and conditions.
 */
function defaultResolve(specifier, context = {}) {
  let parentURL ;
  /** @type {PackageImportCondListI | undefined} */
  let conditions ;
  ({ parentURL, conditions } = context);
  throwIfInvalidParentURL(parentURL);

  let parsedParentURL;
  if (parentURL) {
    parsedParentURL = URLParse(parentURL);
  }

  let parsed, protocol;
  if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
    parsed = URLParse(specifier, parsedParentURL);
  } else {
    parsed = URLParse(specifier);
  }

  if (parsed != null) {
    // Avoid accessing the `protocol` property due to the lazy getters.
    protocol = parsed.protocol;

    if (protocol === 'data:') {
      return { __proto__: null, url: parsed.href };
    }
  }

  protocol ??= parsed?.protocol;
  if (protocol === 'node:') { return { __proto__: null, url: specifier }; }


  const isMain = parentURL === undefined;
  if (isMain || parentURL === undefined) {
    parentURL = pathToFileURL(`${process.cwd()}/`).href;

    // This is the initial entry point to the program, and --input-type has
    // been passed as an option; but --input-type can only be used with
    // --eval, --print or STDIN string input. It is not allowed with file
    // input, to avoid user confusion over how expansive the effect of the
    // flag should be (i.e. entry point only, package scope surrounding the
    // entry point, etc.).
    if (inputTypeFlag) { throw new ERR_INPUT_TYPE_NOT_ALLOWED(); }
  }

  conditions = getConditionsSet([...(conditions ?? [])]);
  let url;
  try {
    url = moduleResolve(
      specifier,
      parentURL,
      conditions,
      isMain ? preserveSymlinksMain : preserveSymlinks,
    );
  } catch (error) {
    // Try to give the user a hint of what would have been the
    // resolved CommonJS module
    if (error.code === 'ERR_MODULE_NOT_FOUND' ||
        error.code === 'ERR_UNSUPPORTED_DIR_IMPORT') {
      if (StringPrototypeStartsWith(specifier, 'file://')) {
        specifier = fileURLToPath(specifier);
      }
      decorateErrorWithCommonJSHints(error, specifier, parentURL);
    }
    throw error;
  }

  return {
    __proto__: null,
    // Do NOT cast `url` to a string: that will work even when there are real
    // problems, silencing them
    url: url.href,
    format: defaultGetFormatWithoutErrors(url, context),
  };
}

/**
 * Decorates the given error with a hint for CommonJS modules.
 * @param {Error} error - The error to decorate.
 * @param {string} specifier - The specifier that was attempted to be imported.
 * @param {string} parentURL - The URL of the parent module.
 */
function decorateErrorWithCommonJSHints(error, specifier, parentURL) {
  const found = resolveAsCommonJS(specifier, parentURL);
  if (found && found !== specifier) { // Don't suggest the same input the user provided.
    // Modify the stack and message string to include the hint
    const endOfFirstLine = StringPrototypeIndexOf(error.stack, '\n');
    const hint = `Did you mean to import ${JSONStringify(found)}?`;
    error.stack =
      StringPrototypeSlice(error.stack, 0, endOfFirstLine) + '\n' +
      hint +
      StringPrototypeSlice(error.stack, endOfFirstLine);
    error.message += `\n${hint}`;
  }
}

const publics =  {
  decorateErrorWithCommonJSHints,
  defaultResolve,
  encodedSepRegEx,
  packageExportsResolve,
  packageImportsResolve,
  throwIfInvalidParentURL,
  legacyMainResolve,
};

// cycle

// /** @type {{ defaultGetFormatWithoutErrors: (...x: [href: URL, ctx: DefgfCtx]) => any, } } */
const {
  defaultGetFormatWithoutErrors,
} = opts ;

return {
  ...publics ,
};
}
module.exports = {
  createResolve
};
