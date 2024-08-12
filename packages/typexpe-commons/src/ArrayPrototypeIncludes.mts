















declare global {
  export interface ReadonlyArray<T> {
    includes<const ST>(searchElement: ST, fromIndex?: number): searchElement is (ST & T) ;
  }
  export interface Array<T> {
    includes<const ST>(searchElement: ST, fromIndex?: number): searchElement is (ST & T) ;
  }
}









