










declare module "node" {
  //
  global {
    namespace NodeJS {
    }

    //
    export namespace StudkTsNodeJS {
    }
  }
}

declare module "@studiokit/ts-node" {
  //

  global {
    export type NodePackageJson = import("@studiokit/ts-node").NodePackageJson ;
  }

  export interface NodePackageJson extends Extract<(
    & {
      name?: string ,
    }
    & {
      type?: (
        /**
         * despite being prohibited user-space,
         * many our internal code makes this usage
         */
        | "none"

        | "commonjs"
        | "module"
      ) ,
    }
    & {
      private?: boolean ,
    }
    & {
      version?: string ,
    }
    & {
      main   ?: string,
      exports?: NodePackageJsonExports ,
      imports?: NodePackageJsonImports ,
      module ?: string,
    }
    & {
      [k in keyof {
        devDependencies ,
        optionalDependencies ,
        dependencies ,
        peerDependencies ,
        override,
        overrides,
      }] ?: any ;
    }
    & {
      [k in keyof {
        workspace ,
        workspaces ,
      }] ?: any ;
    }
  ), any> {}

  export type NodePackageJsonImportCond = (
    string
    /* unftnately, we can't use branded types as index types since that led to complaints "can't be used to index type types" */
    // & { /** @deprecated */ isNodePackageJsonImportCond?: true, }
  ) ;
  export interface NodePackageJsonExportsOrImportsCommon  extends Extract<(
    & {
      [key in keyof Record<(
        string
        /* unftnately, we can't use branded types as index types since that led to complaints "can't be used to index type types" */
        // & { /** @deprecated */ asKey ?: true ; }
      ), any> ] ?: NodePackageJsonExportsOrImportsValueCommon ;
    }
  ), {}> {}
  export type NodePackageJsonExportsOrImportsValueCommon = (
    | string
    | (object & { [cond: NodePackageJsonImportCond]: NodePackageJsonExportsOrImportsValueCommon } )
    | NodePackageJsonExportsOrImportsCommon
  ) ;
  export interface NodePackageJsonExports extends Extract<(NodePackageJsonExportsOrImportsCommon), any> {}
  export interface NodePackageJsonImports extends Extract<(NodePackageJsonExportsOrImportsCommon), any> {}

  export interface LoadedNodePackageConfig extends Extract<(
    NodePackageJson
    & { pjsonPath: string, exists: boolean, }
  ), any > {}

  global {
    interface Error {
      readonly stack: string;
    }
  }

}







