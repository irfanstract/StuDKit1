











export const blobFromUtf = /** @type {(x: String, options?: { contentType ?: NonNullable<Blob["type"]> , } ) => Blob } */ (...[x, { contentType = "text/plain" } = {} ] ) => new Blob([x], { type: contentType, } ) ;














