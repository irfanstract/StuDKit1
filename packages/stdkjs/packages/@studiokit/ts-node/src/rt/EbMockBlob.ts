






import {
  utilReiterated ,
} from "./util" ;



function toUint8Array(x: (Buffer | (Uint8Array | Uint8ClampedArray) ) )
: Uint8Array
{
  return new Uint8Array(x) ;
}



class MockBlob<dmmy1 = any, out XType extends string = string>
{

  readonly data: Buffer ;
  readonly type: XType;

  get size()
  { return this.data.length ; }

  bytesSync() { return new Uint8Array(this.data) ; }

  constructor(
    dataOrElems: (Buffer | (Uint8Array | Uint8ClampedArray) ) | readonly (Uint8Array | Buffer)[],
    typeOrOpts: XType | { readonly type: XType; } )
  {

    this.data = (

      Buffer.concat((
        utilReiterated(function* () {

          if (dataOrElems instanceof Buffer || dataOrElems instanceof Uint8Array || dataOrElems instanceof Uint8ClampedArray) {
            yield (
              toUint8Array(dataOrElems)
            ) ;
          }

          if (dataOrElems instanceof Array ) {
            yield* (
              dataOrElems.map(e => toUint8Array(e) )
            ) ;
          }

        })
      ))

    ) ;

    if (typeof typeOrOpts === "string") {
      this.type = typeOrOpts ;
    } else {
      this.type = typeOrOpts.type ;
    }

  }

  slice() {
    return (
      new MockBlob([this.bytesSync() ] , { type: this.type, } )
    ) ;
  }

  utf8DecodedSync() { return this.data.toString("utf8") ; }

  /* the remaining methods */

  arrayBuffer() { return Promise.resolve(new Uint8Array(this.bytesSync()).buffer ) ; }

  text() { return Promise.resolve(this.utf8DecodedSync() ) ; }

  stream() { return new (globalThis.Blob )([this.bytesSync() ]).stream() ; }

}






export {
  MockBlob ,
} ;







