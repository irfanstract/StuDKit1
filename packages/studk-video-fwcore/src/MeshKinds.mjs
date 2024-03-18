

import { util, } from "typexpe-commons/src/common_sv.mjs";





/**
 * *material*-less {@link IMesh }
 * 
 */
export class IPureMesh {}

export class IMesh extends (
  // @ts-ignore
  /** @type {new () => (Object & DefinesGetAllMaterials) } */
  (Object)
)
{
  constructor()
  {
    super() ;

    /** @type {() => IPureMesh} */
    this.asPure ;
    
  }
}



export class IMaterial {}

/**
 * @typedef {ReadonlyArray<IMaterial> & { IMaterialListObjBrand ?: any ; } } IMaterialList
 * 
 * @deprecated
 */

/**
 * @typedef {{ allMaterials(): IMaterialList } } DefinesGetAllMaterials
 * 
 * @deprecated
 */




/**
 * *material*-less {@link IVolume }
 * 
 * 
 */
export class IPureVolume {}

export class IVolume extends (
  // @ts-ignore
  /** @type {new () => (Object & DefinesGetAllMaterials) } */
  (Object)
)
{
  constructor()
  {
    super() ;

    /** @type {() => IPureMesh} */
    this.asPure ;
    
  }
}









