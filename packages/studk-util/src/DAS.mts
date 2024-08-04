











export type DeprecatedApplySignature<out T extends (...x: any[] ) => any > = (
  {
    /** @deprecated a deprecated signature. */
    (...x: Parameters<T> ): ReturnType<T> ;
  }
) ;

/* notice the difference in highlighting. */
{
  void (function (loadPackage: DeprecatedApplySignature<NodeRequire> ) {
    loadPackage("react") ;
  } ) ;
  void (function (loadPackage: ((...x: [nm: string, asTypeOnlyImport: boolean ] ) => object ) & DeprecatedApplySignature<NodeRequire> ) {
    loadPackage("react", true) ;
    loadPackage("react") ;
    loadPackage("react", true) ;
  } ) ;
}










