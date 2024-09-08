









import {
  assert ,
} from "./Assert.mjs";

export { assert } ;

export const throwTypeError = /** @satisfies {(...a: ConstructorParameters<typeof Error> ) => never } */ (...a) => { throw new TypeError(...a) ; } ;

export const throwAssertionError = /** @satisfies {(...a: ConstructorParameters<typeof Error> ) => never } */ (...a) => { throw new Error(...a) ; } ;










