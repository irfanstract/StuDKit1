import { brotliCompressSync, brotliDecompressSync, constants } from 'zlib';

/** @internal */
export const argPrefix = '--brotli-base64-config=';

/** @internal */
export function compress(object: any) {
  return brotliCompressSync(Buffer.from((

    /**
     * naïve `stringify` usage will `throw` due to circular structure;
     * needs this (temporary) ad-hoc interception to keep necessities working
     * 
     */
    JSON.stringify(object, function (this: unknown, key, value: unknown) {
      if (!((key === "" ) ) ) {
        ;
        try {
          JSON.stringify(value) ;
        } catch (z) {
          {
            ;
            console["error"](`[child/argv-payload/compress] failed to marshall item, skipping (${JSON.stringify({ key, }) }):`, String(z) ) ;
            return undefined ;
          }
        }
      }
      return value ;
    })
  ), 'utf8'), {
    [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MIN_QUALITY,
  }).toString('base64');
}

/** @internal */
export function decompress(str: string) {
  return JSON.parse(brotliDecompressSync(Buffer.from(str, 'base64')).toString());
}
