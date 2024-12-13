






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

}






export {
  MockBlob ,
} ;







