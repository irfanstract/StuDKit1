
// @ts-check







exports.create = () => (
  (/** @return {{ iawait?: () => void; } & { idone: () => void; isDone: () => Boolean, } } */ () => {
    ;

    const finflagBuf = new Int32Array(new SharedArrayBuffer(0x80 ) ) ;

    const i = 0 ;

    return {
      iawait: () => {
        for (; !(Atomics.wait(finflagBuf, i, 0, ) === "not-equal") ;)
          {}
      } ,
      idone: () => (
        finflagBuf.fill(1, 0, finflagBuf.length )
        ,
        Atomics.notify(finflagBuf, i )
      ) ,
      isDone: () => (
        !(finflagBuf[i] === 0 )
      ) ,
    } ;
  })()
) ;







