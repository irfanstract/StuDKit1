




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/* PLATFORM PATHS */
import {

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,

} from './util-all.mjs' ;

/* PLATFORM I/O */
import {
  IO,

} from './util-all.mjs' ;

/* PLATFORM SHELL */
import {

  execAsync,
  spawn,
  exec,
  execSync,
  spawnSync,

} from './util-all.mjs' ;

/* ETC */
import {
} from './util-all.mjs' ;







;

import {
  loadPackageJson ,
  loadPackageJsonEtc ,
} from "studk-fwcore-setups/src/packagejson-loading-all.mjs" ;



export const scriptsDirActualPath = (
  IO.realpathSync((
    Path.join(fileURLToPath(import.meta.url), ".." )
  ))
) ;

/**
 * {@link baseDirActualPath exactly the root of the whole (mono)repo }.
 */
export const baseDirActualPath = (
  Path.join(scriptsDirActualPath, ".." )
) ;

export const pkgsDirActualPath = (
  Path.join(baseDirActualPath, "packages" )
) ;

export const nodeModulesDirActualPath = (
  Path.join(baseDirActualPath, "node_modules" )
) ;

export const distDirActualPath = (
  Path.join(baseDirActualPath, "dist" )
) ;

/**
 * load and parse the `package.json` {@link baseDirActualPath located exactly at root of the whole (mono)repo }.
 * 
 * @satisfies {() => import("studk-fwcore-setups/src/util-p.mts").PackageManifest }
 * 
 */
export const getRootPackageManifest = () => {
  return loadPackageJson(getRootPackagePaths().pJsonPath ) ;
} ;

/**
 * load and parse the `package.json` of given package
 * 
 * @satisfies {(x: string) => import("studk-fwcore-setups/src/util-p.mts").PackageManifest }
 * 
 */
export const getNamedPackageManifest = (p) => {
  const { pJsonPath, } = getNamedPackagePaths(p) ;
  return loadPackageJson(pJsonPath) ;
} ;

/**
 * compute info(s) abt the paths of the given package
 * 
 * @satisfies {(x: string) => object }
 * 
 */
export const getNamedPackagePaths = (p) => {
  const pBasePath = Path.join(nodeModulesDirActualPath, p, ) ;
  const pBaseRealPath = IO.realpathSync(pBasePath) ;
  const pJsonPath = Path.join(pBasePath, "package.json") ;
  return {
    p ,
    pBasePath,
    pBaseRealPath ,
    pJsonPath ,
  } ;
} ;

export const getRootPackagePaths = (
  () => ({ pJsonPath: Path.join(baseDirActualPath, "package.json"), })
) ;

/**
 * try to get the actually-installed version of the named package (including own deliverable package)
 * 
 * @satisfies {(x: string) => (string | undefined) }
 * 
 */
export const getNamedPackageActualVersion = (p) => {
  return (
    getNamedPackageManifest(p)
    .version
  ) ;
} ;



export const getGitRemoteUrl = (
  /**
   * @param {import("studk-fwcore-setups/src/util-eawo.mts").ArgsWithOptions<[nm?: string], {} >} args
   */
  (...[nm = "origin"]) => {
    const cm = `git remote get-url ${nm}` ;
    const o = (
      execSync(cm, { cwd: baseDirActualPath, encoding: "utf-8" } )
    ) ;
    return (
      o.match(/(\S+)/)?.[1] ?? util.throwTypeError(`cannot process the output of the '${cm}' run. make sure that running '${cm}' emits exactly a line containing URL, the right one`)
    ) ;
  }
) ;

/**
 * 
 * @type {() => string}
 */
export const getRepoOriginGitUrl = (
  () => (
    getGitRemoteUrl("origin")
  )
) ;

;






