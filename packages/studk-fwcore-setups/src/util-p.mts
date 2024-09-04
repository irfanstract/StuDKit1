













// { name?: string ; } & { [k in "dependencies" | "peerDependencies"] ?: string ; } & { scripts?: { [id: string]: string; }, }

interface PackageManifest extends
PrNameOp
{
  version ?: string ;
  license ?: string ;
}

interface PackageManifest extends
PrDependencyStagesDict,
PrScriptsOp
{}

type PrNameOp = { name?: string ; } ;

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
}

interface PrDependencyDict
{
  [id: string]: string;
}

interface PackageManifest
{
  main?: string ;
  exports?: string | PrExportsDict ;
}

interface PrExportsDict {
  [path: string]: PrExportsPathSpecificDict ;
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









