








import { throwTypeError } from "typexpe-commons/src/ThrowTypeError1.mjs";;

import {
  allocateKeyInternedObjectPool ,
} from 'typexpe-commons/src/ort.mjs';






;

const createInterningSubclass = (
  /**
   * 
   * @type {<T extends new (...x: any[]) => object ,>(...x: import("./eawo1.mjs").ArgsWithOptions<[impl: T, ], { computeArgsHash: NoInfer<(x: ConstructorParameters<T>) => (keyof any )>, }> ) => (T & (new (...x: ConstructorParameters<T>) => InstanceType<T> ) ) }
   * 
   */
  function (...[impl, { computeArgsHash: ser, }])
  {
    /** @typedef {typeof impl } */
    /** */
    const T1 = {} ;
    
    /** @typedef {ConstructorParameters<T1> } */
    /** */
    const argsT = {} ;

    /** @typedef {InstanceType<T1> } */
    /** */
    const RT1 = {} ;

    const epl = (
      allocateKeyInternedObjectPool({
        recreate: /** @satisfies {(x: { args: argsT, endLevelCallee: Function }) => RT1 } */ ({ args, endLevelCallee }) => {
          const o = Reflect.construct(impl , args, endLevelCallee ?? impl ) ;
          Object.freeze(o) ;
          return o ;
        } ,
      } , {
        convToCacheKey: x => (
          // TODO include 'newTarget'
          ser(x.args)
        ) ,
      } )
    ) ;

    const C1 = /** @param {ConstructorParameters<T1>} args */ function C1Impl(...args) {
      return epl.GET({ args, endLevelCallee: new.target, }) ;
    } ;
    C1.prototype = impl.prototype ;

    // @ts-ignore
    class C2 extends C1 {}

    // @ts-ignore
    return C2 ;
  }
) ;


export {
  createInterningSubclass,
} ;



;











