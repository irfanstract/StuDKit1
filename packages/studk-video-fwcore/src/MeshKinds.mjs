

import { util, } from "typexpe-commons/src/common_sv.mjs";





/**
 * *material*-less {@link IDtColoredMesh }
 * 
 * @abstract
 */
export class IDtPureMesh
{
  /** @protected */
  constructor() {}
}

/**
 * 
 * @abstract
 */
export class IDtColoredMesh extends (
  // @ts-ignore
  /** @type {new () => (Object & TColoredObj3D ) } */
  (Object)
)
{
  /** @protected */
  constructor()
  {
    super() ;

    /** @type {() => IDtPureMesh} */
    this.asPure ;
    
  }
}




/**
 * 
 * @abstract
 */
export class IDtTxMaterial
{
  /** @protected */
  constructor() {}
}

/**
 * @typedef {ReadonlyArray<IDtTxMaterial> & { iMaterialListObjBrand ?: any ; } } IDtTxMaterialList
 * 
 * @deprecated
 */

/**
 * @typedef {{ allPhysiologicalMaterials(): IDtTxMaterialList } } DefinesGetAllPhysiologicalMaterials
 * 
 */




;

/**
 * @typedef {{ iPureObj3DBrand ?: any ; } } PureObj3D
 * 
 */

/**
 * @typedef {{ getEffectiveOuterSurface(): IDtColoredMesh } } DefinesToComputeEffectiveSurface
 * 
 */

/**
 * 
 * @abstract
 */
export class IDtVerticesEdgesFaces
{
  /** @protected */
  constructor()
  {}
}

/**
 * @typedef {{ iPolygonalObj3DBrand ?: any ; } & { getVerticesEdgesFaces(): IDtVerticesEdgesFaces ; } } PolygonalObj3D
 * 
 */

/**
 * @typedef {{ iObj3DBrand ?: any ; } & DefinesGetAllPhysiologicalMaterials & DefinesToComputeEffectiveSurface } TColoredObj3D
 * 
 */

;




/**
 * *material*-less {@link IDtColoredVolume }
 * 
 * @abstract
 */
export class IDtPureVolume {}

/**
 * 
 * @abstract
 */
export class IDtColoredVolume extends (
  // @ts-ignore
  /** @type {new () => (Object & TColoredObj3D ) } */
  (Object)
)
{
  /** @protected */
  constructor()
  {
    super() ;

    /** @type {() => IDtPureMesh} */
    this.asPure ;
    
  }
}









