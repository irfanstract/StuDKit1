













// { name?: string ; } & { [k in "dependencies" | "peerDependencies"] ?: string ; } & { scripts?: { [id: string]: string; }, }

interface PackageManifest extends
PrNameOp
{
  version ?: string ;
  license ?: string ;
  repository?: { type: string, url : string, } ;
  description ?: string ;
}

interface PackageManifest extends
PrDependencyStagesDict,
PrScriptsOp
{}

type PrNameOp = { name?: string ; private?: boolean ; } ;

type PrScriptsOp = { scripts?: PrScriptsDict ; } ;

interface PrScriptsDict
{
  [id: string]: string;
}

interface PrDependencyStagesDict
{
  dependencies ?: PrDependencyDict ;
  peerDependencies ?: PrDependencyDict ;
  optionalDependencies ?: PrDependencyDict ;
  devDependencies ?: PrDependencyDict ;
  eslint ?: any ;
}

interface PrDependencyDict
{
  [id: string]: string;
}

interface PackageManifest
{
  main?: string ;
  exports?: string | PrExportsDict ;
  activationPoints?: any ;
  contributes     ?: any ;
}

interface PrExportsDict {
  [path: string]: string | PrExportsPathSpecificDict ;
}

interface PrExportsPathSpecificDict
{
  [cond: string]: string ;
}

type PrTypeFieldOp = { type?: string ; } ;

interface PackageManifest extends
PrTypeFieldOp
{}





export type {
  PackageManifest ,
  PrScriptsDict ,
  PrDependencyDict ,
  PrDependencyStagesDict ,
} ;





;

class LocallyPackageRef
{
  readonly pkgRealPath!: string;
}

export { LocallyPackageRef, } ;









